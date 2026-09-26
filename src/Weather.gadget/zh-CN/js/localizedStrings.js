////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Chinese (Simplified, China).
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
L_localizedStrings_Text['DefaultCity'] = '北京, 中国';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '39.9042,116.4074|北京';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = '正在获取数据...';
L_localizedStrings_Text['LocationDontExist'] = '找不到位置';
L_localizedStrings_Text['Searching'] = '正在搜索...';
L_localizedStrings_Text['NoSearchQuery'] = '未指定搜索内容。';
L_localizedStrings_Text['NoResults'] = '未返回任何结果。';

L_localizedStrings_Text['Night-New'] = '新月';
L_localizedStrings_Text['Night-Waxing-Crescent'] = '蛾眉月';
L_localizedStrings_Text['Night-First-Quarter'] = '上弦月';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = '盈凸月';
L_localizedStrings_Text['Night-Full'] = '满月';
L_localizedStrings_Text['Night-Waning-Gibbous'] = '亏凸月';
L_localizedStrings_Text['Night-Last-Quarter'] = '下弦月';
L_localizedStrings_Text['Night-Waning-Crescent'] = '残月';

L_localizedStrings_Text['SensorIconRed'] = '无法获取当前位置';
L_localizedStrings_Text['SensorIconGreen'] = '已检测到你的位置';
L_localizedStrings_Text['SensorIconGray'] = '有可用的位置传感器';
L_localizedStrings_Text['SensorIconNotConnected'] = '未连接位置传感器';
L_localizedStrings_Text['GettingLocation'] = '正在获取当前位置...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = '温度显示单位：';
L_localizedStrings_Text['Fahrenheit'] = '华氏';
L_localizedStrings_Text['Celsius'] = '摄氏';
L_localizedStrings_Text['Search'] = '搜索';
L_localizedStrings_Text['CurrentCity'] = '当前位置：';
L_localizedStrings_Text['EnterACityName'] = '搜索位置';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = '与搜索内容最接近的位置：';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = '最接近的位置：';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '已找到“%1”。\n单击“确定”以应用。';

L_localizedStrings_Text['SelectLocation'] = '选择当前位置';
L_localizedStrings_Text['Automatically'] = '自动查找位置';
L_localizedStrings_Text['Refresh'] = '刷新';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Windows 如何自动查找我的位置？';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = '没有可用的位置传感器';
L_localizedStrings_Text['EC4'] = '没有当前位置的天气信息';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = '分钟';
L_localizedStrings_Text['hr'] = '小时';
L_localizedStrings_Text['hrs'] = '小时';
L_localizedStrings_Text['day'] = '天';
L_localizedStrings_Text['days'] = '天';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2前';
L_localizedStrings_Text['ageStampMessageForecastedData'] = '%1 %2前的预报';
L_localizedStrings_Text['DataExpired'] = '数据已过期';
L_localizedStrings_Text['Forecasted'] = '预报';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = '请连接到 Internet 以获取最新数据';
L_localizedStrings_Text['ServiceNotAvailable'] = '无法连接到服务';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = '你所在的地区不提供此服务。';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'zh';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'zh';
L_localizedStrings_Text['Attribution'] = '数据: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = '当前位置';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = '星期日';
L_localizedStrings_Text['Day-Monday'] = '星期一';
L_localizedStrings_Text['Day-Tuesday'] = '星期二';
L_localizedStrings_Text['Day-Wednesday'] = '星期三';
L_localizedStrings_Text['Day-Thursday'] = '星期四';
L_localizedStrings_Text['Day-Friday'] = '星期五';
L_localizedStrings_Text['Day-Saturday'] = '星期六';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = '雷阵雨';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = '雷阵雨伴有冰雹';
L_localizedStrings_Text['SkyText-Hail'] = '冰雹';
L_localizedStrings_Text['SkyText-FreezingRain'] = '冻雨';
L_localizedStrings_Text['SkyText-LightRain'] = '小雨';
L_localizedStrings_Text['SkyText-Rain'] = '中雨';
L_localizedStrings_Text['SkyText-HeavyRain'] = '大雨';
L_localizedStrings_Text['SkyText-Snow'] = '雪';
L_localizedStrings_Text['SkyText-HeavySnow'] = '大雪';
L_localizedStrings_Text['SkyText-Fog'] = '雾';
L_localizedStrings_Text['SkyText-Windy'] = '有风';
L_localizedStrings_Text['SkyText-Cloudy'] = '阴';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = '多云';
L_localizedStrings_Text['SkyText-Clear'] = '晴';
L_localizedStrings_Text['SkyText-Sunny'] = '晴';
L_localizedStrings_Text['SkyText-MostlyClear'] = '晴间多云';
L_localizedStrings_Text['SkyText-MostlySunny'] = '晴间多云';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = '局部阵雨';
L_localizedStrings_Text['SkyText-Showers'] = '阵雨';
L_localizedStrings_Text['SkyText-SnowShowers'] = '阵雪';
