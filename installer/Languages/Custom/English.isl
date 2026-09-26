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
