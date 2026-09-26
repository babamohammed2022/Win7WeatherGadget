# Building and testing

## Requirements

| Tool | Version | Needed for |
|---|---|---|
| Python | 3.8 or newer (standard library only) | build, localization check, Python tests |
| Inno Setup | 6.3 or newer, tested with **6.7.3** | the installer (`ISCC.exe`) |
| Node.js | 18 or newer | JavaScript tests only |

## Build

```bat
python scripts\build.py
```

Steps:

1. check the source tree (required files, 20 locales, `VERSION`) and run
   `scripts/check_localization.py`: **any missing translation key stops the build**;
2. stage the gadget into `dist\stage\gadget\Weather.gadget`, converting `.js`,
   `.html` and `.css` from UTF-8 to UTF-16LE with BOM and CRLF;
3. create `dist\Weather.gadget` (ZIP, `gadget.xml` at the root, no folder entries);
4. create `dist\Win7WeatherGadget-Portable.zip` (runtime files, launcher, removal helper, and end-user guide);
5. compile `installer\Setup.iss` into `dist\Win7WeatherGadget-Setup.exe`
   when ISCC is found;
6. verify the outputs and write `dist\SHA256SUMS.txt`.

The two archives are reproducible: files are sorted, timestamps are fixed
(1 January 2010, or `SOURCE_DATE_EPOCH`), permissions are normalized. The EXE
contains build timestamps and differs between builds.

### Options

| Option | Effect |
|---|---|
| `--skip-installer` | do not run ISCC |
| `--require-installer` | fail if ISCC is not found (used by CI) |
| `--iscc <command>` | ISCC command; otherwise the `ISCC` variable, `PATH`, then the default Inno Setup 6 folders are tried |
| `--app-url <url>` | project URL shown by the installer (also the `APP_URL` variable); default `https://github.com/` |
| `--dist <folder>` | output folder (default `dist`) |

### Compiling the installer by hand

After a build (which creates `dist\stage`):

```bat
"C:\Program Files (x86)\Inno Setup 6\ISCC.exe" installer\Setup.iss
```

`Setup.iss` reads the version from `VERSION`. Optional defines:
`/DMyAppVersion=x.y.z`, `/DMyAppURL=https://…`, `/DStageDir=<staging folder>`.

### Linux (Wine)

The installer can also be compiled with Wine:

```bash
export WINEPREFIX=$HOME/.wine-inno
wine innosetup-6.7.3.exe /VERYSILENT /SUPPRESSMSGBOXES /DIR='C:\IS6'
python3 scripts/build.py --require-installer --iscc 'wine C:\IS6\ISCC.exe'
```

Paths are converted with `winepath`. The primary supported and continuously tested build environment is `windows-latest` in GitHub Actions; this optional Wine path is not exercised by the current build workflow.

## Tests

```bat
npm ci
npm test                                   :: JavaScript tests (offline)
python -m unittest discover -s tests -v    :: repository, localization, build, installer
python scripts\check_localization.py       :: localization report
```

The JavaScript tests can run against the packaged files too:

```bat
node tests\js\run_all.cjs --gadget dist\stage\gadget\Weather.gadget
```

| Test | What it checks |
|---|---|
| `tests/js/test_syntax.cjs` | every gadget script (and the inline scripts of the HTML pages) parses as ES3 and avoids constructs old JScript rejects (trailing commas, reserved words as property names; ES5 methods in the shim); script references and load order; the checker itself rejects invalid code |
| `tests/js/test_localization.cjs` | runs each `localizedStrings.js`; key parity, `LOCNAME_ARRAY` length, day names, translated texts, `getLocalizedString` fallback, folder lookup with English fallback |
| `tests/js/test_shim.cjs` | the shim offline: weather-code mapping and icons, localized texts and English fallback, COM aliases, requests (Fahrenheit, language codes, User-Agent), results, errors |
| `tests/js/test_gadget_integration.cjs` | Microsoft's `weather.js` and `settings.js` in a simulated Sidebar for all 20 languages, with and without VBScript; the settings search fills the result list. `--online` uses the live APIs |
| `tests/test_clean_settings.py` | runs the real `CleanGadgetSettings.ps1` on sample `settings.ini` files (UTF-16LE, UTF-8 with BOM, ANSI): removes only this gadget's sections and their `[Root]` references, keeps Microsoft's Weather gadget and the others, keeps the encoding, writes a backup; also parses both `.ps1` files. Uses `PWSH`, `powershell` or `pwsh`; skipped if none is found |
| `tests/test_repository.py` | structure, encodings, no temporary files, Microsoft files unchanged except documented patches, localization checker (including negative tests), missing-file detection, archive layout and encodings, reproducibility, installer script, version consistency |

`tests/fixtures/` holds API responses recorded on 2026-09-26 and the hashes
of the original gadget files.

## Versioning

`VERSION` is the single source of truth. When releasing:

1. update `VERSION`, `package.json` (`version`), `CHANGELOG.md` and the
   version shown in `README.md` (the tests check that they match);
2. commit, then tag `vX.Y.Z` with the same number and push the tag.

The workflow refuses to publish a release if the tag and `VERSION` differ.

## Continuous integration

`.github/workflows/build.yml` (runs on `windows-latest`):

- on every push and pull request: checks, tests, installer build, tests
  against the packaged gadget, upload of the setup, portable ZIP, and checksums
  `Win7WeatherGadget-<version>`;
- on a tag `v*.*.*`: the same, then a GitHub release with
  `Win7WeatherGadget-Setup.exe` and `Win7WeatherGadget-Portable.zip`.

Inno Setup 6.7.3 is downloaded from its official GitHub release and its SHA-256
is verified before installation.
