////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Polish (Poland).
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
L_localizedStrings_Text['DefaultCity'] = 'Warszawa, Polska';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '52.2297,21.0122|Warszawa';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Pobieranie danych...';
L_localizedStrings_Text['LocationDontExist'] = 'Nie znaleziono lokalizacji';
L_localizedStrings_Text['Searching'] = 'Wyszukiwanie...';
L_localizedStrings_Text['NoSearchQuery'] = 'Nie podano wyszukiwanej frazy.';
L_localizedStrings_Text['NoResults'] = 'Brak wyników.';

L_localizedStrings_Text['Night-New'] = 'Nów';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Sierp przybywający';
L_localizedStrings_Text['Night-First-Quarter'] = 'Pierwsza kwadra';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Księżyc garbaty przybywający';
L_localizedStrings_Text['Night-Full'] = 'Pełnia';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Księżyc garbaty ubywający';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Ostatnia kwadra';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Sierp ubywający';

L_localizedStrings_Text['SensorIconRed'] = 'Nie można ustalić bieżącej lokalizacji';
L_localizedStrings_Text['SensorIconGreen'] = 'Wykryto Twoją lokalizację';
L_localizedStrings_Text['SensorIconGray'] = 'Dostępny jest czujnik lokalizacji';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Brak podłączonych czujników lokalizacji';
L_localizedStrings_Text['GettingLocation'] = 'Ustalanie bieżącej lokalizacji...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Wyświetlaj temperaturę w skali:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheita';
L_localizedStrings_Text['Celsius'] = 'Celsjusza';
L_localizedStrings_Text['Search'] = 'Szukaj';
L_localizedStrings_Text['CurrentCity'] = 'Bieżąca lokalizacja:';
L_localizedStrings_Text['EnterACityName'] = 'Wyszukaj lokalizację';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'najbliższa lokalizacja dla';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'najbliższa lokalizacja:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = 'Znaleziono „%1”.\nKliknij OK, aby zastosować.';

L_localizedStrings_Text['SelectLocation'] = 'Wybierz bieżącą lokalizację';
L_localizedStrings_Text['Automatically'] = 'Znajdź lokalizację automatycznie';
L_localizedStrings_Text['Refresh'] = 'Odśwież';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Jak system Windows automatycznie ustala moją lokalizację?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Brak dostępnego czujnika lokalizacji';
L_localizedStrings_Text['EC4'] = 'Brak informacji o pogodzie dla bieżącej lokalizacji';

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
L_localizedStrings_Text['hr'] = 'godz.';
L_localizedStrings_Text['hrs'] = 'godz.';
L_localizedStrings_Text['day'] = 'dzień';
L_localizedStrings_Text['days'] = 'dni';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2 temu';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Prognoza: %1 %2 temu';
L_localizedStrings_Text['DataExpired'] = 'Dane nieaktualne';
L_localizedStrings_Text['Forecasted'] = 'Prognoza';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Połącz się z Internetem, aby pobrać aktualne dane';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Nie można połączyć się z usługą';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Usługa jest niedostępna w Twoim regionie.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'pl';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'pl';
L_localizedStrings_Text['Attribution'] = 'Dane: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Bieżąca lokalizacja';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Niedziela';
L_localizedStrings_Text['Day-Monday'] = 'Poniedziałek';
L_localizedStrings_Text['Day-Tuesday'] = 'Wtorek';
L_localizedStrings_Text['Day-Wednesday'] = 'Środa';
L_localizedStrings_Text['Day-Thursday'] = 'Czwartek';
L_localizedStrings_Text['Day-Friday'] = 'Piątek';
L_localizedStrings_Text['Day-Saturday'] = 'Sobota';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Burze';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Burze z gradem';
L_localizedStrings_Text['SkyText-Hail'] = 'Grad';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Marznący deszcz';
L_localizedStrings_Text['SkyText-LightRain'] = 'Słaby deszcz';
L_localizedStrings_Text['SkyText-Rain'] = 'Deszcz';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Ulewny deszcz';
L_localizedStrings_Text['SkyText-Snow'] = 'Śnieg';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Intensywne opady śniegu';
L_localizedStrings_Text['SkyText-Fog'] = 'Mgła';
L_localizedStrings_Text['SkyText-Windy'] = 'Wietrznie';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Pochmurno';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Częściowe zachmurzenie';
L_localizedStrings_Text['SkyText-Clear'] = 'Bezchmurnie';
L_localizedStrings_Text['SkyText-Sunny'] = 'Słonecznie';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Przeważnie bezchmurnie';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Przeważnie słonecznie';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Miejscami przelotne opady';
L_localizedStrings_Text['SkyText-Showers'] = 'Przelotne opady';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Przelotne opady śniegu';
