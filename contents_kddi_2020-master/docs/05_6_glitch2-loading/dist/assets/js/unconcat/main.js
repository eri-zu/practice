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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // setting
	
	
	// Util
	
	
	// model
	// import LoadMgr from "View/UI/_Loading/Basic/Controller.es6";
	
	// events
	
	
	// view
	
	
	var _Conf = __webpack_require__(5);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(6);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(15);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	var _Debugger = __webpack_require__(16);
	
	var _Debugger2 = _interopRequireDefault(_Debugger);
	
	var _Controller = __webpack_require__(17);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _UpdateMgr = __webpack_require__(23);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(24);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _View = __webpack_require__(25);
	
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
	    key: "onImmediate",
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
	    key: "onReady",
	    value: function onReady() {
	      //Loading
	      // gb.loading = new LoadMgr();
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	      // Layout, UI, Effects
	      gb.v = new _View2.default();
	    }
	  }, {
	    key: "onLoad",
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
	    key: "setEvents",
	    value: function setEvents() {
	      var _this = this;
	
	      //
	      // $(window).on('load', this.onLoad.bind(this));
	      window.addEventListener("load", function (e) {
	        _this.onLoad();
	      });
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
	  this.RELEASE = true;
	  // this.RELEASE = false;
	
	  //組み込み用関数
	  this.BUILT_IN = false;
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Array = __webpack_require__(7);
	
	var _Array2 = _interopRequireDefault(_Array);
	
	var _Color = __webpack_require__(8);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _DateClass = __webpack_require__(9);
	
	var _DateClass2 = _interopRequireDefault(_DateClass);
	
	var _Device = __webpack_require__(10);
	
	var _Device2 = _interopRequireDefault(_Device);
	
	var _Math = __webpack_require__(11);
	
	var _Math2 = _interopRequireDefault(_Math);
	
	var _Other = __webpack_require__(12);
	
	var _Other2 = _interopRequireDefault(_Other);
	
	var _String = __webpack_require__(13);
	
	var _String2 = _interopRequireDefault(_String);
	
	var _Url = __webpack_require__(14);
	
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
/* 8 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 16 */
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
/* 17 */
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
	
	var _UrlParamMgr = __webpack_require__(18);
	
	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);
	
	var _JudgeEnvironment = __webpack_require__(21);
	
	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);
	
	var _Profiler = __webpack_require__(22);
	
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(19);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Keys = __webpack_require__(20);
	
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
/* 19 */
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
	
	    this.isUEv = true; // update
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(19);
	
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(19);
	
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
/* 23 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(19);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(26);
	
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
	
	    _this.name = "ViewCommon";
	
	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse
	
	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }
	
	  _createClass(ViewCommon, [{
	    key: "setup",
	    value: function setup() {
	      new _Controller2.default();
	    }
	  }, {
	    key: "onLoad",
	    value: function onLoad() {
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	    }
	  }, {
	    key: "onLoadingEnd",
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
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "onLoadAll",
	    value: function onLoadAll() {
	      // new Responsive();
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), "setEvents", this).call(this);
	      //
	      // $(window).on('load', this.onLoad.bind(this));
	      // $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
	      // $(window).on('loadAll', this.onLoadAll.bind(this));
	    }
	  }]);
	
	  return ViewCommon;
	}(_Base3.default);
	
	exports.default = ViewCommon;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(19);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(27);
	
	var m = _interopRequireWildcard(_index);
	
	var _Controller = __webpack_require__(28);
	
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
	    key: "setup",
	    value: function setup() {
	      var h = 0;
	      if (window.innerWidth > 1024) h = window.innerHeight;else if (gb.conf.BUILT_IN) h = $(".mv").height();else h = window.innerHeight;
	      $(".section01").height(h);
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {
	      if (!this.mv) return;
	      this.mv.render();
	    }
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this2 = this;
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);
	      $(window).on("loadEnd", function (e) {
	        _this2.mv = new _Controller2.default();
	      });
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	//loader
	
	
	var _Controller = __webpack_require__(29);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(32);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	var _Controller5 = __webpack_require__(39);
	
	var _Controller6 = _interopRequireDefault(_Controller5);
	
	var _Controller7 = __webpack_require__(42);
	
	var _Controller8 = _interopRequireDefault(_Controller7);
	
	var _Controller9 = __webpack_require__(46);
	
	var _Controller10 = _interopRequireDefault(_Controller9);
	
	var _Controller11 = __webpack_require__(49);
	
	var _Controller12 = _interopRequireDefault(_Controller11);
	
	var _Controller13 = __webpack_require__(51);
	
	var _Controller14 = _interopRequireDefault(_Controller13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UAParser = __webpack_require__(52);
	
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.setup();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      this.setupController = new _Controller2.default($(".canvas"), false);
	      this.is_showed = false;
	      this.cz = this.setupController.base.camera.position.z;
	      window.g = {
	        cameraPosi: this.setupController.base.camera.position,
	        camera: this.setupController.base.camera
	      };
	      this.objs = [new _Controller4.default(3), new _Controller4.default(6), new _Controller4.default(4)];
	      this.rand_Obj = [new _Controller6.default("tri"), new _Controller6.default("hexagon"), new _Controller6.default("rect")];
	      var split = [];
	      var maint = void 0;
	      window.gb.textures.map(function (tex) {
	        if (tex.name == "splitText") split.push(tex.texture);else maint = tex.texture;
	      });
	      this.text = new _Controller8.default(split);
	      this.maintext = new _Controller10.default(maint);
	      this.ready();
	    }
	  }, {
	    key: "ready",
	    value: function ready() {
	      var _this = this;
	
	      this.objs.map(function (e) {
	        e.mesh.position.z = 0;
	        _this.setupController.base.scene.add(e.mesh);
	      });
	      this.maintext.mesh.position.z = 10;
	      this.rand_Obj.map(function (obj) {
	        _this.setupController.base.scene.add(obj.mesh);
	      });
	
	      this.setupController.base.scene.add(this.text.mesh);
	      this.setupController.base.scene.add(this.maintext.wrap);
	      this.c = 0;
	
	      this.postEffect = new _Controller12.default();
	      this.tpp = new TPP(this.setupController.base.renderer, this.postEffect.pp_params);
	      this.setupController.base.tpp = this.tpp;
	
	      this.show();
	    }
	  }, {
	    key: "setEvent",
	    value: function setEvent() {
	      var _this2 = this;
	
	      //throttle
	      var result = UAParser();
	      var w = window.innerWidth;
	      $(window).on("resize", $.throttle(500, function (e) {
	        if (result.device.type == "mobile") {
	          if (w != window.innerWidth) {
	            _this2.resize();
	            w = window.innerWidth;
	          }
	        } else {
	          _this2.resize();
	        }
	      }));
	    }
	  }, {
	    key: "resize",
	    value: function resize() {
	      // console.log('resize',window.innerHeight);
	      var h = 0;
	      if (window.innerWidth > 1024) h = window.innerHeight;else if (gb.conf.BUILT_IN) h = $(".mv").height();else h = window.innerHeight;
	      $(".section01").height(h);
	      this.setupController.base.onWindowResize();
	      this.cz = this.setupController.base.camera.position.z;
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
	    key: "show",
	    value: function show() {
	      var _this3 = this;
	
	      // this.rand_Obj[2].show()
	
	      var tl = new TimelineMax({ delay: 0.0 });
	      // this.objs[0].show()
	      // tl.add(e=>{
	      //   this.objs[2].show()
	      // })
	      tl
	      // show
	      .add(function (e) {
	        _this3.postEffect.glitchShow(0.3);
	
	        _this3.text.show(1);
	      }, 0.0).add(function (e) {
	        _this3.postEffect.glitchShow(0.3);
	
	        _this3.text.show(2);
	      }, 0.4).add(function (e) {
	        _this3.postEffect.glitchShow(0.3);
	
	        _this3.text.show(3);
	      }, 0.7)
	
	      // hide
	      .add(function (e) {
	        _this3.postEffect.glitchShow(0.4);
	
	        _this3.text.hide(1);
	      }, 1.0 + 0.2).add(function (e) {
	        _this3.text.hide(2);
	      }, 1.2 + 0.2).add(function (e) {
	        _this3.text.hide(3);
	      }, 1.3 + 0.2).add(function (e) {
	        _this3.timeline();
	      }, 1.2 + 0.2);
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {
	      var _this4 = this;
	
	      var tl = new TimelineMax();
	
	      tl
	      // rand_Obj
	      .add(function (e) {
	        _this4.rand_Obj[_this4.c].show();
	      }, 0)
	
	      // mainText
	      .add(function (e) {
	        _this4.maintext.show(_this4.postEffect);
	        _this4.showContents();
	      }, 0.8 + 0.1)
	
	      // obj
	      .add(function (e) {
	        _this4.objs[_this4.c].show();
	      }, 0.9 + 0.1).add(function (e) {
	        _this4.objs[_this4.c].show2();
	      }, 2.7 + 0.3 + 2.0)
	
	      // cameramove
	      .add(function (e) {
	        _this4.cameraMove();
	      }, 3.2 + 0.3 + 2.0)
	
	      // main text
	      .add(function (e) {
	        _this4.maintext.hide(_this4.postEffect);
	      }, 5.9 + 0.0 + 2.0)
	      // loop
	      .add(function (e) {
	        ++_this4.c;
	        if (_this4.c == _this4.objs.length) {
	          _this4.c = 0;
	        }
	        _this4.objs.map(function (e) {
	          e.mesh.position.z = 0;
	        });
	        _this4.setupController.base.camera.position.z = _this4.cz;
	        _this4.timeline();
	      }, 6.0 + 0.0 + 2.0);
	    }
	  }, {
	    key: "showContents",
	    value: function showContents() {
	      if (gb.conf.BUILT_IN && !this.is_showed) {
	        this.is_showed = true;
	        // const tl = new TimelineMax();
	        // tl.to('.blk_header',.8,{
	        //   opacity:1,
	        //   y:$('.blk_header').height(),
	        //   ease:Power2.easeInOut
	        // }, 0)
	        // .to('.mv',.8,{
	        //   opacity:1,
	        //   y:0,
	        //   ease:Power2.easeInOut
	        // }, 0)
	
	        $("body").addClass("openingDone");
	      }
	    }
	  }, {
	    key: "cameraMove",
	    value: function cameraMove() {
	      var tl = new TimelineMax();
	      tl.to(this.setupController.base.camera.position, 1.5, {
	        z: this.setupController.base.camera.position.z * 1.5,
	        ease: Expo.easeInOut
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      //post effectをかけるかどうか
	      this.setupController.base.render(true);
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import ImgController from './Img/Controller.es6';
	
	
	var _Controller = __webpack_require__(30);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
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
	
	      this.base = new _Controller2.default(this.$dom, this.is_autoRender);
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _statsJs = __webpack_require__(31);
	
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
	      this.scene.background = new THREE.Color(0xffffff);
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
	        alpha: false
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
	      var is_postEffect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      // this.stats.begin();
	      if (is_postEffect) {
	        // console.log(this.scene,this.camera);
	        if (this.tpp) this.tpp.render(this.scene, this.camera);else this.renderer.render(this.scene, this.camera);
	      } else {
	        this.renderer.render(this.scene, this.camera);
	      }
	
	      if (this.is_autoRender) {
	        requestAnimationFrame(this.render.bind(this));
	      }
	    }
	  }]);
	
	  return ClassName;
	}();
	
	exports.default = ClassName;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Stats=t()}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _frag = __webpack_require__(33);
	
	var _frag2 = _interopRequireDefault(_frag);
	
	var _vert = __webpack_require__(34);
	
	var _vert2 = _interopRequireDefault(_vert);
	
	var _Controller = __webpack_require__(35);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _getTriangle = __webpack_require__(36);
	
	var _getTriangle2 = _interopRequireDefault(_getTriangle);
	
	var _getRect = __webpack_require__(37);
	
	var _getRect2 = _interopRequireDefault(_getRect);
	
	var _getHexagon = __webpack_require__(38);
	
	var _getHexagon2 = _interopRequireDefault(_getHexagon);
	
	var _index = __webpack_require__(27);
	
	var math = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    var segment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
	
	    _classCallCheck(this, Controller);
	
	    var per = this.getPer(1);
	    this.r = 70 * per;
	    this.SEGMENT = segment;
	    var r2 = Math.PI * .5 - Math.PI / segment;
	    this.naisetsu = this.r * 2 * Math.cos(r2);
	    this.tri_height = this.r + this.r * Math.sin(r2);
	    this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 20;
	    this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
	    this.NUM = this.X_NUM * this.Y_NUM;
	    this.colors = [new THREE.Color(0x3afffe), new THREE.Color(0x1ce681), new THREE.Color(0xfd49d7)];
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
	        return point * .4 + point * .6 / 1023 * window.innerWidth;
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
	          resolution: { type: 'v2', value: new THREE.Vector2(window.innerWidth * 0.7 * (Math.random() - .5), window.innerHeight * 0.7 * (Math.random() - .5)) },
	          // resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth * 0,window.innerHeight * 0)},
	          diagonal: { type: 'f', value: Math.sqrt(Math.pow(window.innerWidth, 2.0) + Math.pow(window.innerHeight, 2.0)) * 1.5 },
	          s_time: { type: 'f', value: 0 },
	          s_time_toSmall: { type: 'f', value: 1.0 },
	          tri_height: { type: "f", value: this.tri_height },
	          rgb: { type: 'v3', value: color },
	          z_time: { type: "f", value: 0 },
	          is_rand: { type: 'f', value: 0 }
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
	
	      // const center = new THREE.Vector2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
	      var center = new THREE.Vector2(.5 * window.innerWidth, .5 * window.innerHeight);
	      var diagonal = Math.sqrt(Math.pow(window.innerWidth, 2.0) + Math.pow(window.innerHeight, 2.0)) * 3.0;
	
	      for (var i = 0; i < ids.length / position.count; i++) {
	        // for (var i = 0; i < 10; i++) {
	        var r = Math.random() * 1000 + 10;
	        var r3 = .5 + Math.random() * .5;
	
	        // random
	        var r2 = Math.random() * .6;
	
	        for (var j = 0; j < position.count; j++) {
	
	          // var x = m[i * position.count + j * 2 + 0] + diff[i * position.count + j * 2 + 0]
	          // var y = m[i * position.count + j * 2 + 1] + diff[i * position.count + j * 2 + 1]
	          // var pos = {x:x,y:y};
	
	          // if (this.SEGMENT == 3) console.log(pos);
	
	          // let r2 = math.dist(center, pos);
	          // r2 = math.map(r2, 0.0, 1.0, 0.0, diagonal);
	          // if (this.SEGMENT == 3) console.log(r2);
	
	          rand_Scale.push(r, r2, r3);
	        }
	      }
	
	      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(p), 3));
	      geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(u), 2));
	      geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n), 3));
	      geometry.setAttribute('margin', new THREE.BufferAttribute(new Float32Array(m), 2));
	      geometry.setAttribute('diff', new THREE.BufferAttribute(new Float32Array(diff), 2));
	      geometry.setAttribute('ids', new THREE.BufferAttribute(new Float32Array(ids), 1));
	      geometry.setAttribute('scale', new THREE.BufferAttribute(new Float32Array(s), 1));
	      geometry.setAttribute('is_smalls', new THREE.BufferAttribute(new Float32Array(is_smalls), 1));
	      geometry.setAttribute('rand_Scale', new THREE.BufferAttribute(new Float32Array(rand_Scale), 3));
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
	
	      this.mesh.children[0].material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth * 0.7 * (Math.random() - .5), window.innerHeight * 0.7 * (Math.random() - .5));
	      console.log(this.mesh.children[0].material.uniforms.resolution.value);
	
	      var tl = new TimelineMax();
	
	      tl.set(this.mesh.children[0].material.uniforms.s_time, { value: 0 }).set(this.mesh.children[0].material.uniforms.s_time_toSmall, { value: 1 }).set(this.mesh.children[0].material.uniforms.z_time, { value: 0 }).set(this.mesh.children[0].material.uniforms.is_rand, { value: 0 })
	      // 拡大する
	      .to(this.mesh.children[0].material.uniforms.s_time, 1.7, {
	        value: 1.0,
	        ease: Power0.easeNone
	      }, 0.0);
	    }
	
	    // splash shape
	
	  }, {
	    key: 'show2',
	    value: function show2() {
	
	      var tl = new TimelineMax();
	      tl
	      // 縮む
	      .to(this.mesh.children[0].material.uniforms.s_time_toSmall, .7, {
	        value: .8,
	        ease: Expo.easeOut
	      }, 1.4 - .25).to(this.mesh.children[0].material.uniforms.is_rand, .7, {
	        value: 1.0,
	        ease: Expo.easeOut
	      }, 1.4 - .25)
	
	      // //大きさを顕著に
	      // .to(this.mesh.children[0].material.uniforms.s_time, .5,{
	      //   value: 10.0,
	      //   ease: Power0.easeNone
	      // }, 1.6)
	
	      // はじける
	      .to(this.mesh.children[0].material.uniforms.z_time, 1.2, {
	        value: 1.5,
	        ease: Expo.easeOut
	      }, 1.4 - .25)
	
	      // カメラの向こうに消えていく
	      .to(this.mesh.children[0].material.uniforms.z_time, 1.4, {
	        value: 120.0,
	        ease: Power4.easeInOut
	      }, 2.4 - .25)
	
	      // line
	      .add(function (e) {
	        // this.line.show();
	      }, 2.9 - .25);
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
	          var g = _this.setGeometry();
	          mesh.geometry.dispose();
	          mesh.geometry = g;
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
/* 33 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec3 color;\nvoid main(void) {\n  gl_FragColor = vec4(color,1.0);\n}\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nfloat map_2_0(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_2_0(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_2_0(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_2_0(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\n\n\n// #pragma glslify: ease = require(glsl-easings/exponential-in-out)\n// #pragma glslify: ease = require(glsl-easings/exponential-in)\nfloat exponentialOut_1_1(float t) {\n  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\n\n\n\n// #pragma glslify: ease = require(glsl-easings/quintic-in-out)\n// #pragma glslify: ease = require(glsl-easings/quartic-in-out)\n// #pragma glslify: ease = require(glsl-easings/quadratic-in-out)\n\n#define PI 3.141592653589793;\n\nattribute float scale;\nattribute float is_smalls;\nattribute vec2 diff;\nattribute vec2 margin;\nattribute float ids;\nattribute vec3 rand_Scale;\n\n// varying vec2 vUv;\nvarying vec3 color;\n\nuniform float time;\nuniform float s_time;\nuniform float s_time_toSmall;\nuniform float tri_height;\nuniform float z_time;\nuniform float diagonal;\nuniform vec2 resolution;\nuniform vec3 rgb;\nuniform float is_rand;\n\nfloat scaleCalc(vec2 pos){\n\n\n  // random\n  // float delay = rand_Scale.y;\n\n  // center\n  float delay = distance(resolution.xy, pos.xy);\n  delay = map_2_0(delay, 0.0, diagonal, 0.0, 1.0);\n  float strength = 1.0;\n  delay *= strength;\n\n  float val = s_time - delay;\n  val = clamp(val, 0.0, 1.0);\n  val = map_2_0(val, 0.0, 1.0 - delay, 0.0, 1.0);\n  // val = step(.5, val) * s_time_toSmall;\n  // val = ease(smoothstep(.6, 1.0, val)) * s_time_toSmall;\n  val = smoothstep(.01, 1.0, exponentialOut_1_1(val)) * s_time_toSmall;\n\n\n\n\n  return val > .99 ? 1.0 : val;\n}\n\nfloat margin_y(float s){\n  return is_smalls == 0.0 ? 0.0 : s*(tri_height / 3.0);\n}\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 z_move(vec3 p){\n  // vec2 center = vec2(margin.x + diff.x,margin.y - margin_y(s) + diff.y);\n  // float theta = 0.0;\n  // mat2 cssc = mat2(cos(theta),-sin(theta),sin(theta),cos(theta));\n  // vec2 r = (p.xy - center) * cssc + center;\n  return vec3(p.xy,rand_Scale.x * z_time * 1.5);\n}\n\n\n\nvoid main() {\n\n  color = rgb;\n\n  float x2 = position.x + margin.x + diff.x;\n  float y2 = position.y + margin.y + diff.y;\n  vec2 pos2 = vec2(x2, y2);\n\n  float s = is_rand > 0.0 ? scaleCalc(pos2) * rand_Scale.z : scaleCalc(pos2);\n  float x = position.x * s + margin.x + diff.x;\n  float y = position.y * s + margin.y + diff.y;\n  float z = 1.0;\n  vec3 p = z_move(vec3(x,y,z));\n  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);\n\n  gl_Position = projected;\n}\n"

/***/ }),
/* 35 */
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
/* 36 */
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
	      var _dy = is_small ? 0 : param.r * .5;
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
/* 37 */
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
	      var _dy = 0;
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
/* 38 */
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
	  var base_y = window.innerHeight * .5 + param.r * 2;
	
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
	      var _dy = 0;
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // const MeshLine = require( 'three.meshline' );
	
	
	var _GetBasePosition = __webpack_require__(40);
	
	var basePosi = _interopRequireWildcard(_GetBasePosition);
	
	var _ShowAnimation = __webpack_require__(41);
	
	var showAnimation = _interopRequireWildcard(_ShowAnimation);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rand_Obj = function () {
	  function Rand_Obj(key) {
	    _classCallCheck(this, Rand_Obj);
	
	    this.key = key;
	
	    var per = this.getPer(1);
	    this.r = 100 * per;
	    this.naisetsu = this.r * 3 / Math.sqrt(3);
	    this.tri_height = this.r * 1.5;
	    this.setPosition(per);
	    if (this.key == 'tri') {
	      this.LINE_WIDTH = 10;
	      this.NUM = 3;
	      this.SEGMENT = 3;
	      this.COLOR = new THREE.Color(0x3afffe);
	      this.rotation = [Math.PI * .5, Math.PI * (30 / 180), Math.PI * .5];
	      this.scales = [1.2, 0.7, 4];
	    } else if (this.key == 'rect') {
	      this.LINE_WIDTH = 9;
	      this.SEGMENT = 4;
	      this.NUM = 2;
	      this.COLOR = new THREE.Color(0x1ce681);
	      this.rotation = [Math.PI * .5, Math.PI * 1.5];
	      this.scales = [2.2, 2.2];
	    } else if (this.key == 'hexagon') {
	      this.LINE_WIDTH = 7;
	      this.SEGMENT = 6;
	      this.NUM = 5;
	      this.COLOR = new THREE.Color(0xfd49d7);
	      this.rotation = [Math.PI * .5, Math.PI * 1.5, Math.PI * .5, Math.PI * 1.5, Math.PI * .5];
	      // this.scales = [1.7,.2,.2,.2,4];
	      this.scales = [2.0, .35, .2, .2, .2];
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
	
	        var _lineObj = this.lineObj(posi, j),
	            _lineObj2 = _slicedToArray(_lineObj, 3),
	            mesh = _lineObj2[0],
	            lineposi = _lineObj2[1],
	            geo = _lineObj2[2];
	
	        mesh.position.set(this.positions[j].x, this.positions[j].y, this.positions[j].z);
	        this.mesh.add(mesh);
	
	        var _lineObj3 = this.lineObj2(posi, j),
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
	    value: function lineObj(posi, index) {
	      var _this = this;
	
	      var geometry = new THREE.Geometry();
	      if (index == 2 && this.key == 'tri') {
	        var _posi = Array.from(posi);
	        var p1 = _posi[1];
	        var p2 = _posi[2];
	        posi[1] = p2;
	        posi[2] = p1;
	      }
	
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
	        p = [posi[2], posi[0]];
	      }
	
	      var v1 = new THREE.Vector3(p[0].x, p[0].y, 0);
	      var v2 = new THREE.Vector3(p[1].x, p[1].y, 0);
	      var _v2 = new THREE.Vector3(p[1].x, p[1].y, 0);
	      var _v1 = new THREE.Vector3(p[0].x, p[0].y, 0);
	      var _v3 = _v2.sub(_v1).distanceTo(_v1);
	      var scalar = _v3 > 100 ? 10 : 100;
	      if (index == 2 && this.key == 'tri') {
	        // scalar *= -1;
	      }
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
	      this.setPosition(per);
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
	
	        var _lineObj5 = _this3.lineObj(posi, index),
	            _lineObj6 = _slicedToArray(_lineObj5, 3),
	            m = _lineObj6[0],
	            l_posi = _lineObj6[1],
	            geometry = _lineObj6[2];
	
	        var _lineObj7 = _this3.lineObj2(l_posi, index),
	            _lineObj8 = _slicedToArray(_lineObj7, 2),
	            m2 = _lineObj8[0],
	            geometry2 = _lineObj8[1];
	
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
	  }, {
	    key: 'setPosition',
	    value: function setPosition(per) {
	      if (this.key == 'tri') {
	        this.positions = [{ x: -300 * per, y: 0, z: 0 }, { x: -300 * per + this.naisetsu * 1.1, y: this.r * 1.6 * per, z: 0 }, { x: 400 * per, y: -this.r * 1.5 * per, z: 0 }];
	      } else if (this.key == 'rect') {
	        this.positions = [{ x: -350 * per, y: 0, z: 0 }, { x: 350 * per, y: 0, z: 0 }];
	      } else if (this.key == 'hexagon') {
	        this.positions = [{ x: -200 * per, y: this.r * -0.4, z: 0 }, { x: 100 * per, y: this.r * 2.0 * per, z: 0 }, { x: 375 * per, y: 100 * 1.8 * per, z: 0 }, { x: 350 * per, y: 100 * 1.5 * per, z: 0 }, { x: 375 * per, y: 100 * 1.2 * per, z: 0 }];
	      }
	    }
	  }]);
	
	  return Rand_Obj;
	}();
	
	exports.default = Rand_Obj;

/***/ }),
/* 40 */
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
/* 41 */
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
	    smallShow(objs[1]);
	  }, .1)
	
	  // 左側の三角形
	  .to(objs[0].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Power4.easeOut
	  }, .6 - 0.3).to(objs[0].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Power4.easeOut
	  }, .8 - 0.3).add(function (e) {
	    moveShow(objs[0]);
	  }, .6 - 0.3)
	
	  // 右側の三角形
	  .to(objs[2].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Power4.easeOut
	  }, .7 - 0.3).to(objs[2].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Power4.easeOut
	  }, .9 - 0.3).add(function (e) {
	    zoomShow(objs[2]);
	  }, .7);
	}
	
	function rect(mesh) {
	  var tl = new TimelineMax();
	  var objs = createobjs(mesh);
	  tl
	  // 左
	  .to(objs[0].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .0).to(objs[0].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .1).add(function (e) {
	    rotateShow(objs[0]);
	  })
	
	  // 右
	  .to(objs[1].l.material.uniforms.dashOffset, .2, {
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
	  tl
	
	  // 右側3つ
	  .to(objs[2].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, 0.0).to(objs[2].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, 0.05).add(function (e) {
	    smallShow(objs[2]);
	  }, 0.1).to(objs[3].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, 0.1).to(objs[3].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, 0.15).add(function (e) {
	    smallShow(objs[3]);
	  }, 0.2).to(objs[4].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, 0.15).to(objs[4].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, 0.2).add(function (e) {
	    smallShow(objs[4]);
	  }, 0.25)
	
	  // 真ん中
	  .to(objs[1].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .3 + .0).to(objs[1].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .3 + .1).add(function (e) {
	    smallShow(objs[1]);
	  }, .3 + .2)
	
	  // // 左大きい    
	  .to(objs[0].l.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeOut
	  }, .8 + .0).to(objs[0].l.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, .8 + .1).add(function (e) {
	    scaleShow(objs[0], true);
	  }, .8);
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
	  var flashnum = 7;
	  tl.set(objs.line.material, {
	    opacity: 1
	  }, 0.0).to(objs.line.material.uniforms.dashOffset, .4, {
	    value: 1,
	    ease: Expo.easeOut
	  }, 0.0).to(objs.line.material.uniforms.dashOffset, .3, {
	    value: 2,
	    ease: Expo.easeOut
	  }, 0.5)
	
	  // flash
	  .add(function () {
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
	  }, 0.2);
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}
	
	function rotateShow(objs) {
	  var tl = new TimelineMax();
	  var flashnum = 11;
	  tl.set(objs.line.material, { opacity: 1 }).set(objs.fill.position, { x: '+=' + 700 })
	
	  // rotate
	  // .to(objs.fill.rotation,.7,{
	  //   z: Math.PI * 2,
	  //   ease:Expo.easeOut
	  // },0)
	
	  // x
	  .to(objs.fill.position, .5, {
	    x: '-=' + 700,
	    ease: Expo.easeOut
	  }, 0)
	
	  // flash
	  .add(function () {
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
	  var flashnum = 7;
	  tl.set(objs.line.material.uniforms.dashOffset, { value: 0 }, 0).to(objs.line.material, .2, {
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
	    x: 2.2,
	    y: 2.2,
	    ease: Expo.easeInOut
	  }, 0).to(objs.fill.scale, .2, {
	    x: 1.2,
	    y: 1.2,
	    ease: Expo.easeInOut
	  }, .2);
	
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}
	
	function smallShow(objs) {
	  var tl = new TimelineMax();
	  var flashnum = 7;
	
	  tl.set(objs.line.material, {
	    opacity: 1
	  }, 0).to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 1,
	    ease: Expo.easeInOut
	  }, .0).to(objs.line.material.uniforms.dashOffset, .2, {
	    value: 2,
	    ease: Expo.easeInOut
	  }, .2).add(function () {
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
	  }, 0.2);
	
	  tl.eventCallback('onComplete', function (e) {
	    reset(objs);
	  });
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Controller = __webpack_require__(43);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(textures) {
	    _classCallCheck(this, Controller);
	
	    this.textures = textures;
	    this.setup();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      this.ready();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      var _this = this;
	
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
	        return i >= 6 && i < _this.textures.length;
	      });
	      this.text03 = new _Controller2.default(t03, position.t3, 2);
	      this.mesh.add(this.text03.mesh);
	
	      this.mesh.position.y = -100 * per;
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
	      var _this2 = this;
	
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      var tl = new TimelineMax();
	      tl.add(function (e) {
	        if (index == 1) {
	          _this2.text01.show();
	        }
	        if (index == 2) {
	          _this2.text02.show();
	        }
	        if (index == 3) {
	          _this2.text03.show(.03);
	        }
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this3 = this;
	
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      var tl = new TimelineMax();
	      tl.add(function (e) {
	        if (index == 1) {
	          _this3.text01.hide();
	        }
	        if (index == 2) {
	          _this3.text02.hide();
	        }
	        if (index == 3) {
	          _this3.text03.hide();
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(19);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _frag = __webpack_require__(44);
	
	var _frag2 = _interopRequireDefault(_frag);
	
	var _vert = __webpack_require__(45);
	
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
	            amount: { type: 'f', value: 0.0 },
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
	
	      // this.mesh.children.map((e,i)=>{
	
	      //   e.material.uniforms.angle.value.y += gb.up.delta;
	
	      // })    
	
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
	
	          var delay = 0;
	
	          // 回数
	          for (var i = 0; i < 5; i++) {
	
	            var dd = 0;
	            if (i > 0) dd = 0.3;
	            delay += dd + Math.random() * .3;
	            var len = Math.floor(3 + Math.random() * 3);
	            var d = delay;
	            var s = 0.01;
	
	            // glitch数
	            for (var j = 0; j < len; j++) {
	
	              var dStren = 0.06;
	              var strength = 0.02;
	              if (Math.random() < .3) dStren = 0.15;
	              if (Math.random() < .4) strength = 0.12;
	              if (Math.random() < .05) strength = 0.15;
	
	              d += 0.02 + Math.random() * dStren;
	              s += (Math.random() - .5) * strength;
	              if (j == len - 1) s = 0.0;
	
	              TweenMax.set(e.material.uniforms.amount, { value: s, delay: d });
	              TweenMax.set(e.material.uniforms.angle.value, { x: (Math.random() - .5) * Math.PI * 2, delay: d });
	            }
	          }
	        }, 0.0)
	        // }, d)
	
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
	          for (var j = 0; j < 5; j++) {
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
/* 44 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 angle;\nuniform float amount;\nvarying vec2 vUv;\nuniform float time;\nuniform sampler2D uTex;\nuniform float is_show;\n// uniform float is_kangi;\nuniform float threshold;\nuniform float w;\n//\n\n\nvoid main(void){\n\n  // vec2 ruv = vUv + vec2(time * .03,0.0);\n  // vec2 guv = vUv + vec2(time * .04,0.0);\n  // vec2 buv = vUv + vec2(time * .05,0.0);\n\n  // vec4 r = texture2D( uTex,ruv);\n  // vec4 g = texture2D( uTex,guv);\n  // vec4 b = texture2D( uTex,buv);\n\n  // gl_FragColor = vec4(r.r,g.g,b.b, (r.a+g.a+b.a) * is_show);\n\n  // slow\n  // float val1 = sin(angle.y * 0.003 * angle.z);\n  // float val2 = cos(angle.y * 0.003 * angle.z);\n  // vec2 offset = amount * vec2( cos(angle.x + val1), sin(angle.x + val2));\n  // papapa\n  float val1 = sin(angle.x);\n  float val2 = cos(angle.x);\n  vec2 offset = amount * vec2( cos(angle.x), sin(angle.x));\n\n  vec4 r = texture2D( uTex,vUv + offset);\n  vec4 g = texture2D( uTex,vUv);\n  vec4 b = texture2D( uTex,vUv - offset);\n\n  float a = clamp(r.a+g.a+b.a,0.0,1.0);\n  vec4 c = vec4((1.0 - r.a),(1.0 - g.a),(1.0 - b.a),a * is_show);\n  gl_FragColor = c;\n\n}\n\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\n\n\nvoid main() {\n  vUv = uv;\n  vec4 projected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  gl_Position = projected;\n}\n"

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _frag = __webpack_require__(47);
	
	var _frag2 = _interopRequireDefault(_frag);
	
	var _vert = __webpack_require__(48);
	
	var _vert2 = _interopRequireDefault(_vert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller(texture) {
	    _classCallCheck(this, Controller);
	
	    this.textures = texture;
	    this.size = 1024;
	    this.setup();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	      this.ready();
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
	          amount: { type: 'f', value: 0.0 },
	          angle: { type: 'v2', value: new THREE.Vector3(Math.random() * Math.PI * 2, 0, .5 + Math.random() * 0.5) },
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
	    }
	  }, {
	    key: 'show',
	    value: function show(p) {
	      var _this = this;
	
	      var tl = new TimelineMax();
	      var time = 1;
	      this.wrap.scale.set(1.15, 1.15, 1.15);
	      this.mesh.scale.set(1.5, 1.5, 1.5);
	      this.mesh.position.z = 0.0;
	      this.mesh.position.y = 10.0;
	
	      tl.add(function () {
	
	        p.glitchShow(0.125, 0.1 + Math.random() * 0.1, 0.2, 70);
	
	        // 回数
	        var delay = 0.2;
	        for (var i = 0; i < 2; i++) {
	
	          var dd = 0.0;
	          delay += dd + Math.random() * .5;
	          if (i == 0) dd = 0;
	          var len = Math.floor(3 + Math.random() * 3);
	          var d = delay;
	          var s = 0.01;
	
	          // glitch数
	          for (var j = 0; j < len; j++) {
	
	            var dStren = 0.06;
	            var strength = 0.02 + 0.03;
	            if (Math.random() < .3) dStren = 0.15;
	            if (Math.random() < .4) strength = 0.05 + 0.03;
	            if (Math.random() < .05) strength = 0.07 + 0.03;
	
	            d += 0.02 + Math.random() * dStren;
	            s += (Math.random() - .5) * strength;
	            if (j == len - 1) s = 0.0;
	
	            TweenMax.set(_this.mesh.material.uniforms.amount, { value: s, delay: d });
	            TweenMax.set(_this.mesh.material.uniforms.angle.value, { x: (Math.random() - .5) * Math.PI * 2, delay: d });
	          }
	        }
	
	        // flash
	        var tl2 = new TimelineMax();
	        for (var j = 0; j < 6; j++) {
	          if (j % 2 == 0) {
	            tl2.set(_this.mesh.material.uniforms.is_show, {
	              value: 0
	            }, j * .02 + j * .01);
	          } else {
	            tl2.set(_this.mesh.material.uniforms.is_show, {
	              value: 1
	            }, j * .02 + j * .01);
	          }
	        }
	      }, 0.0)
	
	      // rgb shift
	      .add(function () {
	
	        TweenMax.killTweensOf(_this.mesh.material.uniforms.amount);
	        TweenMax.killTweensOf(_this.mesh.material.uniforms.angle.value);
	
	        var delay = 0;
	
	        // 回数
	        for (var i = 0; i < 2; i++) {
	
	          var dd = 0;
	          if (i > 0) dd = 2.2;
	          delay += dd + Math.random() * .5;
	          if (i == 2) delay = 5.2;
	          var len = Math.floor(3 + Math.random() * 3);
	          var d = delay;
	          var s = 0.01;
	
	          // effect
	          var tle = new TimelineMax();
	          tle.add(function () {
	            p.glitchShow(.1 + Math.random() * 0.2, 0.02 + Math.random() * 0.03);
	          }, d);
	
	          // glitch数
	          for (var j = 0; j < len; j++) {
	
	            var dStren = 0.06;
	            var strength = 0.02;
	            if (Math.random() < .3) dStren = 0.15;
	            if (Math.random() < .4) strength = 0.05;
	            if (Math.random() < .05) strength = 0.07;
	
	            d += 0.02 + Math.random() * dStren;
	            s += (Math.random() - .5) * strength;
	            if (j == len - 1) s = 0.0;
	
	            TweenMax.set(_this.mesh.material.uniforms.amount, { value: s, delay: d });
	            TweenMax.set(_this.mesh.material.uniforms.angle.value, { x: (Math.random() - .5) * Math.PI * 2, delay: d });
	          }
	        }
	
	        // 最後は、弾けるタイミングに合わせる
	        var tll = new TimelineMax();
	        tll.add(function () {
	
	          // effect
	          p.glitchShowCut(0.125, 0.2 + Math.random() * 0.1, 0.0);
	          p.glitchShow(0.125, 0.2 + Math.random() * 0.1, 0.125);
	
	          var len = Math.floor(4);
	          var d = 0;
	          var s = 0.01;
	          // glitch数
	          for (var j = 0; j < len; j++) {
	
	            var dStren = 0.06;
	            var strength = 0.02 + 0.1;
	            if (Math.random() < .3) dStren = 0.15;
	            if (Math.random() < .4) strength = 0.05 + 0.1;
	            if (Math.random() < .05) strength = 0.07 + 0.1;
	
	            d += 0.02 + Math.random() * dStren;
	            s += (Math.random() - .5) * strength;
	            if (j == len - 1) s = 0.0;
	
	            TweenMax.set(_this.mesh.material.uniforms.amount, { value: s, delay: d });
	            TweenMax.set(_this.mesh.material.uniforms.angle.value, { x: (Math.random() - .5) * Math.PI * 2, delay: d });
	          }
	        }, 5.23);
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
	        ease: Power0.easeNone,
	        onStart: function onStart() {
	
	          // var len = 3;
	          // var d = 0;
	          // var dStren = 1.0 + Math.random() * 1;
	          // var tl = new TimelineMax();
	          // for (var i = 0; i < 5; i++) {
	          //   d += dStren
	          //   tl
	          //     .add(()=>{
	          //       // effect
	          //       p.glitchShow(.1+Math.random()*0.2, 0.01 + Math.random() * 0.02);
	          //     }, d)
	          // }
	
	        }
	
	      }, 0.0)
	
	      // cameraが引くことで小さくなりすぎないように
	      .to(this.mesh.scale, 1.5, {
	        x: 1.4,
	        y: 1.4,
	        z: 1.4,
	        ease: Expo.easeInOut
	      }, 0.0 + 2.6 + 2.0).add(function (e) {
	        _this.timeline(time);
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide(p) {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	      // tl.to(this.mesh.position,time,{
	      //   z:-500,
	      //   ease:Power4.easeOut
	      // })
	      tl
	      // z
	      .to(this.mesh.position, .5, {
	        z: -window.g.camera.far,
	        ease: Power4.easeInOut
	      }, 0.0)
	
	      // flash
	      .add(function () {
	
	        // effect
	        p.glitchShow(1, 0.02 + Math.random() * 0.03);
	
	        var tl2 = new TimelineMax();
	        for (var j = 0; j < 3; j++) {
	          if (j % 2 == 0) {
	            tl2.set(_this2.mesh.material.uniforms.is_show, {
	              value: 0
	            }, j * .02 + j * .01);
	          } else {
	            tl2.set(_this2.mesh.material.uniforms.is_show, {
	              value: 1
	            }, j * .02 + j * .01);
	          }
	        }
	
	        // gtlich
	        var len = Math.floor(3 + Math.random() * 3);
	        var d = 0;
	        var s = 0.01;
	
	        // glitch数
	        for (var j = 0; j < len; j++) {
	
	          var dStren = 0.06;
	          var strength = 0.02;
	          if (Math.random() < .3) dStren = 0.15;
	          if (Math.random() < .4) strength = 0.05;
	          if (Math.random() < .05) strength = 0.07;
	
	          d += 0.02 + Math.random() * dStren;
	          s += (Math.random() - .5) * strength;
	          if (j == len - 1) s = 0.0;
	
	          TweenMax.set(_this2.mesh.material.uniforms.amount, { value: s, delay: d });
	          TweenMax.set(_this2.mesh.material.uniforms.angle.value, { x: (Math.random() - .5) * Math.PI * 2, delay: d });
	        }
	      }, 0.0);
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
/* 47 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 angle;\nuniform float amount;\nvarying vec2 vUv;\nuniform float time;\nuniform sampler2D uTex;\nuniform float is_show;\nuniform float threshold;\nuniform float w;\nuniform float blocksize;\n\n\nvoid main(void){\n\n  float val1 = sin(angle.x);\n  float val2 = cos(angle.x);\n  vec2 offset = amount * vec2( cos(angle.x), sin(angle.x));\n\n  vec4 r = texture2D( uTex,vUv + offset);\n  vec4 g = texture2D( uTex,vUv);\n  vec4 b = texture2D( uTex,vUv - offset);\n\n  float a = clamp(r.a+g.a+b.a,0.0,1.0);\n  vec4 c = vec4((1.0 - r.a),(1.0 - g.a),(1.0 - b.a),a * is_show);\n  gl_FragColor = c;\n\n}\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\n\n\nvoid main() {\n  vUv = uv;\n  vec4 projected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  gl_Position = projected;\n}\n"

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import {DataTexture,RGBFormat,Math as _Math,FloatType} from '../three_setup/modules/three-m.es6';
	
	
	var _glitch = __webpack_require__(50);
	
	var _glitch2 = _interopRequireDefault(_glitch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import {FXAAShader} from './Shader/FXAAShader.js';
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.time = 0;
	    this.init();
	    this.setEvent();
	  }
	
	  _createClass(Controller, [{
	    key: 'init',
	    value: function init() {
	      this.name = '01Controller';
	      this.glitchPass = {
	        fragmentShader: _glitch2.default,
	        uniforms: {
	          resolution: {
	            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
	            type: 'v2'
	          },
	          time: {
	            value: 0.0,
	            type: 'f'
	          },
	          blockSize: {
	            value: 100,
	            type: 'f'
	          },
	          threshold: {
	            value: 0.0,
	            type: 'f'
	          },
	          slideWidth: {
	            value: 0.0,
	            type: 'f'
	          }
	
	        }
	      };
	
	      // FXAAShader.uniforms.resolution.value = new THREE.Vector2(
	      //   1/(window.innerWidth*window.devicePixelRatio),
	      //   1/(window.innerHeight*window.devicePixelRatio)
	      // )
	      // 
	
	
	      // this.pp_params = [FXAAShader,this.glitchPass];
	      this.pp_params = [this.glitchPass];
	    }
	  }, {
	    key: 'glitchShow',
	    value: function glitchShow(dur) {
	      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .025;
	      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var blockSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
	
	
	      var tl = new TimelineMax({ delay: delay });
	      var uniforms = this.glitchPass.uniforms;
	
	      uniforms.blockSize.value = blockSize;
	
	      tl.set(uniforms.slideWidth, {
	        value: val
	      }, 0.0).to(uniforms.time, dur, {
	        value: '+=1'
	      }, 0.0).set(uniforms.threshold, {
	        value: .8
	      }, 0.0).to(uniforms.slideWidth, dur, {
	        value: 0
	      }, 0.0)
	
	      // end
	      .set(uniforms.threshold, {
	        value: 0
	      }).set(uniforms.slideWidth, {
	        value: 0
	      });
	    }
	  }, {
	    key: 'glitchShowCut',
	    value: function glitchShowCut() {
	      var dur = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .025;
	      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	
	      var tl = new TimelineMax({ delay: delay });
	      var uniforms = this.glitchPass.uniforms;
	
	      uniforms.blockSize.value = 10;
	
	      tl.set(uniforms.slideWidth, {
	        value: val
	      }, 0.0).to(uniforms.time, dur, {
	        value: Math.random()
	      }, 0.0).set(uniforms.threshold, {
	        value: .8
	      }, 0.0);
	    }
	  }, {
	    key: 'setEvent',
	    value: function setEvent() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'reset',
	    value: function reset() {}
	  }, {
	    key: 'update',
	    value: function update() {
	      console.log('update');
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 resolution;\n\nuniform float blockSize;\nuniform float threshold;\nuniform float time;\nuniform float slideWidth;\n\nuniform sampler2D backbuffer;\n\nfloat rnd(vec2 n){\n    float a = 0.129898;\n    float b = 0.78233;\n    float c = 437.585453;\n    float dt= dot(n ,vec2(a, b));\n    float sn= mod(dt, 3.14);\n    return fract(sin(sn) * c);\n}\n\nvarying vec2 vUv;\n\n\nvoid main(void){\n  \n  float v_1 = floor((gl_FragCoord.y) / blockSize) * blockSize;\n  float v_2 = floor((gl_FragCoord.y) / blockSize * .5) * blockSize * .5;\n  float v_3 = floor((gl_FragCoord.y) / blockSize * .2) * blockSize * .2;\n  float v_4 = floor((gl_FragCoord.y) / blockSize * .7) * blockSize * .7;\n  float v1 = mix(v_1,v_2,rnd(vec2(time)));\n  float v2 = mix(v_3,v_4,rnd(vec2(time)));\n  // vec2 c = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);\n  // float l = 0.1 / length(c) * ;\n  float n1 = rnd(vec2(mix(v1,v2,rnd(vec2(time))), time * 0.1));\n  float s = step(n1, threshold);\n  float n2 = rnd(vec2(time)) * 2.0 - 1.0;\n  float t = n2 * slideWidth;\n\n  vec4 color = texture2D(backbuffer, vUv + vec2(s * t, 0.0));\n  float c_r = texture2D(backbuffer, vUv + vec2(s * t * 2.0, 0.0)).r;\n  float c_g = texture2D(backbuffer, vUv + vec2(s * t * 1.5, 0.0)).g;\n  float c_b = texture2D(backbuffer, vUv + vec2(s * t * 1.2, 0.0)).b;\n  \n  \n  // gl_FragColor = vec4(c_r,c_g,c_b,color.a);\n  gl_FragColor = color;\n  // gl_FragColor = texture2D(backbuffer,vUv);\n  \n}\n\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ImgController = function () {
	  function ImgController() {
	    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { mag: THREE.LinearFilter, min: THREE.LinearFilter };
	
	    _classCallCheck(this, ImgController);
	
	    this.loader = new THREE.TextureLoader();
	    this.param = param;
	  }
	
	  _createClass(ImgController, [{
	    key: "load",
	    value: function load(path) {
	      var _this = this;
	
	      return new Promise(function (r, reject) {
	        _this.loader.load(path, function (e) {
	          e.magFilter = _this.param.mag;
	          e.minFilter = _this.param.min;
	          r(e);
	        });
	      });
	    }
	  }]);
	
	  return ImgController;
	}();
	
	exports.default = ImgController;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.17
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */
	
	(function (window, undefined) {
	
	    'use strict';
	
	    //////////////
	    // Constants
	    /////////////
	
	
	    var LIBVERSION  = '0.7.17',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded';
	
	
	    ///////////
	    // Helper
	    //////////
	
	
	    var util = {
	        extend : function (regexes, extensions) {
	            var margedRegexes = {};
	            for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                    margedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                    margedRegexes[i] = regexes[i];
	                }
	            }
	            return margedRegexes;
	        },
	        has : function (str1, str2) {
	          if (typeof str1 === "string") {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	          } else {
	            return false;
	          }
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
	        },
	        trim : function (str) {
	          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	        }
	    };
	
	
	    ///////////////
	    // Map helper
	    //////////////
	
	
	    var mapper = {
	
	        rgx : function (ua, arrays) {
	
	            //var result = {},
	            var i = 0, j, k, p, q, matches, match;//, args = arguments;
	
	            /*// construct object barebones
	            for (p = 0; p < args[1].length; p++) {
	                q = args[1][p];
	                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
	            }*/
	
	            // loop through all regexes maps
	            while (i < arrays.length && !matches) {
	
	                var regex = arrays[i],       // even sequence (0,2,4,..)
	                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
	                j = k = 0;
	
	                // try matching uastring with regexes
	                while (j < regex.length && !matches) {
	
	                    matches = regex[j++].exec(ua);
	
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        this[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        this[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                this[q] = match ? match : undefined;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	            // console.log(this);
	            //return this;
	        },
	
	        str : function (str, map) {
	
	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };
	
	
	    ///////////////
	    // String map
	    //////////////
	
	
	    var maps = {
	
	        browser : {
	            oldsafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },
	
	        device : {
	            amazon : {
	                model : {
	                    'Fire Phone' : ['SD', 'KF']
	                }
	            },
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },
	
	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };
	
	
	    //////////////
	    // Regex map
	    /////////////
	
	
	    var regexes = {
	
	        browser : [[
	
	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
	            ], [NAME, VERSION], [
	
	            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
	            ], [[NAME, 'Opera Mini'], VERSION], [
	
	            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [
	
	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
	
	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer
	
	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
	            ], [NAME, VERSION], [
	
	            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
	            ], [[NAME, 'IE'], VERSION], [
	
	            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
	            ], [NAME, VERSION], [
	
	            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [
	
	            /(puffin)\/([\w\.]+)/i                                              // Puffin
	            ], [[NAME, 'Puffin'], VERSION], [
	
	            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
	                                                                                // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [
	
	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [
	
	            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
	            ], [[NAME, 'WeChat'], VERSION], [
	
	            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
	            ], [NAME, VERSION], [
	
	            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
	            ], [NAME, VERSION], [
	
	            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [
	
	            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
	            ], [VERSION, [NAME, 'Facebook']], [
	
	            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
	            ], [VERSION, [NAME, 'Chrome Headless']], [
	
	            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
	            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [
	
	            /((?:oculus|samsung)browser)\/([\w\.]+)/i
	            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser
	
	            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [
	
	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION], [
	
	            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [
	
	            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION], [
	
	            /(coast)\/([\w\.]+)/i                                               // Opera Coast
	            ], [[NAME, 'Opera Coast'], VERSION], [
	
	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [
	
	            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [
	
	            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
	            ], [VERSION, NAME], [
	
	            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
	            ], [[NAME, 'GSA'], VERSION], [
	
	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [
	
	            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [
	
	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla
	
	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]
	
	            /* /////////////////////
	            // Media players BEGIN
	            ////////////////////////
	
	            , [
	
	            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	            /(coremedia) v((\d+)[\w\._]+)/i
	            ], [NAME, VERSION], [
	
	            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	            ], [NAME, VERSION], [
	
	            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	            ], [NAME, VERSION], [
	
	            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
	            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	            ], [NAME, VERSION], [
	            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	            ], [NAME, VERSION], [
	
	            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	            ], [[NAME, 'Flip Player'], VERSION], [
	
	            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	            ], [NAME], [
	
	            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                // Gstreamer
	            ], [NAME, VERSION], [
	
	            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                // Java/urllib/requests/wget/cURL
	            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	            ], [NAME, VERSION], [
	
	            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	            ], [[NAME, /_/g, ' '], VERSION], [
	
	            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                // MPlayer SVN
	            ], [NAME, VERSION], [
	
	            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	            ], [NAME, VERSION], [
	
	            /(mplayer)/i,                                                       // MPlayer (no other info)
	            /(yourmuze)/i,                                                      // YourMuze
	            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	            ], [NAME], [
	
	            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	            ], [NAME, VERSION], [
	
	            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	            ], [NAME, VERSION], [
	
	            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	            ], [NAME, VERSION], [
	
	            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	            /(winamp)\s((\d+)[\w\.-]+)/i,
	            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	            ], [NAME, VERSION], [
	
	            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                // inlight radio
	            ], [NAME], [
	
	            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                // SoundTap/Totem/Stagefright/Streamium
	            ], [NAME, VERSION], [
	
	            /(smp)((\d+)[\d\.]+)/i                                              // SMP
	            ], [NAME, VERSION], [
	
	            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	            /(vlc)\/((\d+)[\w\.-]+)/i,
	            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	            ], [NAME, VERSION], [
	
	            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	            /(windows-media-player)\/((\d+)[\w\.-]+)/i
	            ], [[NAME, /-/g, ' '], VERSION], [
	
	            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                // Windows Media Server
	            ], [VERSION, [NAME, 'Windows']], [
	
	            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	            ], [NAME, VERSION], [
	
	            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	            ], [[NAME, 'rad.io'], VERSION]
	
	            //////////////////////
	            // Media players END
	            ////////////////////*/
	
	        ],
	
	        cpu : [[
	
	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [
	
	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [
	
	            /((?:i[346]|x)86)[;\)]/i                                            // IA32
	            ], [[ARCHITECTURE, 'ia32']], [
	
	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [
	
	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [
	
	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [
	
	            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],
	
	        device : [[
	
	            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [
	
	            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [
	
	            /(apple\s{0,1}tv)/i                                                 // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [
	
	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad)/i,                                                // HP TouchPad
	            /(hp).+(tablet)/i,                                                  // HP Tablet
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
	
	            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
	            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [
	
	            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i                                                    // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                                                                                // Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
	            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [
	
	            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
	            /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	
	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
	
	            /android.+;\s(shield)\sbuild/i                                      // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
	
	            /(playstation\s[34portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [
	
	            /(sprint\s(\w+))/i                                                  // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [
	
	            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
	            /(zte)-(\w+)*/i,                                                    // ZTE
	            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                                                                                // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
	
	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
	
	            /d\/huawei([\w\s-]+)[;\)]/i,
	            /(nexus\s6p)/i                                                      // Huawei
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [
	
	            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	
	            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
	
	                                                                                // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
	            /mot[\s-]?(\w+)*/i,
	            /(XT\d{3,4}) build\//i,
	            /(nexus\s6)/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [
	
	            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
	            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [
	
	            /hbbtv.+maple;(\d+)/i
	            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [
	
	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
	
	            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
	            /((SM-T\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
	            /smart-tv.+(samsung)/i
	            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
	            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
	            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
	            /sec-((sgh\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
	
	            /sie-(\w+)*/i                                                       // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
	
	            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
	            /(nokia)[\s_-]?([\w-]+)*/i
	            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [
	
	            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [
	
	            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
	            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
	            /(lg) netcast\.tv/i                                                 // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	            /(nexus\s[45])/i,                                                   // LG
	            /lg[e;\s\/-]+(\w+)*/i,
	            /android.+lg(\-?[\d\w]+)\s+build/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [
	
	            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
	
	            /linux;.+((jolla));/i                                               // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	
	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
	
	            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	
	            /crkey/i                                                            // Google Chromecast
	            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [
	
	            /android.+;\s(glass)\s\d/i                                          // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [
	
	            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [
	
	            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [
	
	            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,    // Xiaomi Mi
	            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i      // Redmi Phones
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
	            /android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i          // Mi Pad tablets
	            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
	            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
	            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [
	
	            /android.+a000(1)\s+build/i                                         // OnePlus
	            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [
	
	            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
	            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(Venue[\d\s]*)\s+build/i                          // Dell Venue Tablets
	            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
	            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
	            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [
	
	            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
	            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i                        // ZTE K Series Tablet
	            ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
	
	            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
	            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
	
	            /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
	            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i          // Dragon Touch Tablet
	            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(NS-?.+)\s+build/i                                // Insignia Tablets
	            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*((NX|Next)-?.+)\s+build/i                         // NextBook Tablets
	            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
	            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones
	
	            /android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i                     // LvTel Phones
	            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
	
	            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
	            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i             // Le Pan Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
	            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
	            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
	
	            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	
	            /android.+(Gigaset)[\s\-]+(Q.+)\s+build/i                           // Gigaset Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
	            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL], [
	
	            /(android.+)[;\/].+build/i                                          // Generic Android Device
	            ], [MODEL, [VENDOR, 'Generic']]
	
	
	        /*//////////////////////////
	            // TODO: move to string map
	            ////////////////////////////
	
	            /(C6603)/i                                                          // Sony Xperia Z C6603
	            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /(C6903)/i                                                          // Sony Xperia Z 1
	            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	
	            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	
	            /(T3C)/i                                                            // Advan Vandroid T3C
	            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
	
	            /(V972M)/i                                                          // ZTE V972M
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
	
	            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	
	            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
	
	            /////////////
	            // END TODO
	            ///////////*/
	
	        ],
	
	        engine : [[
	
	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [
	
	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [
	
	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],
	
	        os : [[
	
	            // Windows based
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
	            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
	
	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	            /linux;.+(sailfish);/i                                              // Sailfish OS
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [
	            /\((series40);/i                                                    // Series 40
	            ], [NAME], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [
	
	            // Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation
	
	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [
	
	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[
	
	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [
	
	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[
	
	            /(haiku)\s(\w+)/i                                                  // Haiku
	            ], [NAME, VERSION],[
	
	            /cfnetwork\/.+darwin/i,
	            /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i                 // iOS
	            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
	
	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
	            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
	
	            // Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };
	
	
	    /////////////////
	    // Constructor
	    ////////////////
	    /*
	    var Browser = function (name, version) {
	        this[NAME] = name;
	        this[VERSION] = version;
	    };
	    var CPU = function (arch) {
	        this[ARCHITECTURE] = arch;
	    };
	    var Device = function (vendor, model, type) {
	        this[VENDOR] = vendor;
	        this[MODEL] = model;
	        this[TYPE] = type;
	    };
	    var Engine = Browser;
	    var OS = Browser;
	    */
	    var UAParser = function (uastring, extensions) {
	
	        if (typeof uastring === 'object') {
	            extensions = uastring;
	            uastring = undefined;
	        }
	
	        if (!(this instanceof UAParser)) {
	            return new UAParser(uastring, extensions).getResult();
	        }
	
	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
	        //var browser = new Browser();
	        //var cpu = new CPU();
	        //var device = new Device();
	        //var engine = new Engine();
	        //var os = new OS();
	
	        this.getBrowser = function () {
	            var browser = { name: undefined, version: undefined };
	            mapper.rgx.call(browser, ua, rgxmap.browser);
	            browser.major = util.major(browser.version); // deprecated
	            return browser;
	        };
	        this.getCPU = function () {
	            var cpu = { architecture: undefined };
	            mapper.rgx.call(cpu, ua, rgxmap.cpu);
	            return cpu;
	        };
	        this.getDevice = function () {
	            var device = { vendor: undefined, model: undefined, type: undefined };
	            mapper.rgx.call(device, ua, rgxmap.device);
	            return device;
	        };
	        this.getEngine = function () {
	            var engine = { name: undefined, version: undefined };
	            mapper.rgx.call(engine, ua, rgxmap.engine);
	            return engine;
	        };
	        this.getOS = function () {
	            var os = { name: undefined, version: undefined };
	            mapper.rgx.call(os, ua, rgxmap.os);
	            return os;
	        };
	        this.getResult = function () {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            //browser = new Browser();
	            //cpu = new CPU();
	            //device = new Device();
	            //engine = new Engine();
	            //os = new OS();
	            return this;
	        };
	        return this;
	    };
	
	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    //UAParser.Utils = util;
	
	    ///////////
	    // Export
	    //////////
	
	
	    // check js environment
	    if (typeof(exports) !== UNDEF_TYPE) {
	        // nodejs env
	        if (typeof module !== UNDEF_TYPE && module.exports) {
	            exports = module.exports = UAParser;
	        }
	        // TODO: test!!!!!!!!
	        /*
	        if (require && require.main === module && process) {
	            // cli
	            var jsonize = function (arr) {
	                var res = [];
	                for (var i in arr) {
	                    res.push(new UAParser(arr[i]).getResult());
	                }
	                process.stdout.write(JSON.stringify(res, null, 2) + '\n');
	            };
	            if (process.stdin.isTTY) {
	                // via args
	                jsonize(process.argv.slice(2));
	            } else {
	                // via pipe
	                var str = '';
	                process.stdin.on('readable', function() {
	                    var read = process.stdin.read();
	                    if (read !== null) {
	                        str += read;
	                    }
	                });
	                process.stdin.on('end', function () {
	                    jsonize(str.replace(/\n$/, '').split('\n'));
	                });
	            }
	        }
	        */
	        exports.UAParser = UAParser;
	    } else {
	        // requirejs env (optional)
	        if ("function" === FUNC_TYPE && __webpack_require__(53)) {
	            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                return UAParser;
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else if (window) {
	            // browser env
	            window.UAParser = UAParser;
	        }
	    }
	
	    // jQuery/Zepto specific (optional)
	    // Note:
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = window && (window.jQuery || window.Zepto);
	    if (typeof $ !== UNDEF_TYPE) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function () {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }
	
	})(typeof window === 'object' ? window : this);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map