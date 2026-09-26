"""Tests for scripts/tools/CleanGadgetSettings.ps1 (used by Uninstall.cmd and
by the installer's uninstaller).

The real script is executed on a sample settings.ini. PowerShell is looked up
in this order: the PWSH environment variable, "powershell" (Windows
PowerShell 5.1, always present on Windows and on the CI runner), "pwsh". The
tests are skipped when none is available.

Replaces work/test_clean.py of the source package, which tested a Python copy
of the logic instead of the script itself.

Run: python -m unittest tests.test_clean_settings -v
"""

import os
import shutil
import subprocess
import tempfile
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPT = os.path.join(ROOT, "scripts", "tools", "CleanGadgetSettings.ps1")

USER_GADGETS = "C:%5CUsers%5Cmario%5CAppData%5CLocal%5CMicrosoft%5CWindows%20Sidebar%5CGadgets%5C"
SYSTEM_GADGETS = "C:%5CProgram%20Files%5CWindows%20Sidebar%5CGadgets%5C"

# Format of a real settings.ini. Section 1 is Microsoft's own Weather gadget
# in Program Files (installed by some gadget runtimes): it must be kept.
SAMPLE = "\r\n".join([
    "[Root]",
    'SettingsVersion="00.00.00.01"',
    'SidebarShowState="Imploded"',
    'SidebarDockedPartsOrder="0x8,0x7,0x4,0x1,0x9,"',
    'Section0="8"',
    'Section1="7"',
    'Section2="4"',
    'Section3="1"',
    'Section4="9"',
    "",
    "[Section 1]",
    'PrivateSetting_GadgetName="' + SYSTEM_GADGETS + 'Weather.Gadget"',
    'PrivateSetting_Enabled="true"',
    'WeatherLocation="Seattle, WA"',
    "",
    "[Section 4]",
    'PrivateSetting_GadgetName="' + USER_GADGETS + 'CPU.Gadget"',
    'PrivateSetting_Enabled="true"',
    "",
    "[Section 7]",
    'PrivateSetting_GadgetName="' + USER_GADGETS + 'Clock.Gadget"',
    'PrivateSetting_Enabled="true"',
    'clockName="Sveglia \u00e0\u00e8\u00ec"',
    "",
    "[Section 8]",
    'PrivateSetting_GadgetName="' + USER_GADGETS + 'Weather.gadget"',
    'PrivateSetting_Enabled="true"',
    'WeatherLocation="\u6771\u4eac, \u65e5\u672c"',
    'WeatherLocationCode="35.6895%2C139.6917%7C%E6%9D%B1%E4%BA%AC"',
    "",
    "[Section 9]",
    'PrivateSetting_GadgetName="' + USER_GADGETS + 'Meteo.gadget"',
    'PrivateSetting_Enabled="true"',
    'WeatherLocation="Roma"',
    "",
])


def find_powershell():
    candidates = [os.environ.get("PWSH"), "powershell", "pwsh"]
    for c in candidates:
        if c and shutil.which(c):
            return shutil.which(c)
    return None


POWERSHELL = find_powershell()


@unittest.skipIf(POWERSHELL is None, "PowerShell not available")
class CleanGadgetSettingsTests(unittest.TestCase):

    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.ini = os.path.join(self.tmp, "settings.ini")

    def tearDown(self):
        shutil.rmtree(self.tmp, ignore_errors=True)

    def write(self, text, encoding):
        if encoding == "utf-16":
            data = b"\xff\xfe" + text.encode("utf-16-le")
        elif encoding == "utf-8-sig":
            data = b"\xef\xbb\xbf" + text.encode("utf-8")
        else:
            data = text.encode("ascii")
        with open(self.ini, "wb") as f:
            f.write(data)
        return data

    def read_bytes(self):
        with open(self.ini, "rb") as f:
            return f.read()

    def clean(self, *args):
        cmd = [POWERSHELL, "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", SCRIPT,
               "-SettingsPath", self.ini] + list(args)
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                                universal_newlines=True, timeout=120)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertEqual(result.stderr.strip(), "", result.stderr)
        return result.stdout

    def test_removes_weather_and_meteo_by_default(self):
        self.write(SAMPLE, "utf-16")
        self.clean()
        data = self.read_bytes()
        self.assertTrue(data.startswith(b"\xff\xfe"), "UTF-16LE BOM must be kept")
        text = data[2:].decode("utf-16-le")
        # the gadget's sections are gone
        self.assertNotIn("[Section 8]", text)
        self.assertNotIn("[Section 9]", text)
        self.assertNotIn(USER_GADGETS + "Weather.gadget", text)
        self.assertNotIn(USER_GADGETS + "Meteo.gadget", text)
        # Microsoft's Weather gadget in Program Files and the others are kept
        self.assertIn("[Section 1]", text)
        self.assertIn(SYSTEM_GADGETS + "Weather.Gadget", text)
        self.assertIn('WeatherLocation="Seattle, WA"', text)
        self.assertIn("[Section 4]", text)
        self.assertIn('clockName="Sveglia \u00e0\u00e8\u00ec"', text)
        # [Root]: references removed, the rest renumbered in the same order
        self.assertIn('SidebarDockedPartsOrder="0x7,0x4,0x1,"', text)
        root = text.split("[Section", 1)[0]
        self.assertIn('Section0="7"\r\nSection1="4"\r\nSection2="1"', root)
        self.assertNotIn("Section3=", root)
        # CRLF only
        self.assertNotIn("\n", text.replace("\r\n", ""))

    def test_backup_is_identical_to_the_original(self):
        original = self.write(SAMPLE, "utf-16")
        self.clean()
        with open(self.ini + ".bak-before-removing-weather", "rb") as f:
            self.assertEqual(f.read(), original)

    def test_installer_mode_keeps_meteo(self):
        # The installer's uninstaller passes -GadgetNames Weather.
        self.write(SAMPLE, "utf-16")
        self.clean("-GadgetNames", "Weather")
        text = self.read_bytes()[2:].decode("utf-16-le")
        self.assertNotIn("[Section 8]", text)
        self.assertIn("[Section 9]", text)
        self.assertIn(USER_GADGETS + "Meteo.gadget", text)
        self.assertIn('SidebarDockedPartsOrder="0x7,0x4,0x1,0x9,"', text)

    def test_utf8_bom_is_kept(self):
        self.write(SAMPLE, "utf-8-sig")
        self.clean()
        data = self.read_bytes()
        self.assertTrue(data.startswith(b"\xef\xbb\xbf"))
        text = data[3:].decode("utf-8")
        self.assertNotIn("[Section 8]", text)
        self.assertIn('clockName="Sveglia \u00e0\u00e8\u00ec"', text)

    def test_ansi_file_without_bom(self):
        ascii_sample = SAMPLE.replace("\u00e0\u00e8\u00ec", "abc").replace("\u6771\u4eac, \u65e5\u672c", "Tokyo")
        self.write(ascii_sample, "ascii")
        self.clean()
        data = self.read_bytes()
        self.assertFalse(data.startswith((b"\xff\xfe", b"\xef\xbb\xbf")), "no BOM must be added")
        text = data.decode("ascii")
        self.assertNotIn("[Section 8]", text)
        self.assertIn("[Section 7]", text)

    def test_nothing_to_remove_leaves_file_untouched(self):
        text = SAMPLE.split("[Section 8]")[0].rstrip("\r\n") + "\r\n"
        text = text.replace(',0x8', '').replace('0x8,', '').replace(',0x9', '')
        original = self.write(text, "utf-16")
        out = self.clean()
        self.assertIn("No Weather gadget settings found", out)
        self.assertEqual(self.read_bytes(), original)
        self.assertFalse(os.path.exists(self.ini + ".bak-before-removing-weather"))

    def test_only_gadget_removed_gives_empty_docked_order(self):
        text = "\r\n".join([
            "[Root]",
            'SidebarDockedPartsOrder="0x2,"',
            'Section0="2"',
            "",
            "[Section 2]",
            'PrivateSetting_GadgetName="' + USER_GADGETS + 'Weather.gadget"',
            "",
        ])
        self.write(text, "utf-16")
        self.clean()
        result = self.read_bytes()[2:].decode("utf-16-le")
        self.assertIn('SidebarDockedPartsOrder=""', result)
        self.assertNotIn("Section0=", result)
        self.assertNotIn("[Section 2]", result)

    def test_missing_file_is_not_an_error(self):
        out = self.clean()  # self.ini was never created
        self.assertIn("No settings file found", out)


@unittest.skipIf(POWERSHELL is None, "PowerShell not available")
class PowerShellSyntaxTests(unittest.TestCase):

    def test_scripts_parse(self):
        scripts = [os.path.join(ROOT, "scripts", "tools", n)
                   for n in ("CleanGadgetSettings.ps1", "Diagnostics.ps1")]
        for path in scripts:
            command = ("$e = $null; [void][System.Management.Automation.Language.Parser]::ParseFile("
                       "'%s', [ref]$null, [ref]$e); $e | ForEach-Object { $_.Message }; exit $e.Count"
                       % path.replace("'", "''"))
            result = subprocess.run([POWERSHELL, "-NoProfile", "-Command", command],
                                    stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                                    universal_newlines=True, timeout=120)
            self.assertEqual(result.returncode, 0, path + ": " + result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
