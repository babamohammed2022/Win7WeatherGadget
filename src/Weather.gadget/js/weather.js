////////////////////////////////////////////////////////////////////////////////
//
// THIS CODE IS NOT APPROVED FOR USE IN/ON ANY OTHER UI ELEMENT OR PRODUCT COMPONENT.
// Copyright (c) 2009 Microsoft Corporation. All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

var g_locationAPIAvailable = false;
var g_functionToCall = "MicrosoftGadget.requestUpdate()";

var gDefaultDisplayMode = "docked"; 
var gDisplaySizeDocked = { width: 130, height: 67 }
var gDisplaySizeUnDocked = { width: 264, height: 194 }
var gDefaultRefreshInterval = 60;	
var gDefaultPollingForServiceExistence = 1; 
var gDefaultSunRise = "06:30:00";
var gDefaultSunSet = "18:30:00";
var gDefaultWeatherLocation = getLocalizedString('DefaultCity');
var gDefaultWeatherLocationCode = getLocalizedString('DefaultLocationCode');
var gDefaultDisplayDegreesIn = 'Celsius';

var gTimeStampLastRefreshAvailable = false;
var gTimeToNextRefresh = 1; // default to 1 minute

var gMinimumDistance = 10; // Threshold distance (in kilometres) to do a location update ( when recieving location change events )

var bUseCelsius = false;

var LCID_ARRAY = new Array(1025,1028,1029,1030,1031,1032,1033,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1053,1054,1055,1056,1057,1058,1060,1061,1062,1063,1068,1070,1080,1081,1083,1106,1117,1122,1124,1131,1134,1135,1146,1153,1158,2049,2052,2055,2057,2058,2060,2064,2067,2068,2070,2074,2092,2094,2107,2108,2141,2155,3073,3076,3079,3081,3082,3084,3098,3131,3179,4097,4100,4103,4105,4106,4108,4155,5121,5127,5129,5130,5132,5146,5179,6145,6153,6154,6156,6203,7169,7177,7178,7227,8193,8202,8218,8251,9217,9226,9275,10241,10250,11265,11274,12289,12298,13313,13321,13322,14337,15361,15370,16385,16393,16394,17417,17418,18441,18442,19466,20490,21514);
var LOCCODE_ARRAY = new Array("wc:SAXX0017","wc:TWXX0021","wc:EZXX0012","wc:DAXX0009","wc:GMXX0007","wc:GRXX0004","wc:USNY0996","wc:FIXX0002","wc:FRXX0076","wc:ISXX0010","wc:HUXX0002","wc:ICXX0002","wc:ITXX0067","wc:JAXX0085","wc:KSXX0037","wc:NLXX0002","wc:NOXX0029","wc:PLXX0028","wc:BRXX0232","wc:7162","wc:ROXX0003","wc:RSXX0063","wc:HRXX0005","wc:LOXX0001","wc:SWXX0031","wc:THXX0002","wc:TUXX0014","wc:PKXX0008","wc:IDXX0022","wc:UPXX0016","wc:SIXX0002","wc:ENXX0004","wc:LGXX0004","wc:LHXX0005","wc:AJXX0001","wc:3166","wc:33739","wc:INXX0096","wc:9734330","wc:UKXX0030","wc:CAXX0202","wc:NLXX0002","wc:RPXX0017","wc:BLXX0006","wc:LUXX0003","wc:GLXX0003","wc:CIXX0020","wc:NZXX0049","wc:GTXX0002","wc:IZXX0008","wc:CHXX0008","wc:SZXX0033","wc:UKXX0085","wc:MXDF0132","wc:BEXX0005","wc:SZXX0005","wc:BEXX0005","wc:NOXX0029","wc:POXX0016","wc:YIXX0005","wc:AJXX0001","wc:GMXX0171","wc:SWXX0019","wc:EIXX0014","wc:CAXX0202","wc:ECXX0008","wc:EGXX0004","wc:CHXX0049","wc:AUXX0025","wc:ASXX0023","wc:SPXX0050","wc:CAXX0385","wc:YIXX0005","wc:8633427","wc:PEXX0011","wc:LYXX0009","wc:SNXX0006","wc:LUXX0003","wc:CAXX0343","wc:GTXX0002","wc:SZXX0013","wc:9746201","wc:AGXX0001","wc:LSXX0002","wc:NZXX0049","wc:CSXX0009","wc:LUXX0003","wc:BKXX0004","wc:SWXX0019","wc:MOXX0007","wc:EIXX0014","wc:PMXX0004","wc:8548036","wc:NOXX0049","wc:TSXX0010","wc:SFXX0023","wc:DRXX0009","wc:24724","wc:MUXX0003","wc:VEXX0008","wc:BKXX0004","wc:8633427","wc:YMXX0005","wc:COXX0004","wc:8633427","wc:SYXX0004","wc:PEXX0011","wc:JOXX0002","wc:ARBA0009","wc:LEXX0003","wc:ECXX0008","wc:KUXX0003","wc:RPXX0017","wc:CIXX0020","wc:AEXX0004","wc:BAXX0001","wc:PAXX0001","wc:QAXX0003","wc:INXX0096","wc:BLXX0006","wc:MYXX0008","wc:ESXX0001","wc:SNXX0006","wc:HOXX0008","wc:NUXX0004","wc:USPR0087","wc:USCA0638","wc:MXDF0132","wc:USWA0367","wc:AEXX0004","wc:AEXX0004");
var UNIT_ARRAY = new Array("C","C","C","C","C","C","F","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","F","C","C","C","C");

var MicrosoftGadget;


////////////////////////////////////////////////////////////////////////////////
//
// cleanup() - triggered by body.onunload event
//
////////////////////////////////////////////////////////////////////////////////
function cleanup() 
{
 System.Debug.outputString("Releasing resources...");
 try
 {
	factory.object.StopListeningForReports();
	System.Debug.outputString("StopListeningForReports succeeded");
 }
 catch(err)
 {
	System.Debug.outputString("StopListeningForReports failed");
 }

 try
 {
	MicrosoftGadget.factory = null;
	System.Debug.outputString("Pointer to node cleared");
	factory.removeNode( true );
	System.Debug.outputString("RemoveNode succeeded");
 }
 catch(err)
 {
	System.Debug.outputString("RemoveNode failed");
 }

 System.Debug.outputString("Done");
}

////////////////////////////////////////////////////////////////////////////////
//
// setup() - triggered by body.onload event
//
////////////////////////////////////////////////////////////////////////////////
function setup() 
{
 // PATCH (Windows 10/11 port): vbsGetLocale() is defined in a VBScript block
 // inside weather.html. Starting with Windows 11 24H2, VBScript is no longer
 // enabled by default: if the function is missing, fall back to the localized
 // defaults instead of stopping the gadget.
 var OSLocale = 0;
 try { OSLocale = vbsGetLocale(); } catch (localeErr) { OSLocale = 0; }
 for (i = 0; i < LCID_ARRAY.length ; i++)
 {
	if ( LCID_ARRAY[i] == OSLocale )
	{
		gDefaultWeatherLocation = LOCNAME_ARRAY[i];
		gDefaultWeatherLocationCode = LOCCODE_ARRAY[i];
		if ( UNIT_ARRAY[i] == "C" )
		{
		gDefaultDisplayDegreesIn = 'Celsius';
		}
		else
		{
		gDefaultDisplayDegreesIn = 'Fahrenheit';
		}
	}
 }
 // PATCH (Windows 10/11 port): MSN location codes ("wc:..." and "FR:...") can no
 // longer be used. If the system locale selected one of those codes as the
 // default location, fall back to the localized default location, which the
 // shim understands ("latitude,longitude|label"). The display name is reset
 // together with the code so that both always describe the same place.
 if ( !/^\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?/.test( gDefaultWeatherLocationCode ) )
 {
	gDefaultWeatherLocationCode = getLocalizedString('DefaultLocationCode');
	gDefaultWeatherLocation = getLocalizedString('DefaultCity');
 }

 MicrosoftGadget = new WeatherGadget();

 // If we are in BIDI Mode, apply some special css to help folks read things Right to Left
 if (gBIDIMode) 
 {
	document.body.className = 'BIDI'; 
 }
 setDisplayMode();

 // PATCH (Windows 10/11 port): the Windows 7 location sensor (clsid 9DCC3CC8-...)
 // no longer exists on modern systems: .object can be null or throw an error.
 try { MicrosoftGadget.factory = document.getElementById("factory").object; }
 catch (factoryErr) { MicrosoftGadget.factory = null; }

 MicrosoftGadget.refreshState();
 
 if (MicrosoftGadget.isValid) 
 {
	MicrosoftGadget.refreshSettings();
 } 
 else 
 {
	// The only way that we can get here is if the Service itself is invalid. 
	// Therefore, no need to set up refresh intervals, etc.
	showOrHideServiceError( true );
 }
 
 // Hook the various events to our custom support functions
 if (gGadgetMode) 
 {	
	System.Gadget.settingsUI="settings.html";
	System.Gadget.onSettingsClosed = function(event) 
	{ 
		MicrosoftGadget.refreshSettings();
	}
	System.Gadget.onDock = function()
	{ 
		setDisplayMode(); 
	}	
	System.Gadget.onUndock = function()
	{ 
		setDisplayMode(); 
	}	
	System.Gadget.onShowSettings = function() 
	{
		MicrosoftGadget.suspendPeriodicRefresh();
		if ( MicrosoftGadget.pollingForServiceExistenceIsRunning ) 
		{
		MicrosoftGadget.endPollingForServiceExistence();
		}
		MicrosoftGadget.wasPollingForServiceExistence = false;
	}
	System.Gadget.visibilityChanged = function() 
	{
		if ( System.Gadget.visible ) 
		{
		if ( !IsWeatherDataFresh() && !MicrosoftGadget.pollingForServiceExistenceIsRunning )
		{
			MicrosoftGadget.refreshSettings();
		}
		}
	}
 }	
}


////////////////////////////////////////////////////////////////////////////////
//
// IsWeatherDataFresh ( )
//
// return true if weather data last pulled is still fresh
// Also, if the data is still fresh, update global gTimeToNextRefresh to indicate time in minutes when refresh must be triggered to get fresh data
////////////////////////////////////////////////////////////////////////////////
function IsWeatherDataFresh ( )
{
 if ( gTimeStampLastRefreshAvailable && MicrosoftGadget.oMSNWeatherServiceTimeStamp !== undefined && MicrosoftGadget.oMSNWeatherServiceTimeStamp !== null )
 {
	var ageLastRefresh = calculateAge( MicrosoftGadget.oMSNWeatherServiceTimeStamp );
	var serviceRefreshInterval = MicrosoftGadget.refreshInterval / ( 60 * 1000 );
	var ageLastRefreshInterval = ageLastRefresh.minutesAge + ( ageLastRefresh.hoursAge * 60 );

	if ( ageLastRefresh.daysAge !== 0 || ageLastRefreshInterval >= serviceRefreshInterval )
	{
		return false;
	}
	else
	{
		gTimeToNextRefresh = serviceRefreshInterval - ageLastRefreshInterval;
		return true;
	}
 }
 else
 {
	return false;
 }
}

////////////////////////////////////////////////////////////////////////////////
//
// TemperatureInSelectedUnit (degreesFahrenheit) 
//
// If Fahrenheit selected, return temperature passed as-is, else
// Return Tc = (5/9)*(Tf-32); 
////////////////////////////////////////////////////////////////////////////////
function TemperatureInSelectedUnit (degreesFahrenheit) 
{
	bUseCelsius = ( MicrosoftGadget.displayDegreesIn == "Celsius" );
	if ( bUseCelsius )
	{
		var degreesCelsius = 0;

		if ( degreesFahrenheit == undefined )
			return (degreesFahrenheit);

		if ( !( degreesFahrenheit == parseFloat( degreesFahrenheit ) ) )
			return (degreesFahrenheit);

		degreesFahrenheit = parseFloat( degreesFahrenheit );
		degreesCelsius = ( degreesFahrenheit - 32 )*5.0/9.0;
		degreesCelsius = Math.round( degreesCelsius );

		return (degreesCelsius);
	}
	else
	{
		return (degreesFahrenheit);
	}
}


////////////////////////////////////////////////////////////////////////////////
//
// WeatherGadget() - main Constructor
//
////////////////////////////////////////////////////////////////////////////////
function WeatherGadget() 
{
 var self = this;


 ////////////////////////////////////////////////////////////////////////////////
 //
 // Public Members
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.isValid = true;
 this.isStaleData = false;
 this.dataExpired = false;
 this.ageStampText = ""; // XX <units> ago (holds the localized string indicating staleness of data
 this.SkyText = "";
 this.statusMessage = "";
 this.weatherLocation	= gDefaultWeatherLocation;
 this.weatherLocationCode = gDefaultWeatherLocationCode;
 this.displayDegreesIn	= gDefaultDisplayDegreesIn;
 this.SunRise	= gDefaultSunRise;
 this.SunSet	= gDefaultSunSet;
 this.offsetFromLocalTime = 0;
 this.refreshInterval	= gDefaultRefreshInterval;
 this.displayMode	= gDefaultDisplayMode;
 this.currentState = null;

 this.oMSNWeatherServiceTimeStamp = null;

 try 
 {
	this.spinner = new getSpinner( "PleaseWaitLoadingSpinner" ); 
 }
 catch (objException) 
 {
	this.spinner = null;
 }

 this.status = 200;
 try 
 {
	// Connect to Weather Service .dll
	// PATCH (Windows 10/11 port): both objects were created with
	// new ActiveXObject("wlsrvc.WLServices"); the MSN service behind that control
	// is gone, so js/wlservices_shim.js provides the same interface.
	var oMSN = new WLServicesShim();
	var oMSN2 = new WLServicesShim();
	this.oMSN = oMSN.GetService("weather"); // Object to send and recieve weather data queries and to poll for service existence
	this.oMSN2 = oMSN2.GetService("weather"); // Object to send a latlong query and recieve a location code corresponding to the latlong
 }
 catch (objException) 
 {
	this.isValid = false;
	this.statusMessage = getLocalizedString('ServiceNotAvailable');
	this.oMSN = new Object();
	this.oMSN2 = new Object();
 }
 
 ////////////////////////////////////////////////////////////////////////////////
 //
 // Public Methods
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.onUpdate	= refreshEverything;
 this.lastPositionUsedForGPSQuery = null;
 this.onLocationEventFired = function( currentPosition )
 {
	var bTimerReset = false;
 	try
	{
		var bReadyToUpdate = true;
		if( self.lastPositionUsedForGPSQuery !== null )
		{
			bReadyToUpdate = ( DistanceMovedSinceLastPositionUpdate(self.lastPositionUsedForGPSQuery, currentPosition) > gMinimumDistance );
		}

 		if ( bReadyToUpdate )
 		 // If new latlong event fired with location coordinates more than the 
 		 // threshold distance since the last attempt to update using location coordinates, update using new coordinates recieved
 		 // NOTE: This assumes that the location sensor is working ie REPORT_RUNNING state (4) since latlong is only recieved through events when reports are running
		{
			self.clearWeatherUpdateTimer();
			bTimerReset = true;

			System.Debug.outputString("Updating weather to new location");
			self.lastPositionUsedForGPSQuery = currentPosition;	// Always maintain current GPS position locally before calling getCurrentLocationCode()
			self.getCurrentLocationCode ( currentPosition.Latitude, currentPosition.Longitude );
		}
 	}
	catch(err)
	{
		System.Debug.outputString("Error while processing location change event");
		System.Debug.outputString( "Error Description: " + err.description + "");
		if ( bTimerReset ) // Incase exception occurred after clearing the timer.. re-set it.. to prevent gadget from completely aborting periodic refresh
		{
			self.beginPeriodicRefresh();
		}
	}
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // getWeatherUpdate - location sensitive request of update from Weather Feed
 // ignoreAPIStatusUpdate - indicates if status check before update should be skipped
 ////////////////////////////////////////////////////////////////////////////////
 this.getWeatherUpdate = function( ignoreAPIStatusUpdate ) 
 {
	if ( !ignoreAPIStatusUpdate )
	{
		self.APIStatusChanged( getAPIStatus( MicrosoftGadget ) ); // check api status - is it ready to provide location?
	}

	if ( self.currentState == LOCATION_SENSING_STATE_OK_AUTO ) // gadget configured for location updates
	{
		try
		{
		var report = getAPILatLongReport( self );
		System.Debug.outputString( "Current Geo-coordinates: (" + report.Latitude + "," + report.Longitude + ")");
		self.lastPositionUsedForGPSQuery = report;	// Always maintain current GPS position locally before calling getCurrentLocationCode()
		self.getCurrentLocationCode ( report.Latitude, report.Longitude );
		return;
		}
		catch(err)
		{
		System.Debug.outputString( "Error getting geo-coordinates from Location API");
		System.Debug.outputString( "Error Description: " + err.description + "");
		self.initializeState ( LOCATION_SENSING_STATE_ERROR_AUTO , false );
		}
	}
	self.requestUpdate();
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // getCurrentLocationCode - queries weather service to find location for geo-coordinates
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.getCurrentLocationCode = function( latitude , longitude ) 
 {
	var coordinates = latitude + ", " + longitude;

	this.oMSN2.OnDataReady = getLocationCode;

	self.statusMessage='Requesting location Update...';

	if ( self.spinner !== null ) 
	{
		self.spinner.start();
	}

	showOrHideGettingLocationMessage( true );
	self.oMSN2.SearchByLocation( coordinates );
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // requestUpdate - request update from Weather Feed.
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.requestUpdate = function() 
 {
	if ( IsWeatherDataFresh ( ) )
	{
		self.setWeatherUpdateTimer( g_functionToCall , gTimeToNextRefresh * 60 * 1000 );
		return;
	}

	self.statusMessage='Requesting Update...';

	if (self.spinner !== null) 
	{
		self.spinner.start();
	}

	showOrHideGettingDataMessage( true ); 
	self.oMSN.Celsius = false;
	self.oMSN.OnDataReady = onDataReadyHandler;
	self.oMSN.SearchByCode( self.weatherLocationCode );
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // refreshSettings - populate values with stored settings 
 //	and request update(s) of Weather data from Service
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.refreshSettings = function () 
 {
	var savedWeatherLocationCode = URLDecode(readSetting("WeatherLocationCode")) || gDefaultWeatherLocationCode;
	if ( savedWeatherLocationCode != self.weatherLocationCode )
	{
		gTimeStampLastRefreshAvailable = false;
	}

	self.statusMessage='RefreshSettings';
	self.weatherLocation	= unescape(readSetting("WeatherLocation")) || gDefaultWeatherLocation;
	self.weatherLocationCode = savedWeatherLocationCode;
	self.displayDegreesIn	= readSetting("DisplayDegreesIn") || gDefaultDisplayDegreesIn;

	saveSetting("WeatherLocation", self.weatherLocation );
	saveSetting("WeatherLocationCode", self.weatherLocationCode );
	saveSetting("DisplayDegreesIn", self.displayDegreesIn );

	self.refreshState();

	this.updateRefreshInterval();
	if (self.spinner !== null) 
	{
		self.spinner.hide();
	}

	self.updateWeather( false );
	MicrosoftGadget.onUpdate();
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // updateRefreshInterval - update MSN Weather service refresh frequency
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.updateRefreshInterval = function( )
 {
	// Compute frequency of refresh 
	if (self.oMSN.RefreshInterval > 0 )
	{
		self.refreshInterval = self.oMSN.RefreshInterval;
	}
	else
	{
		self.refreshInterval = readSetting("RefreshInterval");
	}
	self.refreshInterval = ( self.refreshInterval || gDefaultRefreshInterval ) * 60 * 1000;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // updateWeather - update weather data and schedule periodic updates
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.updateWeather = function( bIgnoreAPIStatusCheck )
 {
	if ( g_locationAPIAvailable )
	{
		self.getWeatherUpdate( bIgnoreAPIStatusCheck );
	}
	else
	{
		self.requestUpdate();
	}

	self.beginPeriodicRefresh();
 }



 ////////////////////////////////////////////////////////////////////////////////
 //
 // beginPeriodicRefresh - begins periodic polling of weather service for updates
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.beginPeriodicRefresh = function() 
 {
	// Clear any pending refresh requests first
	self.suspendPeriodicRefresh();	
	self.endPollingForServiceExistence();
	// Set up recurring requests for updates*	
	self.setWeatherUpdateTimer( g_functionToCall , self.refreshInterval);
	self.periodicRefreshIsRunning = true;
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // setWeatherUpdateTimer - sets timer to request weather update
 // ( also clears any existing timers for the same )
 ////////////////////////////////////////////////////////////////////////////////
 this.setWeatherUpdateTimer = function( updateFunction, timeout )
 {
	this.clearWeatherUpdateTimer();
	self.interval_RefreshTemperature = setTimeout( updateFunction, timeout ); 
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // clearWeatherUpdateTimer - clears currently set timer (if any) to request weather update
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.clearWeatherUpdateTimer = function( )
 {
	clearTimeout( self.interval_RefreshTemperature ); 
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // suspendPeriodicRefresh - cancels polling of weather service for updates
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.suspendPeriodicRefresh = function() 
 {
	this.clearWeatherUpdateTimer();
	self.periodicRefreshIsRunning = false;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // beginPollingForServiceExistence - when network connectivity is lost, 
 // begin special polling testing for it to come back.
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.beginPollingForServiceExistence = function() 
 {
	// Clear any pending refresh requests first
	self.suspendPeriodicRefresh();	
	self.endPollingForServiceExistence();

	// Remap the onDataReady Handler
	self.oMSN.OnDataReady = isDataReadyHandler; 
	self.pollingForServiceExistence = setInterval( "MicrosoftGadget.oMSN.SearchByCode('" + self.weatherLocationCode + "')", gDefaultPollingForServiceExistence * 60 * 1000);
	self.pollingForServiceExistenceIsRunning = true;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // endPollingForServiceExistence - cancel special network connectivity polling
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.endPollingForServiceExistence = function() 
 {
	clearInterval( self.pollingForServiceExistence );
	clearInterval( MicrosoftGadget.pollingForServiceExistence ); 
	self.pollingForServiceExistenceIsRunning = false;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // weatherState() - Computes generalized state of weather [Sunny, Cloudy, etc.]
 // for all SkyCodes. Determines what image is used to represent...
 //
 ////////////////////////////////////////////////////////////////////////////////
 self.WeatherState = function() 
 {
	switch ( self.SkyCode ) 
	{
		case (26) : case (27) : case (28) :
			theWeatherState = "cloudy";
			break;
		case (35) : case (39) : case (45) : case (46) : 
			theWeatherState = "few-showers";
			break;
		case (19) : case (20) : case (21) : case (22) :
			theWeatherState = "foggy";
			break;
		case (29) : case (30) : case (33) :
			theWeatherState = "partly-cloudy";
			break;
		case (5) : case (13) : case (14) : case (15) : case (16) : case (18) : case (25) : case (41) : case (42) : case (43) : 
			theWeatherState = "snow";
			break;
		case (1) : case (2) : case (3) : case (4) : case (37) : case (38) : case (47) : 
			theWeatherState = "thunderstorm";
			break;
		case (31) : case (32) : case (34) : case (36) : case (44) :		// Note 44- "Data Not Available"
			theWeatherState = "sun";
			break;
		case (23) : case (24) :
			theWeatherState = "windy";
			break;
		case (9) : case (10) : case (11) : case (12) : case (40) :
			theWeatherState = "Rainy";
			break;
		case (6) : case (7) : case (8) : case (17) : 
			theWeatherState = "hail";
			break;
		default:
			theWeatherState = "sun";
			break;
		}
		return theWeatherState;
	}
 ////////////////////////////////////////////////////////////////////////////////
 //
 // isNight - boolean indicating whether its currently night *wherever*
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.isNight = function() 
 {
	var curTime = GMTTime(); 
	// Before SunRise or after Sunset means it's Night
	var deltaTime = self.SunSet - curTime;
	deltaTime = deltaTime / (1000 * 60 * 60);
	if (deltaTime > 24)
		curTime = new Date(curTime.getTime() + 24 * 60 * 60 * 1000);
	else if (deltaTime < 0)
		curTime = new Date(curTime.getTime() - 24 * 60 * 60 * 1000);
 
	return ( ( curTime < self.SunRise ) || ( curTime > self.SunSet ) );
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // makesSenseToDisplayTheMoon - boolean indicating whether it makes sense to 
 //	display the moon. Dependant on weather state
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.makesSenseToDisplayTheMoon = function() 
 {
	var retVal = false;
	if ( self.isNight() ) 
	{ 
		var theWeatherState = self.WeatherState();
		if ( ( theWeatherState=="sun" ) || ( theWeatherState=="partly-cloudy" ) ) 
		{
		retVal = true;
		}
	}
	return retVal;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // self.backdrop - returns backdrop color required for active weather state
 //
 ////////////////////////////////////////////////////////////////////////////////
self.backdrop = function() 
 {
	var theBackground = "BLUE";
	var theDisplayMode = activeDisplayMode();
	
	switch ( self.SkyCode ) 
	{
		case (26) : case (27) : case (28) :
		case (35) : case (39) : case (45) : case (46) : 
		case (19) : case (20) : case (21) : case (22) :
		case (1) : case (2) : case (3) : case (4) : case (5) : case (37) : case (38) : case (47) : 
		case (9) : case (10) : case (11) : case (12) : case (40) : case (41) : case (42) : case (43) :
		case (6) : case (7) : case (8) : case (17) : case (13) : case (14) : case (15) : case (16) : case (18) :
		theBackground = "GRAY";
		break;
		case (29) : case (30) : case (33) : case (34) :
		case (31) : case (32) : case (36) : case (44) :		
		case (23) : case (24) : case (25) : default : 
		theBackground = "BLUE";
		break;
	} 
	
	if (self.isNight()) 
	{ 
		theBackground = "BLACK"; 
	}
	if ( !self.isValid )
	{ 
		theBackground = "BLUE"; 
	}
	return theBackground;
}

 
 ////////////////////////////////////////////////////////////////////////////////
 //
 // HighTemp() - use tomorrow's High as an approximation 
 //	if today's High cannot be returned by service
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.HighTemp = function() 
 {
	var theHighTemp = 0;
	try 
	{
		theHighTemp = TemperatureInSelectedUnit( self.oMSNWeatherService.ForeCast(0).High );
		if (theHighTemp == 0) 
		{
		theHighTemp = TemperatureInSelectedUnit( self.oMSNWeatherService.Forecast(1).High );
		}
	}
	catch (objException) 
	{
	}
	return theHighTemp;
 }


 ////////////////////////////////////////////////////////////////////////////////
 //
 // refreshState( )
 //	- re-check and assign state on reload/load/settings finalized
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.refreshState = function()
 {
	if ( self.factory == null )
	{
		self.DisableLocationAware();
		self.initializeState ( LOCATION_SENSING_STATE_DISABLED , false );
	}
	else
	{
		g_locationAPIAvailable = true;
		saveSetting ( "LocationAPIAvailable" , g_locationAPIAvailable );

		try
		{
		self.factory.StopListeningForReports();
		}
		catch(err)
		{
		}

		g_functionToCall = "MicrosoftGadget.getWeatherUpdate( false )";

		self.currentState = readSetting("CurrentState") || LOCATION_SENSING_STATE_INVALID;
		self.currentState = parseInt ( self.currentState );

		if ( !LOCATION_SENSING_VALID_STATES_ARRAY.exists( self.currentState ) ) // setting not saved yet
		{
		self.currentState = null;
		}

		self.APIStatusChanged( getAPIStatus( MicrosoftGadget ) );

		try // try hooking up status changed event
		{
		self.factory.ListenForReports(0);
		}
		catch(err)
		{
		System.Debug.outputString( "Error hooking up status changed event.");
		System.Debug.outputString( "Error number: " + err.number + "");
		System.Debug.outputString( "Error Description: " + err.description + "");
		}

	}
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // DisableLocationAware( )
 //	- disable gadget's location aware feature
 //
 ////////////////////////////////////////////////////////////////////////////////
 this.DisableLocationAware = function( )
 {
	self.initializeState( LOCATION_SENSING_STATE_DISABLED , false );
	g_locationAPIAvailable = false;
	g_functionToCall = "MicrosoftGadget.requestUpdate()";
	saveSetting ( "LocationAPIAvailable" , g_locationAPIAvailable );
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // APIStatusChanged( status ) - triggered when status of location api
 //	has changed. This updates gadget state and UI to reflect the new status
 ////////////////////////////////////////////////////////////////////////////////
 this.APIStatusChanged = function( status )
 {
	var newState = this.currentState;
	var baseVal;

	if ( status == 3 )
	{
		return;
	}
	else if ( status == 0 )
	{
		baseVal = LOCATION_SENSING_STATE_DISCONNECTED_AUTO;
	}
	else if ( status == 1 || status == 2 )
	{
		baseVal = LOCATION_SENSING_STATE_ERROR_AUTO;
	}
	else if ( status == 4 )
	{
		try
		{
		var report = getAPILatLongReport( this );
		baseVal = LOCATION_SENSING_STATE_OK_AUTO;
		}
		catch(err)
		{
		System.Debug.outputString( "Error getting geo-coordinates from Location API");
		System.Debug.outputString( "Error Description: " + err.description + "");
		baseVal = LOCATION_SENSING_STATE_ERROR_AUTO;
		}
	}
	else
	{
		baseVal = LOCATION_SENSING_STATE_ERROR_AUTO;
	}


	if ( this.currentState == null ) // gadget state not initialized yet
	{
		if ( baseVal == LOCATION_SENSING_STATE_DISCONNECTED_AUTO )
		{
		newState = LOCATION_SENSING_STATE_DISCONNECTED_MANUAL;
		}
		else
		{
		newState = baseVal;
		}
	}
	else
	{
		if ( LOCATION_SENSING_MANUAL_STATES_ARRAY.exists( this.currentState ) ) // State with Automatic Updates not enabled
		{
		switch( baseVal )
		{
			case LOCATION_SENSING_STATE_ERROR_AUTO:
			newState = LOCATION_SENSING_STATE_ERROR_MANUAL;
			break;

			case LOCATION_SENSING_STATE_OK_AUTO:
			newState = LOCATION_SENSING_STATE_OK_MANUAL;
			break;

			case LOCATION_SENSING_STATE_DISCONNECTED_AUTO:
			newState = LOCATION_SENSING_STATE_DISCONNECTED_MANUAL;
			break;
		}
		}
		else
		{
		newState = baseVal;
		}
	}

	self.initializeState ( newState , false );

	if ( this.currentState == LOCATION_SENSING_STATE_OK_AUTO )
	{
		self.updateWeather( true );
	}
 }
 
 //////////////////////////////////////////////////////////////////////////////////////////////
 //
 // initializeState( stateNum , alertStatus ) - set gadget current state to one of 4 location aware states
 //	(default to 2)
 //
 //////////////////////////////////////////////////////////////////////////////////////////////
 this.initializeState = function( stateNum , alertStatus )
 {
	var sensorIconElementDocked = document.getElementById("SensorIconDockedMode");
	var sensorIconElementUndocked = document.getElementById("SensorIconUndockedMode");
	var imageURL = "";
	var hoverMessage = "";
	
	if (( stateNum == undefined ) || ( stateNum == null ) || !LOCATION_SENSING_VALID_STATES_ARRAY.exists( stateNum ) )
	{
		stateNum = LOCATION_SENSING_STATE_ERROR_MANUAL;
		System.Debug.outputString("Unable to determine state. Location Awareness may not work correctly when enabled.");
	}
	stateNum = parseInt( stateNum );

	this.currentState = stateNum;

	saveSetting ( "CurrentState" , stateNum );
	
	switch( stateNum )
	{
		case LOCATION_SENSING_STATE_ERROR_AUTO:
		imageURL = "images\\" + dpiImageFolderPrefix + "redStateIcon.png";
		hoverMessage = getLocalizedString('SensorIconRed');
		break;
		
		case LOCATION_SENSING_STATE_OK_AUTO:
		if ( alertStatus )
		{
			imageURL = "images\\" + dpiImageFolderPrefix + "alertIcon.png";
			hoverMessage = getLocalizedString('EC4');
		}
		else
		{
			imageURL = "images\\" + dpiImageFolderPrefix + "greenStateIcon.png";
			hoverMessage = getLocalizedString('SensorIconGreen');
		}
		break;
		
		case LOCATION_SENSING_STATE_OK_MANUAL:
		imageURL = "images\\" + dpiImageFolderPrefix + "grayStateIcon.png";
		hoverMessage = getLocalizedString('SensorIconGray');
		break;

		case LOCATION_SENSING_STATE_DISCONNECTED_AUTO:
		imageURL = "images\\" + dpiImageFolderPrefix + "notConnectedStateIcon.png";
		hoverMessage = getLocalizedString('SensorIconNotConnected');
		break;

		default:
		sensorIconElementDocked.style.visibility = "hidden";
		sensorIconElementUndocked.style.visibility = "hidden";

		document.getElementById('PlaceUnDockedMode').style.width = document.getElementById('PlaceHrefUnDockedMode').style.width = '222px';
		document.getElementById('PlaceDockedMode').style.width = document.getElementById('PlaceHrefDockedMode').style.width = '116px';
		if ( document.dir=='rtl')
		{
			document.getElementById('PlaceUnDockedMode').style.marginRight = '26px';
		}

		return;
		break;
	}

	sensorIconElementDocked.alt = hoverMessage;
	sensorIconElementUndocked.alt = hoverMessage;

	sensorIconElementDocked.style.visibility = "visible";
	sensorIconElementUndocked.style.visibility = "visible";

	setImage(sensorIconElementDocked, imageURL);
	setImage(sensorIconElementUndocked, imageURL);

	document.getElementById('PlaceUnDockedMode').style.width = document.getElementById('PlaceHrefUnDockedMode').style.width = '210px';
	document.getElementById('PlaceDockedMode').style.width = document.getElementById('PlaceHrefDockedMode').style.width = '104px';
	if ( document.dir=='rtl')
	{
		document.getElementById('PlaceUnDockedMode').style.marginRight='38px';
	}
 }

 
 ////////////////////////////////////////////////////////////////////////////////
 //
 // Private Methods
 //
 ////////////////////////////////////////////////////////////////////////////////
	
 ////////////////////////////////////////////////////////////////////////////////
 //
 // getLocationCode(object data) - asynchronous callback to get location
 //	for current geo-coordinates
 //
 ////////////////////////////////////////////////////////////////////////////////
 function getLocationCode(data) 
 {
	if ( data.RequestPending )
	{
		return;
	}
	
	if (self.spinner !== null) 
	{		
		self.spinner.stop();
	}

	showOrHideGettingLocationMessage( false );	

	if (data!==undefined) 
	{
		self.statusMessage='Location code Received.';

		if (data.Count > 0 && data.item(0)) // Service returned non-zero items
		{
		self.initializeState ( LOCATION_SENSING_STATE_OK_AUTO , false );

		if ( data.item(0).LocationCode != self.weatherLocationCode )
		{
			gTimeStampLastRefreshAvailable = false;
		}
		self.weatherLocation	= data.item(0).Location;
		self.weatherLocationCode = data.item(0).LocationCode;
		saveSetting ( "WeatherLocation" , self.weatherLocation );
		saveSetting ( "WeatherLocationCode" , self.weatherLocationCode );
		}
		else // Service returned 0 items
		{
		if ( data.RetCode == 200 ) 
		{
			self.initializeState ( LOCATION_SENSING_STATE_OK_AUTO , true );
		}
		else if ( data.RetCode == 1506 )
		{
			showOrHideServiceError( true, self.status );
			self.suspendPeriodicRefresh();
			self.beginPollingForServiceExistence();
			setDisplayMode();
			return;
		}
		// else, just continue to fetch data for last location
		}
		
	}


	self.requestUpdate();

 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // processDataAndStatus( data ) - processes data returned by Weather Feed
 //
 ////////////////////////////////////////////////////////////////////////////////
 function processDataAndStatus( data ) 
 {
	MicrosoftGadget.isStaleData = false;
	MicrosoftGadget.dataExpired = false;
	MicrosoftGadget.ageStampText = "";
	MicrosoftGadget.SkyText = "";
	MicrosoftGadget.oMSNWeatherServiceDataAge = calculateAge( new Date() );
	
	if ( data !== undefined ) 
	{ 
		MicrosoftGadget.statusMessage = 'Update Received.';
		MicrosoftGadget.status = data.RetCode;

		MicrosoftGadget.oMSNWeatherServiceTimeStamp = data.Timestamp;

		MicrosoftGadget.oMSNWeatherServiceDataAge = calculateAge( MicrosoftGadget.oMSNWeatherServiceTimeStamp );
		MicrosoftGadget.dataExpired = MicrosoftGadget.oMSNWeatherServiceDataAge.dataExpired;
		MicrosoftGadget.ageStampText = calculateAgeStampText( MicrosoftGadget.oMSNWeatherServiceDataAge );

		if( MicrosoftGadget.status == 1507 )
		{
		MicrosoftGadget.isStaleData = true;
		}
		else
		{
		MicrosoftGadget.isStaleData = false;
		}

		if ( data.Count > 0 && data.item(0) ) 
		{
		MicrosoftGadget.oMSNWeatherService = data.item(0);

		if ( !gTimeStampLastRefreshAvailable ) // First time pull of data (on load / on location change)
		{
			MicrosoftGadget.weatherLocation = MicrosoftGadget.oMSNWeatherService.Location;
			saveSetting("WeatherLocation", MicrosoftGadget.weatherLocation );
		}

		var gmt = GMTTime();

		// Compute SunRise/SunSet times based on latitude/longitude returned by the feed for location
		var theSunRiseSunset = computeSunRiseSunSet( MicrosoftGadget.oMSNWeatherService.Latitude, MicrosoftGadget.oMSNWeatherService.Longitude, 0, gmt.getFullYear(), gmt.getMonth()+1, gmt.getDate()); // Note - using GMT (no TimeZone offset)
		MicrosoftGadget.SunRise = theSunRiseSunset.SunRise;
		MicrosoftGadget.SunSet = theSunRiseSunset.SunSet;
		
		MicrosoftGadget.MoonState = function() 
		{ 
			return computePhaseOfMoon(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()); 
		}
		
		MicrosoftGadget.SkyCode = MicrosoftGadget.oMSNWeatherService.SkyCode;
		MicrosoftGadget.SkyText = MicrosoftGadget.oMSNWeatherService.SkyText;
		if ( !MicrosoftGadget.dataExpired && MicrosoftGadget.isStaleData && MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge > 0 && MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge <= 4 )
		{
			MicrosoftGadget.SkyCode = MicrosoftGadget.oMSNWeatherService.Forecast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).SkyCode;
			MicrosoftGadget.SkyText = MicrosoftGadget.oMSNWeatherService.Forecast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).SkyText;
		}

		gTimeStampLastRefreshAvailable = true;
		}
		else
		{
		// In the case of "No Content", service will return 200 "success", but no data
		if (MicrosoftGadget.status==200) 
		{
			// Actual HTTP Error code for "No Content"
			MicrosoftGadget.status = 204;
		}
		}

		// Gadget is valid if we have a 200 / 1507 retVal
		MicrosoftGadget.isValid = ( MicrosoftGadget.status == 200 || MicrosoftGadget.status == 1507) && !MicrosoftGadget.dataExpired; 

	}
	document.getElementById('AgeStampTextUndockedMode').innerText = MicrosoftGadget.ageStampText;
	if ( MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge > 0 )
	{
		document.getElementById('AgeStampTextDockedMode').innerText = getLocalizedString( 'Forecasted' );
		document.getElementById('AgeStampTextDockedMode').title = MicrosoftGadget.ageStampText;
	}
	else
	{
		document.getElementById('AgeStampTextDockedMode').innerText = MicrosoftGadget.ageStampText;
		document.getElementById('AgeStampTextDockedMode').title = "";
	}
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // onDataReadyHandler( data ) - processes data returned by Weather Feed
 //	(asynchronous callback) 
 //
 ////////////////////////////////////////////////////////////////////////////////
 function onDataReadyHandler( data ) 
 {
	if ( data.RequestPending )
	{
		return;
	}

	processDataAndStatus( data );

	if (self.spinner !== null) 
	{		
		self.spinner.stop();
	}

	showOrHideGettingDataMessage( false );	

	if (self.isValid)
	{
		if ( self.isStaleData )
		{
		self.onUpdate();
		self.suspendPeriodicRefresh();
		self.beginPollingForServiceExistence();
		}
		else
		{
		self.onUpdate();
		}
	} 
	else 
	{
		// When we get in this state, begin a special polling for the service coming
		// back online or otherwise correcting itself
		showOrHideServiceError( true, self.status );
		self.suspendPeriodicRefresh();
		// Only poll for Service Existence if it's available in the market
		if ( self.status != 1506 )
		{
		self.beginPollingForServiceExistence();
		}
		setDisplayMode();
	}

	if ( !self.pollingForServiceExistenceIsRunning )
	{
		self.updateRefreshInterval();
		self.setWeatherUpdateTimer( g_functionToCall , self.refreshInterval);		
	}
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // isDataReadyHandler( data ) - special handler for use when the service is 
 //	down or otherwise unresponsive
 //
 ////////////////////////////////////////////////////////////////////////////////
 function isDataReadyHandler( data ) 
 {
	processDataAndStatus( data );

	if ( MicrosoftGadget.isValid )
	{
		if ( MicrosoftGadget.isStaleData )
		{
		MicrosoftGadget.onUpdate();
		}
		else
		{
		if ( !data.RequestPending )
		{
			self.endPollingForServiceExistence();
			if ( g_locationAPIAvailable )
			{
			self.getWeatherUpdate( false );
			}
			else
			{
			self.requestUpdate();
			}
			self.beginPeriodicRefresh();
		}
		MicrosoftGadget.onUpdate();
		}
	}
	else
	{
		showOrHideServiceError( true, self.status );
		if ( self.status == 1506 )
		{
		MicrosoftGadget.endPollingForServiceExistence();
		}
		setDisplayMode();
	}
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // computeSunRiseSunSet(Latitude, Longitude, TimeZone, Year, Month, Day)
 //	Computes SunRise/SunSet based on Latitude/Longitude
 //
 ////////////////////////////////////////////////////////////////////////////////
 function computeSunRiseSunSet(Latitude, Longitude, TimeZone, Year, Month, Day) 
 {
	// Variable names used: B5, C, C2, C3, CD, D, DR, H, HR, HS, L0, L5, M, MR, MS, N, PI, R1, RD, S1, SC, SD, str
	var retVal = new Object();
	var str = "";
	var PI=Math.PI;
	var DR=PI/180;
	var RD=1/DR;
	var B5=Latitude;
	var L5=Longitude;
	var H =TimeZone;
	// Overriding TimeZone to standardize on UTC
	H = 0; 
	var M =Month;
	var D =Day;
	B5=DR*B5;
	var N=parseInt(275*M/9)-2*parseInt((M+9)/12)+D-30;
	var L0=4.8771+.0172*(N+.5-L5/360);
	var C=.03342*Math.sin(L0+1.345);
	var C2=RD*(Math.atan(Math.tan(L0+C)) - Math.atan(.9175*Math.tan(L0+C))-C);
	var SD=.3978*Math.sin(L0+C);
	var CD=Math.sqrt(1-SD*SD);
	var SC=(SD * Math.sin(B5) + .0145) / (Math.cos(B5) * CD);
	if (Math.abs(SC)<=1) 
	{
		var C3=RD*Math.atan(SC/Math.sqrt(1-SC*SC));
		var R1=6-H-(L5+C2+C3)/15;
		var HR=parseInt(R1);
		var MR=parseInt((R1-HR)*60);
		str = "Sunrise at " + HR + ":" + MR;
		retVal.SunRise = parseTime(HR + ":" + MR);
		var S1=18-H-(L5+C2-C3)/15;
		var HS=parseInt(S1);
		var MS=parseInt((S1-HS)*60);
		retVal.SunSet = parseTime(HS + ":" + MS);
		str += "\nSunset at " + HS + ":" + MS;
	} 
	else 
	{
		if (SC>1) 
		{ 
		str="Sun up all day"; 
		var tDate = new Date(); 
		// Set Sunset to be in the future ...
		retVal.SunSet = new Date( tDate.getFullYear()+1, tDate.getMonth(), tDate.getDay(), tDate.getHours() );
		// Set Sunrise to be in the past ...
		retVal.SunRise = new Date( tDate.getFullYear()-1, tDate.getMonth(), tDate.getDay(), tDate.getHours()-1 );
		}
		if (SC<-1) 
		{ 
		str="Sun down all day"; 
		// Set Sunrise and Sunset to be in the future ...
		retVal.SunRise = new Date( tDate.getFullYear()+1, tDate.getMonth(), tDate.getDay(), tDate.getHours() );
		retVal.SunSet = new Date( tDate.getFullYear()+1, tDate.getMonth(), tDate.getDay(), tDate.getHours() );
		}
	}
	retVal.str = str;
	return retVal;
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // computePhaseOfMoon(Year, Month, Day) - Computes Phase of Moon based on Date
 //
 ////////////////////////////////////////////////////////////////////////////////
 function computePhaseOfMoon(Year, Month, Day) 
 {
	// Variable names used: J, K1, K2, K3, MM, P2, V, YY
	var P2 = 3.14159 * 2;	
	var YY = Year - parseInt((12 - Month)/10);
	var MM = Month + 9;
	if (MM >= 12) { MM = MM-12; }
	var K1 = parseInt(365.25 * (YY+4712));
	var K2 = parseInt(30.6 * MM + .5);
	var K3 = parseInt(parseInt((YY/100) + 49) * .75) - 38;
	// J is the Julian date at 12h UT on day in question
	var J = K1+K2+Day+59;			
	// Adjust for Gregorian calendar, if applicable 
	if (J > 2299160) { J = J-K3; }	
	// Calculate illumination (synodic) phase
	var V = (J - 2451550.1)/29.530588853;
	V = V - parseInt(V);
	// Normalize values to range from 0 to 1
	if (V<0) { V=V+1; }
	// Moon's age in days from New Moon
	var AG = V*29.53;	

	switch (true) 
	{ 
		// Each phase lasts approximately 3.28 days
		case ((AG > 27.6849270496875) || (AG <= 1.8456618033125)) :
		var retVal = 'New';
		break;
		case ((AG > 1.8456618033125) && (AG <= 5.5369854099375)) :
		var retVal = 'Waxing-Crescent';
		break;
		case ((AG > 5.5369854099375) && (AG <= 9.2283090165625)) :
		var retVal = 'First-Quarter';
		break;
		case ((AG > 9.2283090165625) && (AG <= 12.9196326231875)) : 
		var retVal = 'Waxing-Gibbous';
		break;
		case ((AG > 12.9196326231875) && (AG <= 16.6109562298125)) :
		var retVal = 'Full';
		break;
		case ((AG > 16.6109562298125) && (AG <= 20.3022798364375)) :
		var retVal = 'Waning-Gibbous';
		break;
		case ((AG > 20.3022798364375) && (AG <= 23.9936034430625)) :
		var retVal = 'Last-Quarter';
		break;
		case ((AG > 23.9936034430625) && (AG <= 27.6849270496875)) :
		var retVal = 'Waning-Crescent';
		break;
		default : 
		var retVal = 'Full';
		break;
	}	
	return retVal;
 }

 ////////////////////////////////////////////////////////////////////////////////
 //
 // SGN(aNumber) - Returns an integer indicating the sign of a number
 //
 ////////////////////////////////////////////////////////////////////////////////
 function SGN(aNumber) {
	if (aNumber===undefined) { aNumber = 0; } 
	var theNumber = parseFloat(aNumber);
	retVal = 0;
	if ( theNumber != 0 )
	{
		if (theNumber>0)
		{
		retVal = 1;
		}
		else
		{
		retVal = -1;
		}
	}
	return retVal;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // parseTime(string aTime) - takes a string of time in the format HH:MM:SS 
 //	and returns Javascript Date Object 
 //
 ////////////////////////////////////////////////////////////////////////////////
 function parseTime(aTime) 
 {
	var aDateTimeObject = 'none';
	if (aTime!==undefined && aTime.length) 
	{
		aDateTimeObject = GMTTime();
		try 
		{
		var theHour	= parseInt(aTime.split(':')[0]);
		var theMinutes = parseInt(aTime.split(':')[1]);
		aDateTimeObject.setHours(theHour);
		aDateTimeObject.setMinutes(theMinutes);
		}
		catch (ex) 
		{
		}
	}
	return aDateTimeObject;
 }
 ////////////////////////////////////////////////////////////////////////////////
 //
 // GMTTime() - returns time adjusted to GMT (Universal Time)
 //
 ////////////////////////////////////////////////////////////////////////////////
 function GMTTime() 
 { 
	var aDate = new Date();
	var aDateAdjustedToGMTInMS = aDate.getTime() + (aDate.getTimezoneOffset() * 60 * 1000);
	return ( new Date( aDateAdjustedToGMTInMS ) );
 } 
}

// *** END WeatherGadget Object Constructor ***

////////////////////////////////////////////////////////////////////////////////
//
// Routines for Refreshing Display
//
////////////////////////////////////////////////////////////////////////////////

function WeatherStateToDisplay(oWeatherGadget)
{
	var theState = "";
	if (oWeatherGadget.makesSenseToDisplayTheMoon())
	{
		theState = 'moon-' + oWeatherGadget.MoonState();

		// if we are displaying the moon, the only weather patterns
		// are "sun" or "partly-cloudy". we don't show the sun and the moon
		// at the same time (we don't support an eclipse), but we do show
		// light clouds over the moon.
		if (oWeatherGadget.WeatherState() == 'partly-cloudy')
		{
			theState = theState + '_partly-cloudy';
		}
	}
	else
	{
		theState = oWeatherGadget.WeatherState();
	}
	return theState;
}

function GetBackgroundImageFileName(oWeatherGadget)
{  
	var path = 'url(images/' + activeDisplayMode();
	if (oWeatherGadget.SkyCode != 44)
	{
		path = path + '_' + oWeatherGadget.backdrop() + '_' + WeatherStateToDisplay(oWeatherGadget) + '.png)';
	}
	else
	{
		path = path + '-loading.png)';
	}
	return path;
}


////////////////////////////////////////////////////////////////////////////////
//
// setDisplayMode() - resets gadget size and background based on current host
//
////////////////////////////////////////////////////////////////////////////////
function setDisplayMode( ) 
{
 showOrHide('DockedModeDisplayArea',false);
 showOrHide('UnDockedModeDisplayArea',false);

 var theWidth = gDisplaySizeUnDocked.width;
 var theHeight = gDisplaySizeUnDocked.height;
 var theActiveDisplayArea = 'DisplayArea' + gDefaultDisplayMode;

 switch ( activeDisplayMode() ) 
 {
	case "undocked" :
		theActiveDisplayArea = 'UnDockedModeDisplayArea';
		theWidth = gDisplaySizeUnDocked.width;
		theHeight = gDisplaySizeUnDocked.height;
		document.getElementById('PlaceHrefUnDockedMode').tabIndex = 1;
		document.getElementById('DayOfWeek1').tabIndex = 5;
		document.getElementById('DayOfWeek2').tabIndex = 5;
		document.getElementById('DayOfWeek3').tabIndex = 5;
		document.getElementById('UnDockedModeDisplayArea').className = MicrosoftGadget.backdrop(); 
		refreshUnDockedModeValues( MicrosoftGadget );
		if(MicrosoftGadget.isStaleData)
		{
		document.getElementById("AgeStampTextUndockedMode").style.visibility = "visible";
		}
		else
		{
		document.getElementById("AgeStampTextUndockedMode").style.visibility = "hidden";
		}
		break;

	case "docked" : default : 
		theActiveDisplayArea = 'DockedModeDisplayArea';
		theWidth = gDisplaySizeDocked.width;
		theHeight = gDisplaySizeDocked.height;
		document.getElementById('PlaceHrefDockedMode').tabIndex = 1;
		document.getElementById('DockedModeDisplayArea').className = MicrosoftGadget.backdrop(); 
		refreshDockedModeValues( MicrosoftGadget );
		if(MicrosoftGadget.isStaleData)
		{
		document.getElementById("AgeStampTextDockedMode").style.visibility = "visible";
		}
		else
		{
		document.getElementById("AgeStampTextDockedMode").style.visibility = "hidden";
		}
		break;
 }
 
 document.body.style.width = theWidth;
 document.body.style.height = theHeight;

 // Only show the data layers if we have data
 showOrHide(theActiveDisplayArea, MicrosoftGadget.isValid); 
 
 if (!MicrosoftGadget.isValid) 
 {
	showOrHide('WeatherMessage', true);
 }
 else
 {
 	setBackground( GetBackgroundImageFileName(MicrosoftGadget));
 }
}



////////////////////////////////////////////////////////////////////////////////
//
// refreshEverything() - update display for all modes with active data
//
////////////////////////////////////////////////////////////////////////////////
function refreshEverything() 
{ 
 refreshDockedModeValues( this );
 refreshUnDockedModeValues( this );
 setDisplayMode();
}
////////////////////////////////////////////////////////////////////////////////
//
// refreshDockedModeValues() - Refreshes display of Docked window
//
////////////////////////////////////////////////////////////////////////////////
function refreshDockedModeValues( oWeatherGadget ) 
{
 if ( !oWeatherGadget.isValid )
 { 
	// Since the weather service can become invalidated at any time (not necessarily
	// onRefreshSettings), we must manually set isValid to false if the service 
	// becomes undefined
	showOrHideServiceError(true, oWeatherGadget.status);
	return; 
 }
 if ( oWeatherGadget.oMSNWeatherService===undefined )
 { 
	// NO data to display.
	return; 
 }

 showOrHideServiceError(false);
 document.getElementById('PlaceHrefDockedMode').href = cleanURL( oWeatherGadget.oMSNWeatherService.Url );
 document.getElementById('PlaceHrefDockedMode').innerText = oWeatherGadget.oMSNWeatherService.Location;

 var theAltText;
 if ( MicrosoftGadget.isStaleData )
 {
	theAltText = getLocalizedString( 'ServiceNotAvailable' );
 }
 else
 {
	theAltText = oWeatherGadget.SkyText;	
 }

 // only need to update the background image (which is shared) if we are docked
 if (activeDisplayMode() == "docked")
 {
	setBackground( GetBackgroundImageFileName(oWeatherGadget));
 }
 
 if ( oWeatherGadget.makesSenseToDisplayTheMoon() ) 
 {

	// For NightTime Weather states, show additional Moon Phase tooltip
	if ( !MicrosoftGadget.isStaleData )
	{
		theAltText += " - " + getLocalizedString( 'Night-' + oWeatherGadget.MoonState());
	}
 } 
 else 
 {
	showOrHide('DropShadowDockedMode', false);
 }
 
  document.getElementById('DockedModeAccessibilityInformation').alt = theAltText;

 
 if ( MicrosoftGadget.dataExpired || !MicrosoftGadget.isStaleData || MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge == 0 )
 {
	if ( oWeatherGadget.oMSNWeatherService.Temperature && oWeatherGadget.oMSNWeatherService.Temperature != "" ) 
	{
		document.getElementById('TemperatureCurrent').innerText = TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.Temperature ) + "°";
	} 
	else
	{
		// In the unlikely event data is “Not Available”, do not display a temperature
		document.getElementById('TemperatureCurrent').innerText = " - ";
	}
 }
 else
 {
	if ( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge) )
	{
		var highPresent = false;
		if ( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).High && oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).High != "" )
		{
		document.getElementById('TemperatureCurrent').innerText = TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).High ) + "°";
		highPresent = true;
		}
		if ( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).Low && oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).Low != "" )
		{
		if ( highPresent )
		{
			document.getElementById('TemperatureCurrent').innerText = document.getElementById('TemperatureCurrent').innerText + " - ";
		}
		else
		{
			document.getElementById('TemperatureCurrent').innerText = "";
		}

		document.getElementById('TemperatureCurrent').innerText = document.getElementById('TemperatureCurrent').innerText + TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).Low ) + "°";
		}
		else
		{
		if ( !highPresent )
		{
			document.getElementById('TemperatureCurrent').innerText = " - ";
		}
		}
	} 
	else
	{
		// In the unlikely event data is “Not Available”, do not display a temperature
		document.getElementById('TemperatureCurrent').innerText = " - ";
	}
 }
 
}
////////////////////////////////////////////////////////////////////////////////
//
// cleanURL( sUrl ) - Verifies that the URL starts with http://
//
////////////////////////////////////////////////////////////////////////////////
function cleanURL( sURL )
{
	var safeUrl = "javascript:void();";
	var httpIndex = sURL.search( "http://" );

	if ( httpIndex != 0 )
	{
		return safeUrl;
	}
	return window.toStaticHTML(sURL);		
}
////////////////////////////////////////////////////////////////////////////////
//
// refreshUnDockedModeValues( oWeatherGadget ) - Refreshes UnDocked window
//
////////////////////////////////////////////////////////////////////////////////
function refreshUnDockedModeValues( oWeatherGadget ) 
{
 if ( !oWeatherGadget.isValid )
 { 
	showOrHideServiceError(true, oWeatherGadget.status);
	return; 
 }
 if ( oWeatherGadget.oMSNWeatherService===undefined )
 { 
	// NO data to display.
	return; 
 }

 showOrHideServiceError(false);
 document.getElementById('Attribution').innerText = oWeatherGadget.oMSNWeatherService.Attribution2;

 // Update Today's Forecast Temperatures
 document.getElementById('PlaceHrefUnDockedMode').href = cleanURL( oWeatherGadget.oMSNWeatherService.Url );
 document.getElementById('PlaceHrefUnDockedMode').innerText = oWeatherGadget.oMSNWeatherService.Location;
 document.getElementById('ConditionCurrentUnDockedMode').innerText = oWeatherGadget.SkyText;
 document.getElementById('TemperatureSeparator').innerText = '-';

 if ( MicrosoftGadget.dataExpired || !MicrosoftGadget.isStaleData || MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge == 0 )
 {
	document.getElementById('TemperatureHigh0').innerText = oWeatherGadget.HighTemp() + "°";
	document.getElementById('TemperatureLow0').innerText = TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.ForeCast(0).Low ) + "°";
 }
 else
 {
	document.getElementById('TemperatureHigh0').innerText = TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).High ) + "°";
	document.getElementById('TemperatureLow0').innerText = TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.ForeCast(MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge).Low ) + "°";
 }

 var theAltText;
 if ( MicrosoftGadget.isStaleData )
 {
	theAltText = getLocalizedString( 'ServiceNotAvailable' );
 }
 else
 {
	theAltText = oWeatherGadget.SkyText;	
 }

 // only need to update the background image (which is shared) if we are undocked
 if (activeDisplayMode() == "undocked")
 {
	setBackground( GetBackgroundImageFileName(oWeatherGadget));
 }

 if ( oWeatherGadget.makesSenseToDisplayTheMoon() ) 
 {
	// For NightTime Weather states, show additional Moon Phase tooltip
	if ( !MicrosoftGadget.isStaleData )
	{
		theAltText += " - " + getLocalizedString( 'Night-' + oWeatherGadget.MoonState());
	}
 } 

 if ( !MicrosoftGadget.isStaleData || MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge == 0 )
 {
	if ( oWeatherGadget.oMSNWeatherService.Temperature && oWeatherGadget.oMSNWeatherService.Temperature != "" ) 
	{
		document.getElementById('TemperatureCurrentUnDockedMode').innerText = TemperatureInSelectedUnit( oWeatherGadget.oMSNWeatherService.Temperature ) + "°";
	} 
	else
	{
		// In the unlikely event data is “Not Available”, do not display a temperature
		document.getElementById('TemperatureCurrentUnDockedMode').innerText = " - ";
	}
 }
 else
 {
	document.getElementById('TemperatureCurrentUnDockedMode').innerText = "";
 }

 document.getElementById('UnDockedModeAccessibilityInformation').alt = theAltText;
 
 for (var i=1;i<4;i++) 
 {
	var counterI;
	if ( !MicrosoftGadget.dataExpired && MicrosoftGadget.isStaleData && MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge > 0 )
	{
		counterI = MicrosoftGadget.oMSNWeatherServiceDataAge.daysAge + i;
	}
	else
	{
		counterI = i;
	}
	if ( counterI < 5 )
	{
		with ( oWeatherGadget.oMSNWeatherService.Forecast( counterI ) )
		{
		var theDate = parseDateFromString(Date);
		var theLowTemp = TemperatureInSelectedUnit( Low );
		var theHighTemp = TemperatureInSelectedUnit( High );
		// Code from 1 to 47 indicating Weather State (used to compute Icon to display)
		var theSkyCode = SkyCode;
		
		document.getElementById('SkyCodeImage'+ i).alt = SkyText; 
		setImage( 'SkyCodeImage'+ i, 'images/' + theSkyCode + '.png');
		document.getElementById('DayOfWeek' + i).innerText = Day; 
		document.getElementById('DayOfWeek' + i).href = cleanURL( oWeatherGadget.oMSNWeatherService.Url );
		document.getElementById('TemperatureHigh' + i).innerText = theHighTemp + "°";
		document.getElementById('TemperatureLow' + i).innerText = theLowTemp + "°";
		}
	}
	else
	{
		document.getElementById('SkyCodeImage'+ i).alt = ""; 
		setImage( 'SkyCodeImage'+ i, 'images/1px.gif');
		document.getElementById('DayOfWeek' + i).innerText = ""; 
		document.getElementById('DayOfWeek' + i).href = "javascript:void(0);";
		document.getElementById('TemperatureHigh' + i).innerText = "";
		document.getElementById('TemperatureLow' + i).innerText = "";
	}
 }
}
////////////////////////////////////////////////////////////////////////////////
//
// activeDisplayMode() - returns active display mode
//
////////////////////////////////////////////////////////////////////////////////
function activeDisplayMode() 
{
 retVal = gDefaultDisplayMode;

 if (gGadgetMode) 
 {
	if (System.Gadget.docked) 
	{
		retVal = "docked";
	} 
	else 
	{
		retVal = "undocked";	
	}
 } 
 return retVal;
}
////////////////////////////////////////////////////////////////////////////////
//
// parseDateFromString(string aString) - parses Date from a string extracted 
// from MSN Weather Feed. Returns a Date Object set to that time.
//
////////////////////////////////////////////////////////////////////////////////
function parseDateFromString(aString) 
{
 if (aString.length) {					
	// String received should be formatted like: "2006-01-10" (yyyy-mm-dd)
	var aDateTimeObject = new Date();
	aDateTimeObject.setFullYear(parseInt(aString.split('-')[0]));
	aDateTimeObject.setMonth(parseInt(aString.split('-')[1])-1);
	aDateTimeObject.setDate(parseInt(aString.split('-')[2]));
	return aDateTimeObject;
 }
}
////////////////////////////////////////////////////////////////////////////////
//
// showOrHideGettingDataMessage() - Display/Hide "Getting Data" Message 
//
////////////////////////////////////////////////////////////////////////////////
function showOrHideGettingDataMessage(bShow) 
{
 showOrHide('WeatherMessage', bShow);
 showOrHide('PleaseWaitLoadingSpinner', bShow);
 showOrHide(activeDisplayMode() + 'ModeDisplayArea', !bShow);

 var oMessage = document.getElementById('message');
 if (bShow) 
 { 
	if (activeDisplayMode()=="undocked")
	{
		document.getElementById("WeatherMessage").className = 'unDockedWeatherMessage';
	}
	else
	{
		document.getElementById("WeatherMessage").className = 'dockedWeatherMessage';
	}
	oMessage.innerHTML = getLocalizedString('GettingData');
	if (activeDisplayMode()=='docked')
	{
		setBackground( 'url(images/docked-loading.png)' );
	}
	else
	{
		setBackground( 'url(images/undocked-loading.png)' );
	}
 } 
 else 
 {
	oMessage.innerHTML = "";
 }
 showOrHide( document.getElementById('WeatherMessageIcon'), false );
}


////////////////////////////////////////////////////////////////////////////////
//
// showOrHideGettingLocationMessage() - Display/Hide "Getting current location" Message 
//
////////////////////////////////////////////////////////////////////////////////
function showOrHideGettingLocationMessage(bShow) 
{
 showOrHide('WeatherMessage', bShow);
 showOrHide('PleaseWaitLoadingSpinner', bShow);
 showOrHide(activeDisplayMode() + 'ModeDisplayArea', !bShow);

 var oMessage = document.getElementById('message');
 if (bShow) 
 { 
	if (activeDisplayMode()=="undocked")
	{
		document.getElementById("WeatherMessage").className = 'unDockedWeatherMessage';
	}
	else
	{
		document.getElementById("WeatherMessage").className = 'dockedWeatherMessage';
	}
	oMessage.innerHTML = getLocalizedString('GettingLocation');
	if (activeDisplayMode()=='docked')
	{
		setBackground( 'url(images/docked-loading.png)' );
	}
	else
	{
		setBackground( 'url(images/undocked-loading.png)' );
	}
 } 
 else 
 {
	oMessage.innerHTML = "";
 }
 showOrHide( document.getElementById('WeatherMessageIcon'), false );
}

////////////////////////////////////////////////////////////////////////////////
//
// showOrHideServiceError() - Display/Hide "Service Not Available" Message 
//
////////////////////////////////////////////////////////////////////////////////
function showOrHideServiceError(bShow, theStatusCode) 
{
 var theImage = "";
 var theMessage = "";
 showOrHide('WeatherMessage', bShow);
 showOrHide('PleaseWaitLoadingSpinner', false);
 var oMessage	= document.getElementById('message');
 if (bShow) 
 {
	if (activeDisplayMode()=="undocked")
	{
		document.getElementById("WeatherMessage").className = 'unDockedWeatherMessage';
	}
	else
	{
		document.getElementById("WeatherMessage").className = 'dockedWeatherMessage';
	}
	switch( theStatusCode ) 
	{
		case 1506: 
		// Forbidden
		if (activeDisplayMode()=="undocked") {
			theMessage = getLocalizedString( 'ServiceNotAvailableInYourArea' );
		} else {
			theMessage = getLocalizedString( 'ServiceNotAvailableInYourArea' );
		}
		document.getElementById('WeatherMessageIcon').alt = getLocalizedString( 'ServiceNotAvailableInYourArea' );
		oMessage.title = getLocalizedString( 'ServiceNotAvailableInYourArea' );
		break;
		
		
		case 404: default: 
		// Not Found
		theMessage = getLocalizedString( 'ServiceNotAvailable' );
		document.getElementById('WeatherMessageIcon').alt = getLocalizedString( 'ServiceNotAvailable' );
		break;
	}
	if (activeDisplayMode()=='docked')
	{
		setBackground( 'url(images/docked-loading.png)' );
	}
	else
	{
		setBackground( 'url(images/undocked-loading.png)' );
	}
 }
 showOrHide( document.getElementById('WeatherMessageIcon'), true );
 oMessage.innerHTML = '<span>' + theMessage + '<\/span>';
}
////////////////////////////////////////////////////////////////////////////////
//
// setBackground ( string theImageURL ) - sets the background image of our gadget
//
////////////////////////////////////////////////////////////////////////////////
function setBackground( theImageURL ) 
{
 // if you switch backgrounds on the fly, you must set the style size to zero
 // so it dynamically refreshes
 WeatherBG.style.width = 0;
 WeatherBG.style.height = 0;
 WeatherBG.src = theImageURL;
}

function calculateAge ( timestamp )
{
 var timestampDay = new Date( timestamp );
 var currentDay = new Date();
 
 var millisecondsTillTimestamp = Date.parse( timestamp );
 var millisecondsTillNow = (new Date()).getTime();
 var minutesDifference = parseInt( ( millisecondsTillNow - millisecondsTillTimestamp ) / ( 60 * 1000 ) );
 var hoursDifference = parseInt ( minutesDifference / 60 );
 var daysDifference = parseInt ( hoursDifference / 24 );
 
 this.minutesAge = 0;
 this.hoursAge = 0;
 this.daysAge = 0;
 this.dataExpired = false;
 
 if ( minutesDifference <= 0 )
 {
	return this;
 }

// shows hours and mins only for the same day
 if ( timestampDay.getDate() == currentDay.getDate()
	&& timestampDay.getMonth() == currentDay.getMonth()
	&& timestampDay.getFullYear() == currentDay.getFullYear() )
 {
	this.minutesAge = minutesDifference % 60;
	this.hoursAge = hoursDifference % 24;
	this.daysAge = daysDifference;
 }
 else // only calculate total no of days past
 {
	timestampDay.setHours(currentDay.getHours(),currentDay.getMinutes(),currentDay.getSeconds(),currentDay.getMilliseconds());
	this.daysAge = parseInt ( ( currentDay.getTime() - timestampDay.getTime() ) / ( 60 * 1000 * 60 * 24 ) );
	if ( this.daysAge < 0 )
	{
		this.daysAge = 0;
	}
 }

 if ( this.daysAge > 4 )
 {
	this.dataExpired = true;
 }
 
 return this;
}

function calculateAgeStampText( age )
{
 var isForecastedData = false;
 var ageStampText = "";
 var unitText = "";
 var durationText = "";

 if ( age.dataExpired )
 {
	return getLocalizedString('DataExpired');
 }

 if ( age.daysAge > 0 )
 {
	isForecastedData = true;
	durationText = getLocalizedString('day');
	if ( age.daysAge > 1 )
	{
		durationText = getLocalizedString('days');
	}
	unitText = age.daysAge;
 }
 else if ( age.hoursAge > 0 )
 {
	durationText = getLocalizedString('hr');
	if ( age.hoursAge > 1 )
	{
		durationText = getLocalizedString('hrs');
	}
	unitText = age.hoursAge;
 }
 else
 {
	if ( age.minutesAge == 0 )
	{
		return "";
	}
	else
	{
		durationText = getLocalizedString('min');
		unitText = age.minutesAge;
	}
 }
 
 if( isForecastedData )
 {
		ageStampText = getLocalizedString('ageStampMessageForecastedData')
		ageStampText = ageStampText.replace("%1", unitText);
		ageStampText = ageStampText.replace("%2", durationText);
 }
 else
 {
		ageStampText = getLocalizedString('ageStampMessage')
		ageStampText = ageStampText.replace("%1", unitText);
		ageStampText = ageStampText.replace("%2", durationText);
 }

 return ageStampText;
}
