# NOTICE

This notice distinguishes project-authored files from material in the distributed gadget and third-party tools. 

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


## License of project files

The project's own files are licensed under the [MIT License](LICENSE). 
