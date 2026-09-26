@echo off
REM ===========================================================================
REM  Diagnostics.cmd  -  Checks that everything works and shows the weather
REM                       data exactly as the gadget would fetch it.
REM
REM  Usage:   Diagnostics.cmd [city name]
REM  Example: Diagnostics.cmd Rome
REM ===========================================================================

setlocal EnableDelayedExpansion
set "HERE=%~dp0"
if "%HERE:~-1%"=="\" set "HERE=%HERE:~0,-1%"
set "CITY=Rome"
if not "%~1"=="" set "CITY=%~1"

echo.
echo ============================================================
echo   Weather gadget diagnostics
echo ============================================================

powershell -NoProfile -ExecutionPolicy Bypass -File "%HERE%\tools\Diagnostics.ps1" -City "%CITY%"
set "RC=%ERRORLEVEL%"

echo.
if not "%RC%"=="0" (
    echo If something is wrong, check in this order:
    echo   1. is the sidebar ^(Gadgets runtime^) installed?
    echo   2. was the gadget installed ^(Setup.exe or Install.cmd^)?
    echo   3. can the PC reach the internet on port 443 ^(HTTPS^)?
    echo   4. antivirus / corporate proxy not blocking api.open-meteo.com
)
echo.
pause
exit /b %RC%
