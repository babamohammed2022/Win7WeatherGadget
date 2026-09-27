////////////////////////////////////////////////////////////////////////////////
//
// wlservices_shim.js
//
// REPLACEMENT for the "wlsrvc.WLServices" ActiveX control (Windows Live
// Services) used by the original Windows 7 Weather gadget.
//
// WHY THIS FILE EXISTS
// --------------------
// The original Weather gadget does not fetch weather data by itself: it
// delegates everything to a Windows COM component ("wlsrvc.dll", created with
//     new ActiveXObject("wlsrvc.WLServices").GetService("weather")
// ). That component queried the MSN Weather servers
// (weather.service.msn.com/data.aspx?src=vista&...), which have been SHUT DOWN.
// This shim implements the SAME interface that weather.js and settings.js
// expect, using data from Open-Meteo (free, no API key, no registration).
// Everything else in the gadget - HTML, CSS, images, animations, display
// logic - is Microsoft's original code.
//
// REPLICATED INTERFACE (identical to the original COM object)
// -----------------------------------------------------------
//   GetService(name)     -> this
//   Celsius              -> property (the gadget sets it to false)
//   RefreshInterval      -> property (minutes)
//   OnDataReady          -> callback
//   SearchByCode(code)   -> forecast for "lat,lon|label"
//   SearchByLocation(t)  -> city search by name, or reverse geocoding of "lat, lon"
//
// LOCALIZATION
// ------------
// The MSN service returned condition texts and day names already translated.
// The shim reads them from the active js/localizedStrings.js
// (keys "SkyText-*", "Day-*", "Attribution", "CurrentLocation",
// "GeocodingLanguage", "ReverseGeocodingLanguage"), with English fallbacks so
// that it keeps working even if a key is missing.
//
// See docs/PATCHES.md for the full list of changes to the original gadget.
//
////////////////////////////////////////////////////////////////////////////////

function WLServicesShim() {
	this.Celsius = false;
	this.OnDataReady = null;
	this.RefreshInterval = 60;   // minutes (the original gadget uses 60)
	this._forecastGeneration = 0;   // identifies the latest SearchByCode request
	this._retryTimer = null;        // pending automatic retry of SearchByCode
	this._unavailable = false;      // true after a failure was reported to the gadget
}

////////////////////////////////////////////////////////////////////////////////
// NETWORK RESILIENCE
//
// When Windows starts, the Sidebar loads the gadget before the network is
// ready. The original shim then either waited forever (a failed request never
// reached OnDataReady, so "Getting data..." stayed on screen) or answered with
// RetCode 1506, which makes weather.js give up for good ("not available in
// your area", no further polling). The only way out was to change location.
//
// Now:
//   * every request has a watchdog, and every failure (DNS/connection errors,
//     exceptions while reading the response, time-outs) reaches OnDataReady;
//   * SearchByCode retries transient failures by itself (RETRY_DELAYS_MS)
//     while the gadget keeps showing "Getting data...";
//   * if the service is still unreachable after REPORT_FAILURE_AFTER_MS, the
//     gadget receives RETCODE_UNAVAILABLE. Unlike 1506, this makes weather.js
//     show "Service not available" and start Microsoft's own polling, which
//     restores the weather as soon as the connection is back. The shim also
//     keeps retrying in the background (at most every BACKGROUND_RETRY_MS)
//     until a newer request replaces it.
////////////////////////////////////////////////////////////////////////////////
WLServicesShim.REQUEST_TIMEOUT_MS = 30000;            // watchdog for one request (all fallbacks)
WLServicesShim.RETRY_DELAYS_MS = [3000, 5000, 10000, 15000, 30000, 30000, 60000];
WLServicesShim.REPORT_FAILURE_AFTER_MS = 90000;       // show the error after about 1.5 minutes
WLServicesShim.BACKGROUND_RETRY_MS = 120000;          // retry interval after the error is shown
WLServicesShim.RETCODE_UNAVAILABLE = 503;             // any code except 200/1506/1507: the gadget polls

WLServicesShim._now = function () {
	return (new Date()).getTime();
};

// Delay before retry number "attempt" (0-based).
WLServicesShim._retryDelay = function (attempt) {
	var delays = WLServicesShim.RETRY_DELAYS_MS;
	if (!delays || delays.length === 0) { return WLServicesShim.BACKGROUND_RETRY_MS; }
	return delays[attempt < delays.length ? attempt : delays.length - 1];
};

// Result object passed to OnDataReady when no data can be returned.
WLServicesShim._failureResult = function (retCode) {
	return comAliases({ RetCode: retCode || WLServicesShim.RETCODE_UNAVAILABLE, Count: 0, Timestamp: new Date(),
		item: function () { return undefined; } });
};

// Location names become part of the saved location code. weather.js puts that
// code inside a quoted string evaluated by setInterval() while it polls for the
// service ("...SearchByCode('<code>')"), so a plain apostrophe (L'Aquila) would
// break the polling. Use the typographic apostrophe instead.
WLServicesShim._safeLabel = function (text) {
	return String(text).replace(/'/g, "\u2019").replace(/[\\\r\n]/g, " ");
};

WLServicesShim.prototype._cancelRetry = function () {
	if (this._retryTimer !== null) {
		try { clearTimeout(this._retryTimer); } catch (e) { /* ignored */ }
		this._retryTimer = null;
	}
};

WLServicesShim.prototype.GetService = function (name) {
	// The original code does: new ActiveXObject("wlsrvc.WLServices").GetService("weather")
	// Only the weather API is implemented, so the shim simply returns itself.
	return this;
};

////////////////////////////////////////////////////////////////////////////////
// _text(key, fallback)
//
// Returns the localized string for "key" from L_localizedStrings_Text (defined
// by js/localizedStrings.js, which both weather.html and settings.html load
// before this file). Returns "fallback" (English) when the table or the key is
// not available.
////////////////////////////////////////////////////////////////////////////////
WLServicesShim._text = function (key, fallback) {
	try {
		if (typeof L_localizedStrings_Text !== "undefined" && L_localizedStrings_Text &&
				typeof L_localizedStrings_Text[key] === "string" && L_localizedStrings_Text[key] !== "") {
			return L_localizedStrings_Text[key];
		}
	} catch (e) { /* fall through to the English fallback */ }
	return fallback;
};

////////////////////////////////////////////////////////////////////////////////
// WEATHER CODE MAPPING
//
// Open-Meteo uses WMO codes (0,1,2,3,45,51,...). The original gadget uses MSN
// "SkyCodes" (1..47) both to pick the small icon (images/N.png) and to pick the
// large image (images/docked_<color>_<state>.png).
//
// The mapping below was derived from the WeatherState() function that
// Microsoft wrote in weather.js, so that icons and backgrounds are exactly the
// ones the gadget expects:
//   26,27,28              -> "cloudy"        (GRAY background)
//   35,39,45,46           -> "few-showers"   (GRAY background)
//   19,20,21,22           -> "foggy"         (GRAY background)
//   29,30,33              -> "partly-cloudy" (BLUE background)
//   5,13,14,15,16,18,25,
//   41,42,43              -> "snow"          (GRAY background)
//   1,2,3,4,37,38,47      -> "thunderstorm"  (GRAY background)
//   31,32,34,36,44        -> "sun"           (BLUE background)
//   23,24                 -> "windy"         (BLUE background)
//   9,10,11,12,40         -> "Rainy"         (GRAY background)
//   6,7,8,17              -> "hail"          (GRAY background)
////////////////////////////////////////////////////////////////////////////////

// WMO weather code -> MSN SkyCode. The "day" value is used for forecasts
// (always "daytime"), the "night" value for the current condition at night.
WLServicesShim._wmoToSkyCode = function (code, isDay) {
	var day, night;
	switch (parseInt(code, 10)) {
		case 0:  day = 32; night = 31; break;   // clear sky
		case 1:  day = 34; night = 33; break;   // mainly clear
		case 2:  day = 30; night = 29; break;   // partly cloudy
		case 3:  day = 26; night = 26; break;   // overcast
		case 45: day = 20; night = 20; break;   // fog
		case 48: day = 20; night = 20; break;   // depositing rime fog
		case 51: day = 9;  night = 9;  break;   // light drizzle
		case 53: day = 11; night = 11; break;   // drizzle
		case 55: day = 12; night = 12; break;   // dense drizzle
		case 56: day = 8;  night = 8;  break;   // light freezing drizzle
		case 57: day = 8;  night = 8;  break;   // dense freezing drizzle
		case 61: day = 9;  night = 9;  break;   // light rain
		case 63: day = 11; night = 11; break;   // rain
		case 65: day = 12; night = 12; break;   // heavy rain
		case 66: day = 17; night = 17; break;   // light freezing rain
		case 67: day = 17; night = 17; break;   // heavy freezing rain
		case 71: day = 14; night = 14; break;   // light snow
		case 73: day = 15; night = 15; break;   // snow
		case 75: day = 16; night = 16; break;   // heavy snow
		case 77: day = 13; night = 13; break;   // snow grains
		case 80: day = 39; night = 39; break;   // light rain showers
		case 81: day = 40; night = 40; break;   // rain showers
		case 82: day = 12; night = 12; break;   // violent rain showers
		case 85: day = 41; night = 41; break;   // light snow showers
		case 86: day = 46; night = 46; break;   // snow showers
		case 95: day = 37; night = 37; break;   // thunderstorm
		case 96: day = 3;  night = 3;  break;   // thunderstorm with hail
		case 99: day = 3;  night = 3;  break;   // severe thunderstorm with hail
		default: day = 26; night = 26; break;   // unknown -> cloudy
	}
	return isDay ? day : night;
};

// MSN SkyCode -> localization key suffix and English fallback text.
// SkyCodes without an entry use "Cloudy", like the original gadget's default.
WLServicesShim._skyTextKeys = {
	1: "Thunderstorms", 2: "Thunderstorms", 3: "ThunderstormsWithHail", 4: "Thunderstorms",
	6: "Hail", 7: "Hail", 8: "FreezingRain",
	9: "LightRain", 10: "Rain", 11: "Rain", 12: "HeavyRain",
	13: "Snow", 14: "Snow", 15: "Snow", 16: "HeavySnow", 17: "FreezingRain",
	20: "Fog", 21: "Fog", 22: "Fog",
	23: "Windy", 24: "Windy",
	26: "Cloudy", 27: "Cloudy", 28: "Cloudy",
	29: "PartlyCloudy", 30: "PartlyCloudy",
	31: "Clear", 32: "Sunny",
	33: "MostlyClear", 34: "MostlySunny",
	35: "ScatteredShowers", 37: "Thunderstorms", 38: "Thunderstorms",
	39: "Showers", 40: "Showers",
	41: "SnowShowers", 42: "Snow", 43: "Snow",
	45: "ScatteredShowers", 46: "SnowShowers", 47: "Thunderstorms"
};

WLServicesShim._skyTextFallback = {
	Thunderstorms: "Thunderstorms", ThunderstormsWithHail: "Thunderstorms with hail",
	Hail: "Hail", FreezingRain: "Freezing rain",
	LightRain: "Light rain", Rain: "Rain", HeavyRain: "Heavy rain",
	Snow: "Snow", HeavySnow: "Heavy snow", Fog: "Fog", Windy: "Windy",
	Cloudy: "Cloudy", PartlyCloudy: "Partly cloudy",
	Clear: "Clear", Sunny: "Sunny", MostlyClear: "Mostly clear", MostlySunny: "Mostly sunny",
	ScatteredShowers: "Scattered showers", Showers: "Showers", SnowShowers: "Snow showers"
};

// MSN SkyCode -> localized condition text (same style as the original strings)
WLServicesShim._skyTextBySkyCode = function (skyCode) {
	var name = WLServicesShim._skyTextKeys[skyCode] || "Cloudy";
	return WLServicesShim._text("SkyText-" + name, WLServicesShim._skyTextFallback[name]);
};

// WMO code -> localized condition text. Not used by the gadget itself; kept for
// compatibility and routed through the SkyCode table so that every condition
// text comes from the localization files.
WLServicesShim._skyText = function (code) {
	return WLServicesShim._skyTextBySkyCode(WLServicesShim._wmoToSkyCode(code, true));
};

// English day names, indexed like Date.getDay(). Used as fallback only.
WLServicesShim._dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Localized day name for Date.getDay() index 0..6.
WLServicesShim._dayName = function (index) {
	var english = WLServicesShim._dayNames[index];
	return WLServicesShim._text("Day-" + english, english);
};

////////////////////////////////////////////////////////////////////////////////
// _xhrGet(url, onOk, onErr)
//
// Gadget pages run in the Trident/mshtml engine in the "Local Machine Zone":
// the DOM XMLHttpRequest is subject to the same-origin policy and requests to
// external domains are blocked, regardless of <permissions>Full</permissions>
// in the manifest (that permission only allows creating ActiveX objects).
// This is why Microsoft used a native COM component (wlsrvc.dll): the HTTP
// request was made by COM, outside the browser security engine.
//
// The same approach is replicated with Msxml2.ServerXMLHTTP (which, unlike
// Msxml2.XMLHTTP, is not bound to the document security zone), with a chain of
// fallbacks and, as a last resort, the native XMLHttpRequest.
////////////////////////////////////////////////////////////////////////////////
WLServicesShim._xhrGet = function (url, onOk, onErr, timeoutMs) {
	var progIds = ["Msxml2.ServerXMLHTTP.6.0", "Msxml2.ServerXMLHTTP", "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
	var lastErr = null;
	var finished = false;
	var current = null;      // request in flight
	var watchdog = null;

	function parseJson(text) {
		try { return JSON.parse(text); }
		catch (e) {
			try { return (new Function("return (" + text + ")"))(); }
			catch (e2) { throw e; }
		}
	}

	function detach(req) {
		if (!req) { return; }
		// MSXML does not accept null here: use an empty function.
		try { req.onreadystatechange = function () {}; } catch (e) { /* ignored */ }
	}

	// Delivers exactly one result, whatever happens.
	function finish(ok, value) {
		if (finished) { return; }
		finished = true;
		if (watchdog !== null) {
			try { clearTimeout(watchdog); } catch (e) { /* ignored */ }
			watchdog = null;
		}
		detach(current);
		current = null;
		if (ok) { onOk(value); } else { onErr(value); }
	}

	// Reads status and body of a completed request. Reading .status of a failed
	// MSXML request (for example "server name could not be resolved" while the
	// network is not ready yet) throws: that is a failure, not a crash.
	function complete(req, index) {
		var status, text, json;
		try {
			status = req.status;
			text = req.responseText;
		} catch (readErr) {
			lastErr = readErr;
			next(index + 1);
			return;
		}
		if (status !== 200) {
			lastErr = new Error("HTTP " + status);
			lastErr.httpStatus = status;
			next(index + 1);
			return;
		}
		try { json = parseJson(text); }
		catch (parseErr) { finish(false, parseErr); return; }
		finish(true, json);
	}

	function next(index) {
		if (finished) { return; }
		detach(current);
		current = null;
		var req;
		if (index >= progIds.length) {
			// Last attempt: native XMLHttpRequest
			try {
				req = new XMLHttpRequest();
				current = req;
				req.open("GET", url, true);
				req.onreadystatechange = function () {
					if (finished || current !== req || req.readyState !== 4) { return; }
					var status, text, json;
					try { status = req.status; text = req.responseText; }
					catch (readErr) { finish(false, lastErr || readErr); return; }
					if (status !== 200) {
						var httpErr = new Error("HTTP " + status);
						httpErr.httpStatus = status;
						finish(false, (status === 0 && lastErr) ? lastErr : httpErr);
						return;
					}
					try { json = parseJson(text); }
					catch (parseErr) { finish(false, parseErr); return; }
					finish(true, json);
				};
				req.send(null);
			} catch (err) {
				finish(false, lastErr || err);
			}
			return;
		}

		try {
			req = new ActiveXObject(progIds[index]);
			current = req;
			req.open("GET", url, true);
			req.setRequestHeader("User-Agent", "Windows-Gadget-Meteo");
			// Never answer from the WinINet cache (Msxml2.XMLHTTP fallbacks).
			try {
				req.setRequestHeader("Cache-Control", "no-cache");
				req.setRequestHeader("If-Modified-Since", "Sat, 01 Jan 2000 00:00:00 GMT");
			} catch (hErr) { /* ignored */ }
			try { req.setTimeouts(10000, 10000, 20000, 20000); } catch (tErr) { /* not supported: ignored */ }
			req.onreadystatechange = function () {
				if (finished || current !== req) { return; }
				var state;
				try { state = req.readyState; } catch (stateErr) { state = 4; }
				if (state !== 4) { return; }
				complete(req, index);
			};
			req.send();
		} catch (err) {
			lastErr = err;
			next(index + 1);
		}
	}

	try {
		watchdog = setTimeout(function () {
			if (finished) { return; }
			var req = current;
			detach(req);
			current = null;
			try { if (req) { req.abort(); } } catch (abortErr) { /* ignored */ }
			var timeoutErr = new Error("request timed out");
			timeoutErr.timeout = true;
			finish(false, timeoutErr);
		}, timeoutMs || WLServicesShim.REQUEST_TIMEOUT_MS);
	} catch (timerErr) { watchdog = null; }

	next(0);
};

// True when a failed request is worth retrying: no connection, time-out,
// server errors, rate limiting and unreadable answers (for example the login
// page of a captive portal while the connection is being set up). Other HTTP
// errors and error answers of the API are not going to change by themselves.
WLServicesShim._isTransientError = function (err) {
	if (!err) { return true; }
	if (err.apiError) { return false; }
	var status = err.httpStatus;
	if (status === undefined || status === null || status === 0) { return true; }
	return status >= 500 || status === 408 || status === 429 || status >= 12000;   // 12xxx: WinINet network errors
};

////////////////////////////////////////////////////////////////////////////////
// comAliases(obj)
//
// The original gadget ran against a COM object (IDispatch), which resolves
// property names CASE-INSENSITIVELY. That is why Microsoft's code can write
// "data.count" (lower case) while the shim contract declares "Count". The shim,
// however, is a plain JavaScript object, where names are case-sensitive:
// without this helper "data.count" is undefined, the loop over the results
// never runs and the location search drop-down stays empty.
//
// This function restores the COM behavior: for every property of the object
// it creates an alias with a lower-case initial, when different.
// Everything is wrapped in try/catch so that the gadget is never blocked.
////////////////////////////////////////////////////////////////////////////////
function comAliases(obj) {
	try {
		if (!obj || typeof obj !== "object") { return obj; }
		for (var k in obj) {
			if (!Object.prototype.hasOwnProperty.call(obj, k)) { continue; }
			var lower = k.charAt(0).toLowerCase() + k.slice(1);
			if (lower !== k && obj[lower] === undefined) {
				try { obj[lower] = obj[k]; } catch (eAlias) { /* read-only property */ }
			}
		}
	} catch (e) { /* on failure the gadget uses the canonical names */ }
	return obj;
}

////////////////////////////////////////////////////////////////////////////////
// _buildForecastResultObject(json, locationLabel, lat, lon)
//
// Builds the "collection" that weather.js expects from SearchByCode:
//   .RetCode, .Timestamp, .Count, .item(i)
// and for each item: .Location, .Latitude, .Longitude, .SkyCode, .SkyText,
// .Temperature, .Url, .Attribution2, .Forecast(n) / .ForeCast(n)
////////////////////////////////////////////////////////////////////////////////
WLServicesShim._buildForecastResultObject = function (json, locationLabel, lat, lon) {
	var daily = json.daily;
	// Current API ("current=...") with fallback to the legacy one ("current_weather=true")
	var current = json.current || json.current_weather || null;
	var isDay = current ? (current.is_day !== 0) : true;
	var currentCode = current ? (current.weather_code !== undefined ? current.weather_code : current.weathercode) : undefined;
	var currentTemp = current ? current.temperature_2m : undefined;

	if (!daily || !daily.time || daily.time.length === 0) {
		return WLServicesShim._failureResult();
	}

	var forecasts = [];
	var count = Math.min(daily.time.length, 5);       // the gadget uses Forecast(0..4)
	for (var i = 0; i < count; i++) {
		var d = new Date(daily.time[i] + "T12:00:00");
		forecasts.push(comAliases({
			Date: daily.time[i],
			Day: WLServicesShim._dayName(d.getDay()),
			High: Math.round(daily.temperature_2m_max[i]),
			Low: Math.round(daily.temperature_2m_min[i]),
			SkyCode: WLServicesShim._wmoToSkyCode(daily.weathercode[i], true),   // forecasts are "daytime"
			SkyText: WLServicesShim._skyTextBySkyCode(WLServicesShim._wmoToSkyCode(daily.weathercode[i], true))
		}));
	}

	var codeNow = (currentCode !== undefined && currentCode !== null) ? currentCode : daily.weathercode[0];
	var skyCodeNow = WLServicesShim._wmoToSkyCode(codeNow, isDay);

	var item = comAliases({
		Location: locationLabel,
		Latitude: lat,
		Longitude: lon,
		Temperature: (currentTemp !== undefined && currentTemp !== null) ? Math.round(currentTemp) : forecasts[0].High,
		SkyCode: skyCodeNow,
		SkyText: WLServicesShim._skyTextBySkyCode(skyCodeNow),
		Url: "https://open-meteo.com/",
		Attribution2: WLServicesShim._text("Attribution", "Data: Open-Meteo.com"),
		Forecast: function (n) { return forecasts[n] || forecasts[forecasts.length - 1]; }
	});
	// The original code uses both .Forecast(n) and .ForeCast(n) (a historical Microsoft typo)
	item.ForeCast = item.Forecast;

	return comAliases({
		RetCode: 200,
		Timestamp: new Date(),
		Count: 1,
		item: function (idx) { return idx === 0 ? item : undefined; }
	});
};

////////////////////////////////////////////////////////////////////////////////
// _parseLocationCode(code)
//
// Parses "lat,lon|label" and returns { lat, lon, label }, or null when the
// coordinates are not valid numbers.
////////////////////////////////////////////////////////////////////////////////
WLServicesShim._parseLocationCode = function (code) {
	var parts = String(code).split("|");
	var coords = String(parts[0]).split(",");
	var lat = parseFloat(coords[0]);
	var lon = parseFloat(coords[1]);
	if (isNaN(lat) || isNaN(lon)) { return null; }
	var label = (parts.length > 1) ? String(parts[1]).replace(/^\s+|\s+$/g, "") : "";
	if (label.length === 0) { label = lat.toFixed(2) + ", " + lon.toFixed(2); }
	return { lat: lat, lon: lon, label: label };
};

////////////////////////////////////////////////////////////////////////////////
// SearchByCode(code)
//
// In this scheme "code" is always "lat,lon|label" (produced by
// SearchByLocation and saved by the gadget in WeatherLocationCode).
// Accepted formats:   "41.9028,12.4964|Roma, Italia|"   (the one saved by the gadget)
//                    "41.9028,12.4964|Roma, Italia"
//                    "41.9028,12.4964"
////////////////////////////////////////////////////////////////////////////////
WLServicesShim.prototype.SearchByCode = function (code) {
	var self = this;
	var parts = String(code).split("|");
	var coords = String(parts[0]).split(",");
	var lat = parseFloat(coords[0]);
	var lon = parseFloat(coords[1]);
	var label = (parts.length > 1 && String(parts[1]).replace(/^\s+|\s+$/g, "").length > 0)
		? String(parts[1]).replace(/^\s+|\s+$/g, "")
		: (lat.toFixed(2) + ", " + lon.toFixed(2));

	if (isNaN(lat) || isNaN(lon)) {
		// Unrecognized code (e.g. a leftover legacy MSN code such as "wc:ITXX0067"):
		// use the localized default location, then Redmond as the last resort.
		var fallback = WLServicesShim._parseLocationCode(
			WLServicesShim._text("DefaultLocationCode", "47.6740,-122.1215|Redmond"));
		if (fallback) {
			lat = fallback.lat; lon = fallback.lon; label = fallback.label;
		} else {
			lat = 47.6740; lon = -122.1215; label = "Redmond";
		}
	}

	// IMPORTANT: always request Fahrenheit. The original gadget always receives
	// Fahrenheit from the service and converts it to Celsius with
	// TemperatureInSelectedUnit() (weather.js). Requesting Celsius would convert
	// the value twice and display a wrong temperature.
	var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon +
		"&current=temperature_2m,weather_code,is_day" +
		"&daily=weathercode,temperature_2m_max,temperature_2m_min" +
		"&temperature_unit=fahrenheit&timezone=auto&forecast_days=5";

	// A new request replaces any request or retry still pending on this object.
	self._cancelRetry();
	var generation = ++self._forecastGeneration;
	var startedAt = WLServicesShim._now();
	var attempt = 0;
	var failureReported = false;

	function current() { return generation === self._forecastGeneration; }

	function deliver(result) {
		if (typeof self.OnDataReady === "function") { self.OnDataReady(result); }
	}

	function scheduleRetry(delay) {
		self._cancelRetry();
		try {
			self._retryTimer = setTimeout(function () {
				self._retryTimer = null;
				if (current()) { request(); }
			}, delay);
		} catch (timerErr) {
			self._retryTimer = null;
		}
	}

	function onFailure(err) {
		if (!current()) { return; }
		System.Debug.outputString("Weather gadget: failed to retrieve weather data (" + (err && err.message ? err.message : err) + ")");
		if (!WLServicesShim._isTransientError(err)) {
			// Retrying will not help; weather.js polls the service by itself.
			failureReported = true;
			self._unavailable = true;
			deliver(WLServicesShim._failureResult());
			return;
		}
		// Quick retries only while the service is not known to be down: once the
		// gadget shows the error, its own polling requests are answered at once.
		var elapsed = WLServicesShim._now() - startedAt;
		if (!failureReported && (self._unavailable || elapsed >= WLServicesShim.REPORT_FAILURE_AFTER_MS)) {
			failureReported = true;
			self._unavailable = true;
			deliver(WLServicesShim._failureResult());
			if (!current()) { return; }   // the gadget already started a new request
		}
		var delay = failureReported ? WLServicesShim.BACKGROUND_RETRY_MS : WLServicesShim._retryDelay(attempt);
		attempt++;
		scheduleRetry(delay);
	}

	function request() {
		WLServicesShim._xhrGet(url,
			function (json) {
				if (!current()) { return; }
				if (!json || json.error) {
					var apiErr = new Error("API error" + (json && json.reason ? ": " + json.reason : ""));
					apiErr.apiError = true;
					onFailure(apiErr);
					return;
				}
				var result = WLServicesShim._buildForecastResultObject(json, label, lat, lon);
				if (result.RetCode !== 200) {
					var dataErr = new Error("no forecast data in the answer");
					dataErr.apiError = true;
					onFailure(dataErr);
					return;
				}
				self._cancelRetry();
				self._unavailable = false;
				deliver(result);
			},
			onFailure
		);
	}

	request();
};

////////////////////////////////////////////////////////////////////////////////
// SearchByLocation(text)
//
// Two cases:
//   a) text like "41.90, 12.49"   -> reverse geocoding (used by the location sensor)
//   b) free-form city name        -> geocoding (used by the manual search)
// Returns a "collection" of results with .Location, .LocationCode,
// .ZipCode, .Fullname, .SearchDistance, .SearchScore
////////////////////////////////////////////////////////////////////////////////
WLServicesShim.prototype.SearchByLocation = function (text) {
	var self = this;
	var decoded = String(text);
	try { decoded = decodeURIComponent(decoded); } catch (e) { /* already decoded */ }
	var coordMatch = decoded.match(/^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/);

	// The gadget saves LocationCode + '|' + ZipCode. The coordinates go into
	// LocationCode and the label into ZipCode, so SearchByCode receives
	// "lat,lon|label" exactly as it expects.
	function makeItem(name, lat, lon) {
		name = WLServicesShim._safeLabel(name);
		return {
			Location: name,
			LocationCode: lat.toFixed(4) + "," + lon.toFixed(4),
			ZipCode: name,
			Fullname: name,
			SearchDistance: "0",
			SearchScore: "1",
			SearchLocation: name
		};
	}

	function respond(items) {
		var result = comAliases({ RetCode: 200, Count: items.length, item: function (i) { return items[i]; } });
		if (typeof self.OnDataReady === "function") { self.OnDataReady(result); }
	}

	function respondEmpty(retCode) {
		if (typeof self.OnDataReady === "function") {
			self.OnDataReady(comAliases({ RetCode: retCode || 200, Count: 0, item: function () { return undefined; } }));
		}
	}

	if (coordMatch) {
		// Reverse geocoding: GPS coordinates -> location name
		var lat = parseFloat(coordMatch[1]);
		var lon = parseFloat(coordMatch[2]);
		var url = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat +
			"&longitude=" + lon + "&localityLanguage=" +
			encodeURIComponent(WLServicesShim._text("ReverseGeocodingLanguage", "en"));
		WLServicesShim._xhrGet(url,
			function (json) {
				var name = json.city || json.locality || json.principalSubdivision || WLServicesShim._text("CurrentLocation", "Current location");
				respond([makeItem(name, lat, lon)]);
			},
			function (err) { respondEmpty(WLServicesShim.RETCODE_UNAVAILABLE); }
		);
	} else {
		// Geocoding by city name
		var geoUrl = "https://geocoding-api.open-meteo.com/v1/search?count=10&language=" +
			encodeURIComponent(WLServicesShim._text("GeocodingLanguage", "en")) + "&format=json&name=" +
			encodeURIComponent(decoded);
		WLServicesShim._xhrGet(geoUrl,
			function (json) {
				if (!json.results || json.results.length === 0) { respondEmpty(200); return; }
				var items = [];
				for (var i = 0; i < json.results.length; i++) {
					var r = json.results[i];
					var label = r.name +
						(r.admin1 ? ", " + r.admin1 : "") +
						(r.country ? ", " + r.country : "");
					items.push(makeItem(label, r.latitude, r.longitude));
				}
				respond(items);
			},
			function (err) { respondEmpty(WLServicesShim.RETCODE_UNAVAILABLE); }
		);
	}
};
