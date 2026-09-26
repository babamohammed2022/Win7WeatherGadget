////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Russian (Russia).
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
L_localizedStrings_Text['DefaultCity'] = 'Москва, Россия';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '55.7558,37.6173|Москва';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Получение данных...';
L_localizedStrings_Text['LocationDontExist'] = 'Местоположение не найдено';
L_localizedStrings_Text['Searching'] = 'Поиск...';
L_localizedStrings_Text['NoSearchQuery'] = 'Не указан поисковый запрос.';
L_localizedStrings_Text['NoResults'] = 'Ничего не найдено.';

L_localizedStrings_Text['Night-New'] = 'Новолуние';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Растущий серп';
L_localizedStrings_Text['Night-First-Quarter'] = 'Первая четверть';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Растущая луна';
L_localizedStrings_Text['Night-Full'] = 'Полнолуние';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Убывающая луна';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Последняя четверть';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Убывающий серп';

L_localizedStrings_Text['SensorIconRed'] = 'Не удается определить текущее местоположение';
L_localizedStrings_Text['SensorIconGreen'] = 'Ваше местоположение определено';
L_localizedStrings_Text['SensorIconGray'] = 'Доступен датчик расположения';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Датчики расположения не подключены';
L_localizedStrings_Text['GettingLocation'] = 'Определение текущего местоположения...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Показывать температуру по шкале:';
L_localizedStrings_Text['Fahrenheit'] = 'Фаренгейта';
L_localizedStrings_Text['Celsius'] = 'Цельсия';
L_localizedStrings_Text['Search'] = 'Поиск';
L_localizedStrings_Text['CurrentCity'] = 'Текущее местоположение:';
L_localizedStrings_Text['EnterACityName'] = 'Поиск местоположения';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'ближайшее местоположение для';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'ближайшее местоположение:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = 'Найдено: «%1».\nНажмите кнопку «ОК», чтобы применить.';

L_localizedStrings_Text['SelectLocation'] = 'Выберите текущее местоположение';
L_localizedStrings_Text['Automatically'] = 'Определять местоположение автоматически';
L_localizedStrings_Text['Refresh'] = 'Обновить';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Как Windows автоматически определяет мое местоположение?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Нет доступных датчиков расположения';
L_localizedStrings_Text['EC4'] = 'Нет сведений о погоде для текущего местоположения';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'мин';
L_localizedStrings_Text['hr'] = 'ч';
L_localizedStrings_Text['hrs'] = 'ч';
L_localizedStrings_Text['day'] = 'день';
L_localizedStrings_Text['days'] = 'дн.';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2 назад';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Прогноз: %1 %2 назад';
L_localizedStrings_Text['DataExpired'] = 'Данные устарели';
L_localizedStrings_Text['Forecasted'] = 'Прогноз';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Подключитесь к Интернету, чтобы получить свежие данные';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Не удается подключиться к службе';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Служба недоступна в вашем регионе.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'ru';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'ru';
L_localizedStrings_Text['Attribution'] = 'Данные: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Текущее местоположение';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Воскресенье';
L_localizedStrings_Text['Day-Monday'] = 'Понедельник';
L_localizedStrings_Text['Day-Tuesday'] = 'Вторник';
L_localizedStrings_Text['Day-Wednesday'] = 'Среда';
L_localizedStrings_Text['Day-Thursday'] = 'Четверг';
L_localizedStrings_Text['Day-Friday'] = 'Пятница';
L_localizedStrings_Text['Day-Saturday'] = 'Суббота';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Грозы';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Гроза с градом';
L_localizedStrings_Text['SkyText-Hail'] = 'Град';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Ледяной дождь';
L_localizedStrings_Text['SkyText-LightRain'] = 'Небольшой дождь';
L_localizedStrings_Text['SkyText-Rain'] = 'Дождь';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Сильный дождь';
L_localizedStrings_Text['SkyText-Snow'] = 'Снег';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Сильный снегопад';
L_localizedStrings_Text['SkyText-Fog'] = 'Туман';
L_localizedStrings_Text['SkyText-Windy'] = 'Ветрено';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Облачно';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Переменная облачность';
L_localizedStrings_Text['SkyText-Clear'] = 'Ясно';
L_localizedStrings_Text['SkyText-Sunny'] = 'Солнечно';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Преимущественно ясно';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Преимущественно солнечно';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Местами ливни';
L_localizedStrings_Text['SkyText-Showers'] = 'Ливни';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Ливневый снег';
