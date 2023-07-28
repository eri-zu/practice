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
	    'key': 'pos',
	    'def': 'watch',
	    'value': ['watch', 'text']
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
	
	var _SceneMgr = __webpack_require__(33);
	
	var _SceneMgr2 = _interopRequireDefault(_SceneMgr);
	
	var _Scene = __webpack_require__(34);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Scene3 = __webpack_require__(49);
	
	var _Scene4 = _interopRequireDefault(_Scene3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	var Content = function (_Base) {
	  _inherits(Content, _Base);
	
	  function Content() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('body');
	    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cv';
	
	    _classCallCheck(this, Content);
	
	    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));
	
	    _this.$wrap = $wrap;
	    _this.id = id;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Content, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.isREv = true;
	
	      // canvas size
	      this.w = gb.r.w;
	      this.h = gb.r.h;
	
	      this.isRetina = true;
	
	      // renderer
	      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	      if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(gb.r.w, gb.r.h);
	      this.renderer.setClearColor(0xE8E6DD, 1.0);
	      // this.renderer.setClearColor(0xffffff, 1.0);
	
	      // append
	      this.$wrap.prepend(this.renderer.domElement);
	      // set style
	      $(this.renderer.domElement).css({ position: 'absolute', top: 0, left: 0, 'z-index': 1, opacity: 1 }).attr('id', this.id);
	
	      // obj
	      this.add();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.sm = new _SceneMgr2.default();
	
	      var scene01 = new _Scene2.default(this.renderer);
	      var scene02 = new _Scene4.default(this.renderer);
	
	      this.sm.add(scene01);
	      this.sm.add(scene02);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.sm.update();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      this.sm.draw();
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
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  SceneMgr
	//
	//--------------------------------------------------
	
	var SceneMgr = function () {
	  function SceneMgr() {
	    _classCallCheck(this, SceneMgr);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SceneMgr, [{
	    key: "setup",
	    value: function setup() {
	
	      this.NUM = 0;
	      // シーンを格納する配列
	      this.scenes = [];
	    }
	  }, {
	    key: "add",
	    value: function add(scene) {
	
	      this.scenes.push(scene);
	    }
	  }, {
	    key: "update",
	    value: function update() {
	
	      this.scenes[this.NUM].update();
	    }
	  }, {
	    key: "draw",
	    value: function draw() {
	
	      this.scenes[this.NUM].draw();
	    }
	  }, {
	    key: "checkNum",
	    value: function checkNum() {
	
	      if (this.NUM < 0) this.NUM = this.scenes.length - 1;
	      if (this.NUM >= this.scenes.length) this.NUM = 0;
	
	      log(this.NUM);
	    }
	  }, {
	    key: "onKeyDown",
	    value: function onKeyDown(e) {
	
	      if (e.key == "ArrowRight") {
	        this.NUM++;
	        this.checkNum();
	      }
	      if (e.key == "ArrowLeft") {
	        this.NUM--;
	        this.checkNum();
	      }
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	
	      $(window).on('keydown', this.onKeyDown.bind(this));
	    }
	  }]);
	
	  return SceneMgr;
	}();
	
	exports.default = SceneMgr;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene2 = __webpack_require__(35);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Camera2 = __webpack_require__(36);
	
	var _Camera3 = _interopRequireDefault(_Camera2);
	
	var _Light2 = __webpack_require__(37);
	
	var _Light3 = _interopRequireDefault(_Light2);
	
	var _Objects = __webpack_require__(38);
	
	var _Objects2 = _interopRequireDefault(_Objects);
	
	var _Effect = __webpack_require__(47);
	
	var _Effect2 = _interopRequireDefault(_Effect);
	
	var _Control = __webpack_require__(48);
	
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
	      this.isControl = true;
	
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
/* 35 */
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
	
	      // log('z', z);
	
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
	
	      // log(this.frustum)
	
	    }
	  }]);
	
	  return Camera;
	}(_Base3.default);
	
	exports.default = Camera;

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(39);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(41);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
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
	// import Point from './Basics/Point.es6';
	
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
	// import Cube from './Cube/Cube_Shader/Controller.es6';
	
	// objectgroup shader
	
	
	// custom objects
	
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
	
	      this.loopStart = true;
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {}
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // basic
	      // this.Point = new Point(this.scene, this.camera);
	      this.SVG = new _Controller2.default(this.scene, this.camera, this.renderer);
	      // this.Line = new Line(this.scene, this.camera);
	      // this.CurvedLine = new CurvedLine(this.scene, this.camera);
	      // this.Triangle = new Triangle(this.scene, this.camera);
	      // this.Plane = new Plane(this.scene, this.camera);
	      // this.Cube = new Cube(this.scene, this.camera, this.renderer);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(40);
	
	var a = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Fragment
	//
	//--------------------------------------------------
	
	var Fragment = function (_Base) {
	  _inherits(Fragment, _Base);
	
	  function Fragment(scene, camera, renderer) {
	    _classCallCheck(this, Fragment);
	
	    var _this = _possibleConstructorReturn(this, (Fragment.__proto__ || Object.getPrototypeOf(Fragment)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Fragment, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      this.ready();
	
	      this.add();
	
	      this.timeline();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.wrap = new THREE.Group();
	      this.group = new THREE.Group();
	      this.meshList = [];
	      this.pList = [];
	
	      this.d3g = {};
	      this.d3threeD(this.d3g);
	
	      var obj = this.initSVGObject();
	      this.addGeoObject(this.group, obj);
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.wrap.add(this.group);
	
	      this.scene.add(this.wrap);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.wrap.rotation.set(gb.up.frame / 800, gb.up.frame / 800, gb.up.frame / 800);
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	
	      var arr = a.randomArr(this.meshList.length);
	
	      for (var i = 0; i < this.meshList.length; i++) {
	        var m = this.meshList[i];
	
	        var tl = new TimelineMax({ yoyo: true, repeat: -1, delay: arr[i] * 0.02, repeatDelay: 3.0 });
	
	        tl.to(m.position, 1.0, {
	          z: 0,
	          ease: Expo.easeInOut,
	          onComplete: function onComplete() {}
	        });
	      }
	    }
	  }, {
	    key: 'addGeoObject',
	    value: function addGeoObject(group, svgObject) {
	
	      var paths = svgObject.paths;
	      var depths = svgObject.depths;
	      var colors = svgObject.colors;
	      var center = svgObject.center;
	
	      // log(svgObject)
	
	      for (var i = 0; i < paths.length; i++) {
	
	        // var path = this.d3g.transformSVGPath( paths[ i ] );
	        var path = paths[i];
	        var color = new THREE.Color(colors[i % colors.length]);
	        var material = new THREE.MeshBasicMaterial({
	          // var material = new THREE.PointsMaterial( {
	          color: color,
	          emissive: color,
	          wireframe: true,
	          size: 3
	        });
	        var depth = depths[i];
	        var simpleShapes = path.toShapes(true);
	
	        // log(simpleShapes);
	
	        for (var j = 0; j < simpleShapes.length; j++) {
	
	          var simpleShape = simpleShapes[j];
	          var shape3d = new THREE.ExtrudeBufferGeometry(simpleShape, {
	            depth: 0,
	            bevelEnabled: false,
	            bevelThickness: 1,
	            bevelSize: 1,
	            bevelSegments: 1
	          });
	
	          var mesh = new THREE.Mesh(shape3d, material);
	          // var mesh = new THREE.Line( shape3d, material );
	          // var mesh = new THREE.Points( shape3d, material );
	          mesh.rotation.x = Math.PI;
	          mesh.position.z = (Math.random() - 0.5) * 1000;
	          // mesh.translateZ(-amount - 1);
	          // mesh.translateX(-center.x);
	          // mesh.translateY(-center.y);
	          // mesh.geometry.center();
	
	          var scale = 3;
	          mesh.scale.set(scale, scale, scale);
	
	          group.add(mesh);
	          this.meshList.push(mesh);
	
	          log(mesh);
	        }
	      }
	
	      var b = new THREE.Box3();
	      b.setFromObject(this.group).getCenter(this.group.position).multiplyScalar(-1);
	    }
	  }, {
	    key: 'initSVGObject',
	    value: function initSVGObject() {
	
	      var obj = {};
	
	      // obj.paths = ["M38.64,0.53L0.64 143.53 109.64 150.53 109.64 6.53 38.64 0.53z",];
	      var loader = new THREE.SVGLoader();
	      // 竹
	      // obj.paths = loader.parse( '<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">    <path d="M193.3 132.1c-4.7-6.4 8.7-5 13.2-2.8s9 5.1 13.2 8.6c3.6 3 4.5 6.5 2.7 10.6-2.7 7-4 16-3.7 26.6 1.2 34.1 2.2 53.7 3 59-.8 15.9-5.2 27.2-13.3 34-3.6 3-6.9 2.6-9.7-1.3a192.8 192.8 0 0 0-27.8-37.5c-2-2.2-3-4-3-5.3-.2-1.5 1-1.8 3.8-1l21.6 8.3c2.5.7 4.4.5 5.6-.6 2-1.5 3.1-4 3.3-7.5 1-13.9 1-34.3-.3-61.1-.3-19.5-4-23.6-8.6-30z" stroke="#000" fill-opacity=".3"/>    <path d="M199.9 130.7c-1.1 0-12.7 2.4-12.8 2.5-6.5 1-8.4-.4-14.4-2.2-5.9-1.9-4-5.6 5-8.3 9-2.8 18.3-5.1 28-7 8.8-2.2 18.7-5.5 29.7-10 9-4.4 17.6-4.3 26 .3 5 3.5 7.5 6.5 7.5 8.9-.2 1.5-1.7 2.5-4.6 3a710 710 0 0 0-64.4 12.8z" stroke="#000" fill-opacity=".3" stroke-width="2"/>    <path d="M175.2 126.8c7.2-13 17-32.3 24.5-49.7A89 89 0 0 1 210.5 55a7.9 7.9 0 0 0 .3-7.2c-1.2-2.4-5-5.5-11-9.2a24.2 24.2 0 0 0-13.8-3.3c-3.4.7-4 3.2-2 7.5 3.5 5.5 4.5 11 3 16.4-4.3 18-10.4 35.6-18.3 53-7.6 16.7-17 34.3-28 53a15.2 15.2 0 0 0-2.8 5.6c-.2 2.2 1 2.9 3.5 2 6.5-2.5 19.4-20.5 33.8-45.9z" stroke="#000" fill-opacity=".3" stroke-width="3"/>    <path d="M104.4 139.9c-2.5-1.7-11.8-2.5-8.9 2.5 4.1 23.6-.5 47.5-4 70.8-2.9 9 0 19.3 8.9 30.6l1.9 1.6c2.1.2 3.7-1 4.6-3.3 1.8-5 2.8-13.2 3.2-24.5.5-35.5 1.6-57.4 3.2-65.8.8-2.4.5-4.1-.8-5.3-2.8-2.7-5.5-5-8-6.6z" stroke="#000" fill-opacity=".3" stroke-width="4"/>    <path d="M78.8 132.4c-9 2.4-10.5 4.7-5.1 7.5s12.6 3.6 26.3 1.2c33.2-9.2 48-13.4 48.7-14 1.6-1.7 2-3.2 1.1-4.7-1.3-2.2-4.7-4-10.3-5-4.8-.6-16 2.3-33.4 8.6-9.2 1.8-18.3 4-27.3 6.4z" stroke="#000" fill-opacity=".3" stroke-width="5"/>    <path d="M76.2 136.1c8.3-13 19.6-32 28.8-49.8 4.5-10.6 9-18.5 13.7-23.6 1.7-2.4 2-5 .9-7.5-1.1-2.4-4.6-5.9-10.6-10.3-5.6-3.3-10.2-4.8-14-4.5-3.4.8-4.2 3.3-2.4 7.5a22 22 0 0 1 1.6 18.4c-10 31.6-30.2 69.4-60.8 113.3-1.8 2.2-2.9 4-3.2 5.3-.6 2.4.5 3.1 3.2 2.2 7.2-1.7 23.2-21.2 42.8-51z" stroke="#000" fill-opacity=".3" stroke-width="6"/></svg>');
	
	      if (gb.urlp.pos == 'text') {
	        // text
	        obj.paths = loader.parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.622 77.915"><g id="グループ_2" data-name="グループ 2" transform="translate(-202.5 -238.5)"><g id="グループ化_213" data-name="グループ化 213" transform="translate(200.384 231.457)"><path id="text01" data-name="パス 659" class="cls-1" d="M24.934,15.778H24.35a9.452,9.452,0,0,0-2.476-4.725,8.527,8.527,0,0,0-6.255-2.61c-3.645,0-6.3,1.89-7.2,5.13-.495,1.71-.721,5.04-.721,9.854C7.7,30,7.97,32.247,8.869,34a7.327,7.327,0,0,0,6.525,3.555,8.337,8.337,0,0,0,6.66-3.375,16.3,16.3,0,0,0,2.3-4.5h.584v8.325H24.35l-1.485-2.25c-2.925,1.98-4.95,2.7-7.515,2.7-7.02,0-12.734-6.8-12.734-15.209a16.57,16.57,0,0,1,3.51-10.8,12.048,12.048,0,0,1,9.539-4.905c2.655,0,4.59.72,7.2,2.7l1.485-2.25h.584Z"/><path id="text02" data-name="パス 660" class="cls-1" d="M42.439,37.2h2.97v.81h-9.45V37.2h3.016V21.4H35.959v-.81h6.48Zm.36-26.189a2.44,2.44,0,0,1-2.43,2.385,2.408,2.408,0,1,1,2.43-2.385Z"/><path id="text03" data-name="パス 661" class="cls-1" d="M61.563,23.158c1.845-2.16,3.465-3.015,5.851-3.015a5.992,5.992,0,0,1,4.544,1.8,5.706,5.706,0,0,1,1.216,4.14V37.2h2.969v.81H66.694V37.2H69.71V24.867c0-2.52-.945-3.689-2.971-3.689a5.094,5.094,0,0,0-4.41,2.745C61.79,25,61.564,26.758,61.564,30v7.2h2.97v.81H55.085V37.2H58.1V21.4H55.085v-.81h6.479v2.565Z"/><path id="text04" data-name="パス 662" class="cls-1" d="M91.443,34.183c0,2.07.63,2.925,2.25,2.925,1.439,0,2.205-.72,2.564-2.43h.9c-.5,2.565-1.98,3.78-4.635,3.78a4.55,4.55,0,0,1-3.689-1.53c-.676-.855-.855-1.665-.855-3.735V21.4H85.053v-.675c2.295-.855,5.085-4.275,5.94-7.29h.449v7.155h4.77v.81h-4.77v12.78Z"/><path id="text05" data-name="パス 663" class="cls-1" d="M113,25.093a14.617,14.617,0,0,1,1.351-2.97,4.092,4.092,0,0,1,3.465-1.98,2.329,2.329,0,0,1,2.52,2.385c0,1.35-.721,2.25-1.755,2.25s-1.53-.72-1.575-2.25c-.045-.5-.225-.72-.63-.72-.9,0-1.755,1.08-2.476,3.1-.764,2.07-.9,3.375-.9,7.064V37.2h2.97v.81h-9.449V37.2h3.015V21.4h-3.015v-.81H113v4.5Z"/><path id="text06" data-name="パス 664" class="cls-1" d="M133.607,31.212c0,2.655.225,3.78,1.035,4.77a4.395,4.395,0,0,0,3.6,1.575,6.209,6.209,0,0,0,6.255-5.4h.9c-.674,3.87-3.419,6.3-7.109,6.3a9.092,9.092,0,0,1-8.774-9.09,9.9,9.9,0,0,1,2.115-5.985,7.682,7.682,0,0,1,13.949,4.364h-11.97v3.465ZM141.482,25c0-2.79-1.125-3.96-3.779-3.96-2.791,0-4.1,1.4-4.1,4.365v1.53h7.875Zm2.25-14.58c.359,0,.54.09.54.315a.707.707,0,0,1-.36.495L136.8,17.038c-.135.09-.18.135-.27.135a.2.2,0,0,1-.136-.135.341.341,0,0,1,.09-.18l4.319-6.435Z"/><path id="text07" data-name="パス 665" class="cls-1" d="M160.247,31.212c0,2.655.226,3.78,1.035,4.77a4.393,4.393,0,0,0,3.6,1.575,6.208,6.208,0,0,0,6.254-5.4h.9c-.676,3.87-3.42,6.3-7.109,6.3a9.092,9.092,0,0,1-8.775-9.09,9.909,9.909,0,0,1,2.115-5.985,7.682,7.682,0,0,1,13.949,4.364h-11.97v3.465ZM168.122,25c0-2.79-1.125-3.96-3.78-3.96-2.789,0-4.1,1.4-4.1,4.365v1.53h7.875Z"/><path id="text08" data-name="パス 666" class="cls-1" d="M24.934,61.778H24.35a9.452,9.452,0,0,0-2.476-4.725,8.527,8.527,0,0,0-6.255-2.61c-3.645,0-6.3,1.89-7.2,5.13-.495,1.71-.721,5.04-.721,9.854C7.7,76,7.97,78.247,8.869,80a7.327,7.327,0,0,0,6.525,3.555,8.337,8.337,0,0,0,6.66-3.375,16.3,16.3,0,0,0,2.3-4.5h.584v8.325H24.35l-1.485-2.25c-2.925,1.98-4.95,2.7-7.515,2.7-7.02,0-12.734-6.795-12.734-15.209a16.57,16.57,0,0,1,3.51-10.8,12.048,12.048,0,0,1,9.539-4.9c2.655,0,4.59.72,7.2,2.7l1.485-2.25h.584Z"/><path id="text09" data-name="パス 667" class="cls-1" d="M53.464,83.2h2.97v.81H50v-2.7a6.333,6.333,0,0,1-5.94,3.15,6.2,6.2,0,0,1-4.994-1.935c-.721-.945-.945-2.115-.945-4.41V67.4H35.105v-.81h6.479V78.741c0,3.555.721,4.68,3.1,4.68a4.894,4.894,0,0,0,4.455-2.52A15.761,15.761,0,0,0,50,75.006V67.4H46.983v-.81h6.479V83.2Z"/><path id="text10" data-name="パス 668" class="cls-1" d="M72.633,71.093a14.729,14.729,0,0,1,1.351-2.97,4.092,4.092,0,0,1,3.465-1.98,2.33,2.33,0,0,1,2.521,2.385c0,1.35-.721,2.25-1.756,2.25s-1.529-.72-1.574-2.25c-.045-.5-.226-.72-.631-.72-.9,0-1.754,1.08-2.475,3.105-.765,2.07-.9,3.375-.9,7.064V83.2h2.971v.81H66.156V83.2H69.17V67.4H66.156v-.81h6.479v4.5Z"/><path id="text11" data-name="パス 669" class="cls-1" d="M91.4,67.4H89.1v-.81h9.81v.81H95.358l5.04,12.78,5.129-12.78h-3.555v-.81h6.615v.81h-2.025L99.767,84.458H98.372Z"/><path id="text12" data-name="パス 670" class="cls-1" d="M120.783,77.212c0,2.655.225,3.78,1.035,4.77a4.395,4.395,0,0,0,3.6,1.575,6.209,6.209,0,0,0,6.255-5.4h.9c-.674,3.87-3.419,6.3-7.109,6.3a9.092,9.092,0,0,1-8.774-9.09,9.9,9.9,0,0,1,2.115-5.985,7.682,7.682,0,0,1,13.949,4.364h-11.97v3.465ZM128.658,71c0-2.79-1.125-3.96-3.779-3.96-2.791,0-4.1,1.395-4.1,4.365v1.53h7.875Z"/><path id="text13" data-name="パス 671" class="cls-1" d="M158.538,83.2h1.89v.81h-8.414V83.2h2.25l-4.5-6.524L144.769,83.2h3.42v.81H141.08V83.2h2.249l5.806-7.379L143.329,67.4H141.08v-.81h9.359v.81h-2.88l3.734,5.4,4.32-5.4h-2.97v-.81h6.614v.81h-2.385l-4.9,6.255Z"/></g></g></svg>');
	      } else {
	        // watch
	        obj.paths = loader.parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.348 181.4"><g id="グループ化_211" data-name="グループ化 211" transform="translate(-73.19 -309.545) rotate(8)"><path id="watch1" data-name="パス 567" class="cls-1" d="M9.659,43.559c-.018,14.948,5.528,34.625,9.583,48.248s8.552,23.469,13.042,36.129c13.327,7.519,21.177,14.638,36.848,19.507,16.217,5.038,28.589,7.879,49.491,7.7,17.587-.149,44.108-7.24,62.231-15.242-3.347-13.846-6.668-20.337-10.007-36.221a399.74,399.74,0,0,1-6.9-55.583c-14.883-10.02-34.7-15.093-53.4-19.49S56.508,27.344,39.776,31.7,21.657,36.071,9.659,43.559Z" transform="translate(134.8 285.095)"/><path id="watch2" data-name="パス 568" class="cls-1" d="M21.717,91.55c3.856,13.789,7.155,23.184,11.769,35.737C49.142,136.305,62.593,143.045,80.7,148.3s45.958,3.825,62.821.941,20.968-6.228,34.872-11.232a218.848,218.848,0,0,1-11.065-40.807c-2.716-14.843-4.068-32.114-5.011-47.648C145.652,36.426,98.655,28.16,80.08,29.152S40.74,34.568,28.159,37.685s-7.967,3.183-17.066,6.828C14.508,59.32,17.86,77.762,21.717,91.55Z" transform="translate(134.688 285.095)"/><path id="watch3" data-name="パス 569" class="cls-1" d="M177.7,136.3c-28.519,12.586-60.126,14.437-89.442,8.65C67.421,140.837,55.5,134.793,37.9,125.367c-4.844-12.173-8.192-20.894-11.951-34.661a456.864,456.864,0,0,1-9.872-48.02" transform="translate(134.3 285.095)"/><path id="watch4" data-name="パス 570" class="cls-1" d="M126.317,33.63a328.906,328.906,0,0,1,46.933,13.077c8.859,3.293,20.025-.65,27.122,1.318,8.672,2.4,21.343-2.437,2.653-13.723S133.722,4.7,109.4,9.67" transform="translate(127.031 285.095)"/><path id="watch5" data-name="パス 571" class="cls-1" d="M.486,43.333c1.856-8.3,8.369-11.758,17.491-16.889,8.777-4.937,30.95-12.96,42.9-14.829" transform="translate(135.514 285.095)"/><path id="watch6" data-name="パス 572" class="cls-1" d="M135.355,153.9c25.7-2.252,51.464-10.643,75.6-20.193,2.051-.422,4.95-.97,6.453-1.326-23.906,16.006-60.009,26.923-85.989,27.725s-39.938-2.1-62.272-9.453c-16.082-5.3-29.518-15.123-43.725-24.668-2.175-1.461-3.826-4.284-5.186-6.272-.737-1.077,3.039,3.531,2.909,1.776-.789-10.683-7.784-24.705-11.241-35.465S5.144,52.117,4.071,44.491s-2.7-.547-2.4-4.171,7.183,2.812,7.576,2.961" transform="translate(135.425 285.095)"/><path id="watch7" data-name="パス 573" class="cls-1" d="M198.044,49.779c2.251,15.865,7.986,45.516,11.069,58.7s2.287,18.474,9.311,24.186,14.377-2.694,21.46-1.5" transform="translate(120.126 285.095)"/><path id="watch8" data-name="パス 574" class="cls-1" d="M214.126,49.077" transform="translate(118.873 285.095)"/><path id="watch9" data-name="パス 575" class="cls-1" d="M219.011,35.922c3.084,16-17.713,12.385-27.635,15-.123,25.266,7.854,62.743,16.607,86.049a47.575,47.575,0,0,0,16.536-2.881" transform="translate(120.645 285.095)"/><g id="グループ化_208" data-name="グループ化 208" transform="translate(197.474 296.092)"><path id="watch10" data-name="パス 576" class="cls-1" d="M106.293,11l-2.184.264.491,2.319-2.069-.853-.217,2.383-1.842-1.331-.56,2.321-1.688-1.555L97.47,16.8l-1.585-1.68-.87,2.209L93.5,15.576l-.946,2.174-1.468-1.8-.98,2.155L88.65,16.293l-.938,2.168-1.57-1.725-.9,2.226-1.6-1.7-.914,2.218-1.567-1.736-.977,2.187-1.506-1.8L77.61,20.265,76.2,18.374l-1.212,2.047L73.746,18.4l-1.425,1.881-.947-2.2-1.746,1.524L69.3,17.22l-2.147.653" transform="translate(-67.153 -10.997)"/></g><g id="グループ化_209" data-name="グループ化 209" transform="translate(197.43 286)"><path id="watch11" data-name="パス 577" class="cls-1" d="M85.092,2.038l1.446,1.844,1.039-2.155,1.491,1.816L90.124,1.4,91.585,3.24l1.1-2.118L94.1,3.012,95.28.94,96.612,2.9,97.9.9l1.191,2.06,1.465-1.846.909,2.217,1.805-1.451.077,2.383,2.18.164-1.812,1.176.746,2.174-2.07-.848-.266,2.371-1.8-1.388-.6,2.3L98.064,8.632l-.771,2.247L95.727,9.184l-.875,2.2-1.5-1.765L92.4,11.791,90.954,9.976l-1,2.137-1.4-1.855-1.04,2.111-1.482-1.806-.976,2.191L83.5,11l-.984,2.187L81,11.4l-1.032,2.161-1.476-1.832-1.109,2.117-1.4-1.907-1.225,2.042-1.252-2.018-1.417,1.89-.955-2.195-1.791,1.473-.063-2.38-2.174-.2,1.808-1.229-.848-2.146,2.118.715L70.358,5.5l1.866,1.3.537-2.33L74.476,6,75.2,3.727l1.619,1.646.837-2.229L79.2,4.87l.922-2.191,1.491,1.785L82.6,2.31l1.429,1.839Z" transform="translate(-67.105 -0.905)"/></g><path id="watch12" data-name="パス 578" class="cls-1" d="M66.534,11.113q.528,3.126,1.061,6.252" transform="translate(130.37 285.095)"/><path id="watch13" data-name="パス 579" class="cls-1" d="M68.652,12.444q.524,3.1,1.055,6.2" transform="translate(130.205 285.095)"/><path id="watch14" data-name="パス 580" class="cls-1" d="M71.292,13.028c.3,2,.6,4,.894,6" transform="translate(129.999 285.095)"/><path id="watch15" data-name="パス 581" class="cls-1" d="M74.339,13.191c.291,1.993.59,3.985.881,5.978" transform="translate(129.762 285.095)"/><path id="watch16" data-name="パス 582" class="cls-1" d="M77.043,13.035q.51,3.036,1.019,6.073" transform="translate(129.551 285.095)"/><path id="watch17" data-name="パス 583" class="cls-1" d="M79.916,13.054q.426,2.917.848,5.834" transform="translate(129.327 285.095)"/><path id="watch18" data-name="パス 584" class="cls-1" d="M82.911,12.814q.418,2.877.832,5.755" transform="translate(129.094 285.095)"/><path id="watch19" data-name="パス 585" class="cls-1" d="M85.739,12.425q.409,2.842.817,5.687" transform="translate(128.874 285.095)"/><path id="watch20" data-name="パス 586" class="cls-1" d="M88.569,12.061q.4,2.8.8,5.6" transform="translate(128.653 285.095)"/><path id="watch21" data-name="パス 587" class="cls-1" d="M91.4,11.711q.393,2.769.782,5.539" transform="translate(128.433 285.095)"/><path id="watch22" data-name="パス 588" class="cls-1" d="M94.356,11.1q.386,2.744.769,5.489" transform="translate(128.202 285.095)"/><path id="watch23" data-name="パス 589" class="cls-1" d="M97.027,10.64q.382,2.711.755,5.422" transform="translate(127.994 285.095)"/><path id="watch24" data-name="パス 590" class="cls-1" d="M99.822,9.891q.378,2.7.754,5.4" transform="translate(127.777 285.095)"/><path id="watch25" data-name="パス 591" class="cls-1" d="M103.084,14.628q-.373-2.714-.763-5.424" transform="translate(127.582 285.095)"/><path id="watch26" data-name="パス 592" class="cls-1" d="M104.938,8.2c.263,1.827.535,3.652.788,5.48" transform="translate(127.378 285.095)"/><path id="watch27" data-name="パス 593" class="cls-1" d="M107.214,6.827c.285,1.846.549,3.694.82,5.542" transform="translate(127.201 285.095)"/><path id="watch28" data-name="パス 594" class="cls-1" d="M107.933,5.112c.284,1.869.577,3.736.846,5.608" transform="translate(127.145 285.095)"/><path id="watch29" data-name="パス 595" class="cls-1" d="M39.053,101.18a14.908,14.908,0,0,0-6.544-4.825q.284,1.038.565,2.076l-.818-.166a32.881,32.881,0,0,0-2.232-7.615l1.64.33.676,1.651c6.091.223,12.174.434,18.271.695.423.068,1.008.39,1.3-.222s-.342-1.738-.678-2.3c.15-.073.554-.007.559-.134-3.4-4.428-11.7-10.961-15.572-12.539s-9.248-.662-7.926,2.976,5.312,7.142,9.739,5.164-3.85-6.343-6.62-5.914c-.291-.541-.645-.592-1.032-1.235,4.573,1.07,6.93-.826,10.495,5.188s-8.4,6.885-11.212,2.594-6.876-9.736-.2-12.534S45.736,80.026,50.243,85.7a42.376,42.376,0,0,1-.557-7.209c.1-2.045-1.787-2.092-2.972-2.689.067-.611.164-1.284.243-1.918,1.817.919,3.9,2.134,5.928,2.037a22.346,22.346,0,0,0-.462,10.337,49.13,49.13,0,0,0,4.664,11.914c-.707.089-1.708.108-2.279.179-1.464-.954,1.6-1.6-1.662-2.206s-12.554-.443-16.965-.369a16.911,16.911,0,0,1,4.386,4.42C40.071,100.526,39.558,100.853,39.053,101.18Z" transform="translate(133.54 285.095)"/><path id="watch30" data-name="パス 596" class="cls-1" d="M31.017,61.409c-2.052-3.274-4.066-6.575-6.119-9.848l-.769.519c-.436-.291-.883-.565-1.312-.868.359-.758.923-1.847,1.219-2.546a20.139,20.139,0,0,0,.947-3.1c.487.372.989.73,1.474,1.1a13.06,13.06,0,0,0-.582,1.863,117.567,117.567,0,0,0,15.261,9.924c4.154,2.167,9.429,5.073,11.75,6.54s.7.437,1.793.718.667-.63,1.4-.782c.386.487.881,1.054,1.309,1.572a9.112,9.112,0,0,0-2.264,4.014c-.5-.141-1.375-.451-1.649-.485-1.888-1.732,3-.126-1.459-2.329S34.656,58.658,29.141,54.454a27.206,27.206,0,0,0,3.725,6.4C32.26,61.05,31.633,61.231,31.017,61.409Z" transform="translate(133.775 285.095)"/><path id="watch31" data-name="パス 597" class="cls-1" d="M64.7,55.848a18.067,18.067,0,0,0-1.376-12.664c-1.84-3.195-4.217-5.346-7.123-5.378S53.342,41.1,53.757,43.25s3.576,7.875,6.047,5.45-.652-6.368-2.645-8.267c2.445.364,3.352,1.352,4.753,4.8s-2.8,7.91-6.671,4.8-7.149-7.871-2.987-12.245,10.9-1.525,14.324,2.881.568,13.152,1.223,16.123,4.805-2.555,5.1-3.046-.317-2.74-.576-3.38c.8-.157,1.619-.173,2.426-.275A13.311,13.311,0,0,0,77.2,55.974c-3.1.226-5.992,1.635-8.731,3.118" transform="translate(131.633 285.095)"/><path id="watch32" data-name="パス 598" class="cls-1" d="M82.247,35.686c-1.008-1.2-2.779-.626-2.8-3.237-.014-1.488,3.376-3.2,5.961-3.057s7.34.011,9.192,3.325.464,5.147-2.184,6.716C96.36,40.984,99,42.747,99.595,48.09s-6.152,7.308-9.779,6.563-5.535-1.6-7.135-3.91c-1.891-2.728-.243-3.947,1.8-4.078-.252,1.327-1,1.848.591,3.169s5.7,3.274,8,1.523,2-4.4.662-6.984-5.546-3.689-7.629-4.082,4.054-1.932,4.4-4.168S88.646,30.5,85.92,30.732,81.022,32.558,82.247,35.686Z" transform="translate(129.364 285.095)"/><path id="watch33" data-name="パス 599" class="cls-1" d="M106.286,56.216a23.644,23.644,0,0,1,7.925,3.075c1.978-7.283,14.275-11.631,19.5-14.238-4.55-2.385-9.1-4.748-13.777-6.822q.252-1.182.506-2.362a3.373,3.373,0,0,1,2.276.9q.4-1.239.8-2.479c-2.525-.707-5.072-1.321-7.614-1.947q-.456,1.1-.9,2.2a3.782,3.782,0,0,1,2.279.186q-.383,1.247-.758,2.5c-2.608-.816-5.219-1.619-7.842-2.378a40.423,40.423,0,0,1-4.056,6.747l1.562.864a9.252,9.252,0,0,1,4.261-3.254c1.5.328,3,.667,4.494,1-1.537,4.607-3.086,9.208-4.586,13.831q-1.765-.355-3.529-.715Q106.554,54.773,106.286,56.216Z" transform="translate(127.403 285.095)"/><path id="watch34" data-name="パス 600" class="cls-1" d="M135.791,76.97a48.172,48.172,0,0,0-12.97-13.681c5.911-1.958,11.41,4.986,14.83,8.928,3.333-1.733,6.637-3.72,10.036-5.184-4.3-3.3-6.543-1.579-9.488-8.548s1.7-13.751,10.381-14.7,17.7,9.664,16.69,16.322-3.356,3.831-5.562,4.616-2.93-2.492-2.135-3.906,2.785.788,3.838-.629,2.839-5.312-.642-7.536-7.109-5.975-14.185-2.231-2.924,14.143,6.208,16.064c-.034.068.465-.224.637-.3.207.386.395.785.595,1.177Q144.825,71.98,135.791,76.97Z" transform="translate(125.985 285.095)"/><path id="watch35" data-name="パス 601" class="cls-1" d="M151.6,88.266c-.137-1.164-.226-2.894-1.442-3.756-1.574-1.115-4.755-3.859-5.975.486-1.367,4.867.711,10.9,5.87,15.179s17.629,7.936,23.831,2.016,1.4-13.5-3.2-17.288-17.385-4.752-16.033,3.276,8.963,8.581,15.037,8.144a4.972,4.972,0,0,0-.456-1.491c-2.027.8-5.751.008-7.366-.589s-7.787-3.972-3.971-6.018,12.841-1.814,16.315,4.277-9.312,7.859-13.844,6.651-14.65-4.558-14.706-9.929S149.918,87.247,151.6,88.266Z" transform="translate(124.353 285.095)"/><path id="watch36" data-name="パス 602" class="cls-1" d="M145.038,124.887a121.683,121.683,0,0,1-10.744-7.894c4.9-3.162,7.813-7.8,9.542-13.6,7.724,14.444,18.117,22.942,33.645,23.746a16.876,16.876,0,0,0-2.873,9.071c-13.063-3.828-21.865-14.728-29.444-26.2l-4.087,8.306C142.4,120.508,143.7,122.708,145.038,124.887Z" transform="translate(125.092 285.095)"/><path id="watch37" data-name="パス 603" class="cls-1" d="M128.936,134.61c-2.188-.764-4.542-1.478-5.81-4.006s-3.841-6.716.243-8.867c4.8-2.526,13.889,1.636,13.048,8.752,3.3,1.9,5.566,1.156,7.9,5.433,3,5.493-2.987,10.178-8.174,8.139S129.771,139.914,128.936,134.61Z" transform="translate(126.115 285.095)"/><path id="watch38" data-name="パス 604" class="cls-1" d="M132.888,129.92c-2.954-.517-7.581-.157-9.192-3.727-1.233-2.733,3.358-4.323,5.757-3.195A5.974,5.974,0,0,1,132.888,129.92Z" transform="translate(125.933 285.095)"/><path id="watch39" data-name="パス 605" class="cls-1" d="M133.161,135.174c-.393,2.634,1.841,5.229,4.485,6.176,1.121.4,3.8,2.74,5.594-.517S135.918,134.277,133.161,135.174Z" transform="translate(125.183 285.095)"/><path id="watch40" data-name="パス 606" class="cls-1" d="M115.352,52.631q1.773-5.529,3.668-11.011,3.672,1.331,7.3,2.791A26.343,26.343,0,0,0,115.352,52.631Z" transform="translate(126.567 285.095)"/><path id="watch41" data-name="パス 607" class="cls-1" d="M109.283,140.394c-.7-1.971-4.41-6.635-1.161-8.672s9.481.652,9.071,8.16-10.523,5.843-14.52-.975-2.57-15.809,4.135-16.184c5.291-.295,5.73,3.385,5.644,5.592s-2.259.15-2.717.72c1.134-.992,1.262-2.333-.164-3.635s-4.659-1.869-4.9,2.114.826,12.666,5.021,15.04,5.2-2.857,4.081-5.555-2.212-5.285-4.6-4.047-.2,5.185.769,6.728C109.723,139.956,109.61,140.223,109.283,140.394Z" transform="translate(127.727 285.095)"/><path id="watch42" data-name="パス 608" class="cls-1" d="M88.019,140.493a13.75,13.75,0,0,0-6.395-1.684c.028-.545.056-1.1.082-1.636.774-.138,1.486-.137,2.314-.239,1.693-3.22,4.954-9.567,6.159-12.124s.053-.577-.328-2.043a13.855,13.855,0,0,1-.333-1.664,26.328,26.328,0,0,0,5.739,1.205,9.288,9.288,0,0,0,.834,1.359c-1.261.6-.865-1.213-2.377.8s-4.38,8.007-5.8,10.986c.925-.492,1.983-1.221,2.959-1.8.314.541.622,1.09.933,1.634l-4.739,2.953a1.83,1.83,0,0,1,1.53.313l-.448,2.179" transform="translate(129.194 285.095)"/><path id="watch43" data-name="パス 609" class="cls-1" d="M73.355,136.623c-3.878-1.691-5.034-7.734-3.866-11.991,1.382-5.037,6.534-10.039,11.632-8.031,4.539,1.788,5.029,9.149,3.215,13.15S77.8,138.562,73.355,136.623Z" transform="translate(130.173 285.095)"/><path id="watch44" data-name="パス 610" class="cls-1" d="M74.731,125.508c1.007-2.234,3.741-7.547,6.659-6.279s.911,6.859-.094,9.092-3.74,7.528-6.656,6.238S73.723,127.742,74.731,125.508Z" transform="translate(129.857 285.095)"/><path id="watch45" data-name="パス 611" class="cls-1" d="M52.62,128.865a79.124,79.124,0,0,1-5.347-6.163l1.27-.812q.317.534.63,1.071,9.075-5.947,18.126-11.938L66.233,109.8l1.119-.723c1.861,1.275,3.727,2.541,5.582,3.826-.484.313-.97.622-1.455.933l-1.164-.728q-8.9,5.708-17.806,11.409,3.838.318,7.677.617l.083,2.527q-3.791-.513-7.579-1.049.519.589,1.036,1.181Q53.175,128.325,52.62,128.865Z" transform="translate(131.87 285.095)"/><path id="watch46" data-name="パス 612" class="cls-1" d="M44.973,120.866l-5.034-4.845,1.271-.814,1.119.687c5.959-3.584,11.893-7.214,17.841-10.819l-.906-1.548,1.673-.725,4.841,4.693L64,108.642q-.5-.562-1.008-1.126-8.141,4.9-16.294,9.788,2.939.216,5.876.462l-.365,2.347q-3.564-.732-7.136-1.417l1.017,1.1Z" transform="translate(132.441 285.095)"/><path id="watch47" data-name="パス 613" class="cls-1" d="M92.342,88.726a3.4,3.4,0,0,1,4.585-.207c1.569,1.04,1.924,2.438,1.829,4.409,0,.05-2.233-.747.64.364s13.5,5.3,18.817,7.973c3.711,1.864,16.7,9.155,19.3,10.613,3.356,1.876,15.43,6.364,13.294,7.313-4.185,1.86-29.111-13.355-34.764-16.324C112.491,101,99.324,93.93,99.171,93.915c-3.958-.385-3.015.552-5.247-.76-1.346-.791-.762-1.262-2.16-3.042-.467-.594-12.607-3.639-11.632-5.809s10.589,4.332,11.714,4.677S92.2,88.852,92.342,88.726Z" transform="translate(129.315 285.095)"/><path id="watch48" data-name="パス 614" class="cls-1" d="M90.87,93.2a1.673,1.673,0,0,1,2.4-.207,1.777,1.777,0,0,1,.8,2.335c-.549.864-1.67.652-2.4.179A1.742,1.742,0,0,1,90.87,93.2Z" transform="translate(128.49 285.095)"/><path id="watch49" data-name="パス 615" class="cls-1" d="M91.463,88.205c-3.767-5.556-1.194-2.613-7.7-8.2S63.081,59.278,56.9,50.217c6.47,1.851,14.858,11.066,19.151,15.478S88.48,83.833,91.535,85.581s3.943.811,5.889,3.123,1.393,4.449-1.323,4.944" transform="translate(131.12 285.095)"/><path id="watch50" data-name="パス 616" class="cls-1" d="M94.716,85.847c2.268-1.977,5.141-1.36,6.987.929s2.192,5.257-.751,6.316" transform="translate(128.174 285.095)"/><path id="watch51" data-name="パス 617" class="cls-1" d="M95.265,85.313c1.971-2.9,5.844-2.161,7.871.273s2.018,5.063-.62,6.8" transform="translate(128.132 285.095)"/><path id="watch52" data-name="パス 618" class="cls-1" d="M97.186,93.9c-2.531,2.693-1.813,7.441-2.774,10.964s-5.108,7.267-6.755,9.837a33.591,33.591,0,0,0-2.845,5.814,45.461,45.461,0,0,0,1.9-9.356,24.594,24.594,0,0,1,3.667-11.411c1.857-2.783,3.442-3.469,3.877-6.609" transform="translate(128.946 285.095)"/><path id="watch53" data-name="パス 619" class="cls-1" d="M89.629,105.139a22.948,22.948,0,0,1,4.7-7.844,21.989,21.989,0,0,1-1.5,8.361,15.152,15.152,0,0,1-4.209,5.894C88.161,109.29,88.779,107.506,89.629,105.139Z" transform="translate(128.661 285.095)"/><path id="watch54" data-name="パス 620" class="cls-1" d="M80.183,8.686a59.377,59.377,0,0,0,6.766-.141c-.088-1.5-.175-2.995-.312-4.484a19.022,19.022,0,0,0-6.2,1.091c-1.214.421-4.833,1.191-4.666,2.543S79.062,8.607,80.183,8.686Z" transform="translate(129.651 285.095)"/><path id="watch55" data-name="パス 621" class="cls-1" d="M95.8,5.329c.046.812-1.623,1.475-2.276,1.771a14.165,14.165,0,0,1-4.6,1.3c-.1-1.493-.2-2.981-.3-4.476a12.265,12.265,0,0,1,5.157.237C94.419,4.338,95.75,4.517,95.8,5.329Z" transform="translate(128.649 285.095)"/><path id="watch56" data-name="パス 622" class="cls-1" d="M75.561,7.735A42.375,42.375,0,0,1,86.7,5.358" transform="translate(129.666 285.095)"/><path id="watch57" data-name="パス 623" class="cls-1" d="M95.88,5.3a33.679,33.679,0,0,0-7.19-.084" transform="translate(128.644 285.095)"/><path id="watch58" data-name="パス 624" class="cls-1" d="M205.61,79.674c6.322.789,20.482.343,21.552-7.858s-2.254-13.955-2.927-21.581" transform="translate(119.537 285.095)"/><path id="watch59" data-name="パス 625" class="cls-1" d="M215.978,122.242a52.188,52.188,0,0,0,15.866-2.3c4.4-1.52,9.7,2.713,12.421-3.5s-4.941-22.329-9.12-29.108-10.589-8.823-18.276-7.951" transform="translate(118.729 285.095)"/><path id="watch60" data-name="パス 627" class="cls-1" d="M201.772,52.384" transform="translate(119.836 285.095)"/><path id="watch61" data-name="パス 628" class="cls-1" d="M220.74,130.9c5.994.091,10.31-1.427,16.27-3.471s14.074-3.848,20.632-3.869" transform="translate(118.358 285.095)"/><path id="watch62" data-name="パス 629" class="cls-1" d="M233.075,82.471a27.789,27.789,0,0,0-3.037-9.87" transform="translate(117.634 285.095)"/><g id="グループ化_210" data-name="グループ化 210" transform="translate(193.74 352.009)"><path id="watch63" data-name="パス 630" class="cls-2" d="M83.55,103.513q-.27.6-.55,1.185l-.506-.24c.047-.149.092-.3.138-.448l-.266-.126-.51,1.079.266.126.234-.35.509.241q-.263.555-.534,1.106l-.8-.377c.057-.2.113-.4.171-.6l-.382-.181c-.114.282-.248.555-.349.844l.483.229-.007,0,.007,0,.739.35h0c.116.055.687.326.772.368l.02.01.342.165c.041-.086.08-.172.122-.258-.108-.067-.216-.135-.324-.2.183-.4.365-.795.555-1.2l.082-.173c.19-.4.378-.793.573-1.188l.361.126c.04-.086.08-.172.122-.257l-1.539-.729-.122.257C83.291,103.354,83.42,103.434,83.55,103.513Z" transform="translate(-64.495 -66.914)"/><path id="watch64" data-name="パス 631" class="cls-2" d="M78.8,101.05c-.054.165-.152.395-.207.55a.9.9,0,0,0,.268,1.15c-.442-.078-.9-.269-1.192.29s.09,1.058.633,1.376c.142.083.5.3.7.42s.48.288.693.414c.051-.08.1-.164.145-.245l-.305-.23c.216-.384.432-.76.656-1.143l.1-.166c.225-.382.444-.759.673-1.131.106.02.243.151.342.141.067-.007.09-.188.147-.227-.08-.053-.252-.152-.308-.187-.038-.023-.009,0-.009-.006l-.551-.329-.529-.316c-.047.082-.095.164-.143.246l.318.24c-.2.382-.221.908-.644,1.092-.049.021-.047-.006-.175-.108a.575.575,0,0,1-.128-.664c.138-.248.1-.31.246-.61s-.112-.665-.341-.811-.361-.277-.511-.227a.214.214,0,0,0-.151.24C78.538,100.913,78.753,100.956,78.8,101.05Zm.479,2.108c.035.017.155.038.16.1a1.064,1.064,0,0,1-.65,1.094c-.057.024-.137-.07-.174-.1-.294-.25-.437-.492-.22-.867A.593.593,0,0,1,79.284,103.158Z" transform="translate(-64.23 -66.914)"/><path id="watch65" data-name="パス 632" class="cls-2" d="M74.932,98.3c0,.061.168.151.2.216-.349,1.062-.711,2.122-1.065,3.183l.414.321,2.686-1.883.361.2c.056-.076.113-.151.169-.229l-.228-.177h0l-.241-.187h0l-.39-.3c-.066.068-.114.151-.174.224l.27.29-.557.4-.809-.627c.081-.224.16-.453.243-.673.108.032.236.175.338.178.065,0,.11-.166.16-.2-.222-.175-.712-.557-.873-.678s-.119-.1-.19-.147h0c-.071-.046-.124-.124-.162-.115A.349.349,0,0,0,74.932,98.3Zm1.186,2.25-1.137.825.479-1.335Z" transform="translate(-63.957 -66.914)"/><path id="watch66" data-name="パス 633" class="cls-2" d="M69.507,97.388c-.065.069-.134.133-.195.206l.421.434.107.11h0l.4.413a2.455,2.455,0,0,0,.2-.2l-.36-.466,1.234-1.279-.432,2.605.8.825c.065-.069.134-.138.2-.206a2.836,2.836,0,0,1-.213-.275.139.139,0,0,1,.02-.129c.6-.649,1.243-1.29,1.859-1.936l.346.265c.065-.069.133-.134.195-.205l-.293-.3h0l-.136-.141-.5-.517c-.072.061-.132.135-.2.2l.358.468-1.533,1.59.537-3.136-.3-.309L69.854,97.65Z" transform="translate(-63.587 -66.914)"/><path id="watch67" data-name="パス 634" class="cls-2" d="M68.963,93.252c.17-.09.409-.3.6-.283s.24.106.345.289c.388.678-.065,1.3-.615,1.728s-1.269.708-1.783.117c-.119-.137-.181-.182-.14-.367s.3-.392.437-.529c-.07-.108-.151-.211-.225-.318-.211.172-.415.347-.631.517a2.1,2.1,0,0,0,.4.982,1.646,1.646,0,0,0,2.463.324,1.78,1.78,0,0,0,.41-2.527,2.135,2.135,0,0,0-.839-.739c-.215.173-.432.328-.648.492C68.811,93.042,68.884,93.152,68.963,93.252Z" transform="translate(-63.402 -66.914)"/><path id="watch68" data-name="パス 635" class="cls-2" d="M64.81,91.063h0c.053.107.194.4.263.532.052-.054.21-.068.233-.14s-.076-.228-.075-.324c.586.108,1.184.215,1.772.335l-.145.08c-.385.212-.764.411-1.149.613l-.208-.327c-.082.045-.166.089-.247.135.053.108.116.237.167.338h0c.05.1,0,0,.085.172s.337.7.451.941a2.694,2.694,0,0,0,.25-.126c-.044-.123-.087-.246-.131-.368.378-.211.753-.414,1.138-.62l.166-.089c.387-.211.766-.421,1.153-.619.076.073.122.274.2.315.062.031.175-.108.24-.123-.124-.27-.41-.9-.5-1.076s.018.018-.028-.059h0c-.046-.077-.089-.256-.142-.282s-.21.076-.231.126.091.235.089.315a2.808,2.808,0,0,1-.8.456c-.229.04-.267-.06-.453-.086.3-.4.584-.81.875-1.209.053.034.077.184.136.192s.171-.1.243-.123c-.037-.086-.139-.29-.165-.343s0-.011,0-.011c-.077-.158-.119-.246-.2-.411s-.191-.4-.282-.577c-.049.057-.21.072-.232.143s.088.209.089.3c-.42.625-.849,1.246-1.273,1.869-.344-.072-.689-.138-1.032-.21-.09-.134-.179-.269-.269-.4-.082.047-.167.088-.247.138l.239.486C64.842,91.126,64.758,90.956,64.81,91.063Z" transform="translate(-63.216 -66.914)"/><path id="watch69" data-name="パス 636" class="cls-2" d="M63.38,81.592c-.092.009-.184.01-.277.023,0,.082,0,.3,0,.353v.017c0,.2.009.725.011.857h0c0,.131,0,.025,0,.11.759.207,1.518.43,2.277.643-.752.346-1.5.682-2.255,1.033,0,.187.007.543.009.691s0,.137,0,.233h0c0,.1.006.365.006.464.092,0,.184-.012.277-.016l.047-.469c.9-.066,1.806-.139,2.711-.2.023.169.047.338.07.507.092-.008.184-.008.277-.021,0-.126,0-.394-.006-.5h0c0-.1,0-.265,0-.35h0c0-.084,0-.35-.006-.438-.092,0-.184.01-.277.013-.019.148-.038.295-.061.442-.4.027-.866.058-1.247.09s-.677.066-1.042.1c.875-.4,1.744-.8,2.619-1.2l-.006-.408c-.875-.259-1.752-.508-2.629-.759l1.131-.072c.383-.025.779-.055,1.166-.074.017.128.032.256.049.384l.277-.018-.022-1.689-.277.018c-.011.133-.023.266-.035.4-.428.035-.849.069-1.281.1l-.186.014c-.432.032-.853.06-1.282.084C63.409,81.842,63.4,81.717,63.38,81.592Z" transform="translate(-63.103 -66.914)"/><path id="watch70" data-name="パス 637" class="cls-2" d="M64.412,77.678c.008-.149.048-.292.068-.439-.089-.018-.177-.042-.266-.057-.03.114-.085.322-.111.419h0c-.026.1-.065.246-.092.348h0c-.027.1-.094.355-.123.466.087.027.178.041.265.063.06-.154.1-.31.172-.461.389.094,1.19.255,1.5.339.6.162,1,.352.868.988s-.7.592-1.215.5c-.065-.011-.278-.062-.372-.082-.391-.087-.787-.179-1.178-.273.023-.145.048-.291.072-.436-.089-.021-.178-.037-.266-.062l-.114.431h0c-.049.187-.191.718-.231.875h0c-.041.156-.07.261-.1.392.072-.019.2.09.258.042.075-.061.076-.262.149-.348.305.053.9.194,1.148.243s.433.11.553.123c.854.094,1.44-.075,1.672-1.029s-.219-1.45-1.146-1.7C65.581,77.928,64.818,77.775,64.412,77.678Z" transform="translate(-63.117 -66.914)"/><path id="watch71" data-name="パス 638" class="cls-2" d="M67.838,75.258c-.062.129-.125.259-.188.388l.57.437-.407.839c-.365-.166-.726-.335-1.091-.509l-.237-.113c-.386-.184-.754-.361-1.134-.546.053-.14.1-.281.157-.421l-.246-.115-.192.4h0c-.065.133-.342.706-.4.833h0c-.06.126-.13.264-.179.376.07,0,.177.133.241.1.086-.05.138-.248.215-.329.4.174.737.329,1.156.527l.288.137c.188.089.745.356,1,.483-.033.134-.091.256-.135.385.08.041.166.073.243.121l.181-.371h0l.4-.831h0l.376-.775h0c.106-.218.157-.325.259-.534C68.419,75.578,68.129,75.415,67.838,75.258Z" transform="translate(-63.211 -66.914)"/><path id="watch72" data-name="パス 639" class="cls-2" d="M69.8,72.74c-.085.117-.17.232-.255.348l.474.543q-.275.376-.55.752c-.326-.235-.645-.473-.967-.716l-.209-.158c-.343-.258-.668-.5-1-.766l.23-.385-.218-.164c-.349.479-.7.95-1.047,1.434.069.008.149.167.217.143.094-.034.18-.217.269-.283.356.253.654.478,1.026.756l.255.191c.166.125.659.5.881.672-.056.127-.136.235-.2.355a1.239,1.239,0,0,0,.225.153l.5-.689h0l.782-1.069h0l.345-.472C70.317,73.159,70.055,72.958,69.8,72.74Z" transform="translate(-63.349 -66.914)"/><path id="watch73" data-name="パス 640" class="cls-2" d="M72.246,70.644l-.317.315.329.508-.712.707q-.45-.463-.892-.936l.415-.412.314.245.22-.219-.75-.8-.22.219.227.339q-.206.2-.411.409c-.268-.288-.536-.577-.8-.87l.636-.632.479.355.317-.315c-.208-.205-.418-.409-.625-.614l-.4.4h0l-.59.586h0l-.641.637c-.072.072-.018.017-.018.017-.107.109-.189.185-.288.289.066.02.12.192.189.179.1-.018.209-.186.31-.235.3.3.582.606.874.916l.126.135c.291.312.574.618.859.933l-.258.312c.064.066.124.134.188.2l.6-.6.339-.337h0l1.061-1.055C72.642,71.074,72.429,70.875,72.246,70.644Z" transform="translate(-63.525 -66.914)"/><path id="watch74" data-name="パス 641" class="cls-2" d="M72.021,67.832c-.2.152-.48.355-.692.521.058.032.087.214.155.212.1,0,.235-.156.342-.191.243.349.475.705.712,1.065l.1.156c.236.361.465.714.7,1.075l-.3.269c.05.077.1.151.151.23l.323-.236h0c.134-.1.243-.175.412-.3l.654-.49c-.045-.081-.1-.155-.149-.233l-.361.219c-.255-.337-.709-.534-.672-1.037,0-.058.032-.047.176-.129a.535.535,0,0,1,.651.124c.165.232.225.209.431.47s.655.132.881-.028.411-.239.439-.41a.19.19,0,0,0-.143-.238c-.1-.027-.238.166-.345.181-.124-.117-.278-.293-.394-.408a.844.844,0,0,0-1.147-.171c.254-.378.673-.759.3-1.268s-1.006-.295-1.52.1C72.585,67.413,72.22,67.679,72.021,67.832Zm1.578-.043a.665.665,0,0,1-.212.943c-.03.026-.117.132-.162.118-.377-.12-.539-.725-.649-1.02-.044-.119.118-.115.157-.145C73.046,67.448,73.358,67.424,73.6,67.789Z" transform="translate(-63.744 -66.914)"/></g><path id="watch75" data-name="パス 626" class="cls-1" d="M243.842,84.479" transform="translate(116.559 285.095)"/></g></svg>');
	      }
	
	      log(obj.paths);
	
	      obj.depths = [19, 20, 21];
	      obj.colors = [0x999999, 0x999999, 0x999999];
	      obj.center = { x: 0, y: 0 };
	
	      return obj;
	    }
	  }, {
	    key: 'd3threeD',
	    value: function d3threeD(exports) {
	
	      var DEGS_TO_RADS = Math.PI / 180,
	          UNIT_SIZE = 100;
	      var DIGIT_0 = 48,
	          DIGIT_9 = 57,
	          COMMA = 44,
	          SPACE = 32,
	          PERIOD = 46,
	          MINUS = 45;
	
	      exports.transformSVGPath = function transformSVGPath(pathStr) {
	
	        var path = new THREE.ShapePath();
	
	        var idx = 1,
	            len = pathStr.length,
	            activeCmd,
	            x = 0,
	            y = 0,
	            nx = 0,
	            ny = 0,
	            firstX = null,
	            firstY = null,
	            x1 = 0,
	            x2 = 0,
	            y1 = 0,
	            y2 = 0,
	            rx = 0,
	            ry = 0,
	            xar = 0,
	            laf = 0,
	            sf = 0,
	            cx,
	            cy;
	
	        function eatNum() {
	
	          var sidx,
	              c,
	              isFloat = false,
	              s;
	
	          // eat delims
	
	          while (idx < len) {
	
	            c = pathStr.charCodeAt(idx);
	
	            if (c !== COMMA && c !== SPACE) break;
	
	            idx++;
	          }
	
	          if (c === MINUS) {
	
	            sidx = idx++;
	          } else {
	
	            sidx = idx;
	          }
	
	          // eat number
	
	          while (idx < len) {
	
	            c = pathStr.charCodeAt(idx);
	
	            if (DIGIT_0 <= c && c <= DIGIT_9) {
	
	              idx++;
	              continue;
	            } else if (c === PERIOD) {
	
	              idx++;
	              isFloat = true;
	              continue;
	            }
	
	            s = pathStr.substring(sidx, idx);
	            return isFloat ? parseFloat(s) : parseInt(s);
	          }
	
	          s = pathStr.substring(sidx);
	          return isFloat ? parseFloat(s) : parseInt(s);
	        }
	
	        function nextIsNum() {
	
	          var c;
	
	          // do permanently eat any delims...
	
	          while (idx < len) {
	
	            c = pathStr.charCodeAt(idx);
	
	            if (c !== COMMA && c !== SPACE) break;
	
	            idx++;
	          }
	
	          c = pathStr.charCodeAt(idx);
	          return c === MINUS || DIGIT_0 <= c && c <= DIGIT_9;
	        }
	
	        var canRepeat;
	        activeCmd = pathStr[0];
	
	        while (idx <= len) {
	
	          canRepeat = true;
	
	          switch (activeCmd) {
	
	            // moveto commands, become lineto's if repeated
	            case 'M':
	              x = eatNum();
	              y = eatNum();
	              path.moveTo(x, y);
	              activeCmd = 'L';
	              firstX = x;
	              firstY = y;
	              break;
	
	            case 'm':
	              x += eatNum();
	              y += eatNum();
	              path.moveTo(x, y);
	              activeCmd = 'l';
	              firstX = x;
	              firstY = y;
	              break;
	
	            case 'Z':
	            case 'z':
	              canRepeat = false;
	              if (x !== firstX || y !== firstY) path.lineTo(firstX, firstY);
	              break;
	
	            // - lines!
	            case 'L':
	            case 'H':
	            case 'V':
	              nx = activeCmd === 'V' ? x : eatNum();
	              ny = activeCmd === 'H' ? y : eatNum();
	              path.lineTo(nx, ny);
	              x = nx;
	              y = ny;
	              break;
	
	            case 'l':
	            case 'h':
	            case 'v':
	              nx = activeCmd === 'v' ? x : x + eatNum();
	              ny = activeCmd === 'h' ? y : y + eatNum();
	              path.lineTo(nx, ny);
	              x = nx;
	              y = ny;
	              break;
	
	            // - cubic bezier
	            case 'C':
	              x1 = eatNum();y1 = eatNum();
	
	            case 'S':
	              if (activeCmd === 'S') {
	
	                x1 = 2 * x - x2;
	                y1 = 2 * y - y2;
	              }
	
	              x2 = eatNum();
	              y2 = eatNum();
	              nx = eatNum();
	              ny = eatNum();
	              path.bezierCurveTo(x1, y1, x2, y2, nx, ny);
	              x = nx;y = ny;
	              break;
	
	            case 'c':
	              x1 = x + eatNum();
	              y1 = y + eatNum();
	
	            case 's':
	              if (activeCmd === 's') {
	
	                x1 = 2 * x - x2;
	                y1 = 2 * y - y2;
	              }
	
	              x2 = x + eatNum();
	              y2 = y + eatNum();
	              nx = x + eatNum();
	              ny = y + eatNum();
	              path.bezierCurveTo(x1, y1, x2, y2, nx, ny);
	              x = nx;y = ny;
	              break;
	
	            // - quadratic bezier
	            case 'Q':
	              x1 = eatNum();y1 = eatNum();
	
	            case 'T':
	              if (activeCmd === 'T') {
	                x1 = 2 * x - x1;
	                y1 = 2 * y - y1;
	              }
	              nx = eatNum();
	              ny = eatNum();
	              path.quadraticCurveTo(x1, y1, nx, ny);
	              x = nx;
	              y = ny;
	              break;
	
	            case 'q':
	              x1 = x + eatNum();
	              y1 = y + eatNum();
	
	            case 't':
	              if (activeCmd === 't') {
	
	                x1 = 2 * x - x1;
	                y1 = 2 * y - y1;
	              }
	
	              nx = x + eatNum();
	              ny = y + eatNum();
	              path.quadraticCurveTo(x1, y1, nx, ny);
	              x = nx;y = ny;
	              break;
	
	            // - elliptical arc
	            case 'A':
	              rx = eatNum();
	              ry = eatNum();
	              xar = eatNum() * DEGS_TO_RADS;
	              laf = eatNum();
	              sf = eatNum();
	              nx = eatNum();
	              ny = eatNum();
	              if (rx !== ry) console.warn('Forcing elliptical arc to be a circular one:', rx, ry);
	
	              // SVG implementation notes does all the math for us! woo!
	              // http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
	
	              // step1, using x1 as x1'
	
	              x1 = Math.cos(xar) * (x - nx) / 2 + Math.sin(xar) * (y - ny) / 2;
	              y1 = -Math.sin(xar) * (x - nx) / 2 + Math.cos(xar) * (y - ny) / 2;
	
	              // step 2, using x2 as cx'
	
	              var norm = Math.sqrt((rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1) / (rx * rx * y1 * y1 + ry * ry * x1 * x1));
	
	              if (laf === sf) norm = -norm;
	
	              x2 = norm * rx * y1 / ry;
	              y2 = norm * -ry * x1 / rx;
	
	              // step 3
	
	              cx = Math.cos(xar) * x2 - Math.sin(xar) * y2 + (x + nx) / 2;
	              cy = Math.sin(xar) * x2 + Math.cos(xar) * y2 + (y + ny) / 2;
	
	              var u = new THREE.Vector2(1, 0);
	              var v = new THREE.Vector2((x1 - x2) / rx, (y1 - y2) / ry);
	
	              var startAng = Math.acos(u.dot(v) / u.length() / v.length());
	
	              if (u.x * v.y - u.y * v.x < 0) startAng = -startAng;
	
	              // we can reuse 'v' from start angle as our 'u' for delta angle
	              u.x = (-x1 - x2) / rx;
	              u.y = (-y1 - y2) / ry;
	
	              var deltaAng = Math.acos(v.dot(u) / v.length() / u.length());
	
	              // This normalization ends up making our curves fail to triangulate...
	
	              if (v.x * u.y - v.y * u.x < 0) deltaAng = -deltaAng;
	              if (!sf && deltaAng > 0) deltaAng -= Math.PI * 2;
	              if (sf && deltaAng < 0) deltaAng += Math.PI * 2;
	
	              path.absarc(cx, cy, rx, startAng, startAng + deltaAng, sf);
	              x = nx;
	              y = ny;
	              break;
	
	            default:
	              throw new Error('Wrong path command: ' + activeCmd);
	
	          }
	
	          // just reissue the command
	
	          if (canRepeat && nextIsNum()) continue;
	
	          activeCmd = pathStr[idx++];
	        }
	
	        return path;
	      };
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Fragment.prototype.__proto__ || Object.getPrototypeOf(Fragment.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Fragment;
	}(_Base3.default);
	
	exports.default = Fragment;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrRand = arrRand;
	exports.shuffle = shuffle;
	exports.randomArr = randomArr;
	exports.sliceNull = sliceNull;
	exports.sort = sort;
	exports.getKey = getKey;
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
	function arrRand(arr) {
	
	  return arr[gb.u.m.randomInt(0, arr.length - 1)];
	}
	
	// 配列をランダムに並べ替え
	// -----------------------------------
	// @arr : 配列(Array)
	// -----------------------------------
	function shuffle(ary) {
	
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
	function randomArr(len) {
	
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
	function sliceNull(arr) {
	
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
	function sort(arr, para, desc) {
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
	
	function getKey(list, value) {
	  var returnKey = [];
	  for (var key in list) {
	    if (list[key] == value) {
	      returnKey.push(key);
	    }
	  }
	  return returnKey;
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene_PE = __webpack_require__(42);
	
	var _Scene_PE2 = _interopRequireDefault(_Scene_PE);
	
	var _posteffect = __webpack_require__(43);
	
	var _posteffect2 = _interopRequireDefault(_posteffect);
	
	var _posteffect3 = __webpack_require__(45);
	
	var _posteffect4 = _interopRequireDefault(_posteffect3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  PostEffect
	//
	//--------------------------------------------------
	
	var PostEffect = function (_Base) {
	  _inherits(PostEffect, _Base);
	
	  function PostEffect(scene, camera, renderer) {
	    _classCallCheck(this, PostEffect);
	
	    var _this = _possibleConstructorReturn(this, (PostEffect.__proto__ || Object.getPrototypeOf(PostEffect)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.isUEv = true;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(PostEffect, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.ready();
	
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // scene for post effect
	      this.spe = new _Scene_PE2.default(this.scene, this.camera, this.renderer);
	
	      // plane for post effect
	      this.uniforms = {
	        time: { type: 'f', value: 1.0 },
	        frame: { type: 'f', value: 0.0 },
	        resolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        imageResolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        texture: { type: 't', value: this.spe.renderPE.texture }
	      };
	
	      this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(gb.r.w, gb.r.h, 100, 100), new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: _posteffect2.default, fragmentShader: _posteffect4.default }));
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.mesh);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.uniforms.frame.value += gb.up.delta;
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
	
	      this.uniforms.resolution.value.x = gb.r.w;
	      this.uniforms.resolution.value.y = gb.r.h;
	    }
	  }]);
	
	  return PostEffect;
	}(_Base3.default);
	
	exports.default = PostEffect;

/***/ }),
/* 42 */
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
	//  Plane
	//
	//--------------------------------------------------
	
	var Plane = function (_Base) {
	  _inherits(Plane, _Base);
	
	  function Plane(scene, camera, renderer) {
	    _classCallCheck(this, Plane);
	
	    var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.isUEv = true;
	
	    _this.setup();
	    _this.setEvents();
	
	    _this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Plane, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.ready();
	
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // scene
	      this.renderPE = new THREE.WebGLRenderTarget(gb.r.w * 2, gb.r.h * 2);
	      this.scenePE = new THREE.Scene();
	      this.cameraPE = new THREE.PerspectiveCamera(45, gb.r.w / gb.r.h, 1, 100000);
	      this.cameraPE.position.set(0, 0, 100);
	      this.cameraPE.lookAt(new THREE.Vector3());
	
	      // objects
	      var geometry = new THREE.BoxGeometry(5, 5, 5);
	      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	      this.m = new THREE.Mesh(geometry, material);
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scenePE.add(this.m);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.m.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      this.renderer.render(this.scenePE, this.cameraPE, this.renderPE);
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Plane;
	}(_Base3.default);
	
	exports.default = Plane;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(44) + "\n\nvoid main() {\n\n  vUv = uv;\n\n  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  gl_Position = pos;\n  \n}\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;"

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(46) + "\nhighp float random_1_0(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\n// main\nvoid main() {\n\n  vec4 color = texture2D(texture, vUv);\n\n  vec3 noise = vec3(random_1_0(gl_FragCoord.xy / resolution.xy + frame/1000.0));\n\n  gl_FragColor = color + vec4(noise * 0.55, 0.0);\n  // gl_FragColor = color;\n\n}"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\nuniform sampler2D texture;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;"

/***/ }),
/* 47 */
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
/* 48 */
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
	
	      this.controls.rotateSpeed = 3.0; //��ܞ�������Ȥ����٤�
	      this.controls.zoomSpeed = 1.2; //���`�ह���Ȥ����٤�
	      this.controls.panSpeed = 0.3; //�ѥ󤹤��Ȥ����٤�
	
	      this.controls.staticMoving = false;
	      this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
	
	      this.controls.noRotate = false; //true�ǻ�ܞ�����򲻿ɤˤ���
	      this.controls.noZoom = false; //true�ǥ��`�������򲻿ɤˤ���
	      this.controls.noPan = true; //true�ǥѥ��β����򲻿ɤˤ���
	
	      this.controls.minDistance = 0; //���Ť������x����С��
	      this.controls.maxDistance = Infinity; //�h�����������x��������
	      // this.controls.maxDistance = 100; //�h�����������x��������
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Scene;
	}(_Base3.default);
	
	exports.default = Scene;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene2 = __webpack_require__(35);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Camera2 = __webpack_require__(36);
	
	var _Camera3 = _interopRequireDefault(_Camera2);
	
	var _Light2 = __webpack_require__(37);
	
	var _Light3 = _interopRequireDefault(_Light2);
	
	var _Objects = __webpack_require__(50);
	
	var _Objects2 = _interopRequireDefault(_Objects);
	
	var _Effect = __webpack_require__(54);
	
	var _Effect2 = _interopRequireDefault(_Effect);
	
	var _Control = __webpack_require__(55);
	
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
	      this.isControl = true;
	
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(51);
	
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
	
	
	// objectgroup shader
	// import Cube from './Cube/Cube_PostEffect/Controller.es6';
	
	// custom objects
	
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
	
	      this.loopStart = true;
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
	      // this.Plane = new Plane(this.scene, this.camera);
	      this.Cube = new _Controller2.default(this.scene, this.camera, this.renderer);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _shader = __webpack_require__(52);
	
	var _shader2 = _interopRequireDefault(_shader);
	
	var _shader3 = __webpack_require__(53);
	
	var _shader4 = _interopRequireDefault(_shader3);
	
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
	
	  function Plane(scene, camera, renderer) {
	    _classCallCheck(this, Plane);
	
	    var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.isUEv = true;
	
	    _this.setup();
	    _this.setEvents();
	
	    _this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Plane, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.ready();
	
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      var geometry = new THREE.BoxGeometry(5, 5, 5);
	
	      this.uniforms = {
	        time: { type: 'f', value: 1.0 },
	        frame: { type: 'f', value: 0.0 },
	        resolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        imageResolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        // texture: {type: 't', value: this.tex},
	        mouse: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) }
	      };
	      var material = new THREE.ShaderMaterial({
	        vertexShader: _shader2.default,
	        fragmentShader: _shader4.default,
	        uniforms: this.uniforms,
	        transparent: true,
	        depthTest: true
	      });
	      this.mesh = new THREE.Mesh(geometry, material);
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.mesh);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
	
	      this.uniforms.frame.value += gb.up.delta / 100.0;
	
	      this.uniforms.mouse.value.x = gb.m.x / gb.r.w * 0.5;
	      this.uniforms.mouse.value.y = gb.m.y / gb.r.h * 0.5;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Plane;
	}(_Base3.default);
	
	exports.default = Plane;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(44) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nvoid main() {\n\n  vUv = uv;\n\n  vec3 pos = position;\n\n  vec3 seed = vec3(pos.xy, pos.z + frame * 0.02) * 1.0;\n\n  pos.x = pos.x + abs(snoise_1_3(seed) * 3.0) * sin((position.z + frame) * 1.5 * 0.2);\n  pos.y = pos.y + abs(snoise_1_3(seed) * 3.0) * sin((position.x + frame) * 0.5 * 0.2);\n  pos.z = pos.z + abs(snoise_1_3(seed) * 3.0) * sin((position.y + frame) * 2.7 * 0.2);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  \n}"

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(46) + "\nhighp float random_1_0(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\n// main\nvoid main() {\n\n  vec4 color = vec4(1.0,0.0,0.0,1.0);\n\n  vec3 noise = vec3(random_1_0(gl_FragCoord.xy / resolution.xy + frame/100.0));\n\n  gl_FragColor = color - vec4(noise * 0.55, 0.0);\n\n}"

/***/ }),
/* 54 */
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
/* 55 */
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
	
	      this.controls.rotateSpeed = 3.0; //��ܞ�������Ȥ����٤�
	      this.controls.zoomSpeed = 1.2; //���`�ह���Ȥ����٤�
	      this.controls.panSpeed = 0.3; //�ѥ󤹤��Ȥ����٤�
	
	      this.controls.staticMoving = false;
	      this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
	
	      this.controls.noRotate = false; //true�ǻ�ܞ�����򲻿ɤˤ���
	      this.controls.noZoom = false; //true�ǥ��`�������򲻿ɤˤ���
	      this.controls.noPan = true; //true�ǥѥ��β����򲻿ɤˤ���
	
	      this.controls.minDistance = 0; //���Ť������x����С��
	      this.controls.maxDistance = Infinity; //�h�����������x��������
	      // this.controls.maxDistance = 100; //�h�����������x��������
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