class businessClass
	constructor:()->
	init:()->
		@wW = window.innerWidth
		@report = document.getElementsByClassName('js-report')
		@lede = document.getElementsByClassName('js-lede')
		@hideArea = document.getElementsByClassName('js-hideArea')
		@hideCulBox = document.getElementsByClassName('js-hideCulBox')
		@hideText = document.getElementsByClassName('js-hideText')
		@hd = document.getElementById('js-hd')
		@hdH = @hd.clientHeight
		@scV = c.getScrollPosY()
		@reportPos = []
		@ledeHeight = []
		@hideCulBoxHeight = []
		@opFl = []
		for i in [0...@hideCulBox.length]
			@opFl.push(false)
			@reportPos.push(@report[i].getBoundingClientRect().top + @scV - (@hdH + 30))
			@hideCulBoxHeight.push(@hideCulBox[i].clientHeight)
			@ledeHeight.push(@lede[i].clientHeight)
			@hideCulBox[i].style.opacity = 0
			@hideCulBox[i].style.height = 0
		@_addEvent()
		return
	start:()->
		return
	_addEvent:()->

		@more = document.getElementsByClassName('js-more')
		@close = document.getElementsByClassName('js-close')
		@btnSp = document.getElementsByClassName('js-btnSp')
		ml = @more.length
		@_tweenProcessing()
		for i in [0...ml]
			@btnClickOP(@more[i],i,@)
			@btnClickOP(@close[i],i,@)
			@btnClickOP(@btnSp[i],i,@)
		return

	btnClickOP:(ta,nm,ow)->
		ta.addEventListener('click',(e)=>
			e.preventDefault
			ta = e.currentTarget
			# OPEN
			if !@opFl[nm]
				sc = c.getScrollPosY()
				@reportPos[nm] = @report[nm].getBoundingClientRect().top + sc - (@hdH + 30)
				$('html,body').animate({scrollTop: @reportPos[nm] + 'px'}, 400)
				@opFl[nm] = true
				ta.classList.add('is-ac')
				if @wW > 767
					@TimelinePlus.seri(
						@TimelinePlus.para(
							TweenMax.to(@hideCulBox[nm],0.7,{
								height: @hideCulBoxHeight[nm]+'px',
								paddingBottom: 45 + 'px',
								ease: Power1.easeOut
							})
						)
						TweenMax.set(@hideCulBox[nm],{
							height: 'auto',
							delay: 0.0001
						})
						TweenMax.to(@hideCulBox[nm],0.5,{opacity: 1,delay: -0.5})
					)
				else
					@TimelinePlus.seri(
						@TimelinePlus.para(
							TweenMax.to(@hideCulBox[nm],0.7,{
								height: @hideCulBoxHeight[nm]+'px',
								paddingBottom: 0 + 'px',
								ease: Power1.easeOut
							})
						)
						TweenMax.set(@hideCulBox[nm],{
							height: 'auto',
							delay: 0.0001
						})
						TweenMax.to(@hideCulBox[nm],0.5,{opacity: 1,delay: -0.5})
					)
				setTimeout(=>
					@btnSp[nm].innerHTML = '閉じる'
				,300)

			# CLOSE
			else
				sc = c.getScrollPosY()
				@reportPos[nm] = @report[nm].getBoundingClientRect().top + sc - (@hdH + 30)
				@opFl[nm] = false
				if ta is @close[nm]
					@more[nm].classList.remove('is-ac')
				else
					ta.classList.remove('is-ac')
				@TimelinePlus.seri(
					@TimelinePlus.para(
						TweenMax.to(@hideCulBox[nm],0.3,{opacity: 0})
						TweenMax.to(@hideCulBox[nm],0.4,{
							height: 0,
							paddingBottom: 0 + 'px',
							ease: Power2.easeOut
						})
					)
					TweenMax.to(@hideCulBox[nm],0.4,{
						height: 0,
						delay: 0.0001
					})
				).delay(0.15)
				$('html,body').animate({scrollTop: @reportPos[nm] + 'px'}, 400)
				setTimeout(=>
					@btnSp[nm].innerHTML = '続きを読む'
				,700)
		)
		return

	_tweenProcessing:()->
		@TimelinePlus = {}
		# serial
		@TimelinePlus.seri = ()->
			tl = new TimelineMax()
			len = arguments.length
			for i in [0...len]
				tl.add(arguments[i])
			return tl
		# parallel
		@TimelinePlus.para = ()->
			args = Array.prototype.slice.call(arguments, 0)
			return new TimelineMax().add(args)
		return

	scroll:()->
		return
	resize:()->
		return
window.Business = businessClass
