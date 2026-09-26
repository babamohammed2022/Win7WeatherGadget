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
