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
	
	// import UpdateList from '_MyLibs/View/Events/EventMgr/UpdateList.es6';
	// import ResizeList from '_MyLibs/View/Events/EventMgr/ResizeList.es6';
	
	// import MouseList from '_MyLibs/View/Events/EventMgr/MouseList.es6';
	
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
	
	var _UpdateMgr = __webpack_require__(25);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(26);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(27);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(28);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _ScrollList = __webpack_require__(29);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
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
	
	      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
	      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();
	
	      this.onReady();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      //Loading
	      gb.loading = new _Controller4.default();
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
	
	        $('html').addClass('isIOSSafari');
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
	      var $wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('#wrapper');
	
	
	      if (flag) {
	
	        $wrap.on('touchstart.noControl touchmove.noControl touchend.noControl', function (e) {
	          e.preventDefault();
	        });
	
	        // this.f = (e)=>{e.preventDefault();};
	        // document.addEventListener('touchmove', this.f, { passive: false });
	      } else {
	
	        $wrap.off('touchstart.noControl touchmove.noControl touchend.noControl');
	
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
	
	      if ($target.get(0).addEventListener) // older FF
	        $target.get(0).addEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.get(0).onwheel = this.preventDefault; // modern standard
	      $target.get(0).onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      $target.get(0).ontouchmove = this.preventDefault; // mobile
	      // document.onkeydown  = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: 'enableScroll',
	    value: function enableScroll($target) {
	
	      if ($target.get(0).removeEventListener) $target.get(0).removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.get(0).onmousewheel = document.onmousewheel = null;
	      $target.get(0).onwheel = null;
	      $target.get(0).ontouchmove = null;
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
	    'key': 'pattern',
	    'def': '2',
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
	      console.log('loading');
	      this.r.show();
	
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
	      // 
	      // this.e = this.e.update();
	      // this.r.update(this.e);
	
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {
	      this.r.endFlag = true;
	      this.r.hide();
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
	    this.endFlag = false;
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
	      var _this = this;
	
	      var $target = $('.loading');
	
	      var tl = new TimelineMax();
	
	      $target.find('.shape').each(function (i, e) {
	        tl.to(e, .5, {
	          scale: 1,
	          ease: Power4.easeInOut,
	          opacity: 1
	        }).set(e, {
	          opacity: 0,
	          scale: 0
	        });
	      });
	      tl.add(function (e) {
	        if (!_this.is_hide) _this.hide(true);
	      });
	      tl.repeat(-1);
	      this.loadingTL = tl;
	    }
	  }, {
	    key: 'update',
	    value: function update(e) {}
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this2 = this;
	
	      var is_end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      console.log(is_end, this.endFlag);
	      if (!this.endFlag || !is_end) return;
	      this.is_hide = true;
	
	      var tl = new TimelineMax();
	      tl.add(function (e) {
	        $('.loading').addClass('loaded');
	        $(window).trigger('loadingEnd');
	        console.log('end');
	      }).add(function (e) {
	        _this2.remove();
	      }, .5);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	
	      $('.loading').remove();
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
	
	// import {Promise} from 'es6-promise';
	
	var _OtherLoader = __webpack_require__(23);
	
	var _OtherLoader2 = _interopRequireDefault(_OtherLoader);
	
	var _THREELoader = __webpack_require__(24);
	
	var _THREELoader2 = _interopRequireDefault(_THREELoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMgr = function () {
	  function LoadMgr() {
	    _classCallCheck(this, LoadMgr);
	
	    this.isFirst = true;
	
	    this.setup();
	    // this.setEvents();
	  }
	
	  _createClass(LoadMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'setupLoad',
	    value: function setupLoad() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return LoadMgr;
	}();
	
	exports.default = LoadMgr;

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
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
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
	    key: "textureByName",
	    value: function textureByName(len, r, cbProg, cbComp) {
	      var _this = this;
	
	      this.list = [];
	      var cnt = 0;
	
	      for (var i = 0; i < len; i++) {
	
	        var resource = r[i];
	        var tl = new THREE.TextureLoader();
	        // tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {
	
	          tex.wrapS = THREE.RepeatWrapping;
	          tex.wrapT = THREE.RepeatWrapping;
	
	          cbProg();
	          cnt++; // ロード数をカウント
	          _this.list.push(tex);
	          if (cnt == len) cbComp();
	        });
	      }
	    }
	  }, {
	    key: "textureByName_order",
	    value: function textureByName_order(len, r, cbProg, cbComp) {
	      var _this2 = this;
	
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
	          _this2.list.push(tex);
	
	          cbProg();
	          if (cnt == len) cbComp();else load(cnt);
	        });
	      };
	
	      load(cnt);
	    }
	  }]);
	
	  return THREELoader;
	}();
	
	exports.default = THREELoader;

/***/ }),
/* 25 */
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
/* 27 */
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
	      var $wrap = this.$wrap.get(0);
	      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
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
/* 28 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(31);
	
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
	    value: function setup() {
	      new _Controller2.default();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	
	
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(32);
	
	var m = _interopRequireWildcard(_index);
	
	var _Controller = __webpack_require__(33);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
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
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    // this.timeline();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      new _Controller2.default();
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	      $(window).on('setup_mv', function (e) {
	        console.log('setup');
	        gb.loading.onComplete();
	      });
	      // $(window).on('loadingEnd', this.timeline.bind(this));
	      // $(window).on('loadingEnd', this.setup.bind(this));
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Controller = __webpack_require__(34);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(38);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _Controller5 = __webpack_require__(45);
	
	var _Controller6 = _interopRequireDefault(_Controller5);
	
	var _Controller7 = __webpack_require__(48);
	
	var _Controller8 = _interopRequireDefault(_Controller7);
	
	var _Controller9 = __webpack_require__(52);
	
	var _Controller10 = _interopRequireDefault(_Controller9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.setup();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      var _this = this;
	
	      this.setupController = new _Controller2.default($('.canvas'), true);
	      this.cz = this.setupController.base.camera.position.z;
	      window.g = {
	        cameraPosi: this.setupController.base.camera.position,
	        camera: this.setupController.base.camera
	      };
	      this.objs = [new _Controller4.default(3), new _Controller4.default(6), new _Controller4.default(4)];
	      this.rand_Obj = [new _Controller6.default('tri'), new _Controller6.default('hexagon'), new _Controller6.default('rect')];
	      this.text = new _Controller8.default(function () {
	        _this.maintext = new _Controller10.default(function () {
	          _this.ready();
	        });
	      });
	
	      // this.setupController.base.scene.add(this.rand_Obj.line)
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      var _this2 = this;
	
	      this.objs.map(function (e) {
	        e.mesh.position.z = 0;
	        _this2.setupController.base.scene.add(e.mesh);
	      });
	      this.maintext.mesh.position.z = 10;
	      this.rand_Obj.map(function (obj) {
	        _this2.setupController.base.scene.add(obj.mesh);
	      });
	
	      this.setupController.base.scene.add(this.text.mesh);
	      this.setupController.base.scene.add(this.maintext.wrap);
	      this.c = 0;
	      $(window).trigger('setup_mv');
	      // this.show();
	    }
	  }, {
	    key: 'setEvent',
	    value: function setEvent() {
	      var _this3 = this;
	
	      $(window).on('loadingEnd', function (e) {
	        _this3.show();
	      });
	      $(window).on('resize', function (e) {
	        _this3.resize();
	      });
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.setupController.base.onWindowResize();
	      this.objs.map(function (obj) {
	        obj.resize();
	      });
	      this.rand_Obj.map(function (obj) {
	        obj.resize();
	      });
	      this.text.resize();
	      this.maintext.resize();
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var _this4 = this;
	
	      var tl = new TimelineMax({ delay: 1.5 });
	      // tl.add(e=>{
	      //   this.objs[2].show()
	      // })
	      console.log('show');
	      tl
	      // show
	      .add(function (e) {
	        _this4.text.show(1);
	      }, 0.0).add(function (e) {
	        _this4.text.show(2);
	      }, 0.3).add(function (e) {
	        _this4.text.show(3);
	      }, 0.4)
	
	      // hide
	      .add(function (e) {
	        _this4.text.hide(1);
	      }, 1.0).add(function (e) {
	        _this4.text.hide(2);
	      }, 1.1).add(function (e) {
	        _this4.text.hide(3);
	      }, 1.2).add(function (e) {
	        _this4.timeline();
	      }, 1.0 + 0.0);
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this5 = this;
	
	      var tl = new TimelineMax();
	
	      tl
	      // rand_Obj
	      .add(function (e) {
	        _this5.rand_Obj[_this5.c].show();
	      }, 0).add(function (e) {
	        // this.rand_Obj.hide()
	      }, 1.6 + .1)
	
	      // mainText
	      .add(function (e) {
	        _this5.maintext.show();
	      }, 0.8 + 0.1)
	
	      // obj
	      .add(function (e) {
	        _this5.objs[_this5.c].show();
	      }, 0.7 + 0.1).add(function (e) {
	        _this5.objs[_this5.c].show2();
	      }, 2.7 + 0.1)
	
	      // cameramove
	      .add(function (e) {
	        _this5.cameraMove();
	      }, 3.4 + 0.1).add(function (e) {
	        _this5.maintext.hide(1);
	      }, 5.9 + 0.1)
	
	      // loop
	      .add(function (e) {
	        ++_this5.c;
	        if (_this5.c == _this5.objs.length) {
	          _this5.c = 0;
	        }
	        _this5.objs.map(function (e) {
	          e.mesh.position.z = 0;
	        });
	        _this5.setupController.base.camera.position.z = _this5.cz;
	        _this5.timeline();
	      }, 7.0);
	    }
	  }, {
	    key: 'cameraMove',
	    value: function cameraMove() {
	      var tl = new TimelineMax();
	      tl.to(this.setupController.base.camera.position, 1, {
	        ease: Expo.easeIn,
	        z: this.setupController.base.camera.position.z * 1.2
	      });
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Controller = __webpack_require__(35);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(36);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    var $dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var is_autoRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var imgpath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	    var textureParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { mag: THREE.LinearFilter, min: THREE.LinearFilter };
	
	    _classCallCheck(this, Controller);
	
	    this.imgPath = imgpath;
	    this.textureParam = textureParam;
	    this.$dom = $dom;
	    this.is_autoRender = is_autoRender;
	    this.init();
	  }
	
	  _createClass(Controller, [{
	    key: 'init',
	    value: function init() {
	      if (this.imgPath.length > 0) {
	        this.imgController = new _Controller2.default(this.imgPath, this.textureParam);
	      }
	      this.base = new _Controller4.default(this.$dom, this.is_autoRender);
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ImgController = function () {
	  function ImgController(imgpath, param) {
	    var _this = this;
	
	    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (e) {};
	
	    _classCallCheck(this, ImgController);
	
	    this.loader = new THREE.TextureLoader();
	    this.param = param;
	    var p = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = imgpath[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var path = _step.value;
	
	        p.push(this.load(path));
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    Promise.all(p).then(function (e) {
	      _this.texture = e;
	      cb();
	    });
	  }
	
	  _createClass(ImgController, [{
	    key: "load",
	    value: function load(path) {
	      var _this2 = this;
	
	      return new Promise(function (r, reject) {
	        _this2.loader.load(path, function (e) {
	          e.magFilter = _this2.param.mag;
	          e.minFilter = _this2.param.min;
	          r(e);
	        });
	      });
	    }
	  }]);
	
	  return ImgController;
	}();
	
	exports.default = ImgController;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _statsJs = __webpack_require__(37);
	
	var _statsJs2 = _interopRequireDefault(_statsJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ClassName = function () {
	  function ClassName($dom, is_autoRender) {
	    _classCallCheck(this, ClassName);
	
	    this.$dom = $dom;
	    this.is_autoRender = is_autoRender;
	    this.initScene();
	    this.initCamera();
	    this.initRender();
	    // this.stats = new Stats();
	    // this.stats.setMode(0);
	    // this.stats.domElement.style.position = 'fixed';
	    // this.stats.domElement.style.left = '0px';
	    // this.stats.domElement.style.top = '0px';
	    // document.body.appendChild( this.stats.domElement );
	    this.render();
	  }
	
	  _createClass(ClassName, [{
	    key: 'initScene',
	    value: function initScene() {
	      this.scene = new THREE.Scene();
	    }
	  }, {
	    key: 'initCamera',
	    value: function initCamera() {
	      this.camera = new THREE.PerspectiveCamera(45, this.$dom.width() / this.$dom.height(), 1, 2000);
	      this.setCameraByPixel();
	    }
	  }, {
	    key: 'setCameraByPixel',
	    value: function setCameraByPixel() {
	      this.w = this.$dom.width();
	      this.h = this.$dom.height();
	      var fov = 45;
	      var vFOV = fov * (Math.PI / 180);
	      var vpHeight = this.h;
	      var z = vpHeight / (2 * Math.tan(vFOV / 2));
	      this.z = z;
	      this.camera.position.set(0, 0, z);
	      this.camera.lookAt(new THREE.Vector3());
	
	      // this.camera.aspect = this.w / this.h;
	      this.camera.aspect = this.w / this.h;
	      this.camera.updateProjectionMatrix();
	    }
	  }, {
	    key: 'initRender',
	    value: function initRender() {
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        alpha: true
	      });
	      this.onWindowResize(true);
	      this.$dom.append(this.renderer.domElement);
	    }
	  }, {
	    key: 'onWindowResize',
	    value: function onWindowResize() {
	      var w = this.$dom.width();
	      var h = this.$dom.height();
	      this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(w, h);
	      this.setCameraByPixel();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // this.stats.begin();
	      this.renderer.render(this.scene, this.camera);
	      if (this.is_autoRender) {
	        requestAnimationFrame(this.render.bind(this));
	      }
	      // this.stats.end();
	    }
	  }]);
	
	  return ClassName;
	}();
	
	exports.default = ClassName;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Stats=t()}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _frag = __webpack_require__(39);
	
	var _frag2 = _interopRequireDefault(_frag);
	
	var _vert = __webpack_require__(40);
	
	var _vert2 = _interopRequireDefault(_vert);
	
	var _Controller = __webpack_require__(41);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _getTriangle = __webpack_require__(42);
	
	var _getTriangle2 = _interopRequireDefault(_getTriangle);
	
	var _getRect = __webpack_require__(43);
	
	var _getRect2 = _interopRequireDefault(_getRect);
	
	var _getHexagon = __webpack_require__(44);
	
	var _getHexagon2 = _interopRequireDefault(_getHexagon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    var segment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
	
	    _classCallCheck(this, Controller);
	
	    var per = this.getPer(1);
	    this.r = 100 * per;
	    this.SEGMENT = segment;
	    var r2 = Math.PI * .5 - Math.PI / segment;
	    this.naisetsu = this.r * 2 * Math.cos(r2);
	    this.tri_height = this.r + this.r * Math.sin(r2);
	    this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 20;
	    this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
	    this.NUM = this.X_NUM * this.Y_NUM;
	    this.colors = [new THREE.Color(0x3afffe), new THREE.Color(0x59ef07), new THREE.Color(0xfd49d7)];
	    this.setup();
	
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'getPer',
	    value: function getPer() {
	      var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	
	      if (window.innerWidth > 1023) {
	        return point;
	      } else {
	        return point / 1023 * window.innerWidth;
	      }
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      var geometry = this.setGeometry();
	      var color = void 0;
	      if (this.SEGMENT == 3) {
	        color = this.colors[0];
	      } else if (this.SEGMENT == 4) {
	        color = this.colors[1];
	      } else if (this.SEGMENT == 6) {
	        color = this.colors[2];
	      }
	      var material = new THREE.ShaderMaterial({
	        vertexShader: _vert2.default,
	        fragmentShader: _frag2.default,
	        uniforms: {
	          time: { type: 'f', value: 0 },
	          resolution: { type: 'v2', value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
	          s_time: { type: 'f', value: 0 },
	          tri_height: { type: "f", value: this.tri_height },
	          rgb: { type: 'v3', value: color },
	          z_time: { type: "f", value: 0 }
	        }
	      });
	      this.mesh = new THREE.Group();
	      var mesh = new THREE.Mesh(geometry, material);
	      mesh.name = 'obj';
	      this.mesh.add(mesh);
	      this.lineSetup(color);
	    }
	  }, {
	    key: 'setGeometry',
	    value: function setGeometry() {
	      var base_g = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	      var base_geometry = new THREE.CircleBufferGeometry(this.r, this.SEGMENT, Math.PI * 0.5);
	      var base_geometry2 = new THREE.CircleBufferGeometry(this.r, this.SEGMENT, Math.PI * 1.5);
	      var geometry = base_g || new THREE.BufferGeometry();
	
	      var position = base_geometry.attributes.position;
	      var position2 = base_geometry2.attributes.position;
	      var normal = base_geometry.attributes.normal;
	      var attributes = void 0;
	      if (this.SEGMENT == 3) {
	        attributes = (0, _getTriangle2.default)({
	          r: this.r,
	          geometry1: base_geometry,
	          geometry2: base_geometry2,
	          ynum: this.Y_NUM,
	          xnum: this.X_NUM
	        });
	      } else if (this.SEGMENT == 4) {
	        attributes = (0, _getRect2.default)({
	          r: this.r,
	          geometry1: base_geometry,
	          geometry2: base_geometry2,
	          ynum: this.Y_NUM,
	          xnum: this.X_NUM
	        });
	      } else if (this.SEGMENT == 6) {
	        attributes = (0, _getHexagon2.default)({
	          r: this.r,
	          geometry1: base_geometry,
	          geometry2: base_geometry2,
	          ynum: this.Y_NUM,
	          xnum: this.X_NUM
	        });
	      }
	
	      var p = attributes.p;
	      var n = attributes.n;
	      var u = attributes.u;
	      var s = attributes.s;
	      var m = attributes.m;
	      var diff = attributes.diff;
	      var is_smalls = attributes.is_smalls;
	
	      var indexes = base_geometry.index;
	      var index = [];
	
	      var c = indexes.count / 3 + 2;
	      for (var i = 0; i < this.NUM; i++) {
	        indexes.array.map(function (e) {
	          index.push(e + c * i);
	        });
	      }
	
	      var ids = s.map(function (e, i) {
	        return Math.floor(i / position.count);
	      });
	      var rand_Scale = [];
	      for (var i = 0; i < ids.length / position.count; i++) {
	        var r = Math.random() * 1000 + 10;
	        for (var j = 0; j < position.count; j++) {
	          rand_Scale.push(r);
	        }
	      }
	
	      geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(p), 3));
	      geometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(u), 2));
	      geometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(n), 3));
	      geometry.addAttribute('margin', new THREE.BufferAttribute(new Float32Array(m), 2));
	      geometry.addAttribute('diff', new THREE.BufferAttribute(new Float32Array(diff), 2));
	      geometry.addAttribute('ids', new THREE.BufferAttribute(new Float32Array(ids), 1));
	      geometry.addAttribute('scale', new THREE.BufferAttribute(new Float32Array(s), 1));
	      geometry.addAttribute('is_smalls', new THREE.BufferAttribute(new Float32Array(is_smalls), 1));
	      geometry.addAttribute('rand_Scale', new THREE.BufferAttribute(new Float32Array(rand_Scale), 1));
	      geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1));
	
	      return geometry;
	    }
	  }, {
	    key: 'lineSetup',
	    value: function lineSetup(color) {
	      this.line = new _Controller2.default(this.NUM, color);
	      this.mesh.add(this.line.mesh);
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var tl = new TimelineMax();
	
	      tl.set(this.mesh.children[0].material.uniforms.time, { value: 0 }).set(this.mesh.children[0].material.uniforms.s_time, { value: 0 }).set(this.mesh.children[0].material.uniforms.z_time, { value: 0 }).to(this.mesh.children[0].material.uniforms.time, 1.2, {
	        value: 1.0,
	        ease: Expo.easeInOut
	      }, 0.0).to(this.mesh.children[0].material.uniforms.s_time, 1.2, {
	        value: 1.0,
	        ease: Expo.easeInOut
	      }, 0.8);
	    }
	
	    // splash shape
	
	  }, {
	    key: 'show2',
	    value: function show2() {
	      var tl = new TimelineMax();
	      tl.to(this.mesh.children[0].material.uniforms.s_time, 2.6, {
	        value: 0,
	        ease: Expo.easeInOut
	      }).to(this.mesh.children[0].material.uniforms.z_time, 1.5, {
	        value: 1.2,
	        // x:10000,
	        ease: Expo.easeOut
	      }, 1.4).to(this.mesh.children[0].material.uniforms.z_time, 1, {
	        value: 120.0,
	        // x:10000,
	        ease: Expo.easeInOut
	      }, 2.8).add(function (e) {
	        // this.line.show();
	      }, 2.9);
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      var _this = this;
	
	      var per = this.getPer(1);
	      this.r = 100 * per;
	      var r2 = Math.PI * .5 - Math.PI / this.SEGMENT;
	      this.naisetsu = this.r * 2 * Math.cos(r2);
	      this.tri_height = this.r + this.r * Math.sin(r2);
	      this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 20;
	      this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
	      this.NUM = this.X_NUM * this.Y_NUM;
	
	      this.mesh.children.map(function (mesh) {
	        if (mesh.name == 'obj') {
	          _this.setGeometry(mesh.geometry);
	          mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
	          mesh.material.uniforms.tri_height.value = _this.tri_height;
	        }
	      });
	    }
	  }, {
	    key: 'setEvent',
	    value: function setEvent() {}
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec3 color;\nvoid main(void) {\n  gl_FragColor = vec4(color,1.0);\n}\n"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n#define PI 3.141592653589793;\n\nattribute float scale;\nattribute float is_smalls;\nattribute vec2 diff;\nattribute vec2 margin;\nattribute float ids;\nattribute float rand_Scale;\n\n// varying vec2 vUv;\nvarying vec3 color;\n\nuniform float time;\nuniform float s_time;\nuniform float tri_height;\nuniform float z_time;\nuniform vec2 resolution;\nuniform vec3 rgb;\n\nfloat scaleCalc(){\n  vec2 p = margin / resolution;\n  float is_show = step(length(p),time);\n  float m = 1.0 - length(p);\n  float s = (length(p) + time * m) * scale * is_show;\n  float s2 = s + (1.0 - s)*s_time;\n  return s2;\n}\n\nfloat margin_y(float s){\n  return is_smalls == 0.0 ? 0.0 : s*(tri_height / 3.0);\n}\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 z_move(vec3 p){\n  // float r = rand(vec2(p.x,p.y));\n  float s = scaleCalc();\n  vec2 center = vec2(margin.x + diff.x,margin.y - margin_y(s) + diff.y);\n  float num = is_smalls == 1.0 ? 1.0 : -1.0;\n  // float theta = num * time * .666666 * PI;\n  float theta = 0.0;\n  mat2 cssc = mat2(cos(theta),-sin(theta),sin(theta),cos(theta));\n  vec2 r = (p.xy - center) * cssc + center;\n  return vec3(r,rand_Scale * z_time * 1.5);\n}\n\n\n\nvoid main() {\n  // vUv = uv;\n\n  float _c = (10.0 / 255.0) * rand(vec2(clamp(s_time,0.4,.5),ids)) * s_time;\n  color = rgb - _c;\n\n  float s = scaleCalc();\n  float x = position.x * s + margin.x + diff.x;\n  float y = position.y * s + margin.y - margin_y(s) + diff.y;\n  float z = 1.0;\n  vec3 p = z_move(vec3(x,y,z));\n  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);\n\n  gl_Position = projected;\n}\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(num, color) {
	    _classCallCheck(this, Controller);
	
	    this.NUM = num * .5;
	    this.LINE_WIDTH = 2;
	    this.colors = [color];
	    this.MIN_LENGTH = 300;
	    this.MAX_LENGTH = 701;
	    this.mesh = new THREE.Group();
	    this.setup();
	  }
	
	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      var _this = this;
	
	      var _loop = function _loop() {
	        var geometry = new THREE.Geometry();
	        var posi = _this.getPosi();
	        posi.map(function (e) {
	          var v = new THREE.Vector3(e.x, e.y, e.z);
	          geometry.vertices.push(v);
	        });
	        var line = new MeshLine();
	        line.setGeometry(geometry, function (p) {
	          return _this.LINE_WIDTH;
	        });
	        var material = new MeshLineMaterial({
	          color: _this.colors[0],
	          resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
	          sizeAttenuation: false,
	          opacity: 1,
	          depthWrite: false,
	          depthTest: false,
	          dashArray: 1,
	          dashOffset: 0,
	          transparent: true
	        });
	        _this.mesh.add(new THREE.Mesh(line.geometry, material));
	        // console.log('line');
	      };
	
	      for (var i = 0; i < this.NUM; i++) {
	        _loop();
	      }
	    }
	  }, {
	    key: "getPosi",
	    value: function getPosi() {
	      var r = Math.random() * 2 * Math.PI;
	      var r2 = Math.random() + .5;
	      var p0 = {
	        x: this.MIN_LENGTH * Math.cos(r) * r2,
	        y: this.MIN_LENGTH * Math.sin(r) * r2,
	        z: 0
	      };
	      var p1 = {
	        x: this.MAX_LENGTH * Math.cos(r) * r2,
	        y: this.MAX_LENGTH * Math.sin(r) * r2,
	        z: this.MAX_LENGTH * Math.random()
	      };
	      var p = [p0, p1];
	      return p;
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      this.mesh.children.map(function (e, i) {
	
	        tl.set(e.material.uniforms.dashOffset, {
	          value: 0
	        }).to(e.material.uniforms.dashOffset, .7, {
	          value: -1,
	          ease: Power4.easeInOut
	        }, i * 0.001);
	      });
	
	      // .to
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (param) {
	  var segment = 3;
	  var position = param.geometry1.attributes.position;
	  var position2 = param.geometry2.attributes.position;
	  var normal = param.geometry1.attributes.normal;
	  var uv = param.geometry1.attributes.uv;
	
	  var r2 = Math.PI * .5 - Math.PI / segment;
	  var naisetsu = param.r * 2 * Math.cos(r2);
	  var tri_height = param.r + param.r * Math.sin(r2);
	
	  var base_m = -window.innerWidth * 0.5 - naisetsu;
	  var base_y = window.innerHeight * 0.5 + naisetsu;
	
	  var p = [];
	  var n = [];
	  var u = [];
	  var s = [];
	  var m = [];
	  var is_smalls = [];
	  var diff = [];
	
	  for (var _y = 0; _y < param.ynum; _y++) {
	    var _loop = function _loop() {
	      var is_small = _x % 2 == 0;
	      var scale = is_small ? 0.25 : 0.5;
	      var _margin_y = base_y - _y * tri_height;
	      var _d = -naisetsu * .5 * (_y % 2);
	      position.array.map(function (e, j) {
	        // console.log(e);
	        var ep = is_small ? e : position2.array[j];
	        if (j % 3 == 0) {
	          s.push(scale);
	          m.push(base_m + _x * naisetsu * 0.5);
	          diff.push(_d);
	          is_smalls.push(is_small);
	        }
	        if (j % 3 == 1) {
	          m.push(_margin_y);
	          diff.push(0);
	        }
	        p.push(ep);
	      });
	
	      uv.array.map(function (e) {
	        u.push(e);
	      });
	
	      normal.array.map(function (e) {
	        n.push(e);
	      });
	    };
	
	    for (var _x = 0; _x < param.xnum; _x++) {
	      _loop();
	    }
	  }
	
	  return {
	    p: p,
	    n: n,
	    u: u,
	    s: s,
	    m: m,
	    is_smalls: is_smalls,
	    diff: diff
	  };
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (param) {
	  var segment = 4;
	  var position = param.geometry1.attributes.position;
	  var position2 = position;
	  var normal = param.geometry1.attributes.normal;
	  var uv = param.geometry1.attributes.uv;
	
	  var r2 = Math.PI * .5 - Math.PI / segment;
	  var naisetsu = param.r * 2 * Math.cos(r2);
	  var tri_height = param.r + param.r * Math.sin(r2);
	  var base_m = -window.innerWidth * 0.5 - naisetsu;
	  var base_y = window.innerHeight * 0.5 + naisetsu;
	
	  var p = [];
	  var n = [];
	  var u = [];
	  var s = [];
	  var m = [];
	  var is_smalls = [];
	  var diff = [];
	
	  for (var _y = 0; _y < param.ynum; _y++) {
	    var _loop = function _loop() {
	      var is_small = _y % 2;
	      var scale = is_small ? 0.25 : .5;
	      var _margin_y = base_y - _y * param.r;
	      var _dx = _y % 2 ? param.r : 0;
	      var _dy = _y % 2 ? param.r * .57 : 0;
	      position.array.map(function (e, j) {
	        // console.log(e);
	        var ep = is_small ? e : position2.array[j];
	        if (j % 3 == 0) {
	          s.push(scale);
	          m.push(base_m + _x * param.r * 2.0);
	          diff.push(_dx);
	          is_smalls.push(is_small);
	        }
	        if (j % 3 == 1) {
	          m.push(_margin_y);
	          diff.push(_dy);
	        }
	        p.push(ep);
	      });
	
	      uv.array.map(function (e) {
	        u.push(e);
	      });
	
	      normal.array.map(function (e) {
	        n.push(e);
	      });
	    };
	
	    for (var _x = 0; _x < param.xnum; _x++) {
	      _loop();
	    }
	  }
	
	  return {
	    p: p,
	    n: n,
	    u: u,
	    s: s,
	    m: m,
	    is_smalls: is_smalls,
	    diff: diff
	  };
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (param) {
	  var segment = 6;
	  var position = param.geometry1.attributes.position;
	  var position2 = position;
	  var normal = param.geometry1.attributes.normal;
	  var uv = param.geometry1.attributes.uv;
	
	  var r2 = Math.PI * .5 - Math.PI / segment;
	  var naisetsu = param.r * 2 * Math.cos(r2);
	  var tri_height = param.r * Math.sin(r2);
	  var base_m = -window.innerWidth * 0.5 - naisetsu;
	  var base_y = window.innerHeight * .5;
	
	  var p = [];
	  var n = [];
	  var u = [];
	  var s = [];
	  var m = [];
	  var is_smalls = [];
	  var diff = [];
	
	  for (var _y = 0; _y < param.ynum; _y++) {
	    var _loop = function _loop() {
	      var is_small = _y % 2;
	      var scale = is_small ? .5 : .25;
	      var _margin_y = base_y - param.r * 1.5 * _y;
	      var _dx = _y % 2 ? tri_height : 0;
	      var _dy = is_small == 0 ? 0 : (param.r + param.r * Math.sin(r2)) / 3;
	      position.array.map(function (e, j) {
	        // console.log(e);
	        var ep = is_small ? e : position2.array[j];
	        if (j % 3 == 0) {
	          s.push(scale);
	          m.push(base_m + _x * tri_height * 2.0);
	          diff.push(_dx);
	          is_smalls.push(is_small);
	        }
	        if (j % 3 == 1) {
	          m.push(_margin_y);
	          diff.push(_dy);
	        }
	        p.push(ep);
	      });
	
	      uv.array.map(function (e) {
	        u.push(e);
	      });
	
	      normal.array.map(function (e) {
	        n.push(e);
	      });
	    };
	
	    for (var _x = 0; _x < param.xnum; _x++) {
	      _loop();
	    }
	  }
	
	  return {
	    p: p,
	    n: n,
	    u: u,
	    s: s,
	    m: m,
	    is_smalls: is_smalls,
	    diff: diff
	  };
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // const MeshLine = require( 'three.meshline' );
	
	
	var _GetBasePosition = __webpack_require__(46);
	
	var basePosi = _interopRequireWildcard(_GetBasePosition);
	
	var _ShowAnimation = __webpack_require__(47);
	
	var showAnimation = _interopRequireWildcard(_ShowAnimation);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rand_Obj = function () {
	  function Rand_Obj() {
	    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "tri";
	
	    _classCallCheck(this, Rand_Obj);
	
	    this.key = key;
	
	    var per = this.getPer(1);
	    this.r = 100 * per;
	    this.LINE_WIDTH = 10;
	    this.naisetsu = this.r * 3 / Math.sqrt(3);
	    this.tri_height = this.r * 1.5;
	
	    if (this.key == 'tri') {
	      this.NUM = 3;
	      this.SEGMENT = 3;
	      this.COLOR = new THREE.Color(0x3afffe);
	      this.positions = [{ x: -300 * per, y: 0, z: 0 }, { x: -300 * per + this.naisetsu * 1.1, y: this.r * 1.6 * per, z: 0 }, { x: 400 * per, y: -this.r * 1.5 * per, z: 0 }];
	      this.rotation = [Math.PI * .5, Math.PI * (30 / 180), Math.PI * .5];
	      this.scales = [1.2, 0.7, 4];
	    } else if (this.key == 'rect') {
	      this.SEGMENT = 4;
	      this.NUM = 2;
	      this.COLOR = new THREE.Color(0x59ef07);
	      this.positions = [{ x: -400 * per, y: 0, z: 0 }, { x: 500 * per, y: this.r * .5 * per, z: 0 }];
	      this.rotation = [Math.PI * .5, Math.PI * 1.5];
	      this.scales = [4, 1];
	    } else if (this.key == 'hexagon') {
	      this.SEGMENT = 6;
	      this.NUM = 5;
	      this.COLOR = new THREE.Color(0xfd49d7);
	      this.positions = [{ x: -200 * per, y: 0, z: 0 }, { x: 400 * per, y: this.r * 1 * per, z: 0 }, { x: 375 * per, y: this.r * .65, z: 0 }, { x: 250 * per, y: this.r * 1.5 * per, z: 0 }, { x: -100 * per, y: this.r * -.5 * per, z: 0 }];
	      this.rotation = [Math.PI * .5, Math.PI * 1.5, Math.PI * .5, Math.PI * 1.5, Math.PI * .5];
	      this.scales = [1.7, .2, .2, .2, 4];
	    }
	
	    this.showCount = 10;
	
	    this.setup();
	  }
	
	  _createClass(Rand_Obj, [{
	    key: 'getPer',
	    value: function getPer() {
	      var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	
	      if (window.innerWidth > 1023) {
	        return point;
	      } else {
	        return point / 1023 * window.innerWidth;
	      }
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      this.mesh = new THREE.Group();
	      this.lines = [];
	      for (var j = 0; j < this.NUM; j++) {
	
	        var posi = basePosi.getTriangle({
	          s: this.scales[j],
	          r: this.r,
	          rotation: this.rotation[j],
	          segment: this.SEGMENT
	        });
	
	        this.fillObj(this.scales[j], this.rotation[j], this.positions[j]);
	
	        var _lineObj = this.lineObj(posi),
	            _lineObj2 = _slicedToArray(_lineObj, 3),
	            mesh = _lineObj2[0],
	            lineposi = _lineObj2[1],
	            geo = _lineObj2[2];
	
	        mesh.position.set(this.positions[j].x, this.positions[j].y, this.positions[j].z);
	        this.mesh.add(mesh);
	
	        var _lineObj3 = this.lineObj2(lineposi, j),
	            _lineObj4 = _slicedToArray(_lineObj3, 2),
	            mesh2 = _lineObj4[0],
	            geo2 = _lineObj4[1];
	
	        mesh2.position.set(this.positions[j].x, this.positions[j].y, this.positions[j].z);
	        this.mesh.add(mesh2);
	      }
	    }
	  }, {
	    key: 'fillObj',
	    value: function fillObj() {
	      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var rotation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.PI * .5;
	      var position = arguments[2];
	
	      var geometry = new THREE.CircleBufferGeometry(this.r * scale, this.SEGMENT, rotation);
	      var material = new THREE.MeshBasicMaterial({
	        color: this.COLOR,
	        transparent: true,
	        opacity: 0,
	        depthTest: true
	      });
	      var mesh = new THREE.Mesh(geometry, material);
	      mesh.name = 'fill';
	      mesh.position.set(position.x, position.y, position.z);
	      this.mesh.add(mesh);
	    }
	  }, {
	    key: 'lineObj',
	    value: function lineObj(posi) {
	      var _this = this;
	
	      var geometry = new THREE.Geometry();
	      posi.map(function (e, i) {
	        var v = i == posi.length - 1 ? new THREE.Vector3(posi[0].x, posi[0].y, 0) : new THREE.Vector3(e.x, e.y, 0);
	        geometry.vertices.push(v);
	      });
	      var line = new MeshLine();
	      line.setGeometry(geometry, function (p) {
	        return _this.LINE_WIDTH;
	      });
	      var material = new MeshLineMaterial({
	        color: this.COLOR,
	        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
	        sizeAttenuation: false,
	        opacity: 0,
	        depthWrite: false,
	        depthTest: true,
	        dashArray: 2,
	        dashOffset: 0,
	        transparent: true
	      });
	      var mesh = new THREE.Mesh(line.geometry, material);
	      mesh.name = 'line';
	      return [mesh, posi, geometry];
	    }
	  }, {
	    key: 'lineObj2',
	    value: function lineObj2(posi, index) {
	      var _this2 = this;
	
	      var geometry = new THREE.Geometry();
	      var p = [posi[0], posi[1]];
	      if (index == 2 && this.key == 'tri') {
	        p = [posi[0], posi[2]];
	      }
	
	      var v1 = new THREE.Vector3(p[0].x, p[0].y, 0);
	      var v2 = new THREE.Vector3(p[1].x, p[1].y, 0);
	      var _v3 = v2.sub(v1).distanceTo(v1);
	      var scalar = _v3 > 100 ? 10 : 100;
	      // if()
	      var v3 = v2.sub(v1).multiplyScalar(scalar).add(v1);
	
	      geometry.vertices.push(v1);
	      geometry.vertices.push(v3);
	      var line = new MeshLine();
	      line.setGeometry(geometry, function (p) {
	        return _this2.LINE_WIDTH * .5;
	      });
	      var material = new MeshLineMaterial({
	        color: this.COLOR,
	        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
	        sizeAttenuation: false,
	        depthWrite: false,
	        depthTest: true,
	        dashArray: 2,
	        dashOffset: 0,
	        transparent: true
	      });
	      var mesh = new THREE.Mesh(line.geometry, material);
	      mesh.name = 'l';
	      return [mesh, geometry];
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      if (this.key == 'tri') showAnimation.triangle(this.mesh);
	      if (this.key == 'rect') showAnimation.rect(this.mesh);
	      if (this.key == 'hexagon') showAnimation.hexagon(this.mesh);
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      var _this3 = this;
	
	      this.mesh.children.map(function (mesh) {
	        if (mesh.name == 'line' || mesh.name == 'l') {
	          mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
	        }
	      });
	      var per = this.getPer(1);
	      this.r = 100 * per;
	      this.naisetsu = this.r * 3 / Math.sqrt(3);
	      this.positions = [{ x: -300 * per, y: 0, z: 0 }, { x: -300 * per + this.naisetsu * 1.1, y: this.r * 1.6 * per, z: 0 }, { x: 400 * per, y: -this.r * 1.5 * per, z: 0 }];
	      var objs = [];
	      this.mesh.children.map(function (e, i) {
	        var index = Math.floor(i / 3);
	        if (!objs[index]) {
	          objs[index] = {};
	        }
	        objs[index][e.name] = e;
	      });
	      objs.map(function (obj, index) {
	
	        var scale = _this3.scales[index];
	        var rotation = _this3.rotation[index];
	        var posi = basePosi.getTriangle({
	          s: _this3.scales[index],
	          rotation: _this3.rotation[index],
	          r: _this3.r,
	          segment: _this3.SEGMENT
	        });
	
	        var _lineObj5 = _this3.lineObj(posi),
	            _lineObj6 = _slicedToArray(_lineObj5, 3),
	            m = _lineObj6[0],
	            l_posi = _lineObj6[1],
	            geometry = _lineObj6[2];
	
	        var _lineObj7 = _this3.lineObj2(l_posi, index),
	            _lineObj8 = _slicedToArray(_lineObj7, 2),
	            m2 = _lineObj8[0],
	            geometry2 = _lineObj8[1];
	
	        console.log();
	        obj.l.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
	        obj.line.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
	        obj.fill.geometry.dispose();
	        obj.fill.geometry = new THREE.CircleBufferGeometry(_this3.r * scale, _this3.SEGMENT, rotation);
	        obj.fill.position.set(_this3.positions[index].x, _this3.positions[index].y, _this3.positions[index].z);
	        obj.line.geometry.dispose();
	        obj.line.geometry = m.geometry;
	        obj.line.position.set(_this3.positions[index].x, _this3.positions[index].y, _this3.positions[index].z);
	        obj.l.geometry.dispose();
	        obj.l.geometry = m2.geometry;
	        obj.l.position.set(_this3.positions[index].x, _this3.positions[index].y, _this3.positions[index].z);
	      });
	    }
	  }]);
	
	  return Rand_Obj;
	}();
	
	exports.default = Rand_Obj;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTriangle = getTriangle;
	function getTriangle(param) {
	  var base_geometry = new THREE.CircleBufferGeometry(param.r * param.s, param.segment, param.rotation);
	  var r = [];
	  // console.log(base_geometry);
	  var p = base_geometry.index.array.filter(function (item, i) {
	    if (item > 0) return item;
	  }).filter(function (x, i, self) {
	    return self.indexOf(x) === i;
	  });
	  base_geometry.attributes.position.array.map(function (e, i) {
	    var index = Math.floor(i / 3);
	    var is_p = p.indexOf(index) >= 0;
	    if (!is_p) return;
	    var ar = index - 1;
	    if (!r[ar]) r.push({ x: 0, y: 0, z: 0 });
	    if (i % 3 == 0) r[ar].x = e;
	    if (i % 3 == 1) r[ar].y = e;
	    if (i % 3 == 2) r[ar].z = e;
	  });
	  return r;
	}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.triangle = triangle;
	exports.rect = rect;
	exports.hexagon = hexagon;
	function triangle(mesh) {
	  var tl = new TimelineMax();
	  var objs = createobjs(mesh);
	
	  tl
	
	  // 真ん中の三角形
	  .to(objs[1].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs[1].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .1).add(function (e) {
	    rotateShow(objs[1]);
	  }, .3)
	
	  // 左側の三角形
	  .to(objs[0].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Power4.easeOut
	  }, .6 - 0.3).to(objs[0].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Power4.easeOut
	  }, .7 - 0.3).to(objs[2].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Power4.easeOut
	  }, .7 - 0.3).to(objs[2].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Power4.easeOut
	  }, .8 - 0.3).add(function (e) {
	    moveShow(objs[0]);
	  }, .6 - 0.3).add(function (e) {
	    zoomShow(objs[2]);
	  }, .7);
	}
	
	function rect(mesh) {
	  var tl = new TimelineMax();
	  var objs = createobjs(mesh);
	  tl.to(objs[0].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs[0].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .1).add(function (e) {
	    rotateShow(objs[0]);
	  }).to(objs[1].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .3).to(objs[1].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .4).add(function (e) {
	    scaleShow(objs[1]);
	  }, .5);
	}
	
	function hexagon(mesh) {
	  var tl = new TimelineMax();
	  var objs = createobjs(mesh);
	  tl.to(objs[0].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs[0].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .1).add(function (e) {
	    scaleShow(objs[0], true);
	  }).to(objs[1].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs[1].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .1).add(function (e) {
	    rotateShow(objs[1]);
	  }, .2).to(objs[2].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs[2].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .1).add(function (e) {
	    rotateShow(objs[2]);
	  }, .2).to(objs[3].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .2).to(objs[3].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .3).add(function (e) {
	    rotateShow(objs[3]);
	  }, .4).to(objs[4].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .8).to(objs[4].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .9).add(function (e) {
	    smallShow(objs[4]);
	  }, 1.0);
	}
	
	function reset(objs) {
	  objs.l.material.uniforms.dashOffset.value = 0;
	  objs.fill.rotation.z = 0;
	  objs.line.rotation.z = 0;
	  objs.fill.scale.x = 1;
	  objs.fill.scale.y = 1;
	  objs.line.scale.x = 1;
	  objs.line.scale.y = 1;
	  objs.line.material.uniforms.dashOffset.value = 0;
	  objs.line.material.opacity = 0;
	}
	
	function createobjs(mesh) {
	  var objs = [];
	  mesh.children.map(function (e, i) {
	    var index = Math.floor(i / 3);
	    if (!objs[index]) {
	      objs[index] = {};
	    }
	    objs[index][e.name] = e;
	  });
	  return objs;
	}
	
	function zoomShow(objs) {
	  var tl = new TimelineMax();
	
	  tl.set(objs.line.material, {
	    opacity: 1
	  }, 0.0).to(objs.line.material.uniforms.dashOffset, .4, {
	    value: 1,
	    ease: Expo.easeOut
	  }, 0.0).to(objs.line.material.uniforms.dashOffset, .5, {
	    value: 2,
	    ease: Expo.easeOut
	  }, 0.5)
	
	  // flash
	  .add(function () {
	    for (var j = 0; j < 7; j++) {
	      if (j % 2 == 0) {
	        TweenMax.set(objs.fill.material, {
	          opacity: 0,
	          delay: j * .03
	        });
	      } else {
	        TweenMax.set(objs.fill.material, {
	          opacity: 1,
	          delay: j * .03
	        });
	      }
	    }
	  }, 0.2);
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}
	
	function rotateShow(objs) {
	  var tl = new TimelineMax();
	  tl.set(objs.line.material, { opacity: 1 })
	
	  // rotate
	  .to(objs.fill.rotation, .3, {
	    z: -Math.PI * 2,
	    ease: Expo.easeOut
	  }, 0)
	
	  // flash
	  .add(function () {
	    for (var j = 0; j < 7; j++) {
	      if (j % 2 == 0) {
	        TweenMax.set(objs.fill.material, {
	          opacity: 0,
	          delay: j * .03
	        });
	      } else {
	        TweenMax.set(objs.fill.material, {
	          opacity: 1,
	          delay: j * .03
	        });
	      }
	    }
	  }, 0.2)
	
	  // 線伸ばす
	  .to(objs.line.material.uniforms.dashOffset, .4, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .2);
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}
	
	function moveShow(objs) {
	  var tl = new TimelineMax();
	  tl.to(objs.line.material, .2, {
	    opacity: 1
	  }, 0)
	
	  // 線を伸ばす
	  .to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeInOut
	  }, .2).to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 2,
	    ease: Expo.easeInOut
	  }, .4)
	
	  // flash
	  .add(function () {
	    for (var j = 0; j < 7; j++) {
	      if (j % 2 == 0) {
	        TweenMax.set(objs.fill.material, {
	          opacity: 0,
	          delay: j * .03
	        });
	      } else {
	        TweenMax.set(objs.fill.material, {
	          opacity: 1,
	          delay: j * .03
	        });
	      }
	    }
	  }, 0.5);
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}
	
	function scaleShow(objs) {
	  var tl = new TimelineMax();
	  var flashnum = 13;
	  tl.set(objs.line.material, {
	    opacity: 1
	  }, 0).add(function () {
	    for (var j = 0; j < flashnum; j++) {
	      if (j % 2 == 0) {
	        TweenMax.set(objs.fill.material, {
	          opacity: 0,
	          delay: j * .03
	        });
	      } else {
	        TweenMax.set(objs.fill.material, {
	          opacity: 1,
	          delay: j * .03
	        });
	      }
	    }
	  }, 0).to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeInOut
	  }, 0).to(objs.line.scale, .4, {
	    x: 4,
	    y: 4,
	    ease: Expo.easeInOut
	  }, 0).to(objs.fill.scale, .2, {
	    x: 2,
	    y: 2,
	    ease: Expo.easeInOut
	  }, .2).set(objs.line.material, {
	    opacity: 0
	  }, flashnum * .03);
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}
	
	function smallShow(objs) {
	  var tl = new TimelineMax();
	  var flashnum = 7;
	  tl.set(objs.line.material, {
	    opacity: 1
	  }, 0).add(function () {
	    for (var j = 0; j < flashnum; j++) {
	      if (j % 2 == 0) {
	        TweenMax.set(objs.fill.material, {
	          opacity: 0,
	          delay: j * .03
	        });
	      } else {
	        TweenMax.set(objs.fill.material, {
	          opacity: 1,
	          delay: j * .03
	        });
	      }
	    }
	  }, 0).to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeInOut
	  }, flashnum * .03).to(objs.line.scale, .2, {
	    x: .5,
	    y: .5,
	    ease: Expo.easeInOut
	  }, flashnum * .03).set(objs.line.rotation, {
	    z: Math.PI * .5,
	    ease: Expo.easeInOut
	  }, flashnum * .03).set(objs.line.material, {
	    opacity: 0
	  }, flashnum * .03 + .2);
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Controller = __webpack_require__(49);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(cb) {
	    _classCallCheck(this, Controller);
	
	    this.cb = cb;
	    this.imgpath = '/assets-2020/img/';
	    this.imgsNUM = 11;
	    this.loader = new THREE.TextureLoader();
	    this.setup();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      var _this = this;
	
	      var ps = [];
	      for (var i = 0; i < this.imgsNUM; i++) {
	        var path = i + 1;
	        var p = this.textureload(this.imgpath + path + '.png');
	        ps.push(p);
	      }
	      Promise.all(ps).then(function (textures) {
	        _this.textures = textures;
	        _this.ready();
	      });
	    }
	  }, {
	    key: 'textureload',
	    value: function textureload(path) {
	      var _this2 = this;
	
	      return new Promise(function (resolve, reject) {
	        _this2.loader.load(path, function (t) {
	          resolve(t);
	        });
	      });
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      var _this3 = this;
	
	      this.mesh = new THREE.Group();
	      var per = this.getPer(1);
	      var position = {
	        t1: [{ x: -300, y: 300, s: 3 }, { x: -300 + 100 * 1.25, y: 220, s: 2 }, { x: -300 + 100 * 2, y: 220 - 100 * .3, s: 2 }],
	        t2: [{ x: 300, y: 200, s: 4.5 }, { x: 300 + 100 * 1.3, y: 90, s: 1.5 }, { x: 300 + 100 * 0.5, y: 20, s: 1.5 }],
	        t3: [{ x: -200, y: 100 - 30, s: 4 }, { x: -200 + 110 * 1.4, y: 20 - 30, s: 2.5 }, { x: -200 + 100 + 170, y: 60 - 30, s: 1.5 }, { x: -200 + 100 + 170 + 100 * .5, y: 20 - 30, s: 1.5 }, { x: -200 + 100 + 170 + 100 * 1, y: 50 - 30, s: 1.5 }]
	      };
	      this.position = position;
	      for (var key in position) {
	        position[key].map(function (e) {
	          e.x *= per;
	          e.y *= per;
	        });
	      }
	      var t01 = this.textures.filter(function (t, i) {
	        return i < 3;
	      });
	      this.text01 = new _Controller2.default(t01, position.t1, 1);
	      this.mesh.add(this.text01.mesh);
	      var t02 = this.textures.filter(function (t, i) {
	        return i >= 3 && i < 6;
	      });
	      this.text02 = new _Controller2.default(t02, position.t2, 2);
	      this.mesh.add(this.text02.mesh);
	
	      var t03 = this.textures.filter(function (t, i) {
	        return i >= 6 && i < _this3.textures.length;
	      });
	      this.text03 = new _Controller2.default(t03, position.t3, 2);
	      this.mesh.add(this.text03.mesh);
	
	      this.mesh.position.y = -100 * per;
	      this.cb();
	    }
	  }, {
	    key: 'getPer',
	    value: function getPer() {
	      var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	
	      if (window.innerWidth > 1023) {
	        return point;
	      } else {
	        return point / 1023 * window.innerWidth;
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var _this4 = this;
	
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      var tl = new TimelineMax();
	      tl.add(function (e) {
	        if (index == 1) {
	          _this4.text01.show();
	        }
	        if (index == 2) {
	          _this4.text02.show();
	        }
	        if (index == 3) {
	          _this4.text03.show(.03);
	        }
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this5 = this;
	
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      var tl = new TimelineMax();
	      tl.add(function (e) {
	        if (index == 1) {
	          _this5.text01.hide();
	        }
	        if (index == 2) {
	          _this5.text02.hide();
	        }
	        if (index == 3) {
	          _this5.text03.hide();
	        }
	      });
	    }
	  }, {
	    key: 'setEvent',
	    value: function setEvent() {}
	  }, {
	    key: 'resize',
	    value: function resize() {
	      var per = this.getPer(1);
	      for (var key in this.position) {
	        this.position[key].map(function (e) {
	          e.x *= per;
	          e.y *= per;
	        });
	      }
	      this.text01.resize(this.position.t1);
	      this.text02.resize(this.position.t2);
	      this.text03.resize(this.position.t3);
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(15);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _frag = __webpack_require__(50);
	
	var _frag2 = _interopRequireDefault(_frag);
	
	var _vert = __webpack_require__(51);
	
	var _vert2 = _interopRequireDefault(_vert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Obj = function (_Base) {
	  _inherits(Obj, _Base);
	
	  function Obj(textures, position, kangi_num) {
	    _classCallCheck(this, Obj);
	
	    var _this = _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this));
	    //https://pixijs.io/pixi-filters/tools/demo/
	
	    _this.WIDTH = 1024;
	    _this.size = _this.getPer(100);
	    _this.textures = textures;
	    _this.position = position;
	    _this.kangi_num = kangi_num;
	    _this.ready();
	
	    _this.isUEv = true;
	
	    _this.setEvents();
	    return _this;
	  }
	
	  _createClass(Obj, [{
	    key: 'ready',
	    value: function ready() {
	      var _this2 = this;
	
	      this.mesh = new THREE.Group();
	      // console.log(window.g.cameraPosi);
	      this.textures.map(function (t, i) {
	        var geometry = new THREE.PlaneBufferGeometry(_this2.size, _this2.size);
	        var material = new THREE.ShaderMaterial({
	          vertexShader: _vert2.default,
	          fragmentShader: _frag2.default,
	          uniforms: {
	            time: { type: 'f', value: 3 },
	            amount: { type: 'f', value: 0.02 },
	            angle: { type: 'v2', value: new THREE.Vector3(Math.random() * Math.PI * 2, 0, .5 + Math.random() * 0.5) },
	            uTex: { type: 't', value: t },
	            is_show: { type: 'f', value: 0.0 },
	            threshold: { type: 'f', value: 0.0 },
	            w: { type: 'f', value: .2 }
	          },
	          transparent: true,
	          depthTest: true
	          // opacity:0
	
	        });
	        var mesh = new THREE.Mesh(geometry, material);
	        _this2.mesh.position.z = 10 - i;
	        var wrap = new THREE.Group();
	        wrap.add(mesh);
	        _this2.mesh.add(mesh);
	      });
	    }
	  }, {
	    key: 'getPer',
	    value: function getPer() {
	      var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	
	      if (window.innerWidth > 1023) {
	        return point;
	      } else {
	        return point / 1023 * window.innerWidth;
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.mesh.children.map(function (e, i) {
	
	        e.material.uniforms.angle.value.y += gb.up.delta;
	      });
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .04;
	
	      var tl = new TimelineMax();
	      this.setPosition();
	      var p = this.position;
	      var per = this.getPer(1);
	      this.mesh.children.map(function (e, i) {
	        // if(i>2)return ;
	        var d = i * val;
	        // console.log(i);
	        tl.set(e.material.uniforms.is_show, {
	          value: 1
	        }, d)
	
	        // rgb shift 収束
	        .add(function () {
	
	          var d1 = Math.random() * 0.035;
	          var d2 = d1 + Math.random() * 0.035;
	          var d3 = d2 + Math.random() * 0.035;
	          var d4 = d3 + Math.random() * 0.035;
	
	          var s1 = 0.01 + Math.random() * 0.02;
	          var s2 = 0.01 + Math.random() * 0.02;
	          var s3 = 0.01 + Math.random() * 0.02;
	          var s4 = 0.015;
	
	          TweenMax.set(e.material.uniforms.amount, { value: s1, delay: d1 });
	          TweenMax.set(e.material.uniforms.amount, { value: s2, delay: d2 });
	          TweenMax.set(e.material.uniforms.amount, { value: s3, delay: d3 });
	          TweenMax.set(e.material.uniforms.amount, { value: s4, delay: d4 });
	
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d1 });
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d2 });
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d3 });
	          TweenMax.set(e.material.uniforms.angle.value, { x: 2.5, delay: d4 });
	        }, d + .05)
	
	        // pos
	        .to(e.position, .8, {
	          x: '+=' + -100 * per,
	          ease: Expo.easeOut
	        }, d).to(e.parent.position, 20.0, {
	          x: '+=' + -400 * per,
	          ease: Power0.easeNone
	        }, .15)
	
	        //flash
	        .add(function () {
	
	          var tl2 = new TimelineMax();
	          for (var j = 0; j < 4; j++) {
	            if (j % 2 == 0) {
	              tl2.set(e.material.uniforms.is_show, {
	                value: 0
	              }, d + j * .02 + j * .01);
	            } else {
	              tl2.set(e.material.uniforms.is_show, {
	                value: 1
	              }, d + j * .02 + j * .01);
	            }
	          }
	        }, 0.0);
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var per = this.getPer(1);
	      this.mesh.children.map(function (e, i) {
	
	        var d = i * .03;
	        var tl = new TimelineMax();
	
	        tl
	        // x
	        .to(e.position, .4, {
	          x: '+=' + -100 * per,
	          ease: Expo.easeOut
	        }, d)
	
	        // rgb shift 大きく
	        .add(function () {
	
	          var d1 = Math.random() * 0.035;
	          var d2 = d1 + Math.random() * 0.035;
	          var d3 = d2 + Math.random() * 0.035;
	          var d4 = d3 + Math.random() * 0.035;
	
	          var s1 = 0.03 + Math.random() * 0.02;
	          var s2 = 0.03 + Math.random() * 0.02;
	          var s3 = 0.03 + Math.random() * 0.02;
	          var s4 = 0.03 + Math.random() * 0.02;
	
	          TweenMax.set(e.material.uniforms.amount, { value: s1, delay: d1 });
	          TweenMax.set(e.material.uniforms.amount, { value: s2, delay: d2 });
	          TweenMax.set(e.material.uniforms.amount, { value: s3, delay: d3 });
	          TweenMax.set(e.material.uniforms.amount, { value: s4, delay: d4 });
	
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d1 });
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d2 });
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d3 });
	          TweenMax.set(e.material.uniforms.angle.value, { x: Math.random() * Math.PI * 2, delay: d4 });
	        }, d)
	
	        // flash
	        .add(function () {
	
	          var tl2 = new TimelineMax();
	          for (var j = 0; j < 3; j++) {
	            if (j % 2 == 0) {
	              tl2.set(e.material.uniforms.is_show, {
	                value: 0
	              }, j * .01);
	            } else {
	              tl2.set(e.material.uniforms.is_show, {
	                value: 1
	              }, j * .01);
	            }
	          }
	        }, d);
	      });
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition() {
	      var _this3 = this;
	
	      // const num = 2;
	      var p = this.position;
	      this.mesh.children.map(function (e, i) {
	        if (!p[i]) return;
	        TweenMax.set(e.position, {
	          x: p[i].x + _this3.getPer(120),
	          y: p[i].y
	          // z:
	        });
	        TweenMax.set(e.scale, {
	          x: p[i].s,
	          y: p[i].s
	          // z:p[i].s,
	        });
	      });
	    }
	  }, {
	    key: 'resize',
	    value: function resize(position) {
	      var _this4 = this;
	
	      this.position = position;
	      this.size = this.getPer(100);
	      this.mesh.children.map(function (mesh) {
	        mesh.geometry.dispose();
	        mesh.geometry = new THREE.PlaneBufferGeometry(_this4.size, _this4.size);
	      });
	      this.setPosition();
	    }
	  }]);
	
	  return Obj;
	}(_Base3.default);
	
	exports.default = Obj;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 angle;\nuniform float amount;\nvarying vec2 vUv;\nuniform float time;\nuniform sampler2D uTex;\nuniform float is_show;\n// uniform float is_kangi;\nuniform float threshold;\nuniform float w;\n//\n\n\nvoid main(void){\n\n  // vec2 ruv = vUv + vec2(time * .03,0.0);\n  // vec2 guv = vUv + vec2(time * .04,0.0);\n  // vec2 buv = vUv + vec2(time * .05,0.0);\n\n  // vec4 r = texture2D( uTex,ruv);\n  // vec4 g = texture2D( uTex,guv);\n  // vec4 b = texture2D( uTex,buv);\n\n  // gl_FragColor = vec4(r.r,g.g,b.b, (r.a+g.a+b.a) * is_show);\n\n  float val1 = sin(angle.y * 0.003 * angle.z);\n  float val2 = cos(angle.y * 0.003 * angle.z);\n\n  vec2 offset = amount * vec2( cos(angle.x + val1), sin(angle.x + val2));\n\n  vec4 r = texture2D( uTex,vUv + offset);\n  vec4 g = texture2D( uTex,vUv);\n  vec4 b = texture2D( uTex,vUv - offset);\n\n  gl_FragColor = vec4(r.r,g.g,b.b, (r.a+g.a+b.a) * is_show);\n\n\n}\n\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\n\n\nvoid main() {\n  vUv = uv;\n  vec4 projected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  gl_Position = projected;\n}\n"

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _frag = __webpack_require__(53);
	
	var _frag2 = _interopRequireDefault(_frag);
	
	var _vert = __webpack_require__(54);
	
	var _vert2 = _interopRequireDefault(_vert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(cb) {
	    _classCallCheck(this, Controller);
	
	    this.cb = cb;
	    this.imgpath = '/assets-2020/img/main.png';
	    this.loader = new THREE.TextureLoader();
	    this.size = 1200;
	    this.setup();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      var _this = this;
	
	      this.loader.load(this.imgpath, function (t) {
	        _this.textures = t;
	        _this.ready();
	      });
	    }
	  }, {
	    key: 'getPer',
	    value: function getPer() {
	      var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	
	      if (window.innerWidth > 1023) {
	        return point;
	      } else {
	        return point / 1023 * window.innerWidth;
	      }
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      // console.log(this.textures);
	      var per = this.textures.image.naturalHeight / this.textures.image.naturalWidth;
	      var w_per = this.getPer(1);
	      var geometry = new THREE.PlaneBufferGeometry(this.size * w_per, per * this.size * w_per);
	      var material = new THREE.ShaderMaterial({
	        vertexShader: _vert2.default,
	        fragmentShader: _frag2.default,
	        uniforms: {
	          time: { type: 'f', value: 5.0 },
	          resolution: { type: 'v2', value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
	          uTex: { type: 't', value: this.textures },
	          w: { type: 'f', value: .1 },
	          threshold: { type: 'f', value: 1.0 },
	          is_show: { type: 'f', value: 0.0 },
	          blocksize: { type: 'f', value: 100.0 }
	        },
	        transparent: true,
	        depthTest: false
	      });
	      this.mesh = new THREE.Mesh(geometry, material);
	      this.wrap = new THREE.Group();
	
	      this.mesh.material.uniforms.time.value = 5.0;
	
	      this.wrap.add(this.mesh);
	      this.cb();
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	      var time = 1;
	      this.wrap.scale.set(1.15, 1.15, 1.15);
	      this.mesh.scale.set(1.5, 1.5, 1.5);
	      this.mesh.position.z = 0.0;
	      tl.set(this.mesh.material.uniforms.is_show, {
	        value: 1
	      }).set(this.mesh.material.uniforms.time, {
	        value: 5.0
	      })
	      // rgb shift
	      .to(this.mesh.material.uniforms.time, 2.0, {
	        value: 1.0,
	        ease: Expo.easeOut
	      }, 0.0)
	      // scale
	      .to(this.mesh.scale, .9, {
	        x: 1.0,
	        y: 1.0,
	        z: 1.0,
	        ease: Expo.easeOut
	      }, 0.0).to(this.wrap.scale, 5.0, {
	        x: 1.0,
	        y: 1.0,
	        z: 1.0,
	        ease: Power0.easeNone
	      }, 0.0).add(function (e) {
	        _this2.timeline(time);
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      var tl = new TimelineMax();
	      // tl.to(this.mesh.position,time,{
	      //   z:-500,
	      //   ease:Power4.easeOut
	      // })
	      tl.to(this.mesh.position, .5, {
	        z: -window.g.camera.far,
	        ease: Power4.easeInOut
	      });
	    }
	  }, {
	    key: 'rgbShiftHide',
	    value: function rgbShiftHide() {
	      var tl = new TimelineMax();
	      tl.to(this.mesh.material.uniforms.time, .2, {
	        value: 0.0,
	        ease: Power4.easeInOut
	      });
	    }
	  }, {
	    key: 'setEvent',
	    value: function setEvent() {}
	  }, {
	    key: 'resize',
	    value: function resize() {
	      var per = this.textures.image.naturalHeight / this.textures.image.naturalWidth;
	      var w_per = this.getPer(1);
	      this.mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
	      var geometry = new THREE.PlaneBufferGeometry(this.size * w_per, per * this.size * w_per);
	      this.mesh.geometry.dispose();
	      this.mesh.geometry = geometry;
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline(time) {
	      var tl = new TimelineMax();
	      tl.to(this.mesh.material.uniforms.time, time * 2, {
	        value: 6.0,
	        ease: Power4.easeInOut
	      });
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 imageResolution;\nuniform vec2 resolution;\nvarying vec2 vUv;\nuniform float time;\nuniform sampler2D uTex;\nuniform float is_show;\nuniform float threshold;\nuniform float w;\nuniform float blocksize;\n\n\nvoid main(void){\n  vec2 ruv = vUv + vec2(time * .001 ,0.0);\n  vec2 guv = vUv + vec2(time * .002 ,0.0);\n  vec2 buv = vUv + vec2(time * .003 ,0.0);\n\n  vec4 r = texture2D( uTex,ruv);\n  vec4 g = texture2D( uTex,guv);\n  vec4 b = texture2D( uTex,buv);\n  vec4 n = texture2D( uTex,vUv);\n  float a = clamp(r.a+g.a+b.a+n.a,0.0,1.0);\n  // if((r.a) + (g.a) + (b.a) >= 2.0){\n  //    r.a *= .0;\n  //    g.a *= .0;\n  //    b.a *= .0;\n  // }\n  // vec4 c = (1.0-r.a) + (1.0-g.a) + (1.0-b.a) > 2.0 ? vec4((1.0-r.a)*.5,(1.0-g.a)*.5,(1.0-b.a)*.5,a * is_show) : vec4((1.0-r.a),(1.0-g.a),(1.0-b.a),a * is_show);\n  vec4 c = vec4((1.0 - r.a),(1.0 - g.a),(1.0 - b.a),a * is_show);\n  gl_FragColor = c;\n}\n"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\n\n\nvoid main() {\n  vUv = uv;\n  vec4 projected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  gl_Position = projected;\n}\n"

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map