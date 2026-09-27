#!/usr/bin/env python3
"""Build the Windows 7 Weather Gadget release artifacts.

Steps
-----
1. Download the pinned v1.0.0 portable release asset as the gadget baseline,
   verify its SHA-256, then overlay the project's own source files.
2. Validate the assembled source tree (required files, 20 locales, VERSION).
3. Stage the gadget into dist/stage/gadget/Weather.gadget, converting the
   .js/.html/.css files from UTF-8 to UTF-16LE with BOM and CRLF line endings
   (the format of Microsoft's original gadget, which Sidebar expects).
4. Create dist/Weather.gadget (ZIP archive with gadget.xml at its root,
   installable with a double-click when a gadget runtime is present).
5. Create dist/Win7WeatherGadget-Portable.zip (runtime files, launcher, and removal helper).
6. Compile installer/Setup.iss with Inno Setup (ISCC) into
   dist/Win7WeatherGadget-Setup.exe, when ISCC is available.
7. Verify the outputs and write dist/SHA256SUMS.txt.

Usage
-----
    python scripts/build.py                     # downloads baseline; all outputs
    python scripts/build.py --skip-installer    # gadget + ZIP only
    python scripts/build.py --require-installer # fail if ISCC is not found (CI)
    python scripts/build.py --payload-zip FILE  # use a local copy of the pinned baseline

The baseline is downloaded from the public release URL. When the repository
is private, set GH_TOKEN or GITHUB_TOKEN (read access to the repository is
enough): the asset is then fetched through the authenticated GitHub API.

ISCC is looked up in this order: --iscc, the ISCC environment variable, PATH,
then the default Inno Setup 6 folders. On Linux, a Wine command can be given,
for example:  ISCC="wine C:\\IS6\\ISCC.exe" python scripts/build.py

Only the Python standard library is used.
"""

import argparse
import hashlib
import io
import json
import os
import re
import shutil
import subprocess
import sys
import time
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OVERLAY_SRC = os.path.join(ROOT, "src", "Weather.gadget")
DIST = os.path.join(ROOT, "dist")
SRC = os.path.join(DIST, "source", "Weather.gadget")
PAYLOAD_CACHE = os.path.join(ROOT, "dist", "cache", "Win7WeatherGadget-Portable-v1.0.0.zip")
PAYLOAD_URL = "https://github.com/babamohammed2022/Win7WeatherGadget/releases/download/v1.0.0/Win7WeatherGadget-Portable.zip"
# SHA-256 of the v1.0.0 portable asset as published (also reported by the
# GitHub API as the asset "digest").
PAYLOAD_SHA256 = "2fe82e2271cc051b5a170e31fc06a48fa901483a5e6f4409d146770dedb0b40d"
PAYLOAD_REPO = "babamohammed2022/Win7WeatherGadget"
PAYLOAD_TAG = "v1.0.0"
PAYLOAD_ASSET = "Win7WeatherGadget-Portable.zip"
PAYLOAD_PREFIX = "Win7WeatherGadget-Portable/Gadget/Weather.gadget/"
STAGE = os.path.join(DIST, "stage")
STAGE_GADGET = os.path.join(STAGE, "gadget", "Weather.gadget")

GADGET_ARCHIVE = "Weather.gadget"
ZIP_NAME = "Win7WeatherGadget-Portable.zip"
ZIP_TOP = "Win7WeatherGadget-Portable"
SETUP_NAME = "Win7WeatherGadget-Setup.exe"

# The 20 gadget interface languages. en-US lives in the gadget root folder
# (it is also the fallback); the other 19 have their own locale folder.
LOCALES = [
    "en-US", "it-IT", "de-DE", "fr-FR", "es-ES", "pt-BR", "nl-NL", "pl-PL",
    "ru-RU", "ja-JP", "ko-KR", "zh-CN", "zh-TW", "tr-TR", "sv-SE", "nb-NO",
    "da-DK", "fi-FI", "cs-CZ", "hu-HU",
]
ROOT_LOCALE = "en-US"

# Files converted to UTF-16LE + BOM + CRLF when staged.
UTF16_EXTENSIONS = (".js", ".html", ".css")

REQUIRED_PROJECT_FILES = [
    "src/localization-en-US.json",
    "installer/Setup.iss",
    "installer/README.txt",
    "scripts/Launch.cmd",
    "scripts/Remove.cmd",
    "scripts/tools/CleanGadgetSettings.ps1",
    "portable/README.txt",
]

REQUIRED_GADGET_FILES = [
    "gadget.xml", "weather.html", "settings.html", "icon.png", "logo.png", "drag.png",
    "css/weather.css", "css/settings.css", "css/localizedSettings.css",
    "js/highDpiImageSwap.js", "js/library.js", "js/localizedStrings.js",
    "js/settings.js", "js/weather.js", "js/wlservices_shim.js",
]

# Fixed timestamp for reproducible archives (can be overridden with the
# standard SOURCE_DATE_EPOCH variable).
ZIP_EPOCH = int(os.environ.get("SOURCE_DATE_EPOCH", "1262304000"))  # 2010-01-01


def _read(path, mode="r", **kwargs):
    """Read a whole file and close it."""
    if mode == "rb":
        with open(path, "rb") as f:
            return f.read()
    with io.open(path, **kwargs) as f:
        return f.read()


def set_dist(path):
    """Changes the output folder (used by the tests)."""
    global DIST, SRC, STAGE, STAGE_GADGET
    DIST = path
    SRC = os.path.join(DIST, "source", "Weather.gadget")
    STAGE = os.path.join(DIST, "stage")
    STAGE_GADGET = os.path.join(STAGE, "gadget", "Weather.gadget")


class BuildError(Exception):
    pass


def log(msg):
    print("[build] " + msg, flush=True)


def read_version():
    path = os.path.join(ROOT, "VERSION")
    with io.open(path, encoding="utf-8") as fh:
        version = fh.read().strip()
    if not re.match(r"^\d+\.\d+\.\d+$", version):
        raise BuildError("VERSION must contain MAJOR.MINOR.PATCH, found %r" % version)
    return version


# ---------------------------------------------------------------------------
# 1. source assembly and validation
# ---------------------------------------------------------------------------

def _github_token():
    for name in ("GH_TOKEN", "GITHUB_TOKEN"):
        value = os.environ.get(name, "").strip()
        if value:
            return value
    return None


def _http_get(url, headers, target=None):
    """GET url and return the body (or write it to target).

    Redirects are followed by hand so that the Authorization header is never
    forwarded to another host (release assets redirect to a signed storage URL
    that rejects extra credentials).
    """
    from urllib.parse import urlsplit
    from urllib.request import HTTPRedirectHandler, Request, build_opener

    class NoRedirect(HTTPRedirectHandler):
        def redirect_request(self, req, fp, code, msg, hdrs, newurl):
            return None

    opener = build_opener(NoRedirect)
    from urllib.error import HTTPError
    host = urlsplit(url).netloc
    for _ in range(5):
        request = Request(url, headers=headers)
        try:
            response = opener.open(request, timeout=60)
        except HTTPError as exc:
            if exc.code in (301, 302, 303, 307, 308) and exc.headers.get("Location"):
                from urllib.parse import urljoin
                url = urljoin(url, exc.headers["Location"])
                if urlsplit(url).netloc != host:
                    headers = {k: v for k, v in headers.items() if k.lower() != "authorization"}
                    host = urlsplit(url).netloc
                continue
            raise
        with response:
            if target is None:
                return response.read()
            with open(target, "wb") as fh:
                shutil.copyfileobj(response, fh)
            return None
    raise BuildError("too many redirects while downloading " + url)


def download_payload(target):
    """Download the pinned portable ZIP, authenticated when a token is set."""
    agent = {"User-Agent": "Win7WeatherGadget-build/1.0"}
    token = _github_token()
    if not token:
        _http_get(PAYLOAD_URL, agent, target)
        return
    api = {"Authorization": "Bearer " + token, "Accept": "application/vnd.github+json",
           "X-GitHub-Api-Version": "2022-11-28"}
    api.update(agent)
    release = json.loads(_http_get("https://api.github.com/repos/%s/releases/tags/%s" % (PAYLOAD_REPO, PAYLOAD_TAG),
                                   api).decode("utf-8"))
    for asset in release.get("assets", []):
        if asset.get("name") == PAYLOAD_ASSET:
            headers = dict(api)
            headers["Accept"] = "application/octet-stream"
            _http_get(asset["url"], headers, target)
            return
    raise BuildError("release %s has no asset %s" % (PAYLOAD_TAG, PAYLOAD_ASSET))


def obtain_payload(explicit=None):
    """Return the pinned release ZIP used as the binary-only vendor baseline."""
    supplied = explicit or os.environ.get("W7WEATHER_PAYLOAD_ZIP")
    if supplied:
        path = os.path.abspath(supplied)
        if not os.path.isfile(path):
            raise BuildError("payload ZIP not found: " + path)
    else:
        path = PAYLOAD_CACHE
        os.makedirs(os.path.dirname(path), exist_ok=True)
        valid_cache = False
        if os.path.isfile(path):
            valid_cache = hashlib.sha256(_read(path, "rb")).hexdigest() == PAYLOAD_SHA256
        if not valid_cache:
            try:
                download_payload(path + ".tmp")
                os.replace(path + ".tmp", path)
            except Exception as exc:
                try:
                    os.remove(path + ".tmp")
                except OSError:
                    pass
                raise BuildError("cannot download the pinned v1.0.0 portable payload: %s" % exc)
    digest = hashlib.sha256(_read(path, "rb")).hexdigest()
    if digest != PAYLOAD_SHA256:
        raise BuildError("portable payload SHA-256 mismatch: " + digest)
    return path


def assemble_source(payload_zip=None):
    """Unpack the released gadget as the vendor baseline and overlay our files."""
    global SRC
    archive = obtain_payload(payload_zip)
    if os.path.isdir(SRC):
        shutil.rmtree(SRC)
    os.makedirs(SRC, exist_ok=True)
    expected = set()
    try:
        with zipfile.ZipFile(archive) as zf:
            for info in zf.infolist():
                name = info.filename
                if not name.startswith(PAYLOAD_PREFIX) or info.is_dir():
                    continue
                relpath = name[len(PAYLOAD_PREFIX):]
                parts = relpath.replace("\\", "/").split("/")
                if not relpath or any(part in ("", ".", "..") for part in parts):
                    raise BuildError("unsafe path in portable payload: " + name)
                target = os.path.join(SRC, *parts)
                os.makedirs(os.path.dirname(target), exist_ok=True)
                data = zf.read(info)
                if relpath.lower().endswith(UTF16_EXTENSIONS):
                    if data.startswith(b"\xff\xfe"):
                        text = data[2:].decode("utf-16-le")
                    elif data.startswith(b"\xfe\xff"):
                        text = data[2:].decode("utf-16-be")
                    else:
                        text = data.decode("utf-8")
                    text = text.replace("\r\n", "\n").replace("\r", "\n")
                    data = text.encode("utf-8")
                with open(target, "wb") as fh:
                    fh.write(data)
                expected.add(relpath)
    except (OSError, zipfile.BadZipFile, UnicodeError) as exc:
        raise BuildError("cannot assemble gadget from portable payload: %s" % exc)

    if "gadget.xml" not in expected or "js/weather.js" not in expected or len(expected) < 150:
        raise BuildError("pinned portable payload is missing the gadget source tree")

    for path in iter_files(OVERLAY_SRC):
        relpath = os.path.relpath(path, OVERLAY_SRC)
        target = os.path.join(SRC, relpath)
        os.makedirs(os.path.dirname(target), exist_ok=True)
        shutil.copyfile(path, target)
    apply_english_overrides()
    log("assembled gadget from pinned release payload plus %d project overlay files" %
        sum(1 for _ in iter_files(OVERLAY_SRC)))


def apply_english_overrides():
    """Apply project-owned English additions without vendoring Microsoft's table."""
    path = os.path.join(SRC, "js", "localizedStrings.js")
    overrides_path = os.path.join(ROOT, "src", "localization-en-US.json")
    try:
        with io.open(overrides_path, encoding="utf-8") as fh:
            values = json.load(fh)
    except (OSError, ValueError) as exc:
        raise BuildError("cannot read project English localization overrides: %s" % exc)
    text = _read(path, encoding="utf-8")
    lines = text.splitlines()
    missing = []
    for key, value in values.items():
        if not isinstance(value, str):
            raise BuildError("English localization override %s must be text" % key)
        key_re = re.compile(r"^\s*L_localizedStrings_Text\[\s*['\"]%s['\"]\s*\]" % re.escape(key))
        replacement = "L_localizedStrings_Text['%s'] = %s;" % (
            key, json.dumps(value, ensure_ascii=False))
        found = False
        for index, line in enumerate(lines):
            if key_re.match(line):
                lines[index] = replacement
                found = True
                break
        if not found:
            missing.append(replacement)
    if missing:
        marker = next((i for i, line in enumerate(lines) if re.match(r"^var\s+LOCNAME_ARRAY\b", line)), None)
        if marker is None:
            raise BuildError("English localization table has no LOCNAME_ARRAY insertion point")
        lines[marker:marker] = missing
    with io.open(path, "w", encoding="utf-8", newline="\n") as fh:
        fh.write("\n".join(lines) + "\n")


def validate_sources():

    missing = [f for f in REQUIRED_PROJECT_FILES if not os.path.isfile(os.path.join(ROOT, f))]
    missing.extend(f for f in REQUIRED_GADGET_FILES if not os.path.isfile(os.path.join(SRC, f)))
    overlay_required = ["js/wlservices_shim.js"]
    for loc in LOCALES:
        if loc != ROOT_LOCALE:
            overlay_required.extend((loc + "/gadget.xml", loc + "/js/localizedStrings.js"))
    missing.extend(os.path.relpath(os.path.join(OVERLAY_SRC, f), ROOT).replace(os.sep, "/")
                   for f in overlay_required if not os.path.isfile(os.path.join(OVERLAY_SRC, f)))
    for loc in LOCALES:
        if loc == ROOT_LOCALE:
            continue
        for f in ("gadget.xml", "js/localizedStrings.js"):
            if not os.path.isfile(os.path.join(SRC, loc, f)):
                missing.append(loc + "/" + f)
    if not os.path.isdir(os.path.join(SRC, "images")):
        missing.append("images/")
    if missing:
        raise BuildError("missing gadget files: " + ", ".join(missing))

    # Every repository text file must be valid UTF-8 without BOM, so that the
    # conversion to UTF-16 below is lossless.
    for path in iter_files(SRC):
        if path.lower().endswith(UTF16_EXTENSIONS + (".xml",)):
            data = _read(path, "rb")
            if data.startswith(b"\xef\xbb\xbf") or data.startswith(b"\xff\xfe"):
                raise BuildError("%s must be UTF-8 without BOM" % rel(path))
            try:
                data.decode("utf-8")
            except UnicodeDecodeError as exc:
                raise BuildError("%s is not valid UTF-8: %s" % (rel(path), exc))
    # Key parity and format of the 20 localizations (fails on any missing key).
    proc = subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "check_localization.py"),
                           "--gadget", SRC, "--quiet"])
    if proc.returncode != 0:
        raise BuildError("localization check failed")
    log("sources OK (%d locales)" % len(LOCALES))


def iter_files(top):
    for dirpath, dirnames, filenames in os.walk(top):
        dirnames.sort()
        for name in sorted(filenames):
            yield os.path.join(dirpath, name)


def rel(path, start=ROOT):
    try:
        value = os.path.relpath(path, start)
    except ValueError:
        # On Windows, the caller may direct test/build outputs to a temporary
        # directory on another drive. There is no relative path across drives;
        # keep diagnostics useful without aborting the build.
        value = os.path.abspath(path)
    return value.replace(os.sep, "/")


# ---------------------------------------------------------------------------
# 2. staging
# ---------------------------------------------------------------------------

def to_crlf(text):
    return text.replace("\r\n", "\n").replace("\n", "\r\n")


def stage_gadget():
    if os.path.isdir(STAGE):
        shutil.rmtree(STAGE)
    count = 0
    for path in iter_files(SRC):
        target = os.path.join(STAGE_GADGET, os.path.relpath(path, SRC))
        os.makedirs(os.path.dirname(target), exist_ok=True)
        if path.lower().endswith(UTF16_EXTENSIONS):
            text = _read(path, encoding="utf-8", newline="")
            with open(target, "wb") as fh:
                fh.write(b"\xff\xfe" + to_crlf(text).encode("utf-16-le"))
        else:
            shutil.copyfile(path, target)
        count += 1
    log("staged %d gadget files" % count)


def write_text(target, text, bom=False, crlf=True):
    os.makedirs(os.path.dirname(target), exist_ok=True)
    if crlf:
        text = to_crlf(text)
    with io.open(target, "w", encoding="utf-8-sig" if bom else "utf-8", newline="") as fh:
        fh.write(text)


def read_text(path):
    return io.open(os.path.join(ROOT, path), encoding="utf-8-sig", newline="").read()


def stage_extras():
    docs = os.path.join(STAGE, "docs")
    write_text(os.path.join(docs, "README.txt"), read_text("installer/README.txt"), bom=True)
    write_text(os.path.join(docs, "README.it.txt"), read_text("installer/README.it.txt"), bom=True)
    write_text(os.path.join(STAGE, "portable", "README.txt"), read_text("portable/README.txt"), crlf=True)
    for name in ("Launch.cmd", "Remove.cmd"):
        text = read_text("scripts/" + name)
        try:
            text.encode("ascii")
        except UnicodeEncodeError:
            raise BuildError("scripts/%s must be ASCII (cmd.exe code page)" % name)
        write_text(os.path.join(STAGE, "portable", name), text)
    write_text(os.path.join(docs, "LICENSE.txt"), read_text("LICENSE"))
    write_text(os.path.join(docs, "NOTICE.md"), read_text("NOTICE.md"))
    write_text(os.path.join(docs, "README.md"), read_text("README.md"))
    # PowerShell 5.1 reads BOM-less scripts with the ANSI code page: keep the BOM.
    for name in ("CleanGadgetSettings.ps1", "Diagnostics.ps1"):
        write_text(os.path.join(STAGE, "tools", name),
                   read_text("scripts/tools/" + name), bom=True)
    for name in ("Install.cmd", "Uninstall.cmd", "Diagnostics.cmd"):
        text = read_text("scripts/" + name)
        try:
            text.encode("ascii")
        except UnicodeEncodeError:
            raise BuildError("scripts/%s must be ASCII (cmd.exe code page)" % name)
        write_text(os.path.join(STAGE, "scripts", name), text)
    log("staged documentation and scripts")


# ---------------------------------------------------------------------------
# 3./4. archives
# ---------------------------------------------------------------------------

def add_file(zf, arcname, path):
    info = zipfile.ZipInfo(arcname, date_time=time.gmtime(ZIP_EPOCH)[:6])
    info.compress_type = zipfile.ZIP_DEFLATED
    info.external_attr = 0o644 << 16
    with open(path, "rb") as fh:
        zf.writestr(info, fh.read(), compresslevel=9)


def build_gadget_archive():
    target = os.path.join(DIST, GADGET_ARCHIVE)
    if os.path.exists(target):
        os.remove(target)
    with zipfile.ZipFile(target, "w") as zf:
        for path in iter_files(STAGE_GADGET):
            add_file(zf, rel(path, STAGE_GADGET), path)
    log("created %s" % rel(os.path.join(DIST, GADGET_ARCHIVE)))
    return target


def build_zip_package():
    """Build a minimal, extracted-folder package for an existing gadget runtime."""
    target = os.path.join(DIST, ZIP_NAME)
    if os.path.exists(target):
        os.remove(target)
    top = ZIP_TOP + "/"
    with zipfile.ZipFile(target, "w") as zf:
        for name in ("Launch.cmd", "Remove.cmd"):
            add_file(zf, top + name, os.path.join(STAGE, "portable", name))
        add_file(zf, top + "README.txt", os.path.join(STAGE, "portable", "README.txt"))
        add_file(zf, top + "LICENSE.txt", os.path.join(STAGE, "docs", "LICENSE.txt"))
        add_file(zf, top + "NOTICE.md", os.path.join(STAGE, "docs", "NOTICE.md"))
        add_file(zf, top + "tools/CleanGadgetSettings.ps1",
                 os.path.join(STAGE, "tools", "CleanGadgetSettings.ps1"))
        for path in iter_files(STAGE_GADGET):
            add_file(zf, top + "Gadget/Weather.gadget/" + rel(path, STAGE_GADGET), path)
    log("created %s" % rel(os.path.join(DIST, ZIP_NAME)))
    return target


# ---------------------------------------------------------------------------
# 5. installer
# ---------------------------------------------------------------------------

def find_iscc(explicit):
    candidates = []
    if explicit:
        candidates.append(explicit)
    if os.environ.get("ISCC"):
        candidates.append(os.environ["ISCC"])
    for name in ("ISCC.exe", "iscc"):
        found = shutil.which(name)
        if found:
            candidates.append(found)
    for base in (os.environ.get("ProgramFiles(x86)"), os.environ.get("ProgramFiles"),
                 os.path.join(os.environ.get("LOCALAPPDATA", ""), "Programs")):
        if base:
            candidates.append(os.path.join(base, "Inno Setup 6", "ISCC.exe"))
    for cand in candidates:
        if cand.lower().startswith("wine ") and not os.path.isfile(cand):
            # "wine C:\\path\\ISCC.exe": keep the Windows path intact.
            argv = ["wine", cand[5:].strip().strip('"')]
        else:
            argv = [cand]
        if argv[0].lower() == "wine" or os.path.isfile(argv[0]) or shutil.which(argv[0]):
            return argv
    return None


def to_iscc_path(argv, path):
    """Converts a path for ISCC; under Wine, POSIX paths become Z:\\... paths."""
    if argv[0].lower() == "wine":
        out = subprocess.run(["winepath", "-w", path], capture_output=True, text=True)
        if out.returncode == 0 and out.stdout.strip():
            return out.stdout.strip()
    return path


def build_installer(argv, version, app_url):
    script = os.path.join(ROOT, "installer", "Setup.iss")
    target = os.path.join(DIST, SETUP_NAME)
    if os.path.exists(target):
        os.remove(target)
    cmd = list(argv) + ["/Q", "/DMyAppVersion=" + version,
                        "/DStageDir=" + to_iscc_path(argv, STAGE),
                        "/O" + to_iscc_path(argv, DIST)]
    if app_url:
        cmd.append("/DMyAppURL=" + app_url)
    cmd.append(to_iscc_path(argv, script))
    log("running: " + " ".join(cmd))
    proc = subprocess.run(cmd, cwd=os.path.join(ROOT, "installer"),
                          stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    output = proc.stdout.decode("utf-8", "replace")
    # Wine prints a lot of noise on stderr; keep only ISCC's own lines.
    lines = [l for l in output.splitlines() if not re.match(r"^[0-9a-f]{4}:(fixme|err|warn):", l)]
    if lines:
        print("\n".join(lines))
    if proc.returncode != 0:
        detail = "\n".join(lines[-20:])
        raise BuildError("ISCC failed with exit code %d\n%s" % (proc.returncode, detail))
    if not os.path.isfile(target):
        raise BuildError("ISCC did not produce dist/%s" % SETUP_NAME)
    log("created %s" % rel(os.path.join(DIST, SETUP_NAME)))
    return target


# ---------------------------------------------------------------------------
# 6. verification
# ---------------------------------------------------------------------------

def verify_outputs(paths):
    gadget = os.path.join(DIST, GADGET_ARCHIVE)
    with zipfile.ZipFile(gadget) as zf:
        if zf.testzip() is not None:
            raise BuildError("corrupt archive: " + GADGET_ARCHIVE)
        names = set(zf.namelist())
        if "gadget.xml" not in names:
            raise BuildError("gadget.xml must be at the root of " + GADGET_ARCHIVE)
        for loc in LOCALES:
            if loc != ROOT_LOCALE and loc + "/js/localizedStrings.js" not in names:
                raise BuildError("%s missing from %s" % (loc, GADGET_ARCHIVE))
    with zipfile.ZipFile(os.path.join(DIST, ZIP_NAME)) as zf:
        if zf.testzip() is not None:
            raise BuildError("corrupt archive: " + ZIP_NAME)
        names = set(zf.namelist())
        for need in ("Launch.cmd", "Remove.cmd", "README.txt", "LICENSE.txt", "NOTICE.md",
                     "tools/CleanGadgetSettings.ps1",
                     "Gadget/Weather.gadget/gadget.xml", "Gadget/Weather.gadget/js/weather.js",
                     "Gadget/Weather.gadget/it-IT/js/localizedStrings.js"):
            if ZIP_TOP + "/" + need not in names:
                raise BuildError("%s missing from %s" % (need, ZIP_NAME))
    forbidden = [name for name in names if name.lower().endswith((".rar", ".log", ".tmp", ".pyc"))]
    if forbidden:
        raise BuildError("temporary or source archive included in portable ZIP: " + ", ".join(forbidden))
    setup = os.path.join(DIST, SETUP_NAME)
    if setup in paths:
        with open(setup, "rb") as fh:
            if fh.read(2) != b"MZ":
                raise BuildError(SETUP_NAME + " is not a Windows executable")

    lines = []
    for path in paths:
        digest = hashlib.sha256(_read(path, "rb")).hexdigest()
        lines.append("%s  %s" % (digest, os.path.basename(path)))
    with io.open(os.path.join(DIST, "SHA256SUMS.txt"), "w", encoding="ascii", newline="\n") as fh:
        fh.write("\n".join(lines) + "\n")
    log("outputs verified; checksums in dist/SHA256SUMS.txt")
    for line in lines:
        print("    " + line)


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument("--skip-installer", action="store_true", help="do not run ISCC")
    parser.add_argument("--require-installer", action="store_true",
                        help="fail when ISCC is not available")
    parser.add_argument("--iscc", help="ISCC command (path, or e.g. 'wine C:\\IS6\\ISCC.exe')")
    parser.add_argument("--dist", help="output folder (default: dist)")
    parser.add_argument("--payload-zip", help="use a local copy of the pinned portable ZIP as the gadget baseline")
    parser.add_argument("--app-url", default=os.environ.get("APP_URL", ""),
                        help="project URL shown by the installer (AppPublisherURL)")
    args = parser.parse_args()
    if args.dist:
        set_dist(os.path.abspath(args.dist))

    try:
        version = read_version()
        log("version %s" % version)
        os.makedirs(DIST, exist_ok=True)
        assemble_source(args.payload_zip)
        validate_sources()
        stage_gadget()
        stage_extras()
        build_gadget_archive()
        outputs = [build_zip_package()]
        if not args.skip_installer:
            argv = find_iscc(args.iscc)
            if argv:
                outputs.insert(0, build_installer(argv, version, args.app_url))
            elif args.require_installer:
                raise BuildError("ISCC (Inno Setup 6) not found; install it or set ISCC")
            else:
                log("ISCC not found: installer skipped (use --require-installer to fail)")
        verify_outputs(outputs)
    except BuildError as exc:
        message = str(exc)
        print("[build] ERROR: %s" % message, file=sys.stderr)
        escaped = message.replace("%", "%25").replace("\r", "%0D").replace("\n", "%0A")
        print("::error title=Build failure::" + escaped)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
