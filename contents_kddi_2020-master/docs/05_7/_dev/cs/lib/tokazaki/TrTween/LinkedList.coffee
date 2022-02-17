###*
*片方向LinkedListクラス
*@class LinkedList
*@namespace jp.contents.collections.LinkedList
###
class LinkedList
	_first:null
	_last:null
	length:0
	
	constructor:(first)->
		@_first = null
		@_last = null
		if first
			@_first = {elm:first,next:null}
			@_last = @_first
		@length = if @_first then 1 else 0
		return
	###*
	*先頭のオブジェクトを取得
	*@return Object {Object}
	###
	getFirst:->
		return @_first
	###*
	*Listの末尾に追加
	*@param {Object} element 追加する要素
	###
	push:(elm)->
		obj = {
			elm:elm,
			next:null
		}
		if !@_first
			@_first = obj
		else
			@_last.next = obj
		@_last = obj
		++@length
		return
	###*
	*指定した要素を削除
	*@param {Object} element 削除する要素
	###
	slice:(elm)->
		f = @_first
		b = null
		while f
			if f.elm is elm
				if b
					b.next = f.next
				else
					@_first = f.next

				if f is @_last
					@_last = b
				--@length
			b = f
			f = f.next
		return
	###*
	*先頭のオブジェクトを削除し、削除したオブジェクトを返す
	*@return Object
	###
	shift:->
		b = @_first
		@_first = @first.next
		--@length
		return b
	###*
	*指定した関数を全てのエレメントに実行
	*@param Function
	*@param Array
	###
	map:(func,param)->
		f = @_first
		while f
			func.apply(f.elm,param)
			f = f.next
		return