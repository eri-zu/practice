RADIAN = Math.PI / 180
isCSS3DEnable = jp.contents.util.Application.isCSS3DEnable
class BaseProxy
	_sufixes:null
	_propList:null
	_strList:null
	constructor:->
		
	fixString:->

	changeSuffix:(name,unit)->

class TransformProxy extends BaseProxy
	@isControledProperty:(propName)->
		return TransformProxy._SUFFIX_BASE.hasOwnProperty(propName)
	@_PROP_LIST:["x","y","z","scaleX","scaleY","rotation","rotationX","rotationY","rotationZ","skewX","skewY"]
	@_SUFFIX_BASE:{
		"x":"px",
		"y":"px",
		"z":"px",
		"scaleX":"",
		"scaleY":"",
		"rotation":"deg",
		"rotationX":"deg",
		"rotationY":"deg",
		"rotationZ":"deg",
		"skewX":"deg",
		"skewY":"deg"
	}
	_x :0
	_y :0
	_z :0
	_scaleX :1
	_scaleY :1
	_rotation :0
	_rotationX :0
	_rotationY :0
	_rotationZ :0
	_skewX :0
	_skewY :0
	_propList:null
	_sufixes:null
	_strList:null
	constructor:->
		@_propList = [].concat(TransformProxy._PROP_LIST)
		@_strList = []
		@_sufixes = {}
		obj = TransformProxy._SUFFIX_BASE
		for name of obj
			@_sufixes[name] = obj[name]
	fixString:->
		return VenderInfo.cssVender + "transform:" + @_strList.join(" ") + ";"
	changeSuffix:(name,unit)->
		b = @_sufixes[name]
		@_sufixes[name] = unit
		return b
Object.defineProperty(TransformProxy.prototype,"x",{
	get:->
		return @_x
	set:(value)->
		@_x = value
		@_strList[0] = "translateX(" + ((~~(value * 1000)) * .001) + @_sufixes.x + ")"
		return
})
Object.defineProperty(TransformProxy.prototype,"y",{
	get:->
		return @_y
	set:(value)->
		@_y = value
		@_strList[1] = "translateY(" + ((~~(value * 1000)) * .001) + @_sufixes.y + ")"
		return
})

Object.defineProperty(TransformProxy.prototype,"scaleX",{
	get:->
		return @_scaleX
	set:(value)->
		@_scaleX = value
		@_strList[3] = "scaleX(" + ((~~(value * 1000)) * .001) + @_sufixes.scaleX + ")"
		return
})
Object.defineProperty(TransformProxy.prototype,"scaleY",{
	get:->
		return @_scaleY
	set:(value)->
		@_scaleY = value
		@_strList[4] = "scaleY(" + ((~~(value * 1000)) * .001) + @_sufixes.scaleY + ")"
		return
})
Object.defineProperty(TransformProxy.prototype,"rotation",{
	get:->
		return @_rotation
	set:(value)->
		@_rotation = value
		@_strList[5] = "rotate(" + ((~~(value * 1000)) * .001) + @_sufixes.rotation + ")"
		return
})

Object.defineProperty(TransformProxy.prototype,"skewX",{
	get:->
		return @_skewX
	set:(value)->
		@_skewX = value
		@_strList[9] = "skewX(" + ((~~(value * 1000)) * .001) + @_sufixes.skewX + ")"
		return
})
Object.defineProperty(TransformProxy.prototype,"skewY",{
	get:->
		return @_skewY
	set:(value)->
		@_skewY = value
		@_strList[10] = "skewY(" + ((~~(value * 1000)) * .001) + @_sufixes.skewY + ")"
		return
})
if isCSS3DEnable
	Object.defineProperty(TransformProxy.prototype,"z",{
		get:->
			return @_z
		set:(value)->
			@_z = value
			@_strList[2] = "translateZ(" + ((~~(value * 1000)) * .001) + @_sufixes.z + ")"
			return
		})
	Object.defineProperty(TransformProxy.prototype,"rotationX",{
		get:->
			return @_rotationX
		set:(value)->
			@_rotationX = value
			@_strList[6] = "rotateX(" + ((~~(value * 1000)) * .001) + @_sufixes.rotationX + ")"
			return
		})
	Object.defineProperty(TransformProxy.prototype,"rotationY",{
		get:->
			return @_rotationY
		set:(value)->
			@_rotationY = value
			@_strList[7] = "rotateY(" + ((~~(value * 1000)) * .001) + @_sufixes.rotationY + ")"
			return
	})
	Object.defineProperty(TransformProxy.prototype,"rotationZ",{
		get:->
			return @_rotationZ
		set:(value)->
			@_rotationZ = value
			@_strList[8] = "rotateZ(" + ((~~(value * 1000)) * .001) + @_sufixes.rotationZ + ")"
			return
	})
class Css2Proxy extends BaseProxy
	@_PROP_LIST = []
	@_SUFFIX_BASE = {}
	_propList:null
	_strList:null
	_subList:null
	_sufixes:null
	@isControledProperty:(propName)->
		return Css2Proxy._SUFFIX_BASE[propName] isnt undefined
	@registerParam:(name,innerName,def,getterSetter,suffix)->
		Object.defineProperty(Css2Proxy.prototype,name,getterSetter)
		Css2Proxy.prototype[innerName] = def
		Css2Proxy._SUFFIX_BASE[name] = suffix
		return
	constructor:->
		@_propList = [].concat(Css2Proxy._PROP_LIST)
		@_strList = {}
		@_subList = {}
		@_sufixes = {}
		obj = Css2Proxy._SUFFIX_BASE
		for name of obj
			@_sufixes[name] = obj[name]
	fixString:->
		str = ""

		for name of @_strList
			str += @_strList[name]
		return str
	changeSuffix:(name,unit)->
		b = @_sufixes[name]
		@_sufixes[name] = unit
		return b
Css2Proxy.registerParam("left","_left",0,{
	get:->
		return @_left
	set:(value)->
		@_left = value
		@_strList.left = "left:" + ((~~(value * 1000)) * .001) + @_sufixes.left + ";"
		return
},"px")
Css2Proxy.registerParam("right","_right",0,{
	get:->
		return @_right
	set:(value)->
		@_right = value
		@_strList.right = "right:" + ((~~(value * 1000)) * .001) + @_sufixes.right + ";"
		return
},"px")
Css2Proxy.registerParam("top","_top",0,{
	get:->
		return @_top
	set:(value)->
		@_top = value
		@_strList.top = "top:" + ((~~(value * 1000)) * .001) + @_sufixes.top + ";"
		return
},"px")
Css2Proxy.registerParam("bottom","_bottom",0,{
	get:->
		return @_bottom
	set:(value)->
		@_bottom = value
		@_strList.bottom = "bottom:" + ((~~(value * 1000)) * .001) + @_sufixes.bottom + ";"
		return
},"px")
Css2Proxy.registerParam("width","_width",0,{
	get:->
		return @_width
	set:(value)->
		@_width = value
		@_strList.width = "width:" + ((~~(value * 1000)) * .001) + @_sufixes.width + ";"
		return
},"px")
Css2Proxy.registerParam("height","_height",0,{
	get:->
		return @_height
	set:(value)->
		@_height = value
		@_strList.height = "height:" + ((~~(value * 1000)) * .001) + @_sufixes.height + ";"
		return
},"px")
Css2Proxy.registerParam("alpha","_alpha",1,{
	get:->
		return @_alpha
	set:(value)->
		@_alpha = value
		@_strList.alpha = "opacity:" + ((~~(value * 1000)) * .001) + @_sufixes.alpha + ";"
		return
},"")
Css2Proxy.registerParam("backgroundPositionX","_backgroundPositionX",0,{
	get:->
		return @_backgroundPositionX
	set:(value)->
		@_backgroundPositionX = value
		bxstr = @_subList.backgroundPositionX = ((~~(value * 1000)) * .001) + @_sufixes.backgroundPositionX
		bystr = if @_subList.backgroundPositionY is undefined then "0" else @_subList.backgroundPositionY
		@_strList.backgroundPosition = "background-position:" + bxstr + " " + bystr + ";"
		return
},"px")
Css2Proxy.registerParam("backgroundPositionY","_backgroundPositionY",0,{
	get:->
		return @_backgroundPositionY
	set:(value)->
		@_backgroundPositionY = value
		bystr = @_subList.backgroundPositionY = ((~~(value * 1000)) * .001) + @_sufixes.backgroundPositionY
		bxstr = if @_subList.backgroundPositionX is undefined then "0" else @_subList.backgroundPositionX
		@_strList.backgroundPosition = "background-position:" + bxstr + " " + bystr + ";"
		return
},"px")
toPropName = VenderInfo.cssVender + "transform-origin"
Css2Proxy.registerParam("transformOriginX","_transformOriginX",0,{
	get:->
		return @_transformOriginX
	set:(value)->
		@_transformOriginX = value
		bxstr = @_subList.transformOriginX = ((~~(value * 1000)) * .001) + @_sufixes.transformOriginX
		bystr = if @_subList.transformOriginY is undefined then "50%" else @_subList.transformOriginY
		@_strList.transformOrigin = toPropName + ":" + bxstr + " " + bystr + ";"
		return
},"%")
Css2Proxy.registerParam("transformOriginY","_transformOriginY",0,{
	get:->
		return @_transformOriginY
	set:(value)->
		@_transformOriginY = value
		bystr = @_subList.transformOriginY = ((~~(value * 1000)) * .001) + @_sufixes.transformOriginY
		bxstr = if @_subList.transformOriginX is undefined then "50%" else @_subList.transformOriginX
		@_strList.transformOrigin = toPropName + ":"  + bxstr + " " + bystr + ";"
		return
},"%")
Css2Proxy.registerParam("margin","_margin",0,{
	get:->
		return @_margin
	set:(value)->
		@_margin = value
		@_strList.margin = "margin:" + ((~~(value * 1000)) * .001) + @_sufixes.margin + ";"
		return
},"px")
Css2Proxy.registerParam("padding","_padding",0,{
	get:->
		return @_padding
	set:(value)->
		@_padding = value
		@_strList.padding = "padding:" + ((~~(value * 1000)) * .001) + @_sufixes.padding + ";"
		return
},"px")
Css2Proxy.registerParam("marginLeft","_marginLeft",0,{
	get:->
		return @_marginLeft
	set:(value)->
		@_marginLeft = value
		@_strList.marginLeft = "margin-left:" + ((~~(value * 1000)) * .001) + @_sufixes.marginLeft + ";"
		return
},"px")
Css2Proxy.registerParam("marginRight","_marginRight",0,{
	get:->
		return @_marginRight
	set:(value)->
		@_marginRight = value
		@_strList.marginRight = "margin-right:" + ((~~(value * 1000)) * .001) + @_sufixes.marginRight + ";"
		return
},"px")
Css2Proxy.registerParam("marginTop","_marginTop",0,{
	get:->
		return @_marginTop
	set:(value)->
		@_marginTop = value
		@_strList.marginTop = "margin-top:" + ((~~(value * 1000)) * .001) + @_sufixes.marginTop + ";"
		return
},"px")
Css2Proxy.registerParam("marginBottom","_marginBottom",0,{
	get:->
		return @_marginBottom
	set:(value)->
		@_marginBottom = value
		@_strList.marginBottom = "margin-bottom:" + ((~~(value * 1000)) * .001) + @_sufixes.marginBottom + ";"
		return
},"px")
Css2Proxy.registerParam("paddingLeft","_paddingLeft",0,{
	get:->
		return @_paddingLeft
	set:(value)->
		@_paddingLeft = value
		@_strList.paddingLeft = "padding-left:" + ((~~(value * 1000)) * .001) + @_sufixes.paddingLeft + ";"
		return
},"px")
Css2Proxy.registerParam("paddingRight","_paddingRight",0,{
	get:->
		return @_paddingRight
	set:(value)->
		@_paddingRight = value
		@_strList.paddingRight = "padding-right:" + ((~~(value * 1000)) * .001) + @_sufixes.paddingRight + ";"
		return
},"px")
Css2Proxy.registerParam("paddingTop","_paddingTop",0,{
	get:->
		return @_paddingTop
	set:(value)->
		@_paddingTop = value
		@_strList.paddingTop = "padding-top:" + ((~~(value * 1000)) * .001) + @_sufixes.paddingTop + ";"
		return
},"px")
Css2Proxy.registerParam("paddingBottom","_paddingBottom",0,{
	get:->
		return @_paddingBottom
	set:(value)->
		@_paddingBottom = value
		@_strList.paddingBottom = "padding-bottom:" + ((~~(value * 1000)) * .001) + @_sufixes.paddingBottom + ";"
		return
},"px")
Css2Proxy.registerParam("visible","_visible",0,{
	get:->
		return @_visible
	set:(value)->
		@_visible = value
		@_strList.visible = "visibility:" + (if value then "visible" else "hidden") + ";"
		return
},"")
Css2Proxy.registerParam("display","_display",0,{
	get:->
		return @_display
	set:(value)->
		@_display = value
		@_strList.display = "display:" + value + ";"
		return
},"")
Css2Proxy.registerParam("zIndex","_zIndex",0,{
	get:->
		return @_zIndex
	set:(value)->
		@_zIndex = value
		@_strList.zIndex = "zIndex:" + (~~(value)) + ";"
		return
},"")
Css2Proxy.registerParam("backgroundColor","_backgroundColor",0x000000,{
	get:->
		return @_backgroundColor
	set:(value)->
		# def = ~~((value - @_backgroundColor) / 3)
		# bc = @_backgroundColor
		# r = bc >> 16 & 0xff
		# g = bc >> 8  & 0xff
		# b = bc & 0xff
		# r += def
		# g += def
		# b += def

		# @_backgroundColor = 0
		# @_backgroundColor |= r << 16
		# @_backgroundColor |= g << 8
		# @_backgroundColor |= b
		# value = @_backgroundColor
		@_backgroundColor = value
		# console.log(parseInt(value).toString(16))
		@_strList.backgroundColor = "background-color:#" + parseInt(value).toString(16) + ";"
		return
},"")
Css2Proxy.registerParam("borderRadius","_borderRadius",0,{
	get:->
		return @_borderRadius
	set:(value)->
		@_borderRadius = value
		@_strList.borderRadius = "border-radius:" + ((~~(value * 1000)) * .001) + @_sufixes.borderRadius + ";"
		return
},"px")
class FilterProxy extends BaseProxy
	@isControledProperty:(propName)->
		return FilterProxy._SUFFIX_BASE.hasOwnProperty(propName)
	@_PROP_LIST:["grayscale","sepia","saturate","hueRotate","invert","brightness","contrast","blur"]
	@_styleName = VenderInfo.cssVender + "filter"
	@_SUFFIX_BASE:{
		"grayscale":"%",
		"sepia":"%",
		"saturate":"%",
		"hueRotate":"deg",
		"invert":"%",
		"brightness":"%",
		"contrast":"%",
		"blur":"px"
	}
	_grayscale:0
	_sepia:0
	_saturate:0
	_hueRotate:0
	_invert:0
	_brightness:0
	_contrast:0
	_blur:0
	_propList:null
	_sufixes:null
	_strList:null
	constructor:->
		@_propList = [].concat(FilterProxy._PROP_LIST)
		@_strList = []
		@_sufixes = {}
		obj = FilterProxy._SUFFIX_BASE
		for name of obj
			@_sufixes[name] = obj[name]
	fixString:->
		return FilterProxy._styleName + ":" + @_strList.join(" ") + ";"
Object.defineProperty(FilterProxy.prototype,"grayscale",{
	get:->
		return @_grayscale
	set:(value)->
		@_grayscale = value
		@_strList[0] = "grayscale(" + ((~~(value * 1000)) * .001) + @_sufixes.grayscale + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"sepia",{
	get:->
		return @_sepia
	set:(value)->
		@_sepia = value
		@_strList[1] = "sepia(" + ((~~(value * 1000)) * .001) + @_sufixes.sepia + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"saturate",{
	get:->
		return @_saturate
	set:(value)->
		@_saturate = value
		@_strList[2] = "saturate(" + ((~~(value * 1000)) * .001) + @_sufixes.saturate + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"hueRotate",{
	get:->
		return @_hueRotate
	set:(value)->
		@_hueRotate = value
		@_strList[3] = "hue-rotate(" + ((~~(value * 1000)) * .001) + @_sufixes.hueRotate + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"invert",{
	get:->
		return @_invert
	set:(value)->
		@_invert = value
		@_strList[4] = "invert(" + ((~~(value * 1000)) * .001) + @_sufixes.invert + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"brightness",{
	get:->
		return @_brightness
	set:(value)->
		@_brightness = value
		@_strList[5] = "brightness(" + ((~~(value * 1000)) * .001) + @_sufixes.brightness + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"contrast",{
	get:->
		return @_contrast
	set:(value)->
		@_contrast = value
		@_strList[6] = "contrast(" + ((~~(value * 1000)) * .001) + @_sufixes.contrast + ")"
		return
})
Object.defineProperty(FilterProxy.prototype,"blur",{
	get:->
		return @_blur
	set:(value)->
		@_blur = value
		@_strList[7] = "blur(" + ((~~(value * 1000)) * .001) + @_sufixes.blur + ")"
		return
})
class ScrollProxy extends BaseProxy
	@isControledProperty:(propName)->
		return ScrollProxy._PROP_LIST.indexOf(propName) > -1
	@_PROP_LIST:["scrollTop","scrollLeft"]
	_scrollLeft:0
	_scrollTop:0
	_target:null
	constructor:(target)->
		@_target = target
		@_scrollTop = @_target.scrollTop
		@_scrollLeft = @_target.scrollLeft
	apply:->
		@_target.scrollTop = ((~~(@_scrollTop * 1000)) * .001)
		@_target.scrollLeft = ((~~(@_scrollLeft * 1000)) * .001)
		return
# class ColorProxy extends BaseProxy

Object.defineProperty(ScrollProxy.prototype,"scrollTop",{
	get:->
		return @_scrollTop
	set:(value)->
		@_scrollTop = value
		# @_target.scrollTop = ((~~(value * 1000)) * .001)
		return
})
Object.defineProperty(ScrollProxy.prototype,"scrollLeft",{
	get:->
		return @_scrollLeft
	set:(value)->
		@_scrollLeft = value
		# @_target.scrollLeft = ((~~(value * 1000)) * .001)
		return
})
class StyleProxy
	@_targets = new LinkedList()
	@getProxy:(target)->
		f = StyleProxy._targets.getFirst()
		while f
			if f.elm._target is target
				return f.elm
			f = f.next

		if target.style isnt undefined
			obj = new StyleProxy(target)
		else
			obj = new ObjectProxy(target)

		StyleProxy._targets.push(obj)
		return obj
	_target:null
	_transformProxy:null
	_css2Proxy:null
	_filterProxy:null
	_scrollProxy:null
	_tweens:null
	constructor:(target)->
		@_target = target
		@_tweens = new LinkedList()
	registerTween:(tween,fixOnly = false)->
		to = tween._to
		from = tween._from
		c = {}
		tl = @_tweens
		for name of to
			if TransformProxy.isControledProperty(name)
				@_transformProxy = @_transformProxy || new TransformProxy()
				proxy = @_transformProxy
			else if Css2Proxy.isControledProperty(name)
				@_css2Proxy = @_css2Proxy || new Css2Proxy()
				proxy = @_css2Proxy
			else if FilterProxy.isControledProperty(name)
				@_filterProxy = @_filterProxy || new FilterProxy()
				proxy = @_filterProxy
			else if ScrollProxy.isControledProperty(name)
				@_scrollProxy = @_scrollProxy || new ScrollProxy(@_target)
				proxy = @_scrollProxy

			if proxy is null
				continue
			fp = 0
			if from and !isNaN(from[name])
				fp = from[name]
			else
				fp = proxy[name]
			c[name] = to[name] - fp
			from[name] = fp
			if fixOnly
				continue
			f = tl.getFirst()
			find = false
			while f
				if f.elm.name is name
					find = true
					f.elm.tween = tween
					break
				f = f.next

			if !find
				tl.push({name:name,tween:tween,proxy:proxy})
		Render.addListener(@)
		return c
	applyStyles:->
		if @_scrollProxy
			@_scrollProxy.apply()
		@_target.style.cssText = (if @_transformProxy isnt null then @_transformProxy.fixString() else "") + 
								(if @_css2Proxy isnt null then @_css2Proxy.fixString() else "") + 
								(if @_filterProxy isnt null then @_filterProxy.fixString() else "") 
		return
	getProxy:(prop)->
		if TransformProxy.isControledProperty(prop)
			@_transformProxy = @_transformProxy || new TransformProxy()
			proxy = @_transformProxy
		else if Css2Proxy.isControledProperty(prop)
			@_css2Proxy = @_css2Proxy || new Css2Proxy()
			proxy = @_css2Proxy
		else if FilterProxy.isControledProperty(prop)
			@_filterProxy = @_filterProxy || new FilterProxy()
			proxy = @_filterProxy
		else if ScrollProxy.isControledProperty(prop)
			@_scrollProxy = @_scrollProxy || new ScrollProxy(@_target)
			proxy = @_scrollProxy
		return proxy
	update:(ct)->
		f = if @_tweens then @_tweens.getFirst() else null
		while f
			tw = f.elm.tween
			if !tw
				f = f.next
				continue
			if tw._state is TweenState.Completed or tw._state is TweenState.Playing
				tw.update(ct,f.elm.name,f.elm.proxy)
			f = f.next
		@applyStyles()
		
		f = if @_tweens then @_tweens.getFirst() else null
		mcount = 0

		while f
			tw = f.elm.tween
			if !tw
				f = f.next
				continue
			
			if tw._state is TweenState.Completed
				tw.tickUpdate()
				f.elm.tween = null
				tw.finalize()
				mcount = 1
			else if tw._state is TweenState.Playing
				tw.tickUpdate()
				mcount = 1
			else if tw._state is TweenState.Stoped
				f.elm.tween = null
			else if tw._state is TweenState.Initialized
				mcount = 1
			f = f.next

		if mcount is 0
			Render.removeListener(@)		
		return
	applyProperties:(properties,applyStyles)->
		change = false
		before = {}
		# console.log(properties)
		for name of properties
			proxy = null
			if TransformProxy.isControledProperty(name)
				@_transformProxy = @_transformProxy || new TransformProxy()
				proxy = @_transformProxy
			else if Css2Proxy.isControledProperty(name)
				@_css2Proxy = @_css2Proxy || new Css2Proxy()
				proxy = @_css2Proxy
			else if FilterProxy.isControledProperty(name)
				@_filterProxy = @_filterProxy || new FilterProxy()
				proxy = @_filterProxy
			else if ScrollProxy.isControledProperty(name)
				@_scrollProxy = @_scrollProxy || new ScrollProxy(@_target)
				proxy = @_scrollProxy
			if proxy isnt null
				change = true
				before[name] = proxy[name]
				proxy[name] = properties[name]
		if change and applyStyles
			@applyStyles()

		return before
	changeUnit:(properties)->
		change = false
		before = {}
		for name of properties
			proxy = null
			if TransformProxy.isControledProperty(name)
				@_transformProxy = @_transformProxy || new TransformProxy()
				proxy = @_transformProxy
			else if Css2Proxy.isControledProperty(name)
				@_css2Proxy = @_css2Proxy || new Css2Proxy()
				proxy = @_css2Proxy
			else if FilterProxy.isControledProperty(name)
				@_filterProxy = @_filterProxy || new FilterProxy()
				proxy = @_filterProxy
			else if ScrollProxy.isControledProperty(name)
				@_scrollProxy = @_scrollProxy || new ScrollProxy(@_target)
				proxy = @_scrollProxy
			if proxy isnt null
				change = true
				before[name] = proxy.changeSuffix(name,properties[name])
		return before
Object.defineProperty(StyleProxy.prototype,"transformProxy",{
	get:->
		return @_transformProxy
})
Object.defineProperty(StyleProxy.prototype,"css2Proxy",{
	get:->
		return @_css2Proxy
})
Object.defineProperty(StyleProxy.prototype,"filterProxy",{
	get:->
		return @_filterProxy
})
class ObjectProxy extends BaseProxy
	_target:null
	_tweens:null
	constructor:(target)->
		@_target = target
		@_tweens = new LinkedList()
	applyStyles:->
		f = @_tweens.getFirst()
		while f
			n = f.elm.name
			@_target[n] = @[n]
			f = f.next
		return
	getProxy:->
		return @
	applyProperties:(properties,applyStyles)->
		for name of properties
			if @[name] isnt null
				@[name] = properties[name]
				@_target[name] = properties[name]
		return
	registerTween:(tween,fixOnly = false)->
		to = tween._to
		from = tween._from
		c = {}
		tw = @_tweens
		for name of to
			fp = 0
			if from and !isNaN(from[name])
				fp = from[name]
			else if !isNaN(@_target[name])
				fp = @_target[name]
			else
				fp = 0
			c[name] = to[name] - fp
			@[name] = fp
			from[name] = fp
			f = tw.getFirst()
			find = false
			while f
				if f.elm.name is name
					find = true
					f.elm.tween = tween
					break
				f = f.next
			if !find
				tw.push({name:name,tween:tween})
		if fixOnly
			return c
		Render.addListener(@)
		return c
	update:(ct)->
		f = @_tweens.getFirst()
		while f
			tw = f.elm.tween
			if !tw
				f = f.next
				continue
			if tw._state is TweenState.Completed or tw._state is TweenState.Playing
				tw.update(ct,f.elm.name,@)
			f = f.next
		@applyStyles()
		@fixTweens()
		return
	fixTweens:->
		f = @_tweens.getFirst()
		mcount = 0
		while f
			tw = f.elm.tween
			if !tw 
				f = f.next
				continue
			if tw._state is TweenState.Completed
				f.elm.tween = null
				tw.tickUpdate()
				tw.finalize()
				mcount = 1
			else if tw._state is TweenState.Playing
				tw.tickUpdate()
				mcount = 1
			else if tw._state is TweenState.Stoped
				f.elm.tween = null
			else if tw._state is TweenState.Initialized
				mcount = 1
			f = f.next
		if mcount is 0
			Render.removeListener(@)
		return
