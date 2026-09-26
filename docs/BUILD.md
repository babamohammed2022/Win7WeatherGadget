# Building and testing

## Requirements

| Tool | Version | Needed for |
|---|---|---|
| Python | 3.8 or newer (standard library only) | source assembly, build, localization check, Python tests |
| Inno Setup | 6.7.3 (pinned in CI) | compiling the installer (`ISCC.exe`) |
| Inno Setup language sources | pinned `jrsoftware/issrc` commit (pinned in CI) | supplying the 77 standard wizard translations at the compiler's `Languages` path |
| Node.js | 18 or newer | JavaScript tests |
| Internet access | GitHub release asset | downloading the pinned gadget baseline |

The source repository intentionally keeps the project's own gadget overlays rather than a duplicate copy of Microsoft's full gadget payload. The build assembles `dist/source/Weather.gadget` from the portable ZIP of the published v1.0.0 release, verifies its fixed SHA-256, and overlays the project-owned files from `src/Weather.gadget/`. This uses the project's GitHub release, not the MediaFire reference archive. The built installer and portable package contain the complete gadget.

## Build

```bat
python scripts\build.py
```

Steps:

1. fetch the pinned v1.0.0 portable release asset (or use a provided local copy) and verify its SHA-256;
2. reconstruct the gadget source under `dist\source\Weather.gadget` and apply the project's overlays;
3. validate required files, the 20 gadget locales, and `VERSION`;
4. stage the gadget into `dist\stage\gadget\Weather.gadget`, converting `.js`, `.html` and `.css` to UTF-16LE with BOM and CRLF;
5. create `dist\Weather.gadget` and `dist\Win7WeatherGadget-Portable.zip`;
6. compile `installer\Setup.iss` into `dist\Win7WeatherGadget-Setup.exe` when ISCC is found;
7. verify the outputs and write `dist\SHA256SUMS.txt`.

The portable ZIP used as the baseline is pinned in `scripts/build.py` by both a fixed v1.0.0 URL and SHA-256. To use an already-downloaded copy:

```bat
python scripts\build.py --payload-zip C:\path\Win7WeatherGadget-Portable.zip
```

The file must match the pinned hash. `W7WEATHER_PAYLOAD_ZIP` can be used instead of `--payload-zip`. The build never downloads from MediaFire.

The generated archives are reproducible: files are sorted, timestamps are fixed (1 January 2010, or `SOURCE_DATE_EPOCH`), and permissions are normalized. The EXE contains build timestamps and differs between builds.

### Options

| Option | Effect |
|---|---|
| `--skip-installer` | do not run ISCC |
| `--require-installer` | fail if ISCC is not found (used by CI) |
| `--iscc <command>` | ISCC command; otherwise the `ISCC` variable, `PATH`, then the default Inno Setup 6 folders are tried |
| `--app-url <url>` | project URL shown by the installer (also the `APP_URL` variable) |
| `--payload-zip <file>` | use a local copy of the pinned portable payload |
| `--dist <folder>` | output folder (default `dist`) |

### Compiling the installer by hand

Run a build first; it creates `dist\stage` and the reconstructed gadget tree:

```bat
"C:\Program Files (x86)\Inno Setup 6\ISCC.exe" installer\Setup.iss
```

`Setup.iss` reads the version from `VERSION`. Optional defines:
`/DMyAppVersion=x.y.z`, `/DMyAppURL=https://…`, `/DStageDir=<staging folder>`.
The Inno Setup installer does not provide all 77 standard wizard translations referenced by this project. CI fetches them from `jrsoftware/issrc` at commit `4adf37ed7f3fd2bd11c6836ba056e3de170fbabf` and stages them under the compiler's `Languages` directory; they are not stored in this repository. The project's custom messages remain in `installer\Languages\Custom\`.

### Linux (Wine)

```bash
export WINEPREFIX=$HOME/.wine-inno
wine innosetup-6.7.3.exe /VERYSILENT /SUPPRESSMSGBOXES /DIR='C:\IS6'
python3 scripts/build.py --require-installer --iscc 'wine C:\IS6\ISCC.exe'
```

Paths are converted with `winepath`. The primary supported build environment is `windows-latest` in GitHub Actions; this optional Wine path is not exercised by the workflow.

## Tests

Build once before running repository tests; this creates the reconstructed source tree used by the localization and preservation checks.

```bat
npm ci
python scripts\build.py --require-installer
python scripts\check_localization.py --gadget dist\source\Weather.gadget
python -m unittest discover -s tests -v
npm test
```

The JavaScript tests can run against the packaged files too:

```bat
node tests\js\run_all.cjs --gadget dist\stage\gadget\Weather.gadget
```

| Test | What it checks |
|---|---|
| `tests/js/test_syntax.cjs` | gadget scripts and inline HTML scripts parse as ES3; old-JScript compatibility, script references, load order, and checker failures |
| `tests/js/test_localization.cjs` | all 20 language tables, key parity, translated text, fallback, and language-folder lookup |
| `tests/js/test_shim.cjs` | the shim offline: weather-code mapping, localized text, COM aliases, request parameters, results, and errors |
| `tests/js/test_gadget_integration.cjs` | the released gadget baseline in a simulated Sidebar for all 20 languages and the settings search flow |
| `tests/test_clean_settings.py` | the real PowerShell cleanup script on sample settings files; skipped if PowerShell is unavailable |
| `tests/test_repository.py` | project-only repository footprint, assembled baseline preservation, locale checks (including negative tests), build outputs, reproducibility, installer settings, and version consistency |

`tests/fixtures/` includes API responses and hashes for the reference gadget source used in the v1.0.0 build.

## Versioning

`VERSION` is the single source of truth. When preparing a future release, update `VERSION`, `package.json`, `CHANGELOG.md`, and the README version, then tag `vX.Y.Z`. The baseline portable release is deliberately pinned in `scripts/build.py`; do not silently retarget that baseline. If the baseline is intentionally advanced, update its URL and SHA-256 together and validate the full Windows build before publishing.

## Continuous integration

`.github/workflows/build.yml` runs on `windows-latest`:

- on every push and pull request: downloads and verifies the pinned baseline, validates and tests the assembled gadget, builds the installer and portable ZIP, then uploads build artifacts;
- on a tag `v*.*.*`: performs the same checks and publishes a GitHub release containing exactly `Win7WeatherGadget-Setup.exe` and `Win7WeatherGadget-Portable.zip`.

Inno Setup 6.7.3 is downloaded from its official GitHub release and its SHA-256 is verified before installation.
