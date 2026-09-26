Windows 7 Weather Gadget
========================

A port of the Windows 7 Weather gadget for Windows 10 and Windows 11.
The original Microsoft gadget is kept as it was; only its data source was
replaced, because the MSN weather service it used has been shut down.

WHAT THIS SETUP DOES
- Copies the gadget to your user profile:
    %LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets\Weather.gadget
- Copies this document, the license and a clean-up script to:
    %LOCALAPPDATA%\Programs\Windows 7 Weather Gadget
- Adds an entry to Settings > Apps so that you can uninstall it.
It does not need administrator rights and does not change system files,
drivers, security settings or the Windows registry outside your own
uninstall entry.

REQUIREMENT: A GADGET RUNTIME
Windows 10 and 11 no longer include the program that runs desktop gadgets.
You need a third-party gadget runtime, for example Gadgets Revived
(https://gadgetsrevived.com/download-sidebar/) or 8GadgetPack
(https://8gadgetpack.net). If none is found, the next page explains how to
install one. Nothing is downloaded unless you click the download button.

LANGUAGE
The gadget follows the Windows display language. It is available in 20
languages; other languages use English.

INTERNET AND PRIVACY
When it runs, the gadget contacts:
- api.open-meteo.com and geocoding-api.open-meteo.com (forecasts and city
  search, https://open-meteo.com)
- api.bigdatacloud.net (only to name a location from coordinates)
No account, API key or personal data is required, and nothing is sent other
than the coordinates or the city name needed for each request.

AFTER THE INSTALLATION
Right-click the desktop, choose "Gadgets" and double-click the Weather
gadget. Use the wrench icon to choose your city and the temperature unit.

LICENSE
The gadget contains files from the original Windows 7 Weather gadget,
Copyright (c) 2009 Microsoft Corporation, which are not covered by the
project license. The code written for this project is released under the
MIT License. See LICENSE.txt and NOTICE.md in the installation folder.
