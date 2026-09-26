# Windows 7 Weather Gadget

A multilingual restoration of the classic Windows Weather desktop gadget for Windows versions with a compatible Sidebar runtime. The project preserves the existing gadget design and replaces its retired weather service.

Version prepared for the first public release: **1.0.0**.

## Features

- Current weather, forecasts, location search, and configurable temperature units.
- 20 gadget interface languages with English fallback.
- Per-user installer with an uninstaller, plus an extractable portable package.
- Weather data from Open-Meteo; no account or API key is required.

## Installation

### Installer

Download [`Win7WeatherGadget-Setup.exe`](../../releases/latest/download/Win7WeatherGadget-Setup.exe) from the latest GitHub Release and follow the wizard. This is the recommended option for most users. It installs for the current user and adds an uninstaller. If a compatible gadget runtime is missing, the wizard explains the requirement; any runtime download is optional and user-initiated.

### Portable

Download [`Win7WeatherGadget-Portable.zip`](../../releases/latest/download/Win7WeatherGadget-Portable.zip), extract the complete folder, and run `Launch.cmd`. This avoids the traditional setup wizard. A compatible Windows Sidebar runtime is still required; the launcher stages the gadget in that runtime's per-user gadget folder. Run `Remove.cmd` to remove the staged gadget and its saved settings. This package is not runtime-independent or fully portable.

## Supported Languages

English, Italian, German, French, Spanish, Brazilian Portuguese, Dutch, Polish, Russian, Japanese, Korean, Simplified Chinese, Traditional Chinese, Turkish, Swedish, Norwegian Bokmål, Danish, Finnish, Czech, and Hungarian.

## Compatibility

Windows 10 and Windows 11 require a separate Windows Sidebar-compatible gadget runtime, such as Gadgets Revived or 8GadgetPack. The runtime is not bundled with this project. Internet access is required for weather and location services.

## Building from Source

Requirements: Python 3.8+, Node.js 18+ for tests, and Inno Setup 6 to compile the installer.

```bat
npm ci
npm test
python -m unittest discover -s tests -v
python scripts\check_localization.py
python scripts\build.py --require-installer
```

Build artifacts are written to `dist/`. See [docs/BUILD.md](docs/BUILD.md) for details.

## Original Source

Original source/reference archive: <https://www.mediafire.com/file/qluqkiztg401b8a/gadgetoreganizatio.rar/file>

## Credits

The project retains and adapts Microsoft Windows 7 Weather gadget materials and includes Inno Setup translation files. See [NOTICE.md](NOTICE.md) for provenance and third-party notices.

## License

The project's own files are licensed under the MIT License in [LICENSE](LICENSE). That license does not cover Microsoft-derived gadget files or third-party Inno Setup translations. See [NOTICE.md](NOTICE.md) for copyright and attribution details.
