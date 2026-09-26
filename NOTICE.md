# NOTICE

This notice distinguishes project-authored files from material in the distributed gadget and third-party tools. Attribution is not a license grant or a statement of authorization.

## Microsoft Windows 7 Weather gadget

The complete Weather gadget included in `Win7WeatherGadget-Setup.exe` and `Win7WeatherGadget-Portable.zip` is derived from Microsoft's Windows 7 Weather gadget (manifest version 1.1.0.0, author Microsoft Corporation, © 2009). Microsoft copyright notices in the packaged files are retained.

To avoid keeping a duplicate copy of the large gadget payload in the current source tree, this repository stores the project's own overlays, localization files, build scripts, tests, and documentation. The build obtains its baseline from the public v1.0.0 portable release asset, verifies a pinned SHA-256, then applies the project overlays. The MediaFire archive is cited only as an original source/reference; it is not required by the build or installer.

The release package contains Microsoft-derived code and artwork. Its inclusion and attribution do not establish a redistribution license, Microsoft authorization, affiliation, or endorsement. This is an unofficial community project and is not affiliated with or endorsed by Microsoft. The project's MIT license does not relicense Microsoft's material.

The source archive described the gadget as "recovered from a public Windows 7 gadget archive." The exact original source could not be independently verified, and pristine Microsoft files were not independently available for comparison. The changes made for this project are documented in [docs/PATCHES.md](docs/PATCHES.md).

## Project-authored files

- `src/Weather.gadget/js/wlservices_shim.js`: replaces the retired `wlsrvc.WLServices` ActiveX weather service with Open-Meteo and BigDataCloud calls, using the interface expected by the gadget.
- `src/Weather.gadget/<locale>/`: project-maintained locale manifests and translations for the supported non-English languages.
- `installer/Setup.iss`, the custom installer translations in `installer/Languages/Custom/`, scripts, tests, workflow, and documentation.

The full gadget source tree is reconstructed temporarily under the ignored `dist/` directory from the pinned release payload. It is not checked into the current source tree.

## Inno Setup

The installer uses Inno Setup 6.7.3. During CI builds, the 77 standard installer language files referenced by `installer/Setup.iss` are fetched from the Inno Setup source repository (`jrsoftware/issrc`, commit `4adf37ed7f3fd2bd11c6836ba056e3de170fbabf`) and staged under the compiler's `Languages` directory; they are not vendored in this repository. Their original translation credits remain in the files. The project's custom installer translations are in `installer/Languages/Custom/`.

The setup and uninstaller programs embedded in the setup executable are © Jordan Russell and Martijn Laan and are distributed under the Inno Setup license: <https://jrsoftware.org/files/is/license.txt>.

## Weather data

- [Open-Meteo](https://open-meteo.com/): forecasts and geocoding. The service's data is licensed under CC BY 4.0; the gadget displays localized attribution to Open-Meteo.
- [BigDataCloud](https://www.bigdatacloud.com/): reverse geocoding (free client-side API).

No service data is stored in this repository apart from recorded test fixtures in `tests/fixtures/`.

## Optional third-party gadget runtime

The installer and `Install.cmd -host` can download the Desktop Gadgets runtime from Gadgets Revived only when the user explicitly requests it. The download is checked against a pinned SHA-256 before it is run. The runtime is a separate program and is not bundled with this project. 8GadgetPack is another separate runtime option.

## Test-only npm dependencies

`package.json` uses Acorn and acorn-walk only for JavaScript validation tests. They are development dependencies, fetched by `npm ci`, and are not copied into either release package. Both are distributed under the MIT license; their notices are included with their npm packages.

## License of project files

The project's own files are licensed under the [MIT License](LICENSE). That license does not cover Microsoft-derived gadget material, the optional runtime, or third-party components. See the notices above and the licenses of those components.
