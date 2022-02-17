'use strict'
BrowserName = {
	Chrome : "chrome",
	Safari : "safari",
	IE:"ie",
	Firefox:"firefox",
	Opera:"opera"
}
OSName = {
	Windows:"windows",
	MacOS:"macos",
	iPhone:"iPhone",
	iPad:"iPad",
	iPod:"iPod",
	Android:"android"
}
window.console =  if window.console? then window.console else {log:()->}
if !Array.prototype.indexOf?
	Array.prototype.indexOf = (elm)->
		for val,i in @
			if val is elm
				return i
		return -1
###*
*UAやOSの判定用
*@class Application
*@namespace jp.contents.util.Application
###
class Application
	@_init:->
		ua = navigator.userAgent.toUpperCase()
		isMobile = false
		isIOS    = false
		isKA	 = false
		if ua.indexOf("CHROME") > -1
			bName = BrowserName.Chrome
			ua.match(/CHROME\/(\d+(\.\d+)+)/ig);
			bVer = RegExp.$1
		else if ua.indexOf("SAFARI") > -1
			bName = BrowserName.Safari
			ua.match(/VERSION\/(\d+(\.\d+)+)/ig)
			bVer = RegExp.$1
		else if ua.indexOf("FIREFOX") > -1
			bName = BrowserName.Firefox
			ua.match(/FIREFOX\/(\d+(\.\d+)+)/i)
			bVer = RegExp.$1
		else if ua.indexOf("MSIE") > -1
			bName = BrowserName.IE
			ua.match(/MSIE (\d+(\.\d+)+)/i)
			bVer = RegExp.$1
		else if ua.indexOf("TRIDENT") > -1
			bName = BrowserName.IE
			ua.match(/RV:(\d+(\.\d+)+)/i)
			bVer = RegExp.$1
		else if ua.indexOf("OPERA") > -1
			bName = BrowserName.Opera
			ua.match(/OPERA\/(\d+(\.\d+)+)/i)
			bVer = RegExp.$1
		Application._browserName = bName
		Application._browserVersion = bVer

		if ua.indexOf("ANDROID") > -1
			ua.match(/ANDROID (\d+\.\d+)/i)
			osVar = (RegExp.$1.replace(/\./g, '') + '00').slice(0, 3)
			osVar = Number(osVar)
			osName = OSName.Android
			isMobile = true
			if osVar < 400
				isKA = true
		else if ua.indexOf("IPHONE") > -1
			ua.match(/IPHONE OS (\w+){1,3}/g)
			osVar = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3)
			osVar = Number(osVar)
			osName = OSName.iPhone
			isMobile = true
			isIOS = true
		else if ua.indexOf("IPOD") > -1
			ua.match(/IPOD OS (\w+){1,3}/g)
			osVar = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3)
			osVar = Number(osVar)
			osName = OSName.iPod
			isMobile = true
			isIOS = true
		else if ua.indexOf("IPAD") > -1
			ua.match(/IPAD OS (\w+){1,3}/g)
			osVar = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3)
			osVar = Number(osVar)
			osName = OSName.iPad
			isMobile = true
			isIOS = true
		else if ua.indexOf("MAC OS X") > -1
			ua.match(/MAC OS X (\d+[\._]\d+)|(\d+_\d+)/g)
			osVar = (RegExp.$1.replace(/\.|_/g, '') + '00').slice(0, 3)
			osVar = Number(osVar)
			osName = OSName.MacOS
		else
			osName = OSName.Windows

		Application._osName = osName
		Application._osVersion = osVar
		Application._isMobile = isMobile
		Application._isiOS = isIOS
		Application._isKAnd = isKA
		Application._browserInfo = {name:Application._browserName,version:parseFloat(Application._browserVersion)}
		Application._osInfo = {name:Application._osName,version:Application._osVersion}
	###*
	*ブラウザ情報の取得
	*@return {Object} object 
	*@static
	###
	@getBrowserInfo:->
		if !Application._browserInfo
			Application._init()
		return Application._browserInfo
	###*
	*OS情報の取得
	*@return Object
	*@static
	###
	@getOSInfo:->
		if !Application._browserInfo
			Application._init()
		return Application._osInfo
	###*
	*スマートフォンかどうかの判定
	*@return {Boolean}
	*@static
	###
	@isMobile:->
		if !Application._browserInfo
			Application._init()
		return Application._isMobile
	###*
	*Android4以下の判定
	*@return {Boolean}
	*@static
	###
	@isKAndroid:->
		if !Application._browserInfo
			Application._init()
		return Application._isKAnd
	###*
	*iOSの判定
	*@return {Boolean}
	*@static
	###
	@isiOS:->
		if !Application._browserInfo
			Application._init()
		return Application._isiOS
	###*
	*IE8の判定
	*@return {Boolean}
	*@static
	###
	@isFIE:->
		if !Application._browserInfo
			Application._init()
		
		if Application._browserInfo.name is "ie" and Application._browserInfo.version < 9
			return true
		else
			return false
	###*
	*IE6の判定
	*@return {Boolean}
	*@static
	###
	@isIE6:->
		if !Application._browserInfo
			Application._init()
		
		if Application._browserInfo.name is "ie" and Application._browserInfo.version < 7
			return true
		else
			return false
	###*
	*CSS3Dが使用可能かどうか
	*@return {Boolean}
	*@static
	###
	@isCSS3DEnable:->
		if !Application._browserInfo
			Application._init()
		if Application._browserInfo.name is "ie" and Application._browserInfo.version < 10
			return false
		else
			return true
	@getScrollTarget:->
		return if window.webkitRequestAnimationFrame is undefined  then document.documentElement else document.body
class Delegate
	@create:(delegate,owner,params)->
		return ->
			delegate.apply(owner,if params? then params else [])
			
window.jp = window.jp || {}
window.jp.contents = window.jp.contents || {}
window.jp.contents.util = window.jp.contents.util || {};
window.jp.contents.util.Delegate = Delegate;
window.jp.contents.util.Application = Application;