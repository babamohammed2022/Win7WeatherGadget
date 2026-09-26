'use strict';
////////////////////////////////////////////////////////////////////////////////
// Integration test: runs the REAL gadget pages in a simulated Sidebar.
//
// weather.html flow, for each of the 20 languages:
//   localizedStrings.js (locale folder, as the Sidebar picks it) + library.js
//   + wlservices_shim.js + weather.js -> setup() -> SearchByCode -> OnDataReady
//   -> DOM updated (location, temperature, condition, background, icons).
// VBScript (vbsGetLocale) and the Windows 7 location sensor are deliberately
// unavailable, as on Windows 10/11, to exercise the porting patches.
//
// settings.html flow (English and Italian): setup() -> doSearch() ->
// SearchByLocation -> doDisplayPlacePossibilities() builds the result list
// with Microsoft's own "for (i = 0; i < data.count; i++)" loop.
//
// Offline by default (tests/fixtures). With --online the English and Italian
// flows use real HTTPS requests to Open-Meteo.
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const { createGadget, createRunner, onlineResponder, LOCALES, fixture } = require('./helpers.cjs');

const ONLINE = process.argv.indexOf('--online') >= 0;
const WEATHER_SCRIPTS = ['js/library.js', 'js/wlservices_shim.js', 'js/weather.js'];
const SETTINGS_SCRIPTS = ['js/library.js', 'js/wlservices_shim.js', 'js/settings.js'];

function wait(ms) { return new Promise((res) => setTimeout(res, ms)); }

async function waitFor(fn, timeoutMs) {
  const end = Date.now() + timeoutMs;
  while (Date.now() < end) {
    if (fn()) return true;
    await wait(20);
  }
  return false;
}

function gadgetOptions(locale, scripts, html, globals) {
  const o = { locale, scripts, html, globals };
  if (ONLINE) { o.async = true; o.responder = onlineResponder; }
  return o;
}

// lcid: Windows locale returned by vbsGetLocale(), or undefined when VBScript
// is not available (Windows 11 24H2 default).
async function weatherFlow(r, locale, lcid, expectedUnit) {
  const globals = lcid === undefined ? {} : { vbsGetLocale: () => lcid };
  const g = createGadget(gadgetOptions(locale, WEATHER_SCRIPTS, 'weather.html', globals));
  const label = locale + (lcid === undefined ? ' (no VBScript)' : ' (LCID ' + lcid + ')');
  const T = g.sandbox.L_localizedStrings_Text;
  try {
    g.run('setup()');
  } catch (e) {
    r.check(label + ': setup() runs without exceptions', false, e.message);
    return;
  }
  const st = g.run('({ valid: MicrosoftGadget.isValid, loc: MicrosoftGadget.weatherLocation, code: MicrosoftGadget.weatherLocationCode, unit: MicrosoftGadget.displayDegreesIn })');
  const received = await waitFor(() => g.run('!!MicrosoftGadget.oMSNWeatherService'), ONLINE ? 30000 : 5000);
  const dom = g.run(`(function(){
    function t(id){ var e=document.getElementById(id); return e ? String(e.innerText||e.innerHTML||e.value||'') : ''; }
    var icons=[]; for (var i=0;i<5;i++){ var e=document.getElementById('SkyCodeImage'+i); if(e && e.src) icons.push(String(e.src)); }
    return { place: t('PlaceHrefDockedMode'), temp: t('TemperatureCurrent'), cond: t('ConditionCurrentUnDockedMode'),
             attribution: t('Attribution'), bg: String(document.getElementById('WeatherBG').src || ''), icons: icons,
             status: MicrosoftGadget.status };
  })()`);

  const ok = st.valid === true && received && dom.status === 200 &&
    st.loc === T['DefaultCity'] && st.code === T['DefaultLocationCode'] && st.unit === expectedUnit &&
    dom.place.length > 0 && /-?\d+°/.test(dom.temp) && dom.cond.length > 0 && dom.attribution === T['Attribution'];
  r.check(label + ': setup, default city "' + st.loc + '", ' + st.unit + ', data shown',
    ok, JSON.stringify({ st, received, dom }));

  // The condition text must come from this language's table.
  const skyTexts = Object.keys(T).filter((k) => k.indexOf('SkyText-') === 0).map((k) => T[k]);
  r.check(label + ': condition text is localized ("' + dom.cond + '")', skyTexts.indexOf(dom.cond) >= 0);

  // Background and icons exist (case-insensitive: Microsoft's code builds
  // "moon-Full.png" while the file is "moon-full.png"; NTFS does not care).
  const images = fs.readdirSync(path.join(g.dir, 'images')).map((f) => f.toLowerCase());
  const bg = /images\/((docked|undocked)_[A-Za-z]+_[A-Za-z-]+\.png)/.exec(dom.bg);
  const missing = dom.icons.map((s) => (/images\/(\d+\.png)/.exec(s) || [])[1]).filter((f) => !f || images.indexOf(f) < 0);
  r.check(label + ': background and forecast icons exist', bg && images.indexOf(bg[1].toLowerCase()) >= 0 && missing.length === 0,
    dom.bg + ' ' + dom.icons.join(','));

  // Temperature conversion is Microsoft's (the service returns Fahrenheit).
  const conv = g.run(`(function(){ var f = MicrosoftGadget.oMSNWeatherService.Temperature;
    return { f: f, shown: document.getElementById('TemperatureCurrent').innerText }; })()`);
  const expected = st.unit === 'Celsius' ? Math.round((conv.f - 32) * 5 / 9) : conv.f;
  r.check(label + ': temperature shown in ' + st.unit, String(conv.shown).indexOf(String(expected)) === 0, JSON.stringify(conv));
  r.check(label + ': refresh timer scheduled', g.run('MicrosoftGadget.refreshInterval') > 0);
}

async function settingsFlow(r, locale, query) {
  const label = locale + ' settings';
  const g = createGadget(gadgetOptions(locale, SETTINGS_SCRIPTS, 'settings.html'));
  try {
    g.run('setup()');
  } catch (e) {
    r.check(label + ': settings setup() runs without exceptions', false, e.message);
    return;
  }
  r.check(label + ': settings labels localized', g.document.getElementById('LabelSelectLocation').innerHTML ===
    g.sandbox.L_localizedStrings_Text['SelectLocation']);
  g.document.getElementById('txtInputPlace').value = query;
  g.run('doSearch()');
  const list = await waitFor(() => g.document.getElementById('PlacePossibilities').children.length > 0, ONLINE ? 30000 : 5000);
  const select = list ? g.document.getElementById('PlacePossibilities').children[0] : null;
  const expected = ONLINE ? null : JSON.parse(fixture('open-meteo-geocoding.json')).results.length;
  r.check(label + ': search "' + query + '" fills the result list (data.count loop)',
    select && select.children.length > 1 && (expected === null || select.children.length === expected),
    select ? select.children.length : 'no list');
  if (select) {
    const v = select.children[0].value;
    r.check(label + ': option value is "lat,lon|label"', /^-?\d+\.\d+,-?\d+\.\d+\|.+/.test(v), v);
  }
}

(async () => {
  const r = createRunner('Gadget integration (' + (ONLINE ? 'online' : 'offline fixtures') + ')');
  // Without VBScript, weather.js keeps its built-in default unit (Celsius);
  // this is Microsoft's code, unchanged (see the known issues in README.md).
  for (const loc of (ONLINE ? ['en-US', 'it-IT'] : LOCALES)) await weatherFlow(r, loc, undefined, 'Celsius');
  // With VBScript, the unit comes from Microsoft's LCID table and the MSN
  // location code of that table is replaced by the localized default location.
  await weatherFlow(r, 'en-US', 1033, 'Fahrenheit');
  await weatherFlow(r, 'it-IT', 1040, 'Celsius');
  await weatherFlow(r, 'de-DE', 1031, 'Celsius');
  await settingsFlow(r, 'en-US', 'Milano');
  await settingsFlow(r, 'it-IT', 'Milano');
  r.done();
})().catch((e) => { console.error(e); process.exit(1); });
