@echo off
REM ===========================================================================
REM  Install.cmd  -  Installs the Windows 7 Weather gadget on Windows 10/11
REM
REM  Optional manual installer. Run it from an extracted build package
REM  containing gadget\Weather.gadget; the portable ZIP uses Launch.cmd instead.
REM
REM  Usage:
REM     Install.cmd              installs the Weather gadget. The interface
REM                              language follows the Windows display language
REM                              (20 languages, English fallback).
REM     Install.cmd -en          accepted for compatibility with older versions;
REM                              it has no effect any more
REM     Install.cmd -host        downloads and runs FIRST the official Gadgets
REM                              runtime installer (Gadgets Revived), then
REM                              installs the gadget
REM     Install.cmd -restart     restarts the sidebar after the installation
REM
REM  It does NOT require administrator privileges: the gadget is copied into
REM  the user's own folder. No system file is modified.
REM ===========================================================================

setlocal EnableDelayedExpansion

set "VAR=Weather"
set "GADGETNAME=Weather"
set "DOHOST=0"
set "DORESTART=0"
set "SIDEBAR="
set "SIDEBAR_IS_8GP=0"
set "HOSTREG=0"

:parseargs
REM -en used to select the English variant; a single multilingual gadget is
REM installed now, so the option is accepted and ignored.
if /i "%~1"=="-en"      shift
if /i "%~1"=="-host"    set "DOHOST=1"
if /i "%~1"=="-host"    shift
if /i "%~1"=="-restart" set "DORESTART=1"
if /i "%~1"=="-restart" shift
if /i "%~1"=="/?"       goto usage
if not "%~1"==""        goto badopt
goto start

:badopt
echo [X] Unrecognised option: %~1
echo.
goto usage

:start
set "HERE=%~dp0"
if "%HERE:~-1%"=="\" set "HERE=%HERE:~0,-1%"
set "SRC=%HERE%\gadget\%VAR%.gadget"
set "GADDIR=%LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets"
set "DEST=%GADDIR%\%VAR%.gadget"

echo.
echo ============================================================
echo   Installing the Windows 7 Weather gadget
echo ============================================================
echo.

REM ---- 0. basic checks ------------------------------------------------------
if not exist "%SRC%\gadget.xml" goto nosrc
echo [1/5] Gadget files found. OK

REM ---- 1. locate the Gadgets runtime (sidebar) ------------------------------
if exist "%ProgramFiles%\Windows Sidebar\sidebar.exe"      set "SIDEBAR=%ProgramFiles%\Windows Sidebar\sidebar.exe"
if exist "%ProgramFiles(x86)%\Windows Sidebar\sidebar.exe" set "SIDEBAR=%ProgramFiles(x86)%\Windows Sidebar\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\8GadgetPack.exe"      set "SIDEBAR=%ProgramFiles%\8GadgetPack.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\8GadgetPack.exe"      set "SIDEBAR_IS_8GP=1"
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\8GadgetPack.exe" set "SIDEBAR=%ProgramFiles(x86)%\8GadgetPack.exe"
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\8GadgetPack.exe" set "SIDEBAR_IS_8GP=1"

REM paths used by other installers
if not defined SIDEBAR if exist "%ProgramFiles%\Desktop Gadgets\sidebar.exe"      set "SIDEBAR=%ProgramFiles%\Desktop Gadgets\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles(x86)%\Desktop Gadgets\sidebar.exe" set "SIDEBAR=%ProgramFiles(x86)%\Desktop Gadgets\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\Gadgets Revived\sidebar.exe"      set "SIDEBAR=%ProgramFiles%\Gadgets Revived\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\Windows Sidebar\Gadgets"          set "HOSTREG=1"

REM last check: is the runtime registered among the installed programs?
if not defined SIDEBAR if "%HOSTREG%"=="0" (
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$p=@('HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*'); if (Get-ItemProperty $p -ErrorAction SilentlyContinue ^| Where-Object { $_.DisplayName -match 'Gadget' -or $_.DisplayName -match 'Sidebar' }) { exit 0 } else { exit 1 }"
    if not errorlevel 1 set "HOSTREG=1"
)

if not defined SIDEBAR if "%HOSTREG%"=="0" goto nohost

if defined SIDEBAR (
    echo [2/5] Gadgets runtime found: %SIDEBAR%
) else (
    echo [2/5] Gadgets runtime found ^(registered among the installed programs^).
)

if "%DOHOST%"=="1" goto downloadhost
goto install

:nohost
echo [2/5] Gadgets runtime NOT found.
echo.
echo       The Weather gadget needs a "host" that runs Windows 7 gadgets:
echo       Windows 10 and Windows 11 no longer include one
echo       ^(Microsoft removed it in 2012 for security reasons^).
echo.
echo       It takes 30 seconds, in a single step:
echo.
echo         A. Go to   https://gadgetsrevived.com/download-sidebar/
echo            ^(alternatively  https://8gadgetpack.net^)
echo         B. Download, extract and run the installer.
echo         C. Run Install.cmd again.
echo.
if "%DOHOST%"=="1" goto downloadhost
echo       Or run:   Install.cmd -host
echo       ^(downloads and launches the official Gadgets Revived installer
echo        automatically^).
echo.
pause
exit /b 2

:nosrc
echo [X] Cannot find the gadget files in:
echo       %SRC%
echo     Make sure you extracted the WHOLE archive and kept Install.cmd
echo     in the main folder.
echo.
pause
exit /b 1

REM ---- 2. install the gadget into the user's folder -------------------------
:install
echo [3/5] Installing...
if not exist "%GADDIR%" mkdir "%GADDIR%" >nul 2>&1
if not exist "%GADDIR%" goto mkdirfail

if exist "%DEST%" rmdir /s /q "%DEST%" >nul 2>&1
xcopy "%SRC%" "%DEST%\" /e /i /q /y >nul
if errorlevel 1 goto copyfail

REM ---- 3. verify ------------------------------------------------------------
if not exist "%DEST%\gadget.xml"             goto verifyfail
if not exist "%DEST%\js\wlservices_shim.js"  goto verifyfail
if not exist "%DEST%\weather.html"           goto verifyfail
if not exist "%DEST%\images"                 goto verifyfail
echo [4/5] Gadget installed into:
echo       %DEST%

REM ---- 4. open the gadget panel --------------------------------------------
echo [5/5] Opening the gadget panel...
if defined SIDEBAR (
    if "%SIDEBAR_IS_8GP%"=="1" (
        start "" "%SIDEBAR%"
    ) else (
        start "" "%SIDEBAR%" /showGadgets
    )
) else (
    echo       Could not find the sidebar executable: open the panel
    echo       by right-clicking the desktop -^> Gadgets.
)

if "%DORESTART%"=="1" (
    echo.
    echo Restarting the sidebar...
    taskkill /im sidebar.exe /f >nul 2>&1
    timeout /t 2 >nul
    if defined SIDEBAR start "" "%SIDEBAR%"
)

echo.
echo ============================================================
echo   DONE.
echo ============================================================
echo.
echo   1. In the "Gadget panel" window, double-click the Weather gadget
echo      ^(or drag it onto the desktop^).
echo   2. The first time, the data may take a few seconds.
echo   3. Hover over the gadget and use the mouse wheel to enlarge it.
echo   4. Click the wrench icon to search for your city and to
echo      choose degrees in Celsius.
echo.
echo   Note: if the gadget panel was already open, close it and reopen it.
echo.
pause
exit /b 0

:mkdirfail
echo [X] Cannot create the folder:
echo       %GADDIR%
pause
exit /b 3

:copyfail
echo [X] Copy failed towards:
echo       %DEST%
pause
exit /b 3

:verifyfail
echo [X] Installation incomplete: some files are missing in
echo       %DEST%
pause
exit /b 3

REM ---- optional download of the Gadgets runtime ----------------------------
:downloadhost
echo.
echo ------------------------------------------------------------
echo   Downloading the Gadgets runtime from the official site
echo   ^(Gadgets Revived - https://gadgetsrevived.com^)
echo ------------------------------------------------------------
set "TMPDL=%TEMP%\DesktopGadgetsInstaller.zip"
set "TMPDIR=%TEMP%\DesktopGadgetsExtract"
set "RUNTIME_SHA256=EA740299619747E5AEF1E667CD86B14F75CE0DB7A35883E2312B4EEEB68ED511"

echo Downloading...
powershell -NoProfile -ExecutionPolicy Bypass -Command "try { Invoke-WebRequest -Uri 'https://gadgetsrevived.com/wp-content/uploads/2013/10/DesktopGadgetsInstaller.zip' -OutFile '%TMPDL%' -UseBasicParsing; exit 0 } catch { exit 1 }"
if errorlevel 1 goto dlfail

REM The archive is verified against a known SHA-256 before anything is run.
echo Verifying the download (SHA-256)...
powershell -NoProfile -ExecutionPolicy Bypass -Command "if ((Get-FileHash -LiteralPath '%TMPDL%' -Algorithm SHA256).Hash -eq '%RUNTIME_SHA256%') { exit 0 } else { exit 1 }"
if errorlevel 1 goto hashfail

echo Download complete. Extracting...
if exist "%TMPDIR%" rmdir /s /q "%TMPDIR%" >nul 2>&1
powershell -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -LiteralPath '%TMPDL%' -DestinationPath '%TMPDIR%' -Force"
if errorlevel 1 goto exfail

set "DGEXE="
for %%F in ("%TMPDIR%\*.exe") do set "DGEXE=%%~fF"
if not defined DGEXE for /r "%TMPDIR%" %%F in (*.exe) do set "DGEXE=%%~fF"
if not defined DGEXE goto noexe

echo.
echo Starting the official installer:  %DGEXE%
echo.
echo Follow the on-screen instructions. It may ask for administrator rights:
echo they are needed to register the "sidebar" component in the system.
echo.
start "" "%DGEXE%"
echo.
echo ------------------------------------------------------------
echo   When the installer has finished, press a key below to
echo   continue with the gadget installation.
echo ------------------------------------------------------------
pause >nul

if exist "%ProgramFiles%\Windows Sidebar\sidebar.exe"      set "SIDEBAR=%ProgramFiles%\Windows Sidebar\sidebar.exe"
if exist "%ProgramFiles(x86)%\Windows Sidebar\sidebar.exe" set "SIDEBAR=%ProgramFiles(x86)%\Windows Sidebar\sidebar.exe"
if not defined SIDEBAR if exist "%ProgramFiles%\Windows Sidebar\Gadgets" set "HOSTREG=1"
if not defined SIDEBAR if "%HOSTREG%"=="0" goto stillnohost
goto install

:dlfail
echo [X] Download failed. Download it manually from:
echo       https://gadgetsrevived.com/download-sidebar/
pause
exit /b 4

:hashfail
echo [X] The downloaded file does not match the expected SHA-256 checksum,
echo     so it was not run. The file on the server may have changed.
echo     Download the runtime manually from:
echo       https://gadgetsrevived.com/download-sidebar/
del "%TMPDL%" >nul 2>&1
pause
exit /b 4

:exfail
echo [X] Extraction failed.
pause
exit /b 4

:noexe
echo [X] Could not find the executable inside the downloaded archive.
echo       Install it manually from https://gadgetsrevived.com/download-sidebar/
pause
exit /b 4

:stillnohost
echo [!] Sidebar not found. If the installer asked you to reboot,
echo     run Install.cmd again after the PC has restarted.
pause
exit /b 5

:usage
echo.
echo Usage:  Install.cmd [-host] [-restart]
echo.
echo   ^(no option^)   installs the Weather gadget ^(language follows Windows^)
echo   -en             ignored, kept for compatibility
echo   -host           downloads and installs the Gadgets runtime first
echo   -restart        restarts the sidebar at the end
echo.
pause
exit /b 0
