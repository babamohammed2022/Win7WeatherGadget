'use strict';
////////////////////////////////////////////////////////////////////////////////
// Localization tests with real JavaScript semantics.
//
// Each localizedStrings.js is executed in a sandbox (as the Sidebar does) and
// compared with the English master:
//   * the same keys, all non-empty strings;
//   * LOCNAME_ARRAY has the same length as the English one (weather.js indexes
//     it with the positions of LCID_ARRAY from library.js);
//   * Day-* names are all different, SkyText-* values are non-empty;
//   * getLocalizedString() (library.js) falls back to the key name;
//   * the Sidebar folder lookup (full locale -> language -> root) resolves the
//     20 supported languages to their own folder and anything else to English.
// scripts/check_localization.py performs the static checks (placeholders,
// forbidden characters, manifests) and is run by the build.
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { gadgetDir, readText, createRunner, createGadget, LOCALES, ROOT_LOCALE } = require('./helpers.cjs');

const r = createRunner('Localization (runtime)');
const dir = gadgetDir();

function load(locale) {
  const file = locale === ROOT_LOCALE ? path.join(dir, 'js', 'localizedStrings.js')
    : path.join(dir, locale, 'js', 'localizedStrings.js');
  const ctx = vm.createContext({});
  vm.runInContext(readText(file), ctx, { filename: file });
  return { strings: ctx.L_localizedStrings_Text, locnames: ctx.LOCNAME_ARRAY };
}

// Sidebar asset lookup for a Windows display language.
function sidebarLookup(uiLanguage, relPath) {
  const lang = uiLanguage.split('-')[0];
  for (const candidate of [path.join(dir, uiLanguage, relPath), path.join(dir, lang, relPath), path.join(dir, relPath)]) {
    if (fs.existsSync(candidate)) return path.relative(dir, candidate).replace(/\\/g, '/');
  }
  return null;
}

const en = load(ROOT_LOCALE);
const enKeys = Object.keys(en.strings);
r.check('English master defines 80 keys', enKeys.length === 80, enKeys.length);
r.check('exactly 20 supported languages', LOCALES.length === 20);

for (const loc of LOCALES) {
  const t = load(loc);
  const keys = Object.keys(t.strings);
  const missing = enKeys.filter((k) => !(k in t.strings));
  const extra = keys.filter((k) => enKeys.indexOf(k) < 0);
  const empty = keys.filter((k) => typeof t.strings[k] !== 'string' || t.strings[k].trim() === '');
  r.check(loc + ': all ' + enKeys.length + ' keys present, none empty', !missing.length && !extra.length && !empty.length,
    'missing=' + missing + ' extra=' + extra + ' empty=' + empty);
  r.check(loc + ': LOCNAME_ARRAY length matches English (' + en.locnames.length + ')',
    Array.isArray(t.locnames) && t.locnames.length === en.locnames.length, t.locnames && t.locnames.length);
  const days = keys.filter((k) => k.indexOf('Day-') === 0).map((k) => t.strings[k]);
  r.check(loc + ': 7 distinct day names', days.length === 7 && new Set(days).size === 7, days.join(','));
  if (loc !== ROOT_LOCALE) {
    const same = ['GettingData', 'SelectLocation', 'Automatically', 'CurrentLocation', 'SkyText-Rain', 'SkyText-Cloudy']
      .filter((k) => t.strings[k] === en.strings[k]);
    r.check(loc + ': texts are translated (not English copies)', same.length === 0, same.join(','));
  }
}

// getLocalizedString() fallback (library.js, Microsoft code)
const g = createGadget({ scripts: ['js/library.js'] });
r.check('getLocalizedString returns the text for a known key', g.run("getLocalizedString('GettingData')") === en.strings.GettingData);
r.check('getLocalizedString falls back to the key name for an unknown key', g.run("getLocalizedString('NoSuchKey')") === 'NoSuchKey');

// Sidebar folder lookup
for (const loc of LOCALES) {
  const expected = loc === ROOT_LOCALE ? 'js/localizedStrings.js' : loc + '/js/localizedStrings.js';
  r.check('Windows language ' + loc + ' -> ' + expected, sidebarLookup(loc, 'js/localizedStrings.js') === expected);
}
for (const other of ['en-GB', 'de-AT', 'fr-CA', 'pt-PT', 'es-MX', 'ar-SA', 'xx-YY']) {
  r.check('Windows language ' + other + ' -> English fallback', sidebarLookup(other, 'js/localizedStrings.js') === 'js/localizedStrings.js');
}
r.check('shared files (weather.js) always come from the root', sidebarLookup('ja-JP', 'js/weather.js') === 'js/weather.js');

r.done();
