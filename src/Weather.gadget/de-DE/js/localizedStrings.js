////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: German (Germany).
//
// The key names, the file layout and LOCNAME_ARRAY come from Microsoft's
// original localizedStrings.js (Copyright (c) 2009 Microsoft Corporation).
// The translated text was written for the Windows 7 Weather Gadget project.
// Keep every key in sync with the English master file (js/localizedStrings.js
// in the gadget root); the test suite fails if a key is missing.
//
////////////////////////////////////////////////////////////////////////////////

var L_localizedStrings_Text = [];

////////////////////////////////////////////////////////////////////////////////
//
// Localized City Names ( for defualt city based on OS Locale Setting )
//
////////////////////////////////////////////////////////////////////////////////
var LOCNAME_ARRAY = new Array('المملكة العربية السعودية‎ / الرياض‎  ','台北','Praha','København','Berlin','Αθήνα','New York, NY','Helsinki','Paris','ירושלים','Budapest','Reykjavík','Roma','東京','서울','Amsterdam','Oslo','Warszawa, Mazowieckie','São Paulo','Cuira','Bucureşti','Москва','Zagreb','Bratislava','Stockholm','กรุงเทพมหานคร','İstanbul','كراچى','Jakarta, Indonesia','Київ','Ljubljana','Tallinn','Rīga','Vilnius','Bakı','Budyšin','Tórshavn','नई दिल्ली','Guovdageaidnu','Caerdydd','ᐃᖃᓗᐃᑦ, ᓄᓇᕗᑦ','Amsterdam','Kalakhang Maynila','La Paz','Lëtzebuerg','Nuuk','Santiago','Wellington','Ciudad de Guatemala','العراق / بغداد','北京','Zürich','London','Ciudad de Mexico','Bruxelles','Lugano','Brussel','Oslo','Lisboa','Beograd','Баку','Chóśebuz','Jiellevárri (closest location: Luleå)','Baile Átha Cliath','Iqaluit, NU','Quito','جمهورية مصر العربية / القاهره','香港','Wien','Canberra','Madrid','Québec, QC','Београд','Anár','Lima','الجماهيرية العربية الليبية /  طرابلس','Singapore, Singapore','Luxemburg','Ottawa, ON','Ciudad de Guatemala','Genève','Bodø','الجزائر /  مدينة الجزائر','Vaduz','Wellington','San José','Luxembourg','Sarajevo','Luleå','المملكة المغربية / الرباط','Dublin','Ciudad de Panama','Monaco-Ville, Monaco','Snåase (closest location: Namsos)','الجمهورية التونسية / تونس','Johannesburg/Gauteng','Santo Domingo','Östersund','سلطنة عُمان /  مسقط','Caracas','Сарајево','Aanar','اليمن / صنعاء','Bogotá','Aanaar','الجمهورية العربية السورية / دمشق','Lima','الأردن / عمّان','Buenos Aires','لبنان / بيروت','Quito','الكويت','Kalakhang Maynila','Santiago','الإمارات العربية المتحدة / دبيّ‎','البحرين /  المنامه','Asunción','قطر /  الدوحة‎','New Delhi','La Paz','Kuala Lumpur','San Salvador','Singapore, Singapore','Tegucigalpa','Managua','San Juan','Los Ángeles, CA','Ciudad de México','Redmond, USA','دبيّ‎','دبيّ‎');

////////////////////////////////////////////////////////////////////////////////
//
// Default values for this locale
//
// DefaultUnit must be exactly 'Celsius' or 'Fahrenheit' (not translated).
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DefaultCity'] = 'Berlin, Deutschland';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '52.5200,13.4050|Berlin';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Daten werden abgerufen...';
L_localizedStrings_Text['LocationDontExist'] = 'Ort nicht gefunden';
L_localizedStrings_Text['Searching'] = 'Suche läuft...';
L_localizedStrings_Text['NoSearchQuery'] = 'Kein Suchbegriff angegeben.';
L_localizedStrings_Text['NoResults'] = 'Keine Ergebnisse gefunden.';

L_localizedStrings_Text['Night-New'] = 'Neumond';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Zunehmende Mondsichel';
L_localizedStrings_Text['Night-First-Quarter'] = 'Zunehmender Halbmond';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Zunehmender Mond';
L_localizedStrings_Text['Night-Full'] = 'Vollmond';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Abnehmender Mond';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Abnehmender Halbmond';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Abnehmende Mondsichel';

L_localizedStrings_Text['SensorIconRed'] = 'Aktueller Standort kann nicht ermittelt werden';
L_localizedStrings_Text['SensorIconGreen'] = 'Ihr Standort wurde ermittelt';
L_localizedStrings_Text['SensorIconGray'] = 'Ein Positionssensor ist verfügbar';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Keine Positionssensoren angeschlossen';
L_localizedStrings_Text['GettingLocation'] = 'Aktueller Standort wird ermittelt...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Temperatur anzeigen in:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Suchen';
L_localizedStrings_Text['CurrentCity'] = 'Aktueller Ort:';
L_localizedStrings_Text['EnterACityName'] = 'Ort suchen';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'nächstgelegener Ort für';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'nächstgelegener Ort:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" wurde gefunden.\nKlicken Sie zum Übernehmen auf "OK".';

L_localizedStrings_Text['SelectLocation'] = 'Aktuellen Ort auswählen';
L_localizedStrings_Text['Automatically'] = 'Ort automatisch ermitteln';
L_localizedStrings_Text['Refresh'] = 'Aktualisieren';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Wie ermittelt Windows meinen Standort automatisch?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Kein Positionssensor verfügbar';
L_localizedStrings_Text['EC4'] = 'Keine Wetterinformationen für den aktuellen Standort';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'Min.';
L_localizedStrings_Text['hr'] = 'Std.';
L_localizedStrings_Text['hrs'] = 'Std.';
L_localizedStrings_Text['day'] = 'Tag';
L_localizedStrings_Text['days'] = 'Tagen';
L_localizedStrings_Text['ageStampMessage'] = 'vor %1 %2';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Vorhersage vor %1 %2';
L_localizedStrings_Text['DataExpired'] = 'Daten veraltet';
L_localizedStrings_Text['Forecasted'] = 'Vorhersage';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Für aktuelle Daten mit dem Internet verbinden';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Keine Verbindung zum Dienst möglich';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Der Dienst ist in Ihrer Region nicht verfügbar.';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER SERVICE (Windows 10/11 port)
//
// Strings used by js/wlservices_shim.js. The MSN service used to return these
// texts already translated; the shim now reads them from this file.
// GeocodingLanguage:        language code sent to the Open-Meteo geocoding API.
// ReverseGeocodingLanguage: language code sent to the BigDataCloud reverse geocoding API.
// These two values are API parameters, not display text.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GeocodingLanguage'] = 'de';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'de';
L_localizedStrings_Text['Attribution'] = 'Daten: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Aktueller Standort';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Sonntag';
L_localizedStrings_Text['Day-Monday'] = 'Montag';
L_localizedStrings_Text['Day-Tuesday'] = 'Dienstag';
L_localizedStrings_Text['Day-Wednesday'] = 'Mittwoch';
L_localizedStrings_Text['Day-Thursday'] = 'Donnerstag';
L_localizedStrings_Text['Day-Friday'] = 'Freitag';
L_localizedStrings_Text['Day-Saturday'] = 'Samstag';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Gewitter';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Gewitter mit Hagel';
L_localizedStrings_Text['SkyText-Hail'] = 'Hagel';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Gefrierender Regen';
L_localizedStrings_Text['SkyText-LightRain'] = 'Leichter Regen';
L_localizedStrings_Text['SkyText-Rain'] = 'Regen';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Starker Regen';
L_localizedStrings_Text['SkyText-Snow'] = 'Schnee';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Starker Schneefall';
L_localizedStrings_Text['SkyText-Fog'] = 'Nebel';
L_localizedStrings_Text['SkyText-Windy'] = 'Windig';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Bewölkt';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Teilweise bewölkt';
L_localizedStrings_Text['SkyText-Clear'] = 'Klar';
L_localizedStrings_Text['SkyText-Sunny'] = 'Sonnig';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Überwiegend klar';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Überwiegend sonnig';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Vereinzelte Schauer';
L_localizedStrings_Text['SkyText-Showers'] = 'Schauer';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Schneeschauer';
