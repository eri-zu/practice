class BasicTween extends ITween
	_mapper:null
	_target:null
	_easing:null
	_endTime:NaN
	_stopTime:NaN
	constructor:(target,to,from,duration,easing)->
		@_onComplete = null
		@_onPlay     = null
		@_onUpdate   = null
		@_onStop     = null
		
		@_state      = TweenState.Initialized
		@_from       = from || {}
		@_to         = to
		@_duration   = duration * 1000
		@_easing     = easing || TrTween.DefaultEasing
		@_target     = target
		# @_mapper     = PropertyMapper.getMapper(target)
		@_mapper = StyleProxy.getProxy(target)
		return
	play:->
		@_state = TweenState.Playing
		@startRender()
		@register(false)
		
		if @_onPlay
			@_onPlay(@)
		return
	resume:->
		if @_state is TweenState.Stoped
			if @_stopTime > 0
				@_state = TweenState.Playing
				ct = Render.getCurrentTime()
				@_endTime = ct + @_stopTime
				@_st = ct - (@_duration - @_stopTime)
				@_c = @_mapper.registerTween(@,false)
				@startRender()
				
			else
				return
		else if @_state is TweenState.Playing
			return
		else
			@play()
		return
	register:(register)->
		@_c = @_mapper.registerTween(@,register)
		@_st = Render.getCurrentTime()
		@_endTime = @_st + @_duration
		return
	update:(ct,prop,proxy)->
		if ct >= @_endTime 
			proxy[prop] = @_easing.update(@_duration,@_from[prop],@_c[prop],@_duration)
			@_state = TweenState.Completed
			return
		proxy[prop] = @_easing.update(ct - @_st,@_from[prop],@_c[prop],@_duration)
		return
	tickUpdate:->
		if @_onUpdate
			@_onUpdate(@)
		return
	stop:->
		@_stopTime = @_endTime - Render.getCurrentTime()
		@_state = TweenState.Stoped
		if @_onStop
			@_onStop(@)
		return
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	clone:->
		return new BasicTween(@_target,@_tp,@_from,@_duration / 1000,@_easing)
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1 and @_state is TweenState.Completed or parsent is 0 and @_state is TweenState.Initialized
			return

		@_st = Render.getCurrentTime()
		@_endTime = @_st + @_duration
		ct = @_st + @_duration * parsent
		if !@_c?
			@_c = @_mapper.registerTween(@,true)
		if parsent is 0
			if @_state isnt TweenState.Initialized
				for val of @_to
					@update(ct,val,@_mapper.getProxy(val))
					@_mapper.applyStyles()
				@_c = null
				@_state = TweenState.Initialized
				
			return
		else if parsent is 1
			if @_state isnt TweenState.Completed
				for val of @_to
					@update(ct,val,@_mapper.getProxy(val))
					@_mapper.applyStyles()
				@_c = null
				@_state = TweenState.Completed
				
			return
		else
			@_state = TweenState.Playing
			@_stopTime = @_endTime - ct
			for val of @_to
				@update(ct,val,@_mapper.getProxy(val))
				@_mapper.applyStyles()
		return
	gotoAndPlay:(parsent)->
		@gotoAndStop(parsent)
		@_state = TweenState.Stoped
		@resume()
		return
