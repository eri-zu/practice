/*/// <reference path="../../../threejs/three.d.ts" />*/
/// <reference path="../../contents/TrTween.d.ts" />
/// <reference path="../base.ts" />
/*
*topページのクラス
*@class TopPage
*/
namespace jp.sites.page
{
	export class TopPage extends AbstractPage
	{
		private _page:HTMLElement;
		constructor()
		{
			super();
		}
		init(...args):void{
			// this._page = <HTMLElement>document.querySelector('.page');
		}
		/*
		*ページに到達した際に呼ばれる
		*@return null
		*/
		onArrive():void
		{
			setTimeout(()=>{
				this.dispatchEvent(new Events('onArrive'));
				// console.log('top:' + 'onArrive');
			},100);
		}
		/*
		*ページから離れる際に呼ばれる
		*@return null
		*/
		onLeave():void
		{
			setTimeout(()=>{
				this.dispatchEvent(new Events('onLeave'));
				// console.log('top:' + 'onLeave');
			},100);
		}
		resize(x,y):void
		{

		}
		private _addEvent():void
		{

		}
		private _removeEvent():void
		{

		}
	}
}
