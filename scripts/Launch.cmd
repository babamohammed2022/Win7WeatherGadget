@echo off
REM Launches the Weather gadget from the extracted portable package.
REM Windows 10/11 need a separate Windows Sidebar-compatible gadget runtime;
REM Windows 7 includes the gadget platform.

setlocal
set "SRC=%~dp0Gadget\Weather.gadget"
set "GADDIR=%LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets"
set "DEST=%GADDIR%\Weather-Portable.gadget"
set "SIDEBAR="
set "SIDEBAR_IS_8GP=0"
set "NATIVE=0"

if not exist "%SRC%\gadget.xml" goto nosrc

REM Windows Vista and 7 (6.0, 6.1) include the gadget platform.
for /f "tokens=2 delims=[]" %%V in ('ver') do set "WINVER=%%V"
for /f "tokens=2,3 delims=. " %%A in ("%WINVER%") do if "%%A"=="6" if %%B LEQ 1 set "NATIVE=1"

REM Only the runtime of the architecture of Windows is used: on 64-bit
REM Windows the 32-bit sidebar.exe in "Program Files (x86)" is never started
REM (GadgetPack 38 refuses it; on Windows 7 it would be a second sidebar).
REM ProgramW6432 is the 64-bit Program Files even from a 32-bit process.
set "PF=%ProgramFiles%"
if defined ProgramW6432 set "PF=%ProgramW6432%"
if exist "%PF%\Windows Sidebar\sidebar.exe" set "SIDEBAR=%PF%\Windows Sidebar\sidebar.exe"
if "%NATIVE%"=="1" goto nativecheck
if not defined SIDEBAR if exist "%PF%\Desktop Gadgets\sidebar.exe" set "SIDEBAR=%PF%\Desktop Gadgets\sidebar.exe"
if not defined SIDEBAR if exist "%PF%\Gadgets Revived\sidebar.exe" set "SIDEBAR=%PF%\Gadgets Revived\sidebar.exe"
if not defined SIDEBAR if exist "%PF%\Windows Sidebar\8GadgetPack.exe" (
    set "SIDEBAR=%PF%\Windows Sidebar\8GadgetPack.exe"
    set "SIDEBAR_IS_8GP=1"
)
if not defined SIDEBAR goto nohost
goto stage

:nativecheck
if not defined SIDEBAR goto nativeoff
reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\Windows\Sidebar" /v TurnOffSidebar 2>nul | findstr /i /r "0x[1-9a-f]" >nul && goto nativeoff
reg query "HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\Windows\Sidebar" /v TurnOffSidebar 2>nul | findstr /i /r "0x[1-9a-f]" >nul && goto nativeoff

:stage

if not exist "%GADDIR%" mkdir "%GADDIR%" >nul 2>&1
if not exist "%GADDIR%" goto copyfail
xcopy "%SRC%\*" "%DEST%\" /e /i /q /y >nul
if errorlevel 1 goto copyfail
if not exist "%DEST%\gadget.xml" goto copyfail

if "%SIDEBAR_IS_8GP%"=="1" (
    start "" "%SIDEBAR%"
) else (
    start "" "%SIDEBAR%" /showGadgets
)

echo.
echo The Weather gadget has been added to your user profile.
echo In the gadget gallery, double-click Weather to show it.
echo Use Remove.cmd to remove the added gadget files and saved settings.
if "%NATIVE%"=="1" (
    echo.
    echo Windows 7 also includes Microsoft's original Weather gadget, which no
    echo longer receives data. If the gallery shows two Weather gadgets, select
    echo one and click "Show details": this one ends with
    echo "Weather data by Open-Meteo."
)
echo.
pause
exit /b 0

:nativeoff
echo The Windows gadget platform is part of Windows 7, but it is turned off.
echo Nothing needs to be downloaded, it only needs to be turned back on:
echo  - Control Panel ^> Programs ^> Turn Windows features on or off,
echo    select "Windows Gadget Platform" and click OK;
echo  - if gadgets were turned off by a policy ^(Microsoft Fix it 50906^),
echo    remove the TurnOffSidebar policy ^(Microsoft Fix it 50907^).
echo Then run Launch.cmd again.
pause
exit /b 2

:nohost
echo A Windows Sidebar-compatible gadget runtime is required but was not found.
echo Install a runtime separately, such as Gadgets Revived or 8GadgetPack,
echo then run Launch.cmd again. The runtime is not included in this package.
echo https://gadgetsrevived.com/download-sidebar/
echo https://8gadgetpack.net/
pause
exit /b 2

:nosrc
echo Gadget files are missing. Extract the complete portable ZIP before launching.
pause
exit /b 1

:copyfail
echo Could not stage the gadget in the current user's gadget folder:
echo %DEST%
pause
exit /b 3
