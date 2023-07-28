'use strict';
class common {
	constructor(){}

	//ブラウザの横幅取得
	getBrowserWidth() {
		// if ( window.innerWidth )
		// 	return window.innerWidth
		// else if ( document.documentElement && document.documentElement.clientWidth isnt 0 )
		// 	return document.documentElement.clientWidth
		// else if ( document.body )
		// 	return document.body.clientWidth

		// return 0
		return document.body.clientWidth;
	}
	//ブラウザの縦幅取得
	getBrowserHeight() {
		if ( window.innerHeight ) {
			return window.innerHeight;
		} else if ( document.documentElement && (document.documentElement.clientHeight !== 0) ) {
			return document.documentElement.clientHeight;
		} else if ( document.body ) {
			return document.body.clientHeight;
		}

		return 0;
	}
	//コンテンツ全体の高さを取得
	getContentHeight(){
		const h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight]);
		return h;
	}
	//スクロールの位置を取得
	getScrollPosY(){
		const dElm = document.documentElement;
		const dBody = document.body;
		const pos = dElm.scrollTop || dBody.scrollTop;
		return pos;
	}
	//ユーザーエージェント判定
	getUA(){
		const uaparam = {
		'iOS': false,
		'iPhone': false,
		'iPad': false,
		'Android': false,
		'IE6' : false,
		'IE7' : false,
		'IE8' : false,
		'IE8m' : false,
		'IE9' : false,
		'IE9m' : false,
		'IE10' : false,
		'IE11' : false,
		'IE' : false,
		'Firefox' : false,
		'Safari' : false,
		'Chrome' : false
		};
		const ua = navigator.userAgent;
		if(ua.indexOf('iPhone') >= 0) {
			uaparam.iOS = true;
			uaparam.iPhone = true;
		} else if(ua.indexOf('iPad') >= 0) {
			uaparam.iOS = true;
			uaparam.iPad = true;
		} else if(ua.indexOf('Android') >= 0) {
			uaparam.Android = true;
		} else if(ua.match(/MSIE/) || ua.match(/Trident/)) {
			uaparam.IE = true;
			const version = ua.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3];
			if(version === '6.0') {
				uaparam.IE6 = true;
				uaparam.IE8m = true;
				uaparam.IE9m = true;
			} else if(version === '7.0') {
				uaparam.IE7 = true;
				uaparam.IE8m = true;
				uaparam.IE9m = true;
			} else if(version === '8.0') {
				uaparam.IE8 = true;
				uaparam.IE8m = true;
				uaparam.IE9m = true;
			} else if(version === '9.0') {
				uaparam.IE9 = true;
				uaparam.IE9m = true;
			} else if(version === '10.0') {
				uaparam.IE10 = true;
			} else {
				uaparam.IE11 = true;
			}
		} else if(ua.indexOf('Firefox') >= 0) {
			uaparam.Firefox = true;
		} else if(ua.indexOf('Chrome') >= 0) {
			uaparam.Chrome = true;
		} else if(ua.indexOf('Safari') >= 0) {
			uaparam.Safari = true;
		}

		return uaparam;
	}

	//デバイス判定#
	getDevice(){
		const userAgent = window.navigator.userAgent.toLowerCase();
		if(((navigator.userAgent.indexOf('Android') > 0) && (navigator.userAgent.indexOf('Mobile') === -1)) || (navigator.userAgent.indexOf('A1_07') > 0) || (navigator.userAgent.indexOf('SC-01C') > 0) || (navigator.userAgent.indexOf('iPad') > 0)) {
			//タブレット
			return 'tb';
		} else if (((navigator.userAgent.indexOf('iPhone') > 0) && (navigator.userAgent.indexOf('iPad') === -1)) || (navigator.userAgent.indexOf('iPod') > 0) || ((navigator.userAgent.indexOf('Android') > 0) && (navigator.userAgent.indexOf('Mobile') > 0))) {
			//スマホ
			return 'sp';
		} else {
			//PC
			return 'pc';
		}
	}
}

const c = new common();
window.Common = c; //グローバル変数だよ！ という明示的な書き方。


class util {
	constructor(){
	}
	addClass(element, className){
		if (!element || !className) {
			return;
		}

		let classString = element.className;
		const nameIndex = classString.indexOf(className);
		classString += ` ${className}`;
		element.className = classString;
	}

	removeClass(element, className){
		if (!element || !className) {
			return;
		}

		let classString = element.className;
		const nameIndex = classString.indexOf(className);
		if(nameIndex === -1) {
			return false;
		}

		classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		element.className = classString;
	}
}
const u = new util();
window.Util = u;

/*-----------------------------------
easing
-----------------------------------*/
const easing = new(function(){

	this.linear = (t, b, c, d)=> ((c*t)/d) + b;

	this.easeIn = function(t, b, c, d){
			t /= d;
			return (c*t*t*t*t) + b;
		};

	this.easeInOut = function(t, b, c, d){
			t /= d/2.0;
			if(t < 1) {
				return ((c/2.0)*t*t*t*t) + b;
			}

			t = t - 2;
			return ((-c/2.0) * ((t*t*t*t) - 2)) + b;
		};

	this.easeInQuartic = function(t, b, c, d){
		t /= d;
		return (c*t*t*t*t) + b;
	};

	this.easeInExponential = (t, b, c, d)=> (c * Math.pow(2, (10*((t/d) - 1)))) + b;

	this.easeInCircular = function(t, b, c, d){
		t /= d;
		return (-c * (Math.sqrt(1 - (t*t)) - 1)) + b;
	};

	this.easeInCubic = function(t, b, c, d){
		t /= d;
		return (c*t*t*t) + b;
	};

	this.easeInOrigin = function(t, b, c, d){
		t /= d;
		return (-c * (Math.sqrt(1 - t) - 1)) + b;
	};


	this.easeInOutCircular = function(t, b, c, d){
		t /= d/2.0;
		if(t < 1) {
			return (-c/2.0) * (Math.sqrt(1 - (t*t)) - 1);
		}
		t = t - 2;
		return ((c/2.0) * (Math.sqrt(1 - (t*t)) + 1)) + b;
	};

	this.easeInOutSinusoidal = (t, b, c, d)=> ((-c/2.0) * (Math.cos((Math.PI*t)/d) - 1)) + b;

	this.easeInOutBack = function(t, b, c, d){
		let s = 1.70158;
		if ((t/=d/2) < 1) {
			return ((c/2)*(t*t*((((s*=(1.525))+1)*t) - s))) + b;
		}
		return ((c/2)*(((t-=2)*t*((((s*=(1.525))+1)*t) + s)) + 2)) + b;
	};

});
//----------------------------------------------#
//autoHeight
//----------------------------------------------#
let __WinW = 0;
let __WinH = 0;
let __HeaderH = 0;
let __ScrollTop = 0;
let __ContentH = 0;
let __Browser = null;
let __Device = null;
let __Media = null;
//#
// const __MinW = 1200;

//#
const __SPWidth = 480;
const __TABWidth = 1024;
const __PCWidth = 1280;
//#
let __Base = null;
let __Top = null;

//-----------------------------#
const onInit = function(){
	__Browser = Common.getUA();
	__Device = Common.getDevice();

	__Base = new Base();
	__Base.init();

	if(0 < document.getElementsByClassName('wrapper')[0].className.indexOf('top')) {
		__Top = new Top();
		__Top.init();
	}
	onResize();
};

const onLoad = function(){
	onResize();
	if(__Base) {
		__Base.start();
	}
	if(__Top) {
		__Top.start();
	}
};

var onResize = function(e){
	__WinW = Common.getBrowserWidth();
	__WinH = Common.getBrowserHeight();
	__ContentH = Common.getContentHeight();
	__Media = onCheckDevice();
	if(__WinW > __TABWidth){
		__HeaderH = 0;
	} else {
		__HeaderH = 56;
	}
	//
	// if(__WinW < __MinW) {
	// 	__WinW = __MinW;
	// }
	if(__Base) {
		__Base.resize();
	}
	if(__Top) {
		__Top.resize();
	}
};

const onScroll = function(e){
	__ScrollTop = Common.getScrollPosY();
	if(__Base) {
		__Base.scroll();
	}
};

var onRender = function(){
	requestAnimationFrame(onRender);
};

var onCheckDevice = function(){
	let _ua;
	if(__WinW < __SPWidth) {
		_ua = 'sp';
	} else if((__WinW <= __PCWidth) && (__WinW >= __SPWidth)) {
		_ua = 'tb';
	} else {
		_ua = 'pc';
	}
	return _ua;
};

//#
var requestAnimationFrame = (()=>
	window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			((callback, element)=> window.setTimeout(callback, 1000 / 60))
)();

document.addEventListener('DOMContentLoaded',onInit, false);
window.addEventListener('load',onLoad, false);
window.addEventListener('resize',onResize, false);
window.addEventListener('scroll',onScroll, false);

class BaseClass {
	constructor(){
		this._currentY = 0;
	}
	init(){
		this._addEvent();
		this._hideLinks();
	}
	start(){
		// this._moveSectionTop();
		this._addCurrentMark();
	}

	_addEvent(){
		this._bugerToggle();
		this._moveTop();
	}

	scroll(){
		this._showHeader();
	}

	resize(){
	}

	_hideLinks(){
		let path = location.pathname;
		if(path === '/3up/' || path === '/3up/index.html'){
			document.getElementById('js-hideLink').style.display = 'none';
		}
	}

	_bugerToggle(){
		const burger = document.getElementById('js-burger');
		const header = document.getElementsByClassName('header')[0];
		const gnav = document.getElementsByClassName('gnav')[0];
		burger.addEventListener('click', (e) => {
			let btn = e.currentTarget;
			if(0 < header.className.indexOf('active')){
				header.classList.remove('active');
				gnav.classList.remove('active');
			} else {
				header.classList.add('active');
				setTimeout(()=> {
					gnav.classList.add('active');
				}, 100);
			}
		});
	}

	// _moveSectionTop(){
	// 	this._showHeader();
	// 	let linkId = location.hash.split('#')[1];
	// 	if(document.getElementById(linkId)){
	// 		console.log(linkId);
	// 		// $("html, body").stop().scrollTop(0);
	// 		let pos = document.getElementById(linkId).getBoundingClientRect().top;
	// 		let position = pos + __ScrollTop;
	// 	// $("html, body").animate({scrollTop: position - __HeaderH}, 500, "swing");
	// 	}
	// }

	_smoothScroll(pos) { //ターゲットの絶対座標Y
		let position = pos + __ScrollTop;
		$("html, body").animate({scrollTop: position}, 500, "swing");
    return false;
	}

	_moveTop(){
		const topBtn = document.getElementById('js-pageTop');
		topBtn.addEventListener('click', () => {
			$("html, body").animate({scrollTop: 0 - __HeaderH}, 500, "swing");
		}, false);
	}

	_showHeader(){
		const header = document.getElementsByTagName('header')[0];
		let mvHeight = document.getElementsByClassName('mv')[0].offsetHeight;
		let Y = __ScrollTop;
		if(__WinW > __TABWidth) {
			if(Y > 120){
				header.classList.add('fixed');
			} else {
				header.classList.remove('fixed');
			}
			if(Y === this._currentY) return;
			if(Y < this._currentY && Y > mvHeight) {
				header.classList.add('fixed-on');
			} else {
				header.classList.remove('fixed-on');
			}
			this._currentY = Y;
		} else {
			if(Y > __HeaderH){
				header.classList.add('fixed');
			} else {
				header.classList.remove('fixed');
			}
			if(Y > __WinH || Y > mvHeight){
				header.classList.add('fixed-on');
			} else {
				header.classList.remove('fixed-on');
			}
		}
	}

	_addCurrentMark(){ //only interview
		let url = location.pathname;
		let directory = url.split('/')[2];
		let gnavInterview = document.querySelectorAll('.gnav a')[0];
		if(directory === 'interview') {
			gnavInterview.classList.add('current');
		}
	}
}
window.Base = BaseClass;
