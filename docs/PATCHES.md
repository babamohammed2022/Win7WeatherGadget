# Changes to Microsoft's Weather gadget

This document records the Microsoft-derived changes present in the v1.0.0
release gadget. The repository keeps project-authored overlays, not a second
copy of the full gadget source. The build reconstructs the v1.0.0 baseline from
the checksum-pinned portable release asset under `dist/source/Weather.gadget/`
and overlays the project's files from `src/Weather.gadget/`.

The reference-hash test compares the assembled baseline with
`tests/fixtures/original-gadget-hashes.json`, allowing only the documented
changes and project-authored shim.

## Provenance

The source archive for this project contained two variants of the gadget:
`gadget/Weather.gadget` (English) and `gadget/Meteo.gadget` (Italian). Both
were Microsoft's Weather gadget, manifest version 1.1.0.0, © 2009 Microsoft
Corporation, "recovered from a public Windows 7 gadget archive" according to the
archive's own NOTICE. Microsoft's pristine files are not available for
comparison, so the patch list of the source archive (`CHANGELOG-fix.md`) and
the code itself are the references. Changes that the source archive made
without documenting them are marked **(undocumented in the source archive)**.

The two variants differed only in `gadget.xml`, `js/localizedStrings.js` and
the hard-coded texts of `js/wlservices_shim.js`. This repository contains one
gadget: English in the root (the Sidebar fallback) and Italian in `it-IT/`,
plus 18 new languages. The Italian texts are unchanged (see below).

## Files written for the port

| File | Purpose |
|---|---|
| `js/wlservices_shim.js` | replaces the `wlsrvc.WLServices` ActiveX control, whose MSN service is gone. Same interface (`GetService`, `SearchByCode`, `SearchByLocation`, `OnDataReady`, `Celsius`, `RefreshInterval`), data from Open-Meteo and BigDataCloud |
| `<locale>/gadget.xml`, `<locale>/js/localizedStrings.js` for 18 new languages | translations (see [LOCALIZATION.md](LOCALIZATION.md)) |

## Patches in Microsoft's files

### `js/weather.js`

| Line | Change | Why |
|---|---|---|
| ~76–81 | `vbsGetLocale()` wrapped in `try/catch`, defaulting to locale `0` | `vbsGetLocale()` is VBScript; from Windows 11 24H2 VBScript is disabled by default and the call would stop `setup()` |
| ~98–107 | if the default location code from Microsoft's LCID table is not `lat,lon`, use the localized `DefaultLocationCode` **and** `DefaultCity` | the table contains MSN codes (`wc:USWA0367`, `FR:IT_Roma`) that no longer mean anything. The source archive reset only the code; this repository also resets the display name, so name and coordinates always describe the same place |
| ~118–119 | `document.getElementById("factory").object` wrapped in `try/catch` (`null` on failure) | the Windows 7 location sensor (CLSID `9DCC3CC8-…`) does not exist on Windows 10/11; Microsoft's own `factory == null` branch then disables automatic location |
| ~285–289 | `new ActiveXObject("wlsrvc.WLServices")` → `new WLServicesShim()` (2×) **(undocumented in the source archive)** | the ActiveX control's service is gone |

### `js/settings.js`

| Line | Change | Why |
|---|---|---|
| ~206–208 | `new ActiveXObject("wlsrvc.WLServices")` → `new WLServicesShim()` **(undocumented in the source archive)** | as above |
| ~226–230 | removed `.split('|')[0]` when reading the saved location code | the code is now `lat,lon|label`; cutting at `|` lost the city name |

### `js/localizedStrings.js` (English, root)

| Change | Why |
|---|---|
| `DefaultLocationCode` = `47.6740,-122.1215|Redmond` (was an MSN code) | usable default location |
| 31 keys added: `GeocodingLanguage`, `ReverseGeocodingLanguage`, `Attribution`, `CurrentLocation`, `Day-Sunday` … `Day-Saturday`, 20 × `SkyText-*` | texts the MSN service used to return already translated; now localized by the gadget |
| English comments added; `hr` listed among the `%2` units in a comment | documentation only |

### `weather.html`, `settings.html`

| Change | Why |
|---|---|
| `<script src="js/wlservices_shim.js">` added after `library.js` **(undocumented in the source archive)** | loads the shim before `weather.js` / `settings.js` |

The files are otherwise unchanged (checked against the source archive).

### `it-IT/js/localizedStrings.js` (from the Italian variant)

The Italian strings come from `Meteo.gadget/js/localizedStrings.js` of the
source archive, with these changes:

| Change | Why |
|---|---|
| `DefaultUnit`: `Fahrenheit` → `Celsius` | Italy uses Celsius; the Italian variant had kept the English value |
| `hr`: `hr` → `ora` | the only unit left untranslated |
| the 31 new keys; the condition texts are exactly those that the Italian variant of the shim hard-coded (for example `Sereno`, `Parzialmente nuvoloso`) | same wording as before |
| day names with accents (`Lunedì` instead of `Lunedi`) | correct Italian spelling |

`it-IT/gadget.xml` is the Italian variant's manifest (name *Meteo*).

## Structure of the package

The source archive noted that its starting material had the manifest only in
`en-US/gadget.xml` / `it-IT/gadget.xml`; it moved `gadget.xml` to the gadget
root, where every gadget host requires it. The build places `gadget.xml` at the
root of `Weather.gadget` and adds no empty folders.

## Behavior of the shim compared with the source archive's shim

The shim keeps the source archive's logic (requests, weather-code mapping, COM
case-insensitive aliases, HTTP transport). The differences:

- all texts (conditions, day names, attribution, "current location") and the
  language codes of the geocoding requests are read from `localizedStrings.js`,
  with English fallbacks;
- SkyCode 33 (mainly clear, **night**) now reads "Mostly clear" instead of
  "Mostly sunny";
- an unusable saved location code (for example a leftover MSN code) falls back
  to the localized `DefaultLocationCode` instead of always Redmond (the Italian
  variant always used Roma);
- `_skyText(wmoCode)`, which the gadget does not call, now goes through the
  SkyCode table so that every text comes from the localization files;
- comments and the debug message are in English.

### Network failures and restarts (since 1.0.1)

After a Windows restart the Sidebar loads the gadget before the network is
ready. Version 1.0.0 then stayed on "Getting data..." (a failed MSXML request
throws when its `status` is read, so `OnDataReady` was never called) or showed
"not available in your area" for good (error code 1506 stops weather.js from
polling). Changing the location was the only way out. The shim now:

- guards every request with a watchdog (`REQUEST_TIMEOUT_MS`) and turns every
  failure — connection errors, exceptions while reading the answer, time-outs —
  into a result, so `OnDataReady` is always called;
- retries `SearchByCode` by itself (`RETRY_DELAYS_MS`) while the gadget keeps
  showing "Getting data...", so a network that comes up within about a minute
  and a half is never noticed;
- then reports `RETCODE_UNAVAILABLE` (503) instead of 1506: weather.js shows
  "Service not available" and starts Microsoft's own one-minute polling, which
  restores the weather when the connection is back. The shim also retries in
  the background every `BACKGROUND_RETRY_MS` until a newer request replaces it;
- answers polling requests at once while the service is known to be down,
  and does not retry errors that cannot fix themselves (invalid answers);
- sends `Cache-Control: no-cache` so that the WinINet-based fallbacks never
  answer from the cache;
- stores location names with a typographic apostrophe (`L’Aquila`): weather.js
  puts the saved location code inside a quoted `setInterval` string while it
  polls, and a plain apostrophe would break that string.


## Encoding

The released gadget stores its `.js`, `.html` and `.css` files as UTF-16LE with
BOM and CRLF. During a build, `scripts/build.py` reconstructs a readable UTF-8
working tree in ignored `dist/source/`, overlays project files, then stages
those text files back to UTF-16LE with BOM and CRLF. `gadget.xml` stays UTF-8.
Tests compare the reconstructed tree against the preserved reference hashes.
