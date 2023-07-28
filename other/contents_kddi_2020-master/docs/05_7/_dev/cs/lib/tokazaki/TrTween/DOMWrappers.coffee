class TSW
	@_propList = {
		"x":{
			prefix:"translateX(",
			sufix:"px) ",
			index:0
		},
		"y":{
			prefix:"translateY(",
			sufix:"px) ",
			index:1	
		},
		"z":{
			prefix:"translateZ(",
			sufix:"px) ",
			index:2
		},
		"rotation":{
			prefix:"rotate(",
			sufix:"deg) ",
			index:3
		},
		"rotationX":{
			prefix:"rotateX(",
			sufix:"deg) ",
			index:4
		},
		"rotationY":{
			prefix:"rotateY(",
			sufix:"deg) ",
			index:5
		},
		"rotationZ":{
			prefix:"rotateZ(",
			sufix:"deg) ",
			index:6
		},
		"skewX":{
			prefix:"skewX(",
			sufix:"deg) ",
			index:7
		},
		"skewY":{
			prefix:"skewY(",
			sufix:"deg) ",
			index:8
		},
		"scaleX":{
			prefix:"scaleX(",
			sufix:") ",
			index:9
		},
		"scaleY":{
			prefix:"scaleY(",
			sufix:") ",
			index:10
		}
	}
	@_properties = [
		"x",
		"y",
		"z",
		"rotation",
		"rotationX",
		"rotationY",
		"rotationZ",
		"skewX",
		"skewY",
		"scaleX",
		"scaleY"
	]
	@_defaults = {
		x:0,
		y:0,
		z:0,
		rotation:0,
		rotationX:0,
		rotationY:0,
		rotationZ:0,
		scaleX:1,
		scaleY:1,
		skewX:0,
		skewY:0
	}
	@_styleName = VenderInfo.cssVender + "transform"
	_sufixes:null
	_parsePropaties:->
		owner = @
		m = owner._mapper
		targetTransform = m._target.style[@_sname]

		if isFIE or targetTransform is undefined
			return

		r = /(translateX\()([0-9||\.||-||e-]+)(px\))/
		if targetTransform.match(r) 
			m.x = targetTransform.match(r)[2] * 1
			owner.pushProperty("x")
		else 
			m.x = NaN

		r = /(translateY\()([0-9||\.||-||e-]+)(px\))/
		if targetTransform.match(r)
			m.y = targetTransform.match(r)[2] * 1 
			owner.pushProperty("y")
		else
			m.y = NaN

		r = /(translateZ\()([0-9||\.||-||e-]+)(px\))/
		if targetTransform.match(r)
			m.z = targetTransform.match(r)[2] * 1 
			owner.pushProperty("z")
		else
			m.z = NaN

		r = /(rotate\()([0-9||\.||-||e-]+)(deg\))/
		if targetTransform.match(r)
			m.rotation = targetTransform.match(r)[2] * 1 
			owner.pushProperty("rotation")
		else
			m.rotation = NaN

		r = /(rotateX\()([0-9||\.||-||e-]+)(deg\))/
		if targetTransform.match(r)
			m.rotationX = targetTransform.match(r)[2] * 1 
			owner.pushProperty("rotationX")
		else
			m.rotationX = NaN

		r = /(rotateY\()([0-9||\.||-||e-]+)(deg\))/
		if targetTransform.match(r)
			m.rotationY = targetTransform.match(r)[2] * 1 
			owner.pushProperty("rotationY")
		else
			m.rotationY = NaN

		r = /(rotateZ\()([0-9||\.||-||e-]+)(deg\))/
		if targetTransform.match(r)
			m.rotationZ = targetTransform.match(r)[2] * 1 
			owner.pushProperty("rotationZ")
		else
			m.rotationZ = NaN

		r = /(skewX\()([0-9||\.||-||e-]+)(deg\))/
		if targetTransform.match(r)
			m.skewX = targetTransform.match(r)[2] * 1 
			owner.pushProperty("skewX")
		else
			m.skewX = NaN

		r = /(skewY\()([0-9||\.||-||e-]+)(deg\))/
		if targetTransform.match(r)
			m.skewY = targetTransform.match(r)[2] * 1 
			owner.pushProperty("skewY")
		else
			m.skewY = NaN

		r = /(scaleX\()([0-9||\.||-||e-]+)(\))/
		if targetTransform.match(r)
			m.scaleX = targetTransform.match(r)[2] * 1 
			owner.pushProperty("scaleX")
		else
			m.scaleX = NaN

		r = /(scaleY\()([0-9||\.||-||e-]+)(\))/
		if targetTransform.match(r)
			m.scaleY = targetTransform.match(r)[2] * 1 
			owner.pushProperty("scaleY")
		else
			m.scaleY = NaN

		return
	constructor:(mapper)->
		@_mapper = mapper
		@_sname  = TSW._styleName
		@_props  = TSW._propList
		@_hasProperties = [null,null,null,null,null,null,null,null,null,null,null]
		@_sufixes = {}
		for name of @_props
			@_sufixes[name] = @_props[name].sufix
		@toStyleString = ->
			return ""
		@_parsePropaties()
		return
	changeUnit:(props)->
		before = {}
		for val of props
			if @_sufixes[val] isnt undefined
				sufix = props[val]
				before[val] = @_sufixes[val]
				@_sufixes[val] = sufix + ")"
		return before
	pushProperty:(propname)->
		index = TSW._propList[propname].index
		@_hasProperties[index] = propname
		@toStyleString = @_toStyleString		
		return
	_toStyleString:->
		trstr = @_sname + ": "
		m = @_mapper
		p = @_props
		s = @_sufixes
		for val,i in @_hasProperties
			if val is null
				continue
			obj = p[val]
			v = ((m[val] * 1000) | 0) * .001
			trstr += obj.prefix + v + s[val]
		return trstr + ";"

class FSW

	@_propList = {
		"grayscale":{
			prefix:"grayscale(",
			sufix :"%) "
		},
		"sepia":{
			prefix:"sepia(",
			sufix:"%) "
		},
		"saturate":{
			prefix:"saturate(",
			sufix:"%) "
		},
		"hueRotate":{
			prefix:"hue-rotate(",
			sufix:"deg) "
		},
		"invert":{
			prefix:"invert(",
			sufix:"%) "
		},
		"brightness":{
			prefix:"brightness(",
			sufix:"%) "
		},
		"contrast":{
			prefix:"contrast(",
			sufix:"%) "
		},
		"blur":{
			prefix:"blur(",
			sufix:"px) "
		}
	}
	@_styleName = VenderInfo.cssVender + "filter"
	constructor:(mapper)->
		@_mapper = mapper
		@_sname  = FSW._styleName
		@_pl     = FSW._propList
		@_hasProperties = []
		@toStyleString = ->
			return ""
		return
	pushProperty:(propname)->
		if @_hasProperties.indexOf(propname) > -1
			return
		@_hasProperties[@_hasProperties.length] = propname
		@toStyleString = @_toStyleString
		return
	_toStyleString:->
		trstr = @_sname + ": "
		m = @_mapper
		p = @_pl
		for val,i in @_hasProperties
			obj = p[val]
			# v = ((m[val] * 10000) | 0) * .0001
			v = m[val]
			trstr += obj.prefix + v+ obj.sufix
		return trstr + ";"

class CSS2W
	@_propList = {
		top:{
			prefix:"top:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.top * 1000)|0) * .001
				return val + sufix + ";" 
		},
		bottom:{
			prefix:"bottom:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.bottom * 1000)|0) * .001
				return val + sufix + ";" 
		},
		left:{
			prefix:"left:",
			sufix:"px;",
			fixFunc:(m,sufix)->
				val = ((m.left * 1000)|0) * .001
				return val + sufix + ";"
		},
		right:{
			prefix:"right:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.right * 1000)|0) * .001
				return val + sufix + ";"
		},
		width:{
			prefix:"width:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.width * 1000)|0) * .001
				return val + sufix + ";"
		},
		height:{
			prefix:"height:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.height * 1000)|0) * .001
				return val + sufix + ";"
		},
		margin:{
			prefix:"margin:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.margin * 1000)|0) * .001
				return val + sufix + ";"
		}
		marginTop:{
			prefix:"margin-top:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.marginTop * 1000)|0) * .001
				return val + sufix + ";"
		},
		marginBottom:{
			prefix:"margin-bottom:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.marginBottom * 1000)|0) * .001
				return val + sufix + ";"
		},
		marginLeft:{
			prefix:"margin-left:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.marginLeft * 1000)|0) * .001
				return val + sufix + ";"
		},
		marginRight:{
			prefix:"margin-right:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.marginRight * 1000)|0) * .001 
				return val + sufix + ";"
		},
		paddingTop:{
			prefix:"padding-top:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.paddingTop * 1000)|0) * .001
				return val + sufix + ";"
		},
		paddingBottom:{
			prefix:"padding-bottom:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.paddingBottom * 1000)|0) * .001
				return val + sufix + ";"
		},
		paddingLeft:{
			prefix:"padding-left:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.paddingLeft * 1000)|0) * .001
				return val + sufix + ";"
		},
		paddingRight:{
			prefix:"padding-right:",
			sufix:"px",
			fixFunc:(m,sufix)->
				val = ((m.paddingRight * 1000)|0) * .001 
				return val + sufix + ";"
		},
		alpha:{
			prefix:"opacity:",
			sufix:"",
			fixFunc:(m,sufix)->
				val = ((m.alpha * 1000)|0) * .001
				return val + ";"
		},
		backgroundPosition:{
			prefix:"background-position:",
			sufix:"px",
			fixFunc:(m,sufix)->
				vx = ((m.backgroundPositionX * 1000)|0) * .001
				vy = ((m.backgroundPositionY * 1000)|0) * .001
				return vx + sufix + " " + vy + sufix + ";"
		},
		transformOrigin:{
			prefix:VenderInfo.cssVender + "transform-origin"
			sufix:"%"
			fixFunc:(m,sufix)->
				vx = ((m.transformOriginX * 1000)|0) * .001
				vy = ((m.transformOriginY * 1000)|0) * .001
				return vx + sufix + " " + vy + sufix + ";"
		}
		visible:{
			prefix:"visibility:",
			sufix:"",
			fixFunc:(m,sufix)->
				return if m.visible then "visible;" else "hidden;"
		},
		display:{
			prefix:"display:",
			sufix:"",
			fixFunc:(m,sufix)->
				return m.display + ";"
		}
		zIndex:{
			prefix:"z-index:"
			sufix:""
			fixFunc:(m,sufix)->
				return (~~(m.zIndex)) + ";"
		}
	}
	@init:->
		bn = APP_BROWSER.name
		ver = APP_BROWSER.version
		if bn isnt "ie"
			return
		else if bn is "ie" and ver > 8
			return


		if ver >= 8
			CSS2W._propList.alpha = {
				prefix:"zoom:1;-ms-filter:\"alpha(opacity=",
				sufix:"",
				fixFunc:(m,sufix)->
					val = ((m.alpha * 1000)|0) * .1
					return val + ")\";"
				
			}
		else
			CSS2W._propList.alpha = {
				prefix:"zoom:1;filter:alpha(opacity=",
				sufix:"",
				fixFunc:(m,sufix)->
					val = ((m.alpha * 1000)|0) * .1
					return val + ");"
			}
	_parsePropaties:->
		owner = @
		m = owner._mapper
		target = m._target

		if target.style
			
			if !isNaN(parseFloat(target.style.opacity))
				m.alpha = parseFloat(target.style.opacity)
				owner.pushProperty("alpha")
			if !isNaN(parseFloat(target.style.top))
				m.top = parseFloat(target.style.top)
				owner.pushProperty("top")
			if !isNaN(parseFloat(target.style.bottom))
				m.bottom = parseFloat(target.style.bottom)
				owner.pushProperty("bottom")
			if !isNaN(parseFloat(target.style.left))
				m.left = parseFloat(target.style.left)
				owner.pushProperty("left")
			if !isNaN(parseFloat(target.style.right))
				m.right = parseFloat(target.style.right)
				owner.pushProperty("right")
			if !isNaN(parseFloat(target.style.width))
				m.width = parseFloat(target.style.width)
				owner.pushProperty("width")
			if !isNaN(parseFloat(target.style.height))
				m.height = parseFloat(target.style.height)
				owner.pushProperty("height")
			if !isNaN(parseFloat(target.style.marginTop))
				m.marginTop = parseFloat(target.style.marginTop)
				owner.pushProperty("marginTop")
			if !isNaN(parseFloat(target.style.marginBottom))
				m.marginBottom = parseFloat(target.style.marginBottom)
				owner.pushProperty("marginBottom")
			if !isNaN(parseFloat(target.style.marginRight))
				m.marignRight = parseFloat(target.style.marginRight)
				owner.pushProperty("marignRight")
			if !isNaN(parseFloat(target.style.marginLeft))
				m.marginLeft = parseFloat(target.style.marginLeft)
				owner.pushProperty("marignLeft")

			if target.style.backgroundPosition isnt ""
				m.backgroundPositionY = 0
				m.backgroundPositionX = 0
				arr = target.style.backgroundPosition.split(" ")
				px = parseFloat(arr[0])
				py = parseFloat(arr[1])
				if !isNaN(px)
					m.backgroundPositionX = px
				if !isNaN(px)
					m.backgroundPositionY = py
				owner.pushProperty("backgroundPosition")
		return
	constructor:(mapper)->
		@_mapper = mapper
		@_hasProperties = []
		@_pl = CSS2W._propList
		@_sufixes = {}
		for name of @_pl
			@_sufixes[name] = @_pl[name].sufix
		@toStyleString = ->
			return ""
		@_parsePropaties()
		return
	changeUnit:(props)->
		before = {}
		for val of props
			if @_sufixes[val] isnt undefined
				sufix = props[val]
				before[val] = @_sufixes[val]
				@_sufixes[val] = sufix
		return before
	pushProperty:(propname)->
		if propname is "backgroundPositionY" or propname is "backgroundPositionX" or propname is "backgroundPosition"
			if isNaN(@_mapper.backgroundPositionX)
				@_mapper.backgroundPositionX = 0
			if isNaN(@_mapper.backgroundPositionY)
				@_mapper.backgroundPositionY = 0

			propname = "backgroundPosition"
		else if propname is "transformOriginX" or propname is "transformOriginY" or propname is "transformOrigin"
			if isNaN(@_mapper.transformOriginX)
				@_mapper.transformOriginX = 50
			if isNaN(@_mapper.transformOriginY)
				@_mapper.transformOriginY = 50

		if @_hasProperties.indexOf(propname) > -1
			return

		@_hasProperties[@_hasProperties.length] = propname
		@toStyleString = @_toStyleString
		return

	_toStyleString:->
		trstr = ""
		m = @_mapper
		p = @_pl
		s = @_sufixes
		for val,i in @_hasProperties

			if isFIE and val is "alpha" and m.alpha >= 1
				continue
			
			obj = p[val]
			v = obj.fixFunc(m,s[val])
			trstr += obj.prefix + v
		return trstr

CSS2W.init()