import ILinkedListObject = jp.contents.list.ILinkedListObject;
import LinkedList = jp.contents.list.LinkedList;

namespace jp.contents.render
{
	export interface ITickerObject{
		update(time:number):void;
	}
	export class Render
	{
		private static _count:number;
		private static _currentTime:number = Date.now();
		private static _updaters:LinkedList = new LinkedList();
		private static _state:number = 0;
		private static _rid:number = -1;
		public static removeListener(updater:ITickerObject):void
		{
			Render._updaters.slice(updater)
		}
		public static addListener(updater:ITickerObject):void
		{
			var f:ILinkedListObject = Render._updaters.first;

			while(f)
			{
				if(f.elm === updater) return;
			}
			Render._updaters.push(updater);
		}
		public static start():void
		{
			if(Render._state >= 1) return;

			Render._state = 1;
			Render._tick(Date.now() - Render._currentTime);
		}
		public static stop():void
		{
			Render._state = 0;
			cancelAnimationFrame(Render._rid);
		}
		private static _tick(timestamp:number):void
		{
			var ct:number = 0;
			Render._currentTime = ct = ~~(timestamp);
			var f:ILinkedListObject = Render._updaters.first;
			while(f)
			{
				(<ITickerObject>f.elm).update.call(f.elm,ct);
			}
			Render._rid = requestAnimationFrame(Render._tick);
		}
		public static get state():number
		{
			return Render._state;
		}
		public static get running():boolean
		{
			return Render._state === 0 ? false : true;
		}
		public static get currentTime():number
		{
			return Render._currentTime;
		}
	}
}