////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Czech (Czech Republic).
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
L_localizedStrings_Text['DefaultCity'] = 'Praha, Česko';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '50.0755,14.4378|Praha';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Načítání dat...';
L_localizedStrings_Text['LocationDontExist'] = 'Místo nebylo nalezeno';
L_localizedStrings_Text['Searching'] = 'Hledání...';
L_localizedStrings_Text['NoSearchQuery'] = 'Nebyl zadán hledaný výraz.';
L_localizedStrings_Text['NoResults'] = 'Nebyly nalezeny žádné výsledky.';

L_localizedStrings_Text['Night-New'] = 'Nov';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Dorůstající srpek';
L_localizedStrings_Text['Night-First-Quarter'] = 'První čtvrť';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Dorůstající Měsíc';
L_localizedStrings_Text['Night-Full'] = 'Úplněk';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Couvající Měsíc';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Poslední čtvrť';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Ubývající srpek';

L_localizedStrings_Text['SensorIconRed'] = 'Nelze zjistit aktuální polohu';
L_localizedStrings_Text['SensorIconGreen'] = 'Vaše poloha byla zjištěna';
L_localizedStrings_Text['SensorIconGray'] = 'Je k dispozici senzor polohy';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Nejsou připojeny žádné senzory polohy';
L_localizedStrings_Text['GettingLocation'] = 'Zjišťování aktuální polohy...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Zobrazit teplotu ve stupních:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheita';
L_localizedStrings_Text['Celsius'] = 'Celsia';
L_localizedStrings_Text['Search'] = 'Hledat';
L_localizedStrings_Text['CurrentCity'] = 'Aktuální místo:';
L_localizedStrings_Text['EnterACityName'] = 'Hledat místo';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'nejbližší místo pro';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'nejbližší místo:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = 'Místo „%1“ bylo nalezeno.\nKliknutím na OK změnu použijete.';

L_localizedStrings_Text['SelectLocation'] = 'Vyberte aktuální místo';
L_localizedStrings_Text['Automatically'] = 'Zjistit místo automaticky';
L_localizedStrings_Text['Refresh'] = 'Aktualizovat';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Jak systém Windows automaticky zjišťuje moji polohu?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Není k dispozici žádný senzor polohy';
L_localizedStrings_Text['EC4'] = 'Pro aktuální polohu nejsou k dispozici informace o počasí';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'min';
L_localizedStrings_Text['hr'] = 'h';
L_localizedStrings_Text['hrs'] = 'h';
L_localizedStrings_Text['day'] = 'dnem';
L_localizedStrings_Text['days'] = 'dny';
L_localizedStrings_Text['ageStampMessage'] = 'před %1 %2';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Předpověď před %1 %2';
L_localizedStrings_Text['DataExpired'] = 'Zastaralá data';
L_localizedStrings_Text['Forecasted'] = 'Předpověď';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Připojte se k internetu a získejte aktuální data';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Nelze se připojit ke službě';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Služba není ve vaší oblasti k dispozici.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'cs';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'cs';
L_localizedStrings_Text['Attribution'] = 'Data: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Aktuální poloha';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Neděle';
L_localizedStrings_Text['Day-Monday'] = 'Pondělí';
L_localizedStrings_Text['Day-Tuesday'] = 'Úterý';
L_localizedStrings_Text['Day-Wednesday'] = 'Středa';
L_localizedStrings_Text['Day-Thursday'] = 'Čtvrtek';
L_localizedStrings_Text['Day-Friday'] = 'Pátek';
L_localizedStrings_Text['Day-Saturday'] = 'Sobota';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Bouřky';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Bouřky s krupobitím';
L_localizedStrings_Text['SkyText-Hail'] = 'Krupobití';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Mrznoucí déšť';
L_localizedStrings_Text['SkyText-LightRain'] = 'Slabý déšť';
L_localizedStrings_Text['SkyText-Rain'] = 'Déšť';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Silný déšť';
L_localizedStrings_Text['SkyText-Snow'] = 'Sněžení';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Silné sněžení';
L_localizedStrings_Text['SkyText-Fog'] = 'Mlha';
L_localizedStrings_Text['SkyText-Windy'] = 'Větrno';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Zataženo';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Polojasno';
L_localizedStrings_Text['SkyText-Clear'] = 'Jasno';
L_localizedStrings_Text['SkyText-Sunny'] = 'Slunečno';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Skoro jasno';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Převážně slunečno';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Ojedinělé přeháňky';
L_localizedStrings_Text['SkyText-Showers'] = 'Přeháňky';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Sněhové přeháňky';
