/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// import JudgeEnvironment from '_MyLibs/Util/JudgeEnvironment.es6';
	
	
	var _Conf = __webpack_require__(1);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(11);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	var _Debugger = __webpack_require__(12);
	
	var _Debugger2 = _interopRequireDefault(_Debugger);
	
	var _Controller = __webpack_require__(13);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _UpdateMgr = __webpack_require__(17);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(18);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(19);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(20);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _UpdateList = __webpack_require__(21);
	
	var _UpdateList2 = _interopRequireDefault(_UpdateList);
	
	var _ResizeList = __webpack_require__(22);
	
	var _ResizeList2 = _interopRequireDefault(_ResizeList);
	
	var _ScrollList = __webpack_require__(23);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
	var _MouseList = __webpack_require__(24);
	
	var _MouseList2 = _interopRequireDefault(_MouseList);
	
	var _ResourceMgr = __webpack_require__(25);
	
	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);
	
	var _UrlParamMgr = __webpack_require__(27);
	
	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);
	
	var _Profiler = __webpack_require__(29);
	
	var _Profiler2 = _interopRequireDefault(_Profiler);
	
	var _View = __webpack_require__(30);
	
	var _View2 = _interopRequireDefault(_View);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ------------------------------------------------------------
	      //  初期値の設定・データの配置
	      //  util関数の初期化
	      //  イベントマネージャーの設置
	      // ------------------------------------------------------------
	      // setting
	      gb.conf = new _Conf2.default();
	
	      // util
	      gb.d = new _Debugger2.default();
	      gb.u = new _Util2.default();
	      gb.f = new _Func2.default();
	
	      // ------------------------------------------------------------
	      //  Event
	      // ------------------------------------------------------------   
	      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
	      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();
	      if (gb.conf.isScrollMgr) gb.s = new _ScrollMgr2.default();
	      if (gb.conf.isMouseMgr) gb.m = new _MouseMgr2.default();
	      // gb.ul = new UpdateList();
	      // gb.rl = new ResizeList();
	      // gb.sl = new ScrollList();
	      gb.ml = new _MouseList2.default();
	
	      this.onReady();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  Controller
	      // ------------------------------------------------------------
	      gb.urlp = new _UrlParamMgr2.default(); //  UrlParam パラメータ調整用
	      if (gb.conf.Profiler) new _Profiler2.default(); // Profiler
	
	      // ------------------------------------------------------------
	      //  Loading / Model
	      // ------------------------------------------------------------
	      gb.lm = new _Controller2.default();
	      gb.rm = new _ResourceMgr2.default();
	      gb.lm.startU();
	
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	      // Layout, UI, Effects
	      gb.v = new _View2.default();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  Model
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Common;
	}();
	
	// ------------------------------------------------------------
	//
	//  Main
	//
	// ------------------------------------------------------------
	
	
	exports.default = Common;
	(function () {
	
	  // // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	
	  gb.common = new Common();
	
	  if (gb.up) gb.up.loop(); //全体のループスタート
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Config
	//
	// ------------------------------------------------------------
	
	var Conf = function Conf() {
	  _classCallCheck(this, Conf);
	
	  // ------------------------------------------------------------
	  //  本番フラグ
	  // ------------------------------------------------------------    
	  // this.RELEASE = true;
	  this.RELEASE = false;
	
	  // ------------------------------------------------------------
	  //  フラグ関連
	  // ------------------------------------------------------------
	  // ログ出力, パラメータ, Stars
	  this.LOG = true;
	  this.PARAM = true;
	  this.Profiler = true;
	  this.LOADING = false;
	  this.OPENING = false;
	  this.EFFECT = false;
	  this.INERTIA = false;
	
	  // Event
	  this.isUpdateMgr = true;
	  this.isResizeMgr = true;
	  this.isScrollMgr = true;
	  this.isMouseMgr = true;
	
	  if (this.RELEASE) {
	    this.LOG = false;
	    this.PARAM = false;
	    this.Profiler = false;
	    this.LOADING = false;
	    this.OPENING = true;
	    this.EFFECT = true;
	    this.INERTIA = true;
	  }
	
	  // ------------------------------------------------------------
	  //  basic width height
	  // ------------------------------------------------------------
	  // viewport size
	  this.vDefW = window.innerWidth;
	  this.vDefH = window.innerHeight;
	  this.vW = window.innerWidth;
	  this.vH = window.innerHeight;
	  this.vSPW = window.innerWidth;
	  this.vSPH = window.innerHeight;
	
	  // target size
	  this.DefW = 1300;
	  this.DefH = 850;
	  this.W = 1200;
	  this.H = 750;
	  this.SPW = 375;
	  this.SPH = 667;
	
	  // ------------------------------------------------------------
	  //  ブレイクポイント
	  // ------------------------------------------------------------
	  this.bp00 = 375;
	  this.bp01 = 600;
	  this.bp02 = 1080;
	  this.bp03 = 1280;
	
	  // ------------------------------------------------------------
	  //  レティナ対応
	  // ------------------------------------------------------------
	  this.isRetina = window.devicePixelRatio && window.devicePixelRatio > 1 ? true : false;
	
	  // ------------------------------------------------------------
	  //
	  //  resource
	  //
	  // ------------------------------------------------------------
	
	  // ------------------------------------------------------------
	  //  API
	  // ------------------------------------------------------------
	  // this.APIData = APIData();
	  this.APIURL = './setting.xml';
	
	  // ------------------------------------------------------------
	  //  URL
	  // ------------------------------------------------------------
	  // this.URLData = URLData();
	
	  // ------------------------------------------------------------
	  //  sound data
	  // ------------------------------------------------------------
	  // this.soundData = SoundData();
	
	  // ------------------------------------------------------------
	  //  video
	  // ------------------------------------------------------------
	  // this.videoData = videoData();
	
	  // ------------------------------------------------------------
	  //  img
	  // ------------------------------------------------------------
	  // this.imgData = imgData();
	
	  // ------------------------------------------------------------
	  //  web font loaded
	  // ------------------------------------------------------------
	  // this.webFontLoaded = false;
	
	  // ------------------------------------------------------------
	  //
	  //  Ohter
	  //
	  // ------------------------------------------------------------
	  this.isFirst = true;
	
	  this.isSound = true;
	};
	
	exports.default = Conf;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Array = __webpack_require__(3);
	
	var _Array2 = _interopRequireDefault(_Array);
	
	var _Color = __webpack_require__(4);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _DateClass = __webpack_require__(5);
	
	var _DateClass2 = _interopRequireDefault(_DateClass);
	
	var _Device = __webpack_require__(6);
	
	var _Device2 = _interopRequireDefault(_Device);
	
	var _Math = __webpack_require__(7);
	
	var _Math2 = _interopRequireDefault(_Math);
	
	var _Other = __webpack_require__(8);
	
	var _Other2 = _interopRequireDefault(_Other);
	
	var _String = __webpack_require__(9);
	
	var _String2 = _interopRequireDefault(_String);
	
	var _Url = __webpack_require__(10);
	
	var _Url2 = _interopRequireDefault(_Url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // ------------------------------------------------------------
	//
	//  Util
	//
	// ------------------------------------------------------------
	
	var Util = function Util() {
	  _classCallCheck(this, Util);
	
	  this.a = new _Array2.default();
	  this.c = new _Color2.default();
	  this.d = new _DateClass2.default();
	  this.dv = new _Device2.default();
	  this.m = new _Math2.default();
	  this.o = new _Other2.default();
	  this.s = new _String2.default();
	  this.u = new _Url2.default();
	};
	
	exports.default = Util;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Array
	//
	// ------------------------------------------------------------
	
	var Array = function () {
	  function Array() {
	    _classCallCheck(this, Array);
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  Array
	  //
	  // ------------------------------------------------------------
	
	  // 配列内のランダムな値をひとつ取得
	  // -----------------------------------
	  // @arr : 配列
	  // return : 配列内の値
	  // -----------------------------------
	
	
	  _createClass(Array, [{
	    key: "arrRand",
	    value: function arrRand(arr) {
	
	      return arr[gb.u.m.randomInt(0, arr.length - 1)];
	    }
	
	    // 配列をランダムに並べ替え
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "shuffle",
	    value: function shuffle(ary) {
	
	      var arr = [];
	      arr = ary.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = arr[--i];
	        arr[i] = arr[j];
	        arr[j] = t;
	      }
	      return arr;
	    }
	
	    // ランダムな数値を作る
	
	  }, {
	    key: "randomArr",
	    value: function randomArr(len) {
	
	      var arr = [];
	
	      for (var i = 0; i < len; i++) {
	        arr.push(i);
	      }arr = this.shuffle(arr);
	
	      return arr;
	    }
	
	    // nullを削除した配列を返す
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // return : null削除した配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "sliceNull",
	    value: function sliceNull(arr) {
	
	      var i, l, len1, newArr, val;
	      newArr = [];
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        if (val !== null) {
	          newArr.push(val);
	        }
	      }
	      return newArr;
	    }
	
	    // 配列内のパラメータを比較してソート
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // @para : パラメーター名
	    // @desc : 降順かどうか(boolean) デフォルトは昇順
	    // -----------------------------------
	
	  }, {
	    key: "sort",
	    value: function sort(arr, para, desc) {
	      if (desc === void 0) {
	        desc = false;
	      }
	      if (desc) {
	        return arr.sort(function (a, b) {
	          return b[para] - a[para];
	        });
	      } else {
	        return arr.sort(function (a, b) {
	          return a[para] - b[para];
	        });
	      }
	    }
	  }, {
	    key: "getKey",
	    value: function getKey(list, value) {
	      var returnKey = [];
	      for (var key in list) {
	        if (list[key] == value) {
	          returnKey.push(key);
	        }
	      }
	      return returnKey;
	    }
	  }]);
	
	  return Array;
	}();
	
	exports.default = Array;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Color
	//
	// ------------------------------------------------------------
	
	var Color = function () {
	    function Color() {
	        _classCallCheck(this, Color);
	    }
	
	    // rgbからHEX(16進数)カラー取得
	    // -----------------------------------
	    // @r : 0~255
	    // @g : 0~255
	    // @b : 0~255
	    // return : ex "#FFFFFF"
	    // -----------------------------------
	
	
	    _createClass(Color, [{
	        key: "getHexColor",
	        value: function getHexColor(r, g, b) {
	            var str;
	            str = (r << 16 | g << 8 | b).toString(16);
	            return "#" + new Array(7 - str.length).join("0") + str;
	        }
	
	        // rgbからhslへ
	
	    }, {
	        key: "rgbToHsl",
	        value: function rgbToHsl(r, g, b) {
	            r /= 255;
	            g /= 255;
	            b /= 255;
	
	            var max = Math.max(r, g, b);
	            var min = Math.min(r, g, b);
	            var h, s, l;
	
	            l = (max + min) / 2;
	
	            if (max === min) {
	                h = s = 0;
	            } else {
	                var d = max - min;
	                switch (max) {
	                    case r:
	                        h = ((g - b) / d * 60 + 360) % 360;break;
	                    case g:
	                        h = (b - r) / d * 60 + 120;break;
	                    case b:
	                        h = (r - g) / d * 60 + 240;break;
	                }
	                s = l <= 0.5 ? d / (max + min) : d / (2 - max - min);
	            }
	
	            return [h, s * 100, l * 100];
	        }
	
	        // hslからrgbへ
	
	    }, {
	        key: "hslToRgb",
	        value: function hslToRgb(h, s, l) {
	            s /= 100;
	            l /= 100;
	
	            var r, g, b;
	
	            if (s === 0) {
	                r = g = b = l * 255;
	            } else {
	                var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	                var v1 = 2 * l - v2;
	                r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
	                g = Math.round(hueToRgb(v1, v2, h) * 255);
	                b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
	            }
	
	            return [r, g, b];
	        }
	    }]);
	
	    return Color;
	}();
	
	exports.default = Color;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  DateClass
	//
	// ------------------------------------------------------------
	
	var DateClass = function () {
	  function DateClass() {
	    _classCallCheck(this, DateClass);
	
	    this.startTime = null;
	    this.elapsedTime = null;
	    this.now = new Date();
	  }
	
	  _createClass(DateClass, [{
	    key: "getNow",
	    value: function getNow() {
	
	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.now = new Date();
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {
	
	      this.now = new Date();
	      return this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {
	
	      this.elapsed();
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {
	
	      this.elapsed();
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {
	
	      this.elapsed();
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {
	
	      this.getNow();
	
	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {
	
	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {
	
	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {
	
	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {
	
	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];
	
	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }
	
	    // 数日後のDateオブジェクト取得
	    // -----------------------------------
	
	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {
	
	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	  }]);
	
	  return DateClass;
	}();
	
	exports.default = DateClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Device
	//
	// ------------------------------------------------------------
	
	var Device = function () {
	  function Device() {
	    _classCallCheck(this, Device);
	
	    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
	    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
	    this.isRes = null;
	    this.isResSP = null; // responsive sp
	    this.isResPC = null; // responsive pc
	
	    this.isPC = null;
	    this.isSP = null;
	    this.isTAB = null;
	    this.isMB = null;
	    this.isIE = false;
	
	    this.isSetSPSize = false;
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  device
	  //
	  // ------------------------------------------------------------
	
	  _createClass(Device, [{
	    key: "isDeviceSP",
	    value: function isDeviceSP() {
	
	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");
	
	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');
	
	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');
	
	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');
	
	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {
	
	      if (!(this.isSP || this.isTAB || this.isMB)) {
	
	        $('body').addClass('isDevicePC');
	        this.isPC = true;
	        return;
	      }
	
	      this.isPC = false;
	    }
	  }, {
	    key: "setEventString",
	    value: function setEventString() {
	
	      this.eClick = this.isTab || this.isSP ? 'touchstart' : 'click';
	      this.eStart = this.isTab || this.isSP ? 'touchstart' : 'mousedown';
	      this.eEnd = this.isTab || this.isSP ? 'touchend' : 'mouseup';
	      this.eMove = this.isTab || this.isSP ? 'touchmove' : 'mousemove';
	
	      this.eEnter = this.isTab || this.isSP ? 'touchstart' : 'mouseenter';
	      this.eLeave = this.isTab || this.isSP ? 'touchend' : 'mouseleave';
	      this.eOver = this.isTab || this.isSP ? 'touchstart' : 'mouseover';
	      this.eOut = this.isTab || this.isSP ? 'touchend' : 'mouseout';
	
	      this.eWheel = this.isTab || this.isSP ? 'touchmove' : 'mousewheel';
	      this.eScroll = this.isTab || this.isSP ? 'touchmove' : 'scroll';
	    }
	
	    // スマフォ判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isSmt",
	    value: function isSmt() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }
	
	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isTablet",
	    value: function isTablet() {
	
	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }
	
	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIpad",
	    value: function isIpad() {
	
	      return navigator.userAgent.indexOf('iPad') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  OS
	    //
	    // ------------------------------------------------------------
	
	    // Android判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIos",
	    value: function isIos() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }
	
	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isPs3",
	    value: function isPs3() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }
	
	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isVita",
	    value: function isVita() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PlayStation Vita') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  browser
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isBrowserCheck",
	    value: function isBrowserCheck() {
	
	      this.isIEVersion();
	      this.isChrome();
	      this.isFF();
	      this.isSafari();
	      this.isOpera();
	      this.isIOSNotSfari();
	      this.isAPPBrowser();
	    }
	
	    // IEかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe",
	    value: function isIe() {
	
	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }
	
	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isWin",
	    value: function isWin() {
	
	      return navigator.platform.indexOf("Win") !== -1;
	    }
	
	    // googleChromeかどうか pcのみ
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isChrome",
	    value: function isChrome() {
	
	      if (this.ua.indexOf('chrome') !== -1) {
	
	        $('body').addClass('isChorme');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isFF",
	    value: function isFF() {
	
	      if (this.ua.indexOf('firefox') !== -1) {
	
	        $('body').addClass('isFF');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {
	
	      if (!this.isChrome() && this.ua.indexOf("lunascape") == -1) {
	
	        var pattern = new RegExp("safari", "i");
	        if (pattern.test(this.ua)) {
	
	          $('body').addClass('isSafari');
	          return true;
	        } else {
	
	          return false;
	        }
	      } else {
	
	        return false;
	      }
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {
	
	      var pattern = new RegExp("opera", "i");
	      if (pattern.test(this.ua)) {
	
	        $('body').addClass('isOpera');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // iOSのsafari以外かどうか spでsafariかsafariでないか(chromeかandroidの標準ブラウザか)を判定したい場合はこちらを使う
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIOSNotSfari",
	    value: function isIOSNotSfari() {
	
	      if (this.isIos() && this.ua.indexOf('safari') === -1 || this.isIos() && this.ua.indexOf('crios') > 0 || this.isIos() && this.ua.indexOf('gsa') > 0) {
	
	        $('body').addClass('isIOSNotSafari');
	        // alert('isIOSNotSafari');
	        return true;
	      } else {
	
	        $('body').addClass('isIOSSafari');
	        // alert('isSafari');
	        return false;
	      }
	    }
	  }, {
	    key: "isAPPBrowser",
	    value: function isAPPBrowser() {
	
	      // debug
	      // var r01 = this.ua.indexOf("fban/fbios;fbav") !== -1;
	      // var r02 = this.ua.indexOf("twitter") !== -1;
	
	      // // $('body').prepend(String(r01));
	      // // $('body').prepend(String(r02));
	
	      // // alert(r01);
	      // // alert(r02);
	
	      if (this.ua.indexOf("fban/fbios;fbav") !== -1 || this.ua.indexOf("twitter") !== -1) {
	
	        $('body').addClass('isAPPBrowser');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  version
	    //
	    // ------------------------------------------------------------
	    // IE8以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }
	
	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }
	
	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }
	
	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {
	
	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }
	
	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isEdge",
	    value: function isEdge() {
	
	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {
	
	      $('body').addClass('isIE');
	      this.isIE = true;
	
	      if (this.appV.indexOf("msie 10.") != -1) {
	        $('body').addClass('isIE10');
	        return 'ie10';
	      } else if (this.appV.indexOf("msie 9.") != -1) {
	        $('body').addClass('isIE9');
	        return 'ie9';
	      } else if (this.appV.indexOf("msie 8.") != -1) {
	        $('body').addClass('isIE8');
	        return 'ie8';
	      } else if (this.appV.indexOf("msie 7.") != -1) {
	        $('body').addClass('isIE7');
	        return 'ie7';
	      } else if (this.appV.indexOf("msie 6.") != -1) {
	        $('body').addClass('isIE6');
	        return 'ie6';
	      } else if (this.appV.indexOf("trident") != -1) {
	        $('body').addClass('isIE11');
	        return 'ie11';
	      }
	
	      $('body').removeClass('isIE');
	      this.isIE = false;
	      return 'notIE';
	    }
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {
	
	      if (this.ua.indexOf("android") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {
	
	      if (this.ua.indexOf("iPhone OS") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDirection",
	    value: function isDirection() {
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isResponsive",
	    value: function isResponsive() {
	      var bp00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375 - 1;
	      var bp01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 960;
	      var bp02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
	      var bp03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1280 + 1;
	
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      // ブレイクしたときに一度だけイベントを発行する
	      if (W > bp00 && this.isRes == 'sp-s') $(window).trigger('sp_s_sp');
	      if (W <= bp00 && this.isRes == 'sp') $(window).trigger('sp_sp_s');
	      if (W > bp01 && this.isRes == 'sp') $(window).trigger('sp_tab');
	      if (W <= bp01 && this.isRes == 'tab') $(window).trigger('tab_sp');
	      if (W > bp02 && this.isRes == 'tab') $(window).trigger('tab_pc');
	      if (W <= bp02 && this.isRes == 'pc') $(window).trigger('pc_tab');
	      if (W > bp03 && this.isRes == 'pc') $(window).trigger('pc_pc_w');
	      if (W <= bp03 && this.isRes == 'pc-w') $(window).trigger('pc_w_pc');
	
	      // isRes
	      if (W <= bp00) this.isRes = 'sp-s';
	      if (W > bp00 && W <= bp01) this.isRes = 'sp';
	      if (W > bp01 && W <= bp02) this.isRes = 'tab';
	      if (W > bp02 && W <= bp03) this.isRes = 'pc';
	      if (W > bp03) this.isRes = 'pc-w';
	
	      // isResPC, isResSP
	      if (W > bp01) {
	        this.isResSP = false;
	        this.isResPC = true;
	        $('body').removeClass('isResponsiveSP');
	        $('body').addClass('isResponsivePC');
	      } else {
	        this.isResSP = true;
	        this.isResPC = false;
	        $('body').addClass('isResponsiveSP');
	        $('body').removeClass('isResponsivePC');
	      }
	
	      log(this.isResSP, this.isResPC);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  user agentでpc,sp振り分け
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isPCSP",
	    value: function isPCSP(urlPC, urlSP) {
	
	      var url = location.href;
	
	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {
	
	        location.href = urlSP;
	      }
	
	      if (this.isPC && url.indexOf('pc') == -1) {
	
	        location.href = urlPC;
	      }
	
	      if (this.isTAB && url.indexOf('pc') == -1) {
	
	        location.href = urlPC;
	      }
	    }
	  }]);
	
	  return Device;
	}();
	
	exports.default = Device;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  MyMath
	//
	// ------------------------------------------------------------
	
	var MyMath = function () {
	  function MyMath() {
	    _classCallCheck(this, MyMath);
	  }
	
	  // ランダムな整数を取得
	  // -----------------------------------
	  // @min : 最小値(int)
	  // @max : 最大値(int)
	  // return : minからmaxまでのランダムな整数(int)
	  // -----------------------------------
	
	
	  _createClass(MyMath, [{
	    key: "randomInt",
	    value: function randomInt(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    // ランダムな整数を2つの範囲から取得
	    // -----------------------------------
	    // @min1 : 最小値1(int)
	    // @max1 : 最大値1(int)
	    // @min2 : 最小値2(int)
	    // @max2 : 最大値2(int)
	    // return : minからmaxまでのランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
	      if (this.hit(2)) {
	        return this.randomInt(min1, max1);
	      } else {
	        return this.randomInt(min2, max2);
	      }
	    }
	
	    // 1/@rangeの確率でtrueを取得
	    // -----------------------------------
	    // @range : 母数(int)
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "hit",
	    value: function hit(range) {
	
	      return this.randomInt(0, range - 1) === 0;
	    }
	
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "range",
	    value: function range(val) {
	
	      return this.randomInt(-val, val);
	    }
	
	    // 値をマッピング
	    // -----------------------------------
	    // @num : マッピングする値(Number)
	    // @resMin : 結果となる値の最小値(Number)
	    // @resMax : 結果となる値の最大値(Number)
	    // @baseMin : 元となる値の最小値(Number)
	    // @baseMax : 元となる値の最大値(Number)
	    // return : マッピングされた値(Number)
	    // -----------------------------------
	
	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {
	
	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);
	
	      return (num - baseMin) * p + resMin;
	    }
	  }, {
	    key: "demical",
	    value: function demical(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	      // 計算 ( Math.pow( 10, 4 ) = 10000 )
	      var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);
	
	      return val;
	    }
	  }, {
	    key: "float",
	    value: function float(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	      return v.toFixed(n);
	    }
	
	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	    // decimal(num, n) {
	    //   var i, pos;
	    //   num = String(num);
	    //   pos = num.indexOf(".");
	    //   if (n === 0) {
	    //     return num.split(".")[0];
	    //   }
	    //   if (pos === -1) {
	    //     num += ".";
	    //     i = 0;
	    //     while (i < n) {
	    //       num += "0";
	    //       i++;
	    //     }
	    //     return num;
	    //   }
	    //   num = num.substr(0, pos) + num.substr(pos, n + 1);
	    //   return num;
	    // }
	
	  }, {
	    key: "clamp",
	    value: function clamp(val, min, max, minVal, maxVal) {
	
	      if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;
	
	      return val;
	    }
	  }, {
	    key: "rate",
	    value: function rate(val, base) {
	
	      var v = val / base;
	
	      return v;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(val01, val02, val) {
	
	      val = val < 0 ? 0 : val;
	      val = val > 1 ? 1 : val;
	      return val01 + (val02 - val01) * val;
	    }
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI; //1ラジアンが何度か
	    }
	
	    // to radians
	
	  }, {
	    key: "radian",
	    value: function radian(angle) {
	
	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {
	
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1
	
	      return arr;
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
	        return 0;
	      });
	
	      // var a = [5,3,9,1,10]
	      // 結果:1,3,5,9,10
	
	      return arr;
	    }
	
	    // map(value, min01, max01, min02, max02) {
	
	    //   var dis01 = max01 - min01;
	    //   var dis02 = max02 - min02
	
	    //   var rate = dis02 / dis01;
	
	    //   value = value * rate;
	
	    //   return value;
	    // }
	
	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {
	
	      return Math.min(max, Math.max(value, min));
	
	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	  }]);
	
	  return MyMath;
	}();
	
	exports.default = MyMath;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Other
	//
	// ------------------------------------------------------------
	
	var Other = function () {
	  function Other() {
	    _classCallCheck(this, Other);
	  }
	
	  // ------------------------------------------------------------
	  //  getPageID
	  // ------------------------------------------------------------
	
	
	  _createClass(Other, [{
	    key: 'getPageID',
	    value: function getPageID() {
	
	      this.pageID = $('body').attr('id');
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'isObject',
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: 'isNumber',
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: 'isString',
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: 'isFunction',
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: 'isNull',
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: 'isUndefined',
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setImgSPSize',
	    value: function setImgSPSize($target) {
	
	      // responsive spのとき処理
	      // if (!this.isResSP) return;
	      // 一度だけ処理
	      if (this.isSetSPSize) return;
	      this.isSetSPSize = true;
	
	      var $img = $target,
	          len = $img.length;
	
	      $img.each(function (i) {
	
	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);
	
	        $(this).attr({
	          'width': w,
	          'height': h
	        });
	
	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }
	
	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'notMove',
	    value: function notMove() {
	      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	
	      if (flag) {
	
	        $('.section01').on('touchstart.noControl touchmove.noControl touchend.noControl', function (e) {
	          e.preventDefault();
	        });
	
	        // this.f = (e)=>{e.preventDefault();};
	        // document.addEventListener('touchmove', this.f, { passive: false });
	      } else {
	
	        $('.section01').off('touchstart.noControl touchmove.noControl touchend.noControl');
	
	        // document.removeEventListener('touchmove', this.f, false);
	      }
	
	      // this.offNotMove();
	
	      // $(window).on('touchstart.noControl touchmove.noControl touchend.noControl click.noControl', function(e){e.preventDefault();});
	    }
	
	    // offNotMove() {
	
	    //   $(window).off('touchstart.noControl touchmove.noControl touchend.noControl');
	    //   // $(window).off('touchstart.noControl touchmove.noControl touchend.noControl click.noControl');
	
	    // }
	
	    // notMove(flag=true) {
	
	    //   if (flag) {
	
	    //     this.f = (e)=>{e.preventDefault();};
	
	    //     document.addEventListener('touchmove', this.f, { passive: false });
	
	    //   } else {
	
	    //     log('off',this.f)
	
	    //     document.removeEventListener('touchmove', this.f, false);
	
	    //   }
	
	    // }
	
	    // notMove() {
	
	    //   this.offNotMove();
	
	    //   this.f = (e)=>{e.preventDefault();};
	
	    //   document.addEventListener('touchmove', this.f.bind(this), { passive: false });
	
	    // }
	
	    // offNotMove() {
	
	
	    //   log(111,this.f);
	    //   if (this.f) {
	    //     log(111,this.f);
	    //     document.removeEventListener('touchmove', this.f.bind(this));  
	    //   }
	
	    // }
	
	
	  }, {
	    key: 'setPreventMousemove',
	    value: function setPreventMousemove() {
	
	      var self = this;
	
	      this.removePrevent();
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: 'preventDefault',
	    value: function preventDefault(e) {
	
	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: 'preventDefaultForScrollKeys',
	    value: function preventDefaultForScrollKeys(e) {
	
	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: 'disableScroll',
	    value: function disableScroll($target) {
	
	      if ($target.addEventListener) // older FF
	        $target.addEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.onwheel = this.preventDefault; // modern standard
	      $target.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      $target.ontouchmove = this.preventDefault; // mobile
	      // document.onkeydown  = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: 'enableScroll',
	    value: function enableScroll($target) {
	
	      if ($target.removeEventListener) $target.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.onmousewheel = document.onmousewheel = null;
	      $target.onwheel = null;
	      $target.ontouchmove = null;
	      document.onkeydown = null;
	    }
	
	    // 全画面
	
	  }, {
	    key: 'full',
	    value: function full() {
	
	      var b = document.body;
	      // var b = document.getElementById("wrapper")
	      // var b = document.getElementsByClassName('menu03');
	
	      if (b.requestFullScreen) {
	        b.requestFullScreen();
	      } else if (b.webkitRequestFullScreen) {
	        b.webkitRequestFullScreen();
	      } else if (b.mozRequestFullScreen) {
	        b.mozRequestFullScreen();
	      } else if (b.msRequestFullscreen) {
	        b.msRequestFullscreen();
	      } else {
	        alert('ご利用のブラウザはフルスクリーン操作に対応していません');
	        return;
	      }
	    }
	  }]);
	
	  return Other;
	}();
	
	exports.default = Other;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  String
	//
	// ------------------------------------------------------------
	
	var String = function () {
	  function String() {
	    _classCallCheck(this, String);
	  }
	
	  _createClass(String, [{
	    key: "isContain",
	    value: function isContain(str, contain) {
	
	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }
	
	      return false;
	    }
	
	    // 0埋めで2桁にする関数
	
	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;
	
	
	      return ("000000000000" + str).substr(num);
	    }
	
	    // 値段表記
	    // -----------------------------------
	
	  }, {
	    key: "price",
	    value: function price(num) {
	
	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }
	
	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------
	
	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {
	
	      var i, len, res;
	      res = "";
	      len = str.length;
	      i = 1;
	      while (i <= len) {
	        res += str.substr(-i, 1);
	        i++;
	      }
	      return res;
	    }
	
	    // 文字列の全置換
	    // -----------------------------------
	    // @val  : 文字列
	    // @oeg  : 置換前の文字列
	    // @dest : 置換後の文字列
	    // -----------------------------------
	
	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {
	
	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {
	
	      var r = new RegExp(before, 'g');
	
	      return str.replace(r, after);
	    }
	
	    // ユニークIDを取得
	    // -----------------------------------
	
	  }, {
	    key: "unique",
	    value: function unique() {
	
	      return new Date().getTime();
	    }
	  }]);
	
	  return String;
	}();
	
	exports.default = String;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Url
	//
	// ------------------------------------------------------------
	
	var Url = function () {
	  function Url() {
	    _classCallCheck(this, Url);
	  }
	
	  // クエリ抜き出し
	
	
	  _createClass(Url, [{
	    key: 'getParam',
	    value: function getParam() {
	
	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};
	
	      for (var i = 0; i < paramItems.length; i++) {
	
	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }
	
	      return list;
	    }
	  }, {
	    key: 'setParam',
	    value: function setParam(text) {
	
	      window.history.pushState('', '', '?' + text);
	    }
	
	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------
	
	  }, {
	    key: 'hash',
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	  }, {
	    key: 'getHash',
	    value: function getHash() {
	
	      return location.hash;
	    }
	  }, {
	    key: 'setHash',
	    value: function setHash(text) {
	
	      location.hash = text;
	    }
	
	    // 指定したstringがクッキーにセットされていたらtrue
	
	  }, {
	    key: 'checkCookie',
	    value: function checkCookie(str) {
	
	      var flag = null;
	
	      if ($.cookie(str) == undefined || $.cookie(str) == '') flag = false;else flag = true;
	
	      return flag;
	    }
	
	    // 指定したstringがクッキーにセットされていたらtrue
	
	  }, {
	    key: 'getCookie',
	    value: function getCookie(str) {
	
	      if ($.cookie(str) == undefined || $.cookie(str) == '') return null;else return $.cookie(str);
	    }
	  }, {
	    key: 'setCookie',
	    value: function setCookie(str, val, period) {
	
	      var p = period || 5 * 1000; // 5秒
	      // var p = period || 30 * 1000; // 30秒
	      // var p = period || 15 * 60 * 1000; // 15分
	      // var p = period || 7 * 24 * 60 * 60 * 1000; //7日
	      var date = new Date();
	      date.setTime(date.getTime() + p);
	
	      $.cookie(str, val, { expires: date, path: '/' });
	    }
	
	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'protocol',
	    value: function protocol() {
	
	      return location.protocol;
	    }
	  }, {
	    key: 'host',
	    value: function host() {
	
	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: 'port',
	    value: function port() {
	
	      return location.port;
	    }
	  }, {
	    key: 'path',
	    value: function path() {
	
	      return location.pathname;
	    }
	  }]);
	
	  return Url;
	}();
	
	exports.default = Url;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Func
	//
	// ------------------------------------------------------------
	
	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);
	
	    this.blank();
	    this.requestAnimationFrame();
	    this.scrollRestoration(false);
	  }
	
	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {
	
	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'scrollRestoration',
	    value: function scrollRestoration() {
	      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	
	      // スクロール位置を元の位置に戻す
	      if (bool) {
	
	        window.history.scrollRestoration = 'auto';
	
	        // スクロール位置を必ず一番上に
	      } else {
	
	        window.history.scrollRestoration = 'manual';
	      }
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {
	
	      var FPS = 1000 / 60;
	
	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };
	
	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }
	
	    // smart phone 全画面
	
	  }, {
	    key: 'SPH',
	    value: function SPH() {
	      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.section');
	
	
	      var r = function r() {
	        $target.height(gb.r.h);
	      };
	
	      r();
	
	      gb.r.add('re', r);
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {
	
	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }
	
	      log(gb.u.isIE);
	
	      if (gb.u.isIE) {
	
	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {
	
	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------
	
	      if (gb.u.isPC) {
	
	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }
	
	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.u.isAndroidVersion();
	
	      if (v == undefined) return;
	      if (v < 5) {
	
	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }, {
	    key: 'smartRollover',
	    value: function smartRollover($target) {
	      var off = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_off.';
	      var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_on.';
	
	
	      var $images = $target;
	
	      for (var i = 0; i < $images.length; i++) {
	
	        if ($images.eq(i).get(0).getAttribute("src").match(off)) {
	
	          log(111);
	
	          $images.eq(i).get(0).onmouseover = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(off, on));
	          };
	          $images.eq(i).get(0).onmouseout = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(on, off));
	          };
	        }
	      }
	    }
	  }]);
	
	  return Func;
	}();
	
	exports.default = Func;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Debugger
	//
	// ------------------------------------------------------------
	
	var Debugger = function () {
	  function Debugger() {
	    _classCallCheck(this, Debugger);
	
	    this.setup();
	    this.setEvents();
	
	    this.onReady();
	    this.console(); // console
	  }
	
	  _createClass(Debugger, [{
	    key: 'setup',
	    value: function setup() {}
	
	    // html外出し用
	
	  }, {
	    key: 'setupHTML',
	    value: function setupHTML() {
	
	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;
	
	      this.$target = $('<div class="debug"></div>');
	
	      this.$target.prependTo($('body')).css({
	        position: 'fixed',
	        'z-index': 99999,
	        left: 20,
	        top: 20
	      });
	    }
	
	    // log系を短く
	
	  }, {
	    key: 'console',
	    value: function (_console) {
	      function console() {
	        return _console.apply(this, arguments);
	      }
	
	      console.toString = function () {
	        return _console.toString();
	      };
	
	      return console;
	    }(function () {
	
	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log'];
	
	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }
	
	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {
	
	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && typeof console[m] === "function" && gb.conf.LOG) {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    })
	
	    // htmlに外出し
	
	  }, {
	    key: 'html',
	    value: function html(v) {
	
	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;
	
	      this.$target.text(v);
	    }
	
	    // alert
	
	  }, {
	    key: 'alert',
	    value: function alert(v) {
	
	      window.alert(v);
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      this.setupHTML();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	    }
	  }]);
	
	  return Debugger;
	}();
	
	exports.default = Debugger;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Events = __webpack_require__(15);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _Render_def = __webpack_require__(16);
	
	var _Render_def2 = _interopRequireDefault(_Render_def);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ReadyMgr
	//
	//--------------------------------------------------
	
	var ReadyMgr = function (_Base) {
	  _inherits(ReadyMgr, _Base);
	
	  function ReadyMgr() {
	    _classCallCheck(this, ReadyMgr);
	
	    var _this = _possibleConstructorReturn(this, (ReadyMgr.__proto__ || Object.getPrototypeOf(ReadyMgr)).call(this));
	
	    _this.name = 'ReadyMgr';
	
	    _this.completed = 0;
	    _this.total = 1; // 最初に0で割られるのを防ぐ
	    _this.current = 0;
	
	    _this.$wrap = $('#wrapper');
	
	    if (gb.conf.LOADING) _this.setup(); // loading有り
	    else _this.setup_not_loading(); // loading無し
	
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ReadyMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.e = new _Events2.default(this);
	      this.r = new _Render_def2.default();
	
	      this.r.add();
	      this.r.show();
	    }
	  }, {
	    key: 'setup_not_loading',
	    value: function setup_not_loading() {
	
	      // this.$wrap.css('opacity', 1);
	      this.onComplete();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.e) {
	
	        this.e.update();
	        this.r.update(this.e);
	      }
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {
	
	      // update処理をやめる
	      this.offU();
	
	      // this.r.hide();
	
	      // timeline    
	      var tl = new TimelineMax();
	
	      tl
	      // .to(this.$wrap, 2.4, {
	      .to(this.$wrap, 0.0, {
	        opacity: 1,
	        delay: 0,
	        ease: Power2.easeInOut,
	        onComplete: function onComplete() {}
	      }).add(function () {
	        $(window).trigger('loadingEnd');
	      }, 1.0);
	    }
	  }]);
	
	  return ReadyMgr;
	}(_Base3.default);
	
	exports.default = ReadyMgr;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Base
	//
	// ------------------------------------------------------------
	
	var Base = function () {
	  function Base() {
	    _classCallCheck(this, Base);
	
	    this.name = 'Base';
	
	    this.isUEv = false; // update
	    this.isREv = false; // resize
	    this.isSEv = false; // scroll
	    this.isMEv = false; // mouse
	    this.prevent = true;
	
	    this.isloop = true;
	  }
	
	  _createClass(Base, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      if (this.isloop) {
	
	        this.update();
	        this.draw();
	
	        this.Timer = requestAnimationFrame(this.loop.bind(this));
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {}
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      if (this.isUEv) this.loop();
	      if (this.isREv) $(window).on('resize' + '.' + this.name, this.onResize.bind(this));
	      if (this.isSEv) $(window).on('scroll' + '.' + this.name, this.onScroll.bind(this));
	      if (this.isMEv) $(window).on('touchmove' + '.' + this.name, function (e) {
	        self.onMouseMove.call(self, e);
	        if (self.prevent) e.preventDefault();
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      if (this.isUEv) {
	        this.isloop = false;
	        cancelAnimationFrame(this.Timer);
	      }
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }, {
	    key: 'startU',
	    value: function startU() {
	
	      this.isloop = true;
	      this.loop();
	    }
	  }, {
	    key: 'offU',
	    value: function offU() {
	
	      this.isloop = false;
	      if (this.isUEv) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: 'offR',
	    value: function offR() {
	
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	    }
	  }, {
	    key: 'offS',
	    value: function offS() {
	
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	    }
	  }, {
	    key: 'offM',
	    value: function offM() {
	
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }]);
	
	  return Base;
	}();
	
	exports.default = Base;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Events
	//
	//--------------------------------------------------
	
	var Events = function () {
	  function Events(parent) {
	    _classCallCheck(this, Events);
	
	    this.parent = parent;
	
	    this.current = 0;
	
	    this.isLock = false;
	    this.loopStart = true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Events, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      var target = gb.lm.completed / gb.lm.total * 100;
	      this.current += (target - this.current) * 0.1;
	      gb.lm.current = this.current;
	      // log(gb.lm.completed,gb.lm.total)
	
	      // 終了処理
	      if (this.current >= 100 && !this.isLock) {
	        this.isLock = true;
	        this.parent.onComplete();
	      }
	
	      // current が 99.9 より大きければ 100 と見なして終了処理へ
	      if (this.current > 99.9) {
	        this.current = 100;
	      }
	
	      // log(gb.lm.completed, gb.lm.total, this.current);
	
	      return this;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return Events;
	}();
	
	exports.default = Events;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function () {
	  function Render(parent) {
	    _classCallCheck(this, Render);
	
	    this.$wrap = $('html');
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'add',
	    value: function add() {
	
	      var html = '<div id="loading">' + '<div class="loadingBar"></div>' + '<div class="loadingPercent"></div>' + '</div>';
	
	      this.$wrap.append(html);
	
	      // get dom
	      this.$loading = $('#loading');
	      this.$bar = $('#loading .loadingBar');
	      this.$percent = $('#loading .loadingPercent');
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      // var tl = new TimelineMax();
	
	      // tl.to(this.$loading, 1.0, {
	      //   opacity: 1,
	      //   ease: Expo.easeInOut,
	      //   onComplete: ()=>{
	
	      //   }
	      // })
	
	      TweenMax.set(this.$loading, { opacity: 1 });
	    }
	  }, {
	    key: 'update',
	    value: function update(e) {
	
	      // log('loading', e.current);
	
	      this.$bar.css({ width: e.current + '%' }); // bar
	      this.$percent.html(Math.floor(e.current) + '<span>%</span>'); // value
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this = this;
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$bar, 1.0, {
	        x: '102%',
	        ease: Expo.easeInOut,
	        onComplete: function onComplete() {
	
	          _this.remove();
	        }
	      }).to(this.$percent, 1.0, {
	        opacity: 0,
	        ease: Power2.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	
	      this.$loading.remove();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Render;
	}();
	
	exports.default = Render;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateManager
	//
	//--------------------------------------------------
	
	var UpdateMgr = function () {
	  function UpdateMgr() {
	    _classCallCheck(this, UpdateMgr);
	
	    this.frame = 0;
	    this.len = 0;
	    this.Timer = null;
	    this.isStop = false;
	
	    this.st = 0;
	    this.et = 0;
	    this.delta = 0;
	    this.frameRate = 0;
	
	    this.setup();
	  }
	
	  _createClass(UpdateMgr, [{
	    key: "setup",
	    value: function setup() {
	
	      this.start = this.st = new Date().getTime();
	      this.fps = 60.0;
	      this.frameLength = 6.0;
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	
	      // delta
	      var et = new Date().getTime();
	      this.delta = et - this.st;
	      this.st = et;
	
	      // frame
	      this.frame++;
	
	      // 再帰
	      this.Timer = requestAnimationFrame(this.loop.bind(this));
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.loop();
	    }
	  }, {
	    key: "getElapsedTime",
	    value: function getElapsedTime() {
	
	      var elapsed = new Date().getTime() - this.start;
	
	      return elapsed / 1000;
	    }
	  }]);
	
	  return UpdateMgr;
	}();
	
	exports.default = UpdateMgr;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeMgr
	//
	//--------------------------------------------------
	
	var ResizeMgr = function () {
	  function ResizeMgr() {
	    _classCallCheck(this, ResizeMgr);
	
	    this.w = 0;
	    this.h = 0;
	    this.oldW = 0;
	    this.oldH = 0;
	    this.ww = 0;
	    this.wh = 0;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ResizeMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'getWindowSize',
	    value: function getWindowSize() {
	
	      this.oldW = this.w;
	      this.oldH = this.h;
	      this.w = window.innerWidth;
	      this.h = window.innerHeight;
	
	      this.ww = $(window).width();
	      this.hh = $(window).height();
	
	      this.haw = this.w / 2;
	      this.hah = this.h / 2;
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('resize', this.onResize.bind(this));
	      // $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      // $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);
	
	  return ResizeMgr;
	}();
	
	exports.default = ResizeMgr;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollMgr
	//
	//--------------------------------------------------
	
	var ScrollMgr = function () {
	  function ScrollMgr() {
	    _classCallCheck(this, ScrollMgr);
	
	    this.st = 0; // 現在のscroll top
	    this.sb = 0; // 現在のscroll bottom
	
	    this.isUp = null; // 上スクロールか下スクロールか;
	    this.dis = 0;
	    this.deltaY = 0;
	    this.offset = 0;
	
	    this.isSetWheel = true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.st = $(window).scrollTop();
	      this.sb = this.st + gb.r.h;
	    }
	  }, {
	    key: 'onWheel',
	    value: function onWheel(e, delta, deltaX, deltaY) {
	
	      this.isWheel = true;
	
	      if (deltaY > 0) this.isUp = true;else this.isUp = false;
	
	      this.dis = deltaY - this.deltaY;
	      this.offset += deltaY;
	      this.deltaY = deltaY;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      // scroll
	      $(window).on('scroll', function () {
	        _this.onScroll();
	      });
	      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	
	      // wheel
	      if (this.isSetWheel) $(document).on('mousewheel', function (e, delta, deltaX, deltaY) {
	        _this.onWheel(e, delta, deltaX, deltaY);
	      }); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);});
	    }
	  }]);
	
	  return ScrollMgr;
	}();
	
	exports.default = ScrollMgr;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseMgr
	//
	//--------------------------------------------------
	
	var MouseMgr = function () {
	  function MouseMgr() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseMgr);
	
	    this.$wrap = $wrap;
	
	    this.x = 0;
	    this.y = 0;
	    this.px = 0; // previous
	    this.py = 0; // previous
	
	    this.cx = 0;
	    this.cy = 0;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseMgr, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "onMousemove",
	    value: function onMousemove(e) {
	
	      this.getPos(e);
	    }
	  }, {
	    key: "onTouchmove",
	    value: function onTouchmove(e) {
	
	      this.x = e.originalEvent.changedTouches[0].pageX;
	      this.y = e.originalEvent.changedTouches[0].pageY;
	    }
	  }, {
	    key: "getPos",
	    value: function getPos(e) {
	
	      if (e.offsetX == undefined) {
	        // this works for Firefox
	        this.x = e.pageX - this.$wrap.offset().left;
	        this.y = e.pageY - this.$wrap.offset().top;
	      } else {
	        // works in Google Chrome
	        this.x = e.pageX - $(window).scrollLeft();
	        this.y = e.pageY - $(window).scrollTop();
	      }
	
	      this.cx = e.clientX - gb.r.hw;
	      this.cy = e.clientY - gb.r.hh;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this = this;
	
	      this.$wrap.on("touchmove.MouseMgr", function (e) {
	        _this.onTouchmove(e);
	      });
	      this.$wrap.on("mousemove.MouseMgr", function (e) {
	        _this.onMousemove(e);
	      });
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {
	
	      this.$wrap.off("touchmove.MouseMgr");
	      this.$wrap.off("mousemove.MouseMgr");
	    }
	  }]);
	
	  return MouseMgr;
	}();
	
	exports.default = MouseMgr;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateList
	//
	//--------------------------------------------------
	
	var UpdateList = function () {
	  function UpdateList() {
	    _classCallCheck(this, UpdateList);
	
	    this.list = [];
	
	    this.Timer = null;
	    this.isStop = false;
	  }
	
	  _createClass(UpdateList, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      // 処理
	      for (var i in this.list) {
	        this.list[i].func();
	      } // 再帰
	      this.Timer = requestAnimationFrame(this.update.bind(this));
	      if (this.isStop) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.update();
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      this.isStop = true;
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.isStop = false;
	      this.update();
	    }
	  }, {
	    key: "add",
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: "remove",
	    value: function remove(name) {
	
	      var target = { name: name, func: function func() {} };
	
	      UpdateList.arrRemove(this.list, target);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: "arrRemove",
	    value: function arrRemove(arr, target) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == target.name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return UpdateList;
	}();
	
	exports.default = UpdateList;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeList
	//
	//--------------------------------------------------
	
	var ResizeList = function () {
	  function ResizeList() {
	    _classCallCheck(this, ResizeList);
	
	    this.list = [];
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ResizeList, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      var arr = this.list;
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // $(window).on('resize', this.onResize.bind(this));
	      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);
	
	  return ResizeList;
	}();
	
	exports.default = ResizeList;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollList
	//
	//--------------------------------------------------
	
	var ScrollList = function () {
	  function ScrollList() {
	    _classCallCheck(this, ScrollList);
	
	    this.list = [];
	    this.endList = [];
	
	    this.isStart = true;
	    this.isWheel = false; // wheel中か、そうでないか
	    this.endTimer = 200;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollList, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.add('end', this.onEnd.bind(this));
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      ScrollList.arrRemove(this.list, name);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll(e) {
	
	      if (this.isStart) {
	        this.isStart = false;
	        // log('resizeStart');
	        // 最初だけの処理
	      };
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseWheel',
	    value: function onMouseWheel(e, delta, deltaX, deltaY) {
	
	      this.isWheel = true;
	
	      if (deltaY > 0) this.upWheel = true;else this.upWheel = false;
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onEnd',
	    value: function onEnd(e) {
	
	      var self = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        self.isStart = true;
	        self.isWheel = false;
	
	        for (var i in self.endList) {
	          self.endList[i]();
	        }
	      }, this.endTimer);
	    }
	  }, {
	    key: 'addFixedObjectScroll',
	    value: function addFixedObjectScroll($target) {
	
	      this.list.push(function () {
	
	        $target.css("left", -$(window).scrollLeft());
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      $(window).on('scroll', function (e) {
	        _this.onScroll(e);
	      });
	      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	      // $(document).on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);}); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);});
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return ScrollList;
	}();
	
	exports.default = ScrollList;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseList
	//
	//--------------------------------------------------
	
	var MouseList = function () {
	  function MouseList() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseList);
	
	    this.$wrap = $wrap;
	
	    this.list = [{ name: 'def', func: function func() {} }];
	    this.startList = [{ name: 'def', func: function func() {} }];
	    this.endList = [{ name: 'def', func: function func() {} }];
	
	    this.x = 0;
	    this.y = 0;
	    this.endx = 0;
	    this.endy = 0;
	
	    this.isStart = true;
	    this.Timer = null;
	    this.endTime = 20;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseList, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.add('onEnd', this.onMouseEnd.bind(this));
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	
	      if (this.Timer) clearTimeout(this.Timer);
	      var dis = gb.m.x - this.endx;
	      // log(this.isStart, dis);
	      if (this.isStart && Math.abs(dis) > 3) {
	        this.isStart = false;
	
	        // 最初だけの処理
	        // log('moveStart');
	
	        for (var i in this.startList) {
	          this.startList[i].func();
	        }
	      };
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseEnd',
	    value: function onMouseEnd(e) {
	      var _this = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        if (!_this.isStart) {
	          _this.isStart = true;
	
	          // log('moveEnd');
	          _this.endx = gb.m.x;
	          _this.endy = gb.m.y;
	
	          for (var i in _this.endList) {
	            _this.endList[i].func();
	          }
	        }
	      }, this.endTime);
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'addStart',
	    value: function addStart(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.startList.push(obj);
	    }
	  }, {
	    key: 'addEnd',
	    value: function addEnd(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.endList.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      MouseList.arrRemove(this.list, name);
	    }
	  }, {
	    key: 'removeStart',
	    value: function removeStart(name) {
	
	      MouseList.arrRemove(this.startList, name);
	    }
	  }, {
	    key: 'removeEnd',
	    value: function removeEnd(name) {
	
	      MouseList.arrRemove(this.endList, name);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this2 = this;
	
	      this.$wrap.on("touchmove.MouseList", function (e) {
	        _this2.onTouchMove(e);
	      });
	      this.$wrap.on("mousemove.MouseList", function (e) {
	        _this2.onMouseMove(e);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$wrap.off("touchmove.MouseList");
	      this.$wrap.off("mousemove.MouseList");
	    }
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return MouseList;
	}();
	
	exports.default = MouseList;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  LoadMgr
	//
	//--------------------------------------------------
	
	var _THREELoader = __webpack_require__(26);
	
	var _THREELoader2 = _interopRequireDefault(_THREELoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMgr = function () {
	  function LoadMgr() {
	    _classCallCheck(this, LoadMgr);
	
	    this.data = null;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(LoadMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return LoadMgr;
	}();
	
	exports.default = LoadMgr;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  THREELoader
	//
	//--------------------------------------------------
	
	// TextLoader
	// SVGLoader
	// CSSLoader
	// JavaScriptLoader
	// BinaryLoader
	// ImageLoader
	// SpriteSheetLoader
	// VideoLoader
	// SoundLoader
	// JSONLoader
	// JSONPLoader
	// XMLLoader
	
	var THREELoader = function () {
	  function THREELoader() {
	    _classCallCheck(this, THREELoader);
	
	    this.cb = function () {};
	  }
	
	  _createClass(THREELoader, [{
	    key: 'textureByName',
	    value: function textureByName(len, r, cbProg, cbComp) {
	      var _this = this;
	
	      this.list = [];
	      var cnt = 0;
	
	      var load = function load(i) {
	
	        var resource = r[i];
	        var tl = new THREE.TextureLoader();
	        // tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {
	
	          tex.wrapS = THREE.RepeatWrapping;
	          tex.wrapT = THREE.RepeatWrapping;
	
	          // ロード数をカウント
	          cnt++;
	          _this.list.push(tex);
	
	          cbProg();
	          if (cnt == len) cbComp();else load(cnt);
	        });
	      };
	
	      load(cnt);
	    }
	  }, {
	    key: 'texture',
	    value: function texture(len, r, cbProg, cbComp) {
	      var _this2 = this;
	
	      this.list = [];
	      var cnt = 0;
	
	      var load = function load(i) {
	
	        var resource = r.path + r.name + gb.u.s.add0(i + 1, -2) + r.ext;
	        var tl = new THREE.TextureLoader();
	        tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {
	
	          log(tex);
	
	          // ロード数をカウント
	          cnt++;
	          _this2.list.push(tex);
	
	          cbProg();
	          if (cnt == len) cbComp();else load(cnt);
	        });
	      };
	
	      load(cnt);
	    }
	  }, {
	    key: 'obj',
	    value: function obj() {
	      var _this3 = this;
	
	      gb.objList = [];
	
	      var texture = new THREE.Texture();
	
	      var loader = new THREE.ImageLoader();
	      loader.load(gb.in.conf.tex01, function (image) {
	
	        texture.image = image;
	        texture.needsUpdate = true;
	
	        log(texture);
	      });
	
	      // var texture = THREE.ImageUtils.loadTexture(gb.in.conf.tex01);
	
	      // obj
	      this.object = new THREE.OBJLoader();
	      this.object.load(gb.in.conf.OBJPATH01, function (e) {
	        // this.object.load( './ff15/royal/gallery2018/assets/resource/obj/_buf/stage/stage01_01.obj', (e)=>{
	
	        e.traverse(function (child) {
	
	          if (child instanceof THREE.Mesh) {
	
	            // child.material.map = texture;
	            child.material.side = THREE.DoubleSide;
	
	            child.geometry.computeBoundingBox();
	
	            // # 原点を真ん中に
	            // if @_list[@_loadedNum].rePos
	            var b = child.geometry.boundingBox;
	
	            // 横に置く
	            child.rotation.x = -Math.PI / 2;
	
	            // 中央に
	            child.position.x = -b.min.x - (b.max.x - b.min.x) * 0.5;
	            child.position.y = -b.min.y - (b.max.y - b.min.y) * 0.5;
	            child.position.z = -b.min.z - (b.max.z - b.min.z) * 0.5;
	
	            // log(b,b.min.x,(b.max.x - b.min.x)/2);
	            // log(b,b.min.y,(b.max.y - b.min.y)/2);
	            // log(b,b.min.z,(b.max.z - b.min.z)/2);
	            // child.position.z = -b.min.z;
	
	            // 下の方へ移動
	            child.position.y -= 200;
	          }
	
	          log(child);
	        });
	
	        // e.rotation.x = Math.PI / 4
	        // e.position.set(0,-100,0);/
	        // e.scale.set(0.5,0.5,0.5);
	
	        // log(e);
	
	        gb.objList.push(e);
	
	        _this3.cb();
	      });
	    }
	  }, {
	    key: 'mtl',
	    value: function mtl() {
	      // not work
	
	      var m = new THREE.MTLLoader();
	      // m.setBaseUrl( "http://threejs.org/examples/obj/walt/" );
	      // m.setPath( "http://threejs.org/examples/obj/walt/" );
	      m.load(gb.in.conf.MTLPATH01, function (materials) {
	
	        materials.preload();
	
	        var o = new THREE.OBJLoader();
	        // o.setMaterials( materials );
	        // o.setPath( "http://threejs.org/examples/obj/walt/" );
	        o.load(gb.in.conf.OBJPATH01, function (o) {
	
	          // mesh = object;
	          // mesh.position.y = -50;
	          // scene.add( mesh );
	
	          log(o);
	        });
	      });
	    }
	  }, {
	    key: 'obj_mtl',
	    value: function obj_mtl() {
	
	      gb.objList = [];
	
	      var mtlLoader = new THREE.MTLLoader();
	      mtlLoader.setBaseUrl('assets/resource/obj/');
	      mtlLoader.setPath('assets/resource/obj/');
	      mtlLoader.load('male02.mtl', function (materials) {
	
	        materials.preload();
	
	        var objLoader = new THREE.OBJLoader();
	        objLoader.setMaterials(materials);
	        objLoader.load(gb.in.conf.OBJPATH02, function (object) {
	
	          // object.position.y = - 95;
	          object.position.y = 100;
	          // scene.add( object );
	          gb.objList.push(object);
	        });
	      });
	    }
	  }, {
	    key: 'collada',
	    value: function collada() {
	      // not work
	
	      gb.daeList = [];
	
	      var loader = new THREE.ColladaLoader();
	      //loader.options.convertUpAxis = true;
	      loader.load(gb.in.conf.DAEPATH01, function (model) {
	
	        // console.log(model)
	        // object = model.skins[ 0 ];
	        log(model);
	        var dae = model.scene;
	        log(dae);
	        dae.position.set(0, 0, 0);
	        dae.scale.set(10, 10, 10);
	
	        gb.daeList.push(dae);
	
	        // scene.add(dae);
	        // console.log(scene);
	      });
	    }
	  }, {
	    key: 'json3DModel',
	    value: function json3DModel() {// not work
	
	
	    }
	  }]);
	
	  return THREELoader;
	}();
	
	exports.default = THREELoader;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Keys = __webpack_require__(28);
	
	var _Keys2 = _interopRequireDefault(_Keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  UrlParamMgr
	//
	// ------------------------------------------------------------
	
	var UrlParamMgr = function (_Base) {
	  _inherits(UrlParamMgr, _Base);
	
	  function UrlParamMgr() {
	    _classCallCheck(this, UrlParamMgr);
	
	    var _this = _possibleConstructorReturn(this, (UrlParamMgr.__proto__ || Object.getPrototypeOf(UrlParamMgr)).call(this));
	
	    _this.name = 'UrlParamMgr';
	
	    _this.keys = (0, _Keys2.default)();
	
	    _this.setParam();
	    _this.getParam();
	
	    log(_this);
	
	    return _this;
	  }
	
	  _createClass(UrlParamMgr, [{
	    key: 'setParam',
	    value: function setParam() {}
	  }, {
	    key: 'getParam',
	    value: function getParam() {
	
	      var params = location.search.replace('?', '').split('&');
	
	      // データの設定
	      for (var i = 0, len = params.length; i < len; i++) {
	
	        // 各キー、バリューを取得
	        var param = params[i];
	        var p = param.split('=');
	        var key = p[0],
	            value = p[1];
	
	        // データと比較して設定
	        for (var j = 0; j < this.keys.length; j++) {
	
	          var obj = this.keys[j];
	
	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {
	
	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {
	
	              var val = obj.value[k];
	
	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) {
	                this[obj.key] = val;
	                break;
	                // anyは、どの値でも
	              } else if (val == 'any') {
	                this[obj.key] = value;
	                break;
	                // anyでも、特定の値でもなければ、def値を入れる
	              } else {
	                this[obj.key] = obj.def;
	              }
	            };
	          }
	        };
	      }
	
	      // キーに値が設定されてなければ、def値を設定
	      for (var j = 0; j < this.keys.length; j++) {
	
	        var obj = this.keys[j];
	
	        if (this[obj.key] == undefined) this[obj.key] = obj.def;
	      }
	    }
	  }]);
	
	  return UrlParamMgr;
	}(_Base3.default);
	
	exports.default = UrlParamMgr;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = function data() {
	
	  return [{
	    'key': 'mode',
	    'def': 'visual',
	    'value': ['visual', 'ui', 'util', 'inspection']
	  }, {
	    'key': 'num',
	    'def': '01',
	    'value': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
	  }, {
	    'key': 'effect',
	    'def': '01',
	    'value': ['01', '02']
	  }, {
	    'key': 'param01',
	    'def': '1',
	    'value': ['any']
	  }, {
	    'key': 'param02',
	    'def': '2',
	    'value': ['any']
	  }, {
	    'key': 'param03',
	    'def': '3',
	    'value': ['any']
	  }];
	};
	
	exports.default = data;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Profiler
	//
	//--------------------------------------------------
	
	var Profiler = function (_Base) {
	  _inherits(Profiler, _Base);
	
	  function Profiler() {
	    _classCallCheck(this, Profiler);
	
	    var _this = _possibleConstructorReturn(this, (Profiler.__proto__ || Object.getPrototypeOf(Profiler)).call(this));
	
	    _this.name = 'Profiler';
	
	    _this.isUEv = true; // update
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Profiler, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.Stats = new Stats();
	      this.Stats.domElement.style.position = "fixed";
	      this.Stats.domElement.style.left = "0px";
	      this.Stats.domElement.style.top = "0px";
	      document.body.appendChild(this.Stats.domElement);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.Stats) this.Stats.update();
	    }
	  }]);
	
	  return Profiler;
	}(_Base3.default);
	
	exports.default = Profiler;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(31);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ViewTop
	//
	//--------------------------------------------------
	
	
	var ViewCommon = function (_Base) {
	  _inherits(ViewCommon, _Base);
	
	  function ViewCommon() {
	    _classCallCheck(this, ViewCommon);
	
	    var _this = _possibleConstructorReturn(this, (ViewCommon.__proto__ || Object.getPrototypeOf(ViewCommon)).call(this));
	
	    _this.name = 'ViewCommon';
	
	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ViewCommon, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	      new _Controller2.default();
	
	      gb.lm.completed++;
	    }
	  }, {
	    key: 'onLoadingEnd',
	    value: function onLoadingEnd() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      // effect
	      // ------------------------------------------------------------
	
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), 'setEvents', this).call(this);
	
	      $(window).on('load', this.onLoad.bind(this));
	      // $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
	    }
	  }]);
	
	  return ViewCommon;
	}(_Base3.default);
	
	exports.default = ViewCommon;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(32);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller sss
	//
	//--------------------------------------------------
	
	// canvas
	
	
	// dom
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // canvas
	      this.c = new _Controller2.default();
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene = __webpack_require__(33);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	// import Scene02 from './Scenes/Scene02/Scene.es6';
	
	var Content = function (_Base) {
	  _inherits(Content, _Base);
	
	  function Content() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('body');
	    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cv';
	
	    _classCallCheck(this, Content);
	
	    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));
	
	    _this.isUEv = true; // update
	    _this.isREv = true; // update
	
	    _this.$wrap = $wrap;
	    _this.id = id;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Content, [{
	    key: 'setup',
	    value: function setup() {
	
	      // canvas size
	      this.w = gb.r.w;
	      this.h = gb.r.h;
	
	      this.isRetina = true;
	
	      // renderer
	      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	      if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(gb.r.w, gb.r.h);
	      this.renderer.setClearColor(0x000000, 1.0);
	      // this.renderer.setClearColor(0xffffff, 1.0);
	
	      // append
	      this.$wrap.prepend(this.renderer.domElement);
	      // set style
	      $(this.renderer.domElement).css({ position: 'absolute', top: 0, left: 0, 'z-index': 1, opacity: 1 }).attr('id', this.id);
	
	      // obj
	      this.add();
	
	      this.loopStart = true;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene01 = new _Scene2.default(this.renderer);
	      // this.scene02 = new Scene02(this.renderer);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.scene01.update();
	      // this.scene02.update();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      this.scene01.draw();
	      // this.scene02.draw();
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      var w = gb.r.w;
	      var h = gb.r.h;
	
	      this.scene01.onResize();
	
	      this.renderer.setSize(w, h);
	      if (this.scene01.isEffectComposer) {
	        this.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
	      }
	    }
	  }]);
	
	  return Content;
	}(_Base3.default);
	
	exports.default = Content;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene2 = __webpack_require__(34);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Camera2 = __webpack_require__(35);
	
	var _Camera3 = _interopRequireDefault(_Camera2);
	
	var _Light2 = __webpack_require__(36);
	
	var _Light3 = _interopRequireDefault(_Light2);
	
	var _Objects = __webpack_require__(37);
	
	var _Objects2 = _interopRequireDefault(_Objects);
	
	var _Effect = __webpack_require__(44);
	
	var _Effect2 = _interopRequireDefault(_Effect);
	
	var _Control = __webpack_require__(45);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	var Scene = function (_Base) {
	  _inherits(Scene, _Base);
	
	  function Scene(renderer) {
	    _classCallCheck(this, Scene);
	
	    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
	
	    _this.isUEv = true; // update
	
	    _this.renderer = renderer;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Scene, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isEffect = false;
	      this.isGUI = false;
	      this.isControl = false;
	
	      // obj����
	      this.add();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // scene
	      this.scene = new _Scene3.default();
	      this.scene = this.scene.scene;
	      // this.scene.fog = new THREE.FogExp2( 0x000000, 0.0004 );
	
	      // camera
	      gb.camera = new _Camera3.default(this.scene);
	      this.camera = gb.camera.camera;
	
	      // light
	      this.light = new _Light3.default(this.scene);
	
	      // objects
	      this.obj = new _Objects2.default(this.scene, this.camera, this.renderer);
	
	      // effect
	      this.e = new _Effect2.default(this.isEffect, this.isGUI, this.renderer, this.scene, this.camera);
	
	      // control
	      this.c = new _Control2.default(this.isControl, this.renderer, this.camera);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.c.isControl) this.c.controls.update();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      if (this.e.isEffect) {
	
	        this.e.composer.render();
	      } else {
	
	        this.renderer.render(this.scene, this.camera);
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'state',
	    value: function state() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      var w = gb.r.w * window.devicePixelRatio;
	      var h = gb.r.h * window.devicePixelRatio;
	
	      gb.camera.onResize();
	
	      this.camera.aspect = w / h;
	      this.camera.updateProjectionMatrix();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}(_Base3.default);
	
	exports.default = Scene;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Cube
	//
	//--------------------------------------------------
	
	var Scene = function () {
	  function Scene() {
	    _classCallCheck(this, Scene);
	
	    this.scene;
	
	    this.setup();
	    this.create();
	  }
	
	  _createClass(Scene, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "create",
	    value: function create() {
	
	      this.scene = new THREE.Scene();
	    }
	  }, {
	    key: "updateRotate",
	    value: function updateRotate() {
	
	      var rotateX = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateY = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateZ = gb.in.u.radian(gb.in.up.frame / 1);
	      // var rotateY = 0;
	      // var rotateZ = 0;
	
	      this.scene.rotation.set(rotateX, rotateY, rotateZ);
	    }
	
	    // オブジェクト
	
	  }, {
	    key: "tweenPos",
	    value: function tweenPos(time, target) {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}();
	
	exports.default = Scene;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Camera
	//
	//--------------------------------------------------
	
	var Camera = function (_Base) {
	  _inherits(Camera, _Base);
	
	  function Camera(scene) {
	    _classCallCheck(this, Camera);
	
	    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));
	
	    _this.camera;
	    _this.name = 'Camera';
	
	    _this.scene = scene;
	
	    _this.fov = 45;
	    _this.aspect = gb.r.w / gb.r.h;
	    _this.near = 1;
	    _this.far = 50000;
	
	    _this.setup();
	    _this.create();
	    // this.createForShader();
	    // this.createOrthographic();
	    // this.setTrackballControll();
	    _this.setEvents();
	    _this.onResize();
	
	    _this.loopStart = true;
	
	    return _this;
	  }
	
	  _createClass(Camera, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'create',
	    value: function create() {
	
	      this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
	      // this.camera.position.z = 600;
	      // this.camera.position.y = 0;
	
	      // ピクセル等倍
	      this.setCameraByPixel();
	
	      this.updateFrustum();
	
	      this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
	      this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
	      this.depth = this.frustum.planes[4].constant + this.frustum.planes[5].constant;
	    }
	  }, {
	    key: 'createForShader',
	    value: function createForShader() {
	
	      this.camera = new THREE.Camera();
	      this.camera.position.z = 1;
	    }
	  }, {
	    key: 'createOrthographic',
	    value: function createOrthographic() {
	
	      var w = gb.renderer.domElement.width;
	      var h = gb.renderer.domElement.height;
	
	      this.camera = new THREE.OrthographicCamera(w / -4, w / 4, h / 4, h / -4, 1, 1000);
	      this.camera.position.z = 1;
	    }
	  }, {
	    key: 'setTrackballControll',
	    value: function setTrackballControll() {
	
	      // controls
	      // gb.in.controls = this.controls = new THREE.TrackballControls(this.camera);
	      // this.controls.zoomSpeed = 0.8;
	      // this.controls.rotateSpeed = 3;
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.updateControll();
	    }
	  }, {
	    key: 'updateFrustum',
	    value: function updateFrustum() {
	
	      this.frustum = new THREE.Frustum();
	      this.cameraViewProjectionMatrix = new THREE.Matrix4();
	
	      this.camera.updateMatrixWorld(); // make sure the camera matrix is updated
	      this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld);
	      this.cameraViewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
	      this.frustum.setFromMatrix(this.cameraViewProjectionMatrix);
	    }
	  }, {
	    key: 'updateControll',
	    value: function updateControll() {
	
	      // this.camera.position.x = Math.sin(this.rad) * 200;
	      // this.camera.position.z = Math.cos(this.rad) * 200;
	
	      // this.rad += Math.PI / 20;
	
	      // this.camera.position.x += ( - gb.in.m.cx * 0.01 * this.val - this.camera.position.x ) * 0.08;
	      // this.camera.position.y += ( - gb.in.m.cy * 0.01 * this.val - this.camera.position.y ) * 0.08;
	      this.camera.lookAt(this.scene.position);
	    }
	  }, {
	    key: 'setCameraByPixel',
	    value: function setCameraByPixel() {
	
	      var fov = this.fov;
	      var vFOV = fov * (Math.PI / 180); // convert to radians
	      var vpHeight = gb.r.h; // viewport height;
	      var z = vpHeight / (2 * Math.tan(vFOV / 2));
	      this.z = z;
	      this.camera.position.set(0, 0, z);
	      this.camera.lookAt(new THREE.Vector3());
	
	      log('z', z);
	
	      // var param = {
	      //   "fov": 45,
	      // };
	
	      // var gui = new dat.GUI();
	
	      // // 最初のset
	      // this.camera.fov = param.fov;
	
	      // gui.add(param, "fov", 0, 90, 0.1).onChange((v)=>{
	      //   this.camera.fov = v;
	      //   this.camera.updateProjectionMatrix();
	      // });
	
	    }
	
	    // オブジェクト
	
	  }, {
	    key: 'tweenPos',
	    value: function tweenPos(time, target) {
	
	      var tX = target.x || 0;
	      var tY = target.y || 0;
	      var tZ = target.z || 0;
	      var delay = target.delay || 0;
	      var e = target.ease || Power2.easeOut;
	
	      var t = time || 1.0;
	
	      TweenMax.to(this.camera.position, t, {
	        x: tX,
	        y: tY,
	        z: tZ,
	        delay: delay,
	        ease: e
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setCameraByPixel();
	
	      // frustum
	      this.updateFrustum();
	
	      this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
	      this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
	      this.depth = this.frustum.planes[4].constant + this.frustum.planes[5].constant;
	
	      log(this.frustum);
	    }
	  }]);
	
	  return Camera;
	}(_Base3.default);
	
	exports.default = Camera;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Light
	//
	//--------------------------------------------------
	
	var Light = function (_Base) {
	  _inherits(Light, _Base);
	
	  function Light(scene) {
	    _classCallCheck(this, Light);
	
	    var _this = _possibleConstructorReturn(this, (Light.__proto__ || Object.getPrototypeOf(Light)).call(this));
	
	    _this.scene = scene;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Light, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.ready();
	
	      this.add();
	      // this.addHelper();
	
	      this.loopStart = true;
	
	      // this.param();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // directional light
	      this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	      this.directionalLight.position.z = gb.camera.z / 5 * 3;
	      this.directionalLight.position.y = 0;
	
	      // ambient
	      this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
	
	      // point
	      this.pointLight01 = new THREE.PointLight(0x00ff00, 30, 500, 10);
	      this.pointLight02 = new THREE.PointLight(0x0000ff, 30, 500, 10);
	      this.pointLight03 = new THREE.PointLight(0xff0000, 30, 500, 10);
	
	      this.pointLight01.position.set(0, 200, 100);
	      this.pointLight02.position.set(100, 200, 100);
	      this.pointLight03.position.set(-100, -200, -100);
	
	      // spot
	      this.spotLight = new THREE.SpotLight(0xfffffff);
	      this.spotLight.position.set(0, 0, gb.camera.z / 5 * 3);
	
	      this.spotLight.intensity = 1.5;
	      this.spotLight.distance = 0.0;
	      this.spotLight.angle = 0.3;
	      this.spotLight.penumbra = 0.5;
	      this.spotLight.decay = 1.0;
	
	      // spot light target
	      var target = new THREE.Object3D();
	      this.scene.add(target);
	      this.spotLight.target = target;
	
	      // shadow
	      // this.spotLight.castShadow = true;
	      // this.spotLight.shadow.mapSize.width = 1024;
	      // this.spotLight.shadow.mapSize.height = 1024;
	      // this.spotLight.shadow.camera.near = 500;
	      // this.spotLight.shadow.camera.far = 4000;
	      // this.spotLight.shadow.camera.fov = 30;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.directionalLight);
	
	      // this.scene.add(this.ambientLight);
	
	      // this.scene.add(this.pointLight01);
	      // this.scene.add(this.pointLight02);
	      // this.scene.add(this.pointLight03);
	      // this.scene.add(this.pointLight01, this.pointLight02, this.pointLight03);
	
	      this.scene.add(this.spotLight);
	    }
	  }, {
	    key: 'addHelper',
	    value: function addHelper() {
	
	      // directional
	      // var dll = new THREE.DirectionalLightHelper(this.directionalLight, 20, '#ff0000');
	      // this.scene.add(dll);
	
	      // point
	      // var sphereSize = 10;
	      // var pll01 = new THREE.PointLightHelper( this.pointLight01, sphereSize );
	      // this.scene.add(pll01);
	      // var pll02 = new THREE.PointLightHelper( this.pointLight02, sphereSize );
	      // this.scene.add(pll02);
	      // var pll03 = new THREE.PointLightHelper( this.pointLight03, sphereSize );
	      // this.scene.add(pll03);
	
	      // spot
	      // this.slh = new THREE.SpotLightHelper(this.spotLight, '#ffffff');
	      // this.scene.add(this.slh);
	
	    }
	  }, {
	    key: 'updateRotate',
	    value: function updateRotate() {
	
	      var rotateX = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateY = gb.in.u.radian(gb.in.up.frame / 1);
	      var rotateZ = gb.in.u.radian(gb.in.up.frame / 1);
	      // var rotateY = 0;
	      // var rotateZ = 0;
	
	      this.scene.rotation.set(rotateX, rotateY, rotateZ);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.slh) this.slh.update();
	    }
	  }, {
	    key: 'param',
	    value: function param() {
	      var _this2 = this;
	
	      this.param_spot = {
	        color: '#ffffff',
	        x: 0.0,
	        y: 0.0,
	        z: 300.0,
	        angle: Math.PI / 3,
	        intensity: 1.0,
	        distance: 0.0,
	        decay: 1.0,
	        penumbra: 0.0
	      };
	
	      var gui = new dat.GUI();
	
	      // init
	      this.spotLight.position.set(this.param_spot.x, this.param_spot.y, this.param_spot.z);
	      this.spotLight.color = new THREE.Color(this.param_spot.color);
	      this.spotLight.angle = this.param_spot.angle;
	      this.spotLight.intensity = this.param_spot.intensity;
	      this.spotLight.distance = this.param_spot.distance;
	      this.spotLight.decay = this.param_spot.decay;
	      this.spotLight.penumbra = this.param_spot.penumbra;
	
	      gui.addColor(this.param_spot, 'color').onChange(function (v) {
	        _this2.spotLight.color.setHex(v);
	      });
	      gui.add(this.param_spot, 'x', -200, 200, 1).onChange(function (v) {
	        _this2.spotLight.position.x = v;
	      });
	      gui.add(this.param_spot, 'y', -200, 200, 1).onChange(function (v) {
	        _this2.spotLight.position.y = v;
	      });
	      gui.add(this.param_spot, 'z', -1000, 1000, 1).onChange(function (v) {
	        _this2.spotLight.position.z = v;
	      });
	      gui.add(this.param_spot, 'angle', 0, Math.PI / 2, 0.01).onChange(function (v) {
	        _this2.spotLight.angle = v;
	      });
	      gui.add(this.param_spot, 'intensity', 0, 10, 0.1).onChange(function (v) {
	        _this2.spotLight.intensity = v;
	      });
	      gui.add(this.param_spot, 'distance', 0, 1000, 1.0).onChange(function (v) {
	        _this2.spotLight.distance = v;
	      });
	      gui.add(this.param_spot, 'decay', 0, 10, 0.1).onChange(function (v) {
	        _this2.spotLight.decay = v;
	      });
	      gui.add(this.param_spot, 'penumbra', 0, 2, 0.01).onChange(function (v) {
	        _this2.spotLight.penumbra = v;
	      });
	    }
	  }]);
	
	  return Light;
	}(_Base3.default);
	
	exports.default = Light;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(38);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Objects
	//
	// ------------------------------------------------------------
	
	// basic objects
	// object
	// import Point from './Basic/Point.es6';
	// import Line from './Basic/Line.es6';
	// import CurvedLine from './Basic/CurvedLine.es6';
	// import Triangle from './Basic/Triangle.es6';
	// import Plane from './Basic/Plane.es6';
	// import Cube from './Basic/Cube/Cube_shaderMaterial.es6';
	// import Cube from './Cube/Cube.es6';
	// import Polygon from './Basic/Polygon.es6';
	// import Circle from './Basic/Circle.es6';
	// import Img from './Basic/Img/Img_shaderMaterial.es6';
	// import Img from './Basics/Img/Img.es6';
	// import Text from './Basic/Text.es6';
	
	// each object shader
	
	
	// custom Imgs
	
	var Objects = function (_Base) {
	  _inherits(Objects, _Base);
	
	  function Objects(scene, camera, renderer) {
	    _classCallCheck(this, Objects);
	
	    var _this = _possibleConstructorReturn(this, (Objects.__proto__ || Object.getPrototypeOf(Objects)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Objects, [{
	    key: 'setup',
	    value: function setup() {
	
	      // ready
	      this.ready();
	
	      // add
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {}
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // basic
	      // this.Point = new Point(this.scene, this.camera);
	      // this.Line = new Line(this.scene, this.camera);
	      // this.CurvedLine = new CurvedLine(this.scene, this.camera);
	      // this.Triangle = new Triangle(this.scene, this.camera);
	      // this.Img = new Img(this.scene, this.camera);
	      this.Img = new _Controller2.default(this.scene, this.camera, './assets/resource/img/_canvas.png');
	      // this.Polygon = new Polygon(this.scene, this.camera);
	      // this.Circle = new Circle(this.scene, this.camera);
	      // this.Img = new Img(this.scene, this.camera);
	      // this.Text = new Text(this.scene, this.camera);
	
	      // custom
	      // this.sLine = new StraightLineAnimation(this.scene, this.camera);
	      // this.cLine = new CurveLineAnimation(this.scene, this.camera);
	      // this.Plane_Full = new Plane_Full(this.scene, this.camera);
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'show',
	    value: function show() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }]);
	
	  return Objects;
	}(_Base3.default);
	
	exports.default = Objects;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _shader = __webpack_require__(39);
	
	var _shader2 = _interopRequireDefault(_shader);
	
	var _shader3 = __webpack_require__(41);
	
	var _shader4 = _interopRequireDefault(_shader3);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Plane
	//
	//--------------------------------------------------
	
	var Plane = function (_Base) {
	  _inherits(Plane, _Base);
	
	  function Plane(scene, camera, src) {
	    _classCallCheck(this, Plane);
	
	    var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.src = src;
	
	    _this.setup();
	    _this.setEvents();
	
	    _this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Plane, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.isREv = true;
	      this.time = 0;
	
	      this.isRun = false;
	      this.isDown = false;
	      this.x = 0;
	      this.sx = 0;
	      this.sumx = 0;
	      this.tarx = 0;
	
	      this.y = 0;
	      this.sy = 0;
	      this.sumy = 0;
	      this.tarx = 0;
	
	      // this.ease = 0.125;
	      this.ease = 0.25;
	
	      this.ready();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      var _this2 = this;
	
	      // this.container = new THREE.Object3D();
	
	      var cnt = 0;
	
	      var t = new THREE.TextureLoader();
	      var onLoad = function onLoad() {
	
	        cnt++;
	        if (cnt < 3) return;
	
	        _this2.texture.wrapS = THREE.RepeatWrapping;
	        _this2.texture.wrapT = THREE.RepeatWrapping;
	
	        // var geo = new THREE.PlaneGeometry(this.texture.image.width / 2, this.texture.image.height / 2, 10, 10);
	        var geo = new THREE.PlaneGeometry(gb.r.w, gb.r.h, 1, 1);
	
	        // var mat = new THREE.MeshBasicMaterial( { map: this.texture, side: THREE.DoubleSide ,transparent: true} );    
	        _this2.uniforms = {
	          time: { type: 'f', value: 1.0 },
	          frame: { type: 'f', value: 0.0 },
	          resolution: { type: 'v2', value: new THREE.Vector2(_this2.texture.image.width, _this2.texture.image.height) },
	          imageResolution: { type: 'v2', value: new THREE.Vector2(_this2.texture.image.width, _this2.texture.image.height) },
	          texture: { type: 't', value: _this2.texture },
	          map: { type: 't', value: _this2.tex2 },
	          mapNext: { type: 't', value: _this2.tex3 },
	          mouse: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
	          opacity: { type: 'f', value: 1.0 },
	
	          disp: { type: 'f', value: 0.0 }
	        };
	        var mat = new THREE.ShaderMaterial({ vertexShader: _shader2.default, fragmentShader: _shader4.default, uniforms: _this2.uniforms, transparent: true, depthTest: true, side: THREE.DoubleSide });
	
	        _this2.mesh = new THREE.Mesh(geo, mat);
	
	        var scale = 1;
	        _this2.mesh.scale.set(scale, scale, 1);
	
	        // add      
	        _this2.add();
	
	        _this2.onResize();
	      };
	      this.texture = t.load(this.src, onLoad);
	      this.tex1 = t.load('./assets/resource/img/tex1.jpeg', onLoad);
	      this.tex2 = t.load('./assets/resource/img/tex2.jpeg', onLoad);
	      this.tex3 = t.load('./assets/resource/img/tex3.jpeg', onLoad);
	
	      this.vec = new THREE.Vector3();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.mesh);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.mesh == undefined) return;
	
	      // frame
	      this.uniforms.frame.value = gb.up.frame;
	
	      // disp
	      // マウスを押した位置から離れている値
	      var disx = gb.m.x - this.sx;
	      var disy = gb.m.y - this.sy;
	      if (this.isDown) {
	        this.tarx = this.sumx + disx * 1.0; // マウスの離れている距離  // 前回値を足す
	        this.tary = this.sumy + disy * 1.0; // マウスの離れている距離  // 前回値を足す
	      } else {
	        this.tarx = 0.0; // マウスの離れている距離  // 前回値を足す
	        this.tary = 0.0; // マウスの離れている距離  // 前回値を足す
	      }
	
	      // 摩擦
	      var friction = 0.3;
	      this.tarx *= friction;
	      this.tary *= friction;
	
	      this.x += (this.tarx - this.x) * this.ease;
	      this.y += (this.tary - this.y) * this.ease;
	
	      var x = m.constrain(this.x, -100, 100);
	      x = m.map(x, -1.0, 1.0, -100, 100);
	
	      this.uniforms.disp.value = x;
	
	      if (x < 0) {
	        this.uniforms.mapNext.value = this.tex1;
	      } else {
	        this.uniforms.mapNext.value = this.tex3;
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // this.ratioW = gb.r.h / gb.r.w;
	      // this.ratio = this.texture.image.height / this.texture.image.width;
	
	      // // size cover
	      // if (this.ratioW > this.ratio) {
	
	      //   var scale = gb.r.h / this.texture.image.height;
	      //   this.mesh.scale.set(scale, scale, 1);
	
	      // } else if ( this.ratioW <= this.ratio) {
	
	      //   var scale = gb.r.w / this.texture.image.width * 1.01;
	      //   this.mesh.scale.set(scale, scale , 1);
	
	      // }
	
	    }
	  }, {
	    key: 'onDown',
	    value: function onDown() {
	
	      this.isDown = true;
	
	      // マウスを押した位置の保存
	      this.sx = gb.m.x;
	      this.sy = gb.m.y;
	
	      $('body').removeClass('grab').addClass('grabbing');
	    }
	  }, {
	    key: 'onUp',
	    value: function onUp() {
	
	      this.isDown = false;
	
	      this.sumx = 0;
	      this.sumy = 0;
	
	      $('body').removeClass('grabbing').addClass('grab');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Plane.prototype.__proto__ || Object.getPrototypeOf(Plane.prototype), 'setEvents', this).call(this);
	
	      // grab
	      $(window).on('mousedown', this.onDown.bind(this));
	      $(window).on('mouseup', this.onUp.bind(this));
	    }
	  }]);
	
	  return Plane;
	}(_Base3.default);
	
	exports.default = Plane;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(40) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nvoid main() {\n\n  vUv = uv;\n\n  vec3 pos = position;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  // gl_Position = vec4(pos, 1.0);\n  \n}"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;\n\n// // func\n// #pragma glslify: map = require(glsl-map)\n// #pragma glslify: random = require(glsl-random)\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n\n// // easing\n// #pragma glslify: ease = require(glsl-easings/back-in-out) \n// #pragma glslify: ease = require(glsl-easings/back-in) \n// #pragma glslify: ease = require(glsl-easings/back-out) \n// #pragma glslify: ease = require(glsl-easings/bounce-in-out) \n// #pragma glslify: ease = require(glsl-easings/bounce-in) \n// #pragma glslify: ease = require(glsl-easings/bounce-out) \n// #pragma glslify: ease = require(glsl-easings/circular-in-out) \n// #pragma glslify: ease = require(glsl-easings/circular-in) \n// #pragma glslify: ease = require(glsl-easings/circular-out) \n// #pragma glslify: ease = require(glsl-easings/cubic-in-out) \n// #pragma glslify: ease = require(glsl-easings/cubic-in) \n// #pragma glslify: ease = require(glsl-easings/cubic-out) \n// #pragma glslify: ease = require(glsl-easings/elastic-in-out) \n// #pragma glslify: ease = require(glsl-easings/elastic-in) \n// #pragma glslify: ease = require(glsl-easings/elastic-out) \n// #pragma glslify: ease = require(glsl-easings/exponential-in-out) \n// #pragma glslify: ease = require(glsl-easings/exponential-in) \n// #pragma glslify: ease = require(glsl-easings/exponential-out) \n// #pragma glslify: ease = require(glsl-easings/linear) \n// #pragma glslify: ease = require(glsl-easings/quadratic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quadratic-in) \n// #pragma glslify: ease = require(glsl-easings/quadratic-out) \n// #pragma glslify: ease = require(glsl-easings/quartic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quartic-in) \n// #pragma glslify: ease = require(glsl-easings/quartic-out) \n// #pragma glslify: ease = require(glsl-easings/quintic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quintic-in) \n// #pragma glslify: ease = require(glsl-easings/quintic-out) \n// #pragma glslify: ease = require(glsl-easings/sine-in-out) \n// #pragma glslify: ease = require(glsl-easings/sine-in) \n// #pragma glslify: ease = require(glsl-easings/sine-out) \n\n// const float interval = 5.0;\n\n// void main() {\n\n//   float now = mod(time, interval);\n//   float val = now / interval; // intervalの時間ごとに、0 〜 1 \n\n//   // このグラフ頭の中でイメージできたいいな。 0から1にすぐなって、1が続き、0.8秒地点から0になって、0.1秒0が続く、それが再度繰り返される\n//   float val = (smoothstep(0.0, 0.1, now / interval) * (1.0 - smoothstep(0.8, 0.9, now / interval)));\n\n// }"

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(42) + "\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n\n// random\nhighp float random_1_0(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\n//\n// GLSL textureless classic 3D noise \"cnoise\",\n// with an RSL-style periodic variant \"pnoise\".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_5_1(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_5_1(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_5_2(vec4 x)\n{\n  return mod289_5_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_5_3(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade_5_4(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise_5_5(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289_5_1(Pi0);\n  Pi1 = mod289_5_1(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute_5_2(permute_5_2(ix) + iy);\n  vec4 ixy0 = permute_5_2(ixy + iz0);\n  vec4 ixy1 = permute_5_2(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt_5_3(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt_5_3(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade_5_4(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_6_6(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_6_6(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_6_7(vec4 x) {\n     return mod289_6_6(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_6_8(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_6_9(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_6_10 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_6_11 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_6_11;\n  vec3 i1 = min( g_6_11.xyz, l.zxy );\n  vec3 i2 = max( g_6_11.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_6_10.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_6_6(i);\n  vec4 p = permute_6_7( permute_6_7( permute_6_7(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_6_10.wyz - D_6_10.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_6_12 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_6_13 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_6_12.xy,h.z);\n  vec3 p3 = vec3(a1_6_12.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_6_8(vec4(dot(p0_6_13,p0_6_13), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_6_13 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_6_13,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nfloat grain_2_14(vec2 texCoord, vec2 resolution, float frame, float multiplier) {\n    vec2 mult = texCoord * resolution;\n    float offset = snoise_6_9(vec3(mult / multiplier, frame));\n    float n1 = pnoise_5_5(vec3(mult, offset), vec3(1.0/texCoord * resolution, 1.0));\n    return n1 / 2.0 + 0.5;\n}\n\nfloat grain_2_14(vec2 texCoord, vec2 resolution, float frame) {\n    return grain_2_14(texCoord, resolution, frame, 2.5);\n}\n\nfloat grain_2_14(vec2 texCoord, vec2 resolution) {\n    return grain_2_14(texCoord, resolution, 0.0);\n}\n\n\nvec3 blendSoftLight_4_15(vec3 base, vec3 blend) {\n    return mix(\n        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), \n        2.0 * base * blend + base * base * (1.0 - 2.0 * blend), \n        step(base, vec3(0.5))\n    );\n}\n\n// Using conditionals\n// vec3 blendSoftLight(vec3 base, vec3 blend) {\n//     return vec3(\n//         ((blend.r < 0.5) ? (2.0 * base.r * blend.r + base.r * base.r * (1.0 - 2.0 * blend.r)) : (sqrt(base.r) * (2.0 * blend.r - 1.0) + 2.0 * base.r * (1.0 - blend.r))),\n//         ((blend.g < 0.5) ? (2.0 * base.g * blend.g + base.g * base.g * (1.0 - 2.0 * blend.g)) : (sqrt(base.g) * (2.0 * blend.g - 1.0) + 2.0 * base.g * (1.0 - blend.g))),\n//         ((blend.b < 0.5) ? (2.0 * base.b * blend.b + base.b * base.b * (1.0 - 2.0 * blend.b)) : (sqrt(base.b) * (2.0 * blend.b - 1.0) + 2.0 * base.b * (1.0 - blend.b)))\n//     );\n// }\n\n\nfloat luma_3_16(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma_3_16(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\n\n\n\nuniform float opacity;\nuniform float disp;\n\nuniform sampler2D map;\nuniform sampler2D mapNext;\n\n#define PI 3.14159265359\n#define TWO_PI 6.28318530718\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvec3 hue(vec3 rgb, float adjustment)\n{\n    const mat3 toYIQ = mat3(0.299,     0.587,     0.114,\n                            0.595716, -0.274453, -0.321263,\n                            0.211456, -0.522591,  0.311135);\n    const mat3 toRGB = mat3(1.0,  0.9563,  0.6210,\n                            1.0, -0.2721, -0.6474,\n                            1.0, -1.107,   1.7046);\n\n    vec3 yiq = toYIQ * rgb;\n    float hue = atan(yiq.z, yiq.y) + adjustment;\n    float chroma = sqrt(yiq.z * yiq.z + yiq.y * yiq.y);\n\n    vec3 color = vec3(yiq.x, chroma * cos(hue), chroma * sin(hue));\n    return toRGB * color;\n}\n\nfloat applyColorBurnToChannel( float base, float blendSoftLight_4_15 ) {\n  return ((blendSoftLight_4_15 == 0.0) ? blendSoftLight_4_15 : max((1.0 - ((1.0 - base) / blendSoftLight_4_15)), 0.0));\n}\n\n// main\nvoid main() {\n\n  // vec2 myUV = vUv;\n\n  // vec2 offset = myUV + mouseOffsetX;\n\n  // vec4 texture1 = texture2D(map, myUV);\n  // vec4 texture2 = texture2D(mapNext, myUV);\n  //\n  // vec2 dispVec = vec2(texture2.r, texture2.g);\n  // vec2 distortedPosition1 = vUv * dispVec * 10.0 * mouseOffsetX;\n\n\n\n  // if(disp < 0.0) {\n  //     dir = 0.5 * max(random, 0.75);\n  // }\n\n  // vec2 offsetUV = vUv;\n  // if(random > 0.0) {\n  //     offsetUV.y = vUv.y;\n  //     offsetUV.x = 1.0 - offsetUV.x;\n  // } else {\n  //     offsetUV.y = 1.0 - offsetUV.y;\n  //     offsetUV.x = vUv.x;\n  // }\n\n  // vec2 scaleCenter = vec2(0.5, 0.5);\n  // offsetUV = (offsetUV - scaleCenter) * max(random, 0.75) + scaleCenter;\n\n  // vec4 test = texture2D(map, offsetUV);\n\n  // // vec\n  // vec4 dispMap = texture2D(dispMap, offsetUV);\n  // dispMap.rgb = hue(dispMap.rgb, random);\n  // vec2 dispVec = vec2(dispMap.r, dispMap.g);\n\n  float burned = 0.8;\n\n  // vec2 distortedPosition1 = vUv + getRotM(angle) * dispVec * (dir) * (disp*2.0);\n  // vec2 distortedPosition2 = vUv + getRotM(angle) * dispVec * (-dir) * (1.0 - (disp*2.0));\n  vec2 distortedPosition1 = vUv;\n  vec2 distortedPosition2 = vUv;\n\n  vec4 _texture1 = texture2D(map, distortedPosition1);\n  vec4 _texture2 = texture2D(mapNext, distortedPosition2);\n\n  float progress = abs(disp);\n\n  _texture1.r = mix(_texture1.r, _texture2.r, progress);//(disp * dispMap.r) * 1.25);\n  _texture1.g = mix(_texture1.g, _texture2.g, progress);//(disp * dispMap.g) * 1.5);\n  _texture1.b = mix(_texture1.b, _texture2.b, progress);//(disp * dispMap.b) * 1.75);\n\n  gl_FragColor = vec4(\n      applyColorBurnToChannel( _texture1.r, burned ),\n      applyColorBurnToChannel( _texture1.g, burned ),\n      applyColorBurnToChannel( _texture1.b, burned ),\n      // _texture1.r,\n      // _texture1.g,\n      // _texture1.b,\n      1.0\n    );\n  // gl_FragColor = texture2D(texture, vUv);\n\n}"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\nuniform sampler2D texture;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.random = random;
	exports.randomInt = randomInt;
	exports.random2 = random2;
	exports.hit = hit;
	exports.range = range;
	exports.map = map;
	exports.demical = demical;
	exports.float = float;
	exports.clamp = clamp;
	exports.rate = rate;
	exports.lerp = lerp;
	exports.degree = degree;
	exports.radian = radian;
	exports.dist = dist;
	exports.ascend = ascend;
	exports.descend = descend;
	exports.constrain = constrain;
	/**
	 * Generate a random float
	 *
	 * @param  {number} minValue  Minimum boundary
	 * @param  {number} maxValue  Maximum boundary
	 * @param  {number} precision Precision
	 * @return {number}           Generated float
	 */
	function random(minValue, maxValue) {
	  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
	
	
	  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
	}
	
	// ランダムな整数を取得
	// -----------------------------------
	// @min : 最小値(int)
	// @max : 最大値(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function randomInt(min, max) {
	
	  return Math.floor(Math.random() * (max + 1 - min) + min);
	}
	
	// ランダムな整数を2つの範囲から取得
	// -----------------------------------
	// @min1 : 最小値1(int)
	// @max1 : 最大値1(int)
	// @min2 : 最小値2(int)
	// @max2 : 最大値2(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function random2(min1, max1, min2, max2) {
	
	  if (this.hit(2)) {
	    return this.randomInt(min1, max1);
	  } else {
	    return this.randomInt(min2, max2);
	  }
	}
	
	// 1/@rangeの確率でtrueを取得
	// -----------------------------------
	// @range : 母数(int)
	// return : true or false(boolean)
	// -----------------------------------
	function hit(range) {
	
	  return this.randomInt(0, range - 1) === 0;
	}
	
	// 0から範囲内でランダムな整数を取得
	// -----------------------------------
	// @val : 範囲(int)
	// return : ランダムな整数(int)
	// -----------------------------------
	function range(val) {
	
	  return this.randomInt(-val, val);
	}
	
	// 値をマッピング
	// -----------------------------------
	// @num : マッピングする値(Number)
	// @resMin : 結果となる値の最小値(Number)
	// @resMax : 結果となる値の最大値(Number)
	// @baseMin : 元となる値の最小値(Number)
	// @baseMax : 元となる値の最大値(Number)
	// return : マッピングされた値(Number)
	// -----------------------------------
	function map(num, resMin, resMax, baseMin, baseMax) {
	
	  var p;
	  if (num < baseMin) {
	    return resMin;
	  }
	  if (num > baseMax) {
	    return resMax;
	  }
	  p = (resMax - resMin) / (baseMax - baseMin);
	
	  return (num - baseMin) * p + resMin;
	}
	
	function demical(v) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	  // 計算 ( Math.pow( 10, 4 ) = 10000 )
	  var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);
	
	  return val;
	}
	
	function float(v) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	  return v.toFixed(n);
	}
	
	// 数値に小数点第@n位までをつけた文字列を返す
	// -----------------------------------
	// @num : 値(Number)
	// @n : 小数点の位(int)
	// return : 変換された値(String)
	// -----------------------------------
	// decimal(num, n) {
	//   var i, pos;
	//   num = String(num);
	//   pos = num.indexOf(".");
	//   if (n === 0) {
	//     return num.split(".")[0];
	//   }
	//   if (pos === -1) {
	//     num += ".";
	//     i = 0;
	//     while (i < n) {
	//       num += "0";
	//       i++;
	//     }
	//     return num;
	//   }
	//   num = num.substr(0, pos) + num.substr(pos, n + 1);
	//   return num;
	// }
	
	function clamp(val, min, max, minVal, maxVal) {
	
	  if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;
	
	  return val;
	}
	
	function rate(val, base) {
	
	  var v = val / base;
	
	  return v;
	}
	
	function lerp(val01, val02, val) {
	
	  val = val < 0 ? 0 : val;
	  val = val > 1 ? 1 : val;
	  return val01 + (val02 - val01) * val;
	}
	
	function degree(radians) {
	
	  return radians * 180 / Math.PI; //1ラジアンが何度か
	}
	
	// to radians
	function radian(angle) {
	
	  return angle * Math.PI / 180; //1度何ラジアンか
	}
	
	function dist(p1, p2) {
	
	  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	}
	
	function ascend(arr) {
	
	  arr.sort(function (a, b) {
	    if (a > b) return -1;
	    if (a < b) return 1;
	    return 0;
	  });
	  // var a = [5,3,9,1,10]
	  // 結果:10,9,5,3,1
	
	  return arr;
	}
	
	function descend(arr) {
	
	  arr.sort(function (a, b) {
	    if (a < b) return -1;
	    if (a > b) return 1;
	    return 0;
	  });
	
	  // var a = [5,3,9,1,10]
	  // 結果:1,3,5,9,10
	
	  return arr;
	}
	
	// map(value, min01, max01, min02, max02) {
	
	//   var dis01 = max01 - min01;
	//   var dis02 = max02 - min02
	
	//   var rate = dis02 / dis01;
	
	//   value = value * rate;
	
	//   return value;
	// }
	
	function constrain(value, min, max) {
	
	  return Math.min(max, Math.max(value, min));
	
	  // if (value <= low) value = low;
	  // if (value >= high) value = high;     
	  // return value;
	}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Effect
	//
	//--------------------------------------------------
	
	var Effect = function (_Base) {
	  _inherits(Effect, _Base);
	
	  function Effect() {
	    var isEffect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var isGUI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var renderer = arguments[2];
	    var scene = arguments[3];
	    var camera = arguments[4];
	
	    _classCallCheck(this, Effect);
	
	    var _this = _possibleConstructorReturn(this, (Effect.__proto__ || Object.getPrototypeOf(Effect)).call(this));
	
	    _this.renderer = renderer;
	    _this.scene = scene;
	    _this.camera = camera;
	
	    _this.isEffect = isEffect;
	    _this.isGUI = isGUI;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Effect, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isControl = true;
	
	      if (this.isEffect) this.EffectCompose();
	    }
	  }, {
	    key: 'EffectCompose',
	    value: function EffectCompose() {
	
	      // effect composer
	      this.composer = new THREE.EffectComposer(this.renderer);
	      // add render pass
	      this.renderPass = new THREE.RenderPass(this.scene, this.camera);
	      this.composer.addPass(this.renderPass);
	      this.copyPass = new THREE.ShaderPass(THREE.CopyShader); // last pass
	
	      // ------------------------------------------------------------
	      //  ��Pass
	      // ------------------------------------------------------------
	      this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);
	
	      // ------------------------------------------------------------
	      //  ��Pass param
	      // ------------------------------------------------------------
	      // ���ڂ��O��
	      this.p = {
	
	        // RGBShift
	        RGBShiftPass_show: true,
	        RGBShiftPass_angle: 0.0,
	        RGBShiftPass_amount: 0.013,
	        RGBShiftPass_brightness: 3.0
	
	      };
	      this.onParamsChange();
	      this.onTogglePass();
	
	      if (this.isGUI) this.GUISetting();
	    }
	  }, {
	    key: 'onParamsChange',
	    value: function onParamsChange() {
	
	      this.RGBShiftPass.uniforms.angle.value = this.p.RGBShiftPass_angle;
	      this.RGBShiftPass.uniforms.amount.value = this.p.RGBShiftPass_amount;
	      this.RGBShiftPass.uniforms.brightness.value = this.p.RGBShiftPass_brightness;
	    }
	  }, {
	    key: 'onTogglePass',
	    value: function onTogglePass() {
	      //Add Shader Passes to Composer
	      //order is important 
	      this.composer = new THREE.EffectComposer(this.renderer);
	      this.composer.setSize(gb.r.w * window.devicePixelRatio, gb.r.h * window.devicePixelRatio);
	      this.composer.addPass(this.renderPass);
	
	      // ------------ add pass start ------------ 
	      if (this.p.RGBShiftPass_show) this.composer.addPass(this.RGBShiftPass);
	
	      // ------------ add pass end ------------ 
	      this.composer.addPass(this.copyPass);
	      this.copyPass.renderToScreen = true;
	    }
	  }, {
	    key: 'GUISetting',
	    value: function GUISetting() {
	
	      var gui = new dat.GUI();
	      // ------------------------------------------------------------
	      //  ��Pass param setting
	      // ------------------------------------------------------------
	      var f2 = gui.addFolder('RGBShift');
	      f2.add(this.p, 'RGBShiftPass_show').onChange(this.onTogglePass.bind(this));
	      f2.add(this.p, 'RGBShiftPass_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
	      f2.add(this.p, 'RGBShiftPass_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Effect;
	}(_Base3.default);
	
	exports.default = Effect;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	var Scene = function (_Base) {
	  _inherits(Scene, _Base);
	
	  function Scene() {
	    var isControl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var renderer = arguments[1];
	    var camera = arguments[2];
	
	    _classCallCheck(this, Scene);
	
	    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
	
	    _this.renderer = renderer;
	    _this.camera = camera;
	    _this.isControl = isControl;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Scene, [{
	    key: 'setup',
	    value: function setup() {
	
	      if (this.isControl) {
	        this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
	        this.setting();
	      }
	    }
	  }, {
	    key: 'setting',
	    value: function setting() {
	
	      this.controls.rotateSpeed = 3.0; //��ܞ������Ȥ����٤�
	      this.controls.zoomSpeed = 1.2; //���`�ह��Ȥ����٤�
	      this.controls.panSpeed = 0.3; //�ѥ󤹤�Ȥ����٤�
	
	      this.controls.staticMoving = false;
	      this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
	
	      this.controls.noRotate = false; //true�ǻ�ܞ�����򲻿ɤˤ���
	      this.controls.noZoom = false; //true�ǥ��`������򲻿ɤˤ���
	      this.controls.noPan = true; //true�ǥѥ�β����򲻿ɤˤ���
	
	      this.controls.minDistance = 0; //���Ť�����x����С��
	      this.controls.maxDistance = Infinity; //�h���������x�����
	      // this.controls.maxDistance = 100; //�h���������x�����
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}(_Base3.default);
	
	exports.default = Scene;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map