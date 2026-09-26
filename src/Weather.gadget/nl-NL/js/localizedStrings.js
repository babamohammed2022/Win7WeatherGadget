////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Dutch (Netherlands).
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
L_localizedStrings_Text['DefaultCity'] = 'Amsterdam, Nederland';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '52.3676,4.9041|Amsterdam';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Gegevens ophalen...';
L_localizedStrings_Text['LocationDontExist'] = 'Locatie niet gevonden';
L_localizedStrings_Text['Searching'] = 'Zoeken...';
L_localizedStrings_Text['NoSearchQuery'] = 'Geen zoekopdracht opgegeven.';
L_localizedStrings_Text['NoResults'] = 'Geen resultaten gevonden.';

L_localizedStrings_Text['Night-New'] = 'Nieuwe maan';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Wassende maansikkel';
L_localizedStrings_Text['Night-First-Quarter'] = 'Eerste kwartier';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Wassende maan';
L_localizedStrings_Text['Night-Full'] = 'Volle maan';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Afnemende maan';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Laatste kwartier';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Afnemende maansikkel';

L_localizedStrings_Text['SensorIconRed'] = 'Kan huidige locatie niet bepalen';
L_localizedStrings_Text['SensorIconGreen'] = 'Uw locatie is gedetecteerd';
L_localizedStrings_Text['SensorIconGray'] = 'Er is een locatiesensor beschikbaar';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Geen locatiesensoren aangesloten';
L_localizedStrings_Text['GettingLocation'] = 'Huidige locatie bepalen...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Temperatuur weergeven in:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Zoeken';
L_localizedStrings_Text['CurrentCity'] = 'Huidige locatie:';
L_localizedStrings_Text['EnterACityName'] = 'Locatie zoeken';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'dichtstbijzijnde locatie voor';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'dichtstbijzijnde locatie:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" gevonden.\nKlik op OK om toe te passen.';

L_localizedStrings_Text['SelectLocation'] = 'Huidige locatie selecteren';
L_localizedStrings_Text['Automatically'] = 'Locatie automatisch bepalen';
L_localizedStrings_Text['Refresh'] = 'Vernieuwen';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Hoe bepaalt Windows automatisch mijn locatie?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Er is geen locatiesensor beschikbaar';
L_localizedStrings_Text['EC4'] = 'Geen weersinformatie voor de huidige locatie';

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
L_localizedStrings_Text['hr'] = 'uur';
L_localizedStrings_Text['hrs'] = 'uur';
L_localizedStrings_Text['day'] = 'dag';
L_localizedStrings_Text['days'] = 'dagen';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2 geleden';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Verwachting van %1 %2 geleden';
L_localizedStrings_Text['DataExpired'] = 'Gegevens verlopen';
L_localizedStrings_Text['Forecasted'] = 'Verwachting';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Maak verbinding met internet voor actuele gegevens';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Kan geen verbinding maken met de service';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'De service is niet beschikbaar in uw regio.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'nl';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'nl';
L_localizedStrings_Text['Attribution'] = 'Gegevens: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Huidige locatie';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Zondag';
L_localizedStrings_Text['Day-Monday'] = 'Maandag';
L_localizedStrings_Text['Day-Tuesday'] = 'Dinsdag';
L_localizedStrings_Text['Day-Wednesday'] = 'Woensdag';
L_localizedStrings_Text['Day-Thursday'] = 'Donderdag';
L_localizedStrings_Text['Day-Friday'] = 'Vrijdag';
L_localizedStrings_Text['Day-Saturday'] = 'Zaterdag';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Onweer';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Onweer met hagel';
L_localizedStrings_Text['SkyText-Hail'] = 'Hagel';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'IJzel';
L_localizedStrings_Text['SkyText-LightRain'] = 'Lichte regen';
L_localizedStrings_Text['SkyText-Rain'] = 'Regen';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Zware regen';
L_localizedStrings_Text['SkyText-Snow'] = 'Sneeuw';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Zware sneeuwval';
L_localizedStrings_Text['SkyText-Fog'] = 'Mist';
L_localizedStrings_Text['SkyText-Windy'] = 'Winderig';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Bewolkt';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Half bewolkt';
L_localizedStrings_Text['SkyText-Clear'] = 'Helder';
L_localizedStrings_Text['SkyText-Sunny'] = 'Zonnig';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Overwegend helder';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Overwegend zonnig';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Verspreide buien';
L_localizedStrings_Text['SkyText-Showers'] = 'Buien';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Sneeuwbuien';
