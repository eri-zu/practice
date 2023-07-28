namespace jp.contents.list
{
	export interface ILinkedListObject{
		elm:any;
		next:ILinkedListObject;
	}
	export class LinkedList
	{
		private _first:ILinkedListObject;
		private _last:ILinkedListObject;
		private _length:number;
		constructor()
		{
			this._first = null;
			this._last = null;
		}
		public getFirst():ILinkedListObject
		{
			return this._first;
		}
		public push(element:any):void
		{
			var data:ILinkedListObject = {
				elm:element,
				next:null
			}
			if(this._first == null)
			{
				this._first = data;
			}
			else
			{
				this._last.next = data;
			}
			this._last = data;
			this._length ++;
		}
		public slice(element:any):void
		{
			var f:ILinkedListObject = this._first,
				b:ILinkedListObject;

			while(f)
			{
				if(f.elm === element)
				{
					if(b) b.next = f.next;
					else this._first = f.next

					if(f === this._last) this._last = b

					--this._length;

					b = f;
					f = f.next;
				}
			}
		}
		public shift():any
		{
			var b:ILinkedListObject = this._first;
			this._first = this._first.next;
			-- this._length;
			return b.elm;
		}
		public get first():ILinkedListObject
		{
			return this._first;
		}
	}
}