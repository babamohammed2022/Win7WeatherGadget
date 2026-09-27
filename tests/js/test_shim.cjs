'use strict';
////////////////////////////////////////////////////////////////////////////////
// Unit tests for js/wlservices_shim.js (offline, using tests/fixtures).
//
// Covers: weather-code mapping, localized texts and their English fallback,
// COM-style lower-case aliases, location-code parsing, the requests sent to
// Open-Meteo / BigDataCloud, the result objects returned to the gadget and
// the error paths (network failure, HTTP errors, legacy MSN codes), and the
// recovery after a restart while the network is not ready yet (retries,
// watchdog, failure reporting that lets weather.js poll the service).
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const { createGadget, createRunner, fixture, fixtureResponder, NETWORK_THROWS, NETWORK_HANGS } = require('./helpers.cjs');

(async () => {
  const r = createRunner('wlservices_shim.js unit tests');

  // --- weather-code mapping -------------------------------------------------
  const g = createGadget();
  const wmo = [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99];
  const images = fs.readdirSync(path.join(g.dir, 'images')).map((f) => f.toLowerCase());
  let mapOk = true;
  const missingIcons = [];
  for (const code of wmo) {
    for (const isDay of [true, false]) {
      const sky = g.run('WLServicesShim._wmoToSkyCode(' + code + ', ' + isDay + ')');
      if (typeof sky !== 'number' || sky < 1 || sky > 47) mapOk = false;
      if (images.indexOf(sky + '.png') < 0) missingIcons.push(sky);
    }
  }
  r.check('every WMO code maps to an MSN SkyCode 1..47', mapOk);
  r.check('every mapped SkyCode has its icon images/N.png', missingIcons.length === 0, missingIcons.join(','));
  r.check('unknown WMO code falls back to "cloudy" (26)', g.run('WLServicesShim._wmoToSkyCode(1234, true)') === 26);
  r.check('clear sky: sun by day (32), moon at night (31)',
    g.run('WLServicesShim._wmoToSkyCode(0, true)') === 32 && g.run('WLServicesShim._wmoToSkyCode(0, false)') === 31);

  // Every SkyCode text key used by the shim exists in the English table.
  const keys = g.run('(function(){ var o=[]; for (var k in WLServicesShim._skyTextKeys) o.push("SkyText-" + WLServicesShim._skyTextKeys[k]); return o; })()');
  const missingKeys = keys.filter((k) => typeof g.sandbox.L_localizedStrings_Text[k] !== 'string');
  r.check('all SkyText-* keys used by the shim exist in localizedStrings.js', missingKeys.length === 0, missingKeys.join(','));

  // --- localized texts and English fallback --------------------------------
  const de = createGadget({ locale: 'de-DE' });
  r.check('condition text comes from the active language (de-DE)',
    de.run('WLServicesShim._skyTextBySkyCode(11)') === de.sandbox.L_localizedStrings_Text['SkyText-Rain'] &&
    de.run('WLServicesShim._skyTextBySkyCode(11)') !== 'Rain');
  r.check('day name comes from the active language (de-DE)', de.run('WLServicesShim._dayName(1)') === 'Montag');
  const noKey = createGadget({ locale: 'de-DE', strings: (t) => { delete t['SkyText-Rain']; delete t['Day-Monday']; } });
  r.check('missing condition key falls back to English', noKey.run('WLServicesShim._skyTextBySkyCode(11)') === 'Rain');
  r.check('missing day key falls back to English', noKey.run('WLServicesShim._dayName(1)') === 'Monday');
  const noTable = createGadget({ strings: () => {} });
  noTable.run('L_localizedStrings_Text = undefined;');
  r.check('shim still works without any string table', noTable.run('WLServicesShim._skyTextBySkyCode(32)') === 'Sunny');

  // --- COM aliases ---------------------------------------------------------
  r.check('comAliases adds lower-case aliases (data.count)',
    g.run('(function(){ var o = comAliases({ Count: 3, RetCode: 200 }); return o.count === 3 && o.retCode === 200 && o.Count === 3; })()'));
  r.check('comAliases does not overwrite existing properties',
    g.run('(function(){ var o = comAliases({ Count: 3, count: 9 }); return o.count === 9; })()'));

  // --- location codes ------------------------------------------------------
  r.check('parses "lat,lon|label|"', JSON.stringify(g.run('WLServicesShim._parseLocationCode("41.9028,12.4964|Roma, Italia|")')) ===
    JSON.stringify({ lat: 41.9028, lon: 12.4964, label: 'Roma, Italia' }));
  r.check('label defaults to the coordinates', g.run('WLServicesShim._parseLocationCode("41.9,12.5").label') === '41.90, 12.50');
  r.check('rejects MSN codes', g.run('WLServicesShim._parseLocationCode("wc:ITXX0067")') === null);

  // --- JSON without the JSON object (IE7 document mode of the Sidebar) ------
  const ie7 = createGadget();
  ie7.run('JSON = undefined; var __pwned = false;');
  ie7.sandbox.__json = '{"a":[1,-2.5e3,true,null,"x\\u00e8\\"y\\\\"],"b":{}}';
  ie7.sandbox.__json2028 = '{"a":"x\u2028y"}';
  r.check('IE7 mode: valid JSON is parsed without the JSON object',
    ie7.run('WLServicesShim._parseJson(__json).a[4]') === 'x\u00e8"y\\' && ie7.run('WLServicesShim._parseJson(__json).a[1]') === -2500);
  r.check('IE7 mode: U+2028 inside a string is accepted',
    ie7.run('WLServicesShim._parseJson(__json2028).a') === 'x\u2028y');
  let rejected = 0;
  for (const bad of ['{"a":(__pwned=true)}', '{"a":1};__pwned=true', 'alert(1)', '', '{"a":__pwned=true}']) {
    try { ie7.run('WLServicesShim._parseJson(' + JSON.stringify(bad) + ')'); } catch (e) { rejected++; }
  }
  r.check('IE7 mode: anything that is not JSON is rejected, never run', rejected === 5 && ie7.run('__pwned') === false);
  const ie7res = await ie7.search('SearchByCode', '41.9028,12.4964|Roma|');
  r.check('IE7 mode: forecast shown without the JSON object', ie7res.RetCode === 200 && ie7res.item(0).Location === 'Roma');

  // --- SearchByCode --------------------------------------------------------
  const fc = JSON.parse(fixture('open-meteo-forecast.json'));
  const it = createGadget({ locale: 'it-IT' });
  const res = await it.search('SearchByCode', '41.9028,12.4964|Roma, Italia|');
  const url = it.requests[0].url;
  r.check('SearchByCode requests Fahrenheit (the gadget converts to Celsius itself)', /temperature_unit=fahrenheit/.test(url), url);
  r.check('SearchByCode sends the coordinates', /latitude=41\.9028&longitude=12\.4964/.test(url), url);
  r.check('SearchByCode sets the User-Agent', it.requests[0].headers['User-Agent'] === 'Windows-Gadget-Meteo');
  r.check('result: RetCode 200, Count 1, lower-case aliases', res.RetCode === 200 && res.Count === 1 && res.count === 1);
  const item = res.item(0);
  r.check('item: location label kept', item.Location === 'Roma, Italia', item.Location);
  r.check('item: current temperature (rounded, Fahrenheit)', item.Temperature === Math.round(fc.current.temperature_2m), item.Temperature);
  r.check('item: condition text localized (it-IT)', item.SkyText === it.run('WLServicesShim._skyTextBySkyCode(' + item.SkyCode + ')') &&
    item.SkyText === it.sandbox.L_localizedStrings_Text['SkyText-' + it.run('WLServicesShim._skyTextKeys[' + item.SkyCode + ']')], item.SkyText);
  r.check('item: night-time SkyCode when is_day = 0', fc.current.is_day === 0 ? item.SkyCode === it.run('WLServicesShim._wmoToSkyCode(' + fc.current.weather_code + ', false)') : true);
  r.check('item: localized attribution', item.Attribution2 === it.sandbox.L_localizedStrings_Text['Attribution']);
  r.check('item: 5 forecasts via Forecast(n) and ForeCast(n)', item.Forecast(4) && item.ForeCast(0) === item.Forecast(0));
  const f0 = item.Forecast(0);
  r.check('forecast: high/low rounded', f0.High === Math.round(fc.daily.temperature_2m_max[0]) && f0.Low === Math.round(fc.daily.temperature_2m_min[0]));
  const expectedDay = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'][new Date(fc.daily.time[0] + 'T12:00:00').getDay()];
  r.check('forecast: localized day name (it-IT)', f0.Day === expectedDay, f0.Day + ' vs ' + expectedDay);
  r.check('forecast: lower-case aliases (high, low, skyCode)', f0.high === f0.High && f0.skyCode === f0.SkyCode);

  const legacy = createGadget({ locale: 'de-DE' });
  const lres = await legacy.search('SearchByCode', 'wc:GMXX0007');
  r.check('legacy MSN code falls back to the localized default location', /latitude=52\.52&longitude=13\.405/.test(legacy.requests[0].url) &&
    lres.item(0).Location === 'Berlin', legacy.requests[0].url);

  // --- network failures, retries and recovery ------------------------------
  // The timers of the sandbox run on a virtual clock (helpers.cjs advance()).
  const C = legacy.run('({ report: WLServicesShim.REPORT_FAILURE_AFTER_MS, background: WLServicesShim.BACKGROUND_RETRY_MS,' +
    ' timeout: WLServicesShim.REQUEST_TIMEOUT_MS, unavailable: WLServicesShim.RETCODE_UNAVAILABLE })');
  r.check('failure code is not 1506/1507/200 (weather.js only polls for other codes)',
    [200, 1506, 1507].indexOf(C.unavailable) < 0, C.unavailable);

  // Starts SearchByCode on a new shim object and records every OnDataReady call.
  function start(gadget, code) {
    gadget.useVirtualClock();
    gadget.run('var __calls = []; var __shim = new WLServicesShim().GetService("weather");' +
      ' __shim.OnDataReady = function (d) { __calls.push(d); }; __shim.SearchByCode(' + JSON.stringify(code) + ');');
    return () => gadget.run('__calls');
  }
  function forecastRequests(gadget) { return gadget.requests.filter((q) => /api\.open-meteo\.com/.test(q.url)).length; }

  const down = createGadget({ responder: () => null });
  const downCalls = start(down, '41.9,12.5|Roma');
  await down.advance(C.report - 1000);
  r.check('network down: no answer yet, the shim keeps retrying (gadget shows "Getting data...")',
    downCalls().length === 0 && forecastRequests(down) > 5, forecastRequests(down));
  await down.advance(C.background);
  const dres = downCalls()[0];
  r.check('network down: failure reported after the retry window, not 1506',
    downCalls().length === 1 && dres.RetCode === C.unavailable && dres.Count === 0 && dres.count === 0);
  r.check('network failure is logged in English', /failed to retrieve weather data/.test(down.debug.join('\n')));
  r.check('network down: a background retry stays scheduled', down.pendingTimers().some((t) => !t.repeat && t.ms === C.background));
  down.run('__shim.SearchByCode("41.9,12.5|Roma")');
  await down.advance(0);
  r.check('once the failure is known, a new request (gadget polling) is answered at once',
    downCalls().length === 2 && downCalls()[1].RetCode === C.unavailable, downCalls().length);

  const boot = createGadget({ responder: (u) => (boot.now() < 20000 ? null : fixtureResponder(u)) });
  const bootCalls = start(boot, '41.9,12.5|Roma');
  await boot.advance(40000);
  r.check('network ready 20 s after start (reboot): weather delivered without any error',
    bootCalls().length === 1 && bootCalls()[0].RetCode === 200 && bootCalls()[0].item(0).Location === 'Roma',
    JSON.stringify(bootCalls().map((d) => d.RetCode)));
  r.check('after success no retry is left pending', !boot.pendingTimers().some((t) => !t.repeat && t.ms !== C.timeout));

  const late = createGadget({ responder: (u) => (late.now() < C.report + 30000 ? null : fixtureResponder(u)) });
  const lateCalls = start(late, '41.9,12.5|Roma');
  await late.advance(C.report + 30000 + C.background + 1000);
  r.check('network back after the error was shown: the background retry delivers the weather',
    lateCalls().length === 2 && lateCalls()[0].RetCode === C.unavailable && lateCalls()[1].RetCode === 200,
    JSON.stringify(lateCalls().map((d) => d.RetCode)));

  const throws = createGadget({ responder: () => NETWORK_THROWS });
  const throwsCalls = start(throws, '41.9,12.5|Roma');
  await throws.advance(C.report + C.background);
  r.check('reading .status throws (MSXML, host not resolved): reported as a failure, never stuck',
    throwsCalls().length >= 1 && throwsCalls()[0].RetCode === C.unavailable);

  const hangs = createGadget({ responder: () => NETWORK_HANGS });
  const hangsCalls = start(hangs, '41.9,12.5|Roma');
  await hangs.advance(C.timeout - 1);
  const beforeWatchdog = hangs.requests.length;
  await hangs.advance(C.report + C.background);
  r.check('request that never completes: the watchdog aborts it and the shim retries',
    beforeWatchdog === 1 && hangs.requests.length > 1 && hangsCalls().length >= 1 && hangsCalls()[0].RetCode === C.unavailable,
    beforeWatchdog + ' / ' + hangs.requests.length);

  const bad = createGadget({ responder: (u) => ({ status: 200, body: '{"error":true,"reason":"x"}' }) });
  const badCalls = start(bad, '41.9,12.5|Roma');
  await bad.advance(0);
  r.check('API error payload -> failure reported at once, no automatic retries',
    badCalls().length === 1 && badCalls()[0].RetCode === C.unavailable && forecastRequests(bad) === 1);
  const http500 = createGadget({ responder: () => ({ status: 500, body: '' }) });
  const hCalls = start(http500, '41.9,12.5|Roma');
  await http500.advance(C.report + C.background);
  r.check('HTTP 500 -> every XMLHTTP ProgID tried, retried, then reported',
    hCalls().length >= 1 && hCalls()[0].RetCode === C.unavailable && http500.requests.length >= 10, http500.requests.length);

  const newer = createGadget({ responder: (u) => (newer.now() < 10000 ? null : fixtureResponder(u)) });
  newer.useVirtualClock();
  newer.run('var __calls = []; var __shim = new WLServicesShim().GetService("weather");' +
    ' __shim.OnDataReady = function (d) { __calls.push(d); }; __shim.SearchByCode("41.9,12.5|Roma");');
  await newer.advance(1000);
  newer.run('__shim.SearchByCode("45.46,9.19|Milano");');
  await newer.advance(30000);
  const newerCalls = newer.run('__calls');
  r.check('a newer request replaces the pending one (only the latest location is delivered)',
    newerCalls.length === 1 && newerCalls[0].item(0).Location === 'Milano', JSON.stringify(newerCalls.map((d) => d.item(0) && d.item(0).Location)));

  r.check('apostrophes in location names become typographic (weather.js polling string stays valid)',
    g.run('WLServicesShim._safeLabel("L\'Aquila, Abruzzo")') === 'L\u2019Aquila, Abruzzo');

  // --- SearchByLocation ----------------------------------------------------
  const geo = createGadget({ locale: 'it-IT' });
  const gres = await geo.search('SearchByLocation', encodeURIComponent('Milano'));
  r.check('geocoding uses the language of the gadget (it)', /language=it&/.test(geo.requests[0].url) && /name=Milano/.test(geo.requests[0].url), geo.requests[0].url);
  r.check('geocoding returns the results with data.count alias', gres.Count > 0 && gres.count === gres.Count, gres.Count);
  const first = gres.item(0);
  r.check('result: "name, region, country" label and lat,lon code',
    first.Location === 'Milano, Lombardia, Italia' && first.LocationCode === '45.4643,9.1895' && first.ZipCode === first.Location,
    first.Location + ' [' + first.LocationCode + ']');
  const empty = await createGadget().search('SearchByLocation', 'Xqzvbnmw');
  r.check('no results -> RetCode 200, Count 0', empty.RetCode === 200 && empty.Count === 0);
  const zh = createGadget({ locale: 'zh-TW' });
  await zh.search('SearchByLocation', 'Taipei');
  r.check('geocoding language for zh-TW is "zh"', /language=zh&/.test(zh.requests[0].url), zh.requests[0].url);

  const rev = createGadget({ locale: 'fr-FR' });
  const rres = await rev.search('SearchByLocation', '48.8566, 2.3522');
  r.check('reverse geocoding uses BigDataCloud with the gadget language (fr)',
    /api\.bigdatacloud\.net/.test(rev.requests[0].url) && /localityLanguage=fr$/.test(rev.requests[0].url), rev.requests[0].url);
  // The code carries the name: weather.js saves it as it is (Windows 7
  // location sensor), unlike settings.js, which appends ZipCode.
  r.check('reverse geocoding returns the city, with the name in the code',
    rres.item(0).Location === 'Paris' && rres.item(0).LocationCode === '48.8566,2.3522|Paris', rres.item(0).LocationCode);
  const revDown = createGadget({ responder: () => null });
  const rdres = await revDown.search('SearchByLocation', '48.8566, 2.3522');
  r.check('reverse geocoding failure -> service unavailable (not 1506)', rdres.RetCode === C.unavailable && rdres.Count === 0);
  const quote = createGadget({ responder: () => ({ status: 200, body: JSON.stringify({ results: [{ name: "L'Aquila", admin1: 'Abruzzo', country: 'Italia', latitude: 42.35, longitude: 13.4 }] }) }) });
  const qres = await quote.search('SearchByLocation', 'Aquila');
  r.check('search result with an apostrophe: saved code has no plain apostrophe',
    (qres.item(0).LocationCode + '|' + qres.item(0).ZipCode).indexOf("'") < 0 && qres.item(0).Location === 'L\u2019Aquila, Abruzzo, Italia',
    qres.item(0).Location);

  // --- incomplete answers and errors in the gadget's callback ---------------
  // Valid JSON without the expected fields must still end in a result for the
  // gadget (otherwise it would wait forever on "Getting data...").
  const partial = createGadget({ responder: () => ({ status: 200, body: JSON.stringify({ daily: { time: ['2026-09-27'] } }) }) });
  const partialCalls = start(partial, '41.9,12.5|Roma');
  await partial.advance(0);
  r.check('forecast answer without temperatures -> failure result, no exception',
    partialCalls().length === 1 && partialCalls()[0].RetCode === C.unavailable && partial.scriptErrors.length === 0,
    JSON.stringify(partialCalls().map((d) => d.RetCode)) + ' ' + partial.scriptErrors.join(';'));

  // An exception thrown by OnDataReady is still reported (from a timer, like
  // IE does) but the shim finishes its own work first: retries go on.
  const throwing = createGadget({ responder: () => null });
  throwing.useVirtualClock();
  throwing.run('var __n = 0; var __shim = new WLServicesShim().GetService("weather");' +
    ' __shim.OnDataReady = function (d) { __n++; throw new Error("boom in OnDataReady"); }; __shim.SearchByCode("41.9,12.5|Roma");');
  await throwing.advance(C.report + C.background);
  r.check('OnDataReady throws: the error is still reported',
    throwing.run('__n') >= 1 && throwing.scriptErrors.some((e) => /boom in OnDataReady/.test(e && e.message)),
    throwing.scriptErrors.join(';'));
  r.check('OnDataReady throws: the background retry stays scheduled',
    throwing.pendingTimers().some((t) => !t.repeat && t.ms === C.background));

  const okThrow = createGadget();
  okThrow.useVirtualClock();
  okThrow.run('var __n = 0; var __shim = new WLServicesShim().GetService("weather");' +
    ' __shim.OnDataReady = function (d) { __n++; throw new Error("boom after data"); }; __shim.SearchByCode("41.9,12.5|Roma");');
  await okThrow.advance(0);
  r.check('OnDataReady throws on success: called once, error reported, shim state is "available"',
    okThrow.run('__n') === 1 && okThrow.run('__shim._unavailable') === false &&
    okThrow.scriptErrors.length === 1 && /boom after data/.test(okThrow.scriptErrors[0].message));

  const noCoords = createGadget({ responder: () => ({ status: 200, body: JSON.stringify({ results: [{ name: 'Nowhere' }] }) }) });
  const ncres = await noCoords.search('SearchByLocation', 'Nowhere');
  r.check('geocoding result without coordinates -> service unavailable, no exception',
    ncres.RetCode === C.unavailable && ncres.Count === 0 && noCoords.scriptErrors.length === 0);
  const revNull = createGadget({ responder: () => ({ status: 200, body: 'null' }) });
  const rnres = await revNull.search('SearchByLocation', '48.8566, 2.3522');
  r.check('reverse geocoding answer "null" -> service unavailable, no exception',
    rnres.RetCode === C.unavailable && revNull.scriptErrors.length === 0);

  r.done();
})().catch((e) => { console.error(e); process.exit(1); });
