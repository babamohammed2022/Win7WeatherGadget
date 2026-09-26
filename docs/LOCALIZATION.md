# Localization

The project has two independent sets of languages:

| | Languages | Files |
|---|---|---|
| **Gadget interface** | 20 | `src/Weather.gadget/js/localizedStrings.js` (English) and `src/Weather.gadget/<ll-CC>/` |
| **Installer wizard** | 78 | `installer/Languages/*.isl` (Inno Setup) and `installer/Languages/Custom/*.isl` (this installer's own messages, 20 languages) |

## How the gadget picks its language

The gadget runtime (the "sidebar") loads each file from the first location that
exists, based on the **Windows display language**:

1. `<full language tag>/`: for example `de-DE/js/localizedStrings.js`;
2. `<language>/`: for example `de/` (not used by this project);
3. the gadget root: English.

Only `gadget.xml` and `js/localizedStrings.js` are localized; every other file
comes from the root. So:

- the 20 supported languages use their own folder;
- every other Windows language, and regional variants such as `en-GB`,
  `de-AT`, `fr-CA`, `pt-PT` or `es-MX`, uses English.

The strings are read with `getLocalizedString(key)` (Microsoft's `library.js`),
which returns the key itself if it is missing. The shim uses its own English
fallback for the keys it reads.

Separately, `weather.js` uses the Windows locale ID (through the VBScript
function `vbsGetLocale()`) to choose the default city and temperature unit from
Microsoft's tables. When VBScript is unavailable, the default city comes from
`DefaultCity` / `DefaultLocationCode` of the active language and the unit stays
Celsius (see the known issues in the README).

## Supported gadget languages

| Folder | Language | Notes |
|---|---|---|
| (root) | English (United States) | master file and fallback; Microsoft's strings plus the new keys; `DefaultUnit` = Fahrenheit |
| `it-IT` | Italian | Microsoft's Italian strings from the source archive, completed |
| `de-DE` | German | new |
| `fr-FR` | French | new |
| `es-ES` | Spanish (Spain) | new |
| `pt-BR` | Portuguese (Brazil) | new |
| `nl-NL` | Dutch | new |
| `pl-PL` | Polish | new |
| `ru-RU` | Russian | new |
| `ja-JP` | Japanese | new |
| `ko-KR` | Korean | new |
| `zh-CN` | Chinese (Simplified) | new |
| `zh-TW` | Chinese (Traditional) | new; API language `zh` (geocoding) / `zh-Hant` (reverse geocoding, returns Traditional characters) |
| `tr-TR` | Turkish | new |
| `sv-SE` | Swedish | new |
| `nb-NO` | Norwegian Bokmål | new; API language `no` (geocoding) / `nb` (reverse geocoding) |
| `da-DK` | Danish | new |
| `fi-FI` | Finnish | new |
| `cs-CZ` | Czech | new |
| `hu-HU` | Hungarian | new |

The new translations were written for this project. Native-speaker review is welcome.

## The keys

`js/localizedStrings.js` defines `L_localizedStrings_Text[key]` (80 keys) and
`LOCNAME_ARRAY`. Groups:

| Keys | Used by | Notes |
|---|---|---|
| `DefaultCity`, `DefaultLocationCode`, `DefaultUnit` | weather.js, settings.js, shim | `DefaultLocationCode` = `latitude,longitude|label`; `DefaultUnit` = exactly `Celsius` or `Fahrenheit` (not translated) |
| gadget messages (`GettingData`, `ServiceNotAvailable`, …) | weather.js | several are inserted with `innerHTML` |
| settings dialog (`SelectLocation`, `Automatically`, `Celsius`, …) | settings.js | |
| age stamp (`ageStampMessage` = `%1 %2 ago`, `min`, `hr`, `hrs`, `day`, `days`) | weather.js | `%1` = number, `%2` = unit; the order can change (`vor %1 %2`) |
| `SearchedLocationFoundClickOK` | settings.js | `%1` = city; `\n` is a line break |
| `HelperArticleLink`, `HelperArticleLinkText` | settings.js | Microsoft's privacy link, kept |
| `GeocodingLanguage`, `ReverseGeocodingLanguage` | shim | **API parameters**, not display text: the language code sent to Open-Meteo geocoding and BigDataCloud |
| `Attribution`, `CurrentLocation` | shim | data-source label; name used when reverse geocoding finds no city |
| `Day-Sunday` … `Day-Saturday` | shim | forecast day names (full names, as MSN returned them) |
| `SkyText-*` (20) | shim | weather conditions |

Some keys are no longer used by the code (`NoResults`, `EC1`, `Refresh`,
`ConnectToInternetToGetData`) but are kept and translated, so that the
files stay complete and compatible with Microsoft's.

`LOCNAME_ARRAY` holds the localized default-city names for each entry of
Microsoft's `LCID_ARRAY` (in `library.js`). It must have the same number of
entries as the English one; its content is Microsoft's and is the same in
every language.

## Rules checked by the build

`scripts/check_localization.py` runs during every build and in CI. It fails on:

- a missing, duplicate or unknown key (compared with the English master);
- an empty value;
- placeholders (`%1`, `%2`) that differ from English;
- `<`, `>` or `&` in any value (many strings go through `innerHTML`);
- an invalid `DefaultUnit`, `DefaultLocationCode` or API language code;
- a missing `LOCNAME_ARRAY`;
- a missing or malformed `gadget.xml`, or one that differs from the English
  manifest outside `<name>` and `<description>`;
- an unexpected locale folder;
- an installer custom-message file without all the keys of `Custom/English.isl`.

The Node.js tests (`tests/js/test_localization.cjs`) also run each file as
JavaScript and check key parity, `LOCNAME_ARRAY` length, distinct day names,
that texts are actually translated, and the folder lookup.

## File format

- Repository: UTF-8 **without** BOM, LF line endings. The build converts to
  UTF-16LE with BOM and CRLF (the original gadget's format).
- One definition per line: `L_localizedStrings_Text['Key'] = 'text';`
- Single quotes; escape `'` as `\'`. Use `\n` for a line break.
- Keep the key order of the English file.

## Adding or correcting a translation

1. Edit `src/Weather.gadget/<ll-CC>/js/localizedStrings.js` (and
   `<ll-CC>/gadget.xml` for the gadget name/description).
2. Keep the texts short: the gadget is small. The longest texts are the
   condition (up to about 30 characters fit on one line in the large view) and
   the day names (one column each in the large view).
3. Run `python scripts/check_localization.py` and `npm test`.

To add a **new language**, also add it to `LOCALES` in
`scripts/check_localization.py`, `scripts/build.py`, `tests/js/helpers.cjs`
and `tests/test_repository.py`, and to the table in `README.md`. To add a
**new key**, add it to the English file first, then to all 19 other files: the
check fails until every language has it.

## Installer messages

`installer/Languages/Custom/<Language>.isl` contains the messages specific to
this installer (the gadget runtime page) in the 20 gadget languages. For
the other 58 wizard languages the English file is used. The files are
UTF-8 with BOM and CRLF (`.gitattributes` keeps them byte-exact). `%n` is a
line break.

The 77 files in `installer/Languages/` are Inno Setup's official and community
translations, vendored unmodified so the build does not depend on which
translations are installed with Inno Setup.
