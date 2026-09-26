# installer/legacy (reference only)

These files are the sources of the installer used by the package this project
was built from (published as `Installa-Meteo-Windows7.exe`). They are kept for
reference and history. **They are not built, tested or shipped**: the
supported installer is [`../Setup.iss`](../Setup.iss) (Inno Setup).

| File | What it was |
|---|---|
| `launcher.c` | hand-written self-extracting launcher: extracted a ZIP payload to `%LOCALAPPDATA%\Programs\Gadget Meteo Windows 7` and ran the PowerShell wizard |
| `icon_data.h` | `icon.ico` embedded as a C array for `launcher.c` |
| `InstallWizard.ps1` | the PowerShell/WinForms wizard (named `installer/Installa.ps1` in the original package) |

They still refer to the names and layout of the original package
(`Installa.ps1`, the separate Italian `Meteo.gadget` and English
`Weather.gadget` folders), so they would need adapting before they could be
used with this repository.
