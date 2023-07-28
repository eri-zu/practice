namespace jp.contents.event
{
	export class Event
	{
		private _type:string;
		private _target:any;
		constructor(type:string,target:any = null)
		{
			this._type = type;
			this._target = target;
		}
		public get type():string { return this._type;}
		public get target():any { return this._target;}
		public clone():Event
		{
			return new Event(this._type,this._target);
		}
	}
	export class EventDispatcher
	{
		private _listeners:any;
		constructor()
		{
		}
		private _initListeners():void
		{
			if(this._listeners == void 0) this._listeners = {};
		}
		public hasEventListener(type:string):boolean
		{
			if (this._listeners == void 0 || this._listeners[type] == void 0) return false;
			return true;
		}
		public dispatchEvent(event:Event):void
		{

			if(!this.hasEventListener(event.type)) return;
			var t:string = event.type,
				arr:Array<(e:Event)=> void> = this._listeners[t],
				i:number = 0,len:number = arr.length;
			for(; i < len; i++) arr[i](event.clone());
		}
		public addEventListener(type:string,listener:(e:Event)=>void):void
		{
			if(!this.hasEventListener(type))
			{
				this._initListeners();
				this._listeners[type] = [listener];
			}
			else
			{
				this._listeners[type].push(listener);
			}
		}
		public removeAllListeners():void
		{
			this._listeners = null;
		}
		public removeEventListener(type:string,listener:(e:Event)=>void):void
		{
			if(!this.hasEventListener(type))return;
			var t:string = type,
				arr:Array<(e:Event)=> void> = this._listeners[t],
				i:number = 0,len:number = arr.length,f:(e:Event)=>void = listener;
			for(i = 0;i < len;i++)
			{
				if(f === listener) this._listeners[type].splice(i,1);
			}
		}
	}
}
