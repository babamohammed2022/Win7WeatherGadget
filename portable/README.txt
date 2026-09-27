Windows 7 Weather Gadget - Portable Package
=============================================

This ZIP does not use the traditional setup wizard. Extract the complete
Win7WeatherGadget-Portable folder, then run Launch.cmd.

REQUIRED RUNTIME
Windows 10 and Windows 11 do not include a Windows Sidebar gadget runtime.
Install one separately before use, such as Gadgets Revived or 8GadgetPack.
This package does not contain or install that runtime. On 64-bit Windows
Launch.cmd only starts the 64-bit sidebar.exe (GadgetPack 38 no longer runs
its 32-bit version).

Windows 7 includes the gadget platform: no runtime is needed. If it has
been turned off, Launch.cmd explains how to turn it back on. Windows 7 also
keeps Microsoft's original Weather gadget, which no longer receives data:
if the gallery shows two Weather gadgets, use "Show details"; this one ends
with "Weather data by Open-Meteo."

WHAT LAUNCH.CMD DOES
Launch.cmd copies the gadget into the current user's Windows Sidebar gadget
folder and opens the runtime's gadget gallery. This per-user staging step is
required by the gadget runtime; therefore this package is not fully portable
or runtime-independent. It does not install a traditional application, need
administrator rights, or modify Windows system files or machine-wide settings.

To remove the staged gadget, close it in the runtime and run Remove.cmd.
Remove.cmd deletes the Weather gadget folder and its saved gadget settings.
It does not remove the separately installed runtime or other gadgets.

Internet access is needed for weather forecasts and location search. No
account or API key is required. The interface follows the Windows display
language when supported; otherwise it uses English.

The original Windows 7 Weather gadget materials are copyright Microsoft
Corporation. See NOTICE.md and LICENSE.txt for attribution and license scope.
