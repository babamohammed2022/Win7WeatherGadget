@echo off
REM Removes only the Weather gadget added by the portable launcher.

setlocal
set "DEST=%LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets\Weather-Portable.gadget"
set "CLEANER=%~dp0tools\CleanGadgetSettings.ps1"

if exist "%DEST%" (
    rmdir /s /q "%DEST%"
    if exist "%DEST%" (
        echo Could not remove the gadget folder. Close Weather in the gadget runtime and retry.
        pause
        exit /b 1
    )
)

if exist "%CLEANER%" (
    powershell -NoProfile -ExecutionPolicy Bypass -File "%CLEANER%" -GadgetNames Weather-Portable
    if errorlevel 1 echo The gadget files were removed, but saved settings cleanup failed.
)

echo The Weather gadget files were removed from this user's profile.
echo The separate gadget runtime was not changed.
pause
exit /b 0
