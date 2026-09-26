<#
    Installa.ps1  --  Graphical installer for the Windows 7 Weather gadget

    It is launched by Installa-Meteo-Windows7.exe, but it can also be run by
    hand:   powershell -ExecutionPolicy Bypass -File Installa.ps1

    It needs no administrator rights, except for installing the Gadgets
    runtime (a separate program with its own installer).

    Requires: PowerShell 5.1 or newer (ships with every Windows 10/11).
#>

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
[System.Windows.Forms.Application]::EnableVisualStyles()

$ErrorActionPreference = 'Stop'

$BaseDir = $PSScriptRoot

# The gadget sources live in ..\gadget when this script sits in installer\,
# and in .\gadget when it sits at the package root. Support both.
$GadgetSrc = $null
foreach ($candidate in @(
    (Join-Path $BaseDir 'gadget\Meteo.gadget'),
    (Join-Path $BaseDir '..\gadget\Meteo.gadget')
)) {
    if (Test-Path (Join-Path $candidate 'gadget.xml')) { $GadgetSrc = $candidate; break }
}
if (-not $GadgetSrc) { $GadgetSrc = Join-Path $BaseDir 'gadget\Meteo.gadget' }

$GadgetDst  = Join-Path $env:LOCALAPPDATA 'Microsoft\Windows Sidebar\Gadgets\Meteo.gadget'
$RuntimeUrl = 'https://gadgetsrevived.com/wp-content/uploads/2013/10/DesktopGadgetsInstaller.zip'
$RuntimePage = 'https://gadgetsrevived.com/download-sidebar/'

$script:Step1Done = $false
$script:Step2Done = $false
$script:Step3Done = $false

# ----------------------------------------------------------------- functions --

function Write-Log([string]$Text) {
    try {
        if ($txtLog.InvokeRequired) {
            $txtLog.Invoke([action]{ param($t) $txtLog.AppendText("$t`r`n"); $txtLog.SelectionStart = $txtLog.TextLength; $txtLog.ScrollToCaret() }, $Text)
        } else {
            $txtLog.AppendText("$Text`r`n")
            $txtLog.SelectionStart = $txtLog.TextLength
            $txtLog.ScrollToCaret()
        }
    } catch { }
}

function Get-SidebarPath {
    $candidates = @(
        (Join-Path $env:ProgramFiles 'Windows Sidebar\sidebar.exe'),
        (Join-Path ${env:ProgramFiles(x86)} 'Windows Sidebar\sidebar.exe'),
        (Join-Path $env:ProgramFiles 'Desktop Gadgets\sidebar.exe'),
        (Join-Path ${env:ProgramFiles(x86)} 'Desktop Gadgets\sidebar.exe'),
        (Join-Path $env:ProgramFiles 'Gadgets Revived\sidebar.exe')
    )
    foreach ($c in $candidates) { if (Test-Path $c) { return $c } }
    return $null
}

function Test-RuntimeInstalled {
    if (Get-SidebarPath) { return $true }
    # Check the installed-programs registry as a fallback.
    $paths = @(
        'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*',
        'HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*'
    )
    try {
        $found = Get-ItemProperty $paths -ErrorAction SilentlyContinue |
                 Where-Object { $_.DisplayName -match 'Gadget' -or $_.DisplayName -match 'Sidebar' }
        if ($found) { return $true }
    } catch { }
    return $false
}

function Install-Runtime {
    $zip = Join-Path $env:TEMP 'DesktopGadgetsInstaller.zip'
    $dir = Join-Path $env:TEMP 'DesktopGadgetsExtract'
    Write-Log "Downloading the runtime from the official site gadgetsrevived.com ..."
    try {
        Invoke-WebRequest -Uri $RuntimeUrl -OutFile $zip -UseBasicParsing -TimeoutSec 120
    } catch {
        Write-Log "ERROR downloading: $($_.Exception.Message)"
        [System.Windows.Forms.MessageBox]::Show(
            "Download failed.`n`nDownload the installer manually from:`n$RuntimePage`n`nthen repeat this step.",
            'Error', 'OK', 'Error') | Out-Null
        return $false
    }
    Write-Log "Extracting ..."
    if (Test-Path $dir) { Remove-Item $dir -Recurse -Force }
    try { Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force } catch { }
    $exe = Get-ChildItem -Path $dir -Filter *.exe -Recurse | Select-Object -First 1
    if (-not $exe) {
        [System.Windows.Forms.MessageBox]::Show(
            "Could not find the executable inside the downloaded archive.`n`nInstall it manually from:`n$RuntimePage",
            'Error', 'OK', 'Error') | Out-Null
        return $false
    }
    Write-Log "Starting $($exe.Name) ..."
    [System.Windows.Forms.MessageBox]::Show(
        "The official Gadgets runtime installer will now open.`n`nFollow its instructions (it may ask for administrator rights:`nthey are needed to register the 'sidebar' component).`n`nWhen it has finished, come back here and press OK.",
        'Install the Gadgets runtime', 'OK', 'Information') | Out-Null
    Start-Process -FilePath $exe.FullName
    return $true
}

function Install-Gadget {
    if (-not (Test-Path (Join-Path $GadgetSrc 'gadget.xml'))) {
        throw "Cannot find the gadget files in $GadgetSrc"
    }
    $gadgetRoot = Split-Path $GadgetDst -Parent
    if (-not (Test-Path $gadgetRoot)) { New-Item -ItemType Directory -Path $gadgetRoot -Force | Out-Null }
    if (Test-Path $GadgetDst) { Remove-Item $GadgetDst -Recurse -Force }
    Copy-Item -Path $GadgetSrc -Destination $GadgetDst -Recurse -Force
    foreach ($f in @('gadget.xml','weather.html','settings.html')) {
        if (-not (Test-Path (Join-Path $GadgetDst $f))) { throw "File missing after the copy: $f" }
    }
    if (-not (Test-Path (Join-Path $GadgetDst 'js\wlservices_shim.js'))) { throw "File missing: js\wlservices_shim.js" }
    return $true
}

function Open-GadgetPanel {
    $sb = Get-SidebarPath
    if ($sb) {
        Start-Process -FilePath $sb -ArgumentList '/showGadgets'
        return $true
    }
    return $false
}

function Register-Uninstaller {
    $key = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\Windows 7 Weather Gadget'
    try {
        if (-not (Test-Path $key)) { New-Item -Path $key -Force | Out-Null }
        Set-ItemProperty -Path $key -Name 'DisplayName'          -Value 'Windows 7 Weather Gadget'        -Type String
        Set-ItemProperty -Path $key -Name 'DisplayVersion'       -Value '1.1.0'                          -Type String
        Set-ItemProperty -Path $key -Name 'Publisher'            -Value 'Port of the Microsoft gadget for Windows 10/11' -Type String
        Set-ItemProperty -Path $key -Name 'InstallLocation'      -Value $BaseDir                         -Type String
        Set-ItemProperty -Path $key -Name 'NoModify'             -Value 1                                -Type DWord
        Set-ItemProperty -Path $key -Name 'NoRepair'             -Value 1                                -Type DWord
        $uns = 'cmd.exe /c "' + (Join-Path $BaseDir 'Uninstall.cmd') + '"'
        Set-ItemProperty -Path $key -Name 'UninstallString'      -Value $uns -Type String
        Set-ItemProperty -Path $key -Name 'QuietUninstallString' -Value $uns -Type String
    } catch {
        Write-Log "Note: could not register the uninstall entry ($($_.Exception.Message))"
    }
}

function New-StartMenuShortcut {
    try {
        $menu = Join-Path $env:APPDATA 'Microsoft\Windows\Start Menu\Programs'
        if (-not (Test-Path $menu)) { return }
        $lnk = Join-Path $menu 'Uninstall Windows 7 Weather Gadget.lnk'
        $w = New-Object -ComObject WScript.Shell
        $s = $w.CreateShortcut($lnk)
        $s.TargetPath = 'cmd.exe'
        $s.Arguments  = '/c "' + (Join-Path $BaseDir 'Uninstall.cmd') + '"'
        $s.WorkingDirectory = $BaseDir
        $s.Description  = 'Removes the Windows 7 Weather gadget'
        $s.WindowStyle  = 7
        $s.Save() | Out-Null
    } catch { }
}

function Update-Steps {
    $lbl1.Text = $(if ($script:Step1Done) { '1.  Gadgets runtime .............. OK' } else { '1.  Gadgets runtime .............. to do' })
    $lbl2.Text = $(if ($script:Step2Done) { '2.  Weather gadget ............... OK' } else { '2.  Weather gadget ............... to do' })
    $lbl3.Text = $(if ($script:Step3Done) { '3.  Gadget panel ................. OK' } else { '3.  Gadget panel ................. to do' })
    $lbl1.ForeColor = $(if ($script:Step1Done) { [System.Drawing.Color]::FromArgb(0,120,0) } else { [System.Drawing.Color]::FromArgb(90,90,90) })
    $lbl2.ForeColor = $(if ($script:Step2Done) { [System.Drawing.Color]::FromArgb(0,120,0) } else { [System.Drawing.Color]::FromArgb(90,90,90) })
    $lbl3.ForeColor = $(if ($script:Step3Done) { [System.Drawing.Color]::FromArgb(0,120,0) } else { [System.Drawing.Color]::FromArgb(90,90,90) })
}

# -------------------------------------------------------------------- window --

$form                 = New-Object System.Windows.Forms.Form
$form.Text            = 'Windows 7 Weather Gadget - installation'
$form.Size            = New-Object System.Drawing.Size(680, 620)
$form.StartPosition   = 'CenterScreen'
$form.FormBorderStyle = 'FixedDialog'
$form.MaximizeBox     = $false
$form.MinimizeBox     = $false
$form.BackColor       = [System.Drawing.Color]::White
$form.Font            = New-Object System.Drawing.Font('Segoe UI', 9)
$form.Topmost         = $true

$lblTitle             = New-Object System.Windows.Forms.Label
$lblTitle.Text        = 'Windows 7 Weather Gadget on Windows 10 / 11'
$lblTitle.Font        = New-Object System.Drawing.Font('Segoe UI Semibold', 14)
$lblTitle.AutoSize    = $true
$lblTitle.Location    = New-Object System.Drawing.Point(20, 16)
$form.Controls.Add($lblTitle)

$lblSub               = New-Object System.Windows.Forms.Label
$lblSub.Text          = "Installs the original Microsoft Weather gadget, with the Windows 7 graphics, icons and behaviour.`nNo Windows system file is modified."
$lblSub.AutoSize      = $true
$lblSub.Location      = New-Object System.Drawing.Point(20, 48)
$lblSub.ForeColor     = [System.Drawing.Color]::FromArgb(70,70,70)
$form.Controls.Add($lblSub)

$lbl1                 = New-Object System.Windows.Forms.Label
$lbl1.Text            = '1.  Gadgets runtime .............. to do'
$lbl1.AutoSize        = $true
$lbl1.Location        = New-Object System.Drawing.Point(24, 92)
$lbl1.Font            = New-Object System.Drawing.Font('Consolas', 9)
$form.Controls.Add($lbl1)

$lbl2                 = New-Object System.Windows.Forms.Label
$lbl2.Text            = '2.  Weather gadget ............... to do'
$lbl2.AutoSize        = $true
$lbl2.Location        = New-Object System.Drawing.Point(24, 112)
$lbl2.Font            = New-Object System.Drawing.Font('Consolas', 9)
$form.Controls.Add($lbl2)

$lbl3                 = New-Object System.Windows.Forms.Label
$lbl3.Text            = '3.  Gadget panel ................. to do'
$lbl3.AutoSize        = $true
$lbl3.Location        = New-Object System.Drawing.Point(24, 132)
$lbl3.Font            = New-Object System.Drawing.Font('Consolas', 9)
$form.Controls.Add($lbl3)

$btnStep1             = New-Object System.Windows.Forms.Button
$btnStep1.Text        = 'Install the Gadgets runtime'
$btnStep1.Location    = New-Object System.Drawing.Point(24, 164)
$btnStep1.Size        = New-Object System.Drawing.Size(230, 30)
$form.Controls.Add($btnStep1)

$btnStep2             = New-Object System.Windows.Forms.Button
$btnStep2.Text        = 'Install the Weather gadget'
$btnStep2.Location    = New-Object System.Drawing.Point(266, 164)
$btnStep2.Size        = New-Object System.Drawing.Size(200, 30)
$form.Controls.Add($btnStep2)

$btnStep3             = New-Object System.Windows.Forms.Button
$btnStep3.Text        = 'Open the gadget panel'
$btnStep3.Location    = New-Object System.Drawing.Point(478, 164)
$btnStep3.Size        = New-Object System.Drawing.Size(170, 30)
$form.Controls.Add($btnStep3)

$lblInfo              = New-Object System.Windows.Forms.Label
$lblInfo.Text         = ''
$lblInfo.AutoSize     = $false
$lblInfo.Location     = New-Object System.Drawing.Point(24, 204)
$lblInfo.Size         = New-Object System.Drawing.Size(624, 34)
$lblInfo.ForeColor    = [System.Drawing.Color]::FromArgb(0,90,160)
$form.Controls.Add($lblInfo)

$txtLog               = New-Object System.Windows.Forms.TextBox
$txtLog.Multiline     = $true
$txtLog.ScrollBars    = 'Vertical'
$txtLog.ReadOnly      = $true
$txtLog.Location      = New-Object System.Drawing.Point(24, 244)
$txtLog.Size          = New-Object System.Drawing.Size(624, 250)
$txtLog.Font          = New-Object System.Drawing.Font('Consolas', 8.5)
$txtLog.BackColor     = [System.Drawing.Color]::FromArgb(250,250,250)
$form.Controls.Add($txtLog)

$btnClose             = New-Object System.Windows.Forms.Button
$btnClose.Text        = 'Close'
$btnClose.Location    = New-Object System.Drawing.Point(568, 506)
$btnClose.Size        = New-Object System.Drawing.Size(80, 28)
$form.Controls.Add($btnClose)

$btnAll               = New-Object System.Windows.Forms.Button
$btnAll.Text          = 'Install everything automatically'
$btnAll.Location      = New-Object System.Drawing.Point(360, 506)
$btnAll.Size          = New-Object System.Drawing.Size(200, 28)
$form.Controls.Add($btnAll)

# -------------------------------------------------------------------- events --

$btnStep1.Add_Click({
    $btnStep1.Enabled = $false
    try {
        if (Test-RuntimeInstalled) {
            Write-Log 'Gadgets runtime already installed.'
        } else {
            $lblInfo.Text = 'Downloading and starting the official runtime installer...'
            if (Install-Runtime) {
                $lblInfo.Text = 'Finish the installer that just opened, then press this button again.'
                [System.Windows.Forms.MessageBox]::Show(
                    "When the runtime installer has finished, press`n'Install the Gadgets runtime' again to continue.",
                    'Step 1', 'OK', 'Information') | Out-Null
            }
        }
        if (Test-RuntimeInstalled) {
            $script:Step1Done = $true
            $lblInfo.Text = 'Gadgets runtime OK. Now install the gadget (step 2).'
            Update-Steps
        }
    } catch {
        Write-Log "ERROR: $($_.Exception.Message)"
        [System.Windows.Forms.MessageBox]::Show("Error: $($_.Exception.Message)", 'Error', 'OK', 'Error') | Out-Null
    }
    $btnStep1.Enabled = $true
})

$btnStep2.Add_Click({
    $btnStep2.Enabled = $false
    try {
        Write-Log 'Installing the Weather gadget ...'
        Install-Gadget | Out-Null
        Write-Log "Gadget installed into: $GadgetDst"
        $script:Step2Done = $true
        Update-Steps
        $lblInfo.Text = 'Gadget installed. Open the gadget panel (step 3).'
        Register-Uninstaller
        New-StartMenuShortcut
        Write-Log 'Uninstall entry registered (Settings > Apps).'
    } catch {
        Write-Log "ERROR: $($_.Exception.Message)"
        [System.Windows.Forms.MessageBox]::Show("Error while installing the gadget:`n$($_.Exception.Message)", 'Error', 'OK', 'Error') | Out-Null
    }
    $btnStep2.Enabled = $true
})

$btnStep3.Add_Click({
    try {
        if (Open-GadgetPanel) {
            $script:Step3Done = $true
            Update-Steps
            $lblInfo.Text = 'In the gadget panel, double-click "Meteo".'
            [System.Windows.Forms.MessageBox]::Show(
                "In the 'Gadget panel' window, double-click on`n   METEO`n`nThen:`n  -  mouse wheel over the gadget to enlarge it`n  -  wrench icon to search for your city`n  -  select Celsius",
                'Last step', 'OK', 'Information') | Out-Null
        } else {
            [System.Windows.Forms.MessageBox]::Show(
                "Cannot find the sidebar executable.`n`nOpen the panel with:`nright-click the desktop  ->  Gadgets",
                'Warning', 'OK', 'Warning') | Out-Null
        }
    } catch {
        Write-Log "ERROR: $($_.Exception.Message)"
    }
})

$btnAll.Add_Click({
    $btnAll.Enabled = $false
    try {
        if (-not $script:Step1Done) {
            if (-not (Test-RuntimeInstalled)) {
                $lblInfo.Text = 'Step 1: installing the runtime ...'
                Install-Runtime | Out-Null
                [System.Windows.Forms.MessageBox]::Show(
                    "Finish the runtime installer that just opened.`n`nWhen it is done, press OK to continue.",
                    'Step 1 of 3', 'OK', 'Information') | Out-Null
            } else {
                Write-Log 'Gadgets runtime already installed.'
            }
            if (Test-RuntimeInstalled) { $script:Step1Done = $true; Update-Steps }
        }
        if (-not $script:Step2Done) {
            $lblInfo.Text = 'Step 2: installing the gadget ...'
            Install-Gadget | Out-Null
            $script:Step2Done = $true
            Update-Steps
            Register-Uninstaller
            New-StartMenuShortcut
        }
        if (-not $script:Step3Done) {
            $lblInfo.Text = 'Step 3: opening the gadget panel ...'
            if (Open-GadgetPanel) { $script:Step3Done = $true; Update-Steps }
        }
        $lblInfo.Text = 'Done! In the gadget panel, double-click "Meteo".'
        [System.Windows.Forms.MessageBox]::Show(
            "Installation complete.`n`nIn the 'Gadget panel' window, double-click on  METEO`n`nTo uninstall later:`nSettings > Apps > 'Windows 7 Weather Gadget' > Uninstall.",
            'Done', 'OK', 'Information') | Out-Null
    } catch {
        Write-Log "ERROR: $($_.Exception.Message)"
        [System.Windows.Forms.MessageBox]::Show("Error: $($_.Exception.Message)", 'Error', 'OK', 'Error') | Out-Null
    }
    $btnAll.Enabled = $true
})

$btnClose.Add_Click({ $form.Close() })

$form.Add_Shown({
    Write-Log 'Installer started.'
    Write-Log "Folder: $BaseDir"
    if (Test-RuntimeInstalled) {
        Write-Log 'Gadgets runtime: found.'
        $script:Step1Done = $true
    } else {
        Write-Log 'Gadgets runtime: NOT found (install it in step 1).'
    }
    Update-Steps
    $form.Activate()
})

[void]$form.ShowDialog()
