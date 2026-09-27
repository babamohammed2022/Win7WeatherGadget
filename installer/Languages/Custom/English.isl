; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: English
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from compiler:Default.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Gadget runtime
WGRuntimeDesc=Windows 10 and Windows 11 no longer include the program that runs desktop gadgets.
WGRuntimeText=The Weather gadget runs inside a desktop gadget runtime (the "sidebar"), which was not found on this computer.%n%nYou can install it now: the runtime (about 5 MB) is downloaded from gadgetsrevived.com only if you click the button below, and its checksum is verified before it is run. Its setup may ask for administrator rights. You can also continue and install it later.
WGRuntimeDownloadBtn=Download and install the gadget runtime
WGRuntimePageBtn=Open the download page
WGRuntimeRecheckBtn=Check again
WGRuntimeFound=The gadget runtime is installed. Click Next to continue.
WGRuntimeNotFound=The gadget runtime is not installed.
WGRuntimeDownloadFailed=The download failed or the file did not match the expected checksum, so nothing was run.%n%nUse "Open the download page" to install the runtime manually.
WGRuntimeExtractFailed=The downloaded archive could not be extracted.%n%nUse "Open the download page" to install the runtime manually.
WGRuntimeLaunchFailed=The runtime setup could not be started.
WGRuntimeStillMissing=The gadget runtime still cannot be found. The gadget will be installed, but it will not appear until the runtime is installed.
WGContinueAnyway=Continue anyway?
WGShowGadgets=Open the gadget gallery
WGNativeTitle=Windows gadget platform
WGNativeDesc=Windows 7 includes the desktop gadget platform, but it is turned off on this computer.
WGNativeText=The Weather gadget runs in the desktop gadget platform (the "Sidebar"), which is part of Windows 7: nothing needs to be downloaded, the platform only needs to be turned back on.%n%n- If the Windows Gadget Platform feature is off: open Control Panel > Programs > Turn Windows features on or off, select "Windows Gadget Platform" and click OK.%n- If gadgets were turned off by a policy (for example with Microsoft Fix it 50906): remove the TurnOffSidebar policy (Microsoft Fix it 50907 does this) or ask your administrator.%n%nThen click "Check again". You can also continue now: the gadget is installed and appears as soon as the platform is turned on.
WGNativeFound=The Windows gadget platform is turned on. Click Next to continue.
WGNativePolicyOff=Gadgets are turned off by a policy (TurnOffSidebar).
WGNativeFeatureOff=The Windows Gadget Platform feature is turned off.
WGNativeStillOff=The Windows gadget platform is still turned off. The gadget will be installed, but it will not appear until the platform is turned on.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=The gadget platform is part of Windows: no additional software is needed.
WGNativeNoteText=Windows 7 also includes Microsoft's original Weather gadget, which no longer receives any weather data. After the installation the gadget gallery may show two Weather gadgets with the same icon.%n%nTo pick the right one, select a Weather gadget in the gallery and click "Show details": the description of this one ends with "Weather data by Open-Meteo."%n%nIf the original Weather gadget is on your desktop, close it and add this one from the gallery; then choose your city again.
