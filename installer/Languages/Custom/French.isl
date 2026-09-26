; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: French
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\French.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Environnement d'exécution des gadgets
WGRuntimeDesc=Windows 10 et Windows 11 n'incluent plus le programme qui exécute les gadgets du Bureau.
WGRuntimeText=Le gadget Météo fonctionne dans un environnement d'exécution pour gadgets du Bureau (la « barre latérale »), qui n'a pas été trouvé sur cet ordinateur.%n%nVous pouvez l'installer maintenant : l'environnement (environ 5 Mo) est téléchargé depuis gadgetsrevived.com uniquement si vous cliquez sur le bouton ci-dessous, et sa somme de contrôle est vérifiée avant son exécution. Son installation peut demander des droits d'administrateur. Vous pouvez aussi continuer et l'installer plus tard.
WGRuntimeDownloadBtn=Télécharger et installer l'environnement des gadgets
WGRuntimePageBtn=Ouvrir la page de téléchargement
WGRuntimeRecheckBtn=Vérifier à nouveau
WGRuntimeFound=L'environnement d'exécution des gadgets est installé. Cliquez sur Suivant pour continuer.
WGRuntimeNotFound=L'environnement d'exécution des gadgets n'est pas installé.
WGRuntimeDownloadFailed=Le téléchargement a échoué ou le fichier ne correspond pas à la somme de contrôle attendue ; rien n'a été exécuté.%n%nUtilisez « Ouvrir la page de téléchargement » pour installer l'environnement manuellement.
WGRuntimeExtractFailed=Impossible d'extraire l'archive téléchargée.%n%nUtilisez « Ouvrir la page de téléchargement » pour installer l'environnement manuellement.
WGRuntimeLaunchFailed=Impossible de démarrer l'installation de l'environnement.
WGRuntimeStillMissing=L'environnement d'exécution des gadgets est toujours introuvable. Le gadget sera installé, mais il n'apparaîtra pas tant que l'environnement ne sera pas installé.
WGContinueAnyway=Continuer quand même ?
WGShowGadgets=Ouvrir la galerie de gadgets
