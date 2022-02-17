###*
*Eventクラス
*@class Event
*@namespace jp.contents.events.Event
###
class Event
	_type:""
	_target:null
	constructor:(type,target = null)->
		@_type   = type
		@_target = target
	clone:->
		return new Event(@_type,@_target)
	###*
	*イベントタイプの取得
	*@return {String} イベントタイプ
	###
	getType:->
		return @_type
	###*
	*イベントターゲットの取得
	*@return {Object} イベントターゲット
	###
	getTarget:->
		return @_target
###*
*EventDispatcherクラス
*@class EventDispatcher
*@namespace jp.contents.events.EventDispatcher
###
class EventDispatcher
	_listeners:null
	constructor:->
	_initListeners:->
		if @_listeners is null
			@_listeners = {}
		return
	###*
	*渡されたEventTypeのリスナーを保持しているかどうかを返します。
	*@param {String} EventType
	*@return {Boolean} 真偽値
	###
	hasEventListener:(type)->
		if @_listeners is null or !@_listeners[type]?
			return false
		return true
	###*
	*渡されたイベントをディスパッチします。
	*@param {String|Event} EventType
	###
	dispatchEvent:(type)->
		if typeof type is "string"
			if !@hasEventListener(type)
				return
		else if type instanceof Event
			if !@hasEventListener(type.getType())
				return
		if typeof type is "string"
			evt = new Event(type,@)
		else 
			evt = type
		type = evt.getType()
		for val,i in @_listeners[type]
			@_listeners[type][i](evt.clone())
		return
	###*
	*イベントリスナーを登録します。
	*@param {String} EventType
	*@param {Function} リスナーfunction
	###
	addEventListener:(type,listener)->
		if !listener instanceof Function
			return

		if !@hasEventListener(type)
			@_initListeners()
			@_listeners[type] = [listener]
		else
			@_listeners[type].push(listener)
		return
	###*
	*登録されている全てのリスナーオブジェクトを削除します。
	*
	###
	removeAllListeners:->
		@_listeners.length = 0;
		@_listeners = null
		return
	###*
	*イベントリスナーを削除します。	
	*@param {String} EventType
	*@param {Function} listener
	###
	removeEventListener:(type,listener)->
		if !@hasEventListener(type)
			return

		for val,i in @_listeners[type]
			if val is listener
				@_listeners[type].splice(i,1)
		return


ExecutorObjectState = {
	dispose:-1
	init:0
	executing:1
	complete:2
	interruput:3
}

class Command extends EventDispatcher
	_state:0
	_className:"Command"
	_executeFunction:null
	_interruptFunction:null
	latestData:null

	constructor:(executeFunction,interruptFunction,className)->
		@_state             = 0
		@_className         = className
		@_executeFunction   = executeFunction
		@_interruptFunction = interruptFunction
		return
	executeComplete:->
		@_state = 2
		@dispatchEvent("executeComplete")
		@dispose()
		return
	execute:->
		@_state = 1
		@_executeFunction.apply(@);
		return
	interrupt:->
		@_state = 3
		@_interruptFunction.apply(@);
		@dispatchEvent("executeInterrupt")
		@dispose()
		return
	getState:->
		return @_state
	dispose:->
		@_state = -1
		@removeAllListeners()
		return

class CommandList extends Command
	_commands:null
	_position:0
	_current:null
	constructor:(className)->
		@_commands = []
		@_position = 0
		super(@__executeFunction,@__interruptFunction,className)
	__executeFunction:->
		return
	__interruptFunction:->
		return
	_addCommandAt:(command,pos)->
		@_commands[pos] = command
		return
	getNumCommands:->
		return @_commands.length
	getPosition:->
		return @_position
	hasNext:->
		return @_position < @getNumCommands()
	next:->
		return if @hasNext() then @_commands[@_position++] else null
	addCommand:(args...)->
		for val,i in args
			if val?
				if val instanceof Array
					if @_className is "SerialList"
						p = new ParallelList()
						p.addCommand.apply(p,val)
						@_addCommandAt(p,@getNumCommands())
					else
						s = new SerialList()
						s.addCommand.apply(s,val)
						@_addCommandAt(s,@getNumCommands())
				else if val instanceof Function
					@_addCommandAt(new Func(val),@getNumCommands())
				else if !isNaN(val)
					@_addCommandAt(new Wait(val),@getNumCommands())
				else
					@_addCommandAt(val,@getNumCommands())
		return
	insertCommand:(args...)->
		for val,i in args
			if val?
				if val instanceof Array
					if @_className is "SerialList"
						p = new ParallelList()
						p.addCommand.apply(p,val)
						@_addCommandAt(p,@getNumCommands())
					else
						s = new SerialList()
						s.addCommand.apply(s,val)
						@_addCommandAt(s,@getNumCommands())
				else if val instanceof Function
					@_addCommandAt(new Func(val),@getNumCommands())
				else if !isNaN(val)
					@_addCommandAt(new Wait(val),@getNumCommands())
				else
					@_addCommandAt(val,@getNumCommands())
		return
	dispose:->
		@_commands.length = 0
		@_commands = null
		super
		return
class SerialList extends CommandList

	constructor:->
		@_current = null
		super("SerialList")
	getCurrent:->
		return @_current;
	__executeFunction:->
		if @hasNext()
			owner = @
			@_current = @next()
			@_current.addEventListener("executeComplete",(e)->
				@_onChildExecuteComplete()
				e.target.removeEventListener("executeComplete",arguments.callee)
				return
			)
			@_current.execute()
		return
	_onChildExecuteComplete:->
		if @hasNext()
			@__executeFunction()
		else
			@executeComplete()
		return
	__interruptFunction:->
		if @_current? 
			@_current.interrupt()
		@interrupt()
		return
class ParallelList extends CommandList
	constructor:->
		@_current = null
		super("ParallelList")
	getCurrent:->
		return @_current;
	__executeFunction:->
		owner = @
		for val,i in @_commands
			val.addEventListener("executeComplete",(e)->
				owner._onChildExecuteComplete()
				e.target.removeEventListener("executeComplete",arguments.callee)
				return
			)
		for val,i in @_commands
			val.execute()

		return
	_onChildExecuteComplete:->
		for val,i in @_commands
			if val.getState() isnt 2 then return
		
		@executeComplete()
		return
	__interruptFunction:->
		for val,i in @_commands
			if val.getState() >= 0
				val.interrupt()
				val.removeAllListeners()
		@interrupt()
		return
class Listen extends Command
	_dispatcher:null
	_event:null
	constructor:(dispatcher,event)->
		@_dispatcher = dispatcher
		@_event      = event
		super(@__executeFunction,@__interruptFunction,"Listen")
	__executeFunction:->
		owner = @
		@_dispatcher.addEventListener(@_event.getType(),(e)->
			owner._dispatcher.removeEventListener(owner._event.getType(),arguments.callee)
			owner.executeComplete()
		)
		return
	__interruptFunction:->
		@_dispatcher.removeAllListeners()
		return
class Func extends Command
	_func:null
	_caller:null
	_params:null
	constructor:(func,caller,params)->
		@_func = func
		@_caller = caller or @
		@_params = params or []
		super(@__executeFunction,@__interruptFunction,"Func")
	__executeFunction:->
		@_func.apply(@_caller,@_params);
		@executeComplete()
		return
	__interruptFunction:->
		return
class Wait extends Command
	_time:0
	_timer_id:null
	constructor:(time)->
		@_time = time
		@_timer_id = null
		super(@__executeFunction,@__interruptFunction,"Wait")
	__executeFunction:->
		owner = @
		@_timer_id = setTimeout(()->
			clearTimeout(owner._timer_id)
			owner.executeComplete()
		,@_time * 1000)
		return
	__interruptFunction:->
		if @_timer_id? then clearTimeout(@_timer_id)
		return


window.jp = window.jp || {}
window.jp.contents = window.jp.contents || {}
window.jp.contents.events = window.jp.contents.events || {}
window.jp.contents.events.Event = Event
window.jp.contents.events.EventDispatcher = EventDispatcher

window.jp.contents.command = window.jp.contents.command || {}
window.jp.contents.command.Command = Command
window.jp.contents.command.CommandList = CommandList
window.jp.contents.command.SerialList = SerialList
window.jp.contents.command.ParallelList = ParallelList
# window.jp.contents.command.DoTween = DoTween
window.jp.contents.command.Wait = Wait
window.jp.contents.command.Func = Func
window.jp.contents.command.Listen = Listen
