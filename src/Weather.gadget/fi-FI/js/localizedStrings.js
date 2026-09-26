////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Finnish (Finland).
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
L_localizedStrings_Text['DefaultCity'] = 'Helsinki, Suomi';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '60.1699,24.9384|Helsinki';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Haetaan tietoja...';
L_localizedStrings_Text['LocationDontExist'] = 'Sijaintia ei löytynyt';
L_localizedStrings_Text['Searching'] = 'Haetaan...';
L_localizedStrings_Text['NoSearchQuery'] = 'Hakusanaa ei ole määritetty.';
L_localizedStrings_Text['NoResults'] = 'Ei tuloksia.';

L_localizedStrings_Text['Night-New'] = 'Uusikuu';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Kasvava kuunsirppi';
L_localizedStrings_Text['Night-First-Quarter'] = 'Ensimmäinen neljännes';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Kasvava kuu';
L_localizedStrings_Text['Night-Full'] = 'Täysikuu';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Vähenevä kuu';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Viimeinen neljännes';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Vähenevä kuunsirppi';

L_localizedStrings_Text['SensorIconRed'] = 'Nykyistä sijaintia ei voi määrittää';
L_localizedStrings_Text['SensorIconGreen'] = 'Sijaintisi on tunnistettu';
L_localizedStrings_Text['SensorIconGray'] = 'Sijaintianturi on käytettävissä';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Sijaintiantureita ei ole liitetty';
L_localizedStrings_Text['GettingLocation'] = 'Haetaan nykyistä sijaintia...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Lämpötilan yksikkö:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Hae';
L_localizedStrings_Text['CurrentCity'] = 'Nykyinen sijainti:';
L_localizedStrings_Text['EnterACityName'] = 'Hae sijaintia';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'lähin sijainti haulle';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'lähin sijainti:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" löytyi.\nOta käyttöön valitsemalla OK.';

L_localizedStrings_Text['SelectLocation'] = 'Valitse nykyinen sijainti';
L_localizedStrings_Text['Automatically'] = 'Etsi sijainti automaattisesti';
L_localizedStrings_Text['Refresh'] = 'Päivitä';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Miten Windows määrittää sijaintini automaattisesti?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Sijaintianturia ei ole käytettävissä';
L_localizedStrings_Text['EC4'] = 'Nykyiselle sijainnille ei ole säätietoja';

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
L_localizedStrings_Text['hr'] = 'tunti';
L_localizedStrings_Text['hrs'] = 'tuntia';
L_localizedStrings_Text['day'] = 'päivä';
L_localizedStrings_Text['days'] = 'päivää';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2 sitten';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Ennuste %1 %2 sitten';
L_localizedStrings_Text['DataExpired'] = 'Tiedot vanhentuneet';
L_localizedStrings_Text['Forecasted'] = 'Ennuste';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Muodosta Internet-yhteys saadaksesi ajantasaiset tiedot';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Palveluun ei saada yhteyttä';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Palvelu ei ole käytettävissä alueellasi.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'fi';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'fi';
L_localizedStrings_Text['Attribution'] = 'Tiedot: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Nykyinen sijainti';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Sunnuntai';
L_localizedStrings_Text['Day-Monday'] = 'Maanantai';
L_localizedStrings_Text['Day-Tuesday'] = 'Tiistai';
L_localizedStrings_Text['Day-Wednesday'] = 'Keskiviikko';
L_localizedStrings_Text['Day-Thursday'] = 'Torstai';
L_localizedStrings_Text['Day-Friday'] = 'Perjantai';
L_localizedStrings_Text['Day-Saturday'] = 'Lauantai';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Ukkosta';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Ukkosta ja rakeita';
L_localizedStrings_Text['SkyText-Hail'] = 'Rakeita';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Jäätävää sadetta';
L_localizedStrings_Text['SkyText-LightRain'] = 'Heikkoa sadetta';
L_localizedStrings_Text['SkyText-Rain'] = 'Sadetta';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Voimakasta sadetta';
L_localizedStrings_Text['SkyText-Snow'] = 'Lumisadetta';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Voimakasta lumisadetta';
L_localizedStrings_Text['SkyText-Fog'] = 'Sumua';
L_localizedStrings_Text['SkyText-Windy'] = 'Tuulista';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Pilvistä';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Puolipilvistä';
L_localizedStrings_Text['SkyText-Clear'] = 'Selkeää';
L_localizedStrings_Text['SkyText-Sunny'] = 'Aurinkoista';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Enimmäkseen selkeää';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Enimmäkseen aurinkoista';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Hajanaisia sadekuuroja';
L_localizedStrings_Text['SkyText-Showers'] = 'Sadekuuroja';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Lumikuuroja';
