'use strict';
////////////////////////////////////////////////////////////////////////////////
// Unit tests for js/wlservices_shim.js (offline, using tests/fixtures).
//
// Covers: weather-code mapping, localized texts and their English fallback,
// COM-style lower-case aliases, location-code parsing, the requests sent to
// Open-Meteo / BigDataCloud, the result objects returned to the gadget and
// the error paths (network failure, HTTP errors, legacy MSN codes).
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const { createGadget, createRunner, fixture } = require('./helpers.cjs');

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

  const down = createGadget({ responder: () => null });
  const dres = await down.search('SearchByCode', '41.9,12.5|Roma');
  r.check('network failure -> RetCode 1506 (the gadget shows "service not available")', dres.RetCode === 1506 && dres.Count === 0);
  r.check('network failure is logged in English', /failed to retrieve weather data/.test(down.debug.join('\n')));
  const bad = createGadget({ responder: (u) => ({ status: 200, body: '{"error":true,"reason":"x"}' }) });
  const bres = await bad.search('SearchByCode', '41.9,12.5|Roma');
  r.check('API error payload -> RetCode 1506', bres.RetCode === 1506);
  const http500 = createGadget({ responder: () => ({ status: 500, body: '' }) });
  const hres = await http500.search('SearchByCode', '41.9,12.5|Roma');
  r.check('HTTP 500 -> RetCode 1506 after trying all XMLHTTP ProgIDs', hres.RetCode === 1506 && http500.requests.length >= 2, http500.requests.length);

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
  r.check('reverse geocoding returns the city', rres.item(0).Location === 'Paris' && rres.item(0).LocationCode === '48.8566,2.3522');
  const revDown = createGadget({ responder: () => null });
  const rdres = await revDown.search('SearchByLocation', '48.8566, 2.3522');
  r.check('reverse geocoding failure -> RetCode 1506', rdres.RetCode === 1506 && rdres.Count === 0);

  r.done();
})().catch((e) => { console.error(e); process.exit(1); });
