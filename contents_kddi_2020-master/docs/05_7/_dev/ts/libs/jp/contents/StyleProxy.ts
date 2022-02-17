
import AbstractTween = jp.contents.tween.AbstractTween;
import TweenState = jp.contents.tween.TweenState;
import Render = jp.contents.render.Render;
import ITickerObject = jp.contents.render.ITickerObject;
namespace jp.contents.tween
{
	class VenderInfo
	{
		private static _cssVender:string;
		private static _vender:string;
		private static _transformName:string;
		public static get cssVender():string
		{
			return VenderInfo._cssVender;
		}
		public static get vender():string
		{
			return VenderInfo._vender;
		}
		public static get transformName():string
		{
			return VenderInfo._transformName;
		}
		public static init():void
		{
			var dummy:CSSStyleDeclaration = document.createElement('div').style,
				venders:Array<string> = 't,webkitT,MozT,msT'.split(','),
				i:number = 0,len:number = venders.length,
				val:string;

			for(;i < len;i++)
			{
				val = venders[i];
				if(dummy[val + 'ransform'] != undefined)
				{
					VenderInfo._cssVender = val.substr(0, val.length - 1);
					VenderInfo._transformName = val + 'ransform'

				}
			}
			if(VenderInfo.vender != '')
				VenderInfo._cssVender =  '-' + VenderInfo.vender.toLowerCase() + '-';
			else
				VenderInfo.cssVender = '';

		}

	}
	VenderInfo.init();
	export interface IPropertyProxy
	{
		fixString():string;
		changeSuffix(name:string,unit:string):string;
	}
	class TransformProxy implements IPropertyProxy
	{
		private static _suffix_base:Object = {
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

		private static _prop_list:Array<string> = ["x","y","z","scaleX","scaleY","rotation","rotationX","rotationY","rotationZ","skewX","skewY"];
		public static isControledProperty(propname:string):boolean{ return TransformProxy._suffix_base.hasOwnProperty(propname);}
		private _x:number = 0;
		private _y:number = 0;
		private _z:number = 0;
		private _scaleX:number = 1;
		private _scaleY:number = 1;
		private _scaleZ:number = 1;
		private _rotation:number = 0;
		private _rotationX:number = 0;
		private _rotationY:number = 0;
		private _rotationZ:number = 0;
		private _skewX:number = 0;
		private _skewY:number = 0;
		private _strList:Array<string>;
		private _sufixes:any;
		private _propList:Array<string>;
		constructor()
		{
			this._propList = [].concat(TransformProxy._prop_list);
			this._sufixes = {};
			this._strList = [];
			var obj = TransformProxy._suffix_base,
				name:string;
			for(name in obj) this._sufixes[name] = obj[name];
		}
		public fixString():string
		{
			return VenderInfo.cssVender + 'transform:'  + this._strList.join(" ") + ";";
		}
		public changeSuffix(name:string,unit:string):string
		{
			var b:string = this._sufixes[name];
			this._sufixes[name] = unit;
			return b;
		}
		public get x():number
		{
			return this._x;
		}
		public set x(value:number)
		{
			this._x = value;
			this._strList[0] = "translateX(" + ((~~(value * 1000)) * .001) + this._sufixes.x + ")";
		}
		public get y():number
		{
			return this._y
		}
		public set y(value:number)
		{
			this._y = value;
			this._strList[1] = "translateY(" + ((~~(value * 1000)) * .001) + this._sufixes.y + ")";
		}

		public get scaleX():number
		{
			return this._scaleX;
		}
		public set scaleX(value:number)
		{
			this._scaleX = value;
			this._strList[3] = "scaleX(" + ((~~(value * 1000)) * .001) + this._sufixes.scaleX + ")";
		}
		public get scaleY():number
		{
			return this._scaleY;
		}
		public set scaleY(value:number)
		{
			this._scaleY = value;
			this._strList[4] = "scaleY(" + ((~~(value * 1000)) * .001) + this._sufixes.scaleY + ")";
		}
		public get rotation():number
		{
			return this._rotation;
		}
		public set rotstion(value:number)
		{
			this._rotation = value;
			this._strList[5] = "rotate(" + ((~~(value * 1000)) * .001) + this._sufixes.rotation + ")";
		}
		public get skewX():number
		{
			return this._skewX;
		}
		public set skewX(value:number)
		{
			this._skewX = value;
			this._strList[9] = "skewX(" + ((~~(value * 1000)) * .001) + this._sufixes.skewX + ")";
		}
		public get skewY():number
		{
			return this._skewY;
		}
		public set skewY(value:number)
		{
			this._skewY = value;
			this._strList[10] = "skewY(" + ((~~(value * 1000)) * .001) + this._sufixes.skewY + ")";
		}
		public get z():number
		{
			return this._z;
		}
		public set z(value:number)
		{
			this._z = value;
			this._strList[2] = "translateZ(" + ((~~(value * 1000)) * .001) + this._sufixes.z + ")";
		}
		public get rotationX():number
		{
			return this._rotationX;
		}
		public set rotationX(value:number)
		{
			this._rotationX = value;
			this._strList[6] = "rotateX(" + ((~~(value * 1000)) * .001) + this._sufixes.rotationX + ")";
		}
		public get rotationY():number
		{
			return this._rotationY;
		}
		public set rotationY(value:number)
		{
			this._rotationY = value;
			this._strList[7] = "rotateY(" + ((~~(value * 1000)) * .001) + this._sufixes.rotationY + ")";
		}
		public get rotationZ():number
		{
			return this._rotationZ;
		}
		public set rotationZ(value:number)
		{
			this._rotationZ = value;
			this._strList[8] = "rotateZ(" + ((~~(value * 1000)) * .001) + this._sufixes.rotationZ + ")";
		}
	}
	class Css2Proxy implements IPropertyProxy
	{
		private static _suffix_base:any = {}
		private static _prop_list:Array<string> = [];
		public static isControledProperty(propname:string):boolean{ return Css2Proxy._suffix_base[propname] != undefined;}
		private _strList:any;
		private _subList:any;
		private _sufixes:any;
		private _propList:Array<string>;
		public static registerParam(name:string,innerName:string,def:any,getterSetter:Object,suffix:string)
		{
			Object.defineProperty(Css2Proxy.prototype,name,getterSetter);
			Css2Proxy.prototype[innerName] = def;
			Css2Proxy._suffix_base[name] = suffix;
		}
		constructor()
		{
			this._propList = [].concat(Css2Proxy._prop_list);
			this._strList = {};
			this._subList = {};
			var obj:Object = Css2Proxy._suffix_base,
				name:string;
			for(name in obj) this._sufixes[name] = obj[name];
		}
		public fixString():string
		{
			var str = '',
				name:string;
			for(name in this._strList)
			{
				str += this._strList[name]
			}
			return str;
		}
		public changeSuffix(name:string,unit:string):string
		{
			var b:string = this._sufixes[name];
			this._sufixes[name] = unit;
			return b;
		}
	}
	Css2Proxy.registerParam("left","_left",0,{
		get:function():number
		{
			return this._left;
		},
		set:function(value:number)
		{
			this._left = value;
			this._strList.left = "left:" + ((~~(value * 1000)) * .001) + this._sufixes.left + ";";
		}
	},"px");
	Css2Proxy.registerParam("right","_right",0,{
		get:function():number
		{
			return this._right;
		},
		set:function(value:number)
		{
			this._right = value;
			this._strList.right = "right:" + ((~~(value * 1000)) * .001) + this._sufixes.right + ";";
		}
	},"px")
	Css2Proxy.registerParam("top","_top",0,{
		get:function():number
		{
			return this._top;
		},
		set:function(value:number)
		{
			this._top = value;
			this._strList.top = "top:" + ((~~(value * 1000)) * .001) + this._sufixes.top + ";";
		}
	},"px")
	Css2Proxy.registerParam("bottom","_bottom",0,{
		get:function():number
		{
			return this._bottom;
		},
		set:function(value:number)
		{
			this._bottom = value
			this._strList.bottom = "bottom:" + ((~~(value * 1000)) * .001) + this._sufixes.bottom + ";"
		}
	},"px")
	Css2Proxy.registerParam("width","_width",0,{
		get:function():number
		{
			return this._width
		},
		set:function(value:number)
		{
			this._width = value
			this._strList.width = "width:" + ((~~(value * 1000)) * .001) + this._sufixes.width + ";"
		}
	},"px")
	Css2Proxy.registerParam("height","_height",0,{
		get:function():number
		{
			return this._height
		},
		set:function(value:number)
		{
			this._height = value
			this._strList.height = "height:" + ((~~(value * 1000)) * .001) + this._sufixes.height + ";"
		}
	},"px")
	Css2Proxy.registerParam("alpha","_alpha",1,{
		get:function():number
		{
			return this._alpha
		},
		set:function(value:number)
		{
			this._alpha = value
			this._strList.alpha = "opacity:" + ((~~(value * 1000)) * .001) + this._sufixes.alpha + ";"
		}
	},"")
	Css2Proxy.registerParam("backgroundPositionX","_backgroundPositionX",0,{
		get:function():number
		{
			return this._backgroundPositionX
		},
		set:function(value:number)
		{
			this._backgroundPositionX = value
			var bxstr = this._subList.backgroundPositionX = ((~~(value * 1000)) * .001) + this._sufixes.backgroundPositionX,
				bystr = this._subList.backgroundPositionY == undefined ? "0" : this._subList.backgroundPositionY;
			this._strList.backgroundPosition = "background-position:" + bxstr + " " + bystr + ";"
		}
	},"px")
	Css2Proxy.registerParam("backgroundPositionY","_backgroundPositionY",0,{
		get:function():number
		{
			return this._backgroundPositionY
		},
		set:function(value:number)
		{
			this._backgroundPositionY = value
			var bystr = this._subList.backgroundPositionY = ((~~(value * 1000)) * .001) + this._sufixes.backgroundPositionY,
				bxstr = this._subList.backgroundPositionX == undefined ? "0" : this._subList.backgroundPositionX;
			this._strList.backgroundPosition = "background-position:" + bxstr + " " + bystr + ";"
		}
	},"px")
	var toPropName = VenderInfo.cssVender + "transform-origin";
	Css2Proxy.registerParam("transformOriginX","_transformOriginX",0,{
		get:function():number
		{
			return this._transformOriginX
		},
		set:function(value:number)
		{
			this._transformOriginX = value
			var bxstr = this._subList.transformOriginX = ((~~(value * 1000)) * .001) + this._sufixes.transformOriginX,
				bystr = this._subList.transformOriginY == undefined ? "50%" : this._subList.transformOriginY;
			this._strList.transformOrigin = toPropName + ":" + bxstr + " " + bystr + ";"
		}
	},"%")
	Css2Proxy.registerParam("transformOriginY","_transformOriginY",0,{
		get:function():number
		{
			return this._transformOriginY
		},
		set:function(value:number)
		{
			this._transformOriginY = value
			var bystr = this._subList.transformOriginY = ((~~(value * 1000)) * .001) + this._sufixes.transformOriginY,
				bxstr = this._subList.transformOriginX == undefined ? "50%" : this._subList.transformOriginX;
			this._strList.transformOrigin = toPropName + ":"  + bxstr + " " + bystr + ";"
		}
	},"%")
	Css2Proxy.registerParam("margin","_margin",0,{
		get:function():number
		{
			return this._margin
		},
		set:function(value:number)
		{
			this._margin = value
			this._strList.margin = "margin:" + ((~~(value * 1000)) * .001) + this._sufixes.margin + ";"
		}
	},"px")
	Css2Proxy.registerParam("padding","_padding",0,{
		get:function():number
		{
			return this._padding
		},
		set:function(value:number)
		{
			this._padding = value
			this._strList.padding = "padding:" + ((~~(value * 1000)) * .001) + this._sufixes.padding + ";"
		}
	},"px")
	Css2Proxy.registerParam("marginLeft","_marginLeft",0,{
		get:function():number
		{
			return this._marginLeft
		},
		set:function(value:number)
		{
			this._marginLeft = value
			this._strList.marginLeft = "margin-left:" + ((~~(value * 1000)) * .001) + this._sufixes.marginLeft + ";"
		}
	},"px")
	Css2Proxy.registerParam("marginRight","_marginRight",0,{
		get:function():number
		{
			return this._marginRight
		},
		set:function(value:number)
		{
			this._marginRight = value
			this._strList.marginRight = "margin-right:" + ((~~(value * 1000)) * .001) + this._sufixes.marginRight + ";"
		}
	},"px")
	Css2Proxy.registerParam("marginTop","_marginTop",0,{
		get:function():number
		{
			return this._marginTop
		},
		set:function(value:number)
		{
			this._marginTop = value
			this._strList.marginTop = "margin-top:" + ((~~(value * 1000)) * .001) + this._sufixes.marginTop + ";"
		}
	},"px")
	Css2Proxy.registerParam("marginBottom","_marginBottom",0,{
		get:function():number
		{
			return this._marginBottom
		},
		set:function(value:number)
		{
			this._marginBottom = value
			this._strList.marginBottom = "margin-bottom:" + ((~~(value * 1000)) * .001) + this._sufixes.marginBottom + ";"
		}
	},"px")
	Css2Proxy.registerParam("paddingLeft","_paddingLeft",0,{
		get:function():number
		{
			return this._paddingLeft
		},
		set:function(value:number)
		{
			this._paddingLeft = value
			this._strList.paddingLeft = "padding-left:" + ((~~(value * 1000)) * .001) + this._sufixes.paddingLeft + ";"
		}
	},"px")
	Css2Proxy.registerParam("paddingRight","_paddingRight",0,{
		get:function():number
		{
			return this._paddingRight
		},
		set:function(value:number)
		{
			this._paddingRight = value
			this._strList.paddingRight = "padding-right:" + ((~~(value * 1000)) * .001) + this._sufixes.paddingRight + ";"
		}
	},"px")
	Css2Proxy.registerParam("paddingTop","_paddingTop",0,{
		get:function():number
		{
			return this._paddingTop
		},
		set:function(value:number)
		{
			this._paddingTop = value
			this._strList.paddingTop = "padding-top:" + ((~~(value * 1000)) * .001) + this._sufixes.paddingTop + ";"
		}
	},"px")
	Css2Proxy.registerParam("paddingBottom","_paddingBottom",0,{
		get:function():number
		{
			return this._paddingBottom
		},
		set:function(value:number)
		{
			this._paddingBottom = value
			this._strList.paddingBottom = "padding-bottom:" + ((~~(value * 1000)) * .001) + this._sufixes.paddingBottom + ";"
		}
	},"px")
	Css2Proxy.registerParam("visible","_visible",0,{
		get:function():number
		{
			return this._visible
		},
		set:function(value:number)
		{
			this._visible = value
			this._strList.visible = "visibility:" + (value ? "visible" : "hidden") + ";"
		}
	},"")
	Css2Proxy.registerParam("display","_display",0,{
		get:function():number
		{
			return this._display
		},
		set:function(value:number)
		{
			this._display = value
			this._strList.display = "display:" + value + ";"
		}
	},"")
	Css2Proxy.registerParam("zIndex","_zIndex",0,{
		get:function():number
		{
			return this._zIndex
		},
		set:function(value:number)
		{
			this._zIndex = value
			this._strList.zIndex = "zIndex:" + (~~(value)) + ";"
		}
	},"")
	Css2Proxy.registerParam("borderRadius","_borderRadius",0,{
		get:function():number
		{
			return this._borderRadius;
		},
		set:function(value:number)
		{
			this._borderRadius = value
			this._strList.borderRadius = "border-radius:" + ((~~(value * 1000)) * .001) + this._sufixes.borderRadius + ";"
		}
	},"px");
	class ScrollProxy implements IPropertyProxy
	{
		private static _prop_list:Array<string> = ["scrollTop","scrollLeft"];
		private _scrollLeft:number;
		private _scrollTop:number;
		private _target:HTMLElement;
		public static isControledProperty(propname:string):boolean
		{
			return ScrollProxy._prop_list.indexOf(propname) > -1;
		}
		constructor(target:HTMLElement)
		{
			this._target = target;
			this._scrollTop = target.scrollTop;
			this._scrollLeft = target.scrollLeft;
		}
		public apply()
		{
			this._target.scrollTop = ((~~(this._scrollTop * 1000)) * .001);
			this._target.scrollLeft = ((~~(this._scrollLeft * 1000)) * .001);
		}
		public changeSuffix(name:string,unit:string):string{ return "";}
		public fixString():string{return "";}
		public get scrollTop():number{ return this._scrollTop; }
		public set scrollTop(value:number){ this._scrollTop = value; }
		public get scrollLeft():number{ return this._scrollLeft; }
		public set scrollLeft(value:number){ this._scrollLeft = value; }
	}
	class FilterProxy implements IPropertyProxy
	{
		private static _prop_list:Array<string> = ["grayscale","sepia","saturate","hueRotate","invert","brightness","contrast","blur"];
		private static _styleName:string = VenderInfo.cssVender + "filter";
		private static _suffix_base:Object = {
			"grayscale":"%",
			"sepia":"%",
			"saturate":"%",
			"hueRotate":"deg",
			"invert":"%",
			"brightness":"%",
			"contrast":"%",
			"blur":"px"
		}
		public static isControledProperty(propname:string):boolean{ return FilterProxy._suffix_base.hasOwnProperty(propname);}
		private _grayscale:number = 0;
		private _sepia:number = 0;
		private _saturate:number = 0;
		private _hueRotate:number = 0;
		private _invert:number = 0;
		private _brightness:number = 0;
		private _contrast:number = 0;
		private _blur:number = 0;
		private _strList:Array<string>;
		private _sufixes:any;
		private _propList:Array<string>;
		constructor()
		{
			this._propList = [].concat(FilterProxy._prop_list);
			this._strList = [];
			this._sufixes = {};
			var obj:Object = FilterProxy._suffix_base,
				name:string;
			for(name in obj) this._sufixes[name] = obj[name];
		}
		public fixString():string
		{
			return FilterProxy._styleName + ":" + this._strList.join(" ") + ";";
		}
		public changeSuffix(name:string,unit:string):string
		{
			var b:string = this._sufixes[name];
			this._sufixes[name] = unit;
			return b;
		}
		public get grayscale():number
		{
			return this._grayscale;
		}
		public set grayscale(value:number)
		{
			this._grayscale = value;
			this._strList[0] = "grayscale(" + ((~~(value * 1000)) * .001) + this._sufixes.grayscale + ")";
		}
		public get sepia():number
		{
			return this._sepia;
		}
		public set sepia(value:number)
		{
			this._sepia = value;
			this._strList[1] = "sepia(" + ((~~(value * 1000)) * .001) + this._sufixes.sepia + ")";
		}
		public get saturate():number
		{
			return this._saturate;
		}
		public set saturate(value:number)
		{
			this._saturate = value;
			this._strList[2] = "saturate(" + ((~~(value * 1000)) * .001) + this._sufixes.saturate + ")";
		}
		public get hueRotate():number
		{
			return this._hueRotate;
		}
		public set hueRotate(value:number)
		{
			this._hueRotate = value;
			this._strList[3] = "hue-rotate(" + ((~~(value * 1000)) * .001) + this._sufixes.hueRotate + ")";
		}
		public get invert():number
		{
			return this._invert;
		}
		public set invert(value:number)
		{
			this._invert = value;
			this._strList[4] = "invert(" + ((~~(value * 1000)) * .001) + this._sufixes.invert + ")";
		}
		public get brightness():number
		{
			return this._brightness;
		}
		public set brightness(value:number)
		{
			this._brightness = value;
			this._strList[5] = "brightness(" + ((~~(value * 1000)) * .001) + this._sufixes.brightness + ")";
		}
		public get contrast():number
		{
			return this._contrast;
		}
		public set contrast(value:number)
		{
			this._contrast = value;
			this._strList[6] = "contrast(" + ((~~(value * 1000)) * .001) + this._sufixes.contrast + ")";
		}
		public get blur():number
		{
			return this._blur;
		}
		public set blur(value:number)
		{
			this._blur = value;
			this._strList[7] = "blur(" + ((~~(value * 1000)) * .001) + this._sufixes.blur + ")";
		}
	}

	export interface ITargetProxy
	{
		registerTween(tween:AbstractTween,fixOnly:boolean):any;
		applyStyles():void;
		applyProperties(properties:any,applyStyles:boolean):any;
		changeUnit(properties:any):any;
	}
	interface ITweenPropety
	{
		name:string;
		tween:AbstractTween;
		proxy:ITargetProxy;
	}
	export class StyleProxy implements ITargetProxy,ITickerObject
	{
		private static _targets:LinkedList = new LinkedList();
		public static getProxy(target:any):ITargetProxy
		{
			var f:ILinkedListObject = StyleProxy._targets.first;
			while(f)
			{
				if(f.elm._target === target)
				{
					return f.elm;
				}
				f = f.next;
			}
			var obj:ITargetProxy;
			if(target instanceof HTMLElement) obj = new StyleProxy(target);
			return obj;
		}
		private _target:HTMLElement;
		private _transProxy:TransformProxy;
		private _css2Proxy:Css2Proxy;
		private _filterProxy:FilterProxy;
		private _scrollProxy:ScrollProxy;
		private _tweens:LinkedList;
		constructor(target:HTMLElement)
		{
			this._target = target;
			this._tweens = new LinkedList();
		}
		public registerTween(tween:AbstractTween,fixOnly:boolean = false):any
		{
			var to:any = tween.to,
				from:any = tween.from,
				c:any = {},
				tl:LinkedList = this._tweens,
				proxy:IPropertyProxy,
				fromP:number,
				f:ILinkedListObject,
				find:boolean,
				name:string;

			for(name in to)
			{
				if(TransformProxy.isControledProperty(name))
				{
					this._transProxy = this._transProxy || new TransformProxy();
					proxy = this._transProxy;
				}
				else if(Css2Proxy.isControledProperty(name))
				{
					this._css2Proxy = this._css2Proxy || new Css2Proxy();
					proxy = this._css2Proxy;
				}
				else if(FilterProxy.isControledProperty(name))
				{
					this._filterProxy = this._filterProxy || new FilterProxy();
					proxy = this._filterProxy;
				}
				else if(ScrollProxy.isControledProperty(name))
				{
					this._scrollProxy = this._scrollProxy || new ScrollProxy(this._target);
					proxy = this._scrollProxy;
				}
				else continue;

				fromP = 0;
				if(from && !isNaN(from[name])) fromP = from[name]
				else fromP = proxy[name];

				c[name] = to[name] - fromP;
				from[name] = fromP;

				if(fixOnly) continue;

				f = tl.first;
				find = false;
				while(f)
				{
					if(f.elm.name == name)
					{
						find = true;
						f.elm.tween = tween;
						break;
					}
					f = f.next;
				}
				if(!find) tl.push({name:name,tween:tween,proxy:proxy});
			}
			Render.addListener(this);
			return c;
		}
		public applyStyles():void
		{
			if(this._scrollProxy) this._scrollProxy.apply();

			this._target.style.cssText = (this._transProxy != null ? this._transProxy.fixString() : "") + 
										(this._css2Proxy != null ? this._css2Proxy.fixString() : "") +
										(this._filterProxy != null ? this._filterProxy.fixString() : "");
			return;
		}
		public update(ctime:number):void
		{
			var f:ILinkedListObject = this._tweens ? this._tweens.first : null,
				tw:AbstractTween,
				tweenCount:number = 0;
			while(f)
			{
				tw = f.elm.tween;
				if(!tw)
				{
					f = f.next;
					continue;
				}
				if(tw.state == TweenState.completed || tw.state == TweenState.playing)
				{
					tw.update(ctime,f.elm.name,f.elm.proxy);
				}
				f = f.next;
			}
			this.applyStyles();

			f = this._tweens ? this._tweens.first : null;
			tweenCount = 0;

			while(f)
			{
				tw = f.elm.tween;
				if(!tw)
				{
					f = f.next;
					continue;
				}

				if(tw.state == TweenState.completed)
				{
					tw.tickUpdate();
					f.elm.tween = null;
					tw.finalize();
					tweenCount = 1;
				}
				else if(tw.state == TweenState.playing)
				{
					tw.tickUpdate();
					tweenCount = 1;
				}
				else if(tw.state == TweenState.stopped)
				{
					f.elm.tween = null;
				}
				else if(tw.state == TweenState.initialized)
				{
					tweenCount = 1;
				}
				f = f.next;
			}
			if(tweenCount == 0) Render.removeListener(this);
		}
		public applyProperties(properties:any,applyStyles:boolean):any
		{
			var change:boolean = false,
				name:string,
				proxy:IPropertyProxy = null,
				before:any = {};

			for(name in properties)
			{
				if(TransformProxy.isControledProperty(name))
				{
					this._transProxy = this._transProxy || new TransformProxy();
					proxy = this._transProxy;
				}
				else if(Css2Proxy.isControledProperty(name))
				{
					this._css2Proxy = this._css2Proxy || new Css2Proxy();
					proxy = this._css2Proxy;
				}
				else if(FilterProxy.isControledProperty(name))
				{
					this._filterProxy = this._filterProxy || new FilterProxy();
					proxy = this._filterProxy;
				}
				else if(ScrollProxy.isControledProperty(name))
				{
					this._scrollProxy = this._scrollProxy || new ScrollProxy(this._target);
					proxy = this._scrollProxy;
				}

				if(proxy == null) continue;

				change = true;
				before[name] = proxy[name];
				proxy[name]  = properties[name];


			}
			if(change && applyStyles) this.applyStyles();
			return before;
		}
		public changeUnit(properties:any):any
		{
			var change:boolean = false,
				name:string,
				proxy:IPropertyProxy = null,
				before:any = {};

			for(name in properties)
			{
				if(TransformProxy.isControledProperty(name))
				{
					this._transProxy = this._transProxy || new TransformProxy();
					proxy = this._transProxy;
				}
				else if(Css2Proxy.isControledProperty(name))
				{
					this._css2Proxy = this._css2Proxy || new Css2Proxy();
					proxy = this._css2Proxy;
				}
				else if(FilterProxy.isControledProperty(name))
				{
					this._filterProxy = this._filterProxy || new FilterProxy();
					proxy = this._filterProxy;
				}
				else if(ScrollProxy.isControledProperty(name))
				{
					this._scrollProxy = this._scrollProxy || new ScrollProxy(this._target);
					proxy = this._scrollProxy;
				}

				if(proxy == null) continue;

				change = true;
				before[name] = proxy.changeSuffix(name,properties[name]);


			}
			return before;
		}
		public get transformProxy():TransformProxy { return this._transProxy;}
		public get cssProxy():Css2Proxy { return this._css2Proxy;}
		public get filterProxy():FilterProxy { return this._filterProxy;}
	}
	export class ObjectProxy implements ITargetProxy,ITickerObject
	{
		private _target:any;
		private _tweens:LinkedList;
		constructor(target:any)
		{
			this._target = target;
			this._tweens = new LinkedList();
		}
		public applyProperties(properties:any,applyStyles:boolean):any
		{
			var name:string;
			for(name in properties)
			{
				if(this[name] !== void 0)
				{
					this._target[name] =
					this[name] = properties[name];
				}
			}
		}
		public applyStyles():void
		{
			var f:ILinkedListObject = this._tweens.first,
				n:string;
			while(f)
			{
				n = f.elm.name;
				this._target[n] = this[n];
				f = f.next;
			}
		}
		public registerTween(tween:AbstractTween,fixOnly:boolean = false):any
		{
			var to:any = tween.to,
				from:any = tween.from,
				c:any = {},
				tl:LinkedList = this._tweens,
				fromP:number,
				f:ILinkedListObject,
				find:boolean,
				name:string;

			for(name in to)
			{
				fromP = 0;
				if(from && !isNaN(from[name])) fromP = from[name];
				else if (!isNaN(this._target[name])) fromP = this._target[name];
				else fromP = 0;

				c[name] = to[name] - fromP;
				from[name] = fromP;
				this[name] = fromP;

				f = tl.first;
				find = false;
				while(f)
				{
					if(f.elm.name == name)
					{
						find = true;
						f.elm.tween = tween;
						break;
					}
					f = f.next;
				}
				if(!find) tl.push({name:name,tween:tween});
			}
			Render.addListener(this);
			return c;
		}
		public update(ctime:number):void
		{
			var f:ILinkedListObject = this._tweens.first,
				tweenCount:number = 0,
				tw:AbstractTween;

			while(f)
			{
				tw = f.elm.tween;
				if(!tw)
				{
					f = f.next;
					continue;
				}
				if(tw.state == TweenState.completed || tw.state == TweenState.playing)
				{
					tw.update(ctime,f.elm.name,f.elm.proxy);
				}
				f = f.next;
			}

			this.applyStyles();
			f = this._tweens.first;

			while(f)
			{
				tw = f.elm.tween;
				if(!tw)
				{
					f = f.next;
					continue;
				}

				if(tw.state == TweenState.completed)
				{
					tw.tickUpdate();
					f.elm.tween = null;
					tw.finalize();
					tweenCount = 1;
				}
				else if(tw.state == TweenState.playing)
				{
					tw.tickUpdate();
					tweenCount = 1;
				}
				else if(tw.state == TweenState.stopped)
				{
					f.elm.tween = null;
				}
				else if(tw.state == TweenState.initialized)
				{
					tweenCount = 1;
				}
				f = f.next;
			}
			if(tweenCount == 0) Render.removeListener(this);
		}
		public changeUnit(properties:any):any
		{
		}
	}






}