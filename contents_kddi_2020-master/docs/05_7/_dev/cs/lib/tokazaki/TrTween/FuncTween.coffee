class FuncTween extends ITween
	constructor:(func,params,caller)->
		@_func = func
		@_params = params || []
		@_caller = caller || @
		@_state = TweenState.Initialized
		@_duration = 25
		return
	play:->
		@_state = TweenState.Playing
		@_func.apply(@_caller,@_params)
		setTimeout(=>
			@finalize()
		,@_duration)
		return
	clone:->
		return new FuncTween(@_func,@_params,@_caller)
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1
			@_func.apply(@_caller,@_params)
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
		else
			@_state = TweenState.Playing
		return
	gotoAndPlay:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1
			@_func.apply(@_caller,@_params)
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
		else
			@_state = TweenState.Playing
		return
class WaitTween extends ITween
	constructor:(time)->
		@_duration = time * 1000
		@_cd = @_duration
	play:->
		@_state = TweenState.Playing
		@_cid = setTimeout(=>
			@finalize()
		,@_cd)
		return
	stop:->
		clearTimeout(@_cid)
		return
	clone:->
		return new WaitTween(@_duration)
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		@_cd = @_duration - @_duration * parsent
		if parsent is 1
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
		else
			@_state = TweenState.Playing
		return
	gotoAndPlay:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		@_duration = @_cd - @_cd * parsent
		@_cd = @_duration - @_duration * parsent
		@play()
		return
class AddClassTween extends ITween
	_className:""
	_target:null
	_before:""
	constructor:(target,className)->
		@_target = target
		@_className = className
		@_duration = 25
	play:->
		@_state = TweenState.Playing
		@_fixClass()
		setTimeout(=>
			@finalize()
		,@_duration)
		return
	_fixClass:->
		@_before = @_target.className
		classes = @_target.className.split(" ")
		index = classes.indexOf(@_className)
		if index < 0
			classes.push(@_className)
		
		@_target.className = classes.join(" ")
		return
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	clone:->
		return new AddClassTween(@_target,@_className)
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1
			@_fixClass()
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
			if @_before isnt ""
				@_target.className = @_before
		else
			@_state = TweenState.Playing
			if @_before isnt ""
				@_target.className = @_before
		return
	gotoAndPlay:(parsent)->
		@gotoAndStop(parsent)
		return
class RemoveClassTween extends ITween
	_className:""
	_target:null
	_before:""
	constructor:(target,className)->
		@_target = target
		@_className = className
		@_duration = 25
	play:->
		@_state = TweenState.Playing
		@_fixClass()
		setTimeout(=>
			@finalize()
		,@_duration)
		return
	_fixClass:->
		@_before = @_target.className
		classes = @_target.className.split(" ")
		index = classes.indexOf(@_className)
		if index > -1
			classes.splice(index,1)
		@_target.className = classes.join(" ")
		return
	finalize:->
		@_state = TweenState.Finalized
		if @_onComplete
			@_onComplete(@)
		return
	clone:->
		return new RemoveClassTween(@_target,@_className)
	gotoAndStop:(parsent)->
		parsent = if parsent > 1 then 1 else if parsent < 0 then 0 else parsent
		if parsent is 1
			@_fixClass()
			@_state = TweenState.Completed
		else if parsent is 0
			@_state = TweenState.Initialized
			if @_before isnt ""
				@_target.className = @_before
		else
			@_state = TweenState.Playing
			if @_before isnt ""
				@_target.className = @_before
		return
	gotoAndPlay:(parsent)->
		@gotoAndStop(parsent)
		return