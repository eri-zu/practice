class PropertyTween extends ITween
	constructor:(target,properties)->
		@_target = target
		@_prop = properties
		@_duration = 25
		@_bProps = null
		return
	play:->
		mapper = StyleProxy.getProxy(@_target)
		mapper.applyProperties(@_prop,true)
		setTimeout(=>
			@finalize()
		,25)
		return
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	clone:->
		return new PropertyTween(@_target,@_prop)
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1
			mapper = StyleProxy.getProxy(@_target)
			@_bProps = mapper.applyProperties(@_prop,true)
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
			if @_bProps?
				mapper = StyleProxy.getProxy(@_target)
				mapper.applyProperties(@_bProps,true)
				@_bProps = null
		else
			@_state = TweenState.Playing
			if @_bProps?
				mapper = StyleProxy.getProxy(@_target)
				mapper.applyProperties(@_bProps,true)
				@_bProps = null

		return
	gotoAndPlay:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1
			mapper = StyleProxy.getProxy(target)
			mapper.applyProperties(@_prop,true)
			@_state = TweenState.Completed
		
		return
class ChangeUnitTween extends ITween
	constructor:(target,properties)->
		@_target = target
		@_prop = properties
		@_duration = 25
		@_bProps = null
	play:->
		@_mapper = @_mapper || StyleProxy.getProxy(@_target)
		@_mapper.changeUnit(@_prop)
		@_mapper.applyStyles()
		setTimeout(=>
			@finalize()
		,25)
		return
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	clone:->
		return new ChangeUnitTween(@_target,@_prop)
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent

		mapper = @_mapper || StyleProxy.getProxy(@_target)
		if parsent is 1
			@_bProps = mapper.changeUnit(@_prop)
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
			if @_bProps?
				mapper.changeUnit(@_bProps)
				@_bProps = null
		else
			@_state = TweenState.Playing
			if @_bProps?
				mapper.changeUnit(@_bProps)
				@_bProps = null

		return
	