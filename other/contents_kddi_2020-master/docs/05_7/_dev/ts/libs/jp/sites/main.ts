/// <reference path="../../threejs/three.d.ts" />
/// <reference path='../contents/TrTween.d.ts' />
import AssetLoader = jp.sites.AssetLoader;

import TrTween = jp.contents.TrTween.TrTween;
import Render = jp.contents.TrTween.Render;
import Router = jp.sites.Router;
import Metaball = jp.sites.Metaball;
import BackgroundVisual = jp.sites.BackgroundVisual;
import Opening = jp.sites.Opening;

import TopPage = jp.sites.page.TopPage;
import AboutPage = jp.sites.page.AboutPage;
import WorksPage = jp.sites.page.WorksPage;
import MemberPage = jp.sites.page.MemberPage;

import Contact = jp.sites.etc.Contact;
import ITween = jp.contents.TrTween.ITween;
import Quart = jp.contents.easing.Quart;
import Cubic = jp.contents.easing.Cubic;
import Back = jp.contents.easing.Back;
import Sine = jp.contents.easing.Sine;
import Quad = jp.contents.easing.Quad;
import Elastic  = jp.contents.easing.Elastic;
// import Events = jp.contents.event.Event;
// import EventDispatcher = jp.contents.event.EventDispatcher;
/*
*コンテンツを統括するコントローラ
*スクロールやリサイズなどのイベントは基本的にはこのクラスが一元的に管理する。
*IContentBaseのインスタンス同士の直接のやり取りは絶対に禁止！
*またできる限り抽象化されたままの状態でインスタンスを保持しておく方が良い。
*やり取りが必要な場合はEventを通じてMainのクラスが捌く。
*@class Main
*/



const CRYSTAL_VER:string = `
varying vec2 vUv;
varying vec3 pos;
void main() {
	vUv = uv;
	pos = position;
	gl_Position = (projectionMatrix * modelViewMatrix * vec4(pos,1.0));

}`;
const CRYSTAL_FRAG:string = `
uniform sampler2D refrection;
uniform float rotation;
varying vec2 vUv;
varying vec3 pos;
void main(){
  	float r = rotation / (3.14 / 180.);
  	float dx = (vUv.x + mod(r,256.) / 256.) - 1.;
  	dx = dx < 0. ? dx + 1. : dx;
	vec2 coord = vec2(dx,vUv.y - .3);
	vec4 env = texture2D(refrection,coord);
	float len = length(pos);

	gl_FragColor = (env * 1.02 ) * (.8 + len);
}
`
const WORLD_BG_VER:string = `
uniform float time;
varying vec2 vUv;
void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
const WORLD_BG_FRAG:string = `
varying vec2 vUv;
uniform float time;
vec3 Hue( float hue )
{
	vec3 rgb = fract(hue + vec3(0.0,2.0/3.0,1.0/3.0));
	rgb = abs(rgb*2.0-1.0);
	return clamp(rgb*3.0-1.0,0.0,1.0);
}
vec3 HSVtoRGB( vec3 hsv )
{
	return ((Hue(hsv.x)-1.0)*hsv.y+1.0) * hsv.z;
}
void main(){
	float ax = vUv.x / 1.;
	float ay = vUv.y / 1.;
	gl_FragColor = vec4(HSVtoRGB(vec3(sin(time * .1 + ax ) * ay * .4,ay * .4,1.)),1.);
}
`
const ROAD_VER:string = `

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vViewPosition;
uniform float time;
void main() {
	vec4 vvp = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * vvp;

	vViewPosition = vvp.xyz;
	vUv = uv;
    vPosition = position;
    vNormal = normal;
}
`
const ROAD_FRAG:string = `
struct PointLight {
	vec3 position;
	vec3 color;
	float distance;
	float decay;
	int shadow;
	float shadowBias;
	float shadowRadius;
	vec2 shadowMapSize;
};

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vViewPosition;
uniform vec3 diffuse;
uniform PointLight pointLights[1];
uniform vec3 ambientLightColor;
uniform float time;
vec3 Hue( float hue )
{
	vec3 rgb = fract(hue + vec3(0.0,2.0/3.0,1.0/3.0));
	rgb = abs(rgb*2.0-1.0);
	return clamp(rgb*3.0-1.0,0.0,1.0);
}
vec3 HSVtoRGB( vec3 hsv )
{
	return ((Hue(hsv.x)-1.0)*hsv.y+1.0) * hsv.z;
}

void main(){

	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	vec3 normal = normalize( vNormal ) * flipNormal;

	PointLight pl = pointLights[0];
	vec4 addedLights = vec4(0.1, 0.1, 0.1, 1.0);
	vec4 color = vec4(abs(cos(.1 * vPosition.y)));
	vec3 adjustedLight = pl.position - vViewPosition;
	float lightDistance = length(adjustedLight);
	float cc = pow( saturate( -lightDistance / pl.distance + 1.0 ), pl.decay );
	vec3 lightDirection = normalize(vPosition - adjustedLight);

	addedLights.rgb += clamp(dot(-lightDirection, normal), 0.0, 1.0) * pl.color * cc + ambientLightColor;

	gl_FragColor = mix(vec4(diffuse.x, diffuse.y, diffuse.z, 1.0), addedLights, addedLights);
}
`

const FLOAT_VER:string = `

varying vec2 vUv;
uniform float time;

void main() {
	vUv = position.xy;
	float py = position.y + sin(time + position.z * 1.4) * .1;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position.x,py,position.z , 1.0 );
}
`
const FLOAT_FRAG:string = `
varying vec2 vUv;
uniform float time;
vec3 Hue( float hue )
{
	vec3 rgb = fract(hue + vec3(0.0,2.0/3.0,1.0/3.0));
	rgb = abs(rgb*2.0-1.0);
	return clamp(rgb*3.0-1.0,0.0,1.0);
}
vec3 HSVtoRGB( vec3 hsv )
{
	return ((Hue(hsv.x)-1.0)*hsv.y+1.0) * hsv.z;
}
void main(){
	gl_FragColor = vec4(HSVtoRGB(vec3(sin(time * .1 + .4 * vUv.x) * .4, abs(cos(time * .1)) * .2 + .2,1.)),abs(cos(time * .2)) * .4 + .5);
}
`

const MIN_WIDTH:number = 1200;

namespace jp.sites
{
	export interface UniformValue
	{
		type:string;
		value:number;
	}
	interface PositionInfo
	{
		top:number;
		height:number;
	}


	export class Main extends EventDispatcher
	{
		//
		private _router:Router;
		private _metaball:Metaball;
		private _bvisual:BackgroundVisual;
		//
    private _opening:Opening;
		private _contact:Contact;
		//
		private _pageList:Array<any>;
		private _prevPage:any;
		private _nextPage:any;
		//
		private _winW:number;
		private _winH:number;
		//
		private _onLoadStart:()=>void;
		private _onLoadComplete:()=>void;
		private _onPrevLeaved:()=>void;
		private _onNextArrived:()=>void;
		//
		private _onWorksDetailClick:()=>void;
		private _onWorksLoadStart:()=>void;
		private _onWorksLoadComplete:()=>void;
		private _onWorksLeaved:()=>void;
		private _onWorksArrived:()=>void;
		private _onWorksBack:()=>void;
		//
		private _sDelegate:(e:Event)=>void;
		private _rDelegate:(e:Event)=>void;
		private _mDelegate:(e:Event)=>void;
    // private _tsDelegate:(e:Event)=>void;
    // private _tmDelegate:(e:Event)=>void;
    // private _teDelegate:(e:Event)=>void;
		private _updelegate:(time:number)=>void;
		private _scrollValue:number = 0;
		private _scrollTarget:any;
		//
		private _sceneID:number;
		private _toggleID:number;
		private _parentPos:number;
		private _scrollDmyList:Array<number> = new Array(8);
		private _scrollDmyMax:number = 0;
		private _scrollDmyID:number = 0;
		private _scrollDmyNum:number = 0;
		private _scrollPrevID:number = 0;
		//
		private _indBlock:HTMLElement;
		private _detailBtn:NodeList;
		private _detailBtnNav:NodeList;
		private _indicatorBtn:NodeList;
		private _menuBtn:HTMLElement;
		private _indexBtn:HTMLElement;
		private _backBtn:HTMLElement;
		private _worksDetailBtn:NodeList;
		private _btnClose:HTMLElement;
		private _newsArea:HTMLElement;
		private _newsAreaIn:HTMLElement;
		private _newsBtn:HTMLElement;
		//
		private _contentH:number;
		private _objWrapper:HTMLElement;
		private _objScroll:HTMLElement;
		private _objTop:HTMLElement;
		private _objAbout:HTMLElement;
		private _objWorks:HTMLElement;
		private _objMember:HTMLElement;
		private _scToAb:HTMLElement;
		private _scAbWo:HTMLElement;
		private _scWoMe:HTMLElement;
		private _scMeTo:HTMLElement;
		//
		private _arBottom:HTMLElement;
		private _ftContact:HTMLElement;
		//
		private _contactBlock:HTMLElement;
		private _navigateBlock:HTMLElement;
    //
    private _fixObj:NodeList;
		//
		private _stage:HTMLCanvasElement;
		private _scene:THREE.Scene;
    private _camera:THREE.PerspectiveCamera;
    private _renderer:THREE.WebGLRenderer;
		//
		private _baseCamZ:number = 500;
		private _screenW:number;
		private _screenH:number;
		private _moveX:number;
		private _moveY:number;
		private _mouseX:number;
		private _mouseY:number;
		//
		private _isLastScroll:boolean = false;
		private _isMove:boolean = false;
		private _isSecond:boolean = false;
		private _isPopup:boolean = false;
		private _isNavigateBack:boolean = false;
    private _isDevice:string = '';

		private _isDetailType:number = 0;
		private _befScroll:number = 0;
		private _tval:number = 0;
		private _progDelegate:(e:ProgressEvent)=>void;
		private _compDelegate:(e:Events)=>void;
    //
    private _positions:Array<PositionInfo>;
    private _contentsHeight:number;
    private _bef:number;
    private _total:number = 0;
		//
		private _prm:Object = new Object;
		constructor()
		{
			super();
			//
			this._initialize();
			this._setLinkBtn();
		}

		private _initialize():void
		{
			//
			var pair:any = location.search.substring(1).split('&');
			for(var i:number = 0;pair[i];i++) {
		    var kv:string = pair[i].split('=');
		    this._prm[kv[0]] = kv[1];
			}
			//
      // alert(screen.height + ' : ' + window.innerHeight);
      this._isDevice = this._getDevice();
      //
			// this._scrollTarget = ((<any>window).webkitRequestAnimationFrame === undefined) ? document.documentElement : document.body;
			// this._scrollTarget = ( (!(<any>window).chrome && 'WebkitAppearance' in document.documentElement.style) || navigator.userAgent.indexOf('OPR') !== -1 ) ? document.body : document.documentElement;
			// this._scrollTarget = (<any>document).scrollingElement;
			this._scrollTarget = ((<any>document).scrollingElement === undefined) ? document.documentElement : (<any>document).scrollingElement;
			this._setSceneObject();
			this._sDelegate = (e:Event):void => {
				this._onScroll(e);
			};
			this._rDelegate = (e:Event):void =>{
				this._onResize(e);
			}
			// this._mDelegate = (e:Event):void =>{
			// 	this._onMouseMove(e);
			// }
      // this._tsDelegate = (e:Event):void =>{
			// 	this._onTouchStart(e);
			// }
      // this._tmDelegate = (e:Event):void =>{
			// 	this._onTouchMove(e);
			// }
      // this._teDelegate = (e:Event):void =>{
			// 	this._onTouchEnd(e);
			// }
			this._updelegate = (time:number):void =>{
				this.update(time);
			}
			//
			this._router = new Router(this);
			this._metaball = Metaball.getInstance();
			this._bvisual = new BackgroundVisual();
			//
			this._contact = new Contact();
			//
			this._opening = new Opening();
		}
		init():void
		{
			// console.log('init');
			var loader:AssetLoader = AssetLoader.getInstance(),
				mp:MemberPage = new MemberPage();

			this._progDelegate =(e:ProgressEvent):void =>
			{
				this._onProgressEvent(e);
			}
			this._compDelegate = (e:Events):void =>
			{
				this._onLoadEnd(e);
			}

			this._pageList = [
				new TopPage(),
				new AboutPage(),
				new WorksPage(),
				mp
			];


			loader.addEventListener("progressEvent",this._progDelegate);
			loader.addEventListener("complete",this._compDelegate);


			mp.load();
			this._bvisual.load();
			this._metaball.load();
			loader.load();
			var initFunc:(e:Events)=>void = (e:Events):void=>
			{
				this._opening.removeEventListener("init",initFunc);
				this.start();
				var count:number = 10;
				while(--count)
				{
					mp.drawOnce(-1000);
					this._renderer.render(this._scene,this._camera);
				}
				setTimeout(()=>
				{
					mp.drawOnce(0);
					this._renderer.render(this._scene,this._camera);
					setTimeout(()=>{
						this._opening.nextOpening();
						this._metaball.start(1.5);
					},100);
				},100);
			};
			this._opening.addEventListener("init",initFunc);
		}
		private _onProgressEvent(e:ProgressEvent):void
		{
			var percent:number = ~~((e.loaded/e.total) * 100);
			this._opening.setLoadPer(percent);
		}
		private _onOpeningInited():void
		{

		}
		private _onLoadEnd(e:Events):void
		{
			// console.log('complete!')
      this._drawConsole();
			var l:AssetLoader = AssetLoader.getInstance();
			l.removeEventListener("progressEvent",this._progDelegate);
			l.removeEventListener("complete",this._compDelegate);
			window.addEventListener('scroll',this._sDelegate);
			window.addEventListener('resize',this._rDelegate);
			// document.body.addEventListener('mousemove', this._mDelegate, false);
      // document.body.addEventListener('touchstart',this._tsDelegate);
      // document.body.addEventListener('touchmove',this._tmDelegate);
      // document.body.addEventListener('touchend',this._teDelegate);

			this._setScreen();
			//

			//
			for(var k:number = 0,len:number = this._pageList.length;k < len;k++)
			{
				var page:any = this._pageList[k];
				page.init(this._renderer,this._camera,this._scene);
			}
			//

			this._metaball.init(this._renderer,this._camera,this._scene,this._subRt);
			this._bvisual.init(this._renderer,this._camera,this._scene);
			//
			this._setWorksEvent();
			this._router.init();
			this._prevPage = this._pageList[this._router.pageID];
			this._setEvent();
			//
			this._addEvent();
			this._bvisual.setTexture(this._subRt.texture,this._metaball.texture)
		}
		start():void
		{
			// console.log('start');
			this._rDelegate(null);
			var owner:Main = this;
			TrTween.serial(
				TrTween.prop(this._objWrapper,{display:'block'}),
				TrTween.func(function():void{
					TrTween.prop(this._scrollTarget,{scrollTop:0}).play();
					Render.addListener(owner);
					if(owner._prm['page'] === 'contact'){
						owner._showContact();
					}
				},null,this)
			).play();
      //
      // this._contact.start();
		}
		_onScroll(e:Event):void
		{
			if(this._isSecond) return;

			this._befScroll = this._scrollValue;
			this._scrollValue = this._scrollTarget.scrollTop;

		}
		private _dg:any;
		private _tr:ITween;
		private _rt:THREE.WebGLRenderTarget;
		private _onResize(e:Event):void
		{
			// alert("RESIZE");
			this._winW = Math.max.apply( null, [document.body.clientWidth, document.documentElement.clientWidth,window.innerWidth]);
      if(this._isDevice != 'sp' && this._winW < MIN_WIDTH){
        this._winW = MIN_WIDTH;
      }
			this._winH = Math.max.apply( null, [document.body.clientHeight, document.documentElement.clientHeight,window.innerHeight]);
      var hh:number = 0;
      if(this._isDevice === 'sp'){
        hh = screen.height + 30;
      }else{
        hh = this._winH;
      }
			this._ckScreenSize(this._winW, hh);
			this._renderer.setSize(this._screenW, this._screenH);
			this._setObjectPositions();
			this._bvisual.resize();
			for (var val of this._pageList) {
				val.resize(this._winW,hh);
			}
			this._navigateResize();
			this._opening.resize(this._winW, hh);
			this._metaball.resize(this._winW, hh);
		}


		//_check
		private _ckScreenSize(w:number, h:number):void
		{
			var baseW:number = 1200;
			var baseH:number = 900;
			var cw:number = w;
			var ch:number = h;
			var scaleW:number = cw / baseW;
			var scaleH:number = ch / baseH;
			var fixScale:number = scaleW;
			var setW:number = (baseW * fixScale);
			var setH:number = (baseH * fixScale);
			if(setH < ch){
				fixScale = scaleH;
				setW = (baseW * fixScale);
				setH = (baseH * fixScale);
			}


			this._screenW = setW;
			this._screenH = setH;
		}
    // private _onTouchStart(e:Event):void
    // {
    //   var x:number = (<any>e).touches[0].pageX;
    //   this._pageList[3].touchstart(x);
    // }
    // private _onTouchMove(e:Event):void
    // {
    //   var x:number = (<any>e).touches[0].pageX;
    //   this._pageList[3].touchmove(x);
    // }
    // private _onTouchEnd(e:Event):void
    // {
    //   this._pageList[3].touchend();
    // }
		//_set
		private _subRt:THREE.WebGLRenderTarget;
		private _setScreen():void
		{
			var baseW:number = 1200;
			var baseH:number = 900;
			this._stage = <HTMLCanvasElement>document.getElementById('bg');
			this._scene = new THREE.Scene();
			this._renderer = new THREE.WebGLRenderer({canvas:this._stage,alpha:true,antialias:true});
			this._renderer.setClearColor(0x0,0);
			this._renderer.setSize( this._screenW, this._screenH );
			// this._renderer.autoClear = false;
			// this._renderer.setPixelRatio(window.devicePixelRatio)
			this._camera = new THREE.PerspectiveCamera(90, baseW/baseH, 0.1, 50000);
			this._camera.position.z = this._baseCamZ;
			this._winW = document.body.clientWidth;
			this._winH = document.body.clientHeight;
			var parameters = {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBFormat,
				stencilBuffer: true
  			};
			this._subRt = new THREE.WebGLRenderTarget(512,512,parameters);

		}
		public update(time:number):void
		{
			if(this._scrollValue != this._bef)
			{
				this._setScene();
				this._toggleBtn();
				this._bvisual.update(this._total,time);
				this._router.update(this._scrollValue,time);
				this._bef = this._scrollValue;
			}
			this._bvisual.draw();
			for(var k:number = 0,len:number = this._pageList.length;k < len;k++)
			{
				var page:any = this._pageList[k];
				page.update(this._total,time);
				page.draw();
			}

			//
			this._metaball.update(this._total,time);
			this._metaball.draw();

			this._renderer.render(this._scene,this._camera);
			this._renderer.render(this._scene,this._camera,this._subRt);



		}
		//
		private _goto(id:number):void
		{
			this._parentPos = this._router.pageID;
			this._router.changePage(id);
			setTimeout(()=>{this._metaball.reset(true);},100);
		}
		private _backIndex(url:string):void
		{
			this._router.changeWorksPage(url);
		}

		private _setSceneObject():void
		{
			this._objWrapper = <HTMLElement>document.getElementById('wrapper');
			this._objScroll = <HTMLElement>document.getElementById('js-scroll');
			// this._objTop = <HTMLElement>document.getElementById('home');
			// this._objAbout = <HTMLElement>document.getElementById('about');
			// this._objWorks = <HTMLElement>document.getElementById('works');
			// this._objMember = <HTMLElement>document.getElementById('member');
			// this._scToAb = <HTMLElement>document.getElementById('to-ab');
			// this._scAbWo = <HTMLElement>document.getElementById('ab-wo');
			// this._scWoMe = <HTMLElement>document.getElementById('wo-me');
			// this._scMeTo = <HTMLElement>document.getElementById('me-to');
      //
      this._fixObj = document.getElementsByClassName('fixObj');
			//
			this._indBlock = <HTMLElement>document.getElementById('js-indBlock');
			this._contactBlock = <HTMLElement>document.getElementById('js-contactBlock');
			this._navigateBlock = <HTMLElement>document.getElementById('js-navigateBlock');
			//
			this._arBottom = <HTMLElement>document.getElementById('js-arBottom');
			this._ftContact = <HTMLElement>document.getElementById('js-ftContact');
			this._total = 0;
			this._bef = -1000;
			this._setObjectPositions();
		}

		private _setObjectPositions():void
		{
			// this._contentsHeight = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight]);

			// this._positions = [
			// 	{top:this._objTop.offsetTop,height:this._objTop.offsetHeight},
			// 	{top:this._scToAb.offsetTop,height:this._scToAb.offsetHeight},
			// 	{top:this._objAbout.offsetTop,height:this._objAbout.offsetHeight},
			// 	{top:this._scAbWo.offsetTop,height:this._scAbWo.offsetHeight},
			// 	{top:this._objWorks.offsetTop,height:this._objWorks.offsetHeight},
			// 	{top:this._scWoMe.offsetTop,height:this._scWoMe.offsetHeight},
			// 	{top:this._objMember.offsetTop,height:this._objMember.offsetHeight},
			// 	{top:this._scMeTo.offsetTop,height:this._scMeTo.offsetHeight - this._winH}
			// ];
      var hh:number = this._getDevice() === 'sp' ? document.body.clientHeight : this._winH;
			if(this._getDevice() != 'sp'){
	      this._positions = [
					{top:0,height:hh},
					{top:hh,height:hh*4},
					{top:hh*5,height:hh*2},
					{top:hh*7,height:hh*4},
					{top:hh*11,height:hh*2},
					{top:hh*13,height:hh*4},
					{top:hh*17,height:hh*2},
					{top:hh*19,height:hh*3}
				];
	      this._contentsHeight = hh * 23;
			}else{
				this._positions = [
					{top:0,height:hh},
					{top:hh,height:hh*2},
					{top:hh*3,height:hh},
					{top:hh*4,height:hh*2},
					{top:hh*6,height:hh},
					{top:hh*7,height:hh*2},
					{top:hh*9,height:hh},
					{top:hh*10,height:hh}
				];
	      this._contentsHeight = hh * 12;
			}
      //
      this._setScene();
		}
		private _setScene():void
		{
			var scVal:number = 0,
				numID:number = 0;
			if(this._isSecond){
				this._contentH = this._scrollDmyMax;
				numID = this._scrollDmyID == 1 ? 1 : this._scrollDmyID == 2 ? 3 : this._scrollDmyID == 3 ? 5 : numID;
				scVal = this._scrollDmyList[numID];
			}
			else if(this._isPopup)
			{
				this._contentH = this._scrollDmyMax;
				scVal = this._scrollDmyNum;
			}
			else
			{
				this._contentH = this._contentsHeight;
				scVal = this._scrollValue;
			}

			// this._total = 0;
			var total:number = 0,
				i:number = 0,len:number = 8,pi:PositionInfo,pnum:number,pplus:number;
			this._scrollDmyMax = 0;

			for(;i < len;i++)
			{
        pi = this._positions[i];
				pnum = ((scVal - pi.top) / pi.height);
				if(pnum < 0) pnum = 0;
				else if(pnum > 1) pnum = 1;
				else this._sceneID = i;
				total += pnum;
				pplus = pi.top + pi.height;
				this._scrollDmyList[i] = pplus;
			}
			this._total = total;
			this._scrollDmyMax = pplus;

			if(! this._isSecond){

				if(this._isLastScroll && scVal <= 0)
				{
					TrTween.prop(this._scrollTarget,{scrollTop:(this._contentH - document.body.clientHeight - 1)}).play();
				}
				else if((scVal + document.body.clientHeight) >= this._contentH)
				{
					this._isLastScroll = true;
					TrTween.prop(this._scrollTarget,{scrollTop:1}).play();
				}
			}
		}

		private _setLinkBtn():void
		{
			this._detailBtn = document.getElementsByClassName('js-pgBtn');
			this._detailBtnNav = document.getElementsByClassName('js-pgBtnNav');
			this._indicatorBtn = document.getElementsByClassName('js-indBtn');
			this._indexBtn = document.getElementById('js-indexBtn');
			this._menuBtn = document.getElementById('js-menuBtn');
			this._backBtn = document.getElementById('js-backBtn');
			this._btnClose = document.getElementById('js-btnClose');
			this._newsArea = document.getElementById('js-newsArea');
			this._newsAreaIn = document.getElementById('js-newsAreaIn');
			this._newsBtn = document.getElementById('js-newsBtn');

			this._logo = <HTMLElement>document.getElementById('js-logo_bl');
			this._btnClose_bl = <HTMLElement>document.getElementById('js-btnClose_bl');
			this._jsPage = <HTMLElement>document.getElementById('js-page');
			this._jsPageDetail = <HTMLElement>document.getElementById('js-pageDetail');
		}
		private _toggleBtn():void
		{
			if(this._toggleID != this._sceneID){
				var i:number = 0,len:number = this._indicatorBtn.length,tr:ITween;

				for(;i < len;i++) TrTween.removeClass(this._indicatorBtn[i],"ac").play();
				for(i = 0,len = 3;i<len;i++)
				{
					TrTween.parallel(
						TrTween.prop(this._detailBtn[i].parentNode,{display:"none"}),
						TrTween.removeClass(this._detailBtn[i],"ac")
					).play();
				}


				if(this._sceneID < 7) TrTween.addClass(this._indicatorBtn[this._sceneID],"ac").play();
				if(this._sceneID > 0 && this._sceneID % 2 == 0)
				{
					i = this._sceneID / 2 - 1;
					tr = TrTween.serial(
						TrTween.prop(this._detailBtn[i].parentNode,{display:"block"})
						,TrTween.addClass(this._detailBtn[i],"ac")
					)
				}
				else
				{
					tr = TrTween.serial(
						TrTween.parallel(
							TrTween.removeClass(this._detailBtn[0],"ac"),
							TrTween.removeClass(this._detailBtn[1],"ac"),
							TrTween.removeClass(this._detailBtn[2],"ac")
						),
						TrTween.parallel(
							TrTween.removeClass(this._detailBtn[0].parentNode,{display:"none"}),
							TrTween.removeClass(this._detailBtn[1].parentNode,{display:"none"}),
							TrTween.removeClass(this._detailBtn[2].parentNode,{display:"none"})
						)
					)
				}
				tr.play();
				var obj:any = {alpha:1,y:0};
				if(this._sceneID % 2 == 1) obj = {alpha:0,y:30};
				TrTween.tween(this._arBottom,obj,null,.4,Quart.easeInOut).play();

				this._toggleID = this._sceneID;
			}
		}
		//
		private _navigateResize():void{
			if(this._navigateBlock){
				if(this._isDevice === 'pc'){
					var target:HTMLElement = this._navigateBlock;
					var h = this._winH - 20;
					TrTween.prop(target.children[0],{height:h}).play();
				}
			}
		}
		private _logo:HTMLElement;
		private _btnClose_bl:HTMLElement;
		private _jsPage:HTMLElement;
		private _jsPageDetail:HTMLElement;
		private _modalTr:ITween;

		private _showContact():void
		{
			var logo_bl:HTMLElement = this._logo,
				btnClose_bl:HTMLElement = this._btnClose_bl,
				currentPage:HTMLElement = this._jsPage,
				currentDetail:HTMLElement = this._jsPageDetail,
				tweens:Array<ITween> = [];

			if(this._isSecond)
			{
				tweens.push(TrTween.addClass(currentPage,"fix"));
				tweens.push(TrTween.addClass(currentDetail,"fix"));
				tweens.push(TrTween.parallel(
					TrTween.tween(currentPage,{alpha:0},null,0.4,Quart.easeInOut),
					TrTween.tween(currentDetail,{alpha:0},null,0.4,Quart.easeInOut)
				));
			}
			else
			{
				tweens.push(TrTween.addClass(this._objScroll,"fix"));
			}

			if(! this._isPopup){
				this._scrollDmyNum = this._scrollValue;
				tweens.push(TrTween.prop(this._scrollTarget,{scrollTop:0}));
			}
			var tr:ITween = TrTween.wait(0);
			var tr2:ITween = TrTween.wait(0);
			if(this._isPopup)
			{
				tr = TrTween.serial(
          			TrTween.removeClass(this._btnClose,'ac'),
					TrTween.tween(this._navigateBlock,{alpha:0},null,0.4,Quart.easeOut),
					TrTween.prop(this._navigateBlock,{display:'none'})
				)
			}
      //
      tr2 = TrTween.parallel(
        TrTween.prop(btnClose_bl,{alpha:1}),
        TrTween.tween(logo_bl,{alpha:1},null,0.8,Quart.easeInOut),
        TrTween.serial(
          TrTween.prop(this._btnClose,{display:'block'}),
          TrTween.addClass(this._btnClose,'ac')
        )
      )

			this._isPopup = true;
      this._setFixObj('add');
			TrTween.parallelTweens(tweens).play()

			if(this._modalTr) this._modalTr.stop();

			this._modalTr = TrTween.serial(
				tr,
				TrTween.prop(this._contactBlock,{alpha:0,display:'block'}),
				TrTween.func(():void=>{
					this._metaball.morphPin();
          this._contact.start();
				},null,null),
				TrTween.delay(TrTween.tween(this._contactBlock,{alpha:1},null,0.8,Quart.easeInOut),.5),
        tr2
			)
			this._modalTr.play();
		}

		private _hideContact(flg:boolean = true):void
		{
			var logo_bl:HTMLElement = this._logo,
				btnClose_bl:HTMLElement = this._btnClose_bl,
				currentPage:HTMLElement = this._jsPage,
				currentDetail:HTMLElement = this._jsPageDetail,
				tweens:Array<ITween> = [];

			if(this._isSecond)
			{
				tweens.push(TrTween.removeClass(currentPage,"fix"));
				tweens.push(TrTween.removeClass(currentDetail,"fix"));
				tweens.push(TrTween.parallel(
					TrTween.tween(currentPage,{alpha:1},null,0.4,Quart.easeInOut),
					TrTween.tween(currentDetail,{alpha:1},null,0.4,Quart.easeInOut)
				));
			}
			else
			{
				tweens.push(TrTween.removeClass(this._objScroll,"fix"));
				this._setFixObj('remove');
				tweens.push(TrTween.prop(this._arBottom,{display:'block'}));
				tweens.push(TrTween.prop(this._ftContact,{display:'block'}));
				tweens.push(TrTween.prop(this._newsArea,{display:'block'}));
			}
			this._isPopup = false;
			this._metaball.reset();

			TrTween.parallelTweens(tweens).play();

			if(this._modalTr) this._modalTr.stop();
			this._modalTr = TrTween.serial(
        TrTween.removeClass(this._menuBtn,'remove'),
        TrTween.parallel(
          TrTween.tween(logo_bl,{alpha:0},null,0.8,Quart.easeInOut),
          TrTween.serial(
            TrTween.removeClass(this._btnClose,'ac'),
            TrTween.wait(.4),
            TrTween.prop(this._btnClose,{display:'none'}),
            TrTween.prop(btnClose_bl,{alpha:0})
          )
				),
				TrTween.tween(this._contactBlock,{alpha:0},null,0.8,Quart.easeInOut),
				TrTween.prop(this._contactBlock,{display:'none'}),
				TrTween.func(function():void{
					if(flg) TrTween.prop(this._scrollTarget,{scrollTop:this._scrollDmyNum}).play();
				},null,this)

			);
			this._modalTr.play();
		}
		//
		private _showNavigate():void
		{
			var logo_bl:HTMLElement = this._logo,
				btnClose_bl:HTMLElement = this._btnClose_bl,
				currentPage:HTMLElement = this._jsPage,
				currentDetail:HTMLElement = this._jsPageDetail,
				tweens:Array<ITween> = [];

			// this._hideContact(false);
			if(this._isSecond)
			{
				tweens.push(TrTween.addClass(currentPage,"fix"));
				tweens.push(TrTween.addClass(currentDetail,"fix"));
				tweens.push(TrTween.parallel(
					TrTween.tween(currentPage,{alpha:0},null,0.4,Quart.easeInOut),
					TrTween.tween(currentDetail,{alpha:0},null,0.4,Quart.easeInOut)
				));
			}
			else
			{
				tweens.push(TrTween.addClass(this._objScroll,"fix"));
			}
			//


			var tr:ITween = TrTween.wait(0);

			if(! this._isPopup)
			{
				tweens.push(TrTween.prop(this._scrollTarget,{scrollTop:0}));
				this._scrollDmyNum = this._scrollValue;
			}
			// else
			// {
			// 	this._metaball.backToPrev();
			// }
			tr = TrTween.serial(
			TrTween.parallel(

			TrTween.serial(
			TrTween.prop(this._btnClose,{display:'block'}),
			TrTween.addClass(this._btnClose,'ac')
			)
			),
			TrTween.tween(this._contactBlock,{alpha:0},null,0.4,Quart.easeInOut),
			TrTween.prop(this._contactBlock,{display:'none'})
			);

			tweens.push(TrTween.prop(this._arBottom,{display:'none'}));
			tweens.push(TrTween.prop(this._ftContact,{display:'none'}));
			tweens.push(TrTween.prop(this._newsArea,{display:'none'}));
			tweens.push(TrTween.prop(this._contactBlock,{display:'none'}));

			this._isPopup = true;
			this._setFixObj('add');
			if(this._modalTr) this._modalTr.stop();
			TrTween.parallelTweens(tweens).play();

			this._modalTr = TrTween.serial(
        		TrTween.addClass(this._menuBtn,'remove'),
				TrTween.func(():void =>{ this._metaball.morphMenu();},null,null),
				TrTween.prop(this._navigateBlock,{alpha:0,display:'block'}),
				TrTween.tween(this._navigateBlock,{alpha:.95},null,0.8,Quart.easeInOut)
				,tr
			);
			this._modalTr.play();
		}
		private _hideNavigate(flg:boolean = true,forceNav:number = -1):void
		{
			var currentPage:HTMLElement = this._jsPage,
				currentDetail:HTMLElement = this._jsPageDetail,
				tweens:Array<ITween> = [];

			if(this._isSecond)
			{
				tweens.push(TrTween.removeClass(currentPage,"fix"));
				tweens.push(TrTween.removeClass(currentDetail,"fix"));
				tweens.push(TrTween.parallel(
					TrTween.tween(currentPage,{alpha:1},null,0.4,Quart.easeInOut),
					TrTween.tween(currentDetail,{alpha:1},null,0.4,Quart.easeInOut)
				));
			}
			else
			{
				tweens.push(TrTween.removeClass(this._objScroll,"fix"));
        		this._setFixObj('remove');
        		tweens.push(TrTween.prop(this._arBottom,{display:'block'}));
				tweens.push(TrTween.prop(this._ftContact,{display:'block'}));
				tweens.push(TrTween.prop(this._newsArea,{display:'block'}));
			}

			this._metaball.reset();
			if(this._modalTr) this._modalTr.stop();
			this._isPopup = false;
			TrTween.parallelTweens(tweens).play();
			this._modalTr = TrTween.serial(
        TrTween.parallel(
          TrTween.serial(
            TrTween.removeClass(this._btnClose,'ac'),
            TrTween.wait(.4),
            TrTween.prop(this._btnClose,{display:'none'})
          )
				),
				TrTween.tween(this._navigateBlock,{alpha:0},null,0.6,Quart.easeInOut),
				TrTween.prop(this._navigateBlock,{display:'none'}),
				TrTween.func(function():void{
					if(flg)
					{
						TrTween.prop(this._scrollTarget,{scrollTop:this._scrollDmyNum}).play();
					}
				},null,this),
        TrTween.removeClass(this._menuBtn,'remove')
			);
			this._modalTr.play();
		}
		//
		private _setEvent():void
		{
			var logo_bl:HTMLElement = this._logo;
			var btnClose_bl:HTMLElement = this._btnClose_bl;

			TrTween.parallel(
				TrTween.prop(this._indexBtn,{x:-100}),
				TrTween.prop(this._backBtn,{x:-100}),
				TrTween.prop(this._btnClose,{display:'none'}),
				TrTween.prop(logo_bl,{alpha:0}),
				TrTween.prop(btnClose_bl,{alpha:0}),

				TrTween.removeClass((<HTMLElement>this._detailBtn[0]),"ac"),
				TrTween.removeClass((<HTMLElement>this._detailBtn[1]),"ac"),
				TrTween.removeClass((<HTMLElement>this._detailBtn[2]),"ac"),
				TrTween.delay(
					TrTween.parallel(
					TrTween.prop((<HTMLElement>this._detailBtn[0].parentNode),{display:'none'}),
					TrTween.prop((<HTMLElement>this._detailBtn[1].parentNode),{display:'none'}),
					TrTween.prop((<HTMLElement>this._detailBtn[2].parentNode),{display:'none'})
				),.03)
			).play();

			this._onLoadStart = ():void =>
			{
        // var detailPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetail');
        // if(detailPage.style.display == 'block') this.dispatchEvent(new Events('worksBack'));
        //
				var currentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');
				var cleneElem:HTMLElement = <HTMLElement>currentPage.cloneNode(true);
				cleneElem.id = 'js-pagePrev';
				this._objWrapper.appendChild(cleneElem);
			}
			this._onLoadComplete = ():void =>
			{
				// console.log('_onLoadComplete');
				this._scrollDmyID = this._router.pageID;
				this._bvisual.update(0,0);
				var currentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');
				TrTween.prop(currentPage,{display:'block'}).play();

				this._nextPage = this._pageList[this._router.pageID];

				if(this._router.pageID == 0)
				{
					var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pagePrev');

          TrTween.parallel(
            TrTween.removeClass(this._objScroll,'fix'),
            TrTween.addClass(prevPage,'fix')
          ).play();
					var numID:number = this._parentPos == 1 ? 1 : this._parentPos == 2 ? 3 : this._parentPos == 3 ? 5 : numID;
					// console.log(this._isNavigateBack + 'this._isNavigateBack');
					if(this._isNavigateBack)
					{
						var pos:number = 0;
						this._isNavigateBack = false;
					}
					else
					{
						var pos:number = this._scrollDmyList[numID];
					}
					this._scrollValue = pos;
					this._bef = -1;
					TrTween.prop(this._scrollTarget,{scrollTop:pos}).play();
					this._isSecond = false;
          //
          this._setFixObj('remove');
          //
					this._bvisual.backSecond();
				}
				else
				{
					this._isSecond = true;
          //
          if(this._router.pageID != 3) this._setFixObj('add');

          //
					TrTween.prop(this._scrollTarget,{scrollTop:0}).play();
					this._scrollValue = 0;
					this._bef = -1;
          TrTween.addClass(this._objScroll,'fix').play();
				}

				if(this._router.pageID === 1)this._bvisual.animSecond('about');
				else if(this._router.pageID === 2) this._bvisual.animSecond('works');
				else if(this._router.pageID === 3)this._bvisual.animSecond('member');

				this._prevPage.addEventListener('onLeave',this._onPrevLeaved);
				this._prevPage.onLeave();
			}
			this._onPrevLeaved = ():void =>
			{
				// console.log('_onPrevLeaved');
				this._prevPage.removeEventListener('onLeave',this._onPrevLeaved);
				this._nextPage.addEventListener('onArrive',this._onNextArrived);
			//
				if(this._router.pageID == 0)
				{
					TrTween.parallel(
						TrTween.prop(this._arBottom,{display:'block'}),
						TrTween.prop(this._ftContact,{display:'block'}),
						TrTween.prop(this._newsArea,{display:'block'})
					).play();
				// TrTween.tween(this._dg.uniforms['radius'],{value:.3},null,.4,Quart.easeOut).play();
				}
				else
				{
					TrTween.parallel(
						TrTween.prop(this._arBottom,{display:'none'}),
						TrTween.prop(this._ftContact,{display:'none'}),
						TrTween.prop(this._newsArea,{display:'none'})
					).play();
				}
				this._nextPage.onArrive();
        var hh:number = 0;
        if(this._isDevice === 'sp'){
          hh = screen.height + 30;
        }else{
          hh = this._winH;
        }
				this._nextPage.resize(this._winW,hh);
			}
			this._onNextArrived = ():void =>
			{
				this._nextPage.removeEventListener('onArrive',this._onNextArrived);
				this._prevPage = this._nextPage;
				//
				var currentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');
				var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pagePrev');
				if(prevPage) this._objWrapper.removeChild(prevPage);

				if(this._router.pageID == 0)
				{
					this._setObjectPositions();
					TrTween.tween(this._indexBtn,{x:-100},null,0.8,Quart.easeInOut).play();
					TrTween.prop(currentPage,{display:'none'}).play();
					TrTween.prop(this._indBlock,{display:'block'}).play();
				}
				else
				{
					TrTween.tween(this._indexBtn,{x:0},null,0.8,Quart.easeInOut).play();
					TrTween.prop(this._indBlock,{display:'none'}).play();
				}
			}
			//
			this._router.addEventListener('loadStart',this._onLoadStart);
			this._router.addEventListener('loadComplete',this._onLoadComplete);
		}
		//
		private _setWorksEvent():void
		{
			var page:WorksPage = this._pageList[2];
			this._onWorksDetailClick = ():void => {
				var url:string = page.pageUrl;
				this._router.changeWorksPage(url);
			}
			this._onWorksLoadStart = ():void => {
				// if(this._router.pageID == 2){
				// 	var parentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');
	      //   TrTween.addClass(parentPage,'fix').play();
				// }
				//
				var currentPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetail');
				TrTween.prop(currentPage,{display:'block'}).play();

				if(document.getElementById('js-pageDetailPrev')){
					var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetailPrev');
					TrTween.prop(prevPage,{display:'block'}).play();
					this._objWrapper.removeChild(prevPage);
					this._isDetailType = 2;
				}else{
					this._isDetailType = 1;
				}
				var pageClone:HTMLElement = <HTMLElement>currentPage.cloneNode(true);
				pageClone.id = 'js-pageDetailPrev';
				this._objWrapper.appendChild(pageClone);
				TrTween.prop(pageClone,{display:'block'}).play();
			}
			this._onWorksLoadComplete = ():void => {
				var parentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');

				var currentPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetail');
				if(currentPage.querySelector('.page') == null){
					this._isDetailType = 3;
				}else{
					TrTween.tween(this._backBtn,{x:0},null,0.8,Quart.easeInOut).play();
				}

				// TrTween.tween(this._scrollTarget,{scrollTop:0},{scrollTop:this._scrollTarget.scrollTop},.8,Quart.easeInOut).play();

				// console.log(this._isDetailType);
				if(this._isDetailType == 1){
					TrTween.serial(
						TrTween.prop(currentPage,{display:'block'}),
						TrTween.tween(this._scrollTarget,{scrollTop:0},{scrollTop:this._scrollTarget.scrollTop},.4,Quart.easeInOut),
						TrTween.addClass(currentPage,'fix'),
						TrTween.addClass(parentPage,'fix')
					).play();
					this._onWorksLeaved();
				} else if(this._isDetailType == 2){
					var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetailPrev');
					TrTween.serial(
						TrTween.prop(prevPage,{display:'block'}),
						TrTween.tween(this._scrollTarget,{scrollTop:0},{scrollTop:this._scrollTarget.scrollTop},.6,Quart.easeInOut),
						TrTween.addClass(prevPage,'fix')
					).play();
					page.addEventListener('onDetailLeave',this._onWorksLeaved);
					page.onDetailLeave();
				} else if(this._isDetailType == 3){
					var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetailPrev');
					TrTween.serial(
						TrTween.prop(prevPage,{display:'block'}),
						TrTween.tween(this._scrollTarget,{scrollTop:0},{scrollTop:this._scrollTarget.scrollTop},.4,Quart.easeInOut)
					).play();
					page.addEventListener('onDetailLeaveTop',this._onWorksLeaved);
					page.onDetailLeaveTop();
				}
			}
			this._onWorksLeaved = ():void => {
				if(this._isDetailType == 1){
					page.addEventListener('onDetailArriveTop',this._onWorksArrived);
					page.onDetailArriveTop();
				} else if(this._isDetailType == 2) {
					page.removeEventListener('onDetailLeave',this._onWorksLeaved);
					page.addEventListener('onDetailArrive',this._onWorksArrived);
					page.onDetailArrive();
				} else if(this._isDetailType == 3) {
					page.removeEventListener('onDetailLeaveTop',this._onWorksLeaved);
					this._onWorksArrived();
				}
			}
			this._onWorksArrived = ():void => {
				var currentPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetail');
				TrTween.removeClass(currentPage,'fix').play();

				if(this._isDetailType == 1){
					page.removeEventListener('onDetailArriveTop',this._onWorksArrived);

					var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetailPrev');
					TrTween.prop(prevPage,{display:'none'}).play();
					TrTween.removeClass(prevPage,'fix').play();
				} else if(this._isDetailType == 2) {
					page.removeEventListener('onDetailArrive',this._onWorksArrived);

					var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetailPrev');
					TrTween.prop(prevPage,{display:'none'}).play();
					TrTween.removeClass(prevPage,'fix').play();
				} else if(this._isDetailType == 3) {
					TrTween.prop(currentPage,{display:'none'}).play();
					var parentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');
	        TrTween.removeClass(parentPage,'fix').play();
					if(document.getElementById('js-pageDetailPrev')){
						var prevPage:HTMLElement = <HTMLElement>document.getElementById('js-pageDetailPrev');
						this._objWrapper.removeChild(prevPage);
						TrTween.prop(prevPage,{display:'none'}).play();
						TrTween.removeClass(prevPage,'fix').play();
					}
				}
			}
			//
			this._onWorksBack = ():void => {
				this.dispatchEvent(new Events('loadStart'));
				this._backIndex('');
				TrTween.tween(this._backBtn,{x:-100},null,0.8,Quart.easeInOut).play();
        var parentPage:HTMLElement = <HTMLElement>document.getElementById('js-page');
        TrTween.removeClass(parentPage,'fix').play();
			}
			//
			page.addEventListener('worksDetailClick',this._onWorksDetailClick);
			page.addEventListener('worksBack',this._onWorksBack);
			this.addEventListener('worksBack',this._onWorksBack);
			this._router.addEventListener('worksLoadStart',this._onWorksLoadStart);
			this._router.addEventListener('worksLoadComplete',this._onWorksLoadComplete);
			//
		}
		private _removeDetailWorks():void{

		}
		//
		private _addEvent():void
		{
			var len:number = this._detailBtn.length;
			for(var i:number = 0;i < len;i++){
				_dtAddEvent(this._detailBtn[i],this);
			}
			//
			var len:number = this._detailBtnNav.length;
			for(var i:number = 0;i < len;i++){
				_dtAddEventNav(this._detailBtnNav[i],this);
			}
			function _dtAddEvent(target:EventTarget,owner:Main):void{
				target.addEventListener('click',(e)=>{
					e.preventDefault();
					var target:HTMLElement = <HTMLElement>e.currentTarget;
					var len:number = owner._detailBtn.length;
					for(var i:number = 0;i < len;i++){
						if(target === owner._detailBtn[i]){
							owner._goto(i+1);
						}
					}
				},false);
			}
			function _dtAddEventNav(target:EventTarget,owner:Main):void{
				target.addEventListener('click',(e)=>{
					e.preventDefault();
					var target:HTMLElement = <HTMLElement>e.currentTarget;
					var len:number = owner._detailBtnNav.length;
					for(var i:number = 0;i < len;i++){
						if(target === owner._detailBtnNav[i]){
							owner._isPopup = false;
							owner._hideNavigate(false,i);
              if(i === 0){
                owner._isNavigateBack = true;
                owner._scrollDmyNum = owner._scrollValue = 0;
                TrTween.prop(owner._scrollTarget,{scrollTop:0}).play();
              }
              owner.dispatchEvent(new Events('worksBack'));
							owner._goto(i);
						}
					}
				},false);
			}

			var len:number = this._indicatorBtn.length;
			for(var i:number = 0;i < len;i++){
				_indAddEvent(this._indicatorBtn[i],this);
			}
			function _indAddEvent(target:EventTarget,owner:Main):void{
				target.addEventListener('click',(e)=>{
					e.preventDefault();
					if(! owner._isMove){
						owner._isMove = true;
						var cuTarget:HTMLElement = <HTMLElement>e.currentTarget,
                id:string = cuTarget.getAttribute('href'),
                n:number = 0;
						var target:HTMLElement = <HTMLElement>document.getElementById(id);
						var pos:number = target.offsetTop + 10;
            //
						TrTween.serial(
							TrTween.tween(owner._scrollTarget,{scrollTop:pos},{scrollTop:owner._scrollValue},1.2,Sine.easeInOut),
			        TrTween.func(function():void{
								owner._isMove = false;
							},null,owner)
			      ).play();
					}
				},false);
			}
			//this._indexBtn
			this._indexBtn.addEventListener('click',(e)=>{
				e.preventDefault();
				//
				this._goto(0);
				TrTween.tween(this._indexBtn,{x:-100},null,0.8,Quart.easeInOut).play();
			},false);
			//this._backBtn
			this._backBtn.addEventListener('click',(e)=>{
				e.preventDefault();
				this.dispatchEvent(new Events('worksBack'));
			},false);

			//contactBtn
			var contactBtn:NodeList = <NodeList>document.getElementsByClassName('js-contactBtn');
			var len:number = contactBtn.length;
			for(var i:number = 0;i < len;i++){
				var target:HTMLElement = <HTMLElement>contactBtn[i];
				target.addEventListener('click',(e)=>{
					e.preventDefault();
					this._showContact();
				},false);
			}
			//menuBtn
			this._menuBtn.addEventListener('click',(e)=>{
				e.preventDefault();
				// console.log("hoge-")
				this._showNavigate();
			},false);
			//btnClose
			this._btnClose.addEventListener('click',(e)=>{
				e.preventDefault();
        if(this._navigateBlock.style.display == 'block') this._hideNavigate();
        if(this._contactBlock.style.display == 'block') this._hideContact();
			},false);

			//newsArea
			this._newsHide();
			var hasClass = function(tgt, name):boolean {
		    var className:string = ' ' + name + ' ',
		    		l:number = tgt.length;
		    if ((' ' + tgt.className + ' ').replace(/[\t\r\n\f]/g, ' ').indexOf(className) >= 0) {
		    	return true;
		    }
		    return false;
			};
			this._newsBtn.addEventListener('click',(e)=>{
				e.preventDefault();
        if(hasClass(e.currentTarget,'ac')){
					TrTween.parallel(
						TrTween.removeClass(e.currentTarget,'ac'),
						TrTween.removeClass(this._newsArea,'ac')
					).play();
					this._newsHide();
				}else{
					TrTween.parallel(
						TrTween.addClass(e.currentTarget,'ac'),
						TrTween.addClass(this._newsArea,'ac')
					).play();
					this._newsShow();
				}
			},false);
		}
		private _newsShow():void{
			var newsAr:NodeList = <NodeList>document.getElementsByClassName('newsAr');
			var len:number = newsAr.length;
			var h:number = 0;
			for(var i:number = 0;i < len;i++){
				var hh:number = (<HTMLElement>newsAr[i]).clientHeight;
				h += hh;
			}
			TrTween.tween(this._newsAreaIn,{height:h},null,.5,Quart.easeInOut).play();
		}
		private _newsHide():void{
			var newsAr:NodeList = <NodeList>document.getElementsByClassName('newsAr');
			var h:number = (<HTMLElement>newsAr[0]).clientHeight;
			TrTween.tween(this._newsAreaIn,{height:h},null,.5,Quart.easeInOut).play();
		}
    private _setFixObj(type:string):void
    {
      var tr:any = [],
        len:number = this._fixObj.length,
        i:number = 0;
      if(type === 'add')
      {
        for(i = 0;i < len;i++){
          var target:HTMLElement = <HTMLElement>this._fixObj[i];
          tr[i] = TrTween.addClass(target,'abso')
        }
      }
      else if(type === 'remove')
      {
        for(i = 0;i < len;i++){
          var target:HTMLElement = <HTMLElement>this._fixObj[i];
          tr[i] = TrTween.removeClass(target,'abso')
        }
      }
      TrTween.parallelTweens(tr).play();
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
    private _drawConsole()
    {
      setTimeout(function()
      {
        console.clear();
        console.log(
          '%c　%c　%c　%c　%c　%c　%c　%c　%c　\n'+
          '%c　%c　%c　%c　%c　%c　%c　%c　%c　%c　%c　%cWelcome to CONTENTS!!\n'+
          '%c　%c　%c　%c　%c　%c　%c　%c　%c　\n',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;border-left: 4px solid #1d4294;border-radius:7px 0 0 5px;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;border-right: 4px solid #1d4294;border-radius:0 7px 7px 0;',

          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;border-left: 4px solid #1d4294;border-radius:7px 0 0 7px;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;border-right: 4px solid #1d4294;border-radius:0 5px 5px 0;',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',

          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;font-weight:bold;color: #fff;text-shadow:-1px -1px rgba(29,66,148,1),1px -1px rgba(29,66,148,1),1px 1px rgba(29,66,148,1),-1px 1px rgba(29,66,148,1);animation: test 3s infinite;@keyframes test{0%{opacity:0;}100%{opacity:1;}}',

          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#fff',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;border-left: 4px solid #1d4294;border-radius:5px 0 0 7px;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;',
          'font-size:20px;background-color:#1d4294;border-top: 4px solid #1d4294;border-bottom: 4px solid #1d4294;border-right: 4px solid #1d4294;border-radius:0 7px 7px 0;'
        );
      }, 7000);
    }
	}
}

import Main = jp.sites.Main;
/*******************/
var __Main:Main;
document.addEventListener('DOMContentLoaded',()=>{
	__Main = new Main();
	__Main.init();
}, false);
// window.addEventListener('load',function():void{
	// console.log(this);
// }, false);
