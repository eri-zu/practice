'use strict'
CSS3Easing = jp.contents.easing.CSS3Easing
Linear     = jp.contents.easing.Linear

# APP_OS = App.os()
# APP_BROWSER = App.browser()
# isIOS = APP_OS.name is "IPHONE" or APP_OS.name is "IPAD" or APP_OS.name is "IPOD";
APP_OS = Application.getOSInfo()
APP_BROWSER = Application.getBrowserInfo()
isIOS = Application.isiOS()
isFIE = if APP_BROWSER.name is BrowserName.IE and parseFloat(APP_BROWSER.version) < 9 then true else false

reqDelegate = (callback, element)->
  				return window.setTimeout(callback, 1000 / 60) 

requestAnimationFrame = (()->
	return 	window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			reqDelegate
)()

cancelAnimationFrame = (()->
    return 	window.cancelAnimationFrame ||
    		window.webkitCancelRequestAnimationFrame ||
    		window.mozCancelRequestAnimationFrame ||
    		window.oCancelRequestAnimationFrame ||
    		window.msCancelRequestAnimationFrame ||
    		window.clearTimeout;
)()
EMULATE_RAF = false
if requestAnimationFrame is reqDelegate
	EMULATE_RAF = true
# currentTime = null
# if Date.now isnt undefined
# 	currentTime = ->
# 		return Date.now()
# else
# 	currentTime = ->
# 		return new Date().getTime()

class VenderInfo
	@cssVender = ""
	@vender = ""
	@animationEnd = ""
	@transformName = ""
	@_init:->
		dummyStyle = document.createElement('div').style
		venders = 'webkitT,MozT,msT,OT,t'.split(',')
		for val in venders
			if dummyStyle[val+'ransform'] isnt undefined
				VenderInfo.vender = val.substr(0, val.length - 1)
				VenderInfo.transformName = val + 'ransform'
				VenderInfo.animationEnd = VenderInfo.vender + "AnimationEnd"
				break
		if VenderInfo.vender isnt ""
			VenderInfo.cssVender = '-' + VenderInfo.vender.toLowerCase() + '-'
		else
			VenderInfo.cssVender = "transform"
		if VenderInfo.vender is "Moz"
			VenderInfo.animationEnd = "animationend"
		else if VenderInfo.vender is "webkit"
			VenderInfo.animationEnd = "webkitAnimationEnd"
		else if VenderInfo.vender is "ms"
			VenderInfo.animationEnd = "MSAnimationEnd"
		return

VenderInfo._init()

objectMerge = ->
	args = Array.prototype.slice.call(arguments)
	len = args.length
	r = {}
	for val,i in args
		for name of val
			if val.hasOwnProperty(name)
				r[name] = val[name]
	return r

TweenState = {
	Initialized:5,
	Playing:1,
	Completed:2,
	Stoped:3,
	Finalized:4,
	Overwrited:5
}

