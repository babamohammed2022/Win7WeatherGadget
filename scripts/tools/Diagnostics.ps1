<#
    Diagnostics.ps1

    Checks that everything the Weather gadget needs is in place:
      1. Gadgets runtime (sidebar) installed
      2. Weather gadget installed
      3. reachability of the APIs the gadget uses
      4. full simulation of the gadget's data path
         (location search -> forecast -> icons)

    Usage:  powershell -ExecutionPolicy Bypass -File Diagnostics.ps1 [-City "Rome"]

    Note: this file is UTF-8 with BOM on purpose. Windows PowerShell 5.1 reads
    .ps1 files without a BOM using the local ANSI code page, which would
    corrupt the degree sign.
#>

param([string]$City = "Rome")

$ErrorActionPreference = 'Stop'
function OK($m)   { Write-Host "  [OK]   $m" -ForegroundColor Green }
function KO($m)   { Write-Host "  [FAIL] $m" -ForegroundColor Red }
function Info($m) { Write-Host "  [..]   $m" -ForegroundColor Gray }
function Head($m) { Write-Host ""; Write-Host "=== $m ===" -ForegroundColor Cyan }

$fail = 0

Head "1. Gadgets runtime (sidebar)"
$found = $false
foreach ($p in @("$env:ProgramFiles\Windows Sidebar\sidebar.exe",
                 "${env:ProgramFiles(x86)}\Windows Sidebar\sidebar.exe",
                 "$env:ProgramFiles\Desktop Gadgets\sidebar.exe",
                 "$env:ProgramFiles\Gadgets Revived\sidebar.exe",
                 "$env:ProgramFiles\8GadgetPack.exe",
                 "${env:ProgramFiles(x86)}\8GadgetPack.exe")) {
    if (Test-Path $p) { OK "found: $p"; $found = $true; break }
}
if (-not $found) { KO "sidebar not found: install the runtime (gadgetsrevived.com or 8gadgetpack.net)"; $fail++ }

Head "2. Gadget installed"
$gad = "$env:LOCALAPPDATA\Microsoft\Windows Sidebar\Gadgets"
foreach ($g in @('Meteo','Weather')) {
    $d = Join-Path $gad "$g.gadget"
    if (Test-Path $d) {
        $hasXml = Test-Path (Join-Path $d 'gadget.xml')
        $hasShim = Test-Path (Join-Path $d 'js\wlservices_shim.js')
        $nImg = (Get-ChildItem (Join-Path $d 'images') -File -ErrorAction SilentlyContinue).Count
        if ($hasXml -and $hasShim) { OK "$g.gadget installed ($nImg images, manifest and shim present)" }
        else { KO "$g.gadget installed but incomplete (manifest=$hasXml shim=$hasShim)"; $fail++ }
    } else {
        Info "$g.gadget not installed"
    }
}

Head "3. API reachability"
$urls = @{
    'Forecast  (Open-Meteo)'   = 'https://api.open-meteo.com/v1/forecast?latitude=41.9028&longitude=12.4964&current=temperature_2m,weather_code,is_day'
    'Geocoding  (Open-Meteo)'  = 'https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=London'
    'Reverse geo (BigDataCloud)' = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=41.9028&longitude=12.4964'
}
foreach ($k in $urls.Keys) {
    try {
        $r = Invoke-WebRequest -Uri $urls[$k] -UseBasicParsing -TimeoutSec 20
        if ($r.StatusCode -eq 200) { OK "$k  ->  HTTP 200" } else { KO "$k  ->  HTTP $($r.StatusCode)"; $fail++ }
    } catch {
        KO "$k  ->  $($_.Exception.Message)"; $fail++
        Info "Check antivirus/firewall/proxy: the gadget must be able to reach HTTPS (port 443)."
    }
}

Head "4. Simulation of the gadget data path"
try {
    $geo = Invoke-RestMethod -Uri "https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=$([uri]::EscapeDataString($City))" -TimeoutSec 20
    if (-not $geo.results -or $geo.results.Count -eq 0) { KO "no result for '$City'"; $fail++ }
    else {
        $loc = $geo.results[0]
        $label = $loc.name + $(if ($loc.admin1) { ", $($loc.admin1)" }) + $(if ($loc.country) { ", $($loc.country)" })
        OK "location found: $label  [$($loc.latitude), $($loc.longitude)]"
        $q = "https://api.open-meteo.com/v1/forecast?latitude=$($loc.latitude)&longitude=$($loc.longitude)" +
             "&current=temperature_2m,weather_code,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min" +
             "&temperature_unit=fahrenheit&timezone=auto&forecast_days=5"
        $w = Invoke-RestMethod -Uri $q -TimeoutSec 20
        $f = [math]::Round($w.current.temperature_2m)
        $c = [math]::Round(($w.current.temperature_2m - 32) * 5 / 9)
        OK "current temperature: $f F  =  $c °C"
        Info "the gadget always receives Fahrenheit and converts to Celsius (like the original)"
        Info "WMO weather code: $($w.current.weather_code)   day/night: $(if($w.current.is_day){'day'}else{'night'})"
        Write-Host ""
        Write-Host "  Forecast (as the gadget shows it):" -ForegroundColor Cyan
        $dow = @('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday')
        for ($i = 0; $i -lt [math]::Min(5, $w.daily.time.Count); $i++) {
            $dt = [datetime]::ParseExact($w.daily.time[$i], 'yyyy-MM-dd', $null)
            $hi = [math]::Round($w.daily.temperature_2m_max[$i]); $lo = [math]::Round($w.daily.temperature_2m_min[$i])
            $hic = [math]::Round(($hi - 32) * 5 / 9); $loc2 = [math]::Round(($lo - 32) * 5 / 9)
            Write-Host ("    {0,-11} max {1,3} °C / min {2,3} °C   (WMO code {3})" -f $dow[[int]$dt.DayOfWeek], $hic, $loc2, $w.daily.weathercode[$i])
        }
    }
} catch {
    KO "simulation failed: $($_.Exception.Message)"; $fail++
}

Head "5. Where the gadget settings live"
Info "$env:LOCALAPPDATA\Microsoft\Windows Sidebar\settings.ini  (city, Celsius, interval)"
Info "To reset everything: close the sidebar and delete that file."

Write-Host ""
if ($fail -eq 0) {
    Write-Host "=== RESULT: all OK ($fail problems) ===" -ForegroundColor Green
} else {
    Write-Host "=== RESULT: $fail problems found ===" -ForegroundColor Red
}
exit $fail
