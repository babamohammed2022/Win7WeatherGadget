<#
    CleanGadgetSettings.ps1

    Removes from the sidebar's settings.ini the sections that belong to the
    Weather gadget, leaving every other one untouched.

    Actual format of settings.ini:

        [Root]
        SettingsVersion="00.00.00.01"
        SidebarShowState="Imploded"
        SidebarDockedPartsOrder="0x8,0x7,0x4,0x1,"
        Section0="8"
        Section1="7"
        ...
        [Section 8]
        PrivateSetting_GadgetName="C:%5C...%5CGadgets%5CMeteo.Gadget"
        PrivateSetting_Enabled="true"
        WeatherLocation="Roma"
        WeatherLocationCode="41.9028%2C12.4964%7CRoma"
        DisplayDegreesIn="Celsius"

    The script deletes the gadget's [Section N] blocks, and also removes
    the references left in [Root] (SectionK="N" and SidebarDockedPartsOrder),
    so the sidebar does not try to load a gadget that no longer exists. The
    remaining SectionK entries are renumbered 0, 1, 2, ... in their original
    order.

    Only gadgets in the per-user gadget folder
    (%LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets) are matched. Microsoft's
    own Weather gadget in "Program Files\Windows Sidebar\Gadgets", installed
    by some gadget runtimes, is never touched.

    The file is written back in its original encoding (UTF-16LE, UTF-8 with
    BOM or ANSI). A backup is always created.

    -GadgetNames  folder names without ".gadget" (default: Meteo and Weather;
                  Meteo.gadget is the Italian variant of earlier versions).
                  The installer's uninstaller passes only "Weather".
#>

param(
    [string[]]$GadgetNames = @('Meteo', 'Weather'),
    [string]$SettingsPath = (Join-Path $env:LOCALAPPDATA 'Microsoft\Windows Sidebar\settings.ini')
)

if (-not (Test-Path -LiteralPath $SettingsPath)) {
    Write-Host "  No settings file found at:"
    Write-Host "    $SettingsPath"
    exit 0
}

# --- read, remembering the encoding -----------------------------------------
$bytes = [System.IO.File]::ReadAllBytes($SettingsPath)
if ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xFE) {
    $encoding = New-Object System.Text.UnicodeEncoding($false, $true)
} elseif ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFE -and $bytes[1] -eq 0xFF) {
    $encoding = New-Object System.Text.UnicodeEncoding($true, $true)
} elseif ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
    $encoding = New-Object System.Text.UTF8Encoding($true)
} else {
    $encoding = [System.Text.Encoding]::Default
}
$raw = $encoding.GetString($bytes)
$preamble = $encoding.GetPreamble()
if ($preamble.Length -gt 0 -and $raw.Length -gt 0 -and $raw[0] -eq [char]0xFEFF) { $raw = $raw.Substring(1) }
if ([string]::IsNullOrWhiteSpace($raw)) { Write-Host "  Settings file is empty."; exit 0 }

# A block belongs to the gadget when its PrivateSetting_GadgetName points to
# <...>\Microsoft\Windows Sidebar\Gadgets\<Name>.gadget (URL-encoded or not).
$names = ($GadgetNames | ForEach-Object { [regex]::Escape($_) }) -join '|'
$pattern = '(?im)^\s*PrivateSetting_GadgetName\s*=\s*"?[^"\r\n]*Microsoft(%5C|\\)Windows(%20| )Sidebar(%5C|\\)Gadgets(%5C|\\)(' + $names + ')\.gadget(%5C|\\)?"?\s*$'

# --- split into blocks, keeping the headers ----------------------------------
$blocks = New-Object System.Collections.Generic.List[string]
$current = New-Object System.Collections.Generic.List[string]
foreach ($line in ($raw -split "`r?`n")) {
    if ($line -match '^\s*\[' -and $current.Count -gt 0) {
        $blocks.Add(($current -join "`r`n")); $current.Clear()
    }
    $current.Add($line)
}
if ($current.Count -gt 0) { $blocks.Add(($current -join "`r`n")) }

# --- find the gadget's sections ---------------------------------------------
$removedIdx = New-Object System.Collections.Generic.List[int]
$keep = New-Object System.Collections.Generic.List[string]

foreach ($b in $blocks) {
    $isGadget = ($b -match $pattern)
    $idx = $null
    if ($b -match '(?m)^\s*\[\s*Section\s+(\d+)\s*\]') { $idx = [int]$Matches[1] }
    if ($isGadget -and $idx -ne $null) {
        $removedIdx.Add($idx)
        Write-Host "  Removing [Section $idx] (Weather gadget)"
        continue
    }
    $keep.Add($b)
}

if ($removedIdx.Count -eq 0) {
    Write-Host "  No Weather gadget settings found."
    exit 0
}

# --- clean the references in [Root] -----------------------------------------
$removedHex = $removedIdx | ForEach-Object { '0x{0:X}' -f $_ }
$removedDec = $removedIdx | ForEach-Object { [string]$_ }

for ($i = 0; $i -lt $keep.Count; $i++) {
    if ($keep[$i] -notmatch '(?m)^\s*\[\s*Root\s*\]') { continue }

    $lines = $keep[$i] -split "`r?`n"
    $out = New-Object System.Collections.Generic.List[string]
    $next = 0

    foreach ($l in $lines) {
        if ($l -match '(?i)^\s*Section\d+\s*=\s*"?(\d+)"?\s*$') {
            if ($removedDec -contains $Matches[1]) {
                Write-Host "  Removing reference in [Root]: $($l.Trim())"
                continue
            }
            # keep the list contiguous: Section0, Section1, ...
            $l = 'Section' + $next + '="' + $Matches[1] + '"'
            $next++
        }
        if ($l -match '(?i)^\s*SidebarDockedPartsOrder\s*=\s*"(.*)"\s*$') {
            $parts = @($Matches[1] -split ',' | Where-Object { $_ -ne '' })
            $filtered = @($parts | Where-Object { $removedHex -notcontains $_.Trim() })
            if ($filtered.Count -ne $parts.Count) {
                Write-Host "  Updating SidebarDockedPartsOrder in [Root]"
                $value = ''
                if ($filtered.Count -gt 0) { $value = ($filtered -join ',') + ',' }
                $l = 'SidebarDockedPartsOrder="' + $value + '"'
            }
        }
        $out.Add($l)
    }
    $keep[$i] = ($out -join "`r`n")
}

# --- backup and write -------------------------------------------------------
$backup = "$SettingsPath.bak-before-removing-weather"
Copy-Item -LiteralPath $SettingsPath -Destination $backup -Force

$newText = ($keep -join "`r`n")
$newText = $newText -replace "(`r`n){3,}", "`r`n`r`n"
$outBytes = $encoding.GetPreamble() + $encoding.GetBytes($newText)
[System.IO.File]::WriteAllBytes($SettingsPath, [byte[]]$outBytes)

Write-Host "  Backup saved to:"
Write-Host "    $backup"
