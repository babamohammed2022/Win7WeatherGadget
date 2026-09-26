@echo off
REM Launches the Weather gadget from the extracted portable package.
REM A separate Windows Sidebar-compatible gadget runtime is required.

setlocal
set "SRC=%~dp0Gadget\Weather.gadget"
set "GADDIR=%LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets"
set "DEST=%GADDIR%\Weather-Portable.gadget"
set "SIDEBAR="
set "SIDEBAR_IS_8GP=0"

if not exist "%SRC%\gadget.xml" goto nosrc
if exist "%ProgramFiles%\Windows Sidebar\sidebar.exe" set "SIDEBAR=%ProgramFiles%\Windows Sidebar\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\Windows Sidebar\sidebar.exe" set "SIDEBAR=%ProgramFiles(x86)%\Windows Sidebar\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\Desktop Gadgets\sidebar.exe" set "SIDEBAR=%ProgramFiles%\Desktop Gadgets\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\Desktop Gadgets\sidebar.exe" set "SIDEBAR=%ProgramFiles(x86)%\Desktop Gadgets\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\Gadgets Revived\sidebar.exe" set "SIDEBAR=%ProgramFiles%\Gadgets Revived\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\Gadgets Revived\sidebar.exe" set "SIDEBAR=%ProgramFiles(x86)%\Gadgets Revived\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\8GadgetPack.exe" (
    set "SIDEBAR=%ProgramFiles%\8GadgetPack.exe"
    set "SIDEBAR_IS_8GP=1"
)
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\8GadgetPack.exe" (
    set "SIDEBAR=%ProgramFiles(x86)%\8GadgetPack.exe"
    set "SIDEBAR_IS_8GP=1"
)
if not defined SIDEBAR goto nohost

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
echo.
pause
exit /b 0

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
