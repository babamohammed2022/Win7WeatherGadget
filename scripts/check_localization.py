#!/usr/bin/env python3
"""Validates the gadget and installer localizations.

By default the English master file is read from dist/source/Weather.gadget,
which scripts/build.py reconstructs from the pinned release payload and the
project's source overlays. For each of the 19 other supported languages the
script checks:

* the locale folder exists with gadget.xml and js/localizedStrings.js;
* every English key is present, with no duplicates and no unknown extra keys;
* no value is empty;
* placeholders (%1, %2) match the English text;
* no value contains "<", ">" or "&" (many strings are inserted with innerHTML);
* DefaultUnit is exactly "Celsius" or "Fahrenheit";
* DefaultLocationCode has the "latitude,longitude|label" format;
* GeocodingLanguage / ReverseGeocodingLanguage look like language codes;
* LOCNAME_ARRAY is defined;
* gadget.xml is well formed and identical to the English manifest apart from
  the translated <name> and <description>.

It also checks that each installer custom-message file
(installer/Languages/Custom/*.isl) defines the same keys as English.isl.

Exit code 0 when everything is valid, 1 otherwise (the build and CI fail).

Usage:  python scripts/check_localization.py [--gadget DIR] [--installer-custom DIR]
"""

import argparse
import io
import os
import re
import sys
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LOCALES = [
    "en-US", "it-IT", "de-DE", "fr-FR", "es-ES", "pt-BR", "nl-NL", "pl-PL",
    "ru-RU", "ja-JP", "ko-KR", "zh-CN", "zh-TW", "tr-TR", "sv-SE", "nb-NO",
    "da-DK", "fi-FI", "cs-CZ", "hu-HU",
]
ROOT_LOCALE = "en-US"

ENTRY_RE = re.compile(r"^\s*L_localizedStrings_Text\[\s*'([^']+)'\s*\]\s*=\s*(.*?)\s*;\s*$")
LANG_CODE_RE = re.compile(r"^[a-z]{2,3}(-[A-Za-z]{2,4})?$")
LOCATION_CODE_RE = re.compile(r"^-?\d{1,2}(\.\d+)?,-?\d{1,3}(\.\d+)?\|.+$")
PLACEHOLDER_RE = re.compile(r"%\d")
FORBIDDEN_CHARS = "<>&"


def _read(path, mode="r", **kwargs):
    """Read a whole file and close it."""
    if mode == "rb":
        with open(path, "rb") as f:
            return f.read()
    with io.open(path, **kwargs) as f:
        return f.read()


def parse_js_string(literal):
    """Parses a single- or double-quoted JavaScript string literal."""
    if len(literal) < 2 or literal[0] not in "'\"" or literal[-1] != literal[0]:
        raise ValueError("not a simple string literal: %s" % literal)
    body, quote, out, i = literal[1:-1], literal[0], [], 0
    escapes = {"n": "\n", "r": "\r", "t": "\t", "\\": "\\", "'": "'", '"': '"', "0": "\0"}
    while i < len(body):
        ch = body[i]
        if ch == quote:
            raise ValueError("unescaped quote in: %s" % literal)
        if ch != "\\":
            out.append(ch)
            i += 1
            continue
        nxt = body[i + 1] if i + 1 < len(body) else ""
        if nxt == "u":
            out.append(chr(int(body[i + 2:i + 6], 16)))
            i += 6
        elif nxt == "x":
            out.append(chr(int(body[i + 2:i + 4], 16)))
            i += 4
        elif nxt in escapes:
            out.append(escapes[nxt])
            i += 2
        else:
            out.append(nxt)
            i += 2
    return "".join(out)


def read_strings(path, errors):
    """Returns an ordered list of (key, value) and records syntax problems."""
    entries = []
    raw = _read(path, "rb")
    if raw.startswith(b"\xef\xbb\xbf"):
        errors.append("%s: must be UTF-8 without BOM" % rel(path))
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError as exc:
        errors.append("%s: invalid UTF-8 (%s)" % (rel(path), exc))
        return entries
    if "LOCNAME_ARRAY" not in text:
        errors.append("%s: LOCNAME_ARRAY is not defined" % rel(path))
    for num, line in enumerate(text.splitlines(), 1):
        if "L_localizedStrings_Text[" not in line or line.lstrip().startswith("//"):
            continue
        m = ENTRY_RE.match(line)
        if not m:
            errors.append("%s:%d: unrecognized string definition" % (rel(path), num))
            continue
        try:
            entries.append((m.group(1), parse_js_string(m.group(2))))
        except ValueError as exc:
            errors.append("%s:%d: %s" % (rel(path), num, exc))
    return entries


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def manifest_signature(path, errors):
    try:
        tree = ET.parse(path)
    except ET.ParseError as exc:
        errors.append("%s: invalid XML (%s)" % (rel(path), exc))
        return None, None
    root = tree.getroot()
    name = (root.findtext("name") or "").strip()
    sig = []
    for el in root.iter():
        if el.tag in ("name", "description"):
            sig.append((el.tag, "<translated>"))
        else:
            sig.append((el.tag, sorted(el.attrib.items()), (el.text or "").strip()))
    return name, sig


def check_gadget(gadget_dir, errors, report):
    master_path = os.path.join(gadget_dir, "js", "localizedStrings.js")
    if not os.path.isfile(master_path):
        errors.append("missing English master file: %s" % rel(master_path))
        return
    master_entries = read_strings(master_path, errors)
    master = dict(master_entries)
    if len(master) != len(master_entries):
        errors.append("%s: duplicate keys" % rel(master_path))
    en_name, en_sig = manifest_signature(os.path.join(gadget_dir, "gadget.xml"), errors)

    expected_dirs = set(l for l in LOCALES if l != ROOT_LOCALE)
    actual_dirs = set(d for d in os.listdir(gadget_dir)
                      if re.match(r"^[a-z]{2,3}-[A-Z]{2}$", d) and os.path.isdir(os.path.join(gadget_dir, d)))
    for extra in sorted(actual_dirs - expected_dirs):
        errors.append("unexpected locale folder %s (not in the supported list)" % extra)

    for loc in LOCALES:
        if loc == ROOT_LOCALE:
            path, entries = master_path, master_entries
        else:
            loc_dir = os.path.join(gadget_dir, loc)
            path = os.path.join(loc_dir, "js", "localizedStrings.js")
            if not os.path.isfile(path):
                errors.append("%s: missing js/localizedStrings.js" % loc)
                report.append((loc, 0, len(master), "MISSING"))
                continue
            entries = read_strings(path, errors)
            manifest = os.path.join(loc_dir, "gadget.xml")
            if not os.path.isfile(manifest):
                errors.append("%s: missing gadget.xml" % loc)
            else:
                name, sig = manifest_signature(manifest, errors)
                if sig is not None and en_sig is not None and sig != en_sig:
                    errors.append("%s/gadget.xml differs from the English manifest outside <name>/<description>" % loc)
                if sig is not None and not name:
                    errors.append("%s/gadget.xml: empty <name>" % loc)

        values = {}
        for key, value in entries:
            if key in values:
                errors.append("%s: duplicate key '%s'" % (loc, key))
            values[key] = value
        missing = [k for k in master if k not in values]
        extra = [k for k in values if k not in master]
        for k in missing:
            errors.append("%s: missing key '%s'" % (loc, k))
        for k in extra:
            errors.append("%s: unknown key '%s' (not in the English master)" % (loc, k))

        for key, value in values.items():
            if value.strip() == "":
                errors.append("%s: empty value for '%s'" % (loc, key))
            bad = [c for c in FORBIDDEN_CHARS if c in value]
            if bad:
                errors.append("%s: '%s' contains %s (strings are inserted with innerHTML)"
                              % (loc, key, " ".join(repr(c) for c in bad)))
            if key in master and sorted(PLACEHOLDER_RE.findall(value)) != sorted(PLACEHOLDER_RE.findall(master[key])):
                errors.append("%s: placeholders of '%s' differ from English" % (loc, key))
        if values.get("DefaultUnit") not in (None, "Celsius", "Fahrenheit"):
            errors.append("%s: DefaultUnit must be 'Celsius' or 'Fahrenheit'" % loc)
        code = values.get("DefaultLocationCode")
        if code is not None and not LOCATION_CODE_RE.match(code):
            errors.append("%s: DefaultLocationCode must be 'lat,lon|label'" % loc)
        for key in ("GeocodingLanguage", "ReverseGeocodingLanguage"):
            if key in values and not LANG_CODE_RE.match(values[key]):
                errors.append("%s: %s is not a language code" % (loc, key))
        report.append((loc, len([k for k in master if k in values]), len(master),
                       "OK" if not missing and not extra else "INCOMPLETE"))


def read_isl_keys(path, errors):
    keys = []
    try:
        text = _read(path, encoding="utf-8-sig")
    except UnicodeDecodeError as exc:
        errors.append("%s: invalid UTF-8 (%s)" % (rel(path), exc))
        return keys
    section = None
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith(";"):
            continue
        if line.startswith("["):
            section = line
            continue
        if section == "[CustomMessages]" and "=" in line:
            key, value = line.split("=", 1)
            if not value.strip():
                errors.append("%s: empty value for %s" % (rel(path), key))
            keys.append(key.strip())
    return keys


def check_installer(custom_dir, errors):
    english = os.path.join(custom_dir, "English.isl")
    if not os.path.isfile(english):
        errors.append("missing %s" % rel(english))
        return 0
    master = read_isl_keys(english, errors)
    files = sorted(f for f in os.listdir(custom_dir) if f.endswith(".isl"))
    for name in files:
        keys = read_isl_keys(os.path.join(custom_dir, name), errors)
        for k in master:
            if k not in keys:
                errors.append("installer %s: missing custom message %s" % (name, k))
        for k in keys:
            if k not in master:
                errors.append("installer %s: unknown custom message %s" % (name, k))
    return len(files)


def main():
    parser = argparse.ArgumentParser(description="Validate the gadget and installer localizations.")
    parser.add_argument("--gadget", default=os.path.join(ROOT, "dist", "source", "Weather.gadget"))
    parser.add_argument("--installer-custom", default=os.path.join(ROOT, "installer", "Languages", "Custom"))
    parser.add_argument("--quiet", action="store_true")
    args = parser.parse_args()

    errors, report = [], []
    check_gadget(os.path.abspath(args.gadget), errors, report)
    n_isl = check_installer(os.path.abspath(args.installer_custom), errors)

    if not args.quiet:
        print("Gadget languages (%d supported):" % len(LOCALES))
        for loc, found, total, status in report:
            print("  %-6s %3d/%-3d keys  %s" % (loc, found, total, status))
        print("Installer custom-message files: %d" % n_isl)
    if errors:
        print("\nLocalization check FAILED (%d problems):" % len(errors), file=sys.stderr)
        for e in errors:
            print("  - " + e, file=sys.stderr)
        return 1
    print("Localization check passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
