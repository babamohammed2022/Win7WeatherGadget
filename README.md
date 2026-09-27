# Windows 7 Weather Gadget

A multilingual restoration of the classic Windows Weather desktop gadget for Windows versions with a compatible Sidebar runtime. The project preserves the existing gadget design and replaces its retired weather service.



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

Requirements: Python 3.8+, Node.js 18+ for tests, Inno Setup 6 to compile the installer, and internet access to fetch the pinned v1.0.0 portable package used as the binary gadget baseline.

The repository keeps the project's own overlays, scripts, tests, and documentation rather than a duplicate copy of Microsoft's full gadget payload. The Windows installer and portable release assets still contain the complete gadget. Builds fetch the v1.0.0 portable asset (authenticated with `GH_TOKEN` or `GITHUB_TOKEN` while the repository is private) and verify its SHA-256 before applying the project's overlays; the MediaFire archive is only a source reference and is not a build dependency.

```bat
npm ci
python scripts\build.py --require-installer
python scripts\check_localization.py --gadget dist\source\Weather.gadget
python -m unittest discover -s tests -v
npm test
```

Build artifacts and the reconstructed source tree are written to the ignored `dist/` folder. See [docs/BUILD.md](docs/BUILD.md) for details.


## License

The project's own files are licensed under the MIT License in [LICENSE](LICENSE).
