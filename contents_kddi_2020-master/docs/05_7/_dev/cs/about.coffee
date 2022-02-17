class aboutClass
	constructor:()->
	init:()->
		@movBtn = document.getElementsByClassName('js-movBtn')
		@mdl = document.querySelector('.modal')
		@mdlBg = document.querySelector('.modal__bg')
		@mdlTtl = document.querySelector('.modal__title')
		@mdlCl = document.querySelector('.modal__clBtn')
		@tl = new TimelineMax()
		@_addEvent()
		return
	start:()->
		return

	_addEvent:()->
		@ytInit()
		@movBtnClickAdd()
		return

	ytInit:()->
		# youtube iframe api
		tag = document.createElement('script')
		tag.src = "https://www.youtube.com/iframe_api"
		firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

		# youtube data
		@ytData = {
			movID : {
				1 : 'uo9cy45En3I',
				2 : 'hVzZ7DG50T4'
			},
			title : {
				1 : '会社紹介ムービー（歴史編）',
				2 : '会社紹介ムービー（社員紹介編）'
			}
		}
		@ytArea = document.getElementsByClassName('ytArea')
		@ytVideo = []
		for i in [0...@movBtn.length]
			@ytVideo[i] = {
				flag : false,
				player : ''
			}

		return

	ytAdd:(id)->
		# youtube loading
		if !@ytVideo[id-1].flag
			@ytVideo[id-1].flag = true
			@ytVideo[id-1].player = new YT.Player('js-player'+id, {
				width: 960,
				height: 540,
				videoId: @ytData.movID[id],
				playerVars: {
					showinfo: 1,
					controls: 1,
					rel: 0,
					autoPlay: 0
				},
				events: {
				}
			})
		return

	movBtnClickAdd:()->
		# modal open
		for i in [0...@movBtn.length]
			@movBtn[i].addEventListener('click',(e)=>
				e.preventDefault
				target = e.currentTarget
				@num = target.id.replace('js-mov0','')
				@ytArea[@num-1].style.display = 'block'
				@modalOP()
				@ytAdd(@num)
				@mdlTtl.innerHTML = @ytData.title[@num]

				return
			)

		# modal close
		@mdlBg.addEventListener('click',(e)=>
			@ytVideo[@num-1].player.pauseVideo()
			@modalCL()
			setTimeout(=>
				@ytArea[@num-1].style.display = 'none'
				return
			,100)
		)
		@mdlCl.addEventListener('click',(e)=>
			@ytVideo[@num-1].player.pauseVideo()
			@modalCL()
			setTimeout(=>
				@ytArea[@num-1].style.display = 'none'
				return
			,100)
		)
		return

	# modal open animation
	modalOP:()->
		@tl.set(@mdl,{display:'block'})
		.to(@mdl,.4,{opacity: 1})
		return

	# modal close animation
	modalCL:()->
		@tl.to(@mdl,.4,{opacity: 0})
		.set(@mdl,{display:'none'})
		return

window.About = aboutClass
