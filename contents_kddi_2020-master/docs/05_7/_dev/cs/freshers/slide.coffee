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

#-----------------------------#
onInit = ()->
	__Browser = Common.getUA()
	__Device = Common.getDevice()

	__Base = new Base()
	__Base.init()

	if($('.wrapper').hasClass('top'))
		__Top = new Top()
		__Top.init()
	onResize()
	return

onLoad = ()->
	onResize()
	if(__Base)
		__Base.start()
	if(__Top)
		__Top.start()
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
	if(__Base)
		__Base.scroll()
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

class initClass
	constructor:()->
	# THREE.js init
		@wW = window.innerWidth
		if @wW > 767
			@width = 3500
			@height = window.innerHeight
		else
			@width = window.innerWidth + 100
			@height = window.innerHeight + 100
		# camera
		@CAMERA_PARAMETER = {
			fovy: 60,
			aspect: @width / @height,
			near: 1,
			far: 4000,
			x: 0,
			y: 0,
			z: 2000,
			theta: 0,
			lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
			radX: 120,
			radY: 0,
			radZ: 0
		}
		# renderer
		@RENDERER_PARAMETER = {
				alpha: true,
				clearColor: 0xf4f3f4,
				width: @width,
				height: @height
		}
		# material
		@MATERIAL_PARAMETER = {
				color: 0xffffff
				opacity: 1
		}
		# light
		@LIGHT_PARAMETER = {
				hex: 0xffffff,
				intensity: 1,
				x: 0,
				y: 0,
				z: 100,
		}
	# BASE
		@run = true
		@threeTargetDOM = document.getElementById('line')
		@kyu = document.querySelector('.kyu')
		@timeSwich = off
		@topTimeSwich = on
		@startTime = Date.now()
	# LINE init
		@lin = new Line()
		@lin.init()
	# CANVAS init
		@cvs = new Cvs()
		@cvs.init()
	# PROJECT init
		@project = document.getElementsByClassName('js-pro')
		@projectLen = @project.length
		@txtShuffle = []
		@txtShuffleEl = document.getElementsByClassName('js-proName')
		for i in [0...@projectLen]
			@txtShuffle.push(new ShuffleText(@txtShuffleEl[i]))

	_rad:(r)->
		raddian = r * Math.PI/180
		rad = {
			cos: Math.cos(raddian),
			sin: Math.sin(raddian)
		}
		return rad

window.Init = initClass

class baseClass extends initClass
	constructor:()->
		super()

	init:()->
		@cos = @_rad(@CAMERA_PARAMETER.radX).cos
		@sin = @_rad(@CAMERA_PARAMETER.radY).sin
		@_addEvent()
		return

	_addEvent:()->
		window.addEventListener('load', () =>
		# THREE.js event
			# Scene
			@scene = new THREE.Scene()
			# Light
			@light = new THREE.DirectionalLight(
				@LIGHT_PARAMETER.hex,
				@LIGHT_PARAMETER.intensity
			)
			@light.position.x = @LIGHT_PARAMETER.x
			@light.position.y = @LIGHT_PARAMETER.y
			@light.position.z = @LIGHT_PARAMETER.z
			@scene.add(@light)
			# Camera
			@camera = new THREE.PerspectiveCamera(
				@CAMERA_PARAMETER.fovy,
				@CAMERA_PARAMETER.aspect,
				@CAMERA_PARAMETER.near,
				@CAMERA_PARAMETER.far
			)
			@camera.position.x = @CAMERA_PARAMETER.x
			@camera.position.y = @CAMERA_PARAMETER.y
			@camera.position.z = @CAMERA_PARAMETER.z
			window.addEventListener('mousemove',(e)=>
				mouse = {
					x: e.clientX
					y: e.clientY
				}
				@cpx = ((mouse.x + 1000) * 2 - @width)/2
				@cpy = ((mouse.y * 2 - @height)*-1)/2
				@camera.position.x = @cpx
				@camera.position.y = @cpy
			)
			# Raenderer
			@renderer = new THREE.WebGLRenderer({ alpha: true })
			@renderer.setSize(@RENDERER_PARAMETER.width, @RENDERER_PARAMETER.height)
			@renderer.setClearAlpha(0)
			# @renderer.setClearColor(new THREE.Color(@RENDERER_PARAMETER.clearColor))
			@renderer.setPixelRatio(window.devicePixelRatio)
			# Geometry
			@geometry = []
			@line = []
			@lineObj = []
			for i in [0...@lin.LINE_NUM]
				@geometry.push(new THREE.Geometry())
				@line.push(new lineClass())
				@line[i].init()
				# ジオメトリの座標追加
				@geometry[i].vertices.push(@line[i].vp1)
				@geometry[i].vertices.push(@line[i].vp2)
				# ライン指示
				@geometry[i].verticesNeedUpdate = true
				@geometry[i].elementsNeedUpdate = true
				@geometry[i].computeFaceNormals()
				# ライン表示（メッシュの作成）
				@lineObj.push(new THREE.Line(@geometry[i],new THREE.LineBasicMaterial({
					color: @line[i].lc
					}))
				)
				# line ステージへ
				@scene.add(@lineObj[i])

			@threeTargetDOM.appendChild(@renderer.domElement)
			@vLen = []


			######### ヘルパー関数
			# 軸
			# @axis = new THREE.AxesHelper(300)
			# @scene.add(@axis)
			# マウスコントロール
			# @controls = new THREE.OrbitControls(@camera)
			#########

			@_render()
		, false)
		return


	_render:()=>
		@camera.lookAt(@CAMERA_PARAMETER.lookAt)
		@_resize()
		@nowTime = Date.now()
		@tv = @nowTime - @startTime
		@quantityRapid = @cvs.RAPID_INTERVAL/@cvs.SLIDE_INTERVAL
		@sct = @tv / (@cvs.SLIDE_INTERVAL * 1000) % 1 # 画像連写変更のon/off、背景スピードのfast/low切り替え間隔
		#
		@cvs.tv = @tv
		@cvs.sct = @sct
		@cvs.quantityRapid = @quantityRapid

	# LINE render
		for i in [0...@line.length]
			if @sct > 0 && @sct < @quantityRapid
				speed = @lin.speed.f
				@timeSwich = off
				@cvs.timeSwich = off
			else if @sct > @quantityRapid && @topTimeSwich is on
				speed = @lin.speed.l
				@timeSwich = on
				@cvs.timeSwich = on
			else if @topTimeSwich is off
				speed = @lin.speed.f
				@timeSwich = off
				@cvs.timeSwich = off

			gv0 = @geometry[i].vertices[0]
			gv1 = @geometry[i].vertices[1]

			@vLen = @line[i].vpLength(gv0.x,gv0.y,gv0.z,gv1.x,gv1.y,gv1.z)

			if @vLen > @lin.LINE_LEN
				@line[i].tn1 += speed
			@line[i].tn2 += speed

			vpU1 = @line[i].vpUpdate(@line[i].tn1)
			vpU2 = @line[i].vpUpdate(@line[i].tn2)

			# 始点
			gv0.x = vpU1.x
			gv0.y = vpU1.y
			gv0.z = vpU1.z
			# 終点
			gv1.x = vpU2.x
			gv1.y = vpU2.y
			gv1.z = vpU2.z

			@geometry[i].verticesNeedUpdate = true
			@geometry[i].elementsNeedUpdate = true

			if gv0.x > @lin.lostLen.lx || gv0.y > @lin.lostLen.ly || gv0.z > @lin.lostLen.lz
			# リセット
				@line[i].tn1 = 0
				@line[i].tn2 = 0

				# 始点
				gv0.x = vpU1.x
				gv0.y = vpU1.y
				gv0.z = vpU1.z
				# 終点
				gv1.x = vpU2.x
				gv1.y = vpU2.y
				gv1.z = vpU2.z


	# CANVAS render
		@cvs.model()
		@cvs.view()

		@bgChange()
		@textIn(@cvs.sltInt)

		@renderer.render(@scene, @camera)
		if (@run)
			requestAnimationFrame(@_render)
		return

	# 背景色変更
	bgChange:()->
		scY = c.getScrollPosY()
		if scY > 700
			@topTimeSwich = off
			TweenMax.to(@threeTargetDOM,1,{backgroundColor: '#000000'})
		else
			@topTimeSwich = on
			TweenMax.to(@threeTargetDOM,1,{backgroundColor: '#f4f3f4'})
		return

	# テキスト出現
	textIn:(scene)->
		if @timeSwich is on
			TweenMax.set(@project[scene],{display: 'inline-block'})
			TweenMax.to(@project[scene],0.4,{opacity: 1})
		else if @timeSwich is off
			nm = if scene is 0 then @projectLen-1 else scene-1
			TweenMax.to(@project[nm],0.2,{opacity: 0})
			TweenMax.set(@project[nm],{display: 'none',delay: 0.5})
			@txtShuffle[scene].start()
		return

	# RESIZE
	_resize:()->
		@wW = window.innerWidth
		if @wW > 767
			@width = 3500
			@height = window.innerHeight
			@renderer.setPixelRatio(window.devicePixelRatio)
			@renderer.setSize(@width, @height)
			@camera.aspect = @width / @height
			@camera.updateProjectionMatrix()
		else
			@width = window.innerWidth + 100
			@height = window.innerHeight + 100
			@renderer.setPixelRatio(window.devicePixelRatio)
			@renderer.setSize(@width, @height)
			@camera.aspect = @width / @height
			@camera.updateProjectionMatrix()
		return

	start:()->
		return

	scroll:()->
		return

	resize:()->
		return
window.Base = baseClass

class topClass
	constructor:()->
		@ease = Power2.easeInOut
	init:()->
		@_addEvent()
		return
	start:()->
		return
	_addEvent:()->
		return
	scroll:()->
		return
	resize:()->
		return
window.Top = topClass
