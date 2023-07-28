/// <reference path="../../threejs/three.d.ts" />
/// <reference path="../contents/TrTween.d.ts" />
/// <reference path="./base.ts" />

/*
*オープニングを制御
*@class Opening
*/
namespace jp.sites
{
  const SPEED:number = .015;
  const UNIT:number = 100;
  const OPSCALE:number = 2.5;
  const OPROTATE:number = 135;

	export class Opening
	{
    private _winW:number;
		private _winH:number;
    //
    private _opMain:HTMLElement = <HTMLElement>document.getElementById('js-opMain');
    // private _opPer:HTMLElement = <HTMLElement>document.getElementById('js-opper');
    private _opInner:HTMLElement = <HTMLElement>document.getElementById('js-opInner');
    //
    private _coCopyImg:HTMLElement = <HTMLElement>document.getElementById('js-coCopyImg');
    private _logo:HTMLElement = <HTMLElement>document.getElementById('js-logo');
    private _menuBtn:HTMLElement = <HTMLElement>document.getElementById('js-menuBtn');
    private _ftContact:HTMLElement = <HTMLElement>document.getElementById('js-ftContact');
    private _indBlock:HTMLElement = <HTMLElement>document.getElementById('js-indBlock');
    private _arBottomImg:HTMLElement = <HTMLElement>document.getElementById('js-arBottomImg');
    //
    private _opLogo:HTMLElement = <HTMLElement>document.getElementById('js-opLogo');
    private _logoH:HTMLElement = <HTMLElement>document.getElementById('js-logoH');
    private _logoB:HTMLElement = <HTMLElement>document.getElementById('js-logoB');
		private _newsArea = <HTMLElement>document.getElementById('js-newsArea');
    //
    private _isLoading:boolean = false;
    private _loadPer:number = 0;
    private _dmyPer:number = 0;
    //
    private _cvs:HTMLCanvasElement;
		private _cts:CanvasRenderingContext2D;
    private _xAxis:number = 0;
    private _yAxis:number = 0;
    private _sec:number = 0;
    private _time:number = 0;
    private _completeFunc:()=>void;
    private _dispatcher:EventDispatcher;
		constructor()
		{
      this._dispatcher = new EventDispatcher();
      // this._completeFunc = comp;
      this._initialize();
      this.resize(document.body.clientWidth,document.body.clientHeight);
		}
    public addEventListener(eventType:string,listener:(e:Events)=>void):void
    {
      this._dispatcher.addEventListener(eventType,listener);
    }
    public removeEventListener(eventType:string,listener:(e:Events)=>void):void
    {
      this._dispatcher.removeEventListener(eventType,listener);
    }
		private _initialize():void
		{
      TrTween.changeUnit(this._opMain,{x:'%',y:'%'}).play();
      TrTween.changeUnit(this._opInner,{x:'%'}).play();
      TrTween.changeUnit(this._coCopyImg,{width:'%'}).play();
      TrTween.changeUnit(this._indBlock,{y:'%'}).play();
      //
      TrTween.parallel(
        TrTween.prop(this._coCopyImg,{width:0}),
        TrTween.prop(this._logo,{y:-100}),
        TrTween.prop(this._menuBtn,{y:-100}),
        TrTween.prop(this._ftContact,{x:200}),
        TrTween.prop(this._indBlock,{y:-300}),
        TrTween.prop(this._arBottomImg,{y:300}),
        TrTween.prop(this._logoB,{width:0}),
        TrTween.prop(this._newsArea,{y:400})
      ).play();
      //
      this._cvs = <HTMLCanvasElement>document.getElementById('js-opCvs');
      this._cvs.width = this._winW;
      this._cvs.height = this._winH;
      this._cts = <CanvasRenderingContext2D>this._cvs.getContext('2d');

      //
      Render.addListener(this);
      Render.start();
		}
		start():void
		{
		}
    remove():void
    {
      Render.removeListener(this);
    }
		resize(w,h):void
		{
      this._winW = 200;
			this._winH = h;
      //
      this._cvs.width = this._winW;
      this._cvs.height = this._winH;
      // this._yAxis = 0;
      // this._xAxis = ~~(this._winW/2);
      this._xAxis = 100;
      this._yAxis = 0;
		}
		update(time:number):void
		{
      this._cts.clearRect(0, 0, this._winW, this._winH);
      this._drowWave('#fff', 1, 2, 0);

      this._sec  = this._sec + SPEED;
      this._time = this._sec * Math.PI;
      //
      if(! this._isLoading){
        if(this._dmyPer >= 100){
          // TrTween.prop(this._opPer,{alpha:0}).play();
          this._isLoading = true;
          // this._nextOpening();
          this._dispatcher.dispatchEvent(new Events("init",this));

        }else{
          if (this._dmyPer < this._loadPer) {
            this._dmyPer++;
            // this._opPer.innerHTML = String(this._dmyPer) + '%';
            TrTween.prop(this._opInner,{x:this._dmyPer}).play();
            if(this._dmyPer === 33){
              TrTween.serial(
                TrTween.tween(this._logoB,{width:100},{width:0},0.4,Quart.easeInOut),
                TrTween.prop(this._logoH,{alpha:0})
              ).play();
            }
          }
        }
      }
		}
    public nextOpening():void
    {
      TrTween.serial(
        TrTween.prop(this._opMain,{rotation:OPROTATE,scaleX:OPSCALE,scaleY:OPSCALE}),
        TrTween.parallel(
          TrTween.tween(this._opMain,{x:150,y:-300},null,3,Quart.easeInOut),
          TrTween.serial(
            TrTween.delay(TrTween.tween(this._logoB,{alpha:0},{alpha:1},0.4,Quart.easeInOut),1.0),
            TrTween.prop(this._opLogo,{display:'none'})
          ),
          TrTween.delay(
            TrTween.func(()=>{
              this._navigateShow();
            },null,null)
          ,2.0)
        ),
        TrTween.prop(this._opMain,{display:'none'}),
        TrTween.func(()=>{
					Render.removeListener(this);
				},null,this)
      ).play();
      //transform: rotate(135deg) scale(2,2) translateX(-100%);
    }
    private _navigateShow():void
    {
			TrTween.serial(
	      TrTween.parallel(
	        TrTween.delay(TrTween.tween(this._coCopyImg,{width:100},{width:0},0.5,Quart.easeInOut),.5),
	        TrTween.tween(this._logo,{y:0},{y:-100},0.5,Quart.easeInOut),
	        TrTween.tween(this._menuBtn,{y:0},{y:-100},0.5,Quart.easeInOut),
	        TrTween.tween(this._ftContact,{x:0},{x:200},0.5,Quart.easeInOut),
	        TrTween.tween(this._indBlock,{y:0},{y:-300},0.5,Quart.easeInOut),
	        TrTween.tween(this._arBottomImg,{y:0},{y:300},0.5,Quart.easeInOut)
	      ),
				TrTween.tween(this._newsArea,{y:0},null,0.5,Quart.easeInOut)
			).play();
    }
    public setLoadPer(per):void
    {
      this._loadPer = per;
    }
    private _drowWave(color, alpha, zoom, delay):void
    {
      this._cts.fillStyle = color;
      this._cts.globalAlpha = alpha;

      this._cts.beginPath();
      this._drowSine(this._time / 0.5, zoom, delay);
      this._cts.lineTo(0, this._winH + 10);
      this._cts.lineTo(0, 0);
      this._cts.closePath()
      this._cts.fill();
    }
    private _drowSine(t, zoom, delay):void
    {
      var y = t;
      var x = Math.sin(y) / zoom; //時間を横の位置とする
      this._cts.moveTo(UNIT*x + this._xAxis, this._yAxis);

      // Loop to draw segments (横幅の分、波を描画)
      for (var i = this._yAxis; i <= this._winH + 10; i += 10) {
        y = t+(-this._yAxis+i)/UNIT/zoom;
        x = Math.sin(y - delay)/3;
        this._cts.lineTo(UNIT*x+this._xAxis,i);
      }
    }
	}
}
