////////////////////////////////////////////////////////////////////////////////
//
// THIS CODE IS NOT APPROVED FOR USE IN/ON ANY OTHER UI ELEMENT OR PRODUCT COMPONENT.
// Copyright (c) 2009 Microsoft Corporation. All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/*
* SWAP OUT AN IMAGE WITH A LARGER RESOLUTION VERSION OF THE SAME IMAGE WHEN
* DPI SETTING IS SUBSTANTIALLY LARGE TO IMPACT CLARITY OF THE SCALED UP IMAGE.
* 
* IMP:: IMAGE SWAPPED OUT MUST HAVE EXPLICIT WIDTH/HEIGHT SPECIFIED
*/

var dpiScaleFactor = screen.deviceXDPI / screen.logicalXDPI; // calculates the horizontal scale factor that Internet Explorer is applying
var dpiImageFolderPrefix = "";

if ( dpiScaleFactor >= 1.5 )
{
	dpiImageFolderPrefix = "144DPI\\(144DPI)";
}
else if ( dpiScaleFactor >= 1.25 )
{
	dpiImageFolderPrefix = "120DPI\\(120DPI)";
}
