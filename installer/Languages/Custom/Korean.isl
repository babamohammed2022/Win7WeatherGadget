; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Korean
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Korean.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=가젯 런타임
WGRuntimeDesc=Windows 10 및 Windows 11에는 더 이상 바탕 화면 가젯을 실행하는 프로그램이 포함되어 있지 않습니다.
WGRuntimeText=날씨 가젯은 바탕 화면 가젯 런타임(사이드바)에서 실행되지만 이 컴퓨터에서 찾을 수 없습니다.%n%n지금 설치할 수 있습니다. 런타임(약 5MB)은 아래 단추를 클릭한 경우에만 gadgetsrevived.com에서 다운로드되며, 실행하기 전에 체크섬을 확인합니다. 설치 중에 관리자 권한을 요청할 수 있습니다. 계속 진행한 후 나중에 설치할 수도 있습니다.
WGRuntimeDownloadBtn=가젯 런타임 다운로드 및 설치
WGRuntimePageBtn=다운로드 페이지 열기
WGRuntimeRecheckBtn=다시 확인
WGRuntimeFound=가젯 런타임이 설치되어 있습니다. 계속하려면 [다음]을 클릭하십시오.
WGRuntimeNotFound=가젯 런타임이 설치되어 있지 않습니다.
WGRuntimeDownloadFailed=다운로드에 실패했거나 파일이 예상 체크섬과 일치하지 않아 아무것도 실행하지 않았습니다.%n%n[다운로드 페이지 열기]를 사용하여 런타임을 직접 설치하십시오.
WGRuntimeExtractFailed=다운로드한 압축 파일을 풀 수 없습니다.%n%n[다운로드 페이지 열기]를 사용하여 런타임을 직접 설치하십시오.
WGRuntimeLaunchFailed=런타임 설치를 시작할 수 없습니다.
WGRuntimeStillMissing=가젯 런타임을 아직 찾을 수 없습니다. 가젯은 설치되지만 런타임을 설치해야 표시됩니다.
WGContinueAnyway=그래도 계속하시겠습니까?
WGShowGadgets=가젯 갤러리 열기
WGNativeTitle=Windows 가젯 플랫폼
WGNativeDesc=Windows 7에는 바탕 화면 가젯 플랫폼이 포함되어 있지만 이 컴퓨터에서는 꺼져 있습니다.
WGNativeText=날씨 가젯은 Windows 7의 일부인 바탕 화면 가젯 플랫폼("사이드바")에서 실행됩니다. 아무것도 다운로드할 필요가 없으며 플랫폼을 다시 켜기만 하면 됩니다.%n%n- Windows 가젯 플랫폼 기능이 꺼져 있는 경우: 제어판 > 프로그램 > Windows 기능 사용/사용 안 함을 열고 "Windows 가젯 플랫폼"을 선택한 다음 [확인]을 클릭합니다.%n- 정책으로 가젯이 꺼진 경우(예: Microsoft Fix it 50906): TurnOffSidebar 정책을 제거하거나(Microsoft Fix it 50907이 이 작업을 수행) 관리자에게 문의하십시오.%n%n그런 다음 [다시 확인]을 클릭합니다. 지금 계속할 수도 있습니다. 가젯이 설치되고 플랫폼이 켜지는 즉시 표시됩니다.
WGNativeFound=Windows 가젯 플랫폼이 켜져 있습니다. 계속하려면 [다음]을 클릭하십시오.
WGNativePolicyOff=정책(TurnOffSidebar)에 의해 가젯이 꺼져 있습니다.
WGNativeFeatureOff=Windows 가젯 플랫폼 기능이 꺼져 있습니다.
WGNativeStillOff=Windows 가젯 플랫폼이 아직 꺼져 있습니다. 가젯은 설치되지만 플랫폼이 켜질 때까지 표시되지 않습니다.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=가젯 플랫폼은 Windows의 일부이므로 추가 소프트웨어가 필요하지 않습니다.
WGNativeNoteText=Windows 7에는 Microsoft의 원래 날씨 가젯도 포함되어 있지만 더 이상 날씨 데이터를 받지 못합니다. 따라서 설치 후 가젯 갤러리에 같은 아이콘의 날씨 가젯이 두 개 표시될 수 있습니다.%n%n올바른 가젯을 선택하려면 갤러리에서 날씨 가젯을 선택하고 [자세히 표시]를 클릭하십시오. 이 가젯의 설명은 "날씨 데이터 제공: Open-Meteo."(으)로 끝납니다.%n%n원래 날씨 가젯이 바탕 화면에 있으면 닫고 갤러리에서 이 가젯을 추가한 다음 도시를 다시 선택하십시오.
