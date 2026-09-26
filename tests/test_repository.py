#!/usr/bin/env python3
"""Repository, localization, build and package tests (Python standard library only).

Run from the repository root:

    python -m unittest discover -s tests -v

What is covered
---------------
* repository structure, encodings and absence of temporary/backup files;
* Microsoft's original gadget files are unchanged except the documented patches
  (compared with tests/fixtures/original-gadget-hashes.json);
* scripts/check_localization.py passes, and FAILS on a missing key, a missing
  locale, a forbidden character or a broken placeholder (negative tests);
* scripts/build.py rejects missing gadget files;
* the built gadget and Win7WeatherGadget-Portable.zip have the expected
  structure, contain no development material, and are reproducible;
* installer script consistency (languages, output name, privileges, version);
* the version is the same everywhere.
"""

import hashlib
import importlib.util
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import unittest
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "src", "Weather.gadget")
LOCALES = [
    "en-US", "it-IT", "de-DE", "fr-FR", "es-ES", "pt-BR", "nl-NL", "pl-PL",
    "ru-RU", "ja-JP", "ko-KR", "zh-CN", "zh-TW", "tr-TR", "sv-SE", "nb-NO",
    "da-DK", "fi-FI", "cs-CZ", "hu-HU",
]
# Microsoft files that carry documented patches (docs/PATCHES.md).
PATCHED = {"js/weather.js", "js/settings.js", "js/localizedStrings.js"}
# Written for the port (not Microsoft code).
PROJECT_FILES = {"js/wlservices_shim.js"}


def _read(path, mode="r", **kwargs):
    """Read a whole file and close it."""
    if mode == "rb":
        with open(path, "rb") as f:
            return f.read()
    with io.open(path, **kwargs) as f:
        return f.read()


def read_text(path, encoding="utf-8"):
    with io.open(path, encoding=encoding) as f:
        return f.read()


def read_version():
    with io.open(os.path.join(ROOT, "VERSION"), encoding="utf-8") as fh:
        return fh.read().strip()


def load_build_module():
    spec = importlib.util.spec_from_file_location("build", os.path.join(ROOT, "scripts", "build.py"))
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def normalized_sha(path):
    data = _read(path, "rb")
    if data[:2] == b"\xff\xfe":
        data = data[2:].decode("utf-16-le").encode("utf-8")
    if path.endswith((".js", ".css", ".html", ".xml")):
        data = data.decode("utf-8").replace("\r\n", "\n").encode("utf-8")
    return hashlib.sha256(data).hexdigest()


def run_checker(gadget_dir):
    return subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "check_localization.py"),
                           "--gadget", gadget_dir, "--quiet"],
                          stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True,
                          encoding="utf-8")


class RepositoryTests(unittest.TestCase):

    def test_required_files(self):
        for rel in ["README.md", "LICENSE", "NOTICE.md", "CHANGELOG.md", "VERSION", ".gitignore",
                    ".gitattributes", "package.json", "package-lock.json",
                    "installer/Setup.iss", "installer/README.txt", "installer/README.it.txt", "installer/icon.ico",
                    "scripts/build.py", "scripts/check_localization.py", "scripts/run_tests.py",
                    "scripts/Install.cmd", "scripts/Uninstall.cmd", "scripts/Diagnostics.cmd",
                    "scripts/Launch.cmd", "scripts/Remove.cmd", "portable/README.txt",
                    "scripts/tools/CleanGadgetSettings.ps1", "scripts/tools/Diagnostics.ps1",
                    ".github/workflows/build.yml", "docs/PATCHES.md", "docs/LOCALIZATION.md", "docs/BUILD.md"]:
            self.assertTrue(os.path.isfile(os.path.join(ROOT, rel)), rel)

    def test_twenty_gadget_languages(self):
        folders = sorted(d for d in os.listdir(SRC) if re.match(r"^[a-z]{2}-[A-Z]{2}$", d))
        self.assertEqual(sorted(l for l in LOCALES if l != "en-US"), folders)
        self.assertEqual(20, len(LOCALES))

    def test_no_temporary_or_backup_files(self):
        bad = []
        skip = {".git", "node_modules", "dist"}
        for dirpath, dirnames, filenames in os.walk(ROOT):
            dirnames[:] = [d for d in dirnames if d not in skip]
            for f in filenames:
                if re.search(r"(\.bak|\.tmp|\.orig|\.rej|~|\.swp|\.log|Thumbs\.db|\.DS_Store)$", f):
                    bad.append(os.path.relpath(os.path.join(dirpath, f), ROOT))
        self.assertEqual([], bad)
        archives = []
        for dirpath, dirnames, filenames in os.walk(ROOT):
            dirnames[:] = [d for d in dirnames if d not in {".git", "node_modules", "dist"}]
            archives.extend(os.path.join(dirpath, f) for f in filenames if f.lower().endswith(".rar"))
        self.assertEqual([], archives, "source archives must not be tracked in the project tree")

    def test_gadget_text_files_are_utf8_without_bom(self):
        for dirpath, _, filenames in os.walk(SRC):
            for f in filenames:
                if f.endswith((".js", ".html", ".css", ".xml")):
                    data = _read(os.path.join(dirpath, f), "rb")
                    self.assertFalse(data.startswith(b"\xef\xbb\xbf") or data.startswith(b"\xff\xfe"), f)
                    data.decode("utf-8")

    def test_cmd_scripts_are_ascii(self):
        for name in ("Install.cmd", "Uninstall.cmd", "Diagnostics.cmd", "Launch.cmd", "Remove.cmd"):
            _read(os.path.join(ROOT, "scripts", name), "rb").decode("ascii")

    def test_technical_comments_are_not_italian(self):
        # The original port had Italian comments; technical text is now English.
        # Localized user-facing strings (localizedStrings.js, .isl, README.it.txt) are excluded.
        pattern = re.compile(r"\b(PATCH \(porting|perche'|piu'|non e'|localita'|gia'|il gadget|questo file)\b", re.I)
        offenders = []
        for rel in ["js/weather.js", "js/settings.js", "js/wlservices_shim.js", "js/library.js",
                    "weather.html", "settings.html"]:
            text = read_text(os.path.join(SRC, rel), encoding="utf-8")
            if pattern.search(text):
                offenders.append(rel)
        for rel in ["installer/Setup.iss", "scripts/build.py", "scripts/tools/CleanGadgetSettings.ps1",
                    "scripts/tools/Diagnostics.ps1", "scripts/Install.cmd", "scripts/Uninstall.cmd",
                    "scripts/Launch.cmd", "scripts/Remove.cmd", "installer/legacy/InstallWizard.ps1",
                    "installer/legacy/launcher.c"]:
            text = read_text(os.path.join(ROOT, rel), encoding="utf-8-sig")
            if pattern.search(text):
                offenders.append(rel)
        self.assertEqual([], offenders)


class PreservationTests(unittest.TestCase):
    """Microsoft's files must be unchanged except for the documented patches."""

    def test_original_files_unchanged(self):
        with io.open(os.path.join(ROOT, "tests", "fixtures", "original-gadget-hashes.json"), encoding="utf-8") as fh:
            original = json.load(fh)["files"]
        changed, missing = [], []
        for rel, info in original.items():
            path = os.path.join(SRC, rel)
            if not os.path.isfile(path):
                missing.append(rel)
            elif normalized_sha(path) != info["sha256"] and rel not in PATCHED | PROJECT_FILES:
                changed.append(rel)
        self.assertEqual([], missing, "original files missing")
        self.assertEqual([], changed, "original files modified without being documented")
        self.assertEqual(165, len(original))

    def test_patched_files_are_documented(self):
        text = read_text(os.path.join(ROOT, "docs", "PATCHES.md"), encoding="utf-8")
        for rel in PATCHED | PROJECT_FILES | {"weather.html", "settings.html"}:
            self.assertIn(rel.split("/")[-1], text)


class LocalizationCheckerTests(unittest.TestCase):

    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.gadget = os.path.join(self.tmp, "Weather.gadget")
        shutil.copytree(SRC, self.gadget, ignore=shutil.ignore_patterns("images"))

    def tearDown(self):
        shutil.rmtree(self.tmp, ignore_errors=True)

    def edit(self, rel, fn):
        path = os.path.join(self.gadget, rel)
        text = read_text(path, encoding="utf-8")
        with io.open(path, "w", encoding="utf-8", newline="") as fh:
            fh.write(fn(text))

    def test_passes_on_repository(self):
        result = run_checker(SRC)
        self.assertEqual(0, result.returncode, result.stdout)

    def test_fails_on_missing_key(self):
        self.edit("de-DE/js/localizedStrings.js",
                  lambda t: re.sub(r"^L_localizedStrings_Text\['SkyText-Fog'\].*\n", "", t, flags=re.M))
        result = run_checker(self.gadget)
        self.assertEqual(1, result.returncode)
        self.assertIn("de-DE: missing key 'SkyText-Fog'", result.stdout)

    def test_fails_on_missing_locale(self):
        shutil.rmtree(os.path.join(self.gadget, "ko-KR"))
        result = run_checker(self.gadget)
        self.assertEqual(1, result.returncode)
        self.assertIn("ko-KR", result.stdout)

    def test_fails_on_forbidden_character(self):
        self.edit("fr-FR/js/localizedStrings.js",
                  lambda t: re.sub(r"(\['Celsius'\] = ')", r"\1<b>", t))
        result = run_checker(self.gadget)
        self.assertEqual(1, result.returncode)
        self.assertIn("'Celsius' contains", result.stdout)

    def test_fails_on_broken_placeholder(self):
        self.edit("ja-JP/js/localizedStrings.js",
                  lambda t: re.sub(r"(\['ageStampMessage'\] = ')[^']*'", r"\1%1'", t))
        result = run_checker(self.gadget)
        self.assertEqual(1, result.returncode)
        self.assertIn("placeholders of 'ageStampMessage'", result.stdout)

    def test_fails_on_invalid_default_unit(self):
        self.edit("it-IT/js/localizedStrings.js",
                  lambda t: t.replace("['DefaultUnit'] = 'Celsius'", "['DefaultUnit'] = 'Centigradi'"))
        result = run_checker(self.gadget)
        self.assertEqual(1, result.returncode)
        self.assertIn("DefaultUnit", result.stdout)


class BuildTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.mkdtemp()
        cls.dist = os.path.join(cls.tmp, "dist")
        cls.result = subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "build.py"),
                                     "--skip-installer", "--dist", cls.dist],
                                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp, ignore_errors=True)

    def test_build_succeeds(self):
        self.assertEqual(0, self.result.returncode, self.result.stdout)

    def test_gadget_archive_structure(self):
        with zipfile.ZipFile(os.path.join(self.dist, "Weather.gadget")) as zf:
            names = zf.namelist()
            self.assertIsNone(zf.testzip())
            self.assertIn("gadget.xml", names)
            self.assertFalse([n for n in names if n.endswith("/")], "no directory entries")
            self.assertFalse([n for n in names if "\\" in n], "forward slashes only")
            for loc in LOCALES[1:]:
                self.assertIn(loc + "/js/localizedStrings.js", names)
                self.assertIn(loc + "/gadget.xml", names)
            src_count = sum(len(f) for _, _, f in os.walk(SRC))
            self.assertEqual(src_count, len(names))
            for n in names:
                data = zf.read(n)
                src = _read(os.path.join(SRC, n), "rb")
                if n.endswith((".js", ".html", ".css")):
                    self.assertTrue(data.startswith(b"\xff\xfe"), n + " must be UTF-16LE with BOM")
                    text = data[2:].decode("utf-16-le")
                    self.assertNotIn("\n", text.replace("\r\n", ""), n + " must use CRLF")
                    self.assertEqual(src.decode("utf-8").replace("\r\n", "\n"), text.replace("\r\n", "\n"), n)
                else:
                    self.assertEqual(src, data, n)

    def test_zip_package_structure(self):
        package = os.path.join(self.dist, "Win7WeatherGadget-Portable.zip")
        with zipfile.ZipFile(package) as zf:
            names = set(zf.namelist())
            self.assertIsNone(zf.testzip())
            top = "Win7WeatherGadget-Portable/"
            expected_root = {
                top + "Launch.cmd", top + "Remove.cmd", top + "README.txt",
                top + "LICENSE.txt", top + "NOTICE.md",
                top + "tools/CleanGadgetSettings.ps1",
            }
            self.assertTrue(expected_root.issubset(names))
            self.assertTrue(all(n.startswith(top) for n in names))
            self.assertIn(top + "Gadget/Weather.gadget/gadget.xml", names)
            self.assertIn(top + "Gadget/Weather.gadget/js/weather.js", names)
            self.assertIn(top + "Gadget/Weather.gadget/it-IT/js/localizedStrings.js", names)
            self.assertFalse([n for n in names if n.lower().endswith((".exe", ".rar", ".pyc", ".log", ".tmp"))])
            self.assertFalse([n for n in names if any(x in n.lower() for x in ("/tests/", "/docs/", "/.git/", "node_modules"))])
            for n in names:
                if n.endswith((".cmd", ".ps1")):
                    data = zf.read(n)
                    self.assertNotIn(b"\n", data.replace(b"\r\n", b""), n + " must use CRLF")
                if n.endswith(".ps1"):
                    self.assertTrue(zf.read(n).startswith(b"\xef\xbb\xbf"), n + " needs a BOM for PowerShell 5.1")

    def test_checksums(self):
        sums = read_text(os.path.join(self.dist, "SHA256SUMS.txt"), encoding="ascii")
        digest = hashlib.sha256(_read(os.path.join(self.dist, "Win7WeatherGadget-Portable.zip"), "rb")).hexdigest()
        self.assertIn(digest + "  Win7WeatherGadget-Portable.zip", sums)

    def test_reproducible(self):
        dist2 = os.path.join(self.tmp, "dist2")
        subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "build.py"), "--skip-installer",
                        "--dist", dist2], stdout=subprocess.PIPE, check=True)
        for name in ("Weather.gadget", "Win7WeatherGadget-Portable.zip"):
            a = _read(os.path.join(self.dist, name), "rb")
            b = _read(os.path.join(dist2, name), "rb")
            self.assertEqual(hashlib.sha256(a).hexdigest(), hashlib.sha256(b).hexdigest(), name)


class MissingFileTests(unittest.TestCase):

    def test_build_rejects_missing_gadget_file(self):
        build = load_build_module()
        tmp = tempfile.mkdtemp()
        try:
            gadget = os.path.join(tmp, "Weather.gadget")
            shutil.copytree(SRC, gadget, ignore=shutil.ignore_patterns("images"))
            os.makedirs(os.path.join(gadget, "images"))
            os.remove(os.path.join(gadget, "js", "weather.js"))
            build.SRC = gadget
            with self.assertRaises(build.BuildError) as ctx:
                build.validate_sources()
            self.assertIn("js/weather.js", str(ctx.exception))
        finally:
            shutil.rmtree(tmp, ignore_errors=True)


class InstallerTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.iss = read_text(os.path.join(ROOT, "installer", "Setup.iss"), encoding="utf-8")

    def test_output_and_privileges(self):
        self.assertRegex(self.iss, r"(?m)^OutputBaseFilename=Win7WeatherGadget-Setup\s*$")
        self.assertRegex(self.iss, r"(?m)^PrivilegesRequired=lowest\s*$")
        self.assertIn("{localappdata}\\Microsoft\\Windows Sidebar\\Gadgets\\{#GadgetFolder}", self.iss)
        self.assertRegex(self.iss, r"(?m)^AppId=\{\{27597258-B883-4963-96DA-901C49BCA9EA\}")

    def test_no_system_changes(self):
        self.assertNotRegex(self.iss, r"(?m)^\[Registry\]")
        # The registry is only READ (runtime detection); nothing is written.
        self.assertNotRegex(self.iss, r"RegWrite|RegDelete")
        # Files are only written below the user's profile: no install
        # destination in a system or all-users folder. ({sys} is still used
        # to *run* taskkill.exe and powershell.exe.)
        forbidden = ("{sys}", "{syswow64}", "{win}", "{pf}", "{commonpf}", "{commonappdata}",
                     "{commondesktop}", "{commonstartmenu}", "{group}")
        for line in self.iss.splitlines():
            m = re.search(r'(?i)\b(DestDir|Name)\s*:\s*"([^"]*)"', line)
            if m and re.match(r"(?i)^(Source|Name|Type)\s*:", line.strip()):
                for const in forbidden:
                    self.assertNotIn(const, m.group(2), line)
        self.assertNotIn("{win}", self.iss)
        self.assertRegex(self.iss, r"(?m)^DefaultDirName=\{localappdata\}")

    def test_runtime_page_text_is_not_clipped(self):
        # The translated text is up to twice as long as English (German was
        # cut off with a fixed height): the label must size itself.
        block = self.iss.split("RuntimeInfo := TNewStaticText.Create", 1)[1].split("BtnInstallRuntime :=", 1)[0]
        self.assertRegex(block, r"RuntimeInfo\.AutoSize\s*:=\s*True")
        self.assertRegex(block, r"RuntimeInfo\.WordWrap\s*:=\s*True")
        self.assertNotRegex(block, r"RuntimeInfo\.Height\s*:=")
        self.assertIn("BtnInstallRuntime.Top := RuntimeInfo.Top + RuntimeInfo.Height", self.iss)

    def test_runtime_download_is_opt_in_and_verified(self):
        self.assertRegex(self.iss, r'#define RuntimeZipSHA256 "[0-9a-f]{64}"')
        # DownloadTemporaryFile/DownloadPage is only used inside the button handler.
        handler = self.iss.split("procedure BtnInstallRuntimeClick", 1)[1].split("\nend;", 1)[0]
        self.assertIn("RUNTIME_ZIP_SHA256", handler)
        outside = self.iss.replace(handler, "")
        self.assertNotIn("DownloadPage.Download", outside)
        self.assertNotIn("DownloadTemporaryFile(", outside)

    def test_all_languages_referenced(self):
        lang_dir = os.path.join(ROOT, "installer", "Languages")
        files = sorted(f for f in os.listdir(lang_dir) if f.endswith((".isl", ".islu")))
        refs = re.findall(r"Languages\\([A-Za-z]+\.islu?)", self.iss)
        self.assertEqual(77, len(files))
        self.assertEqual(sorted(files), sorted(set(refs)))
        self.assertEqual(len(refs), len(set(refs)), "each language once")
        custom = sorted(os.listdir(os.path.join(lang_dir, "Custom")))
        custom_refs = set(re.findall(r"Languages\\Custom\\([A-Za-z]+\.isl)", self.iss))
        self.assertEqual(20, len(custom))
        self.assertEqual(set(custom), custom_refs)
        self.assertEqual(78, len(re.findall(r'(?m)^Name: "', self.iss.split("[Languages]", 1)[1].split("\n[", 1)[0])))

    def test_built_installer_if_present(self):
        exe = os.path.join(ROOT, "dist", "Win7WeatherGadget-Setup.exe")
        if not os.path.isfile(exe):
            self.skipTest("installer not built in this environment")
        with open(exe, "rb") as fh:
            self.assertEqual(b"MZ", fh.read(2))


class ReleasePackagingTests(unittest.TestCase):

    def test_workflow_releases_only_the_two_named_files(self):
        workflow = read_text(os.path.join(ROOT, ".github", "workflows", "build.yml"), encoding="utf-8")
        release = workflow.split("- name: Create or update GitHub release", 1)[1]
        self.assertIn("dist/Win7WeatherGadget-Setup.exe", release)
        self.assertIn("dist/Win7WeatherGadget-Portable.zip", release)
        self.assertNotIn("dist/Weather.gadget", release)
        self.assertNotIn("dist/SHA256SUMS.txt", release)
        self.assertIn("runs-on: windows-latest", workflow)
        self.assertIn("python scripts/build.py --require-installer", workflow)

    def test_portable_launcher_and_removal_are_user_scoped(self):
        launch = read_text(os.path.join(ROOT, "scripts", "Launch.cmd"), encoding="ascii")
        remove = read_text(os.path.join(ROOT, "scripts", "Remove.cmd"), encoding="ascii")
        self.assertIn("%LOCALAPPDATA%\\Microsoft\\Windows Sidebar\\Gadgets", launch)
        self.assertIn("Gadget\\Weather.gadget", launch)
        self.assertNotIn("powershell", launch.lower())
        self.assertIn("-GadgetNames Weather-Portable", remove)
        self.assertNotIn("reg add", launch.lower())
        self.assertNotIn("reg add", remove.lower())


class VersionTests(unittest.TestCase):

    def test_version_is_consistent(self):
        version = read_version()
        self.assertRegex(version, r"^\d+\.\d+\.\d+$")
        with io.open(os.path.join(ROOT, "package.json"), encoding="utf-8") as fh:
            self.assertEqual(version, json.load(fh)["version"])
        changelog = read_text(os.path.join(ROOT, "CHANGELOG.md"), encoding="utf-8")
        first = re.search(r"^## \[?v?(\d+\.\d+\.\d+)\]?", changelog, re.M)
        self.assertIsNotNone(first)
        self.assertEqual(version, first.group(1))
        readme = read_text(os.path.join(ROOT, "README.md"), encoding="utf-8")
        self.assertIn(version, readme)
        iss = read_text(os.path.join(ROOT, "installer", "Setup.iss"), encoding="utf-8")
        self.assertIn('FileOpen(AddBackslash(SourcePath) + "..\\VERSION")', iss)


if __name__ == "__main__":
    unittest.main()
