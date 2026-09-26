# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and the project uses [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-09-26

Initial public release.

### Added

- **20 gadget interface languages.** English and Italian (from the source
  package) plus 18 new translations: German, French, Spanish, Portuguese
  (Brazil), Dutch, Polish, Russian, Japanese, Korean, Chinese (Simplified),
  Chinese (Traditional), Turkish, Swedish, Norwegian Bokmål, Danish, Finnish,
  Czech and Hungarian. The language follows the Windows display language,
  with English as the fallback.
- Weather conditions, day names, the data-source label and the geocoding
  language are now localized (they were hard-coded in English or Italian).
- **Installer** `Win7WeatherGadget-Setup.exe` (Inno Setup): per-user
  installation without administrator rights, detection of the gadget runtime
  with an optional, checksum-verified download, uninstaller in Settings → Apps,
  78 wizard languages.
- **Portable ZIP** `Win7WeatherGadget-Portable.zip` with the gadget runtime files, `Launch.cmd`, `Remove.cmd`, and a concise user guide. It requires a separately installed Windows Sidebar-compatible runtime and stages the gadget in the current user's profile.
- **Automated build** (`scripts/build.py`) producing the setup installer, portable ZIP, gadget archive, and checksums.
- **Localization validation** (`scripts/check_localization.py`): the build
  fails if any language is missing a key or has an invalid value.
- **Tests**: JavaScript validation for the Sidebar's JScript engine, shim unit
  tests, integration tests running the gadget's own code in all 20 languages,
  repository, package and installer tests.
- **GitHub Actions** workflow: tests and builds on every push, publishes the
  installer and the ZIP on version tags.
- **Documentation**: README, NOTICE, license, patch list, localization and
  build guides.

### Changed

- The English and Italian variants of the source package are merged into a
  single multilingual gadget (`Weather.gadget`).
- All technical text (code comments, scripts, installer script, debug messages,
  documentation) is in English.
- `Diagnostica.cmd` / `Diagnostica.ps1` are renamed `Diagnostics.cmd` /
  `Diagnostics.ps1`.
- The Italian strings use Celsius as the default unit and translate `hr`.
- An unusable saved location falls back to the default city of the gadget's
  language.

### Fixed

- The installer script now compiles: the source package referenced a missing
  `Custom.it.isl` file and an undefined `UninstallGadget` procedure.
- Silent installation (`/VERYSILENT`) no longer waits for a confirmation when
  no gadget runtime is installed.
- The default city name is reset together with its coordinates when Windows
  selects an obsolete MSN location code.
- The uninstall clean-up of `settings.ini` no longer removes the settings of
  Microsoft's own Weather gadget (installed in `Program Files` by some gadget
  runtimes). It keeps the file's encoding instead of rewriting it as ANSI, and
  keeps the `[Root]` section list contiguous. The installer's uninstaller
  no longer clears the settings of an old `Meteo.gadget`, which it does not remove.
