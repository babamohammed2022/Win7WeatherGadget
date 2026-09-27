; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: ChineseSimplified
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\ChineseSimplified.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=小工具运行环境
WGRuntimeDesc=Windows 10 和 Windows 11 不再包含运行桌面小工具的程序。
WGRuntimeText=天气小工具需要在桌面小工具运行环境（边栏）中运行，但在此计算机上未找到该环境。%n%n你可以立即安装：仅当你单击下面的按钮时，才会从 gadgetsrevived.com 下载运行环境（约 5 MB），并在运行前验证其校验和。其安装程序可能会请求管理员权限。你也可以继续，稍后再安装。
WGRuntimeDownloadBtn=下载并安装小工具运行环境
WGRuntimePageBtn=打开下载页面
WGRuntimeRecheckBtn=重新检查
WGRuntimeFound=已安装小工具运行环境。单击“下一步”继续。
WGRuntimeNotFound=未安装小工具运行环境。
WGRuntimeDownloadFailed=下载失败，或文件与预期的校验和不符，因此未运行任何程序。%n%n请使用“打开下载页面”手动安装运行环境。
WGRuntimeExtractFailed=无法解压缩下载的存档。%n%n请使用“打开下载页面”手动安装运行环境。
WGRuntimeLaunchFailed=无法启动运行环境的安装程序。
WGRuntimeStillMissing=仍未找到小工具运行环境。小工具将会安装，但在安装运行环境之前不会显示。
WGContinueAnyway=是否仍要继续？
WGShowGadgets=打开小工具库
WGNativeTitle=Windows 小工具平台
WGNativeDesc=Windows 7 自带桌面小工具平台，但在这台计算机上已被关闭。
WGNativeText=天气小工具运行在桌面小工具平台（“边栏”）中，该平台是 Windows 7 的一部分：无需下载任何内容，只需重新打开该平台。%n%n- 如果“Windows 小工具平台”功能已关闭：打开“控制面板 > 程序 > 打开或关闭 Windows 功能”，选中“Windows 小工具平台”，然后单击“确定”。%n- 如果小工具被策略关闭（例如通过 Microsoft Fix it 50906）：删除 TurnOffSidebar 策略（Microsoft Fix it 50907 可完成此操作），或联系管理员。%n%n然后单击“重新检查”。也可以现在继续：小工具会被安装，并在平台打开后立即显示。
WGNativeFound=Windows 小工具平台已打开。单击“下一步”继续。
WGNativePolicyOff=小工具已被策略（TurnOffSidebar）关闭。
WGNativeFeatureOff=“Windows 小工具平台”功能已关闭。
WGNativeStillOff=Windows 小工具平台仍处于关闭状态。小工具将被安装，但在平台打开之前不会显示。
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=小工具平台是 Windows 的一部分：无需其他软件。
WGNativeNoteText=Windows 7 还自带 Microsoft 原版天气小工具，但它已无法再获取天气数据。因此，安装后小工具库中可能会显示两个图标相同的天气小工具。%n%n要选择正确的那个，请在小工具库中选中一个天气小工具并单击“显示详细信息”：本小工具的说明以“天气数据由 Open-Meteo 提供。”结尾。%n%n如果原版天气小工具在桌面上，请将其关闭，从小工具库中添加本小工具，然后重新选择你的城市。
