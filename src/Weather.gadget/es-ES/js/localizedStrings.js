////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Spanish (Spain).
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
L_localizedStrings_Text['DefaultCity'] = 'Madrid, España';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '40.4168,-3.7038|Madrid';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Obteniendo datos...';
L_localizedStrings_Text['LocationDontExist'] = 'Ubicación no encontrada';
L_localizedStrings_Text['Searching'] = 'Buscando...';
L_localizedStrings_Text['NoSearchQuery'] = 'No se especificó ninguna búsqueda.';
L_localizedStrings_Text['NoResults'] = 'No se obtuvieron resultados.';

L_localizedStrings_Text['Night-New'] = 'Luna nueva';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Luna creciente';
L_localizedStrings_Text['Night-First-Quarter'] = 'Cuarto creciente';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Luna gibosa creciente';
L_localizedStrings_Text['Night-Full'] = 'Luna llena';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Luna gibosa menguante';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Cuarto menguante';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Luna menguante';

L_localizedStrings_Text['SensorIconRed'] = 'No se puede obtener la ubicación actual';
L_localizedStrings_Text['SensorIconGreen'] = 'Se detectó su ubicación';
L_localizedStrings_Text['SensorIconGray'] = 'Hay un sensor de ubicación disponible';
L_localizedStrings_Text['SensorIconNotConnected'] = 'No hay sensores de ubicación conectados';
L_localizedStrings_Text['GettingLocation'] = 'Obteniendo la ubicación actual...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Mostrar temperatura en:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Buscar';
L_localizedStrings_Text['CurrentCity'] = 'Ubicación actual:';
L_localizedStrings_Text['EnterACityName'] = 'Buscar ubicación';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'ubicación más cercana a';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'ubicación más cercana:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = 'Se encontró "%1".\nHaga clic en Aceptar para aplicar.';

L_localizedStrings_Text['SelectLocation'] = 'Seleccionar ubicación actual';
L_localizedStrings_Text['Automatically'] = 'Buscar ubicación automáticamente';
L_localizedStrings_Text['Refresh'] = 'Actualizar';
L_localizedStrings_Text['HelperArticleLinkText'] = '¿Cómo encuentra Windows mi ubicación automáticamente?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'No hay ningún sensor de ubicación disponible';
L_localizedStrings_Text['EC4'] = 'No hay información meteorológica para la ubicación actual';

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
L_localizedStrings_Text['day'] = 'día';
L_localizedStrings_Text['days'] = 'días';
L_localizedStrings_Text['ageStampMessage'] = 'hace %1 %2';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Previsión de hace %1 %2';
L_localizedStrings_Text['DataExpired'] = 'Datos caducados';
L_localizedStrings_Text['Forecasted'] = 'Previsión';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Conéctese a Internet para obtener datos actualizados';
L_localizedStrings_Text['ServiceNotAvailable'] = 'No se puede conectar con el servicio';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'El servicio no está disponible en su región.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'es';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'es';
L_localizedStrings_Text['Attribution'] = 'Datos: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Ubicación actual';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Domingo';
L_localizedStrings_Text['Day-Monday'] = 'Lunes';
L_localizedStrings_Text['Day-Tuesday'] = 'Martes';
L_localizedStrings_Text['Day-Wednesday'] = 'Miércoles';
L_localizedStrings_Text['Day-Thursday'] = 'Jueves';
L_localizedStrings_Text['Day-Friday'] = 'Viernes';
L_localizedStrings_Text['Day-Saturday'] = 'Sábado';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Tormentas';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Tormentas con granizo';
L_localizedStrings_Text['SkyText-Hail'] = 'Granizo';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Lluvia helada';
L_localizedStrings_Text['SkyText-LightRain'] = 'Lluvia débil';
L_localizedStrings_Text['SkyText-Rain'] = 'Lluvia';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Lluvia intensa';
L_localizedStrings_Text['SkyText-Snow'] = 'Nieve';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Nevada intensa';
L_localizedStrings_Text['SkyText-Fog'] = 'Niebla';
L_localizedStrings_Text['SkyText-Windy'] = 'Ventoso';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Nublado';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Parcialmente nublado';
L_localizedStrings_Text['SkyText-Clear'] = 'Despejado';
L_localizedStrings_Text['SkyText-Sunny'] = 'Soleado';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Mayormente despejado';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Mayormente soleado';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Chubascos dispersos';
L_localizedStrings_Text['SkyText-Showers'] = 'Chubascos';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Chubascos de nieve';
