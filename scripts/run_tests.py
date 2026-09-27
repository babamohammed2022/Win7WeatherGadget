#!/usr/bin/env python3
"""Run the repository's unittest suite and expose failures as CI annotations.

The normal unittest output remains unchanged. GitHub Actions annotations provide
failure names and tracebacks through the Checks API even when downloadable logs
are temporarily unavailable.
"""

import sys
import unittest


def _annotation_escape(value):
    return value.replace("%", "%25").replace("\r", "%0D").replace("\n", "%0A")


def main():
    suite = unittest.defaultTestLoader.discover("tests")
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    if result.wasSuccessful():
        return 0

    for test, traceback in result.failures + result.errors:
        detail = "{}\n{}".format(test.id(), traceback[-6000:])
        print("::error title=Python unittest failure::{}".format(_annotation_escape(detail)))
    return 1


if __name__ == "__main__":
    sys.exit(main())
