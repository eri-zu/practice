/*/// <reference path="../../../threejs/three.d.ts" />*/
/// <reference path="../../contents/TrTween.d.ts" />
/// <reference path="../base.ts" />
/*
*aboutページのクラス
*@class AboutPage
*/
namespace jp.sites.page
{
	export class AboutPage extends AbstractPage
	{
		private _page:HTMLElement;
		private _aboutConceptLt:HTMLElement;
		private _aboutConceptRt:HTMLElement;
		private _aboutInner:HTMLElement;
    private _isShow:boolean = false;
		constructor()
		{
			super();
		}
		init(...args):void
		{

		}
		/*
		*ページに到達した際に呼ばれる
		*@return null
		*/
		onArrive():void
		{
      this._setArrive();
			this._moveArrive();
			this._addEvent();
		}
		/*
		*ページから離れる際に呼ばれる
		*@return null
		*/
		onLeave():void
		{
			this._page = <HTMLElement>document.querySelector('.page-about');
			TrTween.serial(
			TrTween.prop(this._page,{display:'block',alpha:1}),
				TrTween.tween(this._page,{alpha:0},null,0.6,Quart.easeInOut),
				TrTween.prop(this._page,{display:'none'}),
				TrTween.func(function():void{
					this.dispatchEvent(new Events('onLeave'));
					// console.log('about:' + 'onLeave');
				},null,this)
			).play();
		}
    private _setArrive():void
		{
			this._aboutConceptLt = <HTMLElement>document.getElementById('js-aboutConceptLt');
			this._aboutConceptRt = <HTMLElement>document.getElementById('js-aboutConceptRt');
			this._aboutInner = <HTMLElement>document.getElementById('js-aboutInner');


      TrTween.parallel(
        TrTween.changeUnit(this._aboutConceptLt,{x:'%'}),
        TrTween.changeUnit(this._aboutConceptRt,{x:'%'}),
  			TrTween.prop(this._aboutConceptLt,{x:-200}),
  			TrTween.prop(this._aboutConceptRt,{x:200})
      ).play();
		}
		private _moveArrive():void
		{
			this._page = <HTMLElement>document.querySelector('.page-about');
			TrTween.serial(
        TrTween.prop(this._page,{display:'block',alpha:0}),
				TrTween.tween(this._page,{alpha:1},{alpha:0},0.6,Quart.easeInOut),
        TrTween.parallel(
          TrTween.tween(this._aboutConceptLt,{x:0},{x:-200},0.3,Quart.easeInOut),
          TrTween.tween(this._aboutConceptRt,{x:0},{x:200},0.3,Quart.easeInOut)
        ),
				TrTween.func(function():void{
					this.dispatchEvent(new Events('onArrive'));
					this._aboutConceptLt.style.transform = '';
					this._aboutConceptRt.style.transform = '';
				},null,this)
			).play();
		}
		resize(x,y):void
		{

		}
		private _addEvent():void
		{
			// console.log(this._aboutConceptLt);
			this._aboutInner.addEventListener('mousemove',(e)=>{
				if(! this._isShow){
					this._isShow = true;
					// var scroll_pos:any = ((<any>window).webkitRequestAnimationFrame === undefined) ? document.documentElement : document.body;
					var scroll_pos:any = ((<any>document).scrollingElement === undefined) ? document.documentElement : (<any>document).scrollingElement;
					var parentY:number = (<HTMLElement>this._aboutInner.parentNode).offsetTop;
					var xx:number = e.clientX;
					var yy:number = (e.clientY + scroll_pos.scrollTop) - parentY;

					var wave:HTMLElement = document.createElement('div');
					wave.className = 'wave';
					wave.id = 'js-wave';
					this._aboutInner.appendChild(wave);
					var waveBlock = <HTMLElement>document.getElementById('js-wave');
					TrTween.serial(
	          TrTween.prop(waveBlock,{alpha:.3,scaleX:0,scaleY:0,top:yy,left:xx}),
	          TrTween.tween(waveBlock,{alpha:0,scaleX:5,scaleY:5},null,0.8,Quart.easeInOut),
						TrTween.func(function():void{
							this._aboutInner.removeChild(waveBlock);
							this._isShow = false;
						},null,this)
	        ).play();
				}
			});
		}
		private _removeEvent():void
		{

		}
	}
}
