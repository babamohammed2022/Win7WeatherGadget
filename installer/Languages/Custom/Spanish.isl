; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Spanish
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Spanish.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Entorno de ejecución de gadgets
WGRuntimeDesc=Windows 10 y Windows 11 ya no incluyen el programa que ejecuta los gadgets de escritorio.
WGRuntimeText=El gadget El tiempo funciona dentro de un entorno de ejecución de gadgets de escritorio (la "barra lateral"), que no se encontró en este equipo.%n%nPuede instalarlo ahora: el entorno (unos 5 MB) se descarga de gadgetsrevived.com solo si hace clic en el botón de abajo, y su suma de comprobación se verifica antes de ejecutarlo. Su instalación puede pedir derechos de administrador. También puede continuar e instalarlo más tarde.
WGRuntimeDownloadBtn=Descargar e instalar el entorno de gadgets
WGRuntimePageBtn=Abrir la página de descarga
WGRuntimeRecheckBtn=Volver a comprobar
WGRuntimeFound=El entorno de ejecución de gadgets está instalado. Haga clic en Siguiente para continuar.
WGRuntimeNotFound=El entorno de ejecución de gadgets no está instalado.
WGRuntimeDownloadFailed=La descarga falló o el archivo no coincide con la suma de comprobación esperada, por lo que no se ejecutó nada.%n%nUse "Abrir la página de descarga" para instalar el entorno manualmente.
WGRuntimeExtractFailed=No se pudo extraer el archivo descargado.%n%nUse "Abrir la página de descarga" para instalar el entorno manualmente.
WGRuntimeLaunchFailed=No se pudo iniciar la instalación del entorno.
WGRuntimeStillMissing=Todavía no se encuentra el entorno de ejecución de gadgets. El gadget se instalará, pero no aparecerá hasta que se instale el entorno.
WGContinueAnyway=¿Desea continuar de todos modos?
WGShowGadgets=Abrir la galería de gadgets
WGNativeTitle=Plataforma de gadgets de Windows
WGNativeDesc=Windows 7 incluye la plataforma de gadgets de escritorio, pero está desactivada en este equipo.
WGNativeText=El gadget El tiempo funciona en la plataforma de gadgets de escritorio (la "barra lateral"), que forma parte de Windows 7: no hay que descargar nada, solo volver a activarla.%n%n- Si la característica Plataforma de gadgets de Windows está desactivada: abra Panel de control > Programas > Activar o desactivar las características de Windows, seleccione "Plataforma de gadgets de Windows" y haga clic en Aceptar.%n- Si los gadgets se desactivaron mediante una directiva (por ejemplo con Microsoft Fix it 50906): quite la directiva TurnOffSidebar (Microsoft Fix it 50907 lo hace) o consulte al administrador.%n%nDespués haga clic en "Comprobar de nuevo". También puede continuar ahora: el gadget se instala y aparecerá en cuanto se active la plataforma.
WGNativeFound=La plataforma de gadgets de Windows está activada. Haga clic en Siguiente para continuar.
WGNativePolicyOff=Los gadgets están desactivados por una directiva (TurnOffSidebar).
WGNativeFeatureOff=La característica Plataforma de gadgets de Windows está desactivada.
WGNativeStillOff=La plataforma de gadgets de Windows sigue desactivada. El gadget se instalará, pero no aparecerá hasta que se active la plataforma.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=La plataforma de gadgets forma parte de Windows: no se necesita software adicional.
WGNativeNoteText=Windows 7 también incluye el gadget El tiempo original de Microsoft, que ya no recibe datos meteorológicos. Después de la instalación, la galería de gadgets puede mostrar dos gadgets El tiempo con el mismo icono.%n%nPara elegir el correcto, seleccione un gadget El tiempo en la galería y haga clic en "Mostrar detalles": la descripción de este termina con "Datos meteorológicos de Open-Meteo."%n%nSi el gadget El tiempo original está en el escritorio, ciérrelo y agregue este desde la galería; después vuelva a elegir su ciudad.
