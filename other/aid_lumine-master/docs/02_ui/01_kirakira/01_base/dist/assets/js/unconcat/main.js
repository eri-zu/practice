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
	// import LoadMgr from 'View/Effects/Loading/Basic/Controller.es6';
	
	// import JudgeEnvironment from '_MyLibs/Util/JudgeEnvironment.es6';
	
	
	var _Conf = __webpack_require__(1);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(11);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	var _Debugger = __webpack_require__(12);
	
	var _Debugger2 = _interopRequireDefault(_Debugger);
	
	var _UpdateMgr = __webpack_require__(13);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(14);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(15);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(16);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _UpdateList = __webpack_require__(17);
	
	var _UpdateList2 = _interopRequireDefault(_UpdateList);
	
	var _ResizeList = __webpack_require__(18);
	
	var _ResizeList2 = _interopRequireDefault(_ResizeList);
	
	var _ScrollList = __webpack_require__(19);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
	var _MouseList = __webpack_require__(20);
	
	var _MouseList2 = _interopRequireDefault(_MouseList);
	
	var _ResourceMgr = __webpack_require__(21);
	
	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);
	
	var _UrlParamMgr = __webpack_require__(23);
	
	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);
	
	var _Profiler = __webpack_require__(26);
	
	var _Profiler2 = _interopRequireDefault(_Profiler);
	
	var _View = __webpack_require__(27);
	
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
	      // gb.lm = new LoadMgr();
	      gb.rm = new _ResourceMgr2.default();
	
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
	
	      this.cx = this.x - gb.r.haw;
	      this.cy = this.y - gb.r.hah;
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
/* 20 */
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
/* 21 */
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
	
	var _THREELoader = __webpack_require__(22);
	
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Keys = __webpack_require__(25);
	
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
/* 24 */
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
	    key: 'onU',
	    value: function onU() {
	
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
/* 25 */
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
	    'key': 'pattern',
	    'def': '1',
	    'value': ['1', '2']
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(28);
	
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(29);
	
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
	
	      this.timeline();
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        // gb.camera.timeline();
	
	      }, 1.0);
	    }
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene = __webpack_require__(30);
	
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
	
	      this.isRetina = false;
	
	      // renderer
	      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	      if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(gb.r.w, gb.r.h);
	      this.renderer.setClearColor(0xff0000, 1.0);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene2 = __webpack_require__(31);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Camera2 = __webpack_require__(32);
	
	var _Camera3 = _interopRequireDefault(_Camera2);
	
	var _Light2 = __webpack_require__(33);
	
	var _Light3 = _interopRequireDefault(_Light2);
	
	var _Objects = __webpack_require__(34);
	
	var _Objects2 = _interopRequireDefault(_Objects);
	
	var _Effect = __webpack_require__(50);
	
	var _Effect2 = _interopRequireDefault(_Effect);
	
	var _Control = __webpack_require__(51);
	
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
	
	      // obj???    
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
	      this.cameraC = gb.camera = new _Camera3.default(this.scene);
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
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
	
	    _this.scene = scene;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Camera, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      this.x = 0;
	      this.y = 0;
	      this.z = 10;
	      this.lookx = 0;
	      this.looky = 0;
	      this.lookz = 0;
	
	      this.fov = 45;
	      this.aspect = gb.r.w / gb.r.h;
	      this.near = 1;
	      this.far = 50000;
	
	      this.ready();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
	      this.camera.position.set(this.x, this.y, this.z);
	
	      // ピクセル等倍
	      this.setCameraByPixel();
	
	      this.updateFrustum();
	
	      this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
	      this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
	      this.depth = this.frustum.planes[4].constant + this.frustum.planes[5].constant;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.camera.lookAt(this.scene.position);
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
	    key: 'setCameraByPixel',
	    value: function setCameraByPixel() {
	
	      var fov = this.fov;
	      var vFOV = fov * (Math.PI / 180); // convert to radians
	      var vpHeight = gb.r.h; // viewport height;
	      var z = vpHeight / (2 * Math.tan(vFOV / 2));
	      gb.z = this.z = z;
	      this.camera.position.set(0, 0, z);
	      this.camera.lookAt(new THREE.Vector3());
	
	      log(z);
	
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
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setCameraByPixel();
	
	      // frustum
	      this.updateFrustum();
	
	      this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
	      this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
	      this.depth = this.frustum.planes[4].constant + this.frustum.planes[5].constant;
	    }
	  }]);
	
	  return Camera;
	}(_Base3.default);
	
	exports.default = Camera;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
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
	
	      this.isUEv = true;
	      this.isHelper = false;
	
	      this.isDirectional = true;
	      this.isAmbient = false;
	      this.isPoint = false;
	      this.isSpot = true;
	
	      // this.ready();
	
	      // this.add();
	
	      if (this.isHelper) this.addHelper();
	
	      // this.param();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // directional light
	      if (this.isDirectional) {
	        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	        this.directionalLight.position.z = -gb.camera.z / 5 * 3;
	        this.directionalLight.position.y = 0;
	      }
	
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
	      if (this.isSpot) {
	        this.spotLight = new THREE.SpotLight(0xfffffff);
	        this.spotLight.position.set(0, 0, gb.camera.z / 5 * 3);
	
	        this.spotLight.intensity = 10.5;
	        this.spotLight.distance = 0.0;
	        this.spotLight.angle = 0.3;
	        this.spotLight.penumbra = 0.5;
	        this.spotLight.decay = 1.0;
	
	        // spot light target
	        var target = new THREE.Object3D();
	        this.scene.add(target);
	        this.spotLight.target = target;
	      }
	
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
	
	      if (this.isDirectional) this.scene.add(this.directionalLight);
	
	      // this.scene.add(this.ambientLight);
	
	      // this.scene.add(this.pointLight01);
	      // this.scene.add(this.pointLight02);
	      // this.scene.add(this.pointLight03);
	      // this.scene.add(this.pointLight01, this.pointLight02, this.pointLight03);
	
	      if (this.isSpot) this.scene.add(this.spotLight);
	    }
	  }, {
	    key: 'addHelper',
	    value: function addHelper() {
	
	      // directional
	      if (this.isDirectional) {}
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
	      if (this.isSpot) {
	        this.slh = new THREE.SpotLightHelper(this.spotLight, '#ffffff');
	        this.scene.add(this.slh);
	      }
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(35);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(44);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _Array = __webpack_require__(49);
	
	var a = _interopRequireWildcard(_Array);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Objects
	//
	// ------------------------------------------------------------
	
	// basic objects
	
	
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
	
	      this.isUEv = true;
	
	      // ready
	      this.ready();
	
	      // add
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.makeNum = 0;
	      this.currentIntersected = null;
	
	      this.mouse = new THREE.Vector2();
	      this.mouseOld = new THREE.Vector2();
	      this.mousePoint = new THREE.Vector3();
	      this.mouseSpeed = { vx: 0, vy: 0, dis: 0 };
	
	      this.isDown = false;
	      this.particles = {};
	      this.types = ['cross', 'plus', 'cube', 'circle', 'square'];
	      // this.gender = 'man';
	      this.gender = 'woman';
	
	      this.base = { vx: 1, vy: 1, scale: .2 };
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.raycaster = new THREE.Raycaster();
	
	      // texture
	      this.textureCross = new THREE.TextureLoader().load('./assets/resource/img/cross.png');
	      this.texturePlus = new THREE.TextureLoader().load('./assets/resource/img/plus.png');
	      this.glow = new THREE.CanvasTexture(this.generateSprite());
	
	      var len = 15;
	      var path = './assets/resource/img/item/';
	      this.itemList = [];
	      for (var i = 0; i < len; i++) {
	        var tex = new THREE.TextureLoader().load(path + (i + 1) + '.png');
	        this.itemList.push(tex);
	      }
	
	      // plane
	      this.planeContainer = new THREE.Object3D();
	      this.plane = new THREE.Mesh(new THREE.PlaneGeometry(gb.r.w, gb.r.h, 1, 1), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1, depthTest: true }));
	      this.planeContainer.add(this.plane);
	      this.scene.add(this.planeContainer);
	      this.planeContainer.position.z = 0;
	
	      this.wrap = new THREE.Object3D();
	
	      var lineMaterial = new THREE.LineBasicMaterial({
	        transparent: true,
	        color: 0xffffff,
	        linejoin: "bevel",
	        linecap: "square",
	        linewidth: 1
	      });
	
	      var radius = 100,
	          segments = 64,
	          geometry = new THREE.CircleGeometry(1, segments);
	      geometry.vertices.shift();
	      geometry.computeLineDistances();
	
	      this.circle = new THREE.Line(geometry, lineMaterial);
	      this.circle.scale.x = this.base.scale;
	      this.circle.scale.y = this.base.scale;
	      this.wrap.add(this.circle);
	      this.scene.add(this.wrap);
	
	      this.circle.scale.x = this.circle.scale.y = 0.001;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // this.makeParticle('cross',this.mousePoint);
	
	      // intersects
	      this.raycaster.setFromCamera(this.mouse, this.camera);
	      var intersects = this.raycaster.intersectObjects(this.planeContainer.children, true);
	      if (intersects.length > 0) {
	        if (this.currentIntersected !== undefined) {}
	        this.currentIntersected = intersects[0].object;
	        var point = intersects[0].point;
	        this.mousePoint.set(point.x, point.y, point.z);
	      } else {
	        if (this.currentIntersected !== undefined) {}
	        this.currentIntersected = undefined;
	      }
	
	      // animation
	
	      // circle mouse trail
	      this.slidingMove(this.wrap, this.mousePoint, 0.3);
	
	      // particle update
	      for (var o in this.particles) {
	        this.particles[o].update();
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'show',
	    value: function show() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'makeParticle',
	    value: function makeParticle(type, position) {
	
	      var geo,
	          mat,
	          matOption = { depthTest: true, transparent: true, blending: THREE.AdditiveBlending },
	          offsets = { scale: 0.5, marginX: 0, marginY: 0, vx: 0, vy: 0, vr: Math.random() * 0.1, duration: 2000 };
	
	      switch (type) {
	        case 'cross':
	          geo = new THREE.PlaneGeometry(this.base.scale, this.base.scale, 1, 1);
	          matOption.map = this.textureCross;
	          break;
	        case 'plus':
	          geo = new THREE.PlaneGeometry(this.base.scale, this.base.scale, 1, 1);
	          matOption.map = this.texturePlus;
	          break;
	        case 'cube':
	          var geo = new THREE.BoxGeometry(this.base.scale, this.base.scale, this.base.scale, 1);
	          matOption.vertexColors = THREE.FaceColors;
	          for (var i = 0; i < geo.faces.length; i += 2) {
	            var hex = i % 6 == 0 ? 0xffffff : 0x64b0da;
	            geo.faces[i].color.setHex(hex);
	            geo.faces[i + 1].color.setHex(hex);
	          }
	          break;
	        case 'sphere':
	          var geo = new THREE.IcosahedronGeometry(this.base.scale, 0);
	          matOption.vertexColors = THREE.FaceColors;
	          for (var i = 0; i < geo.faces.length; i += 1) {
	            var hex = i % 3 == 0 ? 0xffffff : 0xfc6396;
	            geo.faces[i].color.setHex(hex);
	            // geo.faces[ i + 1 ].color.setHex( hex );
	          }
	          matOption.color = 0xffffff;
	          break;
	        case 'circle':
	          geo = new THREE.CircleGeometry(this.base.scale, 12);
	          matOption.color = 0xffffff;
	          break;
	
	        case 'square':
	          geo = new THREE.PlaneGeometry(this.base.scale, this.base.scale, 1, 1);
	          matOption.color = 0xffffff;
	          break;
	      }
	
	      // glow
	      // geo = new THREE.PlaneGeometry( this.base.scale * 4, this.base.scale * 4, 1,1);
	      // matOption.map = this.glow;
	
	      // item
	      // var r = Math.random();
	      // if (r<.5) {
	      //   geo = new THREE.PlaneGeometry( this.base.scale * 4, this.base.scale * 4, 1,1);
	      //   matOption.map = this.itemList[Math.floor(this.itemList.length*Math.random())];
	      // } else {
	      //   geo = new THREE.PlaneGeometry( this.base.scale * 4, this.base.scale * 4, 1,1);
	      //   matOption.map = this.glow;
	      // }
	
	      // log(matOption)
	
	      var self = this;
	      var mat = new THREE.MeshBasicMaterial(matOption);
	      var mesh = new THREE.Mesh(geo, mat);
	      var obj = {
	        name: 'particle_' + this.makeNum,
	        mesh: mesh,
	        id: this.makeNum,
	        isReady: false,
	        startTime: new Date().getTime(),
	        progress: 0,
	        progressR: 1,
	        duration: offsets.duration,
	        scale: 0,
	        x: position.x + offsets.marginX,
	        y: position.y + offsets.marginY,
	        z: position.z,
	        vr: offsets.vr,
	
	        // マウスとは正方向
	        vx: this.mouseSpeed.vx * .2,
	        vy: this.mouseSpeed.vy * .2,
	
	        // マウスとは逆方向
	        // vx:this.mouseSpeed.vx*0.4*-1,
	        // vy:this.mouseSpeed.vy*0.4*-1,
	
	        // random
	        // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
	        // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,
	
	        update: function update() {
	
	          if (type == 'cube' || type == 'sphere') {
	            this.mesh.rotation.x += this.vr;
	            this.mesh.rotation.y += this.vr;
	            // this.mesh.rotation.z += this.vr;
	          } else {
	            this.mesh.rotation.z += this.vr;
	          }
	          // this.x = self.mousePoint.x + this.vx;
	          // this.y = self.mousePoint.y + this.vy;
	
	          this.x += this.vx * self.base.vx * 100;
	          this.y += this.vy * self.base.vy * 100;
	
	          // 同じ位置に
	          // this.x = self.mousePoint.x;
	          // this.y = self.mousePoint.y;
	
	          // log(this.vx, this.vy);
	
	          this.scale = this.scale * this.progressR + 0.001;
	          // this.scale = (this.scale)+0.001;
	          // log(this.z);
	          this.mesh.position.set(this.x, this.y, this.z);
	          // this.mesh.position.set(this.x,this.y,gb.z * 2);
	          if (!this.isReady) return;
	          this.x += offsets.vx;
	          this.y += offsets.vy;
	          // this.z -= this.progress;
	          this.mesh.scale.x = this.scale * 100;
	          this.mesh.scale.y = this.scale * 100;
	          this.mesh.scale.z = this.scale * 100;
	          this.progress = (new Date().getTime() - this.startTime) / this.duration;
	          this.progressR = 1 - this.progress;
	          if (this.progress >= 1) {
	            delete self.particles[this.name];
	            self.scene.remove(obj.mesh);
	            delete this;
	          }
	        }
	      };
	      TweenLite.to(obj, 0.2, { scale: 1, ease: Back.easeOut, onComplete: function onComplete() {
	          obj.startTime = new Date().getTime();
	          obj.isReady = true;
	        } });
	
	      this.particles[obj.name] = obj;
	      obj.update();
	      this.scene.add(mesh);
	      this.makeNum++;
	      return obj;
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      aspect = window.innerWidth / window.innerHeight;
	      aspectW = aspect * 10;
	      aspectH = window.innerHeight / window.innerWidth;
	      camera.aspect = window.innerWidth / window.innerHeight;
	      camera.updateProjectionMatrix();
	      renderer.setSize(window.innerWidth, window.innerHeight);
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      e.preventDefault();
	      // this.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	      // this.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
	      this.mouse.x = gb.m.x / window.innerWidth * 2 - 1;
	      this.mouse.y = -(gb.m.y / window.innerHeight) * 2 + 1;
	      this.mouseSpeedUpdate();
	
	      if (this.isDown) {
	
	        var dis = Math.abs(this.mouseSpeed.dis);
	        // log(dis);
	        if (dis < 0.02) {} else if (dis > 0.02 && dis < 0.05) {
	          if (this.gender == 'woman') {
	            this.makeParticle('circle', this.mousePoint);
	          } else {
	            this.makeParticle('square', this.mousePoint);
	          }
	        } else if (dis > 0.05 && dis < 0.1) {
	          this.makeParticle('cross', this.mousePoint);
	        } else if (dis > 0.15 && dis < 0.2) {
	          this.makeParticle('plus', this.mousePoint);
	        } else {
	          if (this.gender == 'woman') {
	            this.makeParticle('sphere', this.mousePoint);
	          } else {
	            this.makeParticle('cube', this.mousePoint);
	          }
	        }
	
	        // var p = this.makeParticle('',this.mousePoint);
	        // this.makeParticle('cross',this.mousePoint);
	        // this.addLine(p.mesh.position);
	      }
	
	      this.mouseOld = this.mouse.clone();
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown() {
	      if (!this.isDown) {
	        TweenLite.to(this.circle.scale, 0.6, { x: 0.2 * 100, y: 0.2 * 100, ease: Back.easeOut });
	
	        this.makeParticle(this.types[Math.floor(this.types.length * Math.random())], this.mousePoint);
	      }
	      this.isDown = true;
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp() {
	      if (this.isDown) {
	        var scale = 0.001;
	        TweenLite.to(this.circle.scale, 0.6, { delay: 0.2, x: scale, y: scale, ease: Back.easeInOut });
	      }
	      this.isDown = false;
	    }
	  }, {
	    key: 'mouseSpeedUpdate',
	    value: function mouseSpeedUpdate() {
	      this.mouseSpeed.vx = this.mouse.x - this.mouseOld.x;
	      this.mouseSpeed.vy = this.mouse.y - this.mouseOld.y;
	      this.mouseSpeed.directionX = this.mouseSpeed.vx < 0 ? -1 : 1;
	      this.mouseSpeed.directionY = this.mouseSpeed.vy < 0 ? -1 : 1;
	      this.mouseSpeed.dis = Math.sqrt(this.mouseSpeed.vx * this.mouseSpeed.vx + this.mouseSpeed.vy * this.mouseSpeed.vy);
	    }
	  }, {
	    key: 'slidingMove',
	    value: function slidingMove(tg, pos, speed) {
	      tg.position.x += (pos.x - tg.position.x) * speed;
	      tg.position.y += (pos.y - tg.position.y) * speed;
	      tg.position.z += (pos.z - tg.position.z) * speed;
	    }
	  }, {
	    key: 'generateSprite',
	    value: function generateSprite() {
	
	      var canvas = document.createElement('canvas');
	      canvas.width = 32;
	      canvas.height = 32;
	
	      var context = canvas.getContext('2d');
	      var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
	      // gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
	      // gradient.addColorStop( 0.2, 'rgba(255,255,255,0.5)' );
	      // gradient.addColorStop( 0.4, 'rgba(255,255,255,0.1)' );
	      // gradient.addColorStop( 1, 'rgba(255,255,255,0.0)' );
	      // gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
	      // gradient.addColorStop( 0.2, 'rgba(255,50,0,1)' );
	      // gradient.addColorStop( 0.4, 'rgba(64,0,0,0.3)' );
	      // gradient.addColorStop( 1, 'rgba(64,0,0,0)' );
	      gradient.addColorStop(0, 'rgba(255,255,255,1)');
	      gradient.addColorStop(0.2, 'rgba(255,255,255,1)');
	      gradient.addColorStop(0.4, 'rgba(255,255,255,0.1)');
	      gradient.addColorStop(1, 'rgba(255,255,255,0)');
	
	      context.fillStyle = gradient;
	      context.fillRect(0, 0, canvas.width, canvas.height);
	
	      return canvas;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      _get(Objects.prototype.__proto__ || Object.getPrototypeOf(Objects.prototype), 'setEvents', this).call(this);
	
	      $(window).on('resize', this.onResize.bind(this));
	      $(window).on('mousemove touchmove', function (e) {
	        self.onMouseMove.call(self, e);
	      });
	      $(window).on('mousedown touchstart', this.onMouseDown.bind(this));
	      $(window).on('mouseup touchend', this.onMouseUp.bind(this));
	    }
	  }]);
	
	  return Objects;
	}(_Base3.default);
	
	exports.default = Objects;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(36);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(37);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	var _Particle = __webpack_require__(38);
	
	var _Particle2 = _interopRequireDefault(_Particle);
	
	var _Motion = __webpack_require__(39);
	
	var _Motion2 = _interopRequireDefault(_Motion);
	
	var _shader = __webpack_require__(40);
	
	var _shader2 = _interopRequireDefault(_shader);
	
	var _shader3 = __webpack_require__(42);
	
	var _shader4 = _interopRequireDefault(_shader3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller(scene, camera, renderer, len, index) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	    _this.index = index;
	    _this.len = len;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();   
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.prev = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.next = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.param = 0;
	      this.cnt = 0;
	
	      this.ready();
	
	      this.add();
	
	      this.m = new _Motion2.default(this);
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.positions = [];
	      this.colors = [];
	      this.num = 100;
	
	      this.easing = 0.03;
	      this.vRadius = 5;
	      this.zoff = 0;
	      this.t = 0;
	      this.vRotx = 0;
	      this.vRoty = 0;
	      this.vRotz = 0;
	      this.startRotx = 0;
	      this.startRoty = 0;
	      this.startRotz = 0;
	      this.rotPower = 0;
	
	      this.posRadS = 0;
	      this.posF = 0;
	      this.posFAdd = 0;
	      this.posRadius = 0;
	
	      this.ps = [];
	
	      this.geometry = new THREE.BufferGeometry();
	
	      this.uniforms = {
	        time: { type: 'f', value: 1.0 },
	        frame: { type: 'f', value: 0.0 },
	        resolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        // imageResolution: {type: 'v2', value: new THREE.Vector2(texture.image.width, texture.image.height)},
	        mouse: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
	        opacity: { type: 'f', value: 1.0 },
	
	        power: { type: 'f', value: 0.0 }
	      };
	      var mat = new THREE.ShaderMaterial({ vertexShader: _shader2.default, fragmentShader: _shader4.default, uniforms: this.uniforms, transparent: true, blending: THREE.AdditiveBlending, vertexColors: THREE.VertexColors });
	
	      // gemetryの頂点セット
	      this.setVertex();
	
	      // オブジェクト生成
	      this.mesh = new THREE.Points(this.geometry, mat);
	      this.mesh.position.z = 0;
	      this.mesh.material.opacity = 1;
	
	      // this.mesh.position.y = (this.index - this.len / 2) * 5 + 2.5;
	      this.mesh.position.defy = this.mesh.position.y = (this.index - this.len / 2) * 5;
	      this.prev.pos.y = this.next.pos.y = this.mesh.position.y;
	      if (this.index % 2 == 0) this.mesh.visible = false;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.mesh);
	    }
	  }, {
	    key: 'setVertex',
	    value: function setVertex() {
	
	      this.positions = new Float32Array(this.num * 3);
	      this.colors = new Float32Array(this.num * 3);
	
	      this.v = new _Val2.default();
	
	      var startRad = this.index / this.len * Math.PI * 0.1;
	      // var radius = 30 * Math.sin(this.index/this.len * Math.PI + Math.PI / this.len / 2);
	
	      var r = this.len * 5 / 2;
	      this.maxradius = r;
	      var half = Math.floor(this.len / 2);
	      var val = Math.abs(half - this.index);
	      var tate = val * r / half;
	      var radius = Math.pow(r, 2) - Math.pow(tate, 2);
	      this.next.radius = this.prev.radius = radius = Math.sqrt(radius);
	      if (radius == 0) radius = 10;
	
	      // var r = this.len * 5 / 2;
	      // var val = 0.5 - Math.abs((this.len/2 - this.index) / this.len);
	      // var radius = val * r * 2;
	
	      log(radius, val);
	
	      for (var i = 0; i < this.num; i++) {
	
	        var param = {
	          x: m.range(40) * 0.5 * Math.random(),
	          y: m.range(40) * 0.5 * Math.random(),
	          z: 0,
	
	          radian: startRad + i / this.num * Math.PI * 2, vradian: this.prev.vradian, radius: radius, defRadius: radius,
	          radian2: m.radian(Math.random() * 360) * 0.3,
	          rad: m.radian(360 * 360 * i / this.num), rad2: m.radian(360 * i / this.num),
	          vRad: m.radian(0.4 + Math.random() * 0.5),
	          r: 35,
	
	          rotateX: 0, rotateY: 0, rotateZ: 0,
	
	          noise: this.v.noise(0, i * 1000),
	
	          stepX: 0, stepY: 0
	        };
	
	        var p = new _Particle2.default(param);
	        this.ps.push(p);
	
	        // positions
	        this.positions[i * 3] = this.ps[i].x;
	        this.positions[i * 3 + 1] = this.ps[i].y;
	        this.positions[i * 3 + 2] = this.ps[i].z;
	
	        var color = new THREE.Color('#009fe7');
	        this.colors[i * 3] = color.r;
	        this.colors[i * 3 + 1] = color.g;
	        this.colors[i * 3 + 2] = color.b;
	      };
	
	      this.geometry.addAttribute('position', new THREE.BufferAttribute(this.positions, 3));
	      this.geometry.addAttribute('color', new THREE.BufferAttribute(this.colors, 3));
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // 頂点
	      this.m.updateCircle();
	      // this.m.updateCircleSize(); // サイズ変更
	      // this.m.updateSphere(); // 球体
	      // this.m.updateRandomWalk(); // ランダムウォーク
	      // this.m.updateGunya(); // ランダムウォーク
	
	
	      // mesh
	
	      // pos
	      // var x = m.lerp(this.prev.pos.x, this.next.pos.x, this.param);
	      // var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      // var z = m.lerp(this.prev.pos.z, this.next.pos.z, this.param);
	      this.posF += this.posFAdd;
	      var x = m.lerp(Math.cos(this.posRadS + this.posF) * this.posRadius, Math.cos(this.posRadS + this.posF) * this.posRadius, this.param);
	      var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      var z = m.lerp(Math.sin(this.posRadS + this.posF) * this.posRadius, Math.sin(this.posRadS + this.posF) * this.posRadius, this.param);
	      this.mesh.position.set(x, y, z);
	      // rotation
	      this.vRotx += 0.01 * this.rotPower;
	      this.vRoty += 0.01 * this.rotPower;
	      this.vRotz += 0.01 * this.rotPower;
	      var rotx = m.lerp(this.prev.rot.x, this.next.rot.x, this.param) + this.vRotx;
	      var roty = m.lerp(this.prev.rot.y, this.next.rot.y, this.param) + this.vRoty;
	      var rotz = m.lerp(this.prev.rot.z, this.next.rot.z, this.param) + this.vRotz;
	      // this.mesh.rotation.set(this.startRotx + this.rotx,this.startRoty + this.roty,this.startRotz + this.rotz);
	      this.mesh.rotation.set(rotx, roty, rotz);
	      // radius
	      var radius = m.lerp(this.prev.radius, this.next.radius, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.radius = radius;
	      }
	      // radian 点々の回転するスピード
	      var vradian = m.lerp(this.prev.vradian, this.next.vradian, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.vradian = vradian;
	      }
	
	      // if (gb.up.frame%30==0) {
	      //   log(this.vRotx, this.rotPower);
	      //   log(rotx);
	      // }
	
	      this.uniforms.frame.value = gb.up.frame / 100.0;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline_def',
	    value: function timeline_def(index) {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        TweenMax.to(_this2.mesh.position, 1.0, {
	          y: _this2.mesh.position.defy,
	          ease: Expo.easeInOut
	        });
	
	        // radius
	        for (var i = 0; i < _this2.ps.length; i++) {
	          var p = _this2.ps[i];
	
	          TweenMax.to(p, 1.0, {
	            radius: p.defRadius,
	            ease: Expo.easeInOut
	          });
	        }
	
	        TweenMax.to(_this2, 2.0, {
	          t: 0,
	          rotx: 0,
	          roty: 0,
	          rotz: 0,
	          ease: Expo.easeInOut
	        });
	      }, 0.0);
	    }
	  }, {
	    key: 'tweenParamTo0',
	    value: function tweenParamTo0() {
	
	      TweenMax.to(this, 1.2, {
	        param: 1,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'tweenParamTo1',
	    value: function tweenParamTo1() {
	
	      TweenMax.to(this, 1.2, {
	        param: 0,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset(index) {
	
	      TweenMax.to(this.uniforms.power, 0.9, { value: 0.0, ease: Power2.easeInOut });
	
	      TweenMax.to(this, 0.9, { rotPower: 0.0, ease: Power2.easeInOut });
	      TweenMax.to(this, 0.95, { vRotx: 0, vRoty: 0, vRotz: 0, ease: Power2.easeInOut });
	
	      TweenMax.to(this, 0.9, { posRadS: 0, ease: Power2.easeInOut });
	      TweenMax.to(this, 0.9, { posFAdd: 0, ease: Power2.easeInOut });
	      TweenMax.to(this, 0.9, { posRadius: 0, ease: Power2.easeInOut });
	
	      // if (index%2==1) {
	
	      TweenMax.to(this.prev.rot, 0.9, { x: 0, y: 0, z: 0, ease: Power2.easeInOut });
	      TweenMax.to(this.prev, 0.9, { radius: this.ps[this.index].defRadius, ease: Power2.easeInOut });
	      TweenMax.to(this.prev.pos, 0.9, { y: this.mesh.position.defy, ease: Power2.easeInOut });
	
	      // } else  {
	
	      TweenMax.to(this.next.rot, 0.9, { x: 0, y: 0, z: 0, ease: Power2.easeInOut });
	      TweenMax.to(this.next, 0.9, { radius: this.ps[this.index].defRadius, ease: Power2.easeInOut });
	      TweenMax.to(this.next.pos, 0.9, { y: this.mesh.position.defy, ease: Power2.easeInOut });
	
	      // }
	    }
	  }, {
	    key: 'switch',
	    value: function _switch(cur, index) {
	      var _this3 = this;
	
	      // rotation
	      if (cur == 1) {
	
	        if (index % 2 == 1) {
	          // pos
	          this.prev.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.5, ease: Power2.easeInOut });
	          TweenMax.to(this.prev.rot, 2.5, { x: this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.prev.rot, 2.5, { y: this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.prev.rot, 2.5, { z: this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // 綺麗に1,2回転
	          // this.prev.rot.x = 0.00;
	          // this.prev.rot.y = 0.00;
	          // this.prev.rot.z = 0.00;
	          // TweenMax.to(this, 2.5, {startRotx: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRoty: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRotz: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // radius
	          // this.prev.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.prev.radius = this.maxradius;
	          // vradian
	          // this.prev.vradian = 0.001 + (Math.random()-0.5)*0.005;
	
	
	          var tl = new TimelineMax();
	          tl.add(function () {
	            _this3.yokuyou();
	          }, 3.0);
	        } else {
	          // pos
	          this.next.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.5, ease: Power2.easeInOut });
	          TweenMax.to(this.next.rot, 2.5, { x: this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.next.rot, 2.5, { y: this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.next.rot, 2.5, { z: this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // 綺麗に1,2回転
	          // this.next.rot.x = 0.00;
	          // this.next.rot.y = 0.00;
	          // this.next.rot.z = 0.00;
	          // TweenMax.to(this, 2.5, {startRotx: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRoty: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRotz: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // radius
	          // this.next.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.next.radius = this.maxradius;
	          // vradian
	          // this.next.vradian = 0.001 + (Math.random()-0.5)*0.005;
	
	
	          var tl = new TimelineMax();
	          tl.add(function () {
	            _this3.yokuyou();
	          }, 3.0);
	        }
	      }
	    }
	  }, {
	    key: 'yokuyou',
	    value: function yokuyou() {
	      var _this4 = this;
	
	      var r = Math.random();
	
	      // speed止める
	      if (r < 0.3) {
	
	        // TweenMax.to(this, 2.0, {startRotx: 0, startRoty: 0, startRotz: 0, ease: Expo.easeInOut,})
	
	        // speed早める
	      } else if (r < 1.0) {
	
	        // var x = '+=' + Math.PI * 2;
	        // var y = '+=' + Math.PI * 2;
	        // var z = '+=' + Math.PI * 2;
	        // TweenMax.to(this, 2.0, {startRotx: x,startRoty: y,startRotz: z, ease: Power2.easeInOut})
	
	        // speed何もしない
	      } else if (r < 1.0) {}
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this4.yokuyou();
	      }, 3000 + Math.random() * 3000);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.random = random;
	exports.randomInt = randomInt;
	exports.lerp = lerp;
	exports.range = range;
	exports.radian = radian;
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
	
	function lerp(val01, val02, val) {
	
	  val = val < 0 ? 0 : val;
	  val = val > 1 ? 1 : val;
	  return val01 + (val02 - val01) * val;
	}
	
	// 0から範囲内でランダムな整数を取得
	// -----------------------------------
	// @val : 範囲(int)
	// return : ランダムな整数(int)
	// -----------------------------------
	function range(val) {
	
	  return this.randomInt(-val, val);
	}
	
	// to radians
	function radian(angle) {
	
	  return angle * Math.PI / 180; //1度何ラジアンか
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Ticker
	//
	// ------------------------------------------------------------
	
	var Val = function () {
	  function Val() {
	    _classCallCheck(this, Val);
	
	    this.lastValue_val06 = 0;
	
	    // this.p = new ImprovedNoise();
	  }
	
	  _createClass(Val, [{
	    key: "val",
	    value: function val() {
	
	      return Math.random();
	    }
	
	    // from: https://ics.media/entry/11292
	    // 乱数の乗算 – ゼロ付近の割合を多くする
	
	  }, {
	    key: "val01",
	    value: function val01() {
	
	      return Math.random() * Math.random();
	    }
	
	    // 乱数の2乗 – ゼロ付近の割合をさらに多くする
	
	  }, {
	    key: "val02",
	    value: function val02() {
	
	      var r = Math.random();
	
	      return r * r;
	    }
	
	    // 乱数の平方根。出現頻度が0.0から1.0まで直線的に増えていく
	
	  }, {
	    key: "val03",
	    value: function val03() {
	
	      return Math.sqrt(Math.random());
	    }
	
	    // from: http://fladdict.net/exp/random/
	    // 過去2フレームに、距離○○%以内の重複数が出ないようになっている。
	
	  }, {
	    key: "val04",
	    value: function val04() {
	      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.33;
	
	
	      var val = Math.random();
	
	      while (Math.abs(this.lastValue - val) < distance && Math.abs(this.lastValue2 - val) < distance) {
	        val = Math.random();
	      }
	
	      this.lastValue2 = this.lastValue;
	      this.lastValue = val;
	
	      return val;
	    }
	
	    // コクのある乱数
	
	  }, {
	    key: "val05",
	    value: function val05() {
	      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6.0;
	
	
	      var r = 0;
	
	      for (var i = 0; i < num; i++) {
	        r += Math.random();
	      }
	
	      r = r / num;
	
	      return r;
	    }
	
	    // 芳醇なまろ味を出した乱数
	    // noise関数に比べて、より繊細で幅のある味
	
	  }, {
	    key: "val06",
	    value: function val06() {
	      var interpolation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.8;
	
	
	      this.lastValue_val06 = this.lastValue_val06 * interpolation + Math.random() * (1 - interpolation);
	      return this.lastValue_val06;
	    }
	
	    // need: perlin.js
	    // out -1 〜 1
	    // ex noise.simplex2(0.01, gb.in.up.frame/100);
	
	  }, {
	    key: "noise",
	    value: function (_noise) {
	      function noise(_x) {
	        return _noise.apply(this, arguments);
	      }
	
	      noise.toString = function () {
	        return _noise.toString();
	      };
	
	      return noise;
	    }(function (t) {
	      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
	
	
	      return noise.simplex2(p, t);
	    })
	
	    // need: ImprovedNoise.js three.jsのlibrary
	    // out -0.5 〜 0.5 じゃっかん、0.5を超えるときがある
	
	  }, {
	    key: "noise2",
	    value: function noise2(t) {
	      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
	      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.08;
	
	
	      return this.p.noise(t, x, y);
	    }
	  }, {
	    key: "noise3",
	    value: function noise3(t) {
	      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
	      var p2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
	
	
	      return noise.simplex3(p, p2, t);
	    }
	  }, {
	    key: "sin",
	    value: function sin(t) {
	
	      return Math.sin(t);
	    }
	
	    // from: https://medium.com/@gordonnl/the-ocean-170fdfd659f1
	
	  }, {
	    key: "sin2",
	    value: function sin2(t) {
	
	      return Math.sin(t) + Math.sin(t * 2);
	    }
	  }, {
	    key: "sin3",
	    value: function sin3(t) {
	
	      return (Math.sin(t) + Math.sin(2.2 * t + 5.52) + Math.sin(2.9 * t + 0.93) + Math.sin(4.6 * t + 8.94)) / 4;
	    }
	
	    // from: https://ics.media/entry/11292
	    // normal distribution / 正規分布
	
	  }, {
	    key: "normal",
	    value: function normal() {
	
	      // 0.0未満、1.0以上になるケースがあるため
	      // その時は再計算を行う
	      var v;
	      while (true) {
	        v = this.calcNormal();
	        if (0 <= v && v < 1) {
	          break;
	        }
	      }
	
	      return v;
	    }
	  }, {
	    key: "calcNormal",
	    value: function calcNormal() {
	
	      // 正規乱数
	      var r1 = Math.random();
	      var r2 = Math.random();
	      var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
	      // 値を0以上1未満になるよう正規化する
	      value = (value + 3) / 6;
	      return value;
	    }
	  }, {
	    key: "sign",
	    value: function sign() {
	
	      return Math.random() < 0.5 ? 1 : -1;
	    }
	
	    // 時々、かなり飛ぶ
	
	  }, {
	    key: "montecarlo",
	    value: function montecarlo() {
	
	      var r1 = Math.random();
	      var probability = Math.pow(1.0 - r1, 8);
	
	      var r2 = Math.random();
	      if (r2 < probability) {
	        return r1;
	      }
	
	      return 0;
	    }
	  }]);
	
	  return Val;
	}();
	
	exports.default = Val;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Particle
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(36);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(37);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Particle = function () {
	  function Particle(param) {
	    _classCallCheck(this, Particle);
	
	    this.x = param.x || 0;
	    this.y = param.y || 0;
	    this.z = param.z || 0;
	
	    this.defx = m.range(100) * Math.random();
	    this.defy = m.range(70) * Math.random();
	    this.defz = 0;
	
	    this.vx = 0;
	    this.vy = 0;
	    this.vz = 0;
	
	    // circle用
	    this.radian = param.radian || 0;
	    this.radian2 = param.radian2 || 0;
	    this.vradian = param.vradian || 0;
	    this.radius = param.radius || 0;
	    this.defRadius = param.defRadius || 0;
	
	    // sphere用
	    this.rad = param.rad || 0;
	    this.rad2 = param.rad2 || 0;
	    this.vRad = param.vRad || 0;
	    this.r = param.r || 0;
	
	    this.minDis = 3;
	
	    this.rotateX = param.rotateX || 0;
	    this.rotateY = param.rotateY || 0;
	    this.rotateZ = param.rotateZ || 0;
	
	    this.noise = param.noise || 0;
	    this.v = new _Val2.default();
	    this.seed = 10000 * Math.random();
	    this.stepX = param.stepX || 0;
	    this.stepY = param.stepY || 0;
	
	    this.step = 5 + Math.random() * 8;
	
	    this.top = -70;
	    this.right = 130;
	    this.bottom = 70;
	    this.left = -130;
	
	    this.defRight = 130;
	    this.defLeft = -130;
	
	    this.isEasingStop = false;
	  }
	
	  _createClass(Particle, [{
	    key: 'wavy',
	    value: function wavy(gx, gy, gz, vRadian) {
	
	      var step = this.noise.getPerlin() * 2;
	
	      var obj = {
	        x: Math.sin(this.radian2 + vRadian) * step + Math.sin(this.radian2 + vRadian) * step,
	        y: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step,
	        z: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step
	      };
	
	      this.x += (gx - this.x) * 0.1;
	      this.y += (gy - this.y) * 0.1;
	      this.z += (gz - this.z) * 0.1;
	
	      return obj;
	    }
	  }, {
	    key: 'gunya',
	    value: function gunya(vRadian, zoff) {
	
	      var angle = Math.PI * 6 * this.v.noise3(Math.abs(this.x / 1500), Math.abs(this.y / 1500), zoff);
	      this.vx = Math.cos(angle) * this.step * 0.087;
	      this.vy = Math.sin(angle) * this.step * 0.087;
	      this.vz = Math.cos(this.radian + vRadian) * 3 + Math.cos(this.radian + vRadian) * 3;
	
	      this.x += this.vx;
	      this.y += this.vy;
	
	      // wavy
	      var step = this.v.noise(gb.up.frame / 100, this.seed) * 0.1;
	      var wavy = {
	        x: Math.sin(this.radian + vRadian) * step + Math.sin(this.radian + vRadian) * step,
	        y: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step,
	        z: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step
	      };
	
	      this.x += wavy.x;
	      this.y += wavy.y;
	    }
	  }, {
	    key: 'sphere',
	    value: function sphere(vRadian) {
	
	      // spehre
	      this.rad += this.vRad;
	      this.rad2 += this.vRad;
	
	      // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * this.r;
	      // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * this.r;
	      // this.gz = Math.sin(this.rad) * this.r;
	      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
	      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
	      this.gz = Math.sin(this.rad) * 30;
	
	      // wavy
	      var step = this.v.noise(gb.up.frame / 100, this.seed) * 0.1;
	      var wavy = {
	        x: Math.sin(this.radian + vRadian) * step + Math.sin(this.radian + vRadian) * step,
	        y: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step,
	        z: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step
	      };
	
	      this.x += (this.gx - this.x) * 0.1 + wavy.x;
	      this.y += (this.gy - this.y) * 0.1 + wavy.y;
	      this.z += (this.gz - this.z) * 0.1 + wavy.z;
	    }
	  }, {
	    key: 'boundary',
	    value: function boundary() {
	
	      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
	        return true;
	      }
	
	      return false;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Motion
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(36);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(37);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Motion = function () {
	  function Motion(parent) {
	    _classCallCheck(this, Motion);
	
	    this.p = parent;
	    this.v = new _Val2.default();
	  }
	
	  // ------------------------------------------------------------
	  // circle
	  // ------------------------------------------------------------
	
	
	  _createClass(Motion, [{
	    key: 'setupUpdateCircle',
	    value: function setupUpdateCircle() {
	
	      var x, y;
	      var w = gb.r.w,
	          h = gb.r.h;
	      var radius = 0,
	          radiusOut = 0,
	          radiusIn = 0,
	          radian = 0,
	          step = 0;
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var c = 0.65;
	        if (i < this.p.num / 2) var r = 0.05;else var r = 0.03 + 0.01 * Math.random();
	
	        radiusOut = Math.min(w, h) * (c + r);
	        radiusIn = Math.min(w, h) * (c - r);
	
	        radius = i % 2 == 0 ? radiusOut : radiusIn;
	        step = 3 + Math.random() * 5;
	        radian = m.radian(i + step);
	        x = Math.sin(radian) * radius;
	        y = Math.cos(radian) * radius;
	
	        this.p.ps[i].x = x;
	        this.p.ps[i].y = y;
	        this.p.ps[i].radian = radian;
	        this.p.ps[i].vradian = step;
	        this.p.ps[i].radius = radius;
	      };
	    }
	  }, {
	    key: 'updateCircle',
	    value: function updateCircle() {
	
	      var sin = this.p.v.sin(gb.up.frame / 100);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var radian = p.radian += p.vradian;
	        // var radius = p.radius = 50 + sin * 10;
	        var radius = p.radius;
	
	        this.p.positions[i * 3 + 0] = Math.cos(radian) * radius;
	        this.p.positions[i * 3 + 1] = 0;
	        this.p.positions[i * 3 + 2] = Math.sin(radian) * radius;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // size
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateCircleSize',
	    value: function updateCircleSize() {
	
	      var size = this.v.noise(gb.up.frame / 500) * 10;
	      this.p.mesh.material.size = size;
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // sphere
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateSphere',
	    value: function updateSphere() {
	
	      var vRadian = m.radian(gb.up.frame * 2.6);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        // update
	        p.sphere(vRadian);
	
	        // draw
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // random walk
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateRandomWalk',
	    value: function updateRandomWalk() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var stepx = m.range(1);
	        var stepy = m.range(1);
	
	        // var stepsize = this.v.montecarlo()*10;
	        var stepsize = this.v.montecarlo() * Math.random() * 10;
	        stepx *= stepsize;
	        stepy *= stepsize;
	
	        p.x += stepx;
	        p.y += stepy;
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // gunya
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setupGunya',
	    value: function setupGunya() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.x = m.range(40) * 0.5 * Math.random();
	        p.y = m.range(40) * 0.5 * Math.random();
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	    }
	  }, {
	    key: 'resetGunya',
	    value: function resetGunya(i) {
	
	      var p = this.p.ps[i];
	
	      // p.x = gb.in.u.range(100)*Math.random();
	      // p.y = gb.in.u.range(70)*Math.random();
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+1];
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+1];
	      // p.z = 0;
	
	      p.x = m.range(gb.r.w / 2) * Math.random();
	      p.y = m.range(gb.r.h / 2) * Math.random();
	      p.z = 0;
	
	      this.p.positions[i * 3 + 0] = p.x;
	      this.p.positions[i * 3 + 1] = p.y;
	      this.p.positions[i * 3 + 2] = p.z;
	    }
	    // ぐにゃぐにゃ
	
	  }, {
	    key: 'updateGunya',
	    value: function updateGunya() {
	
	      var vRadian = m.radian(gb.up.frame * 2);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.gunya(vRadian, this.p.zoff);
	        if (p.boundary()) this.resetGunya(i);
	
	        // if (i < this.p.num/4) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = -70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4 && i < this.p.num/4*2 ) {
	
	        //   this.p.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*2 && i < this.p.num/4*3 ) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = 70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*3 && i < this.p.num ) {
	
	        //   this.p.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	
	      this.p.zoff += 0.002;
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	  }]);
	
	  return Motion;
	}();
	
	exports.default = Motion;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(41) + "\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_2_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_2_1(vec4 x) {\n     return mod289_2_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_2_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_2_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_2_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_2_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_2_5;\n  vec3 i1 = min( g_2_5.xyz, l.zxy );\n  vec3 i2 = max( g_2_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_2_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_2_0(i);\n  vec4 p = permute_2_1( permute_2_1( permute_2_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_2_4.wyz - D_2_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_2_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_2_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_2_6.xy,h.z);\n  vec3 p3 = vec3(a1_2_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_2_2(vec4(dot(p0_2_7,p0_2_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_2_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_2_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nvec3 snoiseVec3_1_8( vec3 x ){\n\n  float s  = snoise_2_3(vec3( x ));\n  float s1 = snoise_2_3(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise_2_3(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\n\nvec3 curlNoise_1_9( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3_1_8( p - dx );\n  vec3 p_x1 = snoiseVec3_1_8( p + dx );\n  vec3 p_y0 = snoiseVec3_1_8( p - dy );\n  vec3 p_y1 = snoiseVec3_1_8( p + dy );\n  vec3 p_z0 = snoiseVec3_1_8( p - dz );\n  vec3 p_z1 = snoiseVec3_1_8( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\nuniform float power;\n\nvoid main() {\n  \n\n\tvec3 pos = position;\n\t\n\n\t// motion curl  \n\t  // 大きい移動を作る\n\t// float noise1 = cnoise3(\n\tvec3 noise1 = curlNoise_1_9(\n\t    vec3(\n\t      pos.x * 0.006 + frame * 0.1,\n\t      pos.y * 0.012,\n\t      pos.z * 0.006\n\t    )\n\t  );\n\t// float noise2 = cnoise3(\n\tvec3 noise2 = curlNoise_1_9(\n\t    vec3(\n\t      pos.x * 0.02,\n\t      pos.y * 0.016 + frame * 0.05,\n\t      pos.z * 0.02\n\t    )\n\t  );\n\n\n\t// pos\n\tfloat dis = length(pos);\n\tpos.y = pos.y + sin(dis * 0.15 + frame*3.0) * 3.0 * power;\n\t// pos.y += sin(pos.x * 0.1 + frame*0.001) * 5.0;\n\tvec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n\t// vec4 noisePosition = vec4(pos * 2.0 + (normalize(pos) * (300.0 * noise1)), 1.0);\n\t// vec4 noisePosition = vec4(pos + (normalize(pos) * (5.0 * noise1)), 1.0);\n\t// vec4 mvPosition = modelViewMatrix * noisePosition;\n\n\t// size\n\t// float distanceFromCamera = 500.0 / length(mvPosition.xyz);\n\t// float distanceFromCamera = 6.0;\n\tfloat distanceFromCamera = 3.0;\n\n\tvColor = color;\n\tvPos = (projectionMatrix * mvPosition).xyz;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\tgl_PointSize = distanceFromCamera;\n\n}\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;\n\n// // func\n// #pragma glslify: map = require(glsl-map)\n// #pragma glslify: random = require(glsl-random)\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n\n// // easing\n// #pragma glslify: ease = require(glsl-easings/back-in-out) \n// #pragma glslify: ease = require(glsl-easings/back-in) \n// #pragma glslify: ease = require(glsl-easings/back-out) \n// #pragma glslify: ease = require(glsl-easings/bounce-in-out) \n// #pragma glslify: ease = require(glsl-easings/bounce-in) \n// #pragma glslify: ease = require(glsl-easings/bounce-out) \n// #pragma glslify: ease = require(glsl-easings/circular-in-out) \n// #pragma glslify: ease = require(glsl-easings/circular-in) \n// #pragma glslify: ease = require(glsl-easings/circular-out) \n// #pragma glslify: ease = require(glsl-easings/cubic-in-out) \n// #pragma glslify: ease = require(glsl-easings/cubic-in) \n// #pragma glslify: ease = require(glsl-easings/cubic-out) \n// #pragma glslify: ease = require(glsl-easings/elastic-in-out) \n// #pragma glslify: ease = require(glsl-easings/elastic-in) \n// #pragma glslify: ease = require(glsl-easings/elastic-out) \n// #pragma glslify: ease = require(glsl-easings/exponential-in-out) \n// #pragma glslify: ease = require(glsl-easings/exponential-in) \n// #pragma glslify: ease = require(glsl-easings/exponential-out) \n// #pragma glslify: ease = require(glsl-easings/linear) \n// #pragma glslify: ease = require(glsl-easings/quadratic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quadratic-in) \n// #pragma glslify: ease = require(glsl-easings/quadratic-out) \n// #pragma glslify: ease = require(glsl-easings/quartic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quartic-in) \n// #pragma glslify: ease = require(glsl-easings/quartic-out) \n// #pragma glslify: ease = require(glsl-easings/quintic-in-out) \n// #pragma glslify: ease = require(glsl-easings/quintic-in) \n// #pragma glslify: ease = require(glsl-easings/quintic-out) \n// #pragma glslify: ease = require(glsl-easings/sine-in-out) \n// #pragma glslify: ease = require(glsl-easings/sine-in) \n// #pragma glslify: ease = require(glsl-easings/sine-out) \n\n// const float interval = 5.0;\n\n// void main() {\n\n//   float now = mod(time, interval);\n//   float val = now / interval; // intervalの時間ごとに、0 〜 1 \n\n//   // このグラフ頭の中でイメージできたいいな。 0から1にすぐなって、1が続き、0.8秒地点から0になって、0.1秒0が続く、それが再度繰り返される\n//   float val = (smoothstep(0.0, 0.1, now / interval) * (1.0 - smoothstep(0.8, 0.9, now / interval)));\n\n// }"

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(43) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\nfloat map_2_8(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_2_8(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_2_8(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_2_8(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\n\n#define PI 3.1415926535897932384626433832795\n\nvoid main() {\n\n  // Round the point\n  vec3 n;\n  n.xy = gl_PointCoord * 2.0 - 1.0;\n  n.z = 1.0 - dot(n.xy, n.xy);\n  if (n.z < 0.0) discard;\n\n  float op = map_2_8(sin(PI / 2.0 + vPos.x * 0.01 + frame*1.5), -1.0, 1.0, 0.0, 1.0);\n\n  gl_FragColor = vec4(vColor, op);\n  \n}\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n// useful uniform\nuniform float time;\nuniform float frame;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 mouse;\nuniform sampler2D texture;\n\n// useful attributte\n\n// useful varying\nvarying vec2 vUv;"

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(36);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(37);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	var _Particle = __webpack_require__(45);
	
	var _Particle2 = _interopRequireDefault(_Particle);
	
	var _Motion = __webpack_require__(46);
	
	var _Motion2 = _interopRequireDefault(_Motion);
	
	var _shader = __webpack_require__(47);
	
	var _shader2 = _interopRequireDefault(_shader);
	
	var _shader3 = __webpack_require__(48);
	
	var _shader4 = _interopRequireDefault(_shader3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller(scene, camera, renderer, len, index) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	    _this.index = index;
	    _this.len = len;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();   
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.prev = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.next = {
	        pos: new THREE.Vector3(),
	        rot: new THREE.Vector3(),
	        radius: null,
	        vradian: 0.001
	      };
	      this.param = 0;
	      this.cnt = 0;
	
	      this.ready();
	
	      this.add();
	
	      this.m = new _Motion2.default(this);
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.positions = [];
	      this.colors = [];
	      this.num = 100;
	
	      this.easing = 0.03;
	      this.vRadius = 5;
	      this.zoff = 0;
	      this.t = 0;
	      this.vRotx = 0;
	      this.vRoty = 0;
	      this.vRotz = 0;
	      this.startRotx = 0;
	      this.startRoty = 0;
	      this.startRotz = 0;
	      this.rotPower = 0;
	
	      this.posRadS = 0;
	      this.posF = 0;
	      this.posFAdd = 0;
	      this.posRadius = 0;
	
	      this.ps = [];
	
	      this.geometry = new THREE.BufferGeometry();
	
	      this.uniforms = {
	        time: { type: 'f', value: 1.0 },
	        frame: { type: 'f', value: 0.0 },
	        resolution: { type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h) },
	        // imageResolution: {type: 'v2', value: new THREE.Vector2(texture.image.width, texture.image.height)},
	        mouse: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
	        opacity: { type: 'f', value: 1.0 },
	
	        power: { type: 'f', value: 0.0 }
	      };
	      var mat = new THREE.ShaderMaterial({ vertexShader: _shader2.default, fragmentShader: _shader4.default, uniforms: this.uniforms, transparent: true, blending: THREE.AdditiveBlending, vertexColors: THREE.VertexColors });
	
	      // gemetryの頂点セット
	      this.setVertex();
	
	      // オブジェクト生成
	      this.mesh = new THREE.Points(this.geometry, mat);
	      this.mesh.position.z = 0;
	      this.mesh.material.opacity = 1;
	
	      // this.mesh.position.y = (this.index - this.len / 2) * 5;
	      this.mesh.position.defy = this.mesh.position.y = (this.index - this.len / 2) * 5;
	      if (this.index % 2 == 1) this.mesh.visible = false;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.scene.add(this.mesh);
	    }
	  }, {
	    key: 'setVertex',
	    value: function setVertex() {
	
	      this.positions = new Float32Array(this.num * 3);
	      this.colors = new Float32Array(this.num * 3);
	
	      this.v = new _Val2.default();
	
	      var startRad = this.index / this.len * Math.PI * 0.3;
	      // var radius = 30 * Math.sin(this.index/this.len * Math.PI);
	
	      var r = this.len * 5 / 2;
	      this.maxradius = r;
	      var half = Math.floor(this.len / 2);
	      var val = Math.abs(half - this.index);
	      var tate = val * r / half;
	      var radius = Math.pow(r, 2) - Math.pow(tate, 2);
	      this.next.radius = this.prev.radius = radius = Math.sqrt(radius);
	      if (radius == 0) radius = 10;
	
	      // var r = this.len * 5 / 2;
	      // var val = 0.5 - Math.abs((this.len/2 - this.index) / this.len);
	      // var radius = val * r * 2;
	
	      log(radius, val);
	
	      for (var i = 0; i < this.num; i++) {
	
	        var param = {
	          x: m.range(40) * 0.5 * Math.random(),
	          y: m.range(40) * 0.5 * Math.random(),
	          z: 0,
	
	          radian: startRad + i / this.num * Math.PI * 2, vradian: this.prev.vradian, radius: radius, defRadius: radius,
	          radian2: m.radian(Math.random() * 360) * 0.3,
	          rad: m.radian(360 * 360 * i / this.num), rad2: m.radian(360 * i / this.num),
	          vRad: m.radian(0.4 + Math.random() * 0.5),
	          r: 35,
	
	          rotateX: 0, rotateY: 0, rotateZ: 0,
	
	          noise: this.v.noise(0, i * 1000),
	
	          stepX: 0, stepY: 0
	        };
	
	        var p = new _Particle2.default(param);
	        this.ps.push(p);
	
	        // positions
	        this.positions[i * 3] = this.ps[i].x;
	        this.positions[i * 3 + 1] = this.ps[i].y;
	        this.positions[i * 3 + 2] = this.ps[i].z;
	
	        // color red ff0000
	        // color blue 009fe7
	        var color = new THREE.Color('#ff0000');
	        this.colors[i * 3] = color.r;
	        this.colors[i * 3 + 1] = color.g;
	        this.colors[i * 3 + 2] = color.b;
	      };
	
	      this.geometry.addAttribute('position', new THREE.BufferAttribute(this.positions, 3));
	      this.geometry.addAttribute('color', new THREE.BufferAttribute(this.colors, 3));
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // 頂点
	      this.m.updateCircle();
	      // this.m.updateCircleSize(); // サイズ変更
	      // this.m.updateSphere(); // 球体
	      // this.m.updateRandomWalk(); // ランダムウォーク
	      // this.m.updateGunya(); // ランダムウォーク
	
	
	      // mesh
	
	      // pos
	      // var x = m.lerp(this.prev.pos.x, this.next.pos.x, this.param);
	      // var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      // var z = m.lerp(this.prev.pos.z, this.next.pos.z, this.param);
	      this.posF += this.posFAdd;
	      var x = m.lerp(Math.cos(this.posRadS + this.posF) * this.posRadius, Math.cos(this.posRadS + this.posF) * this.posRadius, this.param);
	      var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
	      var z = m.lerp(Math.sin(this.posRadS + this.posF) * this.posRadius, Math.sin(this.posRadS + this.posF) * this.posRadius, this.param);
	      this.mesh.position.set(x, y, z);
	      // rotation
	      this.vRotx += 0.01 * this.rotPower;
	      this.vRoty += 0.01 * this.rotPower;
	      this.vRotz += 0.01 * this.rotPower;
	      var rotx = m.lerp(this.prev.rot.x, this.next.rot.x, this.param) + this.vRotx;
	      var roty = m.lerp(this.prev.rot.y, this.next.rot.y, this.param) + this.vRoty;
	      var rotz = m.lerp(this.prev.rot.z, this.next.rot.z, this.param) + this.vRotz;
	      // this.mesh.rotation.set(this.startRotx + this.rotx,this.startRoty + this.roty,this.startRotz + this.rotz);
	      this.mesh.rotation.set(rotx, roty, rotz);
	      // radius
	      var radius = m.lerp(this.prev.radius, this.next.radius, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.radius = radius;
	      }
	      // radian 点々の回転するスピード
	      var vradian = m.lerp(this.prev.vradian, this.next.vradian, this.param);
	      for (var i = 0; i < this.ps.length; i++) {
	        var p = this.ps[i];
	        p.vradian = vradian;
	      }
	
	      // if (gb.up.frame%30==0) {
	      //   log(this.vRotx, this.rotPower);
	      //   log(rotx);
	      // }
	
	      this.uniforms.frame.value = gb.up.frame / 100.0;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline_def',
	    value: function timeline_def(index) {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        TweenMax.to(_this2.mesh.position, 1.0, {
	          y: _this2.mesh.position.defy,
	          ease: Expo.easeInOut
	        });
	
	        // radius
	        for (var i = 0; i < _this2.ps.length; i++) {
	          var p = _this2.ps[i];
	
	          TweenMax.to(p, 1.0, {
	            radius: p.defRadius,
	            ease: Expo.easeInOut
	          });
	        }
	
	        TweenMax.to(_this2, 2.0, {
	          t: 0,
	          rotx: 0,
	          roty: 0,
	          rotz: 0,
	          ease: Expo.easeInOut
	        });
	      }, 0.0);
	    }
	  }, {
	    key: 'tweenParamTo0',
	    value: function tweenParamTo0() {
	
	      TweenMax.to(this, 1.2, {
	        param: 1,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'tweenParamTo1',
	    value: function tweenParamTo1() {
	
	      TweenMax.to(this, 1.2, {
	        param: 0,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset(index) {
	
	      TweenMax.to(this.uniforms.power, 0.9, { value: 0.0, ease: Power2.easeInOut });
	
	      TweenMax.to(this, 0.9, { rotPower: 0.0, ease: Power2.easeInOut });
	      TweenMax.to(this, 0.95, { vRotx: 0, vRoty: 0, vRotz: 0, ease: Power2.easeInOut });
	
	      TweenMax.to(this, 0.9, { posRadS: 0, ease: Power2.easeInOut });
	      TweenMax.to(this, 0.9, { posFAdd: 0, ease: Power2.easeInOut });
	      TweenMax.to(this, 0.9, { posRadius: 0, ease: Power2.easeInOut });
	
	      // if (index%2==1) {
	
	      TweenMax.to(this.prev.rot, 0.9, { x: 0, y: 0, z: 0, ease: Power2.easeInOut });
	      TweenMax.to(this.prev, 0.9, { radius: this.ps[this.index].defRadius, ease: Power2.easeInOut });
	      TweenMax.to(this.prev.pos, 0.9, { y: this.mesh.position.defy, ease: Power2.easeInOut });
	
	      // } else  {
	
	      TweenMax.to(this.next.rot, 0.9, { x: 0, y: 0, z: 0, ease: Power2.easeInOut });
	      TweenMax.to(this.next, 0.9, { radius: this.ps[this.index].defRadius, ease: Power2.easeInOut });
	      TweenMax.to(this.next.pos, 0.9, { y: this.mesh.position.defy, ease: Power2.easeInOut });
	
	      // }
	    }
	  }, {
	    key: 'switch',
	    value: function _switch(cur, index) {
	      var _this3 = this;
	
	      // rotation
	      if (cur == 1) {
	
	        if (index % 2 == 1) {
	          // pos
	          this.prev.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.5, ease: Power2.easeInOut });
	          TweenMax.to(this.prev.rot, 2.5, { x: Math.PI / 4 * 1 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.prev.rot, 2.5, { y: Math.PI / 4 * 1 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.prev.rot, 2.5, { z: Math.PI / 4 * 1 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // 綺麗に1,2回転
	          // this.prev.rot.x = 0.00;
	          // this.prev.rot.y = 0.00;
	          // this.prev.rot.z = 0.00;
	          // TweenMax.to(this, 2.5, {startRotx: Math.PI / 4 * 1 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRoty: Math.PI / 4 * 1 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRotz: Math.PI / 4 * 1 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // radius
	          // this.prev.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.prev.radius = this.maxradius;
	          // vradian
	          // this.prev.vradian = 0.001 + (Math.random()-0.5)*0.005;
	
	
	          var tl = new TimelineMax();
	          tl.add(function () {
	            _this3.yokuyou();
	          }, 3.0);
	        } else {
	          // pos
	          this.next.pos.y = 0;
	          // rot
	          // 綺麗に順番
	          TweenMax.to(this, 2.0, { rotPower: 0.5, ease: Power2.easeInOut });
	          TweenMax.to(this.next.rot, 2.5, { x: Math.PI / 4 * 1 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.next.rot, 2.5, { y: Math.PI / 4 * 1 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          TweenMax.to(this.next.rot, 2.5, { z: Math.PI / 4 * 1 + this.index * Math.PI * 0.004, ease: Power2.easeInOut });
	          // 綺麗に1,2回転
	          // this.next.rot.x = 0.00;
	          // this.next.rot.y = 0.00;
	          // this.next.rot.z = 0.00;
	          // TweenMax.to(this, 2.5, {startRotx: Math.PI / 4 * 1 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRoty: Math.PI / 4 * 1 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // TweenMax.to(this, 2.5, {startRotz: Math.PI / 4 * 1 + this.index * Math.PI * 0.004,ease: Power2.easeInOut})
	          // radius
	          // this.next.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
	          this.next.radius = this.maxradius;
	          // vradian
	          // this.next.vradian = 0.001 + (Math.random()-0.5)*0.005;
	
	
	          var tl = new TimelineMax();
	          tl.add(function () {
	            _this3.yokuyou();
	          }, 3.0);
	        }
	      }
	    }
	  }, {
	    key: 'yokuyou',
	    value: function yokuyou() {
	      var _this4 = this;
	
	      var r = Math.random();
	
	      // speed止める
	      if (r < 0.3) {
	
	        // TweenMax.to(this, 2.0, {startRotx: 0, startRoty: 0, startRotz: 0, ease: Expo.easeInOut,})
	
	        // speed早める
	      } else if (r < 1.0) {
	
	        // var x = '+=' + Math.PI * 2;
	        // var y = '+=' + Math.PI * 2;
	        // var z = '+=' + Math.PI * 2;
	        // TweenMax.to(this, 2.0, {startRotx: x,startRoty: y,startRotz: z, ease: Power2.easeInOut})
	
	        // speed何もしない
	      } else if (r < 1.0) {}
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this4.yokuyou();
	      }, 3000 + Math.random() * 3000);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Particle
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(36);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(37);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Particle = function () {
	  function Particle(param) {
	    _classCallCheck(this, Particle);
	
	    this.x = param.x || 0;
	    this.y = param.y || 0;
	    this.z = param.z || 0;
	
	    this.defx = m.range(100) * Math.random();
	    this.defy = m.range(70) * Math.random();
	    this.defz = 0;
	
	    this.vx = 0;
	    this.vy = 0;
	    this.vz = 0;
	
	    // circle用
	    this.radian = param.radian || 0;
	    this.radian2 = param.radian2 || 0;
	    this.vradian = param.vradian || 0;
	    this.radius = param.radius || 0;
	    this.defRadius = param.defRadius || 0;
	
	    // sphere用
	    this.rad = param.rad || 0;
	    this.rad2 = param.rad2 || 0;
	    this.vRad = param.vRad || 0;
	    this.r = param.r || 0;
	
	    this.minDis = 3;
	
	    this.rotateX = param.rotateX || 0;
	    this.rotateY = param.rotateY || 0;
	    this.rotateZ = param.rotateZ || 0;
	
	    this.noise = param.noise || 0;
	    this.v = new _Val2.default();
	    this.seed = 10000 * Math.random();
	    this.stepX = param.stepX || 0;
	    this.stepY = param.stepY || 0;
	
	    this.step = 5 + Math.random() * 8;
	
	    this.top = -70;
	    this.right = 130;
	    this.bottom = 70;
	    this.left = -130;
	
	    this.defRight = 130;
	    this.defLeft = -130;
	
	    this.isEasingStop = false;
	  }
	
	  _createClass(Particle, [{
	    key: 'wavy',
	    value: function wavy(gx, gy, gz, vRadian) {
	
	      var step = this.noise.getPerlin() * 2;
	
	      var obj = {
	        x: Math.sin(this.radian2 + vRadian) * step + Math.sin(this.radian2 + vRadian) * step,
	        y: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step,
	        z: Math.cos(this.radian2 + vRadian) * step + Math.cos(this.radian2 + vRadian) * step
	      };
	
	      this.x += (gx - this.x) * 0.1;
	      this.y += (gy - this.y) * 0.1;
	      this.z += (gz - this.z) * 0.1;
	
	      return obj;
	    }
	  }, {
	    key: 'gunya',
	    value: function gunya(vRadian, zoff) {
	
	      var angle = Math.PI * 6 * this.v.noise3(Math.abs(this.x / 1500), Math.abs(this.y / 1500), zoff);
	      this.vx = Math.cos(angle) * this.step * 0.087;
	      this.vy = Math.sin(angle) * this.step * 0.087;
	      this.vz = Math.cos(this.radian + vRadian) * 3 + Math.cos(this.radian + vRadian) * 3;
	
	      this.x += this.vx;
	      this.y += this.vy;
	
	      // wavy
	      var step = this.v.noise(gb.up.frame / 100, this.seed) * 0.1;
	      var wavy = {
	        x: Math.sin(this.radian + vRadian) * step + Math.sin(this.radian + vRadian) * step,
	        y: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step,
	        z: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step
	      };
	
	      this.x += wavy.x;
	      this.y += wavy.y;
	    }
	  }, {
	    key: 'sphere',
	    value: function sphere(vRadian) {
	
	      // spehre
	      this.rad += this.vRad;
	      this.rad2 += this.vRad;
	
	      // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * this.r;
	      // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * this.r;
	      // this.gz = Math.sin(this.rad) * this.r;
	      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * 30;
	      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * 30;
	      this.gz = Math.sin(this.rad) * 30;
	
	      // wavy
	      var step = this.v.noise(gb.up.frame / 100, this.seed) * 0.1;
	      var wavy = {
	        x: Math.sin(this.radian + vRadian) * step + Math.sin(this.radian + vRadian) * step,
	        y: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step,
	        z: Math.cos(this.radian + vRadian) * step + Math.cos(this.radian + vRadian) * step
	      };
	
	      this.x += (this.gx - this.x) * 0.1 + wavy.x;
	      this.y += (this.gy - this.y) * 0.1 + wavy.y;
	      this.z += (this.gz - this.z) * 0.1 + wavy.z;
	    }
	  }, {
	    key: 'boundary',
	    value: function boundary() {
	
	      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
	        return true;
	      }
	
	      return false;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Motion
	//
	//--------------------------------------------------
	
	var _index = __webpack_require__(36);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(37);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Motion = function () {
	  function Motion(parent) {
	    _classCallCheck(this, Motion);
	
	    this.p = parent;
	    this.v = new _Val2.default();
	  }
	
	  // ------------------------------------------------------------
	  // circle
	  // ------------------------------------------------------------
	
	
	  _createClass(Motion, [{
	    key: 'setupUpdateCircle',
	    value: function setupUpdateCircle() {
	
	      var x, y;
	      var w = gb.r.w,
	          h = gb.r.h;
	      var radius = 0,
	          radiusOut = 0,
	          radiusIn = 0,
	          radian = 0,
	          step = 0;
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var c = 0.65;
	        if (i < this.p.num / 2) var r = 0.05;else var r = 0.03 + 0.01 * Math.random();
	
	        radiusOut = Math.min(w, h) * (c + r);
	        radiusIn = Math.min(w, h) * (c - r);
	
	        radius = i % 2 == 0 ? radiusOut : radiusIn;
	        step = 3 + Math.random() * 5;
	        radian = m.radian(i + step);
	        x = Math.sin(radian) * radius;
	        y = Math.cos(radian) * radius;
	
	        this.p.ps[i].x = x;
	        this.p.ps[i].y = y;
	        this.p.ps[i].radian = radian;
	        this.p.ps[i].vradian = step;
	        this.p.ps[i].radius = radius;
	      };
	    }
	  }, {
	    key: 'updateCircle',
	    value: function updateCircle() {
	
	      var sin = this.p.v.sin(gb.up.frame / 100);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var radian = p.radian += p.vradian;
	        // var radius = p.radius = 50 + sin * 10;
	        var radius = p.radius;
	
	        this.p.positions[i * 3 + 0] = Math.cos(radian) * radius;
	        this.p.positions[i * 3 + 1] = 0;
	        this.p.positions[i * 3 + 2] = Math.sin(radian) * radius;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // size
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateCircleSize',
	    value: function updateCircleSize() {
	
	      var size = this.v.noise(gb.up.frame / 500) * 10;
	      this.p.mesh.material.size = size;
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // sphere
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateSphere',
	    value: function updateSphere() {
	
	      var vRadian = m.radian(gb.up.frame * 2.6);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        // update
	        p.sphere(vRadian);
	
	        // draw
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // random walk
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'updateRandomWalk',
	    value: function updateRandomWalk() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        var stepx = m.range(1);
	        var stepy = m.range(1);
	
	        // var stepsize = this.v.montecarlo()*10;
	        var stepsize = this.v.montecarlo() * Math.random() * 10;
	        stepx *= stepsize;
	        stepy *= stepsize;
	
	        p.x += stepx;
	        p.y += stepy;
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      };
	
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	
	    // ------------------------------------------------------------
	    // gunya
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setupGunya',
	    value: function setupGunya() {
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.x = m.range(40) * 0.5 * Math.random();
	        p.y = m.range(40) * 0.5 * Math.random();
	        p.z = 0;
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	    }
	  }, {
	    key: 'resetGunya',
	    value: function resetGunya(i) {
	
	      var p = this.p.ps[i];
	
	      // p.x = gb.in.u.range(100)*Math.random();
	      // p.y = gb.in.u.range(70)*Math.random();
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+1];
	      // p.z = 0;
	
	      // p.x = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+0];
	      // p.y = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+1];
	      // p.z = 0;
	
	      p.x = m.range(gb.r.w / 2) * Math.random();
	      p.y = m.range(gb.r.h / 2) * Math.random();
	      p.z = 0;
	
	      this.p.positions[i * 3 + 0] = p.x;
	      this.p.positions[i * 3 + 1] = p.y;
	      this.p.positions[i * 3 + 2] = p.z;
	    }
	    // ぐにゃぐにゃ
	
	  }, {
	    key: 'updateGunya',
	    value: function updateGunya() {
	
	      var vRadian = m.radian(gb.up.frame * 2);
	
	      for (var i = 0; i < this.p.num; i++) {
	
	        var p = this.p.ps[i];
	
	        p.gunya(vRadian, this.p.zoff);
	        if (p.boundary()) this.resetGunya(i);
	
	        // if (i < this.p.num/4) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = -70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4 && i < this.p.num/4*2 ) {
	
	        //   this.p.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*2 && i < this.p.num/4*3 ) {
	
	        //   this.p.positions[i*3+0] = p.x;
	        //   this.p.positions[i*3+1] = 70;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	        // if (i > this.p.num/4*3 && i < this.p.num ) {
	
	        //   this.p.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
	        //   this.p.positions[i*3+1] = p.y;
	        //   this.p.positions[i*3+2] = p.z;
	
	        // };
	
	
	        this.p.positions[i * 3 + 0] = p.x;
	        this.p.positions[i * 3 + 1] = p.y;
	        this.p.positions[i * 3 + 2] = p.z;
	      }
	
	      this.p.zoff += 0.002;
	      this.p.geometry.attributes.position.needsUpdate = true;
	    }
	  }]);
	
	  return Motion;
	}();
	
	exports.default = Motion;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "#define GLSLIFY 1\n" + __webpack_require__(41) + "\n// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_2_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_2_1(vec4 x) {\n     return mod289_2_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_2_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_2_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_2_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_2_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_2_5;\n  vec3 i1 = min( g_2_5.xyz, l.zxy );\n  vec3 i2 = max( g_2_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_2_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_2_0(i);\n  vec4 p = permute_2_1( permute_2_1( permute_2_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_2_4.wyz - D_2_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_2_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_2_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_2_6.xy,h.z);\n  vec3 p3 = vec3(a1_2_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_2_2(vec4(dot(p0_2_7,p0_2_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_2_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_2_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nvec3 snoiseVec3_1_8( vec3 x ){\n\n  float s  = snoise_2_3(vec3( x ));\n  float s1 = snoise_2_3(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise_2_3(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\n\nvec3 curlNoise_1_9( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3_1_8( p - dx );\n  vec3 p_x1 = snoiseVec3_1_8( p + dx );\n  vec3 p_y0 = snoiseVec3_1_8( p - dy );\n  vec3 p_y1 = snoiseVec3_1_8( p + dy );\n  vec3 p_z0 = snoiseVec3_1_8( p - dz );\n  vec3 p_z1 = snoiseVec3_1_8( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\nuniform float power;\n\nvoid main() {\n  \n\n\tvec3 pos = position;\n\t\n\n\t// motion curl  \n\t  // 大きい移動を作る\n\t// float noise1 = cnoise3(\n\tvec3 noise1 = curlNoise_1_9(\n\t    vec3(\n\t      pos.x * 0.006 + frame * 0.1,\n\t      pos.y * 0.012,\n\t      pos.z * 0.006\n\t    )\n\t  );\n\t// float noise2 = cnoise3(\n\tvec3 noise2 = curlNoise_1_9(\n\t    vec3(\n\t      pos.x * 0.02,\n\t      pos.y * 0.016 + frame * 0.05,\n\t      pos.z * 0.02\n\t    )\n\t  );\n\n\n\t// pos\n\tfloat dis = length(pos);\n\tpos.y = pos.y + sin(dis * 0.15 + frame*3.0) * 3.0 * power;\n\t// pos.y += sin(pos.x * 0.1 + frame*0.001) * 5.0;\n\tvec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n\t// vec4 noisePosition = vec4(pos * 2.0 + (normalize(pos) * (300.0 * noise1)), 1.0);\n\t// vec4 noisePosition = vec4(pos + (normalize(pos) * (5.0 * noise1)), 1.0);\n\t// vec4 mvPosition = modelViewMatrix * noisePosition;\n\n\t// size\n\t// float distanceFromCamera = 500.0 / length(mvPosition.xyz);\n\t// float distanceFromCamera = 6.0;\n\tfloat distanceFromCamera = 3.0;\n\n\tvColor = color;\n\tvPos = (projectionMatrix * mvPosition).xyz;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\tgl_PointSize = distanceFromCamera;\n\n}\n"

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n" + __webpack_require__(43) + "\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\nfloat map_2_8(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_2_8(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_2_8(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_2_8(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\n\n\n\nvarying vec3 vColor;\nvarying vec3 vPos;\n\n#define PI 3.1415926535897932384626433832795\n\nvoid main() {\n\n  // Round the point\n  vec3 n;\n  n.xy = gl_PointCoord * 2.0 - 1.0;\n  n.z = 1.0 - dot(n.xy, n.xy);\n  if (n.z < 0.0) discard;\n\n  float op = map_2_8(sin(vPos.x * 0.01 + frame*1.5), -1.0, 1.0, 0.0, 1.0);\n\n  gl_FragColor = vec4(vColor, op);\n  \n}\n"

/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(24);
	
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
	
	      this.controls.rotateSpeed = 3.0; //?????????????٤?
	      this.controls.zoomSpeed = 1.2; //???`?ह??????٤?
	      this.controls.panSpeed = 0.3; //?ѥ󤹤?????٤?
	
	      this.controls.staticMoving = false;
	      this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
	
	      this.controls.noRotate = false; //true?ǻ??????򲻿ɤˤ???    
	      this.controls.noZoom = false; //true?ǥ??`????򲻿ɤˤ???    
	      this.controls.noPan = true; //true?ǥѥ?????򲻿ɤˤ???
	      this.controls.minDistance = 0; //???Ť??????????
	      this.controls.maxDistance = Infinity; //?????????x?????
	      // this.controls.maxDistance = 100; //?????????x?????
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