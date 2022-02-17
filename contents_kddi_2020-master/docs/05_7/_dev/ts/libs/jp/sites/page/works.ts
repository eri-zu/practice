/*/// <reference path="../../../threejs/three.d.ts" />*/
/// <reference path="../../contents/TrTween.d.ts" />
/// <reference path="../base.ts" />
/*
*Worksのページ
*@class WorksPage
*/
namespace jp.sites.page
{
	export class WorksPage extends AbstractPage
	{
		private _worksBlock:HTMLElement;
		private _detailLink:NodeList;
		private _detailPNLink:NodeList;
		private _worksGroupNav:HTMLElement;
		private _worksCateNav:HTMLElement;
    private _worksGroupLine:HTMLElement;
		private _worksList:NodeList;
    //
    private _cateLink:NodeList;
    private _groupLink:NodeList;
		//
		private _onClickEvent:(e:Event)=>void;
		private _onClickPNEvent:(e:Event)=>void;
		private _onClickBackEvent:(e:Event)=>void;
    //
    private _onClickCateLinkEvent:(e:Event)=>void;
    private _onClickGroupLinkEvent:(e:Event)=>void;
    //
    private _cateType:string = 'all';
    private _groupType:string = '';
		private _isPrev:boolean = false;
    //
		private _pageUrl:string;
		constructor()
		{
			super();
		}
		init(...args):void{
			// var page:HTMLElement = <HTMLElement>document.querySelector('.page-works');
			this._setEvent();
		}
		/*
		*ページに到達した際に呼ばれる
		*@return null
		*/
		onArrive():void
		{
			this._worksBlock = <HTMLElement>document.getElementById('js-works');

			this._setArrive();
			this._addEvent();
			//
			this._moveArrive();
		}
		/*
		*ページから離れる際に呼ばれる
		*@return null
		*/
		onLeave():void
		{
			this._removeEvent();
			//
			var page:HTMLElement = <HTMLElement>document.querySelector('.page-works');
			TrTween.serial(
			TrTween.prop(page,{display:'block',alpha:1}),
				TrTween.tween(page,{alpha:0},null,0.6,Quart.easeInOut),
				TrTween.prop(page,{display:'none'}),
				TrTween.func(function():void{
					this.dispatchEvent(new Events('onLeave'));
					// console.log('works:' + 'onLeave');
				},null,this)
			).play();
		}

		/*
		*ページに到達した際に呼ばれる
		*@return null
		*/
		onDetailArrive():void
		{
			this._addDetailEvent();
			var dx:number = 100;
			var mx:number = 0;
			if(this._isPrev){
				dx = -100;
				this._isPrev = false;
			}
			//
			var page:HTMLElement = <HTMLElement>document.getElementsByClassName('page-worksDetail')[0];
			if(page){
				TrTween.serial(
					TrTween.changeUnit(page,{x:'%'}),
					TrTween.prop(page,{display:'block',x:dx}),
					TrTween.wait(.6),
					TrTween.tween(page,{x:mx},null,0.6,Quart.easeInOut),
					TrTween.func(function():void{
						this.dispatchEvent(new Events('onDetailArrive'));
					},null,this)
				).play();
			}else{
				this.dispatchEvent(new Events('onDetailArrive'));
			}
		}
		/*
		*ページから離れる際に呼ばれる
		*@return null
		*/
		onDetailLeave():void
		{
			this._removeDetailEvent();
			var dx:number = 0;
			var mx:number = -100;
			if(this._isPrev){
				mx = 100;
			}
			//
			// var page:HTMLElement = <HTMLElement>document.querySelector('.page-worksDetail');
			if(document.getElementsByClassName('page-worksDetail')[1]) {
				var page:HTMLElement = <HTMLElement>document.getElementsByClassName('page-worksDetail')[1];
			}else {
				var page:HTMLElement = <HTMLElement>document.getElementsByClassName('page-worksDetail')[0];
			}
			if(page){
				TrTween.serial(
					TrTween.func(function():void{
						this.dispatchEvent(new Events('onDetailLeave'));
					},null,this),
					TrTween.changeUnit(page,{x:'%'}),
					TrTween.prop(page,{display:'block',x:dx}),
					TrTween.wait(.6),
					TrTween.tween(page,{x:mx},null,0.6,Quart.easeInOut),
					TrTween.prop(page,{display:'none'})
				).play();
			}else{
				this.dispatchEvent(new Events('onDetailLeave'));
			}
		}

		onDetailArriveTop():void
		{
			this._addDetailEvent();
			if(this._isPrev){
				this._isPrev = false;
			}
			var page:HTMLElement = <HTMLElement>document.getElementsByClassName('page-worksDetail')[0];
			if(page){
				TrTween.serial(
					TrTween.prop(page,{display:'block',alpha:0}),
					TrTween.wait(.6),
					TrTween.tween(page,{alpha:1,x:0},null,.8,Quart.easeInOut),
					TrTween.func(function():void{
						this.dispatchEvent(new Events('onDetailArriveTop'));
					},null,this)
				).play();
			}else{
				this.dispatchEvent(new Events('onDetailArriveTop'));
			}
		}

		onDetailLeaveTop():void
		{
			this._removeDetailEvent();
			var dx:number = 0;
			var mx:number = -100;
			//
			var page:HTMLElement = <HTMLElement>document.getElementsByClassName('page-worksDetail')[0];
			if(page){
				TrTween.serial(
					//
					TrTween.prop(page,{display:'block'}),
					TrTween.changeUnit(page,{x:'%'}),
					TrTween.tween(page,{x:mx},null,0.6,Quart.easeInOut),
					TrTween.prop(page,{display:'none'}),
					TrTween.func(function():void{
						this.dispatchEvent(new Events('onDetailLeaveTop'));
					},null,this)
				).play();
			}else{
				this.dispatchEvent(new Events('onDetailLeaveTop'));
			}
		}
		resize(x,y):void
		{

		}
		private _setArrive():void
		{
      var trClass:any = [],
          worksList:NodeList = document.getElementsByClassName('worksList'),
  		    len:number = worksList.length,
          i:number = 0;
      //
			for(i = 0;i < len;i++){
				var target:HTMLElement = <HTMLElement>worksList[i];
        if(i % 2 === 0){
          trClass[i] = TrTween.addClass(target,'lt')
        }else{
          trClass[i] = TrTween.removeClass(target,'lt')
        }
			}
      TrTween.parallelTweens(trClass).play();
      //
			this._worksCateNav = <HTMLElement>document.getElementById('js-worksCateNav');
			this._worksGroupNav = <HTMLElement>document.getElementById('js-worksGroupNav');
			this._worksGroupLine = <HTMLElement>document.getElementById('js-worksGroupLine');


      TrTween.parallel(
  			TrTween.prop(this._worksCateNav,{alpha:0}),
  			TrTween.prop(this._worksGroupNav,{alpha:0}),
  			TrTween.prop(this._worksGroupLine,{width:0})
      ).play();
			//
			this._worksList = document.getElementsByClassName('worksList');
			var len:number = this._worksList.length;
			for(var i:number = 0;i < len;i++){
				var target:HTMLElement = <HTMLElement>this._worksList[i];
				TrTween.prop(target,{y:300,alpha:0}).play();
			}
		}
		private _moveArrive():void
		{

			var page:HTMLElement = <HTMLElement>document.querySelector('.page-works');

			TrTween.changeUnit(this._worksGroupLine,{width:'%',x:'%'}).play();
			TrTween.serial(
        TrTween.prop(page,{display:'block',alpha:0}),
				TrTween.tween(page,{alpha:1},{alpha:0},0.6,Quart.easeInOut),
				TrTween.func(function():void{
          var h:number = this._worksGroupNav.parentNode.offsetHeight;
					TrTween.parallel(
            TrTween.delay(TrTween.tween(this._worksCateNav,{alpha:1},null,0.5,Quart.easeInOut),0.2),
            TrTween.prop(this._worksGroupLine,{height:h}),
            TrTween.serial(
						  TrTween.tween(this._worksGroupLine,{width:100},null,0.4,Quart.easeInOut),
						  TrTween.prop(this._worksGroupNav,{alpha:1}),
						  TrTween.tween(this._worksGroupLine,{x:100},null,0.4,Quart.easeInOut)
            ),
						TrTween.func(function():void{
							var len:number = this._worksList.length;
							for(var i:number = 0;i < len;i++){
								var target:HTMLElement = <HTMLElement>this._worksList[i];
								var del:number = (i * 0.1) + 0.5;
								TrTween.delay(TrTween.tween(target,{y:0,alpha:1},null,0.4,Quart.easeInOut),del).play();
							}
						},null,this)
					).play();
				},null,this),
				TrTween.func(function():void{
					this.dispatchEvent(new Events('onArrive'));
					// console.log('works:' + 'onArrive');
				},null,this)
			).play();
		}
		private _setEvent():void
		{
			//
			this._onClickEvent = (e:Event):void => {
				e.preventDefault();
				var target:HTMLElement = <HTMLElement>e.currentTarget;
				var len:number = this._detailLink.length;
				for(var i:number = 0;i < len;i++){
					if(target === this._detailLink[i]){
						if(this._getDevice() != 'sp'){
							var parent:HTMLElement = <HTMLElement>target.parentNode.parentNode.parentNode.parentNode;
							// var scTarget:any = ((<any>window).webkitRequestAnimationFrame === undefined) ? document.documentElement : document.body;
							var scTarget:any = ((<any>document).scrollingElement === undefined) ? document.documentElement : (<any>document).scrollingElement;
							var tp:number = parent.getBoundingClientRect().top + scTarget.scrollTop;
							var lf:number = parent.getBoundingClientRect().left;
							var wd:number = parent.getBoundingClientRect().width;
							var imgs:any = parent.children[0];
							var cloneObj:HTMLElement = imgs.cloneNode(true);
							var ww = Math.max.apply( null, [document.body.clientWidth, document.documentElement.clientWidth,window.innerWidth]);
							if(ww < 1200) ww = 1200;
							cloneObj.className = 'imgsClone';
							this._worksBlock.appendChild(cloneObj);
							TrTween.serial(
								TrTween.prop(cloneObj,{x:lf,y:tp,width:wd}),
								TrTween.prop(imgs,{alpha:0}),
								TrTween.tween(cloneObj,{x:0,y:0,width:ww},null,0.6,Quart.easeInOut),
								TrTween.wait(1),
								TrTween.func(function():void{
									this._worksBlock.removeChild(cloneObj);
								},null,this),
								TrTween.prop(imgs,{alpha:1})
							).play();
						}

						var href:string = target.getAttribute('href');
						this._pageUrl = href;
						this.dispatchEvent(new Events('worksDetailClick'));
					}
				}
			};
			//
			this._onClickPNEvent = (e:Event):void => {
				e.preventDefault();
				// console.log('clickPN');
				var target:HTMLElement = <HTMLElement>e.currentTarget;
				var len:number = this._detailPNLink.length;
				for(var i:number = 0;i < len;i++){
					if(target === this._detailPNLink[i]){
						if(target.classList.contains('prev')){
							this._isPrev = true;
						}else{
							this._isPrev = false;
						}
						var href:string = target.getAttribute('href');
						this._pageUrl = href;
						this.dispatchEvent(new Events('worksDetailClick'));
					}
				}
			};
			//
			this._onClickBackEvent = (e:Event):void => {
				e.preventDefault();
				// console.log('clickBack');
				var target:HTMLElement = <HTMLElement>e.currentTarget;
				var len:number = this._detailPNLink.length;
				for(var i:number = 0;i < len;i++){
					if(target === this._detailPNLink[i]){
						var href:string = target.getAttribute('href');
						this._pageUrl = href;
						this.dispatchEvent(new Events('worksDetailClick'));
					}
				}
			};

      this._onClickCateLinkEvent = (e:Event):void => {
				e.preventDefault();
				var target:HTMLElement = <HTMLElement>e.currentTarget;
				var len:number = this._cateLink.length;
				for(var i:number = 0;i < len;i++){
					if(target === this._cateLink[i]){
						var href:string = target.getAttribute('href');
						TrTween.addClass(this._cateLink[i],'ac').play();
            this._cateType = href;
            this._cateChange();
					}else{
            TrTween.removeClass(this._cateLink[i],'ac').play();
          }
				}
        var len2:number = this._groupLink.length;
				for(var i2:number = 0;i2 < len2;i2++){
          TrTween.removeClass(this._groupLink[i2],'ac').play();
				}
        this._groupType = '';
			};

      this._onClickGroupLinkEvent = (e:Event):void => {
				e.preventDefault();
				var target:HTMLElement = <HTMLElement>e.currentTarget;
				var len:number = this._groupLink.length;
				for(var i:number = 0;i < len;i++){
					if(target === this._groupLink[i]){
            var href:string = target.getAttribute('href');
            if(href === this._groupType){
              TrTween.removeClass(this._groupLink[i],'ac').play();
              this._groupType = '';
            }else{
              TrTween.addClass(this._groupLink[i],'ac').play();
              this._groupType = href;
            }
            this._groupChange();
					}else{
            TrTween.removeClass(this._groupLink[i],'ac').play();
          }
				}
			};
		}
		private _addEvent():void
		{
			this._detailLink = document.getElementsByClassName('js-detailLink');
			var len:number = this._detailLink.length;
			for(var i:number = 0;i < len;i++){
				this._detailLink[i].addEventListener('click',this._onClickEvent,false);
			}
      //
      this._cateLink = document.getElementsByClassName('js-cateLink');
			var len:number = this._cateLink.length;
			for(var i:number = 0;i < len;i++){
				this._cateLink[i].addEventListener('click',this._onClickCateLinkEvent,false);
			}
      //
      this._groupLink = document.getElementsByClassName('js-groupLink');
			var len:number = this._groupLink.length;
			for(var i:number = 0;i < len;i++){
				this._groupLink[i].addEventListener('click',this._onClickGroupLinkEvent,false);
			}
		}
		private _removeEvent():void
		{
			this._detailLink = document.getElementsByClassName('js-detailLink');
			var len:number = this._detailLink.length;
			for(var i:number = 0;i < len;i++){
				this._detailLink[i].removeEventListener('click',this._onClickEvent,false);
			}
		}
		private _addDetailEvent():void
		{
			this._detailPNLink = document.getElementsByClassName('js-detailPNLink');
			var len:number = this._detailPNLink.length;
			for(var i:number = 0;i < len;i++){
				this._detailPNLink[i].addEventListener('click',this._onClickPNEvent,false);
			}
			//
			var btnBack:HTMLElement = <HTMLElement>document.getElementById('js-btnBack');
			btnBack.addEventListener('click',(e)=>{
				e.preventDefault();
				this.dispatchEvent(new Events('worksBack'));
			},false);
		}
		private _removeDetailEvent():void
		{
			this._detailPNLink = document.getElementsByClassName('js-detailPNLink');
			var len:number = this._detailPNLink.length;
			for(var i:number = 0;i < len;i++){
				this._detailPNLink[i].removeEventListener('click',this._onClickPNEvent,false);
			}
		}
    //
    private _cateChange():void
    {
      var tr:any = [],
          tr2:any = [],
          trClass:any = [],
          worksList:NodeList  = document.getElementsByClassName('worksList'),
  		    len:number = worksList.length,
  		    len2:number = 0,
          currentList:any = [],
          i:number = 0,
          i2:number = 0;
      //
			for(i = 0;i < len;i++){
				var target:HTMLElement = <HTMLElement>worksList[i];
        if(target.getAttribute('cate').indexOf(this._cateType) != -1){
          currentList.push(target);
        }
        tr[i] = TrTween.serial(
          TrTween.tween(target,{scaleX:0,scaleY:0,y:150},{scaleX:1,scaleY:1,y:0},.3,Quart.easeInOut),
          TrTween.prop(target,{display:'none'})
        )
			}
      //
      len2 = currentList.length;
      for(i2 = 0;i2 < len2;i2++){
				var target2:HTMLElement = <HTMLElement>currentList[i2];
        if(i2 % 2 === 0){
          trClass[i2] = TrTween.addClass(target2,'lt')
        }else{
          trClass[i2] = TrTween.removeClass(target2,'lt')
        }
        tr2[i2] = TrTween.serial(
          TrTween.prop(target2,{scaleX:0,scaleY:0,y:150,display:'block'}),
          TrTween.tween(target2,{scaleX:1,scaleY:1,y:0},{scaleX:0,scaleY:0,y:150},.3,Quart.easeInOut)
        )
			}
      //
      TrTween.serial(
        TrTween.parallelTweens(tr),
        TrTween.parallelTweens(trClass),
        TrTween.parallelTweens(tr2)
      ).play();
    }
    private _groupChange():void
    {
      var tr:any = [],
          tr2:any = [],
          trClass:any = [],
          worksList:NodeList  = document.getElementsByClassName('worksList'),
  		    len:number = worksList.length,
  		    len2:number = 0,
          currentList:any = [],
          i:number = 0,
          i2:number = 0;
      //
			for(i = 0;i < len;i++){
				var target:HTMLElement = <HTMLElement>worksList[i];
        if(target.getAttribute('cate').indexOf(this._cateType) != -1){
          if(target.getAttribute('group').indexOf(this._groupType) != -1){
            currentList.push(target);
          }
        }
        tr[i] = TrTween.serial(
          TrTween.tween(target,{scaleX:0,scaleY:0,y:150},{scaleX:1,scaleY:1,y:0},.3,Quart.easeInOut),
          TrTween.prop(target,{display:'none'})
        )
			}
      len2 = currentList.length;
      for(i2 = 0;i2 < len2;i2++){
				var target2:HTMLElement = <HTMLElement>currentList[i2];
        if(i2 % 2 === 0){
          trClass[i2] = TrTween.addClass(target2,'lt')
        }else{
          trClass[i2] = TrTween.removeClass(target2,'lt')
        }
        tr2[i2] = TrTween.serial(
          TrTween.prop(target2,{scaleX:0,scaleY:0,y:150,display:'block'}),
          TrTween.tween(target2,{scaleX:1,scaleY:1,y:0},{scaleX:0,scaleY:0,y:150},.3,Quart.easeInOut)
        )
			}
      //
      TrTween.serial(
        TrTween.parallelTweens(tr),
        TrTween.parallelTweens(trClass),
        TrTween.parallelTweens(tr2)
      ).play();
    }

		private _getDevice():string
		{
      var userAgent = window.navigator.userAgent.toLowerCase();
      if((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0 || navigator.userAgent.indexOf('iPad') > 0){
        //タブレット
        return 'tb';
      } else if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
        //スマホ
        return 'sp';
      } else {
        return 'pc';
        }
    }

		public get pageUrl():string{
			return this._pageUrl;
		}
	}
}
