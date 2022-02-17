class cvsClass
	constructor:()->

	init:()->
		@modelInit()
		@viewInit()
		return

# MODEL
	modelInit:()->
		# アニメーション調整用
		@IMG_NUM = [9,9,9,9,9,9,9,9,9] # 各図形での画像数
		@RAPID_INTERVAL = 2 # 画像の連射の秒数
		@STATIONARY_INTERVAL = 4 # 画像の静止の秒数
		@IMG_INTERVAL = 0.1 # 画像の切り替え間隔秒数
		@SCENE_NUM = @IMG_NUM.length # シーン数
		@SLIDE_INTERVAL = @RAPID_INTERVAL + @STATIONARY_INTERVAL # シーンごとの秒数
		#
		@wW = window.innerWidth
		if @wW > 1020
			# @width = window.innerWidth
			@cvxW = 520
			@cvxH = 520
			@LINE_WIDTH = 20
		else if @wW > 767 && @wW < 1020
			# @width = window.innerWidth
			@cvxW = 400
			@cvxH = 400
			@LINE_WIDTH = 15
		else if @wW < 768
			@width = window.innerWidth
			@cvxW = 277
			@cvxH = 277
			@LINE_WIDTH = 10
		#
		fig = {
			name : '1_0',
			path : '/img/freshers/'
		}
		@figImg = []
		for i in [0...@SCENE_NUM]
			@figImg.push([])
			for j in [0...(@IMG_NUM[i])]
				_img = new Image()
				@figImg[i].push(_img)
				@figImg[i][j].src = fig.path + fig.name + j + '.png'
		#
		@originX = @cvxW/2
		@originY = @cvxH/2
		@startTime = Date.now()
		#
		@canvasTargetDOM = []
		@ctx = []
		for i in [0...@SCENE_NUM]
			@canvasTargetDOM[i] = document.getElementById('js-rect0' + i)
			@ctx.push(@canvasTargetDOM[i].getContext('2d'))
		#
		@distance = @originX-@LINE_WIDTH
		@points16 = []
		#
		@scale = {
			x: 0,
			y: 0
		}
		@scales = []
		for i in [0...@SCENE_NUM]
			@scales.push(@scale)
		@_hexadecagonM()
		return

	model:()->
		@sltBase = @tv / (@SLIDE_INTERVAL * 1000) % @SCENE_NUM
		@sltInt = Math.floor(@sltBase) # シーン番号
		@imt = Math.floor(@tv / (@IMG_INTERVAL*1000) % @IMG_NUM[@sltInt])
		# RESIZE
		window.addEventListener('resize',()=>

		)
		return

	_hexadecagonM:()->
		degs = [0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5,360]
		@st16 = 16
		@_rectM(@st16,degs,@points16)
		return

	_rectM:(nm,degs,point)->
		for i in [0...nm]
			deg = degs[i]
			x = Math.cos(deg * Math.PI / 180) * @distance
			y = Math.sin(deg * Math.PI / 180) * @distance
			point[i] = {x:x, y:y}
		return


# VIEW
	viewInit:()->
		for i in [0...@SCENE_NUM]
			@canvasTargetDOM[i].width = @cvxW
			@canvasTargetDOM[i].height = @cvxH
		return

	view:()->
		@_resize()
		for i in [0...@SCENE_NUM]
			@ctx[i].save()
			@ctx[i].clearRect(0,0,@width,@height)
			@ctx[i].strokeStyle = '#fff'
			@ctx[i].lineWidth = @LINE_WIDTH
		@_rectAction(@sltInt,@_rectV.bind(@,@sltInt,@points16,@st16))
		return

	# 各図形の描画とアニメーション
	_rectAction:(nm,func)->
		delayMin = 0.3
		TweenMax.to(@canvasTargetDOM[nm],.5,{opacity:1})

		if @timeSwich is off
			TweenMax.to(@canvasTargetDOM[nm],@RAPID_INTERVAL - delayMin,{
			# TweenMax.to(@canvasTargetDOM[nm],@RAPID_INTERVAL,{
				transform: 'translateY(-50%) scale(1)',
				delay: delayMin,
				ease: Circ.easeOut
			})
		else
			aniSec = 0.3
			TweenMax.to(@canvasTargetDOM[nm],aniSec,{
				opacity: 0,
				transform: 'translateY(-50%) scale(1.4)',
				delay: @STATIONARY_INTERVAL-aniSec
			})
		if nm is 0
			# console.log 'nm:0'
			if @timeSwich is on
				TweenMax.set(@canvasTargetDOM[@SCENE_NUM-1],{transform: 'translateY(-50%) scale(0)'})
		else if nm > 0 || nm < @SCENE_NUM
			# console.log 'nm:1-8'
			if @timeSwich is on
				TweenMax.set(@canvasTargetDOM[nm-1],{transform: 'translateY(-50%) scale(0)'})
		func()
		return

	# 各図形の描画
	_rectV:(nm,point,roop)->
		@imgFlag = if @timeSwich is off then @imt % @IMG_NUM[nm] else nm
		@ctx[nm].beginPath()
		@ctx[nm].moveTo(point[0].x+@originX, point[0].y+@originY)
		for i in [0...roop]
			@ctx[nm].lineTo(point[i].x+@originX, point[i].y+@originY)
		@ctx[nm].closePath()
		@ctx[nm].stroke()
		@ctx[nm].clip()
		@ctx[nm].drawImage(@figImg[nm][@imgFlag],0,0,@cvxW,@cvxH)
		@ctx[nm].restore()
		return

	_circleV:(nm)->
		@ctx[nm].beginPath()
		@ctx[nm].arc(@originX, @originY, @harf, 0, Math.PI*2, false)
		@ctx[nm].stroke()
		@ctx[nm].clip()
		@ctx[nm].drawImage(@figImg[nm][@imgFlag],0,0,@cvxW,@cvxH)
		@ctx[nm].restore()
		return

	# RESIZE
	_resize:()->
		@wW = window.innerWidth
		if @wW > 1020
			@cvxW = 520
			@cvxH = 520
			@LINE_WIDTH = 20
			@modelInit()
			@viewInit()
		else if @wW > 767 && @wW < 1020
			@cvxW = 400
			@cvxH = 400
			@LINE_WIDTH = 15
			@modelInit()
			@viewInit()
		else if @wW < 768
			@width = window.innerWidth
			@cvxW = 277
			@cvxH = 277
			@LINE_WIDTH = 10
			@modelInit()
			@viewInit()
		return

window.Cvs = cvsClass
