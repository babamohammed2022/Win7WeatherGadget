# NOTICE

This file records where the content of this repository comes from, who owns
it and under which terms, so that anyone using or redistributing it knows what
is whose.

## 1. The Weather gadget: Microsoft Corporation

The following files in `src/Weather.gadget/` are **Microsoft's Windows 7
Weather gadget** (manifest: version 1.1.0.0, author *Microsoft Corporation*,
© 2009):

- `weather.html`, `settings.html`, `gadget.xml`, `icon.png`, `logo.png`, `drag.png`;
- all of `css/`;
- all of `js/` **except** `js/wlservices_shim.js`;
- all 150 files in `images/`, including the `120DPI/` and `144DPI/` variants;
- `it-IT/gadget.xml` and the Italian strings in `it-IT/js/localizedStrings.js`;
- the key names, layout and `LOCNAME_ARRAY` of every `localizedStrings.js`.

`installer/icon.ico` (also embedded in `installer/legacy/icon_data.h`) comes
from the source package, which did not document it; it shows the gadget's sun
image and is treated as derived from Microsoft's artwork.

Microsoft's files are unchanged except for the small patches listed in
[docs/PATCHES.md](docs/PATCHES.md).

**Provenance.** The reviewed reference bundle states that the gadget was
"recovered from a public Windows 7 gadget archive". The exact original source
could not be independently verified and Microsoft's pristine files were not
available for comparison. These files are **not** covered by this project's
license (see section 7). Microsoft's copyright notices (for example in
`localizedStrings.js` and the manifests) are kept. Redistribution rights are
unverified; see the publication hold in section 1A.

## 1A. Microsoft copyright and attribution

The supplied reference bundle identifies the original gadget files as Microsoft
Windows 7 Weather gadget material, © 2009 Microsoft Corporation. Original
Microsoft copyright notices remain in the files. The project's MIT license
applies only to project-authored contributions; it does not relicense or replace
Microsoft's rights in the original gadget code and artwork.

This is an unofficial community project and is not affiliated with or endorsed
by Microsoft. The appearance of similar Microsoft gadget materials in other
third-party packages is not presented as a license or endorsement for this
project.
## 2. Files written for this project

- `src/Weather.gadget/js/wlservices_shim.js`: replaces the `wlsrvc.WLServices`
  ActiveX control, whose service (`weather.service.msn.com`) no longer exists.
  It implements the interface the gadget expects using Open-Meteo and
  BigDataCloud. It contains no Microsoft code.
- The translations in the 18 new locale folders (`de-DE`, `fr-FR`, `es-ES`,
  `pt-BR`, `nl-NL`, `pl-PL`, `ru-RU`, `ja-JP`, `ko-KR`, `zh-CN`, `zh-TW`,
  `tr-TR`, `sv-SE`, `nb-NO`, `da-DK`, `fi-FI`, `cs-CZ`, `hu-HU`) and the keys
  added to the English and Italian files (their structure follows Microsoft's
  file, see section 1).
- `installer/Setup.iss`, `installer/README*.txt`, `installer/Languages/Custom/*.isl`.
- `installer/legacy/launcher.c`, `installer/legacy/InstallWizard.ps1` (earlier
  installer from the source package, kept for reference).
- `scripts/*`, `tests/*`, `.github/workflows/*`, the documentation.

## 3. Inno Setup translations: Jordan Russell and contributors

The 77 `.isl` / `.islu` files in `installer/Languages/` are the official and
community translations distributed with **Inno Setup**
(<https://jrsoftware.org/isinfo.php>). They are vendored unmodified, so the
build does not depend on which translations are installed with Inno Setup.
Their authors are named in each file. Inno Setup's license
(<https://jrsoftware.org/files/is/license.txt>) applies to them. Keep this
notice when redistributing them.

The installer is compiled with Inno Setup; the setup and uninstaller programs
embedded in `Win7WeatherGadget-Setup.exe` are © Jordan Russell and
Martijn Laan and distributed under the Inno Setup license.

## 4. Weather data

- [Open-Meteo](https://open-meteo.com/): forecasts and geocoding. The data
  is licensed under CC BY 4.0; the gadget shows the attribution
  "Data: Open-Meteo.com" (localized).
- [BigDataCloud](https://www.bigdatacloud.com/): reverse geocoding (free
  client-side API).

No data from these services is stored in this repository, except the
responses recorded as test fixtures in `tests/fixtures/`.

## 5. Third-party software the installer can download

The installer and `Install.cmd -host` can download the **Desktop Gadgets**
runtime from `gadgetsrevived.com`, **only when the user explicitly asks for it**.
The download is checked against a pinned SHA-256 checksum before it is run.
It is a separate program with its own license; nothing from it is included in
this repository. [8GadgetPack](https://gadgetpack.net/) is supported as an
alternative runtime and is also a separate program.

## 6. Test-only npm dependencies

`package.json` uses Acorn and acorn-walk only for JavaScript validation tests.
They are development dependencies, are fetched by `npm ci`, and are not copied
into the installer or portable package. Both packages are distributed under
the MIT license; their license notices are included with their npm packages.

## 7. License of this project's own files

The files listed in section 2 are released under the [MIT License](LICENSE).
This follows the package this project started from, which stated that its own
files should be treated as MIT-licensed while Microsoft's files are not.

The MIT License does **not** apply to the Microsoft files in section 1 or to
the Inno Setup translations in section 3.
