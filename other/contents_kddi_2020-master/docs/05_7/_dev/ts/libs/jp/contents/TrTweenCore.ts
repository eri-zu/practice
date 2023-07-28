import IEasing = jp.contents.easing.IEasing;
import ITargetProxy = jp.contents.tween.ITargetProxy;
import TrTween = jp.contents.tween.TrTween;
import StyleProxy = jp.contents.tween.StyleProxy;

namespace jp.contents.tween
{


	export const enum TweenState{
		initialized,
		playing,
		stopped,
		completed,
		finalized,
		overwrited
	}

	export class AbstractTween
	{
		protected _onComplete:(abstractTween:AbstractTween)=>void;
		protected _onPlay:(abstractTween:AbstractTween)=>void;
		protected _onStop:(abstractTween:AbstractTween)=>void;
		protected _onUpdate:(abstractTween:AbstractTween)=>void;
		protected _state:number;
		protected _duration:number;
		protected _to:any;
		protected _from:any;
		constructor()
		{
			this._state = TweenState.initialized;
		}
		public update(currentTime:number,prop:string,proxy:ITargetProxy):void
		{
		}
		public play():void{}
		public stop():void{}
		public resume():void{}
		public finalize():void{}
		public clone():void{}
		public tickUpdate():void
		{
			if(this._onUpdate != null) this._onUpdate(this);
		}
		public get duration():number
		{
			return this._duration * .001;
		}
		public get state():number
		{
			return this._state;
		}
		public onComplete(func:(abstractTween:AbstractTween)=>void):void
		{
			this._onComplete = func;
		}
		public onPlay(func:(abstractTween:AbstractTween)=>void):void
		{
			this._onPlay = func;
		}
		public onStop(func:(abstractTween:AbstractTween)=>void):void
		{
			this._onStop = func;
		}
		public onUpdate(func:(abstractTween:AbstractTween)=>void):void
		{
			this._onUpdate = func;
		}
		public get to():any{
			return this._to;
		}
		public get from():any{
			return this._from;
		}
		public startRender():void
		{
			if(Render.running) Render.start();
		}
	}
	export class BasicTween extends AbstractTween
	{
		private _proxy:ITargetProxy;
		private _target:any;
		private _easing:IEasing;
		private _endTime:number;
		private _c:any;
		constructor(target:any,to:any,from:any,duration:number = 1.0,easing:IEasing = null)
		{
			super();
			this._from = from || {};
			this._to = to;
			this._duration = duration * 1000;
			this._easing = easing || TrTween.defaultEasing;
			this._proxy = StyleProxy.getProxy(target);
			this._target = target;
		}
		public play():void
		{
			this._state = TweenState.playing;
			this.startRender();
			this.register(false);

			if(this._onPlay != null) this._onPlay(this)

		}
		public register(isRegister:boolean):void
		{

		}
	}
}
