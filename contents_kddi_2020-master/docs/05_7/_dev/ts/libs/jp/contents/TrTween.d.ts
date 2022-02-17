

declare namespace jp.contents.TrTween
{
	export class Render
	{
		static start();
		static addListener(obj:any):void;
		static removeListener(obj:any):void;
	}
	export interface ITween
	{
		update(time:number,prop:any):void;
		play():void;
		stop():void;
		clone():void;
		onComplete(func):void;
		onPlay(func):void;
		onStop(func):void;
		onUpdate(func):void;
		getState():number;
		gotoAndStop(parsent):void;
	}
	export class TrTween
	{
		public static tween(target,to,from,duration,easing):ITween;
		public static bezier(target,to,from,control,duration,easing):ITween;
		public static delay(tween,delay:number):ITween;
		public static parallelTweens(tweens):ITween;
		public static parallel(...args):ITween;
		public static serialTweens(tweens):ITween;
		public static serial(...args):ITween;
		public static easingTweens(tweens,easing,duration):ITween;
		public static repeat(tween,count):ITween;
		public static func(func,params,caller):ITween;
		public static prop(target,propaties):ITween;
		public static wait(time):ITween;
		public static changeUnit(target,prop):ITween;
		public static addClass(target,className):ITween;
		public static removeClass(target,className):ITween;
	}
}
declare namespace jp.contents.easing
{
	export class Linear
	{
		public static easeNone;
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Sine
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Cubic
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Quint
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Circ
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Quad
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Quart
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Expo
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Bounce
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
	}
	export class Elastic
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
		public static easeInWith(a,b);
		public static easeOutWith(a,b);
		public static easeInOutWith(a,b);
		public static easeOutInWith(a,b);
	}
	export class Back
	{
		public static easeIn;
		public static easeOut;
		public static easeInOut;
		public static easeOutIn;
		public static easeInWith(a);
		public static easeOutWith(a);
		public static easeInOutWith(a);
		public static easeOutInWith(a);
	}
}
