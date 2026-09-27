# Windows 7 Weather Gadget Restoration

A multilingual restoration of the classic Windows Weather desktop gadget for Windows 7, and for Windows 10 and 11 with a compatible Sidebar runtime. The project preserves the existing gadget design and replaces its retired weather service.

Note: This is an independent, community-developed project aimed at restoring a classic interface for contemporary operating systems.

This project is not affiliated with, authorized by, or officially connected to Microsoft Corporation. All trademarks, service marks, and trade names referenced herein remain the property of their respective owners and are used strictly for compatibility and identification purposes.

Meteorological data and location services are provided via open, third-party APIs.

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

**The restored gadget has been tested on Windows 7 and Windows 10.** Windows 11 should work with the same gadget runtimes as Windows 10, but it has not been tested yet.

Windows 10 and Windows 11 require a separate Windows Sidebar-compatible gadget runtime, such as Gadgets Revived or 8GadgetPack. The runtime is not bundled with this project. On 64-bit Windows the installer and the scripts only start the 64-bit `sidebar.exe`: GadgetPack 38 no longer runs its 32-bit version. Internet access is required for weather and location services.

On a real Windows 7 the gadget platform is part of Windows, so nothing else is installed or downloaded. If the platform has been turned off (the *Windows Gadget Platform* feature, or the `TurnOffSidebar` policy set by Microsoft Fix it 50906), the installer explains how to turn it back on. Windows 7 also keeps Microsoft's original Weather gadget, which no longer receives data: the gadget gallery may then show two Weather gadgets with the same icon. Use **Show details** in the gallery; the description of this gadget ends with "Weather data by Open-Meteo." (translated in each language). The location sensor of Windows 7 is supported. Windows 7 needs TLS 1.2 for the weather services: it is on by default with Internet Explorer 11 (Internet Options > Advanced > Use TLS 1.2).

## Building from Source

Requirements: Python 3.8+, Node.js 18+ for tests, Inno Setup 6 to compile the installer, and internet access to fetch the pinned portable package used as the binary gadget baseline (the `build-baseline` service release).

The repository keeps the project's own overlays, scripts, tests, and documentation rather than a duplicate copy of Microsoft's full gadget payload. The Windows installer and portable release assets still contain the complete gadget. Builds fetch the pinned portable asset from the `build-baseline` service release, byte-identical to the one first published with v1.0.0 (authenticated with `GH_TOKEN` or `GITHUB_TOKEN` while the repository is private) and verify its SHA-256 before applying the project's overlays; the MediaFire archive is only a source reference and is not a build dependency.

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
