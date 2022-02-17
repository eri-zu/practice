'use strict'

TrTween = jp.contents.TrTween.TrTween
Render = jp.contents.TrTween.Render
Linear = jp.contents.easing.Linear
Quart = jp.contents.easing.Quart
Cubic = jp.contents.easing.Cubic
Back = jp.contents.easing.Back
Sine = jp.contents.easing.Sine
Quad = jp.contents.easing.Quad
Elastic = jp.contents.easing.Elastic
Expo = jp.contents.easing.Expo

__WinW = 0
__WinH = 0
__ScrollTop = 0
__ContentH = 0
__Browser = null
__Device = null
__Media = null
##
__MinW = 1200

##
__SPWidth = 768
__PCWidth = 1199
##
__Base = null
__Top = null
__About = null
__Business = null

#-----------------------------#
onInit = ()->
	__Browser = Common.getUA()
	__Device = Common.getDevice()

	__Base = new Base()
	__Base.init()

	if($('.wrapper').hasClass('top'))
		__Top = new Top()
		__Top.init()
	if($('.wrapper').hasClass('about'))
		__About = new About()
		__About.init()
	if($('.wrapper').hasClass('business'))
		__Business = new Business()
		__Business.init()

	onResize()
	return

onLoad = ()->
	onResize()
	if(__Base)
		__Base.start()
	if(__Top)
		__Top.start()
	if(__About)
		__About.start()
	if(__Business)
		__Business.start()
	return

onResize = (e)->
	__WinW = Common.getBrowserWidth()
	__WinH = Common.getBrowserHeight()
	__ContentH = Common.getContentHeight()
	__Media = onCheckDevice()
	#
	if(__WinW < __MinW)
		__WinW = __MinW
	if(__Base)
		__Base.resize()
	if(__Top)
		__Top.resize()
	return

onScroll = (e)->
	__ScrollTop = Common.getScrollPosY()
	# if(__Base)
	# 	__Base.scroll()
	return

onRender = ()->
	requestAnimationFrame(onRender)
	return

onCheckDevice = ()->
	if(__WinW < __SPWidth)
		_ua = 'sp'
	else if(__WinW <= __PCWidth && __WinW >= __SPWidth)
		_ua = 'tb'
	else
		_ua = 'pc'
	return _ua

##
requestAnimationFrame = (()->
	return 	window.requestAnimationFrame or
			window.webkitRequestAnimationFrame or
			window.mozRequestAnimationFrame or
			window.oRequestAnimationFrame or
			window.msRequestAnimationFrame or
			(callback, element)->
				return window.setTimeout(callback, 1000 / 60)
)()

document.addEventListener('DOMContentLoaded',onInit, false)
window.addEventListener('load',onLoad, false)
window.addEventListener('resize',onResize, false)
window.addEventListener('scroll',onScroll, false)

class baseClass
	constructor:()->
	init:()->
		@wW = window.innerWidth
		@wH = window.innerHeight
		@rdvA = []
		@loadFl = false
		@tl = new TimelineMax()
		@_addEvent()
		return
	start:()->
		return

	_addEvent:()->
		@pagetop()
		if @wW < 768
			@gMenuSpiInit()
			@_btnAc()


		return

	gMenuSpiInit:()->
		@wr = document.querySelector('.wrapper')
		@hd = document.getElementById('js-hd')
		@nav = document.getElementById('js-nav')
		@bl1 = document.querySelector('.js-bl1')
		@bl2 = document.querySelector('.js-bl2')
		@underBtn = document.querySelector('.js-under')
		@hdH = @hd.clientHeight
		@bl2.style.height = 'auto'
		@bl1.style.top = @hdH + 'px'
		@bl1H = @bl1.clientHeight
		@bl2H = @bl2.clientHeight
		return

	_btnAc:()->
		btn = document.getElementById('js-gMenuBtn')
		fl = false
		@loadFl = true
		btn.addEventListener('click',(e)=>
			e.preventDefault()
			@bl2.style.height = 0
			if !@nav.classList.contains('is-show')
				btn.classList.add('is-show')
				@nav.classList.add('is-show')
				@nav.style.height = '100%'
			else
				@nav.style.position = 'fixed'
				@nav.classList.remove('is-show')
				setTimeout(=>
					@nav.style.height = 0
				,200)
				btn.classList.remove('is-show')
				@underBtn.classList.remove('is-show')
				if fl is true
				  fl = false
					@wr.style.height = 'auto'
			)
		@underBtn.addEventListener('click',(e)=>
			e.preventDefault()
			if !@underBtn.classList.contains('is-show')
				@underBtn.classList.add('is-show')
				@bl2.style.height = @bl2H + 'px'
				if @bl1H > @wH
					fl = true
					@wr.style.height = @wH + 'px'
					@nav.style.position = 'absolute'
				setTimeout(=>
					@wr.style.height = @bl1H + @hdH + 'px'
				,0)
			else
				@underBtn.classList.remove('is-show')
				@bl2.style.height = 0
				if fl is true
				  fl = false
					@wr.style.height = 'auto'
			)
		return

	resize:()->
		@wW = window.innerWidth
		if @wW < 767
			@gMenuSpiInit()
			if @loadFl is false
				@_btnAc()
		return

	# pagetop
	pagetop:()->
		@pt = document.getElementById('js-pagetop')
		@pt.addEventListener('click',(e)=>
			$('html,body').animate({scrollTop: 0}, 500)
		)
		# window.addEventListener('scroll', (e)=>
		# 	@sc = c.getScrollPosY()
		# 	if @sc < 400
		# 	  TweenMax.to(@pt,0.3,{opacity: 0})
		# 	else
		# 		TweenMax.to(@pt,0.3,{opacity: 1})
		# )
		return
window.Base = baseClass


class imgResizes
	constructor:(target,baseW,baseH)->
		@target = target
		@baseW = baseW
		@baseH = baseH

	resize:(bw,bh)->
		scaleW = bw / @baseW
		scaleH = bh / @baseH
		fixScale = scaleW
		setW = (@baseW * fixScale)
		setH = (@baseH * fixScale)
		@target.css({width:setW,height:setH})

		scaleW = bw / @baseW
		scaleH = bh / @baseH
		fixScale = scaleW
		setW = (@baseW * fixScale)
		setH = (@baseH * fixScale)
		if(setH < bh)
			fixScale = scaleH
			setW = (@baseW * fixScale)
			setH = (@baseH * fixScale)

		moveX = ((bw - setW)*0.5)
		moveY = ((bh - setH)*0.5)
		TweenMax.set(@target,{width:setW,height:setH,x:moveX,y:moveY})
		return

window.ImgResizes = imgResizes
