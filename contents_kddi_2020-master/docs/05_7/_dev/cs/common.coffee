'use strict'
class common
	constructor:()->

	#ブラウザの横幅取得
	getBrowserWidth:() ->
		# if ( window.innerWidth )
		# 	return window.innerWidth
		# else if ( document.documentElement && document.documentElement.clientWidth isnt 0 )
		# 	return document.documentElement.clientWidth
		# else if ( document.body )
		# 	return document.body.clientWidth

		# return 0
		return document.body.clientWidth
	#ブラウザの縦幅取得
	getBrowserHeight:() ->
		if ( window.innerHeight )
			return window.innerHeight
		else if ( document.documentElement && document.documentElement.clientHeight isnt 0 )
			return document.documentElement.clientHeight
		else if ( document.body )
			return document.body.clientHeight

		return 0
	#コンテンツ全体の高さを取得
	getContentHeight:()->
		h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight])
		return h
	#スクロールの位置を取得
	getScrollPosY:()->
		dElm = document.documentElement
		dBody = document.body
		pos = dElm.scrollTop or dBody.scrollTop
		return pos
	#ユーザーエージェント判定
	getUA:()->
		uaparam = {
		'iOS': false,
		'iPhone': false,
		'iPad': false,
		'Android': false,
		'IE6' : false,
		'IE7' : false,
		'IE8' : false,
		'IE8m' : false,
		'IE9' : false,
		'IE9m' : false,
		'IE10' : false,
		'IE11' : false,
		'IE' : false,
		'Firefox' : false,
		'Safari' : false,
		'Chrome' : false
		}
		ua = navigator.userAgent
		if(ua.indexOf('iPhone') >= 0)
			uaparam.iOS = true
			uaparam.iPhone = true
		else if(ua.indexOf('iPad') >= 0)
			uaparam.iOS = true
			uaparam.iPad = true
		else if(ua.indexOf('Android') >= 0)
			uaparam.Android = true
		else if(ua.match(/MSIE/) or ua.match(/Trident/))
			uaparam.IE = true
			version = ua.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3]
			if(version is '6.0')
				uaparam.IE6 = true
				uaparam.IE8m = true
				uaparam.IE9m = true
			else if(version is '7.0')
				uaparam.IE7 = true
				uaparam.IE8m = true
				uaparam.IE9m = true
			else if(version is '8.0')
				uaparam.IE8 = true
				uaparam.IE8m = true
				uaparam.IE9m = true
			else if(version is '9.0')
				uaparam.IE9 = true
				uaparam.IE9m = true
			else if(version is '10.0')
				uaparam.IE10 = true
			else
				uaparam.IE11 = true
		else if(ua.indexOf('Firefox') >= 0)
			uaparam.Firefox = true
		else if(ua.indexOf('Chrome') >= 0)
			uaparam.Chrome = true
		else if(ua.indexOf('Safari') >= 0)
			uaparam.Safari = true

		return uaparam

	#デバイス判定#
	getDevice:()->
		userAgent = window.navigator.userAgent.toLowerCase()
		if((navigator.userAgent.indexOf('Android') > 0 and navigator.userAgent.indexOf('Mobile') is -1) or navigator.userAgent.indexOf('A1_07') > 0 or navigator.userAgent.indexOf('SC-01C') > 0 or navigator.userAgent.indexOf('iPad') > 0)
			#タブレット
			return 'tb'
		else if ((navigator.userAgent.indexOf('iPhone') > 0 and navigator.userAgent.indexOf('iPad') is -1) or navigator.userAgent.indexOf('iPod') > 0 or (navigator.userAgent.indexOf('Android') > 0 and navigator.userAgent.indexOf('Mobile') > 0))
			#スマホ
			return 'sp'
		else
			#PC
			return 'pc'

	#html,body判定#
	getHB:()->
		ua = navigator.userAgent
		if ua.indexOf('OPR') != -1 || ua.indexOf('Edge') != -1
			scrollTag = 'body'
		else
			scrollTag = !window.chrome && 'WebkitAppearance' in document.documentElement.style ? 'body' : 'html'
		return scrollTag

c = new common()
window.Common = c


class util
	constructor:()->
		return
	addClass:(element, className)->
		if (!element or !className)
			return

		classString = element.className
		nameIndex = classString.indexOf(className)
		classString += ' ' + className
		element.className = classString
		return

	removeClass:(element, className)->
		if (!element or !className)
			return

		classString = element.className
		nameIndex = classString.indexOf(className)
		if(nameIndex is -1)
			return false

		classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length)
		element.className = classString
		return
u = new util()
window.Util = u

#----------------------------------------------#
#easing
#----------------------------------------------#
easing = new()->

	@linear = (t, b, c, d)->
			return c*t/d + b

	@easeIn = (t, b, c, d)->
			t /= d
			return c*t*t*t*t + b

	@easeInOut = (t, b, c, d)->
			t /= d/2.0
			if(t < 1)
				return c/2.0*t*t*t*t + b

			t = t - 2
			return -c/2.0 * (t*t*t*t - 2) + b

	@easeInQuartic = (t, b, c, d)->
		t /= d
		return c*t*t*t*t + b

	@easeInExponential = (t, b, c, d)->
		return c * 2**(10*(t/d - 1)) + b

	@easeInCircular = (t, b, c, d)->
		t /= d
		return -c * (Math.sqrt(1 - t*t) - 1) + b

	@easeInCubic = (t, b, c, d)->
		t /= d
		return c*t*t*t + b

	@easeInOrigin = (t, b, c, d)->
		t /= d
		return -c * (Math.sqrt(1 - t) - 1) + b


	@easeInOutCircular = (t, b, c, d)->
		t /= d/2.0
		if(t < 1)
			return -c/2.0 * (Math.sqrt(1 - t*t) - 1)
		t = t - 2
		return c/2.0 * (Math.sqrt(1 - t*t) + 1) + b

	@easeInOutSinusoidal = (t, b, c, d)->
		return -c/2.0 * (Math.cos(Math.PI*t/d) - 1) + b

	@easeInOutBack = (t, b, c, d)->
		s = 1.70158
		if ((t/=d/2) < 1)
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b

	return
#----------------------------------------------#
#autoHeight
#----------------------------------------------#
autoHeight = (options) ->
	op = $.extend({
		target:null,
		column: 0,
		clear: 0,
		height: 'minHeight',
		reset: '',
		descend: (a,b)->
			return b-a
	}, options or {})
	self = op.target
	n = 0
	hMax = null
	hList = []
	hListLine = []
	hListLine[n] = 0
	self.each (i) ->
		if(op.reset is 'reset')
			$(this).removeAttr 'style'
		h = $(this).height()
		hList[i] = h
		if(op.column > 1)
			if(h > hListLine[n])
				hListLine[n] = h
			if(i > 0 and (i + 1) % op.column is 0)
				n++
				hListLine[n] = 0
		return
	hList = hList.sort(op.descend)
	hMax = hList[0]

	ie6 = typeof window.addEventListener is 'undefined' && typeof document.documentElement.style.maxHeight is 'undefined'
	if(op.column > 1)
		for j in [0...hListLine.length]
			for k in [0...op.column]
				self.eq(j * op.column + k).height hListLine[j]
				self.eq(j * op.column + k).css op.height, hListLine[j]
				if(k is 0 and op.clear isnt 0)
					self.eq(j * op.column + k).css('clear','both')
	else
		if(ie6)
			self.height(hMax)
		else
			self.css(op.height,hMax)
	return
