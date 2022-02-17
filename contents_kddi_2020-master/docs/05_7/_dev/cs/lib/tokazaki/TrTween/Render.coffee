###*
*TrTween等の描画更新クラス
*@class Render
*@namespace jp.contents.TrTween.Render
###
class Render
	@count = 0
	@_currentTime = Date.now()
	@_updaters = new LinkedList()
	@tick = null
	###*
	*リスナーを削除します
	*@param {Object} Object
	###
	@removeListener:(updater)->
		Render._updaters.slice(updater)
		return
	###*
	*リスナーを登録します
	*登録されたリスナーに対し、毎フレームごとupdateメソッドをコールします。
	*@param {Object} UpdateObject
	###
	@addListener:(updater)->
		
		f = Render._updaters.getFirst()
		find = false
		while f
			if f.elm is updater
				find = true
			f = f.next
		if !find
			Render._updaters.push(updater)
		return
	###*
	*Renderの状態を返します。
	*@return {Boolean}
	###
	@getState:->
		return Render._state
	@_state = 0
	@_rid = -1
	###*
	*Renderを開始します。
	###
	@start:->
		if Render._state is 1
			return
		if !Render.tick?
			if Date.now?
				Render.tick = Render._tick 
			else 
				Render.tick = Render._tickOld
		Render._state = 1
		if EMULATE_RAF
			Render.tick(Date.now())
		else
			Render.tick(Date.now() - Render._currentTime)
		return
	###*
	*Renderを停止します。
	###
	@stop:->
		cancelAnimationFrame(Render._rid)
		return
	@_tick:(timestamp)->
		mt = 0
		if timestamp is undefined
			timestamp = Date.now()
		# console.log(timestamp,"aaaaaaaaaaa")
		Render._currentTime = ct = parseInt(timestamp)
		updaters = Render._updaters
		f = updaters.getFirst()
		while f
			f.elm.update(ct)
			f = f.next
		Render._rid = requestAnimationFrame(Render.tick)
		return
	@_tickOld:->
		mt = 0
		Render._currentTime = ct = new Date().getTime()
		updaters = Render._updaters
		f = updaters.getFirst()
		while f
			f.elm.update(ct)
			f = f.next
		Render._rid = requestAnimationFrame(Render.tick)
		return
	@getCurrentTime:->
		return Render._currentTime

# Render.start()
