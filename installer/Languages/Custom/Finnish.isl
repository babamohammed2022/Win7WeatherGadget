; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Finnish
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Finnish.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Pienoisohjelmien suoritusympäristö
WGRuntimeDesc=Windows 10 ja Windows 11 eivät enää sisällä ohjelmaa, joka suorittaa työpöydän pienoisohjelmia.
WGRuntimeText=Sää-pienoisohjelma toimii työpöydän pienoisohjelmien suoritusympäristössä (sivupalkissa), jota ei löytynyt tästä tietokoneesta.%n%nVoit asentaa sen nyt: suoritusympäristö (noin 5 Mt) ladataan osoitteesta gadgetsrevived.com vain, jos napsautat alla olevaa painiketta, ja sen tarkistussumma varmistetaan ennen suorittamista. Asennus voi pyytää järjestelmänvalvojan oikeuksia. Voit myös jatkaa ja asentaa sen myöhemmin.
WGRuntimeDownloadBtn=Lataa ja asenna pienoisohjelmien suoritusympäristö
WGRuntimePageBtn=Avaa lataussivu
WGRuntimeRecheckBtn=Tarkista uudelleen
WGRuntimeFound=Pienoisohjelmien suoritusympäristö on asennettu. Jatka valitsemalla Seuraava.
WGRuntimeNotFound=Pienoisohjelmien suoritusympäristöä ei ole asennettu.
WGRuntimeDownloadFailed=Lataus epäonnistui tai tiedosto ei vastannut odotettua tarkistussummaa, joten mitään ei suoritettu.%n%nAsenna suoritusympäristö manuaalisesti valitsemalla "Avaa lataussivu".
WGRuntimeExtractFailed=Ladattua arkistoa ei voitu purkaa.%n%nAsenna suoritusympäristö manuaalisesti valitsemalla "Avaa lataussivu".
WGRuntimeLaunchFailed=Suoritusympäristön asennusta ei voitu käynnistää.
WGRuntimeStillMissing=Pienoisohjelmien suoritusympäristöä ei edelleenkään löydy. Pienoisohjelma asennetaan, mutta se ei näy ennen kuin suoritusympäristö on asennettu.
WGContinueAnyway=Jatketaanko silti?
WGShowGadgets=Avaa pienoisohjelmavalikoima
WGNativeTitle=Windowsin pienoisohjelma-alusta
WGNativeDesc=Windows 7 sisältää työpöydän pienoisohjelmien alustan, mutta se on poistettu käytöstä tässä tietokoneessa.
WGNativeText=Sää-pienoisohjelma toimii työpöydän pienoisohjelmien alustassa ("Sivupalkki"), joka on osa Windows 7:ää: mitään ei tarvitse ladata, alusta pitää vain ottaa uudelleen käyttöön.%n%n- Jos Windowsin pienoisohjelma-alusta -toiminto on poissa käytöstä: avaa Ohjauspaneeli > Ohjelmat > Ota Windowsin ominaisuuksia käyttöön tai poista niitä käytöstä, valitse "Windowsin pienoisohjelma-alusta" ja valitse OK.%n- Jos pienoisohjelmat on poistettu käytöstä käytännöllä (esimerkiksi Microsoft Fix it 50906 -työkalulla): poista TurnOffSidebar-käytäntö (Microsoft Fix it 50907 tekee tämän) tai ota yhteyttä järjestelmänvalvojaan.%n%nValitse sitten "Tarkista uudelleen". Voit myös jatkaa nyt: pienoisohjelma asennetaan, ja se näkyy heti, kun alusta on käytössä.
WGNativeFound=Windowsin pienoisohjelma-alusta on käytössä. Jatka valitsemalla Seuraava.
WGNativePolicyOff=Pienoisohjelmat on poistettu käytöstä käytännöllä (TurnOffSidebar).
WGNativeFeatureOff=Windowsin pienoisohjelma-alusta -toiminto on poissa käytöstä.
WGNativeStillOff=Windowsin pienoisohjelma-alusta on yhä poissa käytöstä. Pienoisohjelma asennetaan, mutta se ei näy ennen kuin alusta otetaan käyttöön.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Pienoisohjelma-alusta on osa Windowsia: lisäohjelmistoja ei tarvita.
WGNativeNoteText=Windows 7 sisältää myös Microsoftin alkuperäisen Sää-pienoisohjelman, joka ei enää saa säätietoja. Asennuksen jälkeen pienoisohjelmavalikoimassa voi siksi näkyä kaksi samannäköistä Sää-pienoisohjelmaa.%n%nValitse oikea valitsemalla valikoimassa Sää-pienoisohjelma ja valitsemalla "Näytä tiedot": tämän kuvaus päättyy tekstiin "Säätiedot: Open-Meteo."%n%nJos alkuperäinen Sää-pienoisohjelma on työpöydällä, sulje se ja lisää tämä valikoimasta; valitse sitten kaupunkisi uudelleen.
