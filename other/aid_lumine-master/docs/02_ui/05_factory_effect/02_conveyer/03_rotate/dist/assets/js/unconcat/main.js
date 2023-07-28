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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // setting
	
	
	// Util
	
	
	// model
	
	
	// events
	
	
	// view
	
	
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
	
	var _Controller3 = __webpack_require__(19);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _ResourceMgr = __webpack_require__(22);
	
	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);
	
	var _UpdateMgr = __webpack_require__(27);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(28);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(29);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(30);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _UpdateList = __webpack_require__(31);
	
	var _UpdateList2 = _interopRequireDefault(_UpdateList);
	
	var _ResizeList = __webpack_require__(32);
	
	var _ResizeList2 = _interopRequireDefault(_ResizeList);
	
	var _ScrollList = __webpack_require__(33);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
	var _MouseList = __webpack_require__(34);
	
	var _MouseList2 = _interopRequireDefault(_MouseList);
	
	var _View = __webpack_require__(35);
	
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
	
	      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
	      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();
	
	      this.onReady();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	      gb.util = new _Controller2.default();
	
	      // ------------------------------------------------------------
	      //  Event
	      // ------------------------------------------------------------   
	      if (gb.conf.isScrollMgr) gb.s = new _ScrollMgr2.default();
	      if (gb.conf.isMouseMgr) gb.m = new _MouseMgr2.default();
	      // gb.ul = new UpdateList();
	      // gb.rl = new ResizeList();
	      gb.sl = new _ScrollList2.default();
	      // gb.ml = new MouseList();
	
	      // ------------------------------------------------------------
	      //  Loading / Model / performance
	      // ------------------------------------------------------------
	      gb.lm = new _Controller4.default();
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
	  this.LOADING = true;
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
	    this.LOADING = true;
	    this.OPENING = false;
	    this.EFFECT = false;
	    this.INERTIA = false;
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
	  this.bp01 = 768;
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
	      this.isEdge();
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
	
	      if (b) $('body').addClass('isEdge');
	
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
	    this.checkPassive();
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
	      var _this = this;
	
	      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	
	      if (gb.u.dv.isPC) return;
	
	      var r = function r() {
	        clearTimeout(_this.Timer);
	        _this.Timer = setTimeout(function () {
	          var adjust = 0;
	          if ($('body').hasClass('landscape')) adjust = 200;
	          $target.innerHeight(gb.r.h + adjust);
	        }, 100);
	      };
	
	      r();
	
	      // $(window).on('resize', r);
	      $(window).on('orientationchange', r);
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
	  }, {
	    key: 'checkPassive',
	    value: function checkPassive() {
	
	      // check passive 
	      var supportsPassive = false;
	      try {
	        // getter として opts.passive を定義して、 addEventListener 内で呼ばれたことがわかるようにする
	        var opts = Object.defineProperty({}, 'passive', {
	          get: function get() {
	            // 内部で opts.passive が呼ばれたら対応ブラウザ
	            // 用意しておいたフラグを有効にする
	            supportsPassive = true;
	          }
	        });
	        // 試しに適当なイベントを補足し、 opts.passive が呼ばれるか試す
	        window.addEventListener("test", null, opts);
	        window.removeEventListener("test", null, opts);
	      } catch (e) {}
	
	      window.addEventListenerWithOptions = function (target, type, handler, options) {
	        var optionsOrCapture = options;
	        if (!supportsPassive) {
	          // 非対応ブラウザでは、他のオプションは全て捨て
	          // { capture: bool } の値を useCapture の値として採用する
	          optionsOrCapture = options.capture;
	        }
	        //
	        target.addEventListener(type, handler, optionsOrCapture);
	      };
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
	  }
	
	  _createClass(Debugger, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.console(); // console
	    }
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var _UrlParamMgr = __webpack_require__(14);
	
	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);
	
	var _JudgeEnvironment = __webpack_require__(17);
	
	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);
	
	var _Profiler = __webpack_require__(18);
	
	var _Profiler2 = _interopRequireDefault(_Profiler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // page id
	      gb.pageID = $('body').attr('id');
	
	      // UrlParam パラメータ調整用
	      gb.urlp = new _UrlParamMgr2.default();
	
	      // デバイス確認
	      gb.je = new _JudgeEnvironment2.default();
	
	      if (gb.conf.Profiler) new _Profiler2.default(); // Profiler
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Keys = __webpack_require__(16);
	
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
/* 15 */
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
	
	      this.isUEv = true;
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
/* 16 */
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
	    'key': 'move',
	    'def': 'add',
	    'value': ['add', 'easing']
	  }, {
	    'key': 'pattern_cover',
	    'def': '1',
	    'value': ['1', '2', '3', '4', '5']
	  }, {
	    'key': 'param03',
	    'def': '3',
	    'value': ['any']
	  }];
	};
	
	exports.default = data;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  JudgeEnvironment
	//
	//--------------------------------------------------
	
	var JudgeEnvironment = function (_Base) {
	  _inherits(JudgeEnvironment, _Base);
	
	  function JudgeEnvironment() {
	    _classCallCheck(this, JudgeEnvironment);
	
	    var _this = _possibleConstructorReturn(this, (JudgeEnvironment.__proto__ || Object.getPrototypeOf(JudgeEnvironment)).call(this));
	
	    _this.name = 'JudgeEnvironment';
	
	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(JudgeEnvironment, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      // デバイス判定
	      gb.u.dv.isDeviceSP();
	      gb.u.dv.isDeviceTAB();
	      gb.u.dv.isDeviceMB();
	      gb.u.dv.isDevicePC();
	      gb.u.dv.setEventString();
	
	      // ブラウザ判定
	      gb.u.dv.isBrowserCheck();
	
	      // responsive / portrait / landscape
	      gb.u.dv.isDirection();
	      gb.u.dv.isResponsive(gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      gb.u.dv.isDirection.call(gb.u.dv);
	      gb.u.dv.isResponsive.call(gb.u.dv, gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
	    }
	  }]);
	
	  return JudgeEnvironment;
	}(_Base3.default);
	
	exports.default = JudgeEnvironment;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Events = __webpack_require__(20);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _Render_def = __webpack_require__(21);
	
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
	
	      // this.r.add();
	      // this.r.show();
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
	
	      this.e = this.e.update();
	      this.r.update(this.e);
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {
	
	      // update処理をやめる
	      this.offU();
	
	      // this.r.hide();
	
	      var $mask = $('#loading .mask');
	
	      var tl = new TimelineMax();
	
	      tl.to($mask.eq(0), 1.2, {
	        width: '102%',
	        ease: Power3.easeInOut
	      }, 0.2 * 0).to($mask.eq(1), 1.2, {
	        width: '102%',
	        ease: Power3.easeInOut
	      }, 0.2 * 1).to($mask.eq(2), 1.2, {
	        width: '102%',
	        ease: Power3.easeInOut,
	        onComplete: function onComplete() {
	          $('#loading').remove();
	        }
	      }, 0.2 * 2).add(function () {
	
	        $(window).trigger('loadingEnd');
	      }, 0.0);
	    }
	  }]);
	
	  return ReadyMgr;
	}(_Base3.default);
	
	exports.default = ReadyMgr;

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
	//  Events
	//
	//--------------------------------------------------
	
	var Events = function () {
	  function Events(parent) {
	    _classCallCheck(this, Events);
	
	    this.parent = parent;
	
	    this.current = 0;
	    this.ease = 0.12;
	
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
	      this.current += (target - this.current) * this.ease;
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
/* 21 */
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
	
	      // this.$bar.css({ width: e.current + '%' }); // bar
	      // this.$percent.html( Math.floor(e.current) + '<span>%</span>'); // value
	
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
/* 22 */
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
	
	var _es6Promise = __webpack_require__(23);
	
	var _OtherLoader = __webpack_require__(25);
	
	var _OtherLoader2 = _interopRequireDefault(_OtherLoader);
	
	var _GetData = __webpack_require__(26);
	
	var _GetData2 = _interopRequireDefault(_GetData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMgr = function () {
	  function LoadMgr() {
	
	    // this.setup();
	    // this.setEvents();
	
	    _classCallCheck(this, LoadMgr);
	  }
	
	  _createClass(LoadMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      // var ol = new O();
	
	      // ol.youtubeIframeScript();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return LoadMgr;
	}();
	
	exports.default = LoadMgr;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.4+314e4831
	 */
	
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  var type = typeof x;
	  return x !== null && (type === 'object' || type === 'function');
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	
	
	var _isArray = void 0;
	if (Array.isArray) {
	  _isArray = Array.isArray;
	} else {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = void 0;
	var customSchedulerFn = void 0;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var vertx = Function('return this')().require('vertx');
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = void 0;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	
	  if (_state) {
	    var callback = arguments[_state - 1];
	    asap(function () {
	      return invokeCallback(_state, child, callback, parent._result);
	    });
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(2);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var TRY_CATCH_ERROR = { error: null };
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    TRY_CATCH_ERROR.error = error;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then$$1.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then$$1) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then$$1, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$1) {
	  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$1 === TRY_CATCH_ERROR) {
	      reject(promise, TRY_CATCH_ERROR.error);
	      TRY_CATCH_ERROR.error = null;
	    } else if (then$$1 === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$1)) {
	      handleForeignThenable(promise, maybeThenable, then$$1);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function resolve(promise, value) {
	  if (promise === value) {
	    reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = void 0,
	      callback = void 0,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = void 0,
	      error = void 0,
	      succeeded = void 0,
	      failed = void 0;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	    resolve(promise, value);
	  } else if (failed) {
	    reject(promise, error);
	  } else if (settled === FULFILLED) {
	    fulfill(promise, value);
	  } else if (settled === REJECTED) {
	    reject(promise, value);
	  }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      resolve(promise, value);
	    }, function rejectPromise(reason) {
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	}
	
	var Enumerator = function () {
	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);
	
	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }
	
	    if (isArray(input)) {
	      this.length = input.length;
	      this._remaining = input.length;
	
	      this._result = new Array(this.length);
	
	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate(input);
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      reject(this.promise, validationError());
	    }
	  }
	
	  Enumerator.prototype._enumerate = function _enumerate(input) {
	    for (var i = 0; this._state === PENDING && i < input.length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };
	
	  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$1 = c.resolve;
	
	
	    if (resolve$$1 === resolve$1) {
	      var _then = getThen(entry);
	
	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise$1) {
	        var promise = new c(noop);
	        handleMaybeThenable(promise, entry, _then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$1) {
	          return resolve$$1(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$1(entry), i);
	    }
	  };
	
	  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	    var promise = this.promise;
	
	
	    if (promise._state === PENDING) {
	      this._remaining--;
	
	      if (state === REJECTED) {
	        reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }
	
	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };
	
	  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	    var enumerator = this;
	
	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };
	
	  return Enumerator;
	}();
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {Function} resolver
	  Useful for tooling.
	  @constructor
	*/
	
	var Promise$1 = function () {
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];
	
	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }
	
	  /**
	  The primary way of interacting with a promise is through its `then` method,
	  which registers callbacks to receive either a promise's eventual value or the
	  reason why the promise cannot be fulfilled.
	   ```js
	  findUser().then(function(user){
	    // user is available
	  }, function(reason){
	    // user is unavailable, and you are given the reason why
	  });
	  ```
	   Chaining
	  --------
	   The return value of `then` is itself a promise.  This second, 'downstream'
	  promise is resolved with the return value of the first promise's fulfillment
	  or rejection handler, or rejected if the handler throws an exception.
	   ```js
	  findUser().then(function (user) {
	    return user.name;
	  }, function (reason) {
	    return 'default name';
	  }).then(function (userName) {
	    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	    // will be `'default name'`
	  });
	   findUser().then(function (user) {
	    throw new Error('Found user, but still unhappy');
	  }, function (reason) {
	    throw new Error('`findUser` rejected and we're unhappy');
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	  });
	  ```
	  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	   ```js
	  findUser().then(function (user) {
	    throw new PedagogicalException('Upstream error');
	  }).then(function (value) {
	    // never reached
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // The `PedgagocialException` is propagated all the way down to here
	  });
	  ```
	   Assimilation
	  ------------
	   Sometimes the value you want to propagate to a downstream promise can only be
	  retrieved asynchronously. This can be achieved by returning a promise in the
	  fulfillment or rejection handler. The downstream promise will then be pending
	  until the returned promise is settled. This is called *assimilation*.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // The user's comments are now available
	  });
	  ```
	   If the assimliated promise rejects, then the downstream promise will also reject.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // If `findCommentsByAuthor` fulfills, we'll have the value here
	  }, function (reason) {
	    // If `findCommentsByAuthor` rejects, we'll have the reason here
	  });
	  ```
	   Simple Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let result;
	   try {
	    result = findResult();
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	  findResult(function(result, err){
	    if (err) {
	      // failure
	    } else {
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findResult().then(function(result){
	    // success
	  }, function(reason){
	    // failure
	  });
	  ```
	   Advanced Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let author, books;
	   try {
	    author = findAuthor();
	    books  = findBooksByAuthor(author);
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	   function foundBooks(books) {
	   }
	   function failure(reason) {
	   }
	   findAuthor(function(author, err){
	    if (err) {
	      failure(err);
	      // failure
	    } else {
	      try {
	        findBoooksByAuthor(author, function(books, err) {
	          if (err) {
	            failure(err);
	          } else {
	            try {
	              foundBooks(books);
	            } catch(reason) {
	              failure(reason);
	            }
	          }
	        });
	      } catch(error) {
	        failure(err);
	      }
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findAuthor().
	    then(findBooksByAuthor).
	    then(function(books){
	      // found books
	  }).catch(function(reason){
	    // something went wrong
	  });
	  ```
	   @method then
	  @param {Function} onFulfilled
	  @param {Function} onRejected
	  Useful for tooling.
	  @return {Promise}
	  */
	
	  /**
	  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	  as the catch block of a try/catch statement.
	  ```js
	  function findAuthor(){
	  throw new Error('couldn't find that author');
	  }
	  // synchronous
	  try {
	  findAuthor();
	  } catch(reason) {
	  // something went wrong
	  }
	  // async with promises
	  findAuthor().catch(function(reason){
	  // something went wrong
	  });
	  ```
	  @method catch
	  @param {Function} onRejection
	  Useful for tooling.
	  @return {Promise}
	  */
	
	
	  Promise.prototype.catch = function _catch(onRejection) {
	    return this.then(null, onRejection);
	  };
	
	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuther();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuther();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @return {Promise}
	  */
	
	
	  Promise.prototype.finally = function _finally(callback) {
	    var promise = this;
	    var constructor = promise.constructor;
	
	    return promise.then(function (value) {
	      return constructor.resolve(callback()).then(function () {
	        return value;
	      });
	    }, function (reason) {
	      return constructor.resolve(callback()).then(function () {
	        throw reason;
	      });
	    });
	  };
	
	  return Promise;
	}();
	
	Promise$1.prototype.then = then;
	Promise$1.all = all;
	Promise$1.race = race;
	Promise$1.resolve = resolve$1;
	Promise$1.reject = reject$1;
	Promise$1._setScheduler = setScheduler;
	Promise$1._setAsap = setAsap;
	Promise$1._asap = asap;
	
	/*global self*/
	function polyfill() {
	  var local = void 0;
	
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	
	  var P = local.Promise;
	
	  if (P) {
	    var promiseToString = null;
	    try {
	      promiseToString = Object.prototype.toString.call(P.resolve());
	    } catch (e) {
	      // silently ignored
	    }
	
	    if (promiseToString === '[object Promise]' && !P.cast) {
	      return;
	    }
	  }
	
	  local.Promise = Promise$1;
	}
	
	// Strange compat..
	Promise$1.polyfill = polyfill;
	Promise$1.Promise = Promise$1;
	
	return Promise$1;
	
	})));
	
	
	
	//# sourceMappingURL=es6-promise.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), (function() { return this; }())))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Loader
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
	
	var Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);
	
	    this.cb = function () {};
	  }
	
	  _createClass(Loader, [{
	    key: 'youtubeIframeScript',
	    value: function youtubeIframeScript(cb) {
	
	      // IFrame Player API の読み込み
	      var tag = document.createElement('script');
	      tag.onload = function () {
	
	        // this.cb();
	
	      };
	
	      // tag.src = "https://www.youtube.com/iframe_api";
	      tag.src = "//www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
	      // YouTube動画
	      window.onYouTubeIframeReady = function () {
	
	        log('youtubeready');
	      };
	    }
	  }, {
	    key: 'webFont',
	    value: function webFont(config) {
	
	      // web font loader用jsのappend
	      var wf = document.createElement('script');
	      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	      wf.type = 'text/javascript';
	      wf.async = 'true';
	      var s = document.getElementsByTagName('script')[0];
	      s.parentNode.insertBefore(wf, s);
	
	      var again = function again() {
	
	        // yt.playerがloadされていない場合を考慮して
	        if (typeof WebFont !== "undefined" && WebFont) {
	
	          WebFont.load(config);
	        } else {
	
	          setTimeout(again, 100);
	        }
	      };
	
	      again();
	    }
	  }, {
	    key: 'webFont_setting',
	    value: function webFont_setting() {
	
	      // web font loader用param
	      // var config = {
	      //   custom: {
	      //     families: [
	      //       'Cormorant',
	      //       'Roboto Condensed'
	      //       // 'Noto Sans Japanese',
	      //       // 'Roboto',
	      //       // 'Alegreya Sans',
	      //       // 'Alegreya Sans SC'
	      //       ],
	      //     urls: [
	      //       'https://fonts.googleapis.com/css?family=Cormorant:500,500i|Roboto+Condensed'
	      //       // './ff15/royal/gallery2018/assets/css/font.css',
	      //       // 'https://fonts.googleapis.com/css?family=Roboto:400,500,300',
	      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans:400,100',
	      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,300,100'
	      //       ]
	      //   },
	      //   active: function() { 
	
	      //       log('webFont!!!!');
	      //       gb.in.conf.webFontLoaded = true;
	
	      //   } 
	      // };
	
	      var conf = {
	        custom: {
	          families: ['Source Code Pro', 'FontAwesome'],
	          urls: ['https://fonts.googleapis.com/css?family=Source+Code+Pro:600', 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'],
	          testStrings: {
	            'FontAwesome': '\uF001'
	          }
	        },
	        // Web Fontが使用可能になったとき
	        active: function active() {
	          new DemoIconsWorld();
	        }
	      };
	
	      var loader = new Loader();
	      loader.webFont(config);
	    }
	  }]);
	
	  return Loader;
	}();
	
	exports.default = Loader;

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
	//  GetData
	//
	//--------------------------------------------------             
	
	var GetData = function () {
	  function GetData(APIURL) {
	    _classCallCheck(this, GetData);
	
	    this.APIURL = APIURL;
	
	    this.onSuccess = function () {};
	    this.onError = function () {};
	    this.status = '';
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(GetData, [{
	    key: 'setup',
	    value: function setup() {
	
	      // param
	      this.param = {
	        url: this.APIURL,
	        type: 'get',
	        dataType: 'json',
	        data: {
	          // 'page_no': this.page_no,
	          // 'count': this.count,
	          // 'category_slug': this.category_slug,
	          // 'tag_slug': this.tag_slug,
	          // 'area_slug': this.area_slug,
	          // 'author_name': this.author_name,
	          // 'search_word': this.search_word,
	        },
	        timeout: 5000,
	        cache: false
	      };
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      var _this = this;
	
	      $.ajax(this.param).then(function (data) {
	        _this.onSuccess(data);
	      }, // success
	      function (data) {
	        _this.onError(data);
	      } // error
	      );
	
	      return $.ajax(this.param);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return GetData;
	}();
	
	exports.default = GetData;

/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
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
	
	    // this.$wrap = $(window);
	    if (gb.u.dv.isPC) this.$wrap = $(window);else this.$wrap = $('#wrapper');
	
	    this.st = 0; // 現在のscroll top
	    this.prest = 0;
	    this.sb = 0; // 現在のscroll bottom
	
	    this.isUp = null; // 上スクロールか下スクロールか;
	    this.dis = 0;
	    this.deltaY = 0;
	    this.offset = 0;
	
	    this.isSetWheel = false;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.st = this.$wrap.scrollTop();
	      this.sb = this.st + gb.r.h;
	
	      // down or up
	      // if (this.st > this.prest) {
	      //   console.log('down');
	      // } else {
	      //   console.log('up');
	      // }
	      // this.prest = this.st;
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
	      window.addEventListenerWithOptions(this.$wrap.get(0), 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
	      // this.$wrap.on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	
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
/* 30 */
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
	
	      this.cx = e.clientX - gb.r.haw;
	      this.cy = e.clientY - gb.r.hah;
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
/* 32 */
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
/* 33 */
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
	
	      // this.add('end',this.onEnd.bind(this));
	
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
	
	      // if (this.isStart) {
	      //   this.isStart = false;
	      //   // log('resizeStart');
	      //   // 最初だけの処理
	      // };
	
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
	
	      // $(window).on('scroll', (e)=>{this.onScroll(e);});
	      // var $wrap = $(window).get(0);
	      if (gb.u.dv.isPC) var $wrap = $(window).get(0);else var $wrap = $('#wrapper').get(0);
	      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
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
/* 34 */
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
	
	      // this.add('onEnd', this.onMouseEnd.bind(this));
	
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
	      // if (this.isStart && Math.abs(dis)>3) {
	      //   this.isStart = false;
	
	      //   // 最初だけの処理
	      //   // log('moveStart');
	
	      //   for (var i in this.startList) this.startList[i].func();
	
	      // };
	
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Sns = __webpack_require__(36);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	var _ResponsiveSwitchImg = __webpack_require__(38);
	
	var _ResponsiveSwitchImg2 = _interopRequireDefault(_ResponsiveSwitchImg);
	
	var _Size = __webpack_require__(39);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Clone = __webpack_require__(40);
	
	var _Clone2 = _interopRequireDefault(_Clone);
	
	var _Controller = __webpack_require__(41);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ViewTop sss
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
	
	      new _ResponsiveSwitchImg2.default();
	
	      gb.f.SPH($('#wrapper, .section01 .block01'));
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	      new _Sns2.default();
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	      // new Size();
	      // new Clone();
	      // this.setPos();
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	      this.uic = new _Controller2.default();
	
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	      // this.uic.timeline();
	
	      // this.$header = $('#header');
	      // this.$bg = $('.block01 .bg');
	      // this.$tit = $('.block01 .tit');
	      // this.$pipe = $('.block02 .pipe');
	      // TweenMax.set(this.$header, {opacity: 1});
	      // TweenMax.set(this.$bg, {opacity: 1});
	      // TweenMax.set(this.$tit, {opacity: 1});
	      // TweenMax.set(this.$pipe, {opacity: 1});
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
	
	      // ------------------------------------------------------------
	      // Scene / timeline
	      // ------------------------------------------------------------
	
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onLoadAll',
	    value: function onLoadAll() {
	
	      // new Responsive();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), 'setEvents', this).call(this);
	
	      $(window).on('load', this.onLoad.bind(this));
	      $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
	      $(window).on('loadAll', this.onLoadAll.bind(this));
	    }
	  }]);
	
	  return ViewCommon;
	}(_Base3.default);
	
	exports.default = ViewCommon;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
	//
	//  SNS
	//
	// ------------------------------------------------------------
	
	var _metaData = __webpack_require__(37);
	
	var _metaData2 = _interopRequireDefault(_metaData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SNS = function () {
	  function SNS() {
	    var $fb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.fbShare');
	    var $tw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.twShare');
	    var $line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $('.lineShare');
	    var $mail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $('.onMail');
	
	    _classCallCheck(this, SNS);
	
	    // dom
	    this.$fb = $fb;
	    this.$tw = $tw;
	    this.$line = $line;
	    this.$mail = $mail;
	
	    // data
	    var dataC = _metaData2.default['common'];
	
	    this.fb = {
	      $target: $fb,
	      tit: dataC.fb.tit,
	      des: dataC.fb.des,
	      img: dataC.fb.img,
	      url: dataC.fb.url
	      // url: location.href,
	    };
	
	    this.tw = {
	      $target: $tw,
	      tit: dataC.tw.tit,
	      text: dataC.tw.text,
	      url: dataC.tw.url,
	      // url: location.href,
	      hash: dataC.tw.hash
	    };
	
	    this.line = {
	      $target: $line,
	      tit: dataC.tit,
	      des: dataC.des,
	      img: dataC.img,
	      url: dataC.line.url,
	      // url: location.href,
	      text: dataC.line.text
	    };
	
	    this.mail = {
	      tit: dataC.mail.tit,
	      des: dataC.mail.des,
	      address: dataC.address
	    };
	
	    log(this);
	
	    this.setEvents();
	  }
	
	  _createClass(SNS, [{
	    key: 'runFB',
	    value: function runFB(e) {
	
	      this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + this.fb.url);
	
	      return false;
	    }
	  }, {
	    key: 'runTW',
	    value: function runTW(e) {
	
	      this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + encodeURIComponent(this.tw.text) + '&hashtags=' + this.tw.hash);
	      // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);
	
	      return false;
	    }
	  }, {
	    key: 'runLINE',
	    value: function runLINE() {
	
	      this.openWindow('http://line.me/R/msg/text/?' + encodeURIComponent(this.line.text) + '%0A' + this.line.url);
	
	      return false;
	    }
	  }, {
	    key: 'runMail',
	    value: function runMail() {
	
	      location.href = 'mailto:' + this.mail.address + '?subject=' + this.mail.tit + '&body=' + this.mail.des + this.mail.url;
	
	      return false;
	    }
	  }, {
	    key: 'openWindow',
	    value: function openWindow(url, w, h) {
	
	      if (w === undefined) w = 600;
	      if (h === undefined) h = 600;
	
	      var l = Number((window.screen.width - w) / 2);
	      var t = Number((window.screen.height - h) / 2);
	
	      window.open(url, 'new_window', 'menubar=no,' + 'toolbar=no,' + 'resizable=yes,' + 'scrollbars=yes,' + 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + l + ',' + 'top=' + t);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      if (this.$fb) this.fb.$target.on('click', this.runFB.bind(this));
	      if (this.$tw) this.tw.$target.on('click', this.runTW.bind(this));
	      if (this.$line) this.line.$target.on('click', this.runLINE.bind(this));
	      if (this.$mail) this.$mail.on('click', function () {
	        _this.runMail();return false;
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      if (this.$fb) this.fb.$target.off('click');
	      if (this.$tw) this.tw.$target.off('click');
	      if (this.$line) this.line.$target.off('click');
	      if (this.$mail) this.$mail.off('click');
	    }
	  }]);
	
	  return SNS;
	}();
	
	exports.default = SNS;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = {"common_js":{"tit":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE","des":"クリスマスは一年間をハッピーエンドにするために人類が生んだ、素敵なシステムなのかもしれません。","img":"http://www.lumine.ne.jp/christmas2018/assets/resource/og.png","url":"http://www.lumine.ne.jp/christmas2018/","adress":""},"common":{"tit":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE","des":"クリスマスは一年間をハッピーエンドにするために人類が生んだ、素敵なシステムなのかもしれません。","img":"http://www.lumine.ne.jp/christmas2018/assets/resource/og.png","keyword":"","fb":{"tit":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE","des":"クリスマスは一年間をハッピーエンドにするために人類が生んだ、素敵なシステムなのかもしれません。","img":"http://www.lumine.ne.jp/christmas2018/assets/resource/og.png","url":"http://www.lumine.ne.jp/christmas2018/","siteName":"","type":"website"},"tw":{"img":"http://www.lumine.ne.jp/christmas2018/assets/resource/og.png","url":"http://www.lumine.ne.jp/christmas2018/","siteName":"","creator":"","card":"summary_large_image","hash":"","text":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE"},"line":{"tit":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE","des":"クリスマスは一年間をハッピーエンドにするために人類が生んだ、素敵なシステムなのかもしれません。","img":"http://www.lumine.ne.jp/christmas2018/assets/resource/og.png","url":"http://www.lumine.ne.jp/christmas2018/","text":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE"},"mail":{"tit":"HAPPY HAPPY HAPPY END X'MAS 2018｜LUMINE","des":"クリスマスは一年間をハッピーエンドにするために人類が生んだ、素敵なシステムなのかもしれません。","adress":""}}}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ResponsiveSwitchImg
	//
	//--------------------------------------------------
	
	var ResponsiveSwitchImg = function (_Base) {
	  _inherits(ResponsiveSwitchImg, _Base);
	
	  function ResponsiveSwitchImg() {
	    _classCallCheck(this, ResponsiveSwitchImg);
	
	    var _this = _possibleConstructorReturn(this, (ResponsiveSwitchImg.__proto__ || Object.getPrototypeOf(ResponsiveSwitchImg)).call(this));
	
	    _this.$target = $('.responsiveImg');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ResponsiveSwitchImg, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      this.isPCLock = gb.u.dv.isResPC ? false : true;
	      this.isSPLock = gb.u.dv.isResSP ? false : true;
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      log(gb.u.dv.isResSP, this.isSPLock);
	
	      // ------------------------------------------------------------
	      //  ブレイクポイントよりもsp側
	      // ------------------------------------------------------------
	      if (gb.u.dv.isResSP && !this.isSPLock) {
	        this.isPCLock = false;
	        this.isSPLock = true;
	
	        this.$target.each(function (index, el) {
	
	          // imgの変更        
	          var src = $(this).attr('src');
	          src = gb.u.s.strReplace(src, 'img_pc', 'img_sp');
	          $(this).attr('src', src);
	
	          // sizeの変更
	          // $(this).off('load');
	          // $(this).on('load', (event)=>{
	
	          //   if ($(this).hasClass('spSize')) gb.u.dv.setImgSPSize($(this));
	
	          // });
	
	        });
	      }
	
	      // ------------------------------------------------------------
	      //  ブレイクポイントよりもpc側
	      // ------------------------------------------------------------
	      if (gb.u.dv.isResPC && !this.isPCLock) {
	        this.isPCLock = true;
	        this.isSPLock = false;
	
	        this.$target.each(function (index, el) {
	
	          // imgの変更        
	          var src = $(this).attr('src');
	          src = gb.u.s.strReplace(src, 'img_sp', 'img_pc');
	          $(this).attr('src', src);
	
	          // sizeの変更
	          // $(this).attr({width: 'auto',height: 'auto'});
	        });
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }]);
	
	  return ResponsiveSwitchImg;
	}(_Base3.default);
	
	exports.default = ResponsiveSwitchImg;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Size
	//
	//--------------------------------------------------
	
	var Size = function (_Base) {
	  _inherits(Size, _Base);
	
	  function Size() {
	    _classCallCheck(this, Size);
	
	    var _this = _possibleConstructorReturn(this, (Size.__proto__ || Object.getPrototypeOf(Size)).call(this));
	
	    _this.$target = $('.sliderInner');
	    _this.$sub = $('.logo_big');
	
	    _this.max = 768;
	    _this.min = 376;
	    _this.defw = 340;
	    _this.defh = 523;
	    _this.defW = 375;
	    _this.defH = 667;
	    _this.w = _this.defw;
	    _this.h = _this.defh;
	    _this.rate = _this.h / _this.w;
	    _this.ratew = gb.r.w / _this.w;
	    _this.rateh = gb.r.h / _this.h;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Size, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      var adjust = 0;
	      if ($('body').hasClass('landscape')) adjust = 200;
	
	      var h = gb.r.h - 38 - this.$sub.innerHeight() + adjust;
	
	      TweenMax.set(this.$target, { height: h });
	      if (gb.r.w > this.max || gb.r.w < this.min) TweenMax.set(this.$target, { clearProps: 'all' });
	    }
	  }, {
	    key: 'onResizeC',
	    value: function onResizeC() {
	      var _this2 = this;
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this2.run();
	      }, 100);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('orientationchange', this.onResizeC.bind(this));
	    }
	  }]);
	
	  return Size;
	}(_Base3.default);
	
	exports.default = Size;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Clone
	//
	//--------------------------------------------------
	
	var Clone = function (_Base) {
	  _inherits(Clone, _Base);
	
	  function Clone() {
	    _classCallCheck(this, Clone);
	
	    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this));
	
	    _this.$wrap = $('.section03');
	    _this.$target = $('.planeWrap02');
	    _this.$clone = _this.$target.clone();
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Clone, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	
	      this.$wrap.append(this.$clone);
	      this.$clone.addClass('clone');
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      // var offset = this.$target.offset();
	      // this.$clone.css({
	      //   position: 'absolute',
	      //   left: offset.left,
	      //   top: offset.top,
	      // });
	
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }]);
	
	  return Clone;
	}(_Base3.default);
	
	exports.default = Clone;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(42);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(45);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _Controller5 = __webpack_require__(47);
	
	var _Controller6 = _interopRequireDefault(_Controller5);
	
	var _Controller7 = __webpack_require__(48);
	
	var _Controller8 = _interopRequireDefault(_Controller7);
	
	var _Controller9 = __webpack_require__(54);
	
	var _Controller10 = _interopRequireDefault(_Controller9);
	
	var _Controller11 = __webpack_require__(56);
	
	var _Controller12 = _interopRequireDefault(_Controller11);
	
	var _Controller13 = __webpack_require__(65);
	
	var _Controller14 = _interopRequireDefault(_Controller13);
	
	var _Controller15 = __webpack_require__(66);
	
	var _Controller16 = _interopRequireDefault(_Controller15);
	
	var _Controller17 = __webpack_require__(69);
	
	var _Controller18 = _interopRequireDefault(_Controller17);
	
	var _Controller19 = __webpack_require__(72);
	
	var _Controller20 = _interopRequireDefault(_Controller19);
	
	var _Controller21 = __webpack_require__(75);
	
	var _Controller22 = _interopRequireDefault(_Controller21);
	
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
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.isREv = true;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      $(window).scrollTop(0);
	      $('#wrapper').scrollTop(0);
	
	      // this.ha = new Header();
	      // this.ts = new ToScroll();
	      // new Slider();
	
	      // if (gb.u.dv.isPC) this.fsl = new FakeScroll();
	      // gb.moveItems = [];
	      // gb.moveItemsIndex = 0;
	      // $('.itemParallax').each((index, el)=>{
	      //   // if (index>0) return;
	      //   new ItemParallax($(el));
	      // });
	      // new Parallax();
	
	      // gb.stores = new Stores();
	
	      new _Controller16.default();
	      // new Pipes2();
	      // new Sns_footer();
	
	      // gb.mv = new Mv();
	
	      // this.setup_op()
	    }
	  }, {
	    key: 'setup_op',
	    value: function setup_op() {
	
	      this.$wrap = $('.block01');
	      this.$bg = $('.block01 .bg');
	      this.$tit = $('.block01 .tit');
	      this.$titfront_h = $('.block01 .tit .frontsvg .h path');
	      this.$titbg_h = $('.block01 .tit .bgsvg .h path');
	      this.$titfront_l = $('.block01 .tit .frontsvg .l path');
	      this.$titbg_l = $('.block01 .tit .bgsvg .l path');
	      this.$pipe = $('.block02 .pipe');
	
	      // TweenMax.set(this.$bg, {opacity: 0});
	      // TweenMax.set(this.$titfront_h, {opacity: 0});
	      // TweenMax.set(this.$titbg_h, {opacity: 0});
	      // TweenMax.set(this.$titfront_l, {opacity: 0});
	      // TweenMax.set(this.$titbg_l, {opacity: 0});
	      // TweenMax.set(this.$tit, {opacity: 1});
	      TweenMax.set(this.$pipe, { opacity: 1, y: this.$pipe.height() });
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this2 = this;
	
	      var tl = new TimelineMax({ delay: 1.0 });
	
	      tl
	      // .to(this.$bg, 1.8, {
	      //   opacity: 1,
	      //   ease: Power2.easeInOut,
	      // }, 0.0)
	      // .to(this.$pipe, 1.8, {
	      //   opacity: 1,
	      //   ease: Power2.easeInOut,
	      // }, 0.0)
	      // .to(this.$tit, 1.8, {
	      //   opacity: 1,
	      //   ease: Power2.easeInOut,
	      // }, 0.0)
	      .to(this.$wrap, 1.8, {
	        opacity: 1,
	        ease: Power2.easeInOut
	      }, 0.0)
	
	      // tit
	      // .add(()=>{
	
	      //   // happy
	      //   for (var i = 0; i < this.$titfront_h.length; i++) {
	
	      //     var $f = this.$titfront_h.eq(i);
	      //     var $b = this.$titbg_h.eq(i);
	      //     var $t = $f.add($b);
	      //     var delay = i * 0.07;
	
	      //     var cb = ($t, $f, $b, delay, index)=>{
	
	      //       var tl = new TimelineMax();
	
	      //       tl
	      //         .add(()=>{
	
	      //           var l = $t.get(0).getBBox();
	      //           TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
	      //           $t.css({ transform: 'rotate(' + -45 + 'deg)' })
	      //           // $t.css({ transform: 'rotate(' + -90 + 'deg)' })
	      //           // TweenMax.set($t, {rotationZ: -90});
	
	      //           TweenMax.to($t, 1.1, {
	      //             opacity: 1,
	      //             ease: Power2.easeInOut,
	      //             delay: delay
	      //           })
	      //           TweenMax.to($f, 0.8, {
	      //             fill: '#D7BC6E',
	      //             ease: Power2.easeOut,
	      //             delay: 0.8 + delay,
	      //             onComplete: ($t)=>{
	
	      //               // rotate
	      //               // var l = $t.get(0).getBBox();
	      //               // TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
	      //               // $t.addClass('spin');
	
	      //               // TweenMax.set($t, {rotationZ: '50% 50%'});
	      //               // TweenMax.set($t, {transformOrigin: '50% 50%'});
	
	      //             },
	      //             onCompleteParams: [$t]
	      //           })
	
	      //         }, 0.0)
	      //         .add(()=>{
	
	      //           $t.addClass('spin');
	
	      //         }, delay + 0.4)
	
	      //     }
	
	      //     cb($t, $f, $b, delay, i);
	
	      //   }
	
	      //   // lumine
	      //   for (var i = 0; i < this.$titfront_l.length; i++) {
	
	      //     var $f = this.$titfront_l.eq(i);
	      //     var $b = this.$titbg_l.eq(i);
	      //     var $t = $f.add($b);
	      //     var delay = 1.6 + i * 0.04;
	
	      //     var cb = ($t, $f, $b, delay, index)=>{
	
	      //       var tl = new TimelineMax();
	
	      //       tl
	      //         .add(()=>{
	
	      //           var l = $t.get(0).getBBox();
	      //           TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
	      //           $t.css({ transform: 'rotate(' + -45 + 'deg)' })
	      //           // $t.css({ transform: 'rotate(' + -90 + 'deg)' })
	      //           // TweenMax.set($t, {rotationZ: -90});
	
	      //           TweenMax.to($t, 1.1, {
	      //             opacity: 1,
	      //             ease: Power2.easeInOut,
	      //             delay: delay
	      //           })
	      //           TweenMax.to($f, 0.8, {
	      //             fill: '#D7BC6E',
	      //             ease: Power2.easeOut,
	      //             delay: 0.8 + delay,
	      //             onComplete: ($t)=>{
	
	      //               // rotate
	      //               // var l = $t.get(0).getBBox();
	      //               // TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
	      //               // $t.addClass('spin');
	
	      //               // TweenMax.set($t, {rotationZ: '50% 50%'});
	      //               // TweenMax.set($t, {transformOrigin: '50% 50%'});
	
	      //             },
	      //             onCompleteParams: [$t]
	      //           })
	
	      //         }, 0.0)
	      //         .add(()=>{
	
	      //           $t.addClass('spin');
	
	      //         }, delay + 0.4)
	
	      //     }
	
	      //     cb($t, $f, $b, delay, i);
	
	      //   }
	
	      // }, 0.6)
	      // sns
	      .add(function () {
	
	        _this2.ha.r.$wrap.css('opacity', 1);
	        _this2.ha.r.show();
	      }, 2.0).to(this.$pipe, 1.2, {
	        y: 0,
	        ease: Expo.easeOut
	      }, 2.0);
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
	var _Render = __webpack_require__(44);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// import Val from 'Util/Val.es6';
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($target, pos) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$wrap = $('#header .sns .items');
	    _this.$item = _this.$wrap.find('.item');
	    _this.$cover = $('#header .cover');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.r = new _Render2.default();
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      var index = this.$item.index(that);
	
	      this.$cover.eq(index).addClass('active');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      var index = this.$item.index(that);
	
	      this.$cover.eq(index).removeClass('active');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	
	      this.$item.on('mouseenter touchstart', function () {
	        self.onEnter.call(self, this);
	      });
	      this.$item.on('mouseleave touchend', function () {
	        self.onLeave.call(self, this);
	      });
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

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
	  function Render() {
	    _classCallCheck(this, Render);
	
	    this.$wrap = $('#header');
	    this.$chain = this.$wrap.find('.chain');
	    this.$light = this.$wrap.find('.light');
	    this.$lighton = this.$wrap.find('.light.on');
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$wrap, { opacity: 0, y: -100 });
	      TweenMax.set(this.$light, { rotationZ: -10, 'transform-origin': '10% 50%', y: -10 });
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var _this = this;
	
	      var tl = new TimelineMax();
	
	      tl
	      // wrap
	      .add(function () {
	
	        TweenMax.to(_this.$wrap, 0.8, {
	          y: 0,
	          ease: Elastic.easeOut.config(0.9, 0.6)
	        });
	      }, 0.0)
	      // sec
	      .add(function () {
	
	        TweenMax.to(_this.$light, 0.8, {
	          rotationZ: 0,
	          z: 0,
	          y: 0,
	          ease: Elastic.easeOut.config(1.6, 0.45)
	        });
	      }, 0.08).add(function () {
	
	        // this.flash();
	        _this.$lighton.css('opacity', 0);
	      }, 0.08 + 0.05);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this2 = this;
	
	      TweenMax.to(this.$wrap, 0.7, {
	        y: -this.h,
	        ease: Power4.easeIn,
	        onComplete: function onComplete() {
	          _this2.$wrap.css('display', 'none');
	        }
	      });
	
	      TweenMax.set(this.$sec.eq(3), { 'transform-origin': '20% 25%' });
	      TweenMax.to(this.$sec.eq(3), 0.7, {
	        rotationZ: 30,
	        y: -50,
	        ease: Expo.easeIn
	      });
	
	      clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	
	        $(window).trigger('Opening');
	      }, 300);
	    }
	  }, {
	    key: 'flash',
	    value: function flash() {
	      var _this3 = this;
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        _this3.$lighton.addClass('flashD');
	      }, 0.0);
	      // .add(()=>{
	
	      //   this.$lighton.removeClass('flashD');
	
	      // }, 5.0)
	      // .add(()=>{
	
	      //   this.flash();
	
	      // }, 5.0)
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Render;
	}();
	
	exports.default = Render;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	// howto
	// <div data-link=".target" data-diff="30"></div>
	// .targetのtop値を取得して、そこまでスクロール
	
	var _Scroll = __webpack_require__(46);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.toScroll');
	    var $wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('body,html');
	
	    _classCallCheck(this, Controller);
	
	    if (gb.u.dv.isPC) this.$wrap = $wrap;else this.$wrap = $('#wrapper');
	
	    this.$target = $target;
	
	    this.cb = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // Power3.easeInOut
	      // Expo.easeInOut
	
	      // CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1") //expo.easeOut
	      // CustomEase.create("custom", "M0,0 C0.17,0 0.31,0.076 0.386,0.154 0.464,0.234 0.5,0.42 0.5,0.5 0.5,0.586 0.568,0.858 0.64,0.924 0.712,0.99 0.794,1 1,1") // しゅばっしゅばっと
	      // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1") //Expo.easeInOut
	      // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1") //Expo.easeInOut outの方をさらにゆっくりめ
	      this.ease = CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"); //Expo.easeInOut outの方をさらにゆっくりめ
	
	      this.hashScroll();
	
	      // ScrollDir
	      this.adjustH = 200;
	      var $t = this.$target;
	      var targetST = $t.offset().top - gb.r.h + this.adjustH;
	      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'toScroll');
	      s01.cb = function () {
	
	        log('ToScroll');
	
	        s01.removeEvents();
	      };
	    }
	  }, {
	    key: 'run',
	    value: function run(that) {
	      var _this = this;
	
	      // get target position
	      var $target = $($(that).data("link"));
	      var pos = $target.offset().top;
	
	      // get diff
	      var diff = 0;
	      if ($(that).data('diff')) diff = $(that).data('diff');
	      if (gb.r.w < 768) diff *= 0.8;
	
	      // calculate
	      pos = pos - diff;
	      // if (gb.u.dv.isSP) pos += gb.s.st;
	
	      log(pos);
	
	      // animation
	      TweenMax.to(this.$wrap, 1.9, {
	        scrollTop: pos,
	        ease: this.ease,
	        onComplete: function onComplete() {
	          _this.cb();
	        }
	      });
	    }
	  }, {
	    key: 'runTo',
	    value: function runTo(pos, cb) {
	
	      // animation
	      TweenMax.to(this.$wrap, 1.9, {
	        scrollTop: pos,
	        ease: this.ease,
	        onComplete: function onComplete() {
	          cb();
	        }
	      });
	    }
	  }, {
	    key: 'hashScroll',
	    value: function hashScroll() {
	
	      var h = location.hash;
	      if (h == '' || h == null || h == undefined) return;
	
	      var st01 = $('.section04').offset().top;
	      var diff = 60;
	      if (gb.r.w < 768) diff *= 0.8;
	      if (h == "#campaign") this.runTo(st01 - diff, function () {});
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.not('.notScroll').on('click', function () {
	        self.run.call(self, this);return false;
	      });
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Scroll
	//
	//--------------------------------------------------
	
	var Scroll = function () {
	  function Scroll(targetST) {
	    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	    var name = arguments[4];
	
	    _classCallCheck(this, Scroll);
	
	    this.targetST = targetST;
	
	    this.isLock = false;
	
	    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);
	
	    this.cb = cb;
	    this.cb02 = cb02;
	
	    this.name = name;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Scroll, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      var st = gb.s.st;
	
	      // 特定のst以上になったら1回だけ実行
	
	      if (this.flag) {
	
	        if (this.targetST <= st && !this.isLock) {
	          this.isLock = true;
	
	          this.cb();
	        }
	
	        // if (this.targetST>st && this.isLock) {
	        //   this.isLock = false;
	
	        //   this.cb02();
	
	        // }
	
	        // 特定のst以上になったら連続cb実行
	      } else {
	
	          // if (this.targetST<=st) {
	
	          //   this.cb();
	
	          // }
	
	          // if (this.targetST>st) {
	
	          //   this.cb02();
	
	          // }
	
	        }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // log('setEvents');
	
	      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.sl.remove('Scroll' + this.name);
	    }
	  }]);
	
	  return Scroll;
	}();
	
	exports.default = Scroll;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
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
	
	  function Controller() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$wrap = $('body');
	    _this.$target = $target;
	    // if (gb.u.dv.isPC) this.$target = $target;
	    // else this.$target = $('#inner');
	    _this.target = _this.$target.get(0);
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isREv = true;
	      this.isUEv = true;
	      this.isRun = false;
	
	      this.speed = 0.12;
	
	      this.scrollY = gb.s.st;
	      this.y = 0;
	      this.oldy = 0;
	
	      if (gb.u.dv.isPC) {
	        this.$wrap.height(this.$target.height());
	      } else {
	        var html = '<div class="fakeHeight"></div>';
	        $('#wrapper').append(html);
	        $('.fakeHeight').height(this.$target.height());
	        $('.fakeHeight').css({ 'position': 'relative', 'z-index': '999999', 'pointer-events': 'none' });
	      }
	      this.$target.css({ position: 'fixed', width: '100%' });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // update
	      this.y += (this.scrollY - this.y) * this.speed;
	      this.y = Number(this.y.toFixed(1));
	
	      // draw
	      this.drawPos();
	
	      // constrain
	      var dis = this.scrollY - this.y;
	      if (dis < 1 && dis > -1) {
	        this.isRun = false;
	        this.offU();
	      }
	
	      this.oldy = this.y;
	    }
	  }, {
	    key: 'drawPos',
	    value: function drawPos() {
	
	      this.target.style.transform = "translate3d(0, " + -this.y + "px, 0)";
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.scrollY = gb.s.st;
	      if (!this.isRun) {
	        this.isRun = true;
	        this.offU();
	        this.onU();
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // if (gb.u.dv.isPC) this.$wrap.height(this.$target.height());
	      // else $(html).height(this.$target.height());
	
	      this.$wrap.height(this.$target.height());
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      gb.sl.add('FakeScroll', this.onScroll.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(49);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(52);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
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
	
	  function Controller($wrap) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.isREv = true;
	
	    _this.$wrap = $wrap;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // scroll
	      var tsl = new _Controller2.default(this.$wrap);
	
	      // move
	      this.$wrap.find('.itemWrap').each(function (index, el) {
	        if (tsl.list[index] == undefined) return;
	
	        // if (index>0) return;
	        var pos = tsl.list[index].pos;
	        var m = new _Controller4.default($(el), pos, gb.moveItemsIndex);
	
	        gb.moveItems.push(m);
	        gb.moveItemsIndex++;
	      });
	
	      log(gb.moveItems);
	    }
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Position = __webpack_require__(50);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
	var _index2 = __webpack_require__(51);
	
	var e = _interopRequireWildcard(_index2);
	
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
	
	  function Controller($wrap) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$target = $wrap.find('.item');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      var _this2 = this;
	
	      this.isREv = true;
	      this.isUEv = true;
	
	      this.isRun = false;
	      this.speed = 0.12;
	      this.scrollY = gb.s.st;
	      this.y = 0;
	      this.tary = 0;
	
	      this.top = .8;
	      this.btm = .2;
	      this.kake = 3;
	      this.ease = .06;
	      if (gb.u.dv.isSP) {
	        this.top = .8;
	        this.btm = .2;
	        this.kake = 2;
	        this.ease = .08;
	      }
	
	      this.list = [];
	      this.listPlane = [];
	
	      // param set
	      this.$target.each(function (index, el) {
	
	        // if (index>0) return;
	
	        // obj
	        var obj = {};
	        obj.$target = $(el);
	        obj.$inner = $(el).find('.itemInner');
	        obj.pos = new _Position2.default($(el));
	        obj.y = 0;
	        obj.scale = 0;
	
	        // random
	        // if ($(el).hasClass('item')) {
	
	        //   obj.ease = m.map(0.12 + (Math.random() - 0.5) * 0.3, 0.04, 0.2, -0.03, 0.27);
	        //   obj.distance = 500 + (Math.random() - 0.5) * 1000;
	
	        // // sizeから
	        // } else {
	
	        var size = $(el).find('img').width() * $(el).find('img').height() / 1000;
	        obj.ease = 0.2 - m.map(size, 0.04, 0.2, 0, 300);
	        obj.distance = 300 - Math.random() * size;
	
	        // }
	
	        // 手動
	        // obj.ease = $(el).data('ease');
	        // obj.distance = $(el).data('distance');
	
	        _this2.list.push(obj);
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // if (gb.up.frame%4==0) return
	
	      this.y += (this.scrollY - this.y) * this.speed;
	
	      for (var i = 0; i < this.list.length; i++) {
	
	        var $target = this.list[i].$target;
	        var $inner = this.list[i].$inner;
	        var pos = this.list[i].pos;
	        var y = this.list[i].y;
	        var scale = this.list[i].scale;
	        var ease = this.list[i].ease;
	        var distance = this.list[i].distance;
	
	        pos.update();
	
	        // var speed = Math.abs(pos.progressC);
	        // speed = Number(speed.toFixed(2));
	
	        var targetY = 0.0;
	        var scaleT = 1;
	
	        // log(pos.progress);
	
	        if (pos.progress > this.top) {
	          var val = pos.progress - this.top;
	          var targetY = m.lerp(0.0, pos.progressC * distance * this.kake, val);
	          targetY = m.constrain(targetY, 0, 300);
	
	          scaleT = m.map(val, 1.0, 0.0, 0.0, 0.2);
	          scaleT = e.inExpo(scaleT);
	        }
	        if (pos.progress < this.btm) {
	          var val = this.btm - pos.progress;
	          var targetY = m.lerp(0.0, pos.progressC * distance * this.kake, val);
	          targetY = m.constrain(targetY, -300, 0);
	
	          scaleT = m.map(val, 1.0, 0.0, 0.0, 0.2);
	          scaleT = e.inExpo(scaleT);
	        }
	
	        y += (targetY - y) * this.ease;
	        y = Number(y.toFixed(1));
	        scale += (scaleT - scale) * 0.12;
	        // scale = Number(scale.toFixed(1));
	        this.drawPos($inner, y, scale);
	        this.list[i].y = y;
	        this.list[i].scale = scale;
	      }
	
	      // updateを止める
	      var dis = this.scrollY - this.y;
	      if (dis < .1 && dis > -.1) {
	        this.isRun = false;
	        this.offU();
	      }
	    }
	  }, {
	    key: 'drawPos',
	    value: function drawPos($target, y, scale) {
	
	      // if (gb.up.frame%4==0) return
	
	      $target.get(0).style.transform = "translate3d(0, " + -y + "px, 0) scale(" + scale + ")";
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.scrollY = gb.s.st;
	      if (!this.isRun) {
	        this.isRun = true;
	        this.offU();
	        this.onU();
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      gb.sl.add('FakeScroll', this.onScroll.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Position
	//
	//--------------------------------------------------
	
	var Position = function () {
	  function Position($target) {
	    _classCallCheck(this, Position);
	
	    this.$target = $target;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Position, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.progress = 0;
	      this.progressC = 0; // cneter
	      this.progressOld = 0;
	      this.isStageIn = false;
	      this.stageSize = { width: 0, height: 0 };
	      this.offset = { left: 0, top: 0, width: 0, height: 0 };
	      this.stageInOffset = { min: 0, max: 1 };
	
	      this.h = this.$target.height();
	      this.top = this.$target.offset().top;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      var top = this.top - gb.s.st;
	
	      // log((top+h/2) / gb.r.h);
	
	      // progress
	      this.progress = 1 - (top + this.h) / (gb.r.h + this.h);
	      this.progressC = 1 - (top + this.h / 2) / (gb.r.h / 2);
	      // var dir = this.progress-this.progressOld;
	
	      // in,out
	      // if(this.progress >= 0 && this.progress <= 1){
	      //   this.isStageIn = true;
	      // }else{
	      //   this.isStageIn = false;
	      // }
	
	      // this.progressOld = this.progress; 
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.h = this.$target.height();
	      this.top = this.$target.offset().top;
	      // if (gb.u.dv.isSP) this.top += gb.s.st;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	    }
	  }]);
	
	  return Position;
	}();
	
	exports.default = Position;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linear = linear;
	exports.inBack = inBack;
	exports.inBounce = inBounce;
	exports.inCirc = inCirc;
	exports.inCubic = inCubic;
	exports.inElastic = inElastic;
	exports.inExpo = inExpo;
	exports.inQuad = inQuad;
	exports.inQuart = inQuart;
	exports.inQuint = inQuint;
	exports.inSine = inSine;
	exports.outBack = outBack;
	exports.outBounce = outBounce;
	exports.outCirc = outCirc;
	exports.outCubic = outCubic;
	exports.outElastic = outElastic;
	exports.outExpo = outExpo;
	exports.outQuad = outQuad;
	exports.outQuart = outQuart;
	exports.outQuint = outQuint;
	exports.outSine = outSine;
	exports.inOutBack = inOutBack;
	exports.inOutBounce = inOutBounce;
	exports.inOutCirc = inOutCirc;
	exports.inOutCubic = inOutCubic;
	exports.inOutExpo = inOutExpo;
	exports.inOutQuad = inOutQuad;
	exports.inOutQuart = inOutQuart;
	exports.inOutQuint = inOutQuint;
	exports.inOutSine = inOutSine;
	// # ---------------------------------------------------
	// # イージング計算用オブジェクト
	// # t(0~1)を渡すと歪めた結果(0~1)を返す
	// # ---------------------------------------------------
	
	// # -----------------------------------------------
	// # メソッド一覧
	// # @linear
	// #
	// # @inBack
	// # @inBounce
	// # @inCirc
	// # @inCubic
	// # @inElastic
	// # @inExpo
	// # @inQuad
	// # @inQuart
	// # @inQuint
	// # @inSine
	// #
	// # @outBack
	// # @outBounce
	// # @outCirc
	// # @outCubic
	// # @outElastic
	// # @outExpo
	// # @outQuad
	// # @outQuart
	// # @outQuint
	// # @outSine
	// #
	// # @inOutBack
	// # @inOutBounce
	// # @inOutCirc
	// # @inOutCubic
	// # @inOutExpo
	// # @inOutQuad
	// # @inOutQuart
	// # @inOutQuint
	// # @inOutSine
	// # -----------------------------------------------
	
	function linear(t) {
	
	  return t;
	}
	
	function inBack(t) {
	
	  var s = 1.70158;
	  return t * t * ((s + 1) * t - s);
	}
	
	function inBounce(t) {
	
	  t = 1.0 - t;
	
	  if (t < 1 / 2.75) return 1.0 - 7.5625 * t * t;
	
	  if (t < 2 / 2.75) {
	    t -= 1.5 / 2.75;
	    return 1.0 - (7.5625 * t * t + 0.75);
	  }
	
	  if (t < 2.5 / 2.75) {
	    t -= 2.25 / 2.75;
	    return 1.0 - (7.5625 * t * t + 0.9375);
	  }
	
	  t -= 2.625 / 2.75;
	  return 1.0 - (7.5625 * t * t + 0.984375);
	}
	
	function inCirc(t) {
	
	  if (t >= 1) return 1;else return -(Math.sqrt(1 - t * t) - 1);
	}
	
	function inCubic(t) {
	
	  return t * t * t;
	}
	
	function inElastic(t) {
	
	  var p = 0.3;
	  var a = 1.0;
	  var s = 1.70158;
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  if (a < 1.0) {
	    a = 1.0;
	    s = p / 4;
	  } else {
	    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
	  }
	
	  --t;
	  return -(a * Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * 3.1419) / p));
	}
	
	function inExpo(t) {
	
	  if (t == 0) return 0;else return Math.pow(2, 10 * (t - 1));
	}
	
	function inQuad(t) {
	
	  return t * t;
	}
	
	function inQuart(t) {
	
	  return t * t * t * t;
	}
	
	function inQuint(t) {
	
	  return t * t * t * t * t;
	}
	
	function inSine(t) {
	
	  return -Math.cos(t * (Math.PI / 2)) + 1.0;
	}
	
	function outBack(t, s) {
	
	  s = s || 1.70158;
	  --t;
	  return t * t * ((s + 1.0) * t + s) + 1.0;
	}
	
	function outBounce(t) {
	
	  if (t < 1 / 2.75) return 7.5625 * t * t;
	
	  if (t < 2 / 2.75) {
	    t -= 1.5 / 2.75;
	    return 7.5625 * t * t + 0.75;
	  }
	
	  if (t < 2.5 / 2.75) {
	    t -= 2.25 / 2.75;
	    return 7.5625 * t * t + 0.9375;
	  }
	
	  t -= 2.625 / 2.75;
	  return 7.5625 * t * t + 0.984375;
	}
	
	function outCirc(t) {
	
	  --t;
	  return Math.sqrt(1 - t * t);
	}
	
	function outCubic(t) {
	
	  --t;
	  return t * t * t + 1;
	}
	
	function outElastic(t, s) {
	
	  var p = s || 0.3;
	  var a = 1.0;
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  if (a < 1.0) {
	    a = 1.0;
	    s = p / 4;
	  } else {
	    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
	  }
	
	  return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * 3.1419) / p) + 1.0;
	}
	
	function outExpo(t) {
	
	  if (t == 1.0) return 1;else return -Math.pow(2, -10 * t) + 1;
	}
	
	function outQuad(t) {
	
	  return -t * (t - 2);
	}
	
	function outQuart(t) {
	
	  --t;
	  return 1.0 - t * t * t * t;
	}
	
	function outQuint(t) {
	
	  --t;
	  return t * t * t * t * t + 1;
	}
	
	function outSine(t) {
	
	  return Math.sin(t * (Math.PI / 2));
	}
	
	function inOutBack(t, s) {
	
	  var s = s || 1.70158;
	  var k = 1.525;
	
	  t *= 2;
	  s *= k;
	
	  if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));
	
	  t -= 2;
	  return 0.5 * (t * t * ((s + 1) * t + s) + 2);
	}
	
	function inOutBounce(t) {
	
	  if (t < 0.5) return this.inBounce(t * 2) * 0.5;else return this.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
	}
	
	function inOutCirc(t) {
	
	  t *= 2;
	
	  if (t < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
	
	  t -= 2;
	  return 0.5 * (Math.sqrt(1 - t * t) + 1);
	}
	
	function inOutCubic(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t;
	
	  t -= 2;
	  return 0.5 * (t * t * t + 2);
	}
	
	function inOutExpo(t) {
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  t *= 2;
	  if (t < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
	
	  --t;
	  return 0.5 * (-Math.pow(2, -10 * t) + 2);
	}
	
	function inOutQuad(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t;
	
	  t -= 2;
	  return -0.5 * (t * t * t * t - 2);
	}
	
	function inOutQuart(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t;
	
	  t -= 2;
	  return -0.5 * (t * t * t * t - 2);
	}
	
	function inOutQuint(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t * t;
	
	  t -= 2;
	  return 0.5 * (t * t * t * t * t + 2);
	}
	
	function inOutSine(t) {
	
	  return -0.5 * (Math.cos(Math.PI * t) - 1);
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(53);
	
	var _Val2 = _interopRequireDefault(_Val);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($target, pos, index) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$target = $target;
	    _this.target = _this.$target.get(0);
	    _this.$img = _this.$target.find('img');
	    _this.img = _this.$img.get(0);
	    _this.pos = pos;
	    _this.point = { x: 0, y: 0 };
	    _this.index = index;
	
	    _this.setup();
	    _this.setEvents();
	
	    var tl = new TimelineMax();
	
	    tl.add(function () {
	
	      _this.repeat();
	    }, 4.0 + Math.random() * 3.0);
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      this.v = new _Val2.default();
	
	      this.x = 0;
	      this.y = 0;
	
	      // noraml
	      // this.ease = 0.12;
	      // this.radius = 100;
	
	      // random
	      this.ease = m.map(0.09 + (Math.random() - 0.5) * 0.1, 0.02, 0.16, -0.03, 0.27);
	      this.radius = 50 + 100 * Math.random();
	      if (gb.r.w <= 768) this.radius = 10 + 20 * Math.random();
	
	      this.ookisa = 0.1 + (Math.random() - 0.5) * 0.04;
	
	      // var size = this.$target.find('img').width() * this.$target.find('img').height() / 1000;
	      // this.ease = 0.16 - m.map(size , 0.04, 0.12, 0, 600);
	      // this.radius = 600 - size * 0.95;
	
	      this.radStart = 10000 * Math.random();
	
	      this.basex = this.$target.offset().left + this.$target.width() / 2;
	      this.basey = this.$target.offset().top + this.$target.height() / 2;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // if (gb.up.frame%4==0) return
	
	      var mx = gb.m.cx;
	      var my = gb.m.cy;
	      var cx = mx;
	      var cy = my;
	
	      var tarx = 0;
	      var tary = 0;
	      var ookisa = 20;
	      var radius = 50;
	
	      // noise
	      // tarx += this.v.noise(this.radStart + gb.up.frame / 200) * ookisa;
	      // tary += this.v.noise(this.radStart + gb.up.frame / 200, 100) * ookisa;
	
	      // 回転
	      tarx += 0 + Math.cos((Math.sin(this.radStart + gb.up.frame / 150) + 1) / 2 * Math.PI / 2 + Math.PI / 4) * radius;
	      tary += 0 + Math.sin((Math.sin(this.radStart + gb.up.frame / 150) + 1) / 2 * Math.PI / 2 + Math.PI / 4) * radius;
	
	      // mousemove
	      tarx += cx * this.ookisa;
	      tary += cy * this.ookisa;
	
	      this.x += (tarx - this.x) * this.ease;
	      this.y += (tary - this.y) * this.ease;
	
	      // draw
	      this.x = Number(this.x.toFixed(1));
	      this.y = Number(this.y.toFixed(1));
	
	      if (this.pos.progress < 1.5 && this.pos.progress > -.5) this.target.style.transform = "translate3d(" + this.x + "px, " + this.y + "px, 0)";
	
	      if (this.pos.progress < 1.5 && this.pos.progress > -.5) {
	
	        // 変換後のpoint    
	        // pos
	        var lay = this.img.getBoundingClientRect();
	        this.point.x = lay.left - gb.r.w / 2;
	        this.point.y = lay.top - gb.r.h / 2;
	
	        // size    
	        // this.point.x += this.$img.width() / 2;
	        // this.point.y += this.$img.height() / 2;
	        this.point.x += lay.width / 2;
	        this.point.y += lay.height / 2;
	
	        this.point.y *= -1;
	
	        // log(this.point)
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'repeat',
	    value: function repeat() {
	      var _this2 = this;
	
	      var tl = new TimelineMax({});
	
	      tl.add(function () {
	
	        _this2.$img.addClass('jelly-target');
	
	        if (_this2.pos.progress < 1.5 && _this2.pos.progress > -.5) gb.mv.obj.onItemBound(_this2.index);
	      }, 0.0).add(function () {
	
	        _this2.$img.removeClass('jelly-target');
	      }, 2.0).add(function () {
	
	        _this2.repeat();
	      }, 4.0);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 53 */
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
	
	    // if (window.ImprovedNoise) this.p = new ImprovedNoise();
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Position = __webpack_require__(55);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
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
	
	  function Controller() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$target = $('.parallaxImg');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      var _this2 = this;
	
	      this.isREv = true;
	      this.isUEv = true;
	
	      this.isRun = false;
	      this.speed = 0.12;
	      this.scrollY = gb.s.st;
	      this.sy = 0;
	      this.y = 0;
	      this.tary = 0;
	      this.ease = 0.08;
	      this.dis = 90;
	      if (gb.r.w <= 750) this.dis = 60;
	
	      this.list = [];
	      this.$target.each(function (index, el) {
	
	        var p = new _Position2.default($(el), 'parallax_About_resize' + index);
	        var obj = {};
	        obj.target = $(el).get(0);
	        obj.p = p;
	        obj.y = 0;
	
	        var val = index * 0.5;
	        if (index == 1) val = index * 0.5;
	        obj.dis = 100 * (val + 1);
	
	        _this2.list.push(obj);
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // if (gb.up.frame%4==0) return
	
	      this.sy += (this.scrollY - this.sy) * this.speed;
	
	      for (var i = 0; i < this.list.length; i++) {
	        var l = this.list[i];
	
	        var p = l.p;
	        p.update();
	        var targetY = -l.dis / 2 + p.progress * l.dis / 2;
	        l.y += (targetY - l.y) * this.ease;
	        l.y = Number(l.y.toFixed(1));
	        if (p.progress < 1.2 && p.progress > -0.2) this.drawPos(l.target, l.y);
	      }
	
	      // updateを止める
	      var dis = this.scrollY - this.sy;
	      if (dis < .1 && dis > -.1) {
	        this.isRun = false;
	        this.offU();
	      }
	    }
	  }, {
	    key: 'drawPos',
	    value: function drawPos(t, y) {
	
	      // if (gb.up.frame%4==0) return
	
	      t.style.transform = "translate3d(0, " + -y + "px, 0)";
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.scrollY = gb.s.st;
	      if (!this.isRun) {
	        this.isRun = true;
	        this.offU();
	        this.onU();
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      gb.sl.add('parallax', this.onScroll.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'removeEvents', this).call(this);
	
	      for (var i = 0; i < this.list.length; i++) {
	        var p = this.list[i].p;
	        p.removeEvents();
	      }
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Position
	//
	//--------------------------------------------------
	
	var Position = function () {
	  function Position($target, name) {
	    _classCallCheck(this, Position);
	
	    this.$target = $target;
	    this.name = name;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Position, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.progress = 0;
	      this.progressC = 0; // cneter
	      this.progressOld = 0;
	      this.isStageIn = false;
	      this.stageSize = { width: 0, height: 0 };
	      this.offset = { left: 0, top: 0, width: 0, height: 0 };
	      this.stageInOffset = { min: 0, max: 1 };
	
	      this.h = this.$target.height();
	      this.top = this.$target.offset().top;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      var top = this.top - gb.s.st;
	
	      // log((top+h/2) / gb.r.h);
	
	      // progress
	      this.progress = 1 - (top + this.h) / (gb.r.h + this.h);
	      this.progressC = 1 - (top + this.h / 2) / (gb.r.h / 2);
	      // var dir = this.progress-this.progressOld;
	
	      // in,out
	      // if(this.progress >= 0 && this.progress <= 1){
	      //   this.isStageIn = true;
	      // }else{
	      //   this.isStageIn = false;
	      // }
	
	      // this.progressOld = this.progress; 
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.h = this.$target.height();
	      this.top = this.$target.offset().top;
	      // if (gb.u.dv.isSP) this.top += gb.s.st;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      $(window).off('resize' + '.' + this.name);
	    }
	  }]);
	
	  return Position;
	}();
	
	exports.default = Position;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Order = __webpack_require__(57);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _Render = __webpack_require__(58);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	var _Swipe = __webpack_require__(60);
	
	var _Swipe2 = _interopRequireDefault(_Swipe);
	
	var _MouseDrag = __webpack_require__(61);
	
	var _MouseDrag2 = _interopRequireDefault(_MouseDrag);
	
	var _Controller = __webpack_require__(62);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(63);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
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
	
	  function Controller($target) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.setup();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.name = 'slider';
	
	      this.isUEv = true;
	      this.xs = [];
	      this.eases = [];
	      this.dis = 0;
	
	      this.sign = 1;
	      this.$wrap = $('.block04 .imgs');
	      this.$inner = this.$wrap.find('.imgInner');
	      this.$move = this.$wrap.find('.imgMove');
	      this.$item = this.$wrap.find('.img');
	      this.len = this.$item.length;
	      for (var i = 0; i < this.len; i++) {
	        this.xs.push(0);
	        this.eases.push(0);
	      }
	
	      this.vs = [];
	
	      var path = 'tate';
	      if (gb.r.w > 768) path = 'yoko';
	      for (var i = 0; i < this.len; i++) {
	        var $t = this.$item.eq(i);
	        var v = new _Controller4.default('./assets/resource/video/' + path + (i + 1) + '.mp4', function () {}, $t);
	        this.vs.push(v);
	      }
	
	      this.o = new _Order2.default(this.len);
	      this.r = new _Render2.default(this.$wrap, this.len);
	      new _Controller2.default(this.$wrap);
	
	      // this.timeline();
	
	      this.setEvents();
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	
	      // if (this.r.isLock) return;
	      // this.r.isLock = true;
	
	      this.o.go();
	
	      this.r.next(this.o.current, this.o.next, this.o.prev);
	
	      // log(this.o);
	
	      for (var i = 0; i < this.len; i++) {
	        var v = this.vs[i];
	        if (this.o.current + 1 !== i) v.r.pause();
	      }
	      this.vs[this.o.current + 1].r.play();
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	
	      // if (this.r.isLock) return;
	      // this.r.isLock = true;
	
	      this.o.back();
	
	      this.r.prev(this.o.current, this.o.next, this.o.nextnext);
	
	      // log(this.o);
	
	      for (var i = 0; i < this.len; i++) {
	        var v = this.vs[i];
	        if (this.o.current + 1 !== i) v.r.pause();
	      }
	      this.vs[this.o.current + 1].r.play();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // log(this.sign);
	
	      for (var i = 0; i < this.len; i++) {
	
	        var $item = this.$item.eq(i);
	        var ease = this.eases[i];
	        // log(x)
	        var easeTar = this.sign > 0 ? 0.06 + i * 0.05 : 0.06 + (this.len - 1 - i) * 0.05;
	
	        // ease += (easeTar - ease) * 0.12;
	        this.eases[i] += (easeTar - this.eases[i]) * 0.10;
	
	        // log(''+i+'', this.eases[i]);
	
	        // x += (this.dis - x) * 0.12;
	        this.xs[i] += (this.dis - this.xs[i]) * this.eases[i];
	
	        if (this.xs[i] > 0.1 || this.xs[i] < -0.1) {
	
	          TweenMax.set($item, { x: this.xs[i], z: 0 });
	        }
	      }
	
	      // if (this.x>0.1||this.x<-0.1) TweenMax.set(this.$move, {x: this.x, z: 0});
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this2 = this;
	
	      var self = this;
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	
	      // swipe event
	      // swipe
	      if (gb.u.dv.isSP) this.s = new _Swipe2.default(this.$wrap);
	      // if (gb.r.w<769) this.s = new Swipe(this.$wrap);
	      else this.s = new _MouseDrag2.default(this.$wrap);
	
	      // swipe event
	      this.s.onStart = function () {
	
	        _this2.dis = 0;
	        TweenMax.killTweensOf(_this2);
	        _this2.isDrag = true;
	
	        gb.u.o.notMove(true);
	      };
	      this.s.onMove = function (sign, val, distance) {
	
	        _this2.sign = sign;
	        if (_this2.isDrag) _this2.dis = -distance * 0.9;
	
	        // if (!this.isDrag||val<3) return;
	        // if (!this.isDrag||Math.abs(this.x)<gb.r.w/4*1.5) return;
	        if (!_this2.isDrag || Math.abs(distance) < gb.r.w / 4 * 1) return;
	
	        // stop
	        _this2.isDrag = false; // 連続でさせるなら、ここをコメントアウト
	
	        // next
	        if (sign > 0) _this2.next();else _this2.prev();
	
	        // 戻る動き
	        log(_this2.o);
	        if (_this2.o.max == 'over' || _this2.o.min == 'over') {
	          TweenMax.to(_this2, 1.4, {
	            dis: 0,
	            ease: Elastic.easeOut.config(1.2, 0.34)
	          });
	        } else {
	          TweenMax.to(_this2, 0.6, {
	            dis: 0,
	            ease: Power2.easeOut
	          });
	        }
	      };
	      this.s.onEnd = function () {
	
	        // this.dis = 0;
	        TweenMax.to(_this2, 1.0, {
	          dis: 0,
	          ease: Elastic.easeOut.config(1.4, 0.38)
	        });
	
	        _this2.isDrag = false;
	
	        gb.u.o.notMove(false);
	      };
	      this.s.onSwipe = function (sign) {
	
	        // log('swipe', sign);
	
	        // if (sign>0) this.autoSwitch('next')
	        // else this.autoSwitch('prev')
	
	      };
	
	      if (gb.u.dv.isPC) {
	
	        for (var i = 0; i < this.len; i++) {
	
	          var v = this.vs[i];
	
	          // v.r.play();
	
	          if (i !== 1) v.r.pause();
	        }
	      } else {
	
	        $(window).one('touchstart', function (event) {
	
	          for (var i = 0; i < _this2.len; i++) {
	            var v = _this2.vs[i];
	
	            var cb = function cb(v, index) {
	
	              var tl = new TimelineMax();
	
	              log('touch');
	
	              tl.add(function () {
	                if (index !== 1) v.r.pause();
	              }, 0.0);
	            };
	
	            v.r.play();
	
	            cb(v, i);
	          }
	        });
	      }
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Order
	//
	//--------------------------------------------------
	
	var Order = function () {
	  function Order(len) {
	    _classCallCheck(this, Order);
	
	    this.current = 0;
	    this.old = null;
	    this.next = 1;
	    this.prev = len - 1;
	    this.len = len;
	
	    this.max = 'not';
	    this.min = 'not';
	
	    this.isLoop = false;
	
	    this.setup(len);
	    this.setEvents();
	  }
	
	  _createClass(Order, [{
	    key: 'setup',
	    value: function setup(len) {
	
	      this.current = 0;
	      this.old = null;
	      this.next = 1;
	      this.nextnext = 2;
	      this.prev = len - 1;
	      this.len = len;
	    }
	  }, {
	    key: 'go',
	    value: function go() {
	
	      // currentの計算
	      this.calculateOrder('right');
	    }
	  }, {
	    key: 'back',
	    value: function back() {
	
	      // currentの計算
	      this.calculateOrder('left');
	    }
	  }, {
	    key: 'calculateOrder',
	    value: function calculateOrder(dir) {
	
	      // ------------------------------------------------------------
	      // 端で止める
	      // ------------------------------------------------------------
	      if (!this.isLoop) {
	        if (dir == 'right') {
	
	          this.current++;
	          if (this.current > this.len - 2) {
	            this.current = this.len - 2;
	            this.max = 'over';
	          } else {
	            this.min = 'not';
	          }
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        } else {
	
	          this.current--;
	          if (this.current < -1) {
	            this.current = -1;
	            this.min = 'over';
	          } else {
	            this.max = 'not';
	          }
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        }
	      }
	
	      // ------------------------------------------------------------
	      // ループ
	      // ------------------------------------------------------------
	      if (this.isLoop) {
	        if (dir == 'right') {
	
	          this.current++;
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	
	          // if (this.current>this.len-1) {
	
	          //   this.current=0;
	          //   this.next=this.current+1;
	          //   this.nextnext=this.current+2;
	          //   this.prev=this.len-1;
	
	          // } else {
	
	          //   this.next = this.current+1;
	          //   this.nextnext = this.current+2;
	          //   this.prev = this.current-1;
	
	          // }
	
	          // if (this.current==this.len-1) {
	
	          //   this.next=0;
	          //   this.nextnext=1;
	          //   this.prev=this.current-1;
	
	          // }
	          // if (this.current==this.len-2) {
	
	          //   this.nextnext=0;
	
	          // }
	        } else {
	
	          this.current--;
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	
	          // if (this.current<0) {
	
	          //   this.current=this.len-1;
	          //   this.next = 0;
	          //   this.nextnext = 0 + 1;
	          //   this.prev = this.current-1;
	
	          // } else {
	
	          //   this.next = this.current+1;
	          //   this.nextnext = this.current+2;
	          //   this.prev = this.current-1;
	
	          // }
	
	          // if (this.current==0) {
	
	          //   this.next=1;
	          //   this.nextnext=2;
	          //   this.prev=this.len-1;
	
	          // }
	          // if (this.current==this.len-1) {
	
	          //   this.nextnext=1;
	
	          // }
	          // if (this.current==this.len-2) {
	
	          //   this.nextnext=0;
	
	          // }
	        }
	
	        this.old = this.current;
	      }
	    }
	  }, {
	    key: 'setCur',
	    value: function setCur(num) {
	
	      this.current = num;
	      this.next = this.current + 1;
	      this.prev = this.current - 1;
	
	      if (this.next > this.len - 1) this.next = 0;
	      if (this.prev < 0) this.prev = this.len - 1;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Order;
	}();
	
	exports.default = Order;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Item = __webpack_require__(59);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function (_Base) {
	  _inherits(Render, _Base);
	
	  function Render($wrap, len) {
	    _classCallCheck(this, Render);
	
	    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));
	
	    _this.name = 'SliderRender';
	
	    _this.$wrap = $wrap;
	    _this.$inner = _this.$wrap.find('.imgInner');
	    _this.$item = _this.$wrap.find('.img');
	
	    _this.isLock = false;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.isREv = true;
	      this.onResize();
	
	      this.imgw = this.$item.width() + parseInt(this.$item.css('margin-right'));
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'next',
	    value: function next(current, _next, prev) {
	      var _this2 = this;
	
	      this.x = current * this.imgw;
	      this.num = current;
	
	      TweenMax.to(this.$inner, 1.4, {
	        x: -this.x,
	        ease: Elastic.easeOut.config(.7, 0.32),
	        onComplete: function onComplete() {
	          _this2.isLock = false;
	        }
	      });
	    }
	  }, {
	    key: 'prev',
	    value: function prev(current, next, nextnext) {
	      var _this3 = this;
	
	      this.x = current * this.imgw;
	      this.num = current;
	
	      TweenMax.to(this.$inner, 1.4, {
	        x: -this.x,
	        ease: Elastic.easeOut.config(.7, 0.32),
	        onComplete: function onComplete() {
	          _this3.isLock = false;
	        }
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      _get(Render.prototype.__proto__ || Object.getPrototypeOf(Render.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Render;
	}(_Base3.default);
	
	exports.default = Render;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Btn
	//
	//--------------------------------------------------
	
	var Btn = function () {
	  function Btn($target, index) {
	    _classCallCheck(this, Btn);
	
	    this.name = 'SliderTopRenderItem';
	
	    this.$item = $target;
	    this.$bar = $target.find('.textIn .bar');
	
	    this.isLock = false;
	    this.isEnter = false;
	    this.ve = 0;
	    this.vl = 0;
	    this.index = index;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Btn, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$bar, { scaleX: 0, 'transform-origin': '0% 50%', z: 0 });
	    }
	  }, {
	    key: 'show',
	    value: function show() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	      var _this = this;
	
	      this.isEnter = true;
	      if (this.ve != 0 || this.vl != 0) return;
	
	      this.tlEnter = new TimelineMax();
	
	      this.tlEnter.set($(that).find('.bar'), { scaleX: 0, 'transform-origin': '0% 50%', x: 0 }).to($(that).find('.bar'), 0.6, {
	        scaleX: 1,
	        ease: Expo.easeOut,
	        onUpdate: function onUpdate() {
	
	          _this.ve = _this.tlEnter.progress().toFixed(2);
	
	          if (!_this.isEnter && _this.ve >= 0.99) {
	            if (_this.tlEnter) _this.tlEnter.kill();
	            _this.hide(that);
	            _this.ve = 0;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide(that) {
	      var _this2 = this;
	
	      if (this.tlLeave) this.tlLeave.kill();
	      this.tlLeave = new TimelineMax();
	
	      this.tlLeave.to($(that).find('.bar'), 0.5, {
	        scaleX: 0,
	        // x: 2,
	        ease: Expo.easeInOut,
	        onStart: function onStart() {
	          TweenMax.set($(that).find('.bar'), { 'transform-origin': '100% 0%' });
	        },
	        onUpdate: function onUpdate() {
	
	          _this2.vl = _this2.tlLeave.progress().toFixed(2);
	
	          if (_this2.isEnter && _this2.vl >= 0.99) {
	            if (_this2.tlEnter) _this2.tlEnter.kill();
	            _this2.vl = 0;
	            _this2.ve = 0;
	            _this2.onEnter(that);
	          }
	        },
	        onComplete: function onComplete() {
	          _this2.ve = 0;
	          _this2.vl = 0;
	        }
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      log('leave');
	
	      this.isEnter = false;
	
	      if (this.ve >= 0.99) {
	        this.hide(that);
	        // this.v = 0;
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$item.on('mouseenter' + '.' + this.name, function () {
	        self.onEnter.call(self, this);
	      });
	      this.$item.on('mouseleave' + '.' + this.name, function () {
	        self.onLeave.call(self, this);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$item.off('mouseenter' + '.' + this.name);
	      this.$item.off('mouseleave' + '.' + this.name);
	    }
	  }]);
	
	  return Btn;
	}();
	
	exports.default = Btn;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Swipe
	//
	// ------------------------------------------------------------
	
	var Swipe = function () {
	  function Swipe() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, Swipe);
	
	    // ---------------
	    //  dom
	    // ---------------
	    this.$wrap = $wrap;
	
	    // ---------------
	    //  variable
	    // ---------------
	
	    // position
	    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
	    this.dis = 0;this.minDis = 50;
	    this.premX = 0;
	
	    // time
	    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,
	
	
	    this.onStart = function () {};
	    this.onMove = function () {};
	    this.onEnd = function () {};
	    this.onSwipe = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Swipe, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(e) {
	
	      // time
	      this.sT = new Date().getTime();
	      // pos
	      this.sX = e.originalEvent.changedTouches[0].pageX;
	
	      this.premX = this.sX;
	
	      // コールバック
	      this.onStart();
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      // pos
	      this.mX = e.originalEvent.changedTouches[0].pageX;
	      var distance = this.sX - this.mX;
	      var dis = this.premX - this.mX;
	      var sign = 1;
	      if (dis < 0) sign = -1;
	
	      this.onMove(sign, Math.abs(dis), distance);
	
	      this.premX = this.mX;
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd(e) {
	
	      // コールバック
	      this.onEnd();
	
	      // time
	      this.eT = new Date().getTime() - this.sT;
	      var disT = this.sT - this.eT;
	      // pos
	      this.eX = e.originalEvent.changedTouches[0].pageX;;
	      var dis = this.sX - this.eX;
	      var sign = 1;
	      if (dis < 0) sign = -1;
	
	      // 最小時間より長かったら、処理
	      // if(this.minT < this.eT) this.onSwipe();
	      // 最小距離より長かったら、処理
	      // log(dis, this.minDis);
	      if (Math.abs(dis) > this.minDis) this.onSwipe(sign);
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$wrap.off('touchstart.SwipeTop');
	      this.$wrap.off('touchmove.SwipeTop');
	      $(window).off('touchend.SwipeTop');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      this.removeEvents();
	
	      var self = this;
	
	      this.$wrap.on('touchstart.SwipeTop', function (e) {
	        _this.onTouchStart(e);
	      });
	      this.$wrap.on('touchmove.SwipeTop', function (e) {
	        _this.onTouchMove(e);
	      });
	      $(window).on('touchend.SwipeTop', function (e) {
	        _this.onTouchEnd(e);
	      });
	    }
	  }]);
	
	  return Swipe;
	}();
	
	exports.default = Swipe;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  MouseDrag
	//
	// ------------------------------------------------------------
	
	var MouseDrag = function () {
	  function MouseDrag() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, MouseDrag);
	
	    // ---------------
	    //  dom
	    // ---------------
	    this.$wrap = $wrap;
	
	    // ---------------
	    //  variable
	    // ---------------
	
	    // position
	    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
	    this.dis = 0;this.minDis = 50;
	    this.premX = 0;
	
	    // time
	    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,
	
	
	    this.onStart = function () {};
	    this.onMove = function () {};
	    this.onEnd = function () {};
	    this.onSwipe = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseDrag, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(e) {
	
	      // time
	      this.sT = new Date().getTime();
	      // pos
	      this.sX = e.pageX - $(window).scrollLeft();
	
	      // コールバック
	      this.onStart();
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      // pos
	      this.mX = e.pageX - $(window).scrollLeft();
	      var distance = this.sX - this.mX;
	      var dis = this.premX - this.mX;
	      var sign = 1;
	      if (dis < 0) sign = -1;
	
	      this.onMove(sign, Math.abs(dis), distance);
	
	      this.premX = this.mX;
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd(e) {
	
	      // コールバック
	      this.onEnd();
	
	      // time
	      this.eT = new Date().getTime() - this.sT;
	      var disT = this.sT - this.eT;
	      // pos
	      this.eX = e.pageX - $(window).scrollLeft();
	      var dis = this.sX - this.eX;
	      var sign = 1;
	      if (dis < 0) sign = -1;
	
	      // 最小時間より長かったら、処理
	      // if(this.minT < this.eT) this.onSwipe();
	      // 最小距離より長かったら、処理
	      // log(dis, this.minDis);
	      if (Math.abs(dis) > this.minDis) this.onSwipe(sign);
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$wrap.off('mousedown.MouseDrag');
	      $(window).off('mousemove.MouseDrag');
	      $(window).off('mouseup.MouseDrag');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      this.removeEvents();
	
	      var self = this;
	
	      this.$wrap.on('mousedown.MouseDrag', function (e) {
	        _this.onTouchStart(e);
	      });
	      // this.$wrap.on('mousemove.MouseDrag', (e)=>{this.onTouchMove(e);});
	      // this.$wrap.on('mouseup.MouseDrag', (e)=>{this.onTouchEnd(e);});
	      $(window).on('mousemove.MouseDrag', function (e) {
	        _this.onTouchMove(e);
	      });
	      $(window).on('mouseup.MouseDrag', function (e) {
	        _this.onTouchEnd(e);
	      });
	    }
	  }]);
	
	  return MouseDrag;
	}();
	
	exports.default = MouseDrag;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
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
	
	  function Controller() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
	
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.$wrap = $wrap;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      $('body').addClass('grab');
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onDown',
	    value: function onDown() {
	
	      $('body').removeClass('grab').addClass('grabbing');
	
	      $('body').addClass('no-select');
	    }
	  }, {
	    key: 'onUp',
	    value: function onUp() {
	
	      $('body').removeClass('grabbing').addClass('grab');
	
	      $('body').removeClass('no-select');
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter() {
	
	      $('body').addClass('grab');
	
	      $('body').addClass('no-select');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave() {
	
	      $('body').removeClass('grabbing').removeClass('grab');
	
	      $('body').removeClass('no-select');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // grab
	      this.$wrap.on('mousedown', this.onDown.bind(this));
	      this.$wrap.on('mouseup', this.onUp.bind(this));
	
	      this.$wrap.on('mouseleave', this.onLeave.bind(this));
	      this.$wrap.on('mouseenter', this.onEnter.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------
	
	var _Render = __webpack_require__(64);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(src, cb, $wrap) {
	    _classCallCheck(this, Controller);
	
	    this.$wrap = $wrap || $('body');
	
	    this.v = null;
	    this.src = src;
	    this.w = 0;
	    this.h = 0;
	    this.duration = 0;
	    this.currentTime = 0;
	    this.volume = 1;
	    this.loop = false;
	    this.autoplay = false;
	    this.muted = true;
	    this.controls = false;
	
	    this.isLoad = false;
	    this.isPlay = false;
	    this.isAutoPlay = false;
	    this.isLoop = true;
	    this.isControl = false;
	
	    // コールバック
	    this.cb = cb || function () {};
	
	    this.setup();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      // dom生成
	      this.v = document.createElement('video');
	      this.v.playsinline = true;
	      this.v.muted = true;
	      this.v.loop = true;
	      this.v.autoplay = true;
	
	      // type確認
	      var type = this.support(this.v);
	      if (type == "") {
	        return;
	      }
	
	      // videoのload
	      this.load();
	    }
	  }, {
	    key: 'load',
	    value: function load() {
	
	      // this.v.addEventListener("canplay", ()=>{
	      // this.v.addEventListener("canplaythrough", ()=>{
	
	      //   if (!this.isLoad) {
	
	      //     this.r = new Render(this);
	
	      //     this.isLoad = true;
	      //     this.getAttr();
	      //     this.cb();
	
	      //     if (this.isLoop) this.v.loop = true;
	      //     if (this.isControl) this.v.controls = true;
	
	      //     // append
	      //     this.prepend();
	      //     // this.append();
	      //     if (this.isAutoPlay) this.r.play();
	
	      //   };
	
	      // }, false);
	
	      // this.v.src = this.src;
	
	      this.r = new _Render2.default(this);
	
	      this.isLoad = true;
	
	      this.v.src = this.src;
	
	      $(this.v).attr({
	        playsinline: true,
	        muted: true,
	        loop: true,
	        autoplay: true
	      });
	
	      // append
	      this.prepend();
	      // this.append();
	      // if (this.isAutoPlay) this.r.play();
	
	    }
	  }, {
	    key: 'append',
	    value: function append() {
	
	      this.$wrap.append(this.v);
	    }
	  }, {
	    key: 'prepend',
	    value: function prepend() {
	
	      this.$wrap.prepend(this.v);
	    }
	  }, {
	    key: 'fullsize',
	    value: function fullsize($wrap, eventName, w, h) {
	
	      var l = new FullSize($wrap, $(this.v), 0, 'center');
	      l.targetDefW = w;
	      l.targetDefH = h;
	      l.run();
	    }
	  }, {
	    key: 'support',
	    value: function support() {
	
	      var ext = "";
	      if (this.v.canPlayType("video/webm") == "probably" || this.v.canPlayType("video/webm") == "maybe") {
	        ext = "webm";
	      } else if (this.v.canPlayType("video/mp4") == "probably" || this.v.canPlayType("video/mp4") == "maybe") {
	        ext = "mp4";
	      } else if (this.v.canPlayType("video/ogg") == "probably" || this.v.canPlayType("video/ogg") == "maybe") {
	        ext = "ogg";
	      }
	
	      return ext;
	    }
	  }, {
	    key: 'getAttr',
	    value: function getAttr() {
	
	      this.w = this.v.videoWidth;
	      this.h = this.v.videoHeight;
	      this.duration = this.v.duration;
	      this.currentTime = this.v.currentTime;
	      this.volume = this.v.volume;
	      this.loop = this.v.loop;
	      this.autoplay = this.v.autoplay;
	      this.muted = this.v.muted;
	      this.controls = this.v.controls;
	
	      log(this);
	    }
	  }, {
	    key: 'onLoadStart',
	    value: function onLoadStart() {
	
	      log('loadstart');
	    }
	  }, {
	    key: 'onProgress',
	    value: function onProgress() {
	
	      log('progress');
	
	      if (this.v.buffered.length > 0 && this.v.buffered.end && this.v.duration) {
	        var percent = this.v.buffered.end(0) / this.v.duration;
	      } else if (this.v.bytesTotal != undefined && this.v.bytesTotal > 0 && this.v.bufferedBytes != undefined) {
	        var percent = this.v.bufferedBytes / this.v.bytesTotal;
	      }
	
	      log(percent);
	    }
	  }, {
	    key: 'onSuspend',
	    value: function onSuspend() {
	
	      log('suspend');
	    }
	  }, {
	    key: 'onLoadedmetadata',
	    value: function onLoadedmetadata() {
	
	      log('loadedmetadata');
	    }
	  }, {
	    key: 'onCanplaythrough',
	    value: function onCanplaythrough() {
	
	      log('canplaythrough');
	    }
	  }, {
	    key: 'onLoop',
	    value: function onLoop() {
	
	      if (this.v.buffered.length > 0 && this.v.buffered.end && this.v.duration) {
	        var percent = this.v.buffered.end(0) / this.v.duration;
	      } else if (this.v.bytesTotal != undefined && this.v.bytesTotal > 0 && this.v.bufferedBytes != undefined) {
	        var percent = this.v.bufferedBytes / this.v.bytesTotal;
	      }
	
	      log(percent);
	
	      if (percent >= 1 && !isLock) {
	        isLock = true;
	        log(gb.u.d.s());
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      // this.v.addEventListener("loadstart", this.onLoadStart.bind(this), false);
	      // this.v.addEventListener("progress", this.onProgress.bind(this), false);
	      // this.v.addEventListener("suspend", this.onSuspend.bind(this), false), false);
	      // this.v.addEventListener("loadedmetadata", this.onLoadedmetadata.bind(this), false);
	      // this.v.addEventListener("canplaythrough", this.onCanplaythrough.bind(this), false);
	
	      // this.v.addEventListener("timeupdate", function () {
	      //   if(self.video.currentTime >= 6.0) {
	      //     self.video.currentTime = 5.0;
	      //     // self.video.pause();
	      //   }
	      // });
	
	      // 再生完了
	      // v.addEventListener("ended", function(){
	      //   document.getElementById("kanryou").innerHTML = "動画の再生が完了しました。";
	      // }, false);
	
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";
	
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
	
	    this.p = parent;
	  }
	
	  _createClass(Render, [{
	    key: "seekTo",
	    value: function seekTo(toTime) {
	
	      this.p.v.currentTime = toTime;
	    }
	  }, {
	    key: "play",
	    value: function play() {
	
	      this.p.v.play();
	      this.p.isPlay = true;
	    }
	  }, {
	    key: "pause",
	    value: function pause() {
	
	      this.p.v.pause();
	      this.p.isPlay = false;
	    }
	  }, {
	    key: "volUp",
	    value: function volUp() {
	
	      this.p.v.volume = this.p.v.volume + 0.25;
	    }
	  }, {
	    key: "volDown",
	    value: function volDown() {
	
	      this.p.v.volume = this.p.v.volume - 0.25;
	    }
	  }, {
	    key: "tweenVolume",
	    value: function tweenVolume(val) {
	      var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
	      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power4.easeIn;
	
	
	      // 0.0（無音）～ 1.0（最大）
	
	      TweenMax.to(this.v, dur, { volume: val, ease: ease });
	    }
	  }]);
	
	  return Render;
	}();
	
	exports.default = Render;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// import Val from 'Util/Val.es6';
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($target, pos) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$wrap = $('.block05 .btns');
	    _this.$btn = _this.$wrap.find('.btn');
	    _this.points = [];
	    _this.len = _this.$btn.length;
	    for (var i = 0; i < _this.len; i++) {
	      var $t = _this.$btn.eq(i);
	      var obj = { x: 0, y: 0, $t: $t.get(0) };
	      _this.points.push(obj);
	    }
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      TweenMax.set(this.$btn.find('a'), { z: 0 });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      for (var i = 0; i < this.len; i++) {
	
	        var obj = this.points[i];
	
	        // 変換後のpoint    
	        // pos
	        var lay = obj.$t.getBoundingClientRect();
	        this.points[i].x = lay.left - gb.r.w / 2;
	        this.points[i].y = lay.top - gb.r.h / 2;
	        // size    
	        this.points[i].x += lay.width / 2;
	        this.points[i].y += lay.height / 2;
	        this.points[i].y *= -1;
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      var index = this.$btn.index(that);
	
	      this.$btn.eq(index).find('a').addClass('jellyHover');
	
	      gb.mv.obj.onBtnEnter(index);
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      var index = this.$btn.index(that);
	
	      this.$btn.eq(index).find('a').removeClass('jellyHover');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	
	      this.$btn.on('mouseenter touchstart', function () {
	        self.onEnter.call(self, this);
	      });
	      this.$btn.on('mouseleave touchend', function () {
	        self.onLeave.call(self, this);
	      });
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scroll = __webpack_require__(67);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _Render = __webpack_require__(68);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// import * as a from 'Util/Array/index.es6';
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($wrap) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$wrap = $('.block05');
	    _this.$img01 = _this.$wrap.find('.img01');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.r = new _Render2.default();
	
	      // ready
	      // TweenMax.set(this.$img01, {opacity: 0});
	
	      // titあたり
	      // tit
	      this.adjustH = 200;
	      var $t = this.$img01;
	      var targetST = $t.offset().top - gb.r.h + this.adjustH;
	      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'Pipes1');
	      s01.cb = function () {
	
	        log('conveyer');
	
	        s01.removeEvents();
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Scroll
	//
	//--------------------------------------------------
	
	var Scroll = function () {
	  function Scroll(targetST) {
	    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	    var name = arguments[4];
	
	    _classCallCheck(this, Scroll);
	
	    this.targetST = targetST;
	
	    this.isLock = false;
	
	    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);
	
	    this.cb = cb;
	    this.cb02 = cb02;
	
	    this.name = name;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Scroll, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      var st = gb.s.st;
	
	      // 特定のst以上になったら1回だけ実行
	
	      if (this.flag) {
	
	        if (this.targetST <= st && !this.isLock) {
	          this.isLock = true;
	
	          this.cb();
	        }
	
	        // if (this.targetST>st && this.isLock) {
	        //   this.isLock = false;
	
	        //   this.cb02();
	
	        // }
	
	        // 特定のst以上になったら連続cb実行
	      } else {
	
	          // if (this.targetST<=st) {
	
	          //   this.cb();
	
	          // }
	
	          // if (this.targetST>st) {
	
	          //   this.cb02();
	
	          // }
	
	        }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // log('setEvents');
	
	      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.sl.remove('Scroll' + this.name);
	    }
	  }]);
	
	  return Scroll;
	}();
	
	exports.default = Scroll;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  UIController
	//
	//--------------------------------------------------
	
	var UIController = function (_Base) {
	  _inherits(UIController, _Base);
	
	  function UIController() {
	    _classCallCheck(this, UIController);
	
	    var _this = _possibleConstructorReturn(this, (UIController.__proto__ || Object.getPrototypeOf(UIController)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(UIController, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	
	      this.$item = $('.block05 .img01 .item');
	      this.$img = this.$item.find('img');
	
	      this.dur = 1.2;
	
	      // TweenMax.set(this.$item, {scale: 0.9});
	      // TweenMax.set(this.$item, {x: -400});
	      TweenMax.set(this.$item, { 'transform-origin': '10% 90%' });
	      TweenMax.set(this.$item.find('img'), { 'transform-origin': '10% 90%' });
	
	      this.timeline();
	
	      this.cnt = 0;
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        _this2.moveX();
	        // this.toFront();
	      }, 0.0);
	    }
	  }, {
	    key: 'moveX',
	    value: function moveX() {
	      var _this3 = this;
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$item, this.dur * 0.3, {
	        x: '-=' + 10,
	        ease: Power2.easeOut
	      }, this.dur * 0.1).to(this.$item, this.dur * 0.9, {
	        x: '+=' + 110,
	        // ease: Elastic.easeOut.config(1, 0.7),
	        ease: Elastic.easeOut.config(1, 1.0),
	        onComplete: function onComplete() {
	
	          _this3.cnt++;
	          if (_this3.cnt == 13) {
	            _this3.toFront();
	            _this3.cnt = 0;
	            return;
	          }
	
	          _this3.moveX();
	        }
	      }, this.dur * 0.1 + this.dur * 0.6 + this.dur * 0.4)
	
	      // rotate
	      .to(this.$item, this.dur * 0.1, {
	        rotationZ: 3,
	        ease: Power2.easeOut
	      }, 0.0).to(this.$item, this.dur * 0.6, {
	        rotationZ: -10,
	        ease: Elastic.easeOut.config(1, 0.7),
	        onComplete: function onComplete() {
	
	          var tlIn = new TimelineMax();
	          tlIn.to(_this3.$item.find('img'), _this3.dur * 0.1, {
	            rotationZ: -5,
	            ease: Power2.easeInOut
	          }).to(_this3.$item.find('img'), _this3.dur * 0.1, {
	            rotationZ: 0,
	            ease: Power2.easeInOut
	          }).to(_this3.$item.find('img'), _this3.dur * 0.1, {
	            rotationZ: -5,
	            ease: Power2.easeInOut
	          }).to(_this3.$item.find('img'), _this3.dur * 0.1, {
	            rotationZ: 0,
	            ease: Power2.easeInOut
	          });
	        }
	      }, this.dur * 0.1).to(this.$item, this.dur * 0.5, {
	        rotationZ: 0,
	        ease: Elastic.easeOut.config(1, 0.6)
	      }, this.dur * 0.1 + this.dur * 0.6 + this.dur * 0.4);
	    }
	  }, {
	    key: 'moveXEnd',
	    value: function moveXEnd() {
	      var _this4 = this;
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$item, this.dur, {
	        x: '+=' + 100,
	        ease: Elastic.easeOut.config(1, 0.5),
	        onComplete: function onComplete() {
	
	          log(_this4.cnt);
	
	          _this4.cnt++;
	          if (_this4.cnt == 9) {
	            _this4.cnt = 0;
	
	            TweenMax.set(_this4.$item, { x: -400, y: 0, scale: 1 });
	
	            _this4.moveX();
	            return;
	          }
	
	          _this4.moveXEnd();
	        }
	      });
	    }
	  }, {
	    key: 'toFront',
	    value: function toFront() {
	      var _this5 = this;
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$item, this.dur, {
	        scale: '+=' + 0.01,
	        x: '+=' + 3,
	        y: '+=' + 6,
	        ease: Elastic.easeOut.config(1, 0.5),
	        onComplete: function onComplete() {
	
	          _this5.cnt++;
	          if (_this5.cnt == 9) {
	            _this5.cnt = 0;
	            _this5.moveXEnd();
	            return;
	          }
	
	          _this5.toFront();
	        }
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(UIController.prototype.__proto__ || Object.getPrototypeOf(UIController.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return UIController;
	}(_Base3.default);
	
	exports.default = UIController;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scroll = __webpack_require__(70);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _Render = __webpack_require__(71);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// import * as a from 'Util/Array/index.es6';
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($wrap) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$wrap = $('.block06');
	    _this.$img01 = _this.$wrap.find('.pipe');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      // ready
	      // TweenMax.set(this.$img01, {opacity: 0});
	
	      // titあたり
	      // tit
	      this.adjustH = 200;
	      var $t = this.$img01;
	      var targetST = $t.offset().top - gb.r.h + this.adjustH;
	      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'Pipes2');
	      s01.cb = function () {
	
	        log('box');
	
	        s01.removeEvents();
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Scroll
	//
	//--------------------------------------------------
	
	var Scroll = function () {
	  function Scroll(targetST) {
	    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	    var name = arguments[4];
	
	    _classCallCheck(this, Scroll);
	
	    this.targetST = targetST;
	
	    this.isLock = false;
	
	    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);
	
	    this.cb = cb;
	    this.cb02 = cb02;
	
	    this.name = name;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Scroll, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      var st = gb.s.st;
	
	      // 特定のst以上になったら1回だけ実行
	
	      if (this.flag) {
	
	        if (this.targetST <= st && !this.isLock) {
	          this.isLock = true;
	
	          this.cb();
	        }
	
	        // if (this.targetST>st && this.isLock) {
	        //   this.isLock = false;
	
	        //   this.cb02();
	
	        // }
	
	        // 特定のst以上になったら連続cb実行
	      } else {
	
	          // if (this.targetST<=st) {
	
	          //   this.cb();
	
	          // }
	
	          // if (this.targetST>st) {
	
	          //   this.cb02();
	
	          // }
	
	        }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // log('setEvents');
	
	      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.sl.remove('Scroll' + this.name);
	    }
	  }]);
	
	  return Scroll;
	}();
	
	exports.default = Scroll;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  UIController
	//
	//--------------------------------------------------
	
	var UIController = function (_Base) {
	  _inherits(UIController, _Base);
	
	  function UIController($span, index) {
	    _classCallCheck(this, UIController);
	
	    var _this = _possibleConstructorReturn(this, (UIController.__proto__ || Object.getPrototypeOf(UIController)).call(this));
	
	    _this.$span = $span;
	    _this.index = index;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(UIController, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$span, { opacity: 0 });
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'show',
	    value: function show(delay) {
	
	      TweenMax.to(this.$span, 1.2, {
	        opacity: 1,
	        ease: Power2.easeInOut,
	        onStart: function onStart() {},
	        delay: delay
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(UIController.prototype.__proto__ || Object.getPrototypeOf(UIController.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return UIController;
	}(_Base3.default);
	
	exports.default = UIController;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scroll = __webpack_require__(73);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _Render = __webpack_require__(74);
	
	var _Render2 = _interopRequireDefault(_Render);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// import * as a from 'Util/Array/index.es6';
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom($wrap) {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.$wrap = $('.block06');
	    _this.$sns = _this.$wrap.find('.sns');
	
	    _this.$item = _this.$sns.find('.item');
	    _this.$cover = _this.$sns.find('.cover');
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      // ready
	      // TweenMax.set(this.$sns, {opacity: 0});
	
	      // titあたり
	      // tit
	      this.adjustH = 200;
	      var $t = this.$sns;
	      var targetST = $t.offset().top - gb.r.h + this.adjustH;
	      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'Sns_footer');
	      s01.cb = function () {
	
	        log('sns_footer');
	
	        s01.removeEvents();
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'hide',
	    value: function hide() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      var index = this.$item.index(that);
	
	      this.$cover.eq(index).addClass('active');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      var index = this.$item.index(that);
	
	      this.$cover.eq(index).removeClass('active');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
	
	      this.$item.on('mouseenter touchstart', function () {
	        self.onEnter.call(self, this);
	      });
	      this.$item.on('mouseleave touchend', function () {
	        self.onLeave.call(self, this);
	      });
	    }
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Scroll
	//
	//--------------------------------------------------
	
	var Scroll = function () {
	  function Scroll(targetST) {
	    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	    var name = arguments[4];
	
	    _classCallCheck(this, Scroll);
	
	    this.targetST = targetST;
	
	    this.isLock = false;
	
	    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);
	
	    this.cb = cb;
	    this.cb02 = cb02;
	
	    this.name = name;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Scroll, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      var st = gb.s.st;
	
	      // 特定のst以上になったら1回だけ実行
	
	      if (this.flag) {
	
	        if (this.targetST <= st && !this.isLock) {
	          this.isLock = true;
	
	          this.cb();
	        }
	
	        // if (this.targetST>st && this.isLock) {
	        //   this.isLock = false;
	
	        //   this.cb02();
	
	        // }
	
	        // 特定のst以上になったら連続cb実行
	      } else {
	
	          // if (this.targetST<=st) {
	
	          //   this.cb();
	
	          // }
	
	          // if (this.targetST>st) {
	
	          //   this.cb02();
	
	          // }
	
	        }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // log('setEvents');
	
	      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.sl.remove('Scroll' + this.name);
	    }
	  }]);
	
	  return Scroll;
	}();
	
	exports.default = Scroll;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  UIController
	//
	//--------------------------------------------------
	
	var UIController = function (_Base) {
	  _inherits(UIController, _Base);
	
	  function UIController($span, index) {
	    _classCallCheck(this, UIController);
	
	    var _this = _possibleConstructorReturn(this, (UIController.__proto__ || Object.getPrototypeOf(UIController)).call(this));
	
	    _this.$span = $span;
	    _this.index = index;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(UIController, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$span, { opacity: 0 });
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'show',
	    value: function show(delay) {
	
	      TweenMax.to(this.$span, 1.2, {
	        opacity: 1,
	        ease: Power2.easeInOut,
	        onStart: function onStart() {},
	        delay: delay
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(UIController.prototype.__proto__ || Object.getPrototypeOf(UIController.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return UIController;
	}(_Base3.default);
	
	exports.default = UIController;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(76);
	
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
	
	      this.obj = this.c.scene01.obj;
	
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene = __webpack_require__(77);
	
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
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
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
	      this.renderer.setClearColor(0xff0000, 0.0);
	      // this.renderer.setClearColor(0xffffff, 1.0);
	
	      // append
	      this.$wrap.prepend(this.renderer.domElement);
	      // set style
	      $(this.renderer.domElement)
	      // .css({position: 'absolute',top: 0,left: 0,'z-index': 1,opacity: 1})
	      .css({ position: 'fixed', top: 0, left: 0, 'z-index': 99999, opacity: 1, 'pointer-events': 'none' }).attr('id', this.id);
	
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Scene2 = __webpack_require__(78);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Camera2 = __webpack_require__(79);
	
	var _Camera3 = _interopRequireDefault(_Camera2);
	
	var _Light2 = __webpack_require__(80);
	
	var _Light3 = _interopRequireDefault(_Light2);
	
	var _Objects = __webpack_require__(81);
	
	var _Objects2 = _interopRequireDefault(_Objects);
	
	var _Effect = __webpack_require__(86);
	
	var _Effect2 = _interopRequireDefault(_Effect);
	
	var _Control = __webpack_require__(87);
	
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(82);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Array = __webpack_require__(83);
	
	var a = _interopRequireWildcard(_Array);
	
	var _Math = __webpack_require__(84);
	
	var m = _interopRequireWildcard(_Math);
	
	var _Easing = __webpack_require__(85);
	
	var e = _interopRequireWildcard(_Easing);
	
	var _Val = __webpack_require__(53);
	
	var _Val2 = _interopRequireDefault(_Val);
	
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
	      this.snowNum = 0;
	      this.currentIntersected = null;
	
	      this.mouse = new THREE.Vector2();
	      this.mouseOld = new THREE.Vector2();
	      this.mousePoint = new THREE.Vector3();
	      this.mouseSpeed = { vx: 0, vy: 0, dis: 0 };
	      this.pos = { x: 0, y: 0 };
	      this.prePos = { x: 0, y: 0 };
	      this.dist = 0;
	
	      this.isDown = false;
	      this.particles = {};
	      this.snows = {};
	      this.trails = {};
	      this.itemP = {};
	      this.types = ['cross', 'plus', 'cube', 'circle', 'square'];
	
	      this.base = { vx: 1, vy: 1, scale: .2 };
	
	      this.cnt = 0;
	
	      this.v = new _Val2.default();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.raycaster = new THREE.Raycaster();
	
	      // texture
	      this.textures();
	
	      // plane
	      this.plane = new _Controller2.default(this.scene, this.camera, this.renderer);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.cnt++;
	      this.pos = { x: this.mousePoint.x, y: this.mousePoint.y };
	      this.dist = Math.floor(m.dist(this.pos, this.prePos));
	
	      // intersects
	      this.intersects();
	
	      // animation
	
	      // particle update
	      for (var o in this.particles) {
	        this.particles[o].update();
	      }for (var o in this.snows) {
	        this.snows[o].update();
	      }for (var o in this.trails) {
	        this.trails[o].update();
	      }for (var o in this.itemP) {
	        this.itemP[o].update();
	      }
	    }
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
	
	      if (this.dist < 20) return;
	      this.prePos = this.pos;
	
	      var geo,
	          mat,
	          matOption = { depthTest: false, transparent: true, blending: THREE.AdditiveBlending },
	
	      // matOption = {depthTest:false,transparent:true},
	      offsets = { scale: 0.5, marginX: 0, marginY: 0, vx: 0, vy: 0, vr: Math.random() * 0.1, duration: 700 };
	
	      // item
	      var r = Math.random();
	      // snowfrake
	      if (r < .2) {
	        geo = new THREE.PlaneGeometry(this.base.scale * 8, this.base.scale * 8, 1, 1);
	        matOption.map = this.snowList[Math.floor(this.snowList.length * Math.random())];
	        // item
	      } else {
	        geo = new THREE.PlaneGeometry(this.base.scale * 8, this.base.scale * 8, 1, 1);
	        matOption.map = this.itemList[Math.floor(this.itemList.length * Math.random())];
	      }
	
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
	        vx: this.mouseSpeed.vx * .3,
	        vy: this.mouseSpeed.vy * .3,
	
	        // マウスとは逆方向
	        // vx:this.mouseSpeed.vx*0.4*-1,
	        // vy:this.mouseSpeed.vy*0.4*-1,
	
	        // random
	        // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
	        // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,
	
	        update: function update() {
	
	          // rotation--------------------
	          this.mesh.rotation.z += this.vr;
	          // this.x = self.mousePoint.x + this.vx;
	          // this.y = self.mousePoint.y + this.vy;
	
	          if (!this.isReady) return;
	
	          // position--------------------
	          this.x += this.vx * self.base.vx * 100;
	          this.y += this.vy * self.base.vy * 100;
	          // 同じ位置に
	          // this.x = self.mousePoint.x;
	          // this.y = self.mousePoint.y;
	
	          this.x += offsets.vx;
	          this.y += offsets.vy;
	
	          this.mesh.position.set(this.x, this.y, this.z);
	          // this.mesh.position.set(this.x,this.y,gb.z * 2);
	
	
	          // scale--------------------
	          this.scale = this.scale * this.progressR + 0.001;
	          // this.scale = (this.scale)+0.001;
	          this.mesh.scale.x = this.scale * 100;
	          this.mesh.scale.y = this.scale * 100;
	          this.mesh.scale.z = this.scale * 100;
	
	          // progress--------------------
	          this.progress = (new Date().getTime() - this.startTime) / this.duration;
	          // this.progress = e.inSine(this.progress);
	          // this.progress = e.inBack(this.progress);
	          this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
	          // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);
	
	          // remove--------------------
	          this.progressR = 1 - this.progress;
	          if (this.progress >= 1) {
	            delete self.particles[this.name];
	            self.scene.remove(obj.mesh);
	            delete this;
	          }
	        }
	
	        // show
	      };TweenLite.to(obj, 0.2, { scale: 1, ease: Back.easeOut, onComplete: function onComplete() {
	          obj.startTime = new Date().getTime();
	          obj.isReady = true;
	        } });
	
	      this.particles[obj.name] = obj;
	      obj.update();
	
	      // ad
	      this.scene.add(mesh);
	      this.makeNum++;
	      return obj;
	    }
	  }, {
	    key: 'makeSnow',
	    value: function makeSnow(type, position, index, len) {
	
	      var geo,
	          mat,
	          matOption = { depthTest: false, transparent: true, blending: THREE.AdditiveBlending },
	
	      // matOption = {depthTest:false,transparent:true},
	      offsets = { scale: 0.5, marginX: 0, marginY: 0, vx: 0, vy: 0, vr: Math.random() * 0.1, duration: 3000 };
	
	      // item
	      var r = Math.random();
	      var seedx = Math.random() * 10000;
	      var seedy = Math.random() * 10000;
	
	      geo = new THREE.PlaneGeometry(this.base.scale * 1, this.base.scale * 1, 1, 1);
	      matOption.map = this.glow;
	
	      var self = this;
	      var mat = new THREE.MeshBasicMaterial(matOption);
	      var mesh = new THREE.Mesh(geo, mat);
	      var obj = {
	        name: 'snow_' + this.snowNum,
	        mesh: mesh,
	        id: this.snowNum,
	        isReady: false,
	        startTime: new Date().getTime(),
	        baseRadius: 10,
	        progress: 0,
	        progressR: 1,
	        duration: offsets.duration,
	        scale: 0,
	        // x: x+offsets.marginX,
	        // y: y+offsets.marginY,
	        // z: z,
	        sign: Math.random() < 0.5 ? 1 : -1,
	        speed: 0.035 + Math.random() * 0.03,
	        vr: offsets.vr,
	
	        // マウスとは正方向
	        vx: this.mouseSpeed.vx * .3,
	        vy: this.mouseSpeed.vy * .3,
	
	        // マウスとは逆方向
	        // vx:this.mouseSpeed.vx*0.4*-1,
	        // vy:this.mouseSpeed.vy*0.4*-1,
	
	        // random
	        // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
	        // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,
	
	        update: function update() {
	
	          // rotation--------------------
	          this.mesh.rotation.z += this.vr;
	
	          // position--------------------
	          var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
	          // this.x = self.mousePoint.x + Math.cos(rad) * radius;
	          // this.y = self.mousePoint.y + Math.sin(rad) * radius;
	          // this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	          // this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	
	          var speed = self.v.noise(gb.up.frame / 100, seedy) + 1; // 0 - 2;
	          speed /= 2; // 0 - 1;
	          speed /= 2; // 0 - 0.5;
	          speed += 0.5; // 0.5 - 1;
	
	          var vx = self.v.noise(gb.up.frame / 100, seedx);
	          var vy = -2 * speed;
	          this.x += vx;
	          this.y += vy;
	
	          // 同じ位置に
	          // this.x = self.mousePoint.x;
	          // this.y = self.mousePoint.y;
	
	          this.mesh.position.set(this.x, this.y, this.z);
	          // this.mesh.position.set(this.x,this.y,gb.z * 2);
	
	          // scale--------------------
	          var ss = this.scale * this.progressR + 0.001;
	          // this.scale = (this.scale)+0.001;
	          var s = Math.sin(rad2 + gb.up.frame * this.speed) / 2 + 1;
	          this.mesh.scale.x = ss * 100 * s;
	          this.mesh.scale.y = ss * 100 * s;
	          this.mesh.scale.z = ss * 100 * s;
	
	          // progress--------------------
	          this.progress = (new Date().getTime() - this.startTime) / this.duration;
	          // this.progress = e.inSine(this.progress);
	          // this.progress = e.inBack(this.progress);
	          // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
	          // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);
	
	          // remove--------------------
	          this.progressR = 1 - this.progress;
	          if (this.progress >= 1) {
	            delete self.snows[this.name];
	            self.scene.remove(obj.mesh);
	            delete this;
	          }
	        }
	      };
	
	      var delay = Math.random() * 0.5;
	
	      // scale
	      var scale = 0.7 + Math.random() * 0.5;
	      if (gb.r.w <= 768) {
	        scale = 1.2 + Math.random() * 0.5;
	      }
	      TweenLite.to(obj, 0.8, { scale: scale, ease: Back.easeOut, delay: delay, onComplete: function onComplete() {
	          obj.startTime = new Date().getTime();
	          obj.isReady = true;
	        } });
	
	      // radius
	      // var rad = Math.PI * 2 * Math.random();
	      var rad = Math.PI * 2 * index / len;
	      var rad2 = Math.PI * 2 * Math.random();
	      var rad3 = Math.PI * 2 * Math.random();
	      // var radius = 25 + (Math.random() - 0.5) * 7;
	      var hani = 3;
	      if (gb.r.w <= 768) {
	        obj.baseRadius = 10;
	        hani = 5;
	      }
	
	      TweenLite.to(obj, 0.8, { baseRadius: 35, ease: Back.easeOut, delay: delay, onComplete: function onComplete() {} });
	
	      // pos
	      var pos = position;
	      var x = pos.x + Math.cos(rad) * obj.baseRadius;
	      var y = pos.y + Math.sin(rad) * obj.baseRadius;
	      var z = 0;
	
	      obj.x = x + offsets.marginX;
	      obj.y = y + offsets.marginY;
	      obj.z = z;
	
	      this.snows[obj.name] = obj;
	      obj.update();
	      this.scene.add(mesh);
	      this.snowNum++;
	      return obj;
	    }
	  }, {
	    key: 'makeTrail',
	    value: function makeTrail(type, position, index, len) {
	
	      var geo,
	          mat,
	          matOption = { depthTest: false, transparent: true, blending: THREE.AdditiveBlending },
	
	      // matOption = {depthTest:false,transparent:true},
	      offsets = { scale: 0.5, marginX: 0, marginY: 0, vx: 0, vy: 0, vr: Math.random() * 0.1, duration: 2500 };
	
	      // item
	      var r = Math.random();
	      var seedx = Math.random() * 10000;
	      var seedy = Math.random() * 10000;
	
	      geo = new THREE.PlaneGeometry(this.base.scale * 1, this.base.scale * 1, 1, 1);
	      matOption.map = this.glow;
	
	      var self = this;
	      var mat = new THREE.MeshBasicMaterial(matOption);
	      var mesh = new THREE.Mesh(geo, mat);
	      var obj = {
	        name: 'snow_' + this.snowNum,
	        mesh: mesh,
	        id: this.snowNum,
	        isReady: false,
	        startTime: new Date().getTime(),
	        baseRadius: 10,
	        progress: 0,
	        progressR: 1,
	        duration: offsets.duration,
	        scale: 0,
	        // x: x+offsets.marginX,
	        // y: y+offsets.marginY,
	        // z: z,
	        sign: Math.random() < 0.5 ? 1 : -1,
	        speed: 0.035 + Math.random() * 0.03,
	        vr: offsets.vr,
	
	        // マウスとは正方向
	        vx: this.mouseSpeed.vx * .3,
	        vy: this.mouseSpeed.vy * .3,
	
	        // マウスとは逆方向
	        // vx:this.mouseSpeed.vx*0.4*-1,
	        // vy:this.mouseSpeed.vy*0.4*-1,
	
	        // random
	        // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
	        // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,
	
	        update: function update() {
	
	          // rotation--------------------
	          this.mesh.rotation.z += this.vr;
	
	          // position--------------------
	          var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
	          this.x = self.mousePoint.x + Math.cos(rad) * radius;
	          this.y = self.mousePoint.y + Math.sin(rad) * radius;
	          this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	          this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	
	          // var speed = self.v.noise(gb.up.frame / 100, seedy) + 1 // 0 - 2;
	          // speed /= 2 // 0 - 1;
	          // speed /= 2 // 0 - 0.5;
	          // speed += 0.5 // 0.5 - 1;
	
	          // var vx = self.v.noise(gb.up.frame / 100, seedx);
	          // var vy = -2 * speed;
	          // this.x += vx;
	          // this.y += vy;
	
	          // 同じ位置に
	          // this.x = self.mousePoint.x;
	          // this.y = self.mousePoint.y;
	
	          this.mesh.position.set(this.x, this.y, this.z);
	          // this.mesh.position.set(this.x,this.y,gb.z * 2);
	
	          // scale--------------------
	          var ss = this.scale * this.progressR + 0.001;
	          // this.scale = (this.scale)+0.001;
	          var s = Math.sin(rad2 + gb.up.frame * this.speed) / 2 + 1;
	          this.mesh.scale.x = ss * 100 * s;
	          this.mesh.scale.y = ss * 100 * s;
	          this.mesh.scale.z = ss * 100 * s;
	
	          // progress--------------------
	          this.progress = (new Date().getTime() - this.startTime) / this.duration;
	          // this.progress = e.inSine(this.progress);
	          // this.progress = e.inBack(this.progress);
	          // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
	          // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);
	
	          // remove--------------------
	          this.progressR = 1 - this.progress;
	          if (this.progress >= 1) {
	            delete self.trails[this.name];
	            self.scene.remove(obj.mesh);
	            delete this;
	          }
	        }
	      };
	
	      var delay = Math.random() * 0.5;
	
	      // scale
	      var scale = 0.7 + Math.random() * 0.5;
	      if (gb.r.w <= 768) {
	        scale = 1.2 + Math.random() * 0.5;
	      }
	      TweenLite.to(obj, 0.8, { scale: scale, ease: Back.easeOut, delay: delay,
	        onStart: function onStart() {
	          obj.startTime = new Date().getTime();
	        },
	        onComplete: function onComplete() {
	          obj.isReady = true;
	        }
	      });
	
	      // radius
	      // var rad = Math.PI * 2 * Math.random();
	      var rad = Math.PI * 2 * index / len;
	      var rad2 = Math.PI * 2 * Math.random();
	      var rad3 = Math.PI * 2 * Math.random();
	      // var radius = 25 + (Math.random() - 0.5) * 7;
	      var hani = 6;
	      if (gb.r.w <= 768) {
	        obj.baseRadius = 10;
	        hani = 5;
	      }
	
	      TweenLite.to(obj, 0.8, { baseRadius: 35, ease: Back.easeOut, delay: delay, onComplete: function onComplete() {} });
	      // TweenLite.to(obj,2.5,{baseRadius: 60,ease:Back.easeOut,delay: delay, onComplete:function(){}});
	
	      // pos
	      var pos = position;
	      var x = pos.x + Math.cos(rad) * obj.baseRadius;
	      var y = pos.y + Math.sin(rad) * obj.baseRadius;
	      var z = 0;
	
	      obj.x = x + offsets.marginX;
	      obj.y = y + offsets.marginY;
	      obj.z = z;
	
	      this.trails[obj.name] = obj;
	      obj.update();
	      this.scene.add(mesh);
	      this.snowNum++;
	      return obj;
	    }
	  }, {
	    key: 'makeItemBoundParticle',
	    value: function makeItemBoundParticle(type, pointIndex, index, len) {
	
	      var geo,
	          mat,
	          matOption = { depthTest: false, transparent: true, blending: THREE.AdditiveBlending },
	
	      // matOption = {depthTest:false,transparent:true},
	      offsets = { scale: 0.5, marginX: 0, marginY: 0, vx: 0, vy: 0, vr: Math.random() * 0.1, duration: 2500 };
	
	      // item
	      var r = Math.random();
	      var seedx = Math.random() * 10000;
	      var seedy = Math.random() * 10000;
	
	      geo = new THREE.PlaneGeometry(this.base.scale * 1, this.base.scale * 1, 1, 1);
	      matOption.map = this.glow;
	
	      var self = this;
	      var mat = new THREE.MeshBasicMaterial(matOption);
	      var mesh = new THREE.Mesh(geo, mat);
	      var obj = {
	        name: 'snow_' + this.snowNum,
	        mesh: mesh,
	        id: this.snowNum,
	        isReady: false,
	        startTime: new Date().getTime(),
	        baseRadius: 10,
	        progress: 0,
	        progressR: 1,
	        duration: offsets.duration,
	        scale: 0,
	        // x: x+offsets.marginX,
	        // y: y+offsets.marginY,
	        // z: z,
	        sign: Math.random() < 0.5 ? 1 : -1,
	        speed: 0.035 + Math.random() * 0.03,
	        vr: offsets.vr,
	
	        // マウスとは正方向
	        vx: 0,
	        vy: 0,
	
	        // マウスとは逆方向
	        // vx:this.mouseSpeed.vx*0.4*-1,
	        // vy:this.mouseSpeed.vy*0.4*-1,
	
	        // random
	        // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
	        // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,
	
	        update: function update() {
	
	          // rotation--------------------
	          this.mesh.rotation.z += this.vr;
	
	          // position--------------------
	          var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
	          this.x = gb.moveItems[pointIndex].point.x + Math.cos(rad) * radius;
	          this.y = gb.moveItems[pointIndex].point.y + Math.sin(rad) * radius;
	          // this.x = this.basex + Math.cos(rad) * radius;
	          // this.y = this.basey + Math.sin(rad) * radius;
	          // this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	          // this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	
	          var speed = self.v.noise(gb.up.frame / 100, seedy) + 1; // 0 - 2;
	          speed /= 2; // 0 - 1;
	          speed /= 2; // 0 - 0.5;
	          speed += 0.5; // 0.5 - 1;
	
	          var vx = self.v.noise(gb.up.frame / 100, seedx);
	          var vy = -2 * speed;
	          this.vx += vx;
	          this.vy += vy;
	          this.x += this.vx;
	          this.y += this.vy;
	
	          // 同じ位置に
	          // this.x = self.mousePoint.x;
	          // this.y = self.mousePoint.y;
	
	          this.mesh.position.set(this.x, this.y, this.z);
	          // this.mesh.position.set(this.x,this.y,gb.z * 2);
	
	          // scale--------------------
	          var ss = this.scale * this.progressR + 0.001;
	          // this.scale = (this.scale)+0.001;
	          var s = Math.sin(rad2 + gb.up.frame * this.speed) / 2 + 1;
	          this.mesh.scale.x = ss * 100 * s;
	          this.mesh.scale.y = ss * 100 * s;
	          this.mesh.scale.z = ss * 100 * s;
	
	          // progress--------------------
	          this.progress = (new Date().getTime() - this.startTime) / this.duration;
	          // this.progress = e.inSine(this.progress);
	          // this.progress = e.inBack(this.progress);
	          // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
	          // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);
	
	          // remove--------------------
	          this.progressR = 1 - this.progress;
	          if (this.progress >= 1) {
	            delete self.itemP[this.name];
	            self.scene.remove(obj.mesh);
	            delete this;
	          }
	        }
	      };
	
	      var delay = Math.random() * 0.5;
	
	      // scale
	      var scale = 0.7 + Math.random() * 0.5;
	      if (gb.r.w <= 768) {
	        scale = 1.2 + Math.random() * 0.5;
	      }
	      TweenLite.to(obj, 0.8, { scale: scale, ease: Back.easeOut, delay: delay,
	        onStart: function onStart() {
	          obj.startTime = new Date().getTime();
	        },
	        onComplete: function onComplete() {
	          obj.isReady = true;
	        }
	      });
	
	      // radius
	      // var rad = Math.PI * 2 * Math.random();
	      var rad = Math.PI * 2 * index / len;
	      var rad2 = Math.PI * 2 * Math.random();
	      var rad3 = Math.PI * 2 * Math.random();
	      // var radius = 25 + (Math.random() - 0.5) * 7;
	      var hani = 6;
	      if (gb.r.w <= 768) {
	        obj.baseRadius = 10;
	        hani = 5;
	      }
	
	      TweenLite.to(obj, 0.8, { baseRadius: 35, ease: Back.easeOut, delay: delay, onComplete: function onComplete() {} });
	      // TweenLite.to(obj,2.5,{baseRadius: 60,ease:Back.easeOut,delay: delay, onComplete:function(){}});
	
	      // pos
	      var pos = gb.moveItems[pointIndex].point;
	      var x = pos.x + Math.cos(rad) * obj.baseRadius;
	      var y = pos.y + Math.sin(rad) * obj.baseRadius;
	      var z = 0;
	
	      obj.basex = obj.x = x + offsets.marginX;
	      obj.basey = obj.y = y + offsets.marginY;
	      obj.basez = obj.z = z;
	
	      this.itemP[obj.name] = obj;
	      obj.update();
	      this.scene.add(mesh);
	      this.snowNum++;
	      return obj;
	    }
	  }, {
	    key: 'makePopItem',
	    value: function makePopItem(type, pointIndex, index, len) {
	
	      var geo,
	          mat,
	          matOption = { depthTest: false, transparent: true, blending: THREE.AdditiveBlending },
	
	      // matOption = {depthTest:false,transparent:true},
	      offsets = { scale: 0.5, marginX: 0, marginY: 0, vx: 0, vy: 0, vr: Math.random() * 0.1, duration: 1500 };
	
	      // item
	      var r = Math.random();
	      var seedx = Math.random() * 10000;
	      var seedy = Math.random() * 10000;
	
	      geo = new THREE.PlaneGeometry(this.base.scale * 8, this.base.scale * 8, 1, 1);
	
	      // item
	      var r = Math.random();
	      // snowfrake
	      if (r < .2) {
	        matOption.map = this.snowList[Math.floor(this.snowList.length * Math.random())];
	        // item
	      } else {
	        matOption.map = this.itemList[Math.floor(this.itemList.length * Math.random())];
	      }
	
	      var self = this;
	      var mat = new THREE.MeshBasicMaterial(matOption);
	      var mesh = new THREE.Mesh(geo, mat);
	      var obj = {
	        name: 'snow_' + this.snowNum,
	        mesh: mesh,
	        id: this.snowNum,
	        isReady: false,
	        startTime: new Date().getTime(),
	        baseRadius: 10,
	        progress: 0,
	        progressR: 1,
	        duration: offsets.duration,
	        scale: 0,
	        // x: x+offsets.marginX,
	        // y: y+offsets.marginY,
	        // z: z,
	        sign: Math.random() < 0.5 ? 1 : -1,
	        speed: 0.035 + Math.random() * 0.03,
	        vr: offsets.vr,
	
	        // マウスとは正方向
	        vx: 0,
	        vy: 0,
	
	        // マウスとは逆方向
	        // vx:this.mouseSpeed.vx*0.4*-1,
	        // vy:this.mouseSpeed.vy*0.4*-1,
	
	        // random
	        // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
	        // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,
	
	        update: function update() {
	
	          // rotation--------------------
	          this.mesh.rotation.z += this.vr;
	
	          // position--------------------
	          var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
	          this.x = gb.stores.points[pointIndex].x + Math.cos(rad) * radius;
	          this.y = gb.stores.points[pointIndex].y + Math.sin(rad) * radius;
	          // this.x = this.basex + Math.cos(rad) * radius;
	          // this.y = this.basey + Math.sin(rad) * radius;
	          // this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	          // this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
	
	          // var speed = self.v.noise(gb.up.frame / 100, seedy) + 1 // 0 - 2;
	          // speed /= 2 // 0 - 1;
	          // speed /= 2 // 0 - 0.5;
	          // speed += 0.5 // 0.5 - 1;
	
	          // var vx = self.v.noise(gb.up.frame / 100, seedx);
	          // var vy = -2 * speed;
	          // this.vx += vx;
	          // this.vy += vy;
	          // this.x += this.vx;
	          // this.y += this.vy;
	
	          // 同じ位置に
	          // this.x = self.mousePoint.x;
	          // this.y = self.mousePoint.y;
	
	          this.mesh.position.set(this.x, this.y, this.z);
	          // this.mesh.position.set(this.x,this.y,gb.z * 2);
	
	          // scale--------------------
	          var ss = this.scale * this.progressR + 0.001;
	          // this.scale = (this.scale)+0.001;
	          var s = Math.sin(rad2 + gb.up.frame * this.speed) / 2 + 1;
	          this.mesh.scale.x = ss * 100 * s;
	          this.mesh.scale.y = ss * 100 * s;
	          this.mesh.scale.z = ss * 100 * s;
	
	          // progress--------------------
	          this.progress = (new Date().getTime() - this.startTime) / this.duration;
	          // this.progress = e.inSine(this.progress);
	          // this.progress = e.inBack(this.progress);
	          // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
	          // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);
	
	          // remove--------------------
	          this.progressR = 1 - this.progress;
	          if (this.progress >= 1) {
	            delete self.itemP[this.name];
	            self.scene.remove(obj.mesh);
	            delete this;
	          }
	        }
	      };
	
	      var delay = Math.random() * 0.3;
	
	      // scale
	      var scale = 0.7 + Math.random() * 0.5;
	      if (gb.r.w <= 768) {
	        scale = 1.2 + Math.random() * 0.5;
	      }
	      TweenLite.to(obj, 0.8, { scale: scale, ease: Back.easeOut, delay: delay,
	        onStart: function onStart() {
	          obj.startTime = new Date().getTime();
	        },
	        onComplete: function onComplete() {
	          obj.isReady = true;
	        }
	      });
	
	      // radius
	      // var rad = Math.PI * 2 * Math.random();
	      var rad = Math.PI * 2 * index / len;
	      var rad2 = Math.PI * 2 * Math.random();
	      var rad3 = Math.PI * 2 * Math.random();
	      var hani = 6;
	      if (gb.r.w <= 768) {
	        obj.baseRadius = 10;
	        hani = 5;
	      }
	
	      var radiusTar = 150 + (Math.random() - 0.5) * 100;
	      TweenLite.to(obj, 1.5, { baseRadius: radiusTar, ease: Back.easeOut, delay: delay, onComplete: function onComplete() {} });
	      // TweenLite.to(obj,2.5,{baseRadius: 60,ease:Back.easeOut,delay: delay, onComplete:function(){}});
	
	      // pos
	      // var pos = position;
	      var pos = gb.stores.points[pointIndex];
	      var x = pos.x + Math.cos(rad) * obj.baseRadius;
	      var y = pos.y + Math.sin(rad) * obj.baseRadius;
	      var z = 0;
	
	      obj.basex = obj.x = x + offsets.marginX;
	      obj.basey = obj.y = y + offsets.marginY;
	      obj.basez = obj.z = z;
	
	      this.itemP[obj.name] = obj;
	      obj.update();
	      this.scene.add(mesh);
	      this.snowNum++;
	      return obj;
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      e.preventDefault();
	      this.mouse.x = gb.m.x / window.innerWidth * 2 - 1;
	      this.mouse.y = -(gb.m.y / window.innerHeight) * 2 + 1;
	      this.mouseSpeedUpdate();
	
	      this.intersects();
	
	      // drag
	      if (this.isDown) {
	
	        var dis = Math.abs(this.mouseSpeed.dis);
	
	        this.makeParticle('circle', this.mousePoint);
	        this.makeSnow(null, this.mousePoint, 0, 1);
	      }
	
	      // mouse move show
	      // var dis = Math.abs(this.mouseSpeed.dis);
	      // // log(dis);
	      // // if(dis > 0.1){
	
	      //   this.makeParticle('circle',this.mousePoint);
	
	      // // }
	
	      this.mouseOld = this.mouse.clone();
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown() {
	
	      this.mouse.x = gb.m.x / window.innerWidth * 2 - 1;
	      this.mouse.y = -(gb.m.y / window.innerHeight) * 2 + 1;
	      this.mouseSpeedUpdate();
	
	      this.intersects();
	
	      if (!this.isDown) {
	
	        var len = 20;
	        for (var i = 0; i < len; i++) {
	          this.makeTrail(null, this.mousePoint, i, len);
	        }
	      }
	      this.isDown = true;
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp() {
	
	      this.mouse.x = gb.m.x / window.innerWidth * 2 - 1;
	      this.mouse.y = -(gb.m.y / window.innerHeight) * 2 + 1;
	      this.mouseSpeedUpdate();
	
	      this.intersects();
	
	      if (this.isDown) {
	
	        // // hide trails
	        // for(var o in this.snows) {
	        //   var obj = this.snows[o];
	
	        //   TweenMax.to(obj, 0.7, {
	        //       progress: 1,
	        //       baseRadius: 0,
	        //       ease: Back.easeIn.config(0.75),
	        //       delay: 0.5 * Math.random()
	        //   })
	        // }
	
	      }
	      this.isDown = false;
	    }
	  }, {
	    key: 'mouseSpeedUpdate',
	    value: function mouseSpeedUpdate() {
	      this.mouseSpeed.vx = this.mouse.x - this.mouseOld.x;
	      this.mouseSpeed.vy = this.mouse.y - this.mouseOld.y;
	      // this.mouseSpeed.vx = m.constrain(this.mouseSpeed.vx, -0.025, 0.025);
	      // this.mouseSpeed.vy = m.constrain(this.mouseSpeed.vy, -0.025, 0.025);
	      this.mouseSpeed.vx = m.constrain(this.mouseSpeed.vx, -5, 5);
	      this.mouseSpeed.vy = m.constrain(this.mouseSpeed.vy, -5, 5);
	      this.mouseSpeed.directionX = this.mouseSpeed.vx < 0 ? -1 : 1;
	      this.mouseSpeed.directionY = this.mouseSpeed.vy < 0 ? -1 : 1;
	      this.mouseSpeed.dis = Math.sqrt(this.mouseSpeed.vx * this.mouseSpeed.vx + this.mouseSpeed.vy * this.mouseSpeed.vy);
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
	    key: 'textures',
	    value: function textures() {
	
	      // texture
	      // this.textureCross = new THREE.TextureLoader().load( './assets/resource/img/cross.png' );
	      // this.texturePlus = new THREE.TextureLoader().load( './assets/resource/img/plus.png' );
	      this.glow = new THREE.CanvasTexture(this.generateSprite());
	
	      var len = 15;
	      var path = './assets/resource/item/';
	      this.itemList = [];
	      for (var i = 0; i < len; i++) {
	        var tex = new THREE.TextureLoader().load(path + (i + 1) + '.png');
	        this.itemList.push(tex);
	      }
	
	      this.snowList = [];
	      for (var i = 0; i < 3; i++) {
	        var tex = new THREE.TextureLoader().load(path + 'snow0' + (i + 1) + '.png');
	        this.snowList.push(tex);
	      }
	    }
	  }, {
	    key: 'intersects',
	    value: function intersects() {
	
	      this.raycaster.setFromCamera(this.mouse, this.camera);
	      var intersects = this.raycaster.intersectObjects(this.plane.wrap.children, true);
	      if (intersects.length > 0) {
	        if (this.currentIntersected !== undefined) {}
	        this.currentIntersected = intersects[0].object;
	        var point = intersects[0].point;
	        this.mousePoint.set(point.x, point.y, point.z);
	      } else {
	        if (this.currentIntersected !== undefined) {}
	        this.currentIntersected = undefined;
	      }
	    }
	  }, {
	    key: 'onItemBound',
	    value: function onItemBound(pointIndex) {
	
	      var len = 20;
	      for (var i = 0; i < len; i++) {
	        this.makeItemBoundParticle(null, pointIndex, i, len);
	      }
	    }
	  }, {
	    key: 'onBtnEnter',
	    value: function onBtnEnter(pointIndex) {
	
	      var len = 14;
	      for (var i = 0; i < len; i++) {
	        this.makePopItem(null, pointIndex, i, len);
	      }
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(43);
	
	var m = _interopRequireWildcard(_index);
	
	var _Val = __webpack_require__(53);
	
	var _Val2 = _interopRequireDefault(_Val);
	
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
	
	  function Controller(scene, camera, renderer) {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.scene = scene;
	    _this.camera = camera;
	    _this.renderer = renderer;
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();   
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.ready();
	
	      this.add();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      this.wrap = new THREE.Object3D();
	      this.plane = new THREE.Mesh(new THREE.PlaneGeometry(gb.r.w, gb.r.h, 1, 1), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthTest: true }));
	      this.wrap.position.z = 0;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.wrap.add(this.plane);
	      this.scene.add(this.wrap);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linear = linear;
	exports.inBack = inBack;
	exports.inBounce = inBounce;
	exports.inCirc = inCirc;
	exports.inCubic = inCubic;
	exports.inElastic = inElastic;
	exports.inExpo = inExpo;
	exports.inQuad = inQuad;
	exports.inQuart = inQuart;
	exports.inQuint = inQuint;
	exports.inSine = inSine;
	exports.outBack = outBack;
	exports.outBounce = outBounce;
	exports.outCirc = outCirc;
	exports.outCubic = outCubic;
	exports.outElastic = outElastic;
	exports.outExpo = outExpo;
	exports.outQuad = outQuad;
	exports.outQuart = outQuart;
	exports.outQuint = outQuint;
	exports.outSine = outSine;
	exports.inOutBack = inOutBack;
	exports.inOutBounce = inOutBounce;
	exports.inOutCirc = inOutCirc;
	exports.inOutCubic = inOutCubic;
	exports.inOutExpo = inOutExpo;
	exports.inOutQuad = inOutQuad;
	exports.inOutQuart = inOutQuart;
	exports.inOutQuint = inOutQuint;
	exports.inOutSine = inOutSine;
	// # ---------------------------------------------------
	// # イージング計算用オブジェクト
	// # t(0~1)を渡すと歪めた結果(0~1)を返す
	// # ---------------------------------------------------
	
	// # -----------------------------------------------
	// # メソッド一覧
	// # @linear
	// #
	// # @inBack
	// # @inBounce
	// # @inCirc
	// # @inCubic
	// # @inElastic
	// # @inExpo
	// # @inQuad
	// # @inQuart
	// # @inQuint
	// # @inSine
	// #
	// # @outBack
	// # @outBounce
	// # @outCirc
	// # @outCubic
	// # @outElastic
	// # @outExpo
	// # @outQuad
	// # @outQuart
	// # @outQuint
	// # @outSine
	// #
	// # @inOutBack
	// # @inOutBounce
	// # @inOutCirc
	// # @inOutCubic
	// # @inOutExpo
	// # @inOutQuad
	// # @inOutQuart
	// # @inOutQuint
	// # @inOutSine
	// # -----------------------------------------------
	
	function linear(t) {
	
	  return t;
	}
	
	function inBack(t) {
	
	  var s = 1.70158;
	  return t * t * ((s + 1) * t - s);
	}
	
	function inBounce(t) {
	
	  t = 1.0 - t;
	
	  if (t < 1 / 2.75) return 1.0 - 7.5625 * t * t;
	
	  if (t < 2 / 2.75) {
	    t -= 1.5 / 2.75;
	    return 1.0 - (7.5625 * t * t + 0.75);
	  }
	
	  if (t < 2.5 / 2.75) {
	    t -= 2.25 / 2.75;
	    return 1.0 - (7.5625 * t * t + 0.9375);
	  }
	
	  t -= 2.625 / 2.75;
	  return 1.0 - (7.5625 * t * t + 0.984375);
	}
	
	function inCirc(t) {
	
	  if (t >= 1) return 1;else return -(Math.sqrt(1 - t * t) - 1);
	}
	
	function inCubic(t) {
	
	  return t * t * t;
	}
	
	function inElastic(t) {
	
	  var p = 0.3;
	  var a = 1.0;
	  var s = 1.70158;
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  if (a < 1.0) {
	    a = 1.0;
	    s = p / 4;
	  } else {
	    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
	  }
	
	  --t;
	  return -(a * Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * 3.1419) / p));
	}
	
	function inExpo(t) {
	
	  if (t == 0) return 0;else return Math.pow(2, 10 * (t - 1));
	}
	
	function inQuad(t) {
	
	  return t * t;
	}
	
	function inQuart(t) {
	
	  return t * t * t * t;
	}
	
	function inQuint(t) {
	
	  return t * t * t * t * t;
	}
	
	function inSine(t) {
	
	  return -Math.cos(t * (Math.PI / 2)) + 1.0;
	}
	
	function outBack(t, s) {
	
	  s = s || 1.70158;
	  --t;
	  return t * t * ((s + 1.0) * t + s) + 1.0;
	}
	
	function outBounce(t) {
	
	  if (t < 1 / 2.75) return 7.5625 * t * t;
	
	  if (t < 2 / 2.75) {
	    t -= 1.5 / 2.75;
	    return 7.5625 * t * t + 0.75;
	  }
	
	  if (t < 2.5 / 2.75) {
	    t -= 2.25 / 2.75;
	    return 7.5625 * t * t + 0.9375;
	  }
	
	  t -= 2.625 / 2.75;
	  return 7.5625 * t * t + 0.984375;
	}
	
	function outCirc(t) {
	
	  --t;
	  return Math.sqrt(1 - t * t);
	}
	
	function outCubic(t) {
	
	  --t;
	  return t * t * t + 1;
	}
	
	function outElastic(t, s) {
	
	  var p = s || 0.3;
	  var a = 1.0;
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  if (a < 1.0) {
	    a = 1.0;
	    s = p / 4;
	  } else {
	    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
	  }
	
	  return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * 3.1419) / p) + 1.0;
	}
	
	function outExpo(t) {
	
	  if (t == 1.0) return 1;else return -Math.pow(2, -10 * t) + 1;
	}
	
	function outQuad(t) {
	
	  return -t * (t - 2);
	}
	
	function outQuart(t) {
	
	  --t;
	  return 1.0 - t * t * t * t;
	}
	
	function outQuint(t) {
	
	  --t;
	  return t * t * t * t * t + 1;
	}
	
	function outSine(t) {
	
	  return Math.sin(t * (Math.PI / 2));
	}
	
	function inOutBack(t, s) {
	
	  var s = s || 1.70158;
	  var k = 1.525;
	
	  t *= 2;
	  s *= k;
	
	  if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));
	
	  t -= 2;
	  return 0.5 * (t * t * ((s + 1) * t + s) + 2);
	}
	
	function inOutBounce(t) {
	
	  if (t < 0.5) return this.inBounce(t * 2) * 0.5;else return this.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
	}
	
	function inOutCirc(t) {
	
	  t *= 2;
	
	  if (t < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
	
	  t -= 2;
	  return 0.5 * (Math.sqrt(1 - t * t) + 1);
	}
	
	function inOutCubic(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t;
	
	  t -= 2;
	  return 0.5 * (t * t * t + 2);
	}
	
	function inOutExpo(t) {
	
	  if (t == 0) return 0;
	
	  if (t == 1.0) return 1.0;
	
	  t *= 2;
	  if (t < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
	
	  --t;
	  return 0.5 * (-Math.pow(2, -10 * t) + 2);
	}
	
	function inOutQuad(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t;
	
	  t -= 2;
	  return -0.5 * (t * t * t * t - 2);
	}
	
	function inOutQuart(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t;
	
	  t -= 2;
	  return -0.5 * (t * t * t * t - 2);
	}
	
	function inOutQuint(t) {
	
	  t *= 2;
	
	  if (t < 1) return 0.5 * t * t * t * t * t;
	
	  t -= 2;
	  return 0.5 * (t * t * t * t * t + 2);
	}
	
	function inOutSine(t) {
	
	  return -0.5 * (Math.cos(Math.PI * t) - 1);
	}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
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