namespace jp.contents.easing
{
	export interface IEasing
	{
		update(t:number,b:number,c:number,d:number):number;
	}
	
	class LinearEaseNone implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * t / d + b;
		}
	}
	class SineEaseOut implements IEasing
	{
		private _pi:number;
		constructor()
		{
			this._pi = Math.PI;
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * Math.sin(t / d * this._pi) + b;
		}	
	}
	class SineEaseIn implements IEasing
	{
		private _pi:number;
		constructor()
		{
			this._pi = Math.PI;
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			return -c * Math.cos(t / d * this._pi) + c + b;
		}
	}
	class SineEaseInOut implements IEasing
	{
		private _pi:number;
		constructor()
		{
			this._pi = Math.PI;
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			return -(c / 2) * (Math.cos(this._pi * t / d) - 1) + b;
		}
	}
	class SineEaseOutIn implements IEasing
	{
		private _pi:number;
		constructor()
		{
			this._pi = Math.PI;
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < (d / 2)) return (c / 2) * Math.sin((t * 2) / d * this._pi) + b;
			else return -(c / 2) * Math.cos((t * 2 - d) / d * this._pi) + (c / 2) + (b + (c / 2));
		}	
	}
	class CubicEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * ((t = t / d - 1) * t * t + 1) + b;
		}
	}
	class CubicEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * (t /= d) * t * t + b;
		}
	}
	class CubicEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= (d / 2)) < 1) return (c / 2) * t * t * t + b;
			else return (c / 2) * ((t -= 2) * t * t + 2) + b;
		}
	}
	class CubicEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2) return c / 2 * ((t = t * 2 / d - 1) * t * t + 1) + b;
			else return c / 2 * (t = (t * 2 - d) / d) * t * t + b + c / 2;
		}
	}
	class QuintEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b
		}
	}
	class QuintEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * (t /= d) * t * t * t * t + b
		}
	}
	class QuintEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b
			else return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
		}
	}
	class QuintEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2) return (c / 2) * ((t = (t * 2) / d - 1) * t * t * t * t + 1) + b
			else return (c / 2) * (t = (t * 2 - d) / d) * t * t * t * t + (b + c / 2)
		}
	}
	class CircEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
		}
	}
	class CircEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
		}
	}
	class CircEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
			else return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
		}
	}
	class CircEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2 )return (c / 2) * Math.sqrt(1 - (t = (t * 2) / d - 1) * t) + b
			else return -(c / 2) * (Math.sqrt(1 - (t = (t * 2 - d) / d) * t) - 1) + (b + c / 2)
		}
	}
	class QuadEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return -c * (t /= d) * (t - 2) + b
		}
	}
	class QuadEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * (t /= d) * t + b
		}
	}
	class QuadEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= d / 2) < 1) return c / 2 * t * t + b
			else return -c / 2 * ((--t) * (t - 2) - 1) + b
		}
	}
	class QuadEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2) return -(c / 2) * (t = t * 2 / d) * (t - 2) + b
			else return (c / 2) * (t = (t * 2 - d) / d) * t + (b + c / 2)
		}
	}
	class QuartEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return -c * ((t = t / d - 1) * t * t * t - 1) + b
		}
	}
	class QuartEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			return c * (t /= d) * t * t * t + b
		}
	}
	class QuartEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
			else return -c / 2 * ((t -= 2) * t * t * t - 2) + b
		}
	}
	class QuartEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
			else return -c / 2 * ((t -= 2) * t * t * t - 2) + b
		}
	}
	class ExpoEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t == d) return b + c
			else return c * (-Math.pow(2, -10 * t / d) + 1) + b
		}
	}
	class ExpoEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t == 0) return b
			else return c * Math.pow(2, 10 * (t / d - 1)) + b
		}
	}
	class ExpoEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t == 0) return b
			else if (t == d) return b + c
			else if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
			else return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
		}
	}
	class ExpoEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2)
			{
				if (t * 2 == d) return b + c / 2
				else return c / 2 * (1 - Math.pow(2, -10 * t * 2 / d)) + b
			}
			else if (t * 2 - d == 0) return b + c / 2
			else return c / 2 * Math.pow(2, 10 * ((t * 2 - d) / d - 1)) + b + c / 2
		}
	}
	class ElasticEaseOutWith implements IEasing
	{
		private a:number;
		private p:number;
		private pi:number;
		constructor(amplitude,period)
		{
			this.a = amplitude
			this.p = period
			this.pi = Math.PI
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = 0;
			if (t == 0) return b
			if ((t /= d) == 1) return b + c;

			if (!this.p) this.p = d * 0.3;
			if (!this.a || this.a < Math.abs(c))
			{
				this.a = c
				s = this.p / 4
			}
			else s = this.p / (2 * this.pi) * Math.asin(c / this.a)

			return this.a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * this.pi) / this.p) + c + b
		}
	}
	class ElasticEaseInWith implements IEasing
	{
		private a:number;
		private p:number;
		private pi:number;
		constructor(amplitude,period)
		{
			this.a = amplitude
			this.p = period
			this.pi = Math.PI
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = 0;
			if (t == 0) return b
			else if ((t /= d) == 1) return b + c

			if (!this.p) this.p = d * 0.3
			if (!this.a || this.a < Math.abs(c))
			{	this.a = c
				s = this.p / 4
			}
			else s = this.p / (2 * Math.PI) * Math.asin(c / this.a)
			return -(this.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p)) + b
		}
	}
	class ElasticEaseInOutWith implements IEasing
	{
		private a:number;
		private p:number;
		private pi:number;
		constructor(amplitude,period)
		{
			this.a = amplitude
			this.p = period
			this.pi = Math.PI
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = 0;
			if (t == 0)
	        	return b
			else if ((t /= d / 2) == 2)
	        	return b + c

			if (!this.p)
	        	this.p = d * (0.3 * 1.5)
			if (!this.a || this.a < Math.abs(c))
			{
				this.a = c
				s = this.p / 4
			}
			else s = this.p / (2 * this.pi) * Math.asin(c / this.a)

			if (t < 1) return -0.5 * (this.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p)) + b
			else return this.a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p) * 0.5 + c + b
		}
	}
	class ElasticEaseOutInWith implements IEasing
	{
		private a:number;
		private p:number;
		private pi:number;
		constructor(amplitude,period)
		{
			this.a = amplitude
			this.p = period
			this.pi = Math.PI
		}
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = 0;
			c /= 2
			if (t < d / 2)
			{
				if ((t *= 2) == 0) return b
				if ((t /= d) == 1) return b + c
				if (!this.p) this.p = d * 0.3
				if (!this.a || this.a < Math.abs(c))
				{
					this.a = c
					s = this.p / 4
				}
				else s = this.p / (2 * this.pi) * Math.asin(c / this.a)

				return this.a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * this.pi) / this.p) + c + b
			}
			else
			{
				if ((t = t * 2 - d) == 0) return b + c
				else if ((t /= d) == 1) return (b + c) + c

				if (!this.p) this.p = d * 0.3

				if (!this.a || this.a < Math.abs(c))
				{
					this.a = c
					s = this.p / 4
				}
				else s = this.p / (2 * this.pi) * Math.asin(c / this.a)
				return -(this.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p)) + (b + c)
			}
		}
	}
	class ElasticEaseOut extends ElasticEaseOutWith
	{
		constructor(){super(0,0)}		
	}
	class ElasticEaseIn extends ElasticEaseInWith
	{
		constructor(){super(0,0)}
	}
	class ElasticEaseOutIn extends ElasticEaseOutInWith
	{
		constructor(){super(0,0)}
	}
	class ElasticEaseInOut extends ElasticEaseInOutWith
	{
		constructor(){super(0,0)}
	}
	class BackEaseOutWith implements IEasing
	{
		private s:number;
		constructor(s:number)
		{
			this.s = s
		}
			
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = this.s
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
		}
	}
	class BackEaseInWith implements IEasing
	{
		private s:number;
		constructor(s:number)
		{
			this.s = s
		}
			
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = this.s
			return c * (t /= d) * t * ((s + 1) * t - s) + b
		}
	}
	class BackEaseInOutWith implements IEasing
	{
		private s:number;
		constructor(s:number)
		{
			this.s = s
		}
			
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = this.s
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s * 1.525) + 1) * t - s * 1.525)) + b
			else return c / 2 * ((t -= 2) * t * (((s * 1.525) + 1) * t + s * 1.525) + 2) + b
		}
	}
	class BackEaseOutInWith implements IEasing
	{
		private s:number;
		constructor(s:number)
		{
			this.s = s
		}
			
		public update(t:number,b:number,c:number,d:number):number
		{
			var s:number = this.s
			if (t < d / 2) return (c / 2) * ((t = (t * 2) / d - 1) * t * ((s + 1) * t + s) + 1) + b
			else return (c / 2) * (t = (t * 2 - d) / d) * t * ((s + 1) * t - s) + (b + c / 2)
		}
	}
	class BackEaseOut extends BackEaseOutWith
	{
		constructor(){super(1.70158)}
	}		
	class BackEaseIn extends BackEaseInWith
	{
		constructor(){super(1.70158)}
	}
			
	class BackEaseInOut extends BackEaseInOutWith
	{
		constructor(){super(1.70158)}		
	}
	class BackEaseOutIn extends BackEaseOutInWith
	{
		constructor(){super(1.70158);}
	}

	class BounceEaseOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t /= d) < (1 / 2.75)) return c * (7.5625 * t * t) + b
			else if (t < (2 / 2.75)) return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
			else if (t < (2.5 / 2.75)) return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
			else return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
		}
	}
	class BounceEaseIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if ((t = (d - t) / d) < (1 / 2.75)) return c - (c * (7.5625 * t * t)) + b
			else if (t < (2 / 2.75)) return c - (c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)) + b
			else if (t < (2.5 / 2.75)) return c - (c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)) + b
			else return c - (c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)) + b
		}
	}
	class BounceEaseInOut implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2)
			{
				if ((t = (d - t * 2) / d) < (1 / 2.75))
					return (c - (c * (7.5625 * t * t))) * 0.5 + b
				else if (t < (2 / 2.75))
					return (c - (c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75))) * 0.5 + b
				else if (t < (2.5 / 2.75))
					return (c - (c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375))) * 0.5 + b
				else 
					return (c - (c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375))) * 0.5 + b;
			}
			else
			{
				if ((t = (t * 2 - d) / d) < (1 / 2.75))
					return (c * (7.5625 * t * t)) * 0.5 + c * 0.5 + b
				else if (t < (2 / 2.75))
					return (c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)) * 0.5 + c * 0.5 + b
				else if (t < (2.5 / 2.75))
					return (c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)) * 0.5 + c * 0.5 + b
				else
					return (c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)) * 0.5 + c * 0.5 + b
			}
		}
	}
	class BounceEaseOutIn implements IEasing
	{
		public update(t:number,b:number,c:number,d:number):number
		{
			if (t < d / 2)
			{
				if ((t = (t * 2) / d) < (1 / 2.75))
					return (c / 2) * (7.5625 * t * t) + b
				else if (t < (2 / 2.75))
					return (c / 2) * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
				else if (t < (2.5 / 2.75))
					return (c / 2) * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
				else
					return (c / 2) * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
			}
			else
			{
				if ((t = (d - (t * 2 - d)) / d) < (1 / 2.75))
					return (c / 2) - ((c / 2) * (7.5625 * t * t)) + (b + c / 2)
				else if (t < (2 / 2.75))
					return (c / 2) - ((c / 2) * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)) + (b + c / 2)
				else if (t < (2.5 / 2.75))
					return (c / 2) - ((c / 2) * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)) + (b + c / 2)
				else
					return (c / 2) - ((c / 2) * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)) + (b + c / 2)
			}
		}
	}
	
	export class Linear
	{
		public static easeOut:IEasing = new LinearEaseNone(); 
		public static easeIn:IEasing = new LinearEaseNone();
		public static easeInOut:IEasing = new LinearEaseNone();
		public static easeOutIn:IEasing = new LinearEaseNone();
		public static easeNone:IEasing = new LinearEaseNone();
	}
	export class Sine
	{
		public static easeOut:IEasing = new SineEaseOut();
		public static easeIn:IEasing = new SineEaseIn();
		public static easeInOut:IEasing = new SineEaseInOut();
		public static easeOutIn:IEasing = new SineEaseOutIn();
	}
	export class Cubic
	{
		public static easeOut:IEasing = new CubicEaseOut();
		public static easeIn:IEasing = new CubicEaseIn();
		public static easeInOut:IEasing = new CubicEaseInOut();
		public static easeOutIn:IEasing = new CubicEaseOutIn();
	}
	export class Quint
	{
		public static easeOut:IEasing = new QuintEaseOut();
		public static easeIn:IEasing = new QuintEaseIn();
		public static easeInOut:IEasing = new QuintEaseInOut();
		public static easeOutIn:IEasing = new QuintEaseOutIn();
	}
	export class Circ
	{
		public static easeOut:IEasing = new CircEaseOut();
		public static easeIn:IEasing = new CircEaseIn();
		public static easeInOut:IEasing = new CircEaseInOut();
		public static easeOutIn:IEasing = new CircEaseOutIn();
	}
	export class Quad
	{
		public static easeOut:IEasing = new QuadEaseOut();
		public static easeIn:IEasing = new QuadEaseIn();
		public static easeInOut:IEasing = new QuadEaseInOut();
		public static easeOutIn:IEasing = new QuadEaseOutIn();
	}
	export class Quart
	{
		public static easeOut:IEasing = new QuartEaseOut();
		public static easeIn:IEasing = new QuartEaseIn();
		public static easeInOut:IEasing = new QuartEaseInOut();
		public static easeOutIn:IEasing = new QuartEaseOutIn();
	}
	export class Expo
	{
		public static easeOut:IEasing = new ExpoEaseOut();
		public static easeIn:IEasing = new ExpoEaseIn();
		public static easeInOut:IEasing = new ExpoEaseInOut();
		public static easeOutIn:IEasing = new ExpoEaseOutIn();
	}
	export class Elastic
	{
		public static easeOut:IEasing = new ElasticEaseOut();
		public static easeIn:IEasing = new ElasticEaseIn();
		public static easeInOut:IEasing = new ElasticEaseInOut();
		public static easeOutIn:IEasing = new ElasticEaseOutIn();
		public static easeOutWith(a:number,b:number) {return new ElasticEaseOutWith(a,b);}
		public static easeInWith(a:number,b:number) {return new ElasticEaseInWith(a,b);}
		public static easeInOutWith(a:number,b:number) {return new ElasticEaseInOutWith(a,b);}
		public static easeOutInWith(a:number,b:number) {return new ElasticEaseOutInWith(a,b);}
	}
	export class Back
	{
		public static easeOut:IEasing = new BackEaseOut();
		public static easeIn:IEasing = new BackEaseIn();
		public static easeInOut:IEasing = new BackEaseInOut();
		public static easeOutIn:IEasing = new BackEaseOutIn();
		public static easeOutWith(a:number) {return new BackEaseOutWith(a);}
		public static easeInWith(a:number) {return new BackEaseInWith(a);}
		public static easeInOutWith(a:number) {return new BackEaseInOutWith(a);}
		public static easeOutInWith(a:number) {return new BackEaseOutInWith(a);}
	}
	export class Bounce
	{
		public static easeOut:IEasing = new BounceEaseOut();
		public static easeIn:IEasing = new BounceEaseIn();
		public static easeInOut:IEasing = new BounceEaseInOut();
		public static easeOutIn:IEasing = new BounceEaseOutIn();
	}
	export class CSS3Easing
	{
		public linear:string = "cubic-bezier(0.250, 0.250, 0.750, 0.750)";
		public ease:string = "cubic-bezier(0.250, 0.100, 0.250, 1.000)";
		public easeIn:string = "cubic-bezier(0.420, 0.000, 1.000, 1.000)";
		public easeOut:string = "cubic-bezier(0.000, 0.000, 0.580, 1.000)";
		public easeInBack:string = "cubic-bezier(0.600, -0.280, 0.735, 0.045)";
		public easeInOutBack:string = "cubic-bezier(0.680, -0.550, 0.265, 1.550)";
		public easeInOut:string = "cubic-bezier(0.420, 0.000, 0.580, 1.000)";
		public easeInQuad:string = "cubic-bezier(0.550, 0.085, 0.680, 0.530)";
		public easeInCubic:string = "cubic-bezier(0.550, 0.055, 0.675, 0.190)";
		public easeInQuart:string = "cubic-bezier(0.895, 0.030, 0.685, 0.220)";
		public easeInQuint:string = "cubic-bezier(0.755, 0.050, 0.855, 0.060)";
		public easeInSine:string = "cubic-bezier(0.470, 0.000, 0.745, 0.715)";
		public easeInExpo:string = "cubic-bezier(0.950, 0.050, 0.795, 0.035)";
		public easeInCirc:string = "cubic-bezier(0.600, 0.040, 0.980, 0.335)";
		public easeOutQuad:string = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
		public easeOutCubic:string = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
		public easeOutQuart:string = "cubic-bezier(0.165, 0.840, 0.440, 1.000)";
		public easeOutQuint:string = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";
		public easeOutSine:string = "cubic-bezier(0.390, 0.575, 0.565, 1.000)";
		public easeOutExpo:string = "cubic-bezier(0.190, 1.000, 0.220, 1.000)";
		public easeOutCirc:string = "cubic-bezier(0.075, 0.820, 0.165, 1.000)";
		public easeOutBack:string = "cubic-bezier(0.175, 0.885, 0.320, 1.275)";
		public easeInOutQuad:string = "cubic-bezier(0.455, 0.030, 0.515, 0.955)";
		public easeInOutCubic:string = "cubic-bezier(0.645, 0.045, 0.355, 1.000)";
		public easeInOutQuart:string = "cubic-bezier(0.770, 0.000, 0.175, 1.000)";
		public easeInOutQuint:string = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
		public easeInOutSine:string = "cubic-bezier(0.445, 0.050, 0.550, 0.950)";
		public easeInOutExpo:string = "cubic-bezier(1.000, 0.000, 0.000, 1.000)";
		public easeInOutCirc:string = "cubic-bezier(0.785, 0.135, 0.150, 0.860)";
	}
	interface IPoint
	{
		x:number;
		y:number
	}
	class BezierSegment
	{
		private _a:IPoint;
		private _b:IPoint;
		private _c:IPoint;
		private _d:IPoint;
		constructor(a:IPoint,b:IPoint,c:IPoint,d:IPoint)
		{
			this._a = a;
			this._b = b;
			this._c = c;
			this._d = d;
		}
		public getValue(t:number):IPoint
		{
			var ax:number = this._a.x,
				x:number = (t * t * (this._d.x - ax) + 3 * (1 - t) * (t * (this._c.x - ax) + (1 - t) * (this._b.x - ax))) * t + ax,
				ay:number = this._a.y,
				y:number = (t * t * (this._d.y - ay) + 3 * (1 - t) * (t * (this._c.y - ay) + (1 - t) * (this._b.y - ay))) * t + ay;
			return {x:x,y:y}
		}
		public getYForX(x:number,coefficients:any = null):number
		{
			if(this._a.x < this._d.x)
			{
				if(x <= this._a.x + 0.0000000000000001) return this._a.y
				else if (x >= this._d.x - 0.0000000000000001) return this._d.y
			}
			else
			{
				if (x >= this._a.x + 0.0000000000000001) return this._a.y
				if (x <= this._d.x - 0.0000000000000001) return this._d.y
			}	
			if (!coefficients) coefficients = BezierSegment.getCubicCoefficients(this._a.x, this._b.x, this._c.x, this._d.x)
			
			
			var roots:Array<number> = BezierSegment.getCubicRoots(coefficients[0], coefficients[1], coefficients[2], coefficients[3] - x),
				time:number = NaN,root:number = NaN;
				
			if(roots.length == 0) time = 0;
			else if (roots.length == 1) time = roots[0];
			else 
			{
				var i:number = 0,len:number = roots.length,root:number;
				for (;i< len ;i++)
				{
					root = roots[i];
					if (0 <= root && root <= 1)
					{
						time = root
						break;
					}
				}
			}
			if(isNaN(time)) return NaN

			return BezierSegment.getSingleValue(time, this._a.y, this._b.y, this._c.y, this._d.y);
		}
	
		public static getSingleValue(t:number,a:number = 0,b:number = 0,c:number = 0,d:number = 0):number
		{
			return (t * t * (d - a) + 3 * (1 - t) * (t * (c - a) + (1 - t) * (b - a))) * t + a;
		}
		public static getCubicCoefficients(a,b,c,d):Array<number>
		{
			return [-a + 3 * b - 3 * c + d, 3 * a - 6 * b + 3 * c, -3 * a + 3 * b, a];
		}
		public static getCubicRoots(a:number = 0,b:number = 0,c:number = 0,d:number = 0):Array<number>
		{
			if (!a) return BezierSegment.getQuadraticRoots(b, c, d)
				
			if (a != 1)
			{
				b /= a
				c /= a
				d /= a
			}
			
			var q:number = (b * b - 3 * c) / 9,
				qCubed:number = q * q * q,
				r:number = (2 * b * b * b - 9 * b * c + 27 * d) / 54,
				diff:number = qCubed - r * r;
				
			if (diff >= 0)
			{
				if (!q) return [0]
				var theta:number = Math.acos(r / Math.sqrt(qCubed)),
					qSqrt:number = Math.sqrt(q),
					root1:number = -2 * qSqrt * Math.cos(theta / 3) - b / 3,
					root2:number = -2 * qSqrt * Math.cos((theta + 2 * Math.PI) / 3) - b / 3,
					root3:number = -2 * qSqrt * Math.cos((theta + 4 * Math.PI) / 3) - b / 3;

				return [root1, root2, root3];
			}
			else 
			{
				var tmp:number = Math.pow(Math.sqrt(-diff) + Math.abs(r), 1 / 3),
					rSign:number = r > 0 ? 1 : (r < 0) ? -1 : 0,
					root:number = -rSign * (tmp + q / tmp) - b / 3;
				return [root];
			}
			
		}
		public static getQuadraticRoots(a:number,b:number,c:number):Array<number>
		{
			var roots:Array<number> = []
			
			if (!a)
			{
				if(!b) return []
				roots[0] = -c / b;
				return roots;
			}
			var q:number = b * b - 4 * a * c,
				signQ:number = (q > 0) ? 1 : (q < 0) ? -1 : 0;
				
			if (signQ < 0) return [];
			else if (!signQ) roots[0] = -b / (2 * a)
			else 
			{
				roots[0] = roots[1] = -b / (2 * a)
				var tmp:number = Math.sqrt(q) / (2 * a);
				roots[0] -= tmp;
				roots[1] += tmp;
			}
			return roots
		}
	}
	export function CustomEase(p1x:number,p1y:number,p2x:number,p2y:number):IEasing
	{
		var bez:BezierSegment = new BezierSegment({x:0,y:0},{x:p1x,y:p1y},{x:p2x,y:p2y},{x:1,y:1});
		return {
			update:function(t:number,b:number,c:number,d:number):number
			{
				return c * bez.getYForX(t / d) + b;
			}

		}
	}
}