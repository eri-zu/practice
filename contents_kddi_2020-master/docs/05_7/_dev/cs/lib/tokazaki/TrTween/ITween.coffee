class ITween
	_onComplete:null
	_onPlay:null
	_onStop:null
	_onUpdate:null
	_state:""
	_duration:0
	update:(currentTime,prop)->
	play:->
	stop:->
	resume:->
	finalize:->
	clone:->
	getDuration:->
		return @_duration / 1000
	onComplete:(func)->
		@_onComplete = func
		return
	onUpdate:(func)->
		@_onUpdate = func
		return
	onPlay:(func)->
		@_onPlay = func
		return
	onStop:(func)->
		@_onStop = func
		return
	getState:->
		return @_state
	gotoAndStop:(parsent)->
		return
	gotoAndPlay:(parsent)->
		return
	startRender:->
		if Render.getState() is 0
			Render.start()
		return

class ITweenGroup extends ITween
	_tweens:null
	getTweens:->
		return @_tweens
	getLength:->
		return @_tweens.length
class ICSSTween extends ITween
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	gotoAndStop:(parsent)->
		throw new Error("ICSSTweenはgotoAndStop/Playに対応していません。")
	gotoAndPlay:(parsent)->
		throw new Error("ICSSTweenはgotoAndStop/Playに対応していません。")