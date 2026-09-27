@echo off
REM ===========================================================================
REM  Uninstall.cmd  -  Completely removes the Weather gadget
REM
REM  Usage:
REM     Uninstall.cmd        removes the gadget only ^(leaves the Gadgets
REM                          runtime in place^)
REM     Uninstall.cmd -all   as above, and also helps you remove the runtime
REM
REM  There is nothing to "undo" at system level: the gadget lives in the user's
REM  own folder and has not touched any Windows file.
REM ===========================================================================

setlocal EnableDelayedExpansion

set "REMOVED=0"
set "DOTALL=0"
if /i "%~1"=="-all" set "DOTALL=1"
if /i "%~1"=="/?" goto usage

set "HERE=%~dp0"
if "%HERE:~-1%"=="\" set "HERE=%HERE:~0,-1%"
set "GADDIR=%LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets"
set "SETTINGS=%LOCALAPPDATA%\Microsoft\Windows Sidebar\settings.ini"

echo.
echo ============================================================
echo   Uninstalling the Weather gadget
echo ============================================================
echo.

echo [1/3] Closing the sidebar ^(if running^)...
taskkill /im sidebar.exe /f >nul 2>&1
timeout /t 2 >nul

echo [2/3] Removing the gadget files...
REM "Meteo.gadget" is the Italian variant installed by earlier versions of
REM this project; it is removed too.
for %%G in (Meteo Weather) do (
    if exist "%GADDIR%\%%G.gadget" (
        rmdir /s /q "%GADDIR%\%%G.gadget" >nul 2>&1
        if exist "%GADDIR%\%%G.gadget" (
            echo       [!] Cannot remove %GADDIR%\%%G.gadget
        ) else (
            echo       Removed: %GADDIR%\%%G.gadget
            set "REMOVED=1"
        )
    )
)
if "%REMOVED%"=="0" echo       No Weather gadget found in %GADDIR%

echo [3/3] Cleaning the saved settings...
powershell -NoProfile -ExecutionPolicy Bypass -File "%HERE%\tools\CleanGadgetSettings.ps1"
if errorlevel 1 echo       [!] Settings cleanup failed ^(this is not a problem^).

echo.
echo ============================================================
echo   Uninstall complete.
echo ============================================================
echo.
echo   Removed:
echo     - the gadget folder ^(files, images, code^)
echo     - its settings ^(city, Celsius, interval^)
echo.
echo   Nothing else was touched: no system file,
echo   no DLL, no Windows registry entry.
echo.

if "%DOTALL%"=="1" (
    echo.
    echo ------------------------------------------------------------
    echo   Removing the Gadgets runtime ^(sidebar^)
    echo ------------------------------------------------------------
    echo   Opening "Apps": look for the entry
    echo   "Windows Gadgets" ^(Gadgets Revived^) or
    echo   "8GadgetPack" and uninstall it from there.
    echo.
    start "" ms-settings:apps
    echo   ^(On older versions: Control Panel ^>
    echo    Uninstall a program^).
    echo.
)

echo   If you had other gadgets on the desktop, restart the sidebar
echo   ^(or reboot the PC^) to see them again.
echo.
pause
exit /b 0

:usage
echo.
echo Usage:  Uninstall.cmd [-all]
echo.
echo   ^(no option^)  removes the Weather gadget only
echo   -all          also helps you remove the Gadgets runtime
echo.
pause
exit /b 0
