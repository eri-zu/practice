/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/js/src/Common.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/ejs/inc/metaData.json":
/*!**********************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/ejs/inc/metaData.json ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"common_js":{"tit":"JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー","des":"JIM BEAM TAP! とは、飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイトです。 飲みの場を盛り上げる様々なコンテンツを毎月更新予定！","img":"https://jimbeam.fun/assets/resource/img/ogp.png","url":"https://jimbeam.fun/","adress":""},"common":{"tit":"JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー","des":"JIM BEAM TAP! とは、飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイトです。 飲みの場を盛り上げる様々なコンテンツを毎月更新予定！","img":"https://jimbeam.fun/assets/resource/img/ogp.png","keyword":"サントリー, ハイボール, ジムビーム, ジムビームハイボール, ジムビームタップ","fb":{"tit":"【JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー】","des":"飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイト。飲みの場を盛り上げる様々なコンテンツを毎月更新予定！","img":"https://jimbeam.fun/assets/resource/img/ogp.png","url":"https://jimbeam.fun/","siteName":"","type":"website"},"tw":{"img":"https://jimbeam.fun/assets/resource/img/ogp.png","url":"https://jimbeam.fun/about/","siteName":"","creator":"","card":"summary_large_image","hash":"","text":"【JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー】飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイト。飲みの場を盛り上げる様々なコンテンツを毎月更新予定！"},"line":{"tit":"JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー","des":"JIM BEAM TAP! とは、飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイトです。 飲みの場を盛り上げる様々なコンテンツを毎月更新予定！","img":"https://jimbeam.fun/assets/resource/img/ogp.png","url":"https://jimbeam.fun/about/","text":"【JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー】飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイト。飲みの場を盛り上げる様々なコンテンツを毎月更新予定！"},"mail":{"tit":"JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー","des":"JIM BEAM TAP! とは、飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイトです。 飲みの場を盛り上げる様々なコンテンツを毎月更新予定！","adress":""}}}

/***/ }),

/***/ "../../src/js/src/Common.es6":
/*!******************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Common.es6 ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // setting


// Util


// model
// import LoadMgr from 'View/UI/_Loading/Basic/Controller.es6';
// import ResourceMgr from 'Model/Resource/ResourceMgr.es6';

// events

// import ScrollMgr from '_MyLibs/View/Events/EventMgr/ScrollMgr.es6';
// import MouseMgr from '_MyLibs/View/Events/EventMgr/MouseMgr.es6';
// import UpdateList from '_MyLibs/View/Events/EventMgr/UpdateList.es6';
// import ResizeList from '_MyLibs/View/Events/EventMgr/ResizeList.es6';
// import ScrollList from '_MyLibs/View/Events/EventMgr/ScrollList.es6';
// import MouseList from '_MyLibs/View/Events/EventMgr/MouseList.es6';

// view


var _Conf = __webpack_require__(/*! Conf.es6 */ "../../src/js/src/Conf.es6");

var _Conf2 = _interopRequireDefault(_Conf);

var _Util = __webpack_require__(/*! _MyLibs/Util/Util.es6 */ "../../src/js/src/_MyLibs/Util/Util.es6");

var _Util2 = _interopRequireDefault(_Util);

var _Func = __webpack_require__(/*! _MyLibs/Util/Func.es6 */ "../../src/js/src/_MyLibs/Util/Func.es6");

var _Func2 = _interopRequireDefault(_Func);

var _Debugger = __webpack_require__(/*! _MyLibs/Util/Debugger.es6 */ "../../src/js/src/_MyLibs/Util/Debugger.es6");

var _Debugger2 = _interopRequireDefault(_Debugger);

var _Controller = __webpack_require__(/*! Util/Controller.es6 */ "../../src/js/src/Util/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

var _UpdateMgr = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/UpdateMgr.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/UpdateMgr.es6");

var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);

var _ResizeMgr = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/ResizeMgr.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/ResizeMgr.es6");

var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);

var _View_Common = __webpack_require__(/*! View/View_Common.es6 */ "../../src/js/src/View/View_Common.es6");

var _View_Common2 = _interopRequireDefault(_View_Common);

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
      // if (gb.conf.isScrollMgr) gb.s = new ScrollMgr();
      // if (gb.conf.isMouseMgr) gb.m = new MouseMgr();
      // gb.ul = new UpdateList();
      // gb.rl = new ResizeList();
      // gb.sl = new ScrollList();
      // gb.ml = new MouseList();

      // ------------------------------------------------------------
      //  Loading / Model / performance
      // ------------------------------------------------------------
      // gb.lm = new LoadMgr();
      // gb.rm = new ResourceMgr();

      // ------------------------------------------------------------
      //  View
      // ------------------------------------------------------------
      // Layout, UI, Effects
      gb.v = new _View_Common2.default();
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

/***/ "../../src/js/src/Conf.es6":
/*!****************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Conf.es6 ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

  // ------------------------------------------------------------
  //  フラグ関連 
  // ------------------------------------------------------------
  // ログ出力, パラメータ, Stars
  this.LOG = true;
  this.PARAM = true;
  this.Profiler = false;
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

/***/ "../../src/js/src/Controller/HistoryMgr.es6":
/*!*********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Controller/HistoryMgr.es6 ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  HistoryMgr
//
// ------------------------------------------------------------

var HistoryMgr = function () {
  function HistoryMgr() {
    _classCallCheck(this, HistoryMgr);

    this.history = [];
  }

  _createClass(HistoryMgr, [{
    key: "add",
    value: function add(obj) {

      this.history.push(obj);
    }

    /**
     * Return information about the current status
     *
     * @memberOf Barba.HistoryManager
     * @return {Object}
     */

  }, {
    key: "currentStatus",
    value: function currentStatus() {
      return this.history[this.history.length - 1];
    }

    /**
     * Return information about the previous status
     *
     * @memberOf Barba.HistoryManager
     * @return {Object}
     */

  }, {
    key: "prevStatus",
    value: function prevStatus() {
      var history = this.history;

      if (history.length < 2) return null;

      return history[history.length - 2];
    }
  }]);

  return HistoryMgr;
}();

exports.default = HistoryMgr;

/***/ }),

/***/ "../../src/js/src/Controller/PushState.es6":
/*!********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Controller/PushState.es6 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  PushState
//
//--------------------------------------------------

var PushState = function () {
  function PushState(p) {
    _classCallCheck(this, PushState);

    this.cb = function () {};
    this.p = p;

    this.setup();
    this.setEvents();
  }

  _createClass(PushState, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'set',
    value: function set(nextPage) {

      // pushState(state, title, url)
      // state → popstateイベント時にオブジェクト渡せる
      // title → 使われていない
      // url → 積み上げたり、変更するurl

      // 履歴を積み上げる
      window.history.pushState(null, null, nextPage);

      // 現在の履歴を変更する
      // window.history.replaceState(null, null, nextPage);
    }
  }, {
    key: 'onPopState',
    value: function onPopState(e) {

      if (this.p.cnt == 0) return;

      // if (!e.originalEvent.state) return; // 初回アクセス時に再読み込みしてしまう対策

      // var state = e.state;
      // log('path:', gb.u.u.path());
      // log(state, state.name);

      this.cb();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      // popstate ブラウザバック対応
      $(window).on('popstate', function (e) {
        _this.onPopState.call(_this, e);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      // popstate ブラウザバック対応
      $(window).off('popstate');
    }
  }]);

  return PushState;
}();

exports.default = PushState;

/***/ }),

/***/ "../../src/js/src/Controller/Query.es6":
/*!****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Controller/Query.es6 ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Query
//
//--------------------------------------------------

// http://phiary.me/javascript-url-parameter-query-string-parse-stringify/
var Query = function () {
  function Query(p) {
    _classCallCheck(this, Query);

    this.p = p;

    this.setup();
  }

  _createClass(Query, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'parse',
    value: function parse(text, sep, eq, isDecode) {

      text = text || location.search.substr(1);
      sep = sep || '&';
      eq = eq || '=';
      var decode = isDecode ? decodeURIComponent : function (a) {
        return a;
      };
      return text.split(sep).reduce(function (obj, v) {
        var pair = v.split(eq);
        obj[pair[0]] = decode(pair[1]);
        return obj;
      }, {});
    }
  }, {
    key: 'set',
    value: function set(obj) {

      var t = '?' + this.stringify(obj);
      // window.location.search = t; // 更新されてしまう
      this.p.set(t);
    }
  }, {
    key: 'stringify',
    value: function stringify(value, sep, eq, isEncode) {

      sep = sep || '&';
      eq = eq || '=';
      var encode = isEncode ? encodeURIComponent : function (a) {
        return a;
      };
      return Object.keys(value).map(function (key) {
        return key + eq + encode(value[key]);
      }).join(sep);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Query;
}();

exports.default = Query;

/***/ }),

/***/ "../../src/js/src/Controller/Render.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Controller/Render.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
//
//  Render
//
// ------------------------------------------------------------

var _metaData = __webpack_require__(/*! ../../../ejs/inc/metaData.json */ "../../src/ejs/inc/metaData.json");

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
  function Render() {
    _classCallCheck(this, Render);

    this.setup();
    this.setEvents();
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'switchMeta',
    value: function switchMeta(page) {

      var d = _metaData2.default[page];
      // var dc = metaData['common'];

      // $('title').text(d.tit);
      // // $('.metaDes').attr({'content': d.des});
      // $('.metaKey').attr({'content': d.keyword});

      // $('.fbTit').attr({'content': d.tit});
      // $('.fbDes').attr({'content': d.des});
      // $('.fbImg').attr({'content': d.fb.img});
      // $('.fbUrl').attr({'content': d.fb.url});

      // $('.twTit').attr({'content': d.tit});
      // $('.twDes').attr({'content': d.des});
      // $('.twImg').attr({'content': d.tw.img});
      // $('.twUrl').attr({'content': d.tw.url});
    }

    // switchMeta2() {

    //   // jquery-pjaxから借りた
    //   var $newPageHead = jQuery( '<head />' ).html(
    //      jQuery.parseHTML(
    //         newPageRawHTML.match( /<head[^>]*>([\s\S.]*)<\/head>/i )[ 0 ],
    //         document,
    //         true
    //      )
    //   );
    //   // 変更したいタグ(ご自身の環境に合わせて適宜変更してください)
    //   var headTags = [
    //      "link[rel='canonical']",
    //      "link[rel='shortlink']",
    //      "link[rel='alternate']",
    //      "meta[name='description']",
    //      "meta[property^='og']",
    //      "meta[name^='twitter']",
    //      "meta[name='robots']"
    //   ].join( ',' );
    //   jQuery('head').find(headTags).remove(); // タグを削除する
    //   $newPageHead.find(headTags).appendTo('head'); // タグを追加する

    // }

    // // https://qiita.com/resistance_gowy/items/533628e129ff3d2a90df
    // updateSNS() {

    //   twttr.widgets.load();
    //   FB.XFBML.parse();

    //   // twttr.widgets.load($("#detailSns")[0]);
    //   // FB.XFBML.parse($("#detailSns")[0]);

    // }

    // updateGA() {

    //   // Analyticsにヒットを送信(Google Analyticsを導入している場合)
    //   if (typeof ga === 'function') {
    //      ga('send', 'pageview', location.pathname);
    //   }

    // }

    // runScript() {

    //   // 外部ファイルを任意の場所に追加して実行する(オプション)
    //   // 外部ファイルにdocument.write()が書かれていると、それは無視されますので正常に表示されません。
    //   var script = document.createElement('script');
    //   script.src = 'http://example.com/hoge.js';
    //   // document.body.appendChild(script);

    //   // インラインに書いたjsを実行する(オプション)
    //   var temp = document.createElement('div');
    //   temp.innerHTML = newPageRawHTML;
    //   var hoge = temp.querySelector('.hoge script');
    //   if(hoge != null){
    //      eval(hoge.innerHTML);
    //   }

    // }

  }, {
    key: 'log',
    value: function log() {

      // log('path:', gb.u.u.path());
      // log('hash:', this.h.getHash());
      // log('query:', this.q.parse());

      // 現在と過去のurlを確認
      var obj = this.checkURL();
    }
  }, {
    key: 'checkURL',
    value: function checkURL() {

      // 現在と過去のurlを確認
      if (this.hs.currentStatus().query.page) var pagecur = this.hs.currentStatus().query.page;else var pagecur = '/';
      if (this.hs.currentStatus().query.img) var imgcur = this.hs.currentStatus().query.img;else var imgcur = 0;

      var pageprev = null;
      var imgprev = 0;
      if (this.hs.prevStatus()) {
        if (this.hs.prevStatus().query.page) var pageprev = this.hs.prevStatus().query.page;else var pageprev = '/';
        if (this.hs.prevStatus().query.img) var imgprev = this.hs.prevStatus().query.img;else var imgprev = 0;
      }

      log('current', pagecur, imgcur);
      log('prev', pageprev, imgprev);

      return { page: [pagecur, pageprev], img: [imgcur, imgprev] };
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}();

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/Controller/UrlMgr.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Controller/UrlMgr.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
//
//  UrlMgr
//
// ------------------------------------------------------------

var _PushState = __webpack_require__(/*! ./PushState.es6 */ "../../src/js/src/Controller/PushState.es6");

var _PushState2 = _interopRequireDefault(_PushState);

var _Query = __webpack_require__(/*! ./Query.es6 */ "../../src/js/src/Controller/Query.es6");

var _Query2 = _interopRequireDefault(_Query);

var _HistoryMgr = __webpack_require__(/*! ./HistoryMgr.es6 */ "../../src/js/src/Controller/HistoryMgr.es6");

var _HistoryMgr2 = _interopRequireDefault(_HistoryMgr);

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/Controller/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlMgr = function () {
  function UrlMgr() {
    _classCallCheck(this, UrlMgr);

    this.p = new _PushState2.default(this);
    this.q = new _Query2.default(this.p);
    this.hs = new _HistoryMgr2.default();

    this.r = new _Render2.default();

    this.cnt = 0;

    this.setup();
    this.setEvents();
  }

  _createClass(UrlMgr, [{
    key: 'setup',
    value: function setup() {

      // 初回時 add history
      this.hs.add({ path: gb.u.u.path(), query: this.q.parse() });
      // this.log();

      this.p.cb = this.onTransitionByBrowser.bind(this);

      var u = this.q.parse();
      this.r.switchMeta(u.page);
    }
  }, {
    key: 'switchURL',
    value: function switchURL(by, link) {

      this.p.removeEvents(); // ハッシュ追加でpopstateが呼ばれるのを防ぐため、url変更のためにremoveEvents

      switch (by) {
        case 'pushstate':
          this.p.set(link);
          break;
        case 'hash':
          // this.h.switchHash(link);
          break;
        case 'query':
          this.q.set(link);
          break;
      }

      // meta情報の変更
      // this.switchMeta('link');

      // hisotryの積み上げ
      this.hs.add({ path: gb.u.u.path(), query: this.q.parse() });

      this.p.setEvents();

      var obj = this.checkURL();
      // イベント発行
      // $(window).trigger('switchURL', [obj.page[0],obj.page[1],obj.img[0],obj.img[1]]);

      var u = this.q.parse();
      this.r.switchMeta(u.page);

      this.cnt++;
    }
  }, {
    key: 'onTransitionByBrowser',
    value: function onTransitionByBrowser() {

      // this.hs.add(newUrl);

      // add history
      this.hs.add({ path: gb.u.u.path(), query: this.q.parse() });

      // switch url
      // show/hide contents
      var obj = this.checkURL();

      // イベント発行
      $(window).trigger('switchURL', [obj.page[0], obj.page[1], obj.img[0], obj.img[1]]);

      var u = this.q.parse();
      this.r.switchMeta(u.page);
    }
  }, {
    key: 'log',
    value: function log() {

      // log('path:', gb.u.u.path());
      // log('hash:', this.h.getHash());
      // log('query:', this.q.parse());

      // 現在と過去のurlを確認
      var obj = this.checkURL();
    }
  }, {
    key: 'checkURL',
    value: function checkURL() {

      // log(this.hs);

      // 現在と過去のurlを確認
      if (this.hs.currentStatus().query.page) var pagecur = this.hs.currentStatus().query.page;else var pagecur = '/';
      if (this.hs.currentStatus().query.img) var imgcur = this.hs.currentStatus().query.img;else var imgcur = 0;

      var pageprev = null;
      var imgprev = 0;
      if (this.hs.prevStatus()) {
        if (this.hs.prevStatus().query.page) var pageprev = this.hs.prevStatus().query.page;else var pageprev = '/';
        if (this.hs.prevStatus().query.img) var imgprev = this.hs.prevStatus().query.img;else var imgprev = 0;
      }

      // log('current', pagecur, imgcur);
      // log('prev', pageprev, imgprev);

      return { page: [pagecur, pageprev], img: [imgcur, imgprev] };
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;
    }
  }]);

  return UrlMgr;
}();

exports.default = UrlMgr;

/***/ }),

/***/ "../../src/js/src/Model/Url/Keys.es6":
/*!**************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Model/Url/Keys.es6 ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "../../src/js/src/Model/Url/UrlParamMgr.es6":
/*!*********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Model/Url/UrlParamMgr.es6 ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Keys = __webpack_require__(/*! ./Keys.es6 */ "../../src/js/src/Model/Url/Keys.es6");

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

/***/ "../../src/js/src/Util/Array.es6":
/*!**********************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Util/Array.es6 ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "../../src/js/src/Util/Controller.es6":
/*!***************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/Util/Controller.es6 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var _UrlParamMgr = __webpack_require__(/*! Model/Url/UrlParamMgr.es6 */ "../../src/js/src/Model/Url/UrlParamMgr.es6");

var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);

var _JudgeEnvironment = __webpack_require__(/*! _MyLibs/Util/JudgeEnvironment.es6 */ "../../src/js/src/_MyLibs/Util/JudgeEnvironment.es6");

var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);

var _Profiler = __webpack_require__(/*! _MyLibs/Util/Profiler.es6 */ "../../src/js/src/_MyLibs/Util/Profiler.es6");

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

/***/ "../../src/js/src/View/Func/Sns.es6":
/*!*************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/Func/Sns.es6 ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
//
//  SNS
//
// ------------------------------------------------------------

var _metaData = __webpack_require__(/*! ../../../../ejs/inc/metaData.json */ "../../src/ejs/inc/metaData.json");

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

      this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);
      // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);

      return false;
    }
  }, {
    key: 'runLINE',
    value: function runLINE() {

      this.openWindow('http://line.me/R/msg/text/?' + this.line.text + '%0A' + this.line.url);

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

/***/ "../../src/js/src/View/UI/Common/Age/Controller.es6":
/*!*****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Age/Controller.es6 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/View/UI/Common/Age/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

var _Controller = __webpack_require__(/*! ../../Opening/Controller.es6 */ "../../src/js/src/View/UI/Opening/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

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

    _this.name = 'Modal';

    _this.isOpen = false;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // this.append();

      // this.$toggle = $('.toggle_age');
      this.$open = $('.open_age');
      this.$closeOn = $('.close_age_soundOn');
      this.$closeOff = $('.close_age_soundOff');
      this.$contents = $('.age_contents');

      this.r = new _Render2.default(this.$contents);

      this.o = new _Controller2.default();
    }
  }, {
    key: 'toggle',
    value: function toggle() {

      if (this.isOpen) {

        this.close();
      } else {

        this.open();
      };

      this.isOpen = !this.isOpen;
    }
  }, {
    key: 'open',
    value: function open() {

      this.r.show();

      this.isOpen = true;
    }
  }, {
    key: 'close',
    value: function close(isSound) {
      var _this2 = this;

      var tl = new TimelineMax();

      tl.add(function () {

        var $t = $('#age .hidePage');

        $t.each(function (index, el) {

          var ookisa = 100;
          TweenMax.to($(el), .4, {
            x: 20 * 2,
            y: -5 * 2,
            opacity: 0,
            delay: 0.08 * index,
            ease: Expo.easeOut
          });
        });
      }, 0.0).add(function () {

        var $t = $('#age .hideBtn');

        $t.each(function (index, el) {

          var ookisa = 100;
          TweenMax.to($(el), .4, {
            x: ookisa,
            y: ookisa,
            opacity: 0,
            delay: 0.08 * index,
            ease: Expo.easeOut
          });
        });
      }, 0.08).to(this.$contents, .6, {
        x: '100%',
        ease: Expo.easeInOut
      }).add(function () {

        _this2.r.hide();

        _this2.isOpen = false;

        // 音ありか、無しか
        if (isSound) gb.isSound = 'true';else gb.isSound = 'false';
        gb.u.u.setCookie('isSound', isSound, 1 * 24 * 60 * 60 * 1000); //1日

        if (gb.isSound == 'false') gb.sound.off();

        // cookie set
        // gb.u.u.setCookie('agegate', 'true', 5 * 1000); //5秒
        gb.u.u.setCookie('agegate', 'true', 1 * 24 * 60 * 60 * 1000); //1日
      }).add(function () {

        // opening
        _this2.o.start();
      }, '-=.5');
    }
  }, {
    key: 'append',
    value: function append() {

      var $wrap = $('#inner');
      var html = '<div id="age" class="age_contents"><div class="tit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.33 174.79"><title>agegate_text</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M98.09,30.39l-14.91,1.3-3.56-3.22V24.11l3.83-.34v2.42l1.67,1.53,13-1.13Zm-.7-14.83L80.3,17.05V13.23l17.09-1.5Z" /><path d="M122.05,24.54l-3.6,4.07-3.51.3V25l1.57-.13L118.2,23v-7l-2.49-2.25-2.24.2V25.6l-2.58,3.67-5.61.49-3.4-3.69V15.5l4.64-5.09,10.85-.95,4.68,4.26ZM109.83,24V14.17l-1.72.16L105.64,17v7L107,25.62l1.79-.15Z" /><path d="M145.69,13l-1.68.15v6.29l-5.41,7.06-9.68.85V23.44l7.87-.69,3.26-4.32V13.48l-9,.79V20.1l-4,.35V14.61l-1.69.15v-4l1.69-.14V8.46l4-.35v2.15l9-.79V7.32L144,7V9.12L145.69,9Z" /><path d="M168.82,8.76l-3.35.3-3.69,2.58V24.45l-4,.35V14.46l-5.27,3.7-4.39.38v-4l3.32-.29,12.95-9.1,4.41-.39Z" /><path d="M190.56,15.8l-5,.44-8.44-2.84v9.71l-3.92.34v-19l3.92-.35V9.21l9,3,4.44-.39Z" /><path d="M200.91,21.39l-3.83.34L194.16,19V2.25L198,1.91v15l.86.79,2.06-.18Zm13.49-7.65-2.06.18v3.76l-2.85,3-5.37.47-3-2.56V14.2l3-3.23,4.37-.38V6.09l-8,.7V3l8-.7V.34L212.34,0V1.92l2.06-.18V5.57l-2.06.18v4.5l2.06-.18Zm-5.93,2.83V14.26l-2.81.24-.93.9v1.52l.93.78,1.83-.17Z" /><path d="M61.87,70.84,58.61,74.4l-3.89.34v-3.8l2.28-.2,1.07-1.16V67.21l-1.07-1-4.59.4v5.23l-2.63,3.3-5,.44-3.28-3v-5.5l3.32-3.68,3.76-.33V60.56l-6.77.6V57.42l6.77-.59V54.88l3.78-.33v2l2.24-.2V60l-2.24.19v2.54l6.2-.54,3.26,3Zm-13.24-.27V67l-2.38.21-1.1,1.27v2.36l1,1,1.5-.13ZM61.85,60.34l-3.65.31V59.34l-1-.87-1.17.11V54.75l2.85-.25,2.92,2.71Z" /><path d="M70.52,59.44l-.84,3.36-5.05-.94.88-3.34Zm.15-5.26-.83,3.33-5-1,.9-3.32Zm0,10.23-2.28,9.73-3.49-.42,2.29-9.78Zm15.55-10-5,.44v1.94l4.5-.39V72.21L71.22,73.48V57.71l4.43-.39.25-1.56,2.24.21L78,57.11l1-.08V55.09l-8.08.7v-3l15.39-1.34ZM82.94,65.64V63.92l-4,.35V59.93l-1.47.13-.88,5.3-2.22-.16.82-4.94-1.16.1v6.06Zm0,3.92V68L74,68.73v1.61Zm0-7.83V59.58l-1.74.15v2.15Z" /><path d="M95.77,71.15l-3.39.3-2.92-2.71V52l3.82-.34v15l.86.77,1.63-.15Zm13.56-1.34-10.41.91-3-2.79V63.29L99.64,63v2.71l1.2,1.08,8.49-.75Zm-.11-14.46L95.91,56.52v-3.8l13.31-1.17Z" /><path d="M122.09,56.56l-6.11.53V69.77l-3.3.29V49.12l9.41-.82Zm-3.3-4.78v-1l-2.81.25v1Zm0,2.92v-1L116,54v1Zm9.64,10.06-2.58.23,1.88,2.57-2.31,1.65-2-2.94L125,65.06l-2.51.22-1.83,4.26L118,68.61l1.34-3-2.2.19V63.21l3.35-.29.68-1.55-3.62.31V59.17l1.29-.11-.41-1.46,2.56-.81.61,2,2.33-.21.61-2.13,2.56.36-.41,1.53,1.27-.11v2.51l-3.67.32-.65,1.55,4.75-.41Zm4.41,3.53-3.28.29V55.9l-6.11.54V48.18l9.39-.82Zm-3.28-17.46v-1l-2.78.25v1Zm0,2.92v-1l-2.78.25v1Z" /><path d="M156.47,51.06l-3.08.27V66.11l-3.83.33V64.66l-8.87.77-3.14-2.8V57.79l3.14-3.38,8.87-.78v-2l-13.37,1.18V49.1l13.37-1.17V46.05l3.83-.33V47.6l3.08-.27Zm-6.91,9.88V57.35L142.3,58l-1,.92v1.88l1,.8Z" /><path d="M180.08,60l-3.8,4.14L163,65.27l-2.79-2.49V58.73l2.79-3,5-.44,2.78,2.52v3.08l3.76-.33L176,58.91v-4.1l-1.49-1.36-7.79.68.91-5-7.81.68V46.06L172.09,45l-.88,5,5.07-.44,3.8,3.47Zm-12.88,1.2V59.08l-.88-.76-2,.18-.84.91v1.31l.73.71Z" /><path d="M203.63,62.1l-6,.52V59.34l2.24-.19V46.86l-5.79.5-.75,2.51,3.06-1.28,3.48,8.63-3.1,1.38-3.48-8.52-2.63,9-3.48-.72,3-10.63-3.17.28V63.55l-3.69.32V44.72L191.3,44l.7-2.42,3.57.69-.4,1.39,8.46-.74Z" /><path d="M228.71,50.58l-1.13,3.09L226,53.19v6.68l-16.93,1.48V54.74l-1.43.74-1.15-2.89L217,47.4l.92,2.36.82-2.15Zm-.56-6-3.31.29V43.18l-14.51,1.27v1.76L207,46.5V41.84l8.71-.76V39.77l3.71-.33v1.31l8.72-.76Zm-12.61,2.26-7.38,3.58-.95-2.34,7.33-3.4Zm8.17,5.6L217.6,50.6l.07-.16-6.18,3.09Zm-1.22,5V55.36l-9.85.86v2.06ZM228,46.29l-.92,2.51-7.38-2.3,1-2.33Z" /><path d="M251.57,49.3l-4.64.41.59,2.44-3.8.33L243.11,50l-5.75.51L235.89,52V54l1.24,1,13.56-1.18V57.6L235.5,58.93,232,56V50.47l3.84-3.53V44.2l-4.61.41v-3.8l4.61-.41V38.5l4-.35v1.91l11.07-1v3.8l-11.07,1v2.67l11.75-1Z" /><path d="M88.52,95.69l-1.35,3.24L82.8,97.39v2.1l-10.75.94V98.21l-4.19,2.39-1.36-3,10-5.61,1.35,2.51,1-2.1Zm-.61,6.14-3.19,3.22,2.2-.19v7.78l-18.74,1.64V106.5L81,105.37l-.36-.3,1.54-1.52-14.53,1.27v-2.9l17.86-1.56.54-.52Zm-4.52,8.32V108l-11.68,1v2.15Zm-2-13.26-4-1.38.22-.5L73,97.63Z" /><path d="M110.67,107.26l-3.1,3.42-4.79.42-3.15-2.85V102l-1.06-.93-2.65.23L95,111.78l-4,.35,1.72-20.55,4.07-.35-.54,6.06,4.21-.36,2.94,2.68v6.65l.88.86L106,107l.88-1V96.44l3.8-.34Z" /><path d="M132.14,108.53l-11.09,1-4.52-4.56V96.63l1.87-1.88-4.64.4V91.33L129,90v3.82l-5.68.5L120.49,97v6.25L123,105.5l9.12-.8Zm2.24-17.44-4.36.38V88.32l4.36-.38Zm0,4.27-4.36.39V92.58l4.36-.39Z" /><path d="M146.81,107.25l-5.43.47-3.49-3.23V88.83l3.83-.33v14.08l1.4,1.28,3.69-.33Zm10-2.87-3.82.33V92.76l-1.4-1.32-3.49.3V88l5.21-.46,3.5,3.27Z" /><path d="M180.71,99.23l-6.05.53v2.72L172,105l-8.83.78-2.64-2.1V100l2.64-2.59,7.63-.67V95l-9.3.81V92.45l9.3-.81V89.78l-9.3.81V87.24l9.3-.81V84.76l3.89-.34v1.67l5.12-.45V89l-5.12.45V91.3l5.12-.45V94.2l-5.12.45v1.78l6.05-.52Zm-9.94,2.23V99.74l-5.68.5-.75.76v1.07l.75.63,4.91-.43Z" /><path d="M203.82,87.48l-3.08.27v14.78l-3.83.33v-1.79l-8.87.78-3.14-2.8V94.2L188,90.83l8.87-.78v-2l-13.37,1.17V85.52l13.37-1.17V82.47l3.83-.34V84l3.08-.27Zm-6.91,9.88v-3.6l-7.26.64-1,.92V97.2l1,.8Z" /><path d="M215.64,98.64l-2.9,3.15-4.14.37-2.92-2.65V95.42l2.92-3.18,4.14-.36,2.9,2.69Zm-2.51-.8v-2l-1.45-1.32-2,.17-1.45,1.58v2l1.45,1.34,2-.18Z" /><path d="M20.69,169.82l-3.42,3.76-3.64.32v-3.78l2-.18,1.22-1.37V166.3l-1.24-1.16-.18,0-6.27,9.13-5.73.5L0,171.63v-5.37l3.44-3.78,3.08-.27v-2.74l-5.37.47v-3.83l5.37-.47v-1.51l3.76-.33v1.51l9.25-.81v3.83l-9.25.81v2.74l2.58-.23v-1.4l3.62-.32v1.41l.74-.07,3.47,3.18Zm-11.21-2-3,.26v-2.13l-1.45.13-1.24,1.35v2.31l1.24,1.14,2.42-.22Zm1.59-2.27-.79.07v1.07Z" /><path d="M36.65,156.92l-7.74.68-1,14.24-3.8.33L25,157.94l-1.43.13v-3.69l1.68-.15.11-1.75,3.92-.35-.12,1.76,7.47-.66Zm7.2,7.91L42.2,165v4l-2.6,2.65-7,.61-2.71-2.57v-4.21l2.71-3.16,5.73-.5V160l3.85-.34v1.79l1.65-.14Zm-5.5,2.54v-2.06l-3.85.33-.86.92v1.26l.86.74,3-.26ZM44,158.3l-3.64.32V157l-1-.87-1.18.1v-3.82l2.85-.25L44,154.88Z" /><path d="M67.48,154.52l-14.76,1.29-1,14.75-3.8.34.95-14.75-1.7.14v-3.78l1.95-.17.11-2,3.83-.34L53,152l14.53-1.27Zm-.43,14.7-9.73.86-3.06-2.75v-3.69l3.8-.33v2.08l1,.93,7.94-.69Zm0-9.07-12.7,1.11v-3.6l12.7-1.11Z" /><path d="M77.58,168.3l-3.82.34-2.92-2.71V149.16l3.82-.34v15l.86.79,2.06-.18Zm13.49-7.65-2.06.18v3.76l-2.85,3-5.37.47-3-2.56v-4.35l3-3.23,4.37-.38V153l-8,.7v-3.83l8-.7v-1.92l3.87-.34v1.92l2.06-.18v3.83l-2.06.18v4.5l2.06-.18Zm-5.93,2.83v-2.31l-2.81.24-.92.9v1.52l.92.77,1.84-.16Z" /><path d="M109.78,153.63,100,161.54l9.71-.85v3.58l-15.14,1.32V162l11.2-9.42V151l-1.06-1-5.36.47-1.09,1.2v1.93l-4,.35v-3.74l3.06-3.34,9.39-.82,3.06,2.81Z" /><path d="M128.65,158.85l-3.71,4.09-8.44.74-3.72-3.41v-11l3.72-4.11,8.39-.73,3.76,3.42Zm-3.87-1.42v-7.52l-1.65-1.55-4.82.42-1.66,1.84v7.54l1.66,1.51,4.82-.42Z" /><path d="M153,154.75l-2,2.65,1.45,3.86-3,1.3-.81-2.15-1.18,1.53-2.06-1.59,2.17-2.81-1.78-4.74-10.39.91v2.83l-1.16,7.19-3-.21.95-6.72v-5.63l12.59-1.11-.46-1.22L131.5,150v-2.63l2.36-.2v-3.62l3.73-.33v3.62l2.72-.24v-4.64l3.71-.32v1l8.21-.72v2.51l-8.21.72v1.09l8.8-.77v2.62l-1.22.11.43,1.23.79-.07v2.83l-3.69.32.8,2,1-1.29Zm-14.31,3.65-1.33,4.53-2.11-.54,1.38-4.46Zm5.84-1.89-2.76.24v6.32l-2.87.25V157l-2.74.23v-2.69l8.37-.73Zm.91,5-2.11.89L142,158.07l2.06-.79Zm4.23-11.87-.43-1.23-1.63.15.47,1.22Z" /><path d="M166.25,155.34l-9.55,6.58-1.84-3.32,1.72-1.19V140.52l3.74-.32v14.64l3.89-2.7Zm3.1-8.9-3.19,2.73-3.87-5.07,3.14-2.63Zm7.51,11-3.14,2.74-3.24-4.2-1.61,4.67-3.44-.86,7.22-20.75,3.42.81-4.84,14,1.67-1.41Z" /><path d="M200.66,157.67l-21.07,1.84V156l7.58-.66V137.82l3.83-.33v5.91l8.17-.72v3.6L191,147v8l9.66-.85Z" /><path d="M221.39,155.72l-11.09,1-4.53-4.56v-8.31l1.88-1.88-4.64.4v-3.82l15.24-1.33V141l-5.69.5-2.82,2.65v6.24l2.53,2.29,9.12-.8Zm2.24-17.44-4.37.38v-3.15l4.37-.38Zm0,4.27-4.37.39v-3.17l4.37-.38Z" /><path d="M247.07,138.69,244,139v14.78l-3.82.34v-1.79l-8.87.78-3.15-2.81v-4.84L231.3,142l8.87-.77v-2l-13.38,1.17v-3.74l13.38-1.17v-1.88l3.82-.33v1.88l3.08-.27Zm-6.9,9.89V145l-7.27.63-1,.93v1.88l1,.79Z" /><path d="M266.06,148.82l-3,3.26-5.18.45v-3.74l3.23-.28,1.11-1.23v-7.49l-1.2-1.12-4.46.39-1,13.67-3.78.33.95-13.66-2.35.2v-3.87l2.62-.23.2-3,3.85-.33-.2,3,6.18-.54,3,2.92Zm4.66-6.18-3.64.32V132.73l3.64-.32Z" /><path d="M290.33,138.85l-3.39,3.8-2.38.21v2.56l-3.57.31v-6.16l4.2-.36,1.45-1.51v-2.83l-1.45-1.32-4.68.41-1.43,1.57V137l-3.73.33v-3.08l3.42-3.78,8.15-.71,3.41,3.16Zm-5.77,11.37-3.57.31V147l3.57-.31Z" /></g></g></svg></div><div class="text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.75 47.63"><title>subtext</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M11.58,24l-3.46.3v1.56L6.58,27.33l-5.06.44L0,26.57V24.45L1.52,23l4.37-.38v-1L.56,22V20.11l5.33-.46V18.58l-5.33.47V17.13l5.33-.47v-1l2.23-.19v1l2.93-.26v1.92l-2.93.26v1.06l2.93-.26v1.92l-2.93.26v1l3.46-.31ZM5.89,25.28v-1l-3.26.28L2.2,25v.61l.43.37,2.82-.25Z" /><path d="M24.87,17.32l-8.46.74-.56,8.46-2.18.19.55-8.45-1,.08V16.17l1.11-.09L14.43,15l2.19-.2-.08,1.13,8.33-.73Zm-.25,8.43L19,26.24l-1.75-1.57V22.55l2.18-.19v1.19l.6.54,4.55-.4Zm0-5.2-7.27.64V19.12l7.27-.63Z" /><path d="M30.9,24.31,29,25.55,26.7,21.22,28.56,20Z" /><path d="M46.86,23.8l-8.54.75-2-1.84V20.2L38.47,20V21.4l1,.88,7.43-.65Zm-.4-8.49-9.79.85V14l9.79-.86Z" /><path d="M60.65,20.45l-2.07,2.33-2,.17V20.68l.9-.07,1-1.07v-4L57,14.21l-1.28.12v6.73l-1.48,2.1L51,23.44l-1.95-2.11V15.27l2.66-2.92L58,11.81l2.69,2.44Zm-7-.29V14.51l-1,.08-1.42,1.54v4l.79.94,1-.09Z" /><path d="M74.24,13.82l-1,.09v3.6l-3.1,4L64.63,22V19.81l4.52-.39L71,16.94V14.1l-5.16.46V17.9l-2.27.2V14.75l-1,.09v-2.3l1-.08V11.23l2.27-.2v1.23L71,11.81V10.58l2.27-.2v1.23l1-.08Z" /><path d="M87.56,11.4l-1.92.17-2.12,1.48v7.34l-2.28.2V14.66l-3,2.12L75.7,17V14.73l1.91-.17L85,9.35l2.53-.22Z" /><path d="M100.07,15.43l-2.84.24L92.4,14.05v5.56l-2.25.2V8.9l2.25-.19v2.94l5.13,1.73,2.54-.22Z" /><path d="M106.06,18.62l-2.19.2-1.68-1.56V7.65l2.2-.19V16l.49.45,1.18-.1Zm7.73-4.38-1.18.1V16.5L111,18.19l-3.07.27L106.16,17V14.5l1.73-1.85,2.5-.21V9.85l-4.58.41V8.06l4.58-.4V6.56l2.22-.19v1.1l1.18-.1V9.56l-1.18.1v2.58l1.18-.1Zm-3.4,1.62V14.54l-1.61.14-.53.51v.87l.53.45,1-.1Z" /><path d="M127.79,10.17l-12.24,1.07V9.48l2.27-.2L117.6,8l-1.42.12V6.38L120.49,6V5.39l2.19-.19v.61l4.48-.39V7.18l-1.38.12-.22,1.3,2.23-.19ZM127,16.9l-10.6.93v-6l10.6-.92Zm-2.22-3.54v-.75l-6.16.53v.76Zm0,2.24v-.78l-6.16.54v.78Zm-1.08-8.11-4,.34.22,1.27,3.53-.31Z" /><path d="M141.69,8.78,129.47,9.85V8.65l12.22-1.07Zm0,6.81-12.22,1.06V15.58l5-.44v-.43l-4.26.37V14l4.26-.37v-.42l-4.5.4V10.23l11.13-1v3.41l-4.5.4v.41l4.26-.37v1.05l-4.26.37V15l5.05-.44ZM141,7.23l-10.9.95V4.74l10.9-1Zm-6.52,3.87v-.43l-2.47.22v.43Zm0,1.27V12l-2.47.21v.43ZM139,5.25V4.82l-6.85.6v.43Zm0,1.28V6.12l-6.85.6v.41Zm.11,4.17v-.43l-2.47.22v.43Zm0,1.27v-.43l-2.47.22v.43Z" /><path d="M155,9.63l-2.66.24.33,1.39-2.17.19-.35-1.39-3.3.29-.84.81v1.18l.71.56,7.77-.68v2.17l-8.7.76-2-1.71V10.3l2.2-2V6.71l-2.64.23V4.77L146,4.53V3.44l2.27-.19V4.33l6.35-.55V6l-6.35.55V8L155,7.46Z" /><path d="M168.66,13.23l-12.08,1v-2l4.35-.38v-10l2.19-.19V5.05l4.68-.41V6.7l-4.68.41V11.7l5.54-.48Z" /><path d="M174.49,12.64l-2.29.2-1.69-1.54V1.68l2.19-.2V10l.5.45,1.29-.12ZM182.22,3l-1.31.12v7.25l-1.68,1.83-2.5.22V10.16l1.5-.13.48-.55v-5l-4.6.4V2.68L178,2.34V.64l1.79-.15V3.16l.63-.06V.43l1.8-.15Z" /><path d="M195.75,2.19l-5.93.52-1.95,2V7.72l1.83,1.39,4.93-.43v2.2l-5.82.51-3.14-2.57V4L186.78,3l-2.67.23V1l11.64-1Z" /><path d="M50,44.89l-1.86,2-2.23.2V45l1.31-.11.61-.67V42.81l-.61-.55-2.64.23v3l-1.5,1.9-2.84.25-1.88-1.72V42.76l1.9-2.11,2.16-.19V39l-3.88.33V37.2l3.88-.34V35.75l2.16-.19v1.12l1.29-.12V38.7l-1.29.12v1.45L48.14,40,50,41.69Zm-7.58-.15V42.68l-1.36.11-.64.73v1.35l.58.56.86-.07ZM50,38.87l-2.09.19V38.3l-.54-.49-.68.06v-2.2l1.64-.14L50,37.08Z" /><path d="M54.69,40.07l-2.32,1.31-.68-1.5L54,38.57Zm0-4.08-.61,1.61-2.34-.79.63-1.62Zm9.4,8.62-.92,1.55-3.67-2,.58-1-1.09.1v2.93l-2.06.18V44l-4.17,3.09-.94-1.38,2.71-2-2.69.23V42.2l5.09-.44v-.6l-2.07.18V35l2-.17.48-1,1.53.23-.28.65,2.49-.22V40.8L59,41v.6l5.09-.45v1.71l-2.82.25Zm-5-7.43v-1l-2.35.21v1Zm0,2.33v-1l-2.35.21v1Zm5.09-.73-.66,1.62-2.33-.9.67-1.62Zm0-3.05-2.32,1.18-.6-1.5,2.31-1.2Z" /><path d="M76.69,41.82l-2.61,2.85-5.18.45-2.62-2.38v-9l2.21-.19v8l1.35,1.22,3.29-.29,1.33-1.45V39.41l2.23-.2Z" /><path d="M90.5,38.31l-.64.06v3.16L88.1,43.44l-2.45.21V41.51L87,41.4l.69-.73V38.56l-2.88.25v3.35l-1.55,1.7-2.78.25-1.54-1.4v-4L80.46,37l2.18-.19v-2L79.79,35V32.86l5-.44v4.19l2.88-.25V32.58l2.19-.19v3.77l.64,0Zm-7.86,3V39l-1.39.12-.41.48v1.89l.46.46.89-.08Z" /><path d="M103.05,42.13l-3.6.32L92.73,39V35.85l6.72-4.71,3.6-.32V33l-2.88.25L94.87,37v.42l5.37,2.73,2.81-.25Z" /><path d="M114.67,32.18l-1.77.15v.53l-4.49.4-.5,8.45-2.18.19.49-8.45-.85.07V31.34l1-.08.07-1.11,2.19-.19-.07,1.11,4.34-.38V29.58l1.79-.15ZM116.43,41l-5.56.49-1.76-1.59v-2.1l2.22-.19v1.18l.59.54,4.51-.39Zm0-5.34-7.26.63v-2l7.26-.63ZM117.1,32l-1.8.16V29.37l1.8-.16Z" /><path d="M130.62,31.73l-2.34.2.24,3.73-6.79.59-.5.57v1l.5.45,7.53-.66v2.18l-8.41.73L119.05,39V36.2l1.89-2.06,5.18-.45L126,32.13l-7,.62v-2.2l6.87-.6-.09-1.49,2.27-.2.1,1.49,2.47-.21Z" /><path d="M137.88,39.08l-3.11.28-2-1.85v-9l2.19-.19v8.07l.81.73,2.11-.18Zm5.73-1.64-2.19.19V30.78l-.8-.76-2,.18V28.06l3-.26,2,1.87Z" /><path d="M151.55,36.41l-1.66,1.8-2.38.21-1.67-1.51V34.56l1.67-1.82,2.38-.21,1.66,1.54ZM150.11,36V34.78l-.83-.75-1.17.1-.83.9V36.2l.83.77,1.15-.1Z" /></g></g></svg></div><div class="btns"><div class="btnInner flex"><div class="btn tapBtn"><div class="iosBtn close_age_soundOn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.38 584.15"><defs><style>.yes_sound_svg_1{fill:#c90274}.yes_sound_svg_2{fill:#af0265}.yes_sound_svg_3{fill:#e30177}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 39</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><polygon class="yes_sound_svg_1" points="157.5 0 412.38 254.88 412.38 412.88 157.5 158 157.5 0" /><polygon class="yes_sound_svg_2" points="0 171.78 412.38 584.15 412.38 412.88 157.5 158 0 171.78" /><polygon class="yes_sound_svg_3" points="157.5 0 0 13.78 0 171.78 157.5 158 157.5 0" /><path d="M44.47,75.36,37.21,76l-5.54-5.15V39l7.26-.63v28.4l1.63,1.49,3.91-.34ZM70.08,60.83l-3.91.34v7.14l-5.41,5.63-10.18.89L44.82,70V61.71l5.71-6.13,8.3-.73V46.3L43.66,47.63V40.37L58.83,39V35.39l7.34-.64V38.4l3.91-.34v7.26l-3.91.34v8.55l3.91-.34ZM58.83,66.2V61.82l-5.33.46L51.74,64v2.88l1.76,1.48L57,68Z" /><path d="M93.59,71.06,83.28,72l-6.62-6.13V36.11l7.26-.64V62.2l2.67,2.43,7-.61Zm19-5.44-7.26.64V43.57l-2.66-2.52L96,41.63V34.54l9.88-.86,6.66,6.2Z" /><polygon points="137.94 35.47 148.06 44.69 137.94 55.69 137.94 35.47" /><path d="M53.65,102.4l-20.28,1.78v-2.92l3.75-.33-.36-2.1L34.42,99V96.11l7.13-.62v-1l3.63-.32v1l7.41-.65v2.93l-2.27.2L50,99.8l3.7-.32Zm-1.36,11.14-17.55,1.54v-9.93l17.55-1.53Zm-3.67-5.86v-1.25l-10.21.89v1.25Zm0,3.71V110.1l-10.21.9v1.29ZM46.84,98l-6.58.58.37,2.09,5.84-.51Z" /><path d="M75.49,108.05l-3.24,3.58-3.46.3v-3.59l1.93-.17,1.16-1.3v-2.15l-1.18-1.1h-.17l-6,8.67-5.44.47-3.29-3v-5.09l3.27-3.59,2.92-.26v-2.6L57,98.68V95.05L62,94.6V93.16l3.57-.31v1.44l8.79-.77v3.63l-8.79.77v2.6l2.45-.22V99l3.43-.3V100l.71-.06,3.29,3Zm-10.63-1.9L62,106.4v-2l-1.37.12-1.19,1.28V108l1.19,1.08,2.3-.2Zm1.5-2.15-.75.06v1Z" /><path d="M82.77,105l-3.63.32v-13L82.77,92Zm13.22.74-3.76,4.13-6.58.57v-3.54l4.66-.41,2-2.22V91.13L96,90.81Z" /><path d="M117.17,107.7l-10.53.92-4.3-4.33V96.4l1.78-1.79-4.4.39V91.37l14.46-1.27v3.63l-5.39.48-2.69,2.51v5.93l2.41,2.17,8.66-.76Zm2.12-16.56-4.14.36v-3l4.14-.36Zm0,4.06-4.14.36v-3l4.14-.36Z" /><path d="M53.17,139.14l-3.11.27v-12l-4.49.39,2.1.47-.43,1.28,1.16-.1v6l-1.69.15V137l2.1-.19v2.49l-4.77.42v-3.84l-2.51.22,1.55,1L40.5,140.4l-2-1.48,2.17-2.75-1.89.16v-6l1.25-.11L39.62,129l2.1-.83-4.55.4v12l-3.14.27V121l8.94-.78V128l-.82.07.69,1.83,1.61-.14.71-2-.9.08v-7.86l8.91-.78ZM39.83,123.48v-1l-2.66.24v1Zm0,2.82v-1l-2.66.23v1Zm5.74,7.21v-1.59l-4,.34v1.59Zm4.49-10.92v-1l-2.64.23v1Zm0,2.81v-1l-2.64.23v1Z" /><path d="M66.15,126.14l-9.82.86v-7.82l9.82-.86V120l-2,.17v.6l2-.17v3.29l-2,.17v.64l2-.17Zm9.9,11-9.3.82v-3.18l-4,.35.84.9-3.87,3.19-1.93-2,2.41-1.9-3.08.26v-8L74.77,126v8.06l-4.67.41v.81l6-.52ZM61.7,121v-.6l-2.36.2v.6Zm1.66,1.83v-.64l-4,.35v.64Zm-1.66,2.1v-.65l-2.36.21v.65Zm9.69,3.56v-.61l-10.93,1v.6Zm0,2.17V130l-10.93,1v.64Zm0,2.14v-.6l-10.93,1v.6ZM76.05,121l-6.66.58-.55,1.36L66.17,122,68,117.47l2.73.77-.3.67,5.58-.49Zm-.55,4-8.06.7v-2.43l8.06-.7Z" /><path d="M98.3,120.82l-2.93.25v14l-3.63.32v-1.7l-8.42.74-3-2.66v-4.6l3-3.2,8.42-.74v-1.87L79.05,122.5V119l12.69-1.11v-1.79l3.63-.32v1.79l2.93-.26Zm-6.56,9.38v-3.42l-6.89.61-.93.87v1.79l.93.75Z" /><path d="M120.72,129.27l-3.61,3.93-12.65,1.11-2.64-2.37v-3.85l2.64-2.87,4.75-.42,2.64,2.39v2.93l3.57-.32,1.39-1.54v-3.89l-1.41-1.29-7.39.65.85-4.74-7.41.65v-3.57l11.69-1-.84,4.78,4.81-.42,3.61,3.29Zm-12.22,1.14v-2l-.84-.72-1.87.16-.79.87V130l.69.67Z" /></g></g></svg></div><div class="androidBtn close_age_soundOff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.38 584.15"><defs><style>.yes_svg_1{fill:#c90274}.yes_svg_2{fill:#af0265}.yes_svg_3{fill:#e30177}</style></defs><title>agegate_yes</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><polygon class="yes_svg_1" points="157.5 0 412.38 254.88 412.38 412.88 157.5 158 157.5 0" /><polygon class="yes_svg_2" points="0 171.78 412.38 584.15 412.38 412.88 157.5 158 0 171.78" /><polygon class="yes_svg_3" points="157.5 0 0 13.78 0 171.78 157.5 158 157.5 0" /><path d="M44.47,103.36l-7.26.64-5.54-5.15V67l7.26-.63v28.4l1.63,1.49,3.91-.34ZM70.08,88.83l-3.91.34v7.14l-5.41,5.63-10.18.89L44.82,98V89.71l5.71-6.13,8.3-.73V74.3L43.66,75.63V68.37L58.83,67V63.39l7.34-.64V66.4l3.91-.34v7.26l-3.91.34v8.55l3.91-.34ZM58.83,94.2V89.82l-5.33.46L51.74,92v2.88l1.76,1.48L57,96Z" /><path d="M93.59,99.06,83.28,100l-6.62-6.13V64.11l7.26-.64V90.2l2.67,2.43,7-.61Zm19-5.44-7.26.64V71.57l-2.66-2.52L96,69.63V62.54l9.88-.86,6.66,6.2Z" /><polygon points="137.94 63.47 148.06 72.69 137.94 83.69 137.94 63.47" /></g></g></svg></div></div><div class="btn tapBtn"><a href="https://www.suntory.co.jp/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.38 584.15"><defs><style>.no_svg_1{fill:#4cb5d6}.no_svg_2{fill:#429fbc}.no_svg_3{fill:#53c3f1}</style></defs><title>agegate_no</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><polygon class="no_svg_1" points="157.5 0 412.38 254.88 412.38 412.88 157.5 158 157.5 0" /><polygon class="no_svg_2" points="0 171.78 412.38 584.15 412.38 412.88 157.5 158 0 171.78" /><polygon class="no_svg_3" points="157.5 0 0 13.78 0 171.78 157.5 158 157.5 0" /><path d="M38,70.25,29.32,71l-5.56-5.15v-25l6.1-.54V62.8l2.24,2L38,64.32Zm16-4.58-6.1.54V47.13L45.62,45l-5.57.49v-6l8.31-.73L54,44Z" /><path d="M71.85,67.29l-8.68.76L57.61,62.9v-25l6.11-.53V59.83L66,61.88l5.89-.52Zm16-4.58-6.11.54V44.17l-2.24-2.12-5.56.49v-6l8.31-.73,5.6,5.22Z" /><path d="M123.08,62.81l-6.83.59-8.2-6.9L98.47,65l-7.84.69v-6l5.49-.48,14.53-12.51-20,1.76v-6l29.56-2.58v5.92l-7.55,6.7,5.63,4.81,4.81-.42Zm-3-25.54L93.56,39.59V33.88l26.55-2.32Z" /><polygon points="139.43 35.13 149.54 44.35 139.43 55.35 139.43 35.13" /><path d="M39.06,103.8l-1.85.16v7l-6,7.8-10.7.93v-4.3l8.7-.76,3.6-4.76v-5.48l-9.95.87v6.45l-4.37.39V105.6l-1.88.16v-4.42l1.88-.17V98.8l4.37-.39v2.38l10-.87V97.54l4.38-.38v2.38l1.85-.17Z" /><path d="M63.6,108.45l-7.52,8.08-13.2,1.16v-4.43l11.4-1L59.2,107V95.24l4.4-.39Zm-10.9-6.9-9.47.83V98l9.47-.83Z" /><path d="M88.23,107l-5.48.48-9.32-3.14V115l-4.33.37v-21L73.43,94v5.68l9.9,3.33,4.9-.43Z" /><path d="M97.22,105.81l-4.35.38V92.29l4.35-.38Zm15.12-.25-5.87,6.57-11.15,1v-4.3l9.12-.8,3.48-3.83V91l4.42-.38Z" /><path d="M137.57,101.2l-20,1.75V98.43l20-1.75Z" /><path d="M21.06,132.26l-1.73,7.3-3,.27v-3l.74-.06,1-4.22Zm10.21-2.88-5.94.52v9.9l-3.06.26v-9.9l-5.9.52v-3l5.9-.51v-1.53l3.06-.27v1.53l5.94-.52Zm.05,9.13-3,.27-1.72-7,3-.26,1,4,.72-.06Z" /><path d="M47.63,132.21l-13.75,1.2V130.3l13.75-1.2Z" /><path d="M65.46,136.28l-3.18.28-.46-1.68-3.2,2-8.4.74v-3l4.21-11.79,3.23-.28-4.23,11.78,4.85-.42,2.8-1.69-.94-3.47,3-.27Z" /><path d="M83,134.75l-3.49.31L74.08,124l-.79.06-2.86,7-3.18.28v-3l1.22-.1,2.77-6.9,4.71-.41,5.52,11,1.51-.13Zm.15-12.4-1.2,1.3-1.73.16L79,122.71V121l1.22-1.31,1.73-.16,1.2,1.1Zm-1.27-.44v-.66l-.46-.44-.69.06-.45.52v.66l.45.46.69-.06Z" /><path d="M98.26,127.78,84.51,129v-3.11l13.75-1.2Z" /><path d="M116.1,126.53l-4.47,5.71-10,.88v-3l8.58-.75,2.83-3.62v-5l3-.27Zm-7.58-5-6.82.6v-2.87l6.82-.6Zm0,4.73-6.82.59V124l6.82-.6Zm5.07-6.63-2.08.18v-2.77l2.08-.18Zm3.13-.28-2.08.18v-2.76l2.08-.18Z" /><path d="M134.54,130.52l-6,.52v-10l-1.71-1.61-3.3.29-1.7,1.92v7.7l-2.92.26v-8.91l3.35-3.81,5.85-.52,3.35,3.23v8.22l3.13-.27Z" /></g></g></svg></a></div></div><div class="btnInner"><div class="btn tapBtn close_age_soundOff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.38 504.15"><defs><style>.yes_no_sound_svg_1{fill:#d1691c}.yes_no_sound_svg_2{fill:#b75c18}.yes_no_sound_svg_3{fill:#eb7c1c}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 15</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><polygon class="yes_no_sound_svg_1" points="157.5 0 412.38 254.88 412.38 332.88 157.5 78 157.5 0" /><polygon class="yes_no_sound_svg_2" points="0 91.78 412.38 504.15 412.38 332.88 157.5 78 0 91.78" /><polygon class="yes_no_sound_svg_3" points="157.5 0 0 13.78 0 91.78 157.5 78 157.5 0" /><path d="M47.21,48.71l-5.28.47-4-3.74V22.28l5.28-.46V42.47l1.19,1.09,2.84-.25ZM65.83,38.15,63,38.4v5.18l-3.94,4.1-7.4.65-4.19-3.54v-6l4.15-4.46,6-.53V27.58l-11,1V23.27l11-1V19.64L63,19.18v2.65l2.84-.25v5.29L63,27.11v6.22l2.84-.25Zm-8.18,3.9V38.86l-3.88.34-1.28,1.24v2.09l1.28,1.08,2.53-.22Z" /><path d="M83.09,45.58l-7.5.65-4.82-4.45V20.15l5.29-.46V39.13L78,40.9l5.1-.45Zm13.81-4-5.28.46V25.58l-1.94-1.83-4.81.42V19l7.19-.63L96.9,22.9Z" /><polygon points="137.94 30.47 148.06 39.69 137.94 50.69 137.94 30.47" /><path d="M27,66.34,14.09,67.47V65.61l2.39-.21-.23-1.33-1.49.13V62.34l4.54-.4V61.3l2.31-.21v.65l4.72-.42v1.86l-1.45.13-.23,1.37,2.35-.2Zm-.86,7.09L15,74.4V68.09l11.17-1ZM23.8,69.69V68.9l-6.5.57v.79Zm0,2.37v-.82l-6.5.57v.82ZM22.66,63.5l-4.18.37.23,1.33,3.72-.32Z" /><path d="M36.75,63.35l-4.67.41-.63,8.6-2.3.2L29.73,64l-.86.07V61.81l1-.09.07-1,2.36-.21-.07,1.06,4.51-.4Zm4.35,4.78-1,.08v2.42l-1.57,1.6-4.21.37-1.64-1.55V68.51l1.64-1.91,3.46-.3V65.22L40.1,65v1.08l1-.08Zm-3.32,1.53V68.42l-2.32.2-.52.55v.77l.52.44,1.79-.15Zm3.39-5.48-2.2.19v-1l-.57-.52-.72.06V60.63l1.73-.15,1.76,1.64Z" /><path d="M54.51,68.07l-2.75,3-5.45.47-2.76-2.5V59.59l2.32-.21v8.48l1.42,1.28,3.48-.3,1.39-1.53V65.53l2.35-.2Z" /><path d="M67.1,69.73l-6.7.59-2.73-2.76v-5l1.13-1.14-2.8.24V59.34l9.2-.8v2.31l-3.43.3-1.71,1.6v3.77l1.53,1.39,5.51-.49ZM68.45,59.2l-2.63.23v-1.9l2.63-.23Zm0,2.58L65.82,62V60.1l2.63-.23Z" /><path d="M76.84,69l-5.78.51V64.3l-.91-.48,1.52-2.61-1.33.12V59.81l1.1-.09-1.27-.62,1.39-2.57,1.52.64,3.44-.29V58.4l-1.34.11-.53.92,2.19-.19v1.52L74.62,61l1.34.31-.15.49,1-.09V63l-1.18.1v.74l1.14-.1V65l-1.14.1v.73l1.14-.1V67l-1.14.1v.72l1.18-.1ZM73.12,58.69l-.93.08-.52.93.9-.08Zm1,5.24v-.74l-1.19.1V64Zm0,2V65.2l-1.19.1V66Zm0,2v-.72l-1.19.1V68Zm.5-7-.86.07-.55.95,1.07-.09Zm5.33,5.53-1.43,2.64-1.42-.72,1.39-2.58Zm3.3,1.94-3.12.28V65.45l-2.69.24V56.4l5.52-.48V65.2l-1.15.11V66.6l1.44-.12Zm-2.09-9.66v-.94L79.2,58v.94Zm0,2.41v-.93l-1.92.17v.93Zm0,2.46v-1l-1.92.16v1Z" /><path d="M91.17,60.3l-6.24.55v-5l6.24-.55v1.06l-1.25.11v.38l1.25-.11v2.09L89.92,59v.41l1.25-.11Zm6.31,7-5.92.52v-2L89,66l.53.57-2.46,2-1.23-1.24,1.53-1.22-2,.17V61.19l11.25-1v5.13l-3,.26v.52l3.79-.33ZM88.34,57v-.39l-1.5.13v.39Zm1.06,1.16v-.41L86.84,58v.42Zm-1.06,1.34V59.1l-1.5.13v.41Zm6.17,2.26v-.38l-7,.61v.38Zm0,1.38v-.41l-7,.61v.41Zm0,1.37v-.38l-7,.6v.39Zm3-7.52-4.24.37-.36.87-1.69-.57,1.19-2.89,1.73.49-.19.43,3.56-.31Zm-.36,2.52L92,60V58.42L97.12,58Z" /><path d="M111.67,56.91l-1.86.16V66l-2.31.2V65.12l-5.36.47-1.9-1.7V61l1.9-2,5.36-.47V57.27L99.42,58V55.72l8.08-.7V53.88l2.31-.2v1.13l1.86-.16Zm-4.17,6V60.7l-4.39.39-.58.55v1.14l.58.48Z" /><path d="M126,62.28l-2.3,2.5-8,.71L114,64V61.53l1.69-1.83,3-.26L120.34,61v1.86l2.27-.2.89-1V59.17l-.9-.83-4.71.41.55-3-4.72.41V53.88l7.44-.65-.53,3,3.06-.26L126,58.1Zm-7.78.73V61.75l-.54-.46-1.19.1-.5.55v.8l.44.42Z" /></g></g></svg></div></div></div></div>';

      $wrap.append(html);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      log('set');

      this.$contents.on('click', function (e) {
        e.stopPropagation();
      });
      this.$open.on('click', function (e) {

        log(11);

        self.open.call(self, this);
      });
      this.$closeOn.on('click', this.close.bind(this, true));
      this.$closeOff.on('click', this.close.bind(this, false));
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Age/Render.es6":
/*!*************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Age/Render.es6 ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderBase2 = __webpack_require__(/*! ./RenderBase.es6 */ "../../src/js/src/View/UI/Common/Age/RenderBase.es6");

var _RenderBase3 = _interopRequireDefault(_RenderBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

var Render = function (_RenderBase) {
  _inherits(Render, _RenderBase);

  function Render($target) {
    _classCallCheck(this, Render);

    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));

    _this.$target = $target;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {

      this.$wrap = $('#age');
      this.$tit1 = this.$wrap.find('.tit .age_text1_svg');
      this.$tit2 = this.$wrap.find('.tit .age_text2_svg');
      this.$text = this.$wrap.find('.text');

      // TweenMax.set(this.$wrap, {x: -100 * 3, y: 30 * 3, opacity: 0});
      TweenMax.set(this.$wrap, { width: 0 });
      TweenMax.set(this.$tit1, { x: -30 * 2.5 * 2, y: 30 * 2 });
      TweenMax.set(this.$tit2, { x: -30 * 2.5 * 2, y: 30 * 2 });
      TweenMax.set(this.$text, { x: -30 * 2.5 * 2, y: 30 * 2 });

      // tapBtn ready
      var ookisa = 100;
      this.$t = this.$wrap.find('.btns .btn');
      TweenMax.set(this.$t, { x: ookisa, y: ookisa, opacity: 0 });
    }
  }, {
    key: 'first',
    value: function first() {
      var _this2 = this;

      var tl = new TimelineMax({ delay: 1.0 });

      tl
      // x
      .to(this.$wrap, .3, {
        width: '100%',
        ease: Expo.easeOut
      }, 0.0)
      // naname
      // .to(this.$wrap, .3, {
      //   x: 0,
      //   y: 0,
      //   opacity: 1,
      //   ease: Expo.easeOut,
      // }, 0.0)
      .to(this.$tit1, .7, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.8)
      }, .2 + 0.0).to(this.$tit2, .7, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.8)
      }, .2 + 0.05).to(this.$text, .7, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.8)
      }, .2 + 0.05 * 2)

      // btns
      .add(function () {

        _this2.$t.each(function (index, el) {

          // tapBtnの表示
          var ookisa = 0;
          TweenMax.to($(el), 1.0, {
            x: ookisa,
            y: ookisa,
            opacity: 1,
            delay: 0.1 * index,
            // ease: Expo.easeOut
            ease: Elastic.easeOut.config(.8, 0.5)
          });
        });
      }, .2 + 0.25);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}(_RenderBase3.default);

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Age/RenderBase.es6":
/*!*****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Age/RenderBase.es6 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  UIBase
//
// ------------------------------------------------------------

var UIBase = function (_Base) {
  _inherits(UIBase, _Base);

  function UIBase() {
    _classCallCheck(this, UIBase);

    var _this = _possibleConstructorReturn(this, (UIBase.__proto__ || Object.getPrototypeOf(UIBase)).call(this));

    _this.$target = $('.target');

    return _this;
  }

  _createClass(UIBase, [{
    key: 'show',
    value: function show() {

      this.$target.show();
    }
  }, {
    key: 'hide',
    value: function hide() {

      this.$target.hide();
    }
  }]);

  return UIBase;
}(_Base3.default);

exports.default = UIBase;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Menu/Controller.es6":
/*!******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Menu/Controller.es6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/View/UI/Common/Menu/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

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

    _this.name = 'Modal';

    _this.isOpen = false;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // this.append();

      // this.$toggle = $('.toggle_modal')
      this.$open = $('.open_modal');
      this.$close = $('.close_modal');
      this.$contents = $('.modal_contents');

      this.r = new _Render2.default(this.$contents);
    }
  }, {
    key: 'toggle',
    value: function toggle() {

      if (this.isOpen) {

        this.close();
      } else {

        this.open();
      };

      this.isOpen = !this.isOpen;
    }
  }, {
    key: 'open',
    value: function open() {

      this.r.show();

      this.isOpen = true;

      // sound
      if (gb.sound) gb.sound.a_tap.play();
    }
  }, {
    key: 'close',
    value: function close() {
      var isSound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


      this.r.hide();

      this.isOpen = false;

      // sound
      if (gb.sound) {
        if (isSound) gb.sound.a_tap.play();
      }
    }
  }, {
    key: 'append',
    value: function append() {

      var $wrap = $('#inner');
      var html = '<div id="menu" class="modal_contents"><div class="inner"><div class="head"><div class="logo"><a href="/" data-color="toTop"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.8 45.24"><defs><style>.logo_svg1{fill:#d0b263}.logo_svg2{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:.98px}</style></defs><title>logo</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="Header"><path class="logo_svg1" d="M4.91,17.22c-1.9.16-3-.87-3-2.6V12.86l2-.17v1.79c0,.68.36,1,1,.94a1,1,0,0,0,1-1.1V5.91L8,5.73V14A3.09,3.09,0,0,1,4.91,17.22Z" /><path class="logo_svg1" d="M9.59,16.57v-11l2.12-.18v11Z" /><path class="logo_svg1" d="M20.12,15.67v-8l-.46,2.43-1.21,5.68L16.84,16,15.7,10.48l-.45-2.35v8l-1.9.16v-11L16.21,5l1.18,5.47.36,2,.37-2.06,1.16-5.67,2.84-.24v11Z" /><path class="logo_svg1" d="M30.31,14.81l-3.59.3v-11l3.55-.3c1.56-.14,2.51.59,2.51,2.1V7.13a1.82,1.82,0,0,1-1.35,2,1.56,1.56,0,0,1,1.41,1.75v1.43A2.44,2.44,0,0,1,30.31,14.81Zm.44-8.54c0-.5-.22-.78-.75-.73l-1.15.1v3l1.06-.09a.82.82,0,0,0,.84-.93Zm0,4.59c0-.58-.3-.85-.84-.8l-1.1.09v3.1l1.2-.1c.53-.05.74-.34.74-.86Z" /><path class="logo_svg1" d="M34.33,14.47v-11L39.77,3V4.79l-3.32.28V7.79l2.29-.19V9.21l-2.29.2v3.05l3.32-.29V14Z" /><path class="logo_svg1" d="M45.63,13.5l-.37-2.12-2,.17-.41,2.19-2,.17L43.14,2.74l2.37-.2,2.28,10.78ZM44.3,5.61l-.77,4.3L45,9.79Z" /><path class="logo_svg1" d="M55.8,12.64v-8l-.46,2.43-1.21,5.67-1.61.14L51.38,7.44l-.45-2.35v8L49,13.21v-11L51.89,2l1.18,5.47.36,2L53.8,7.4,55,1.73l2.83-.24v11Z" /><path class="logo_svg1" d="M11.91,23.26V44.81l-5,.43V23.69L2,24.11V19.85l14.86-1.27v4.26Z" /><path class="logo_svg1" d="M27.83,43.46l-.89-5-4.74.41-1,5.16-4.66.39L22,18.14l5.59-.47L32.89,43ZM24.69,24.89,22.89,35l3.41-.29Z" /><path class="logo_svg1" d="M43.81,32.21l-3.25.28v9.88l-5,.43V17l8.23-.7c3.78-.32,6.07,1.58,6.07,5.3v4.34C49.88,29.6,47.59,31.89,43.81,32.21Zm1.25-10.14c0-1.28-.52-1.89-1.77-1.79l-2.73.23v8.26l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path class="logo_svg1" d="M55.77,33.87,54.4,34l-1.49-7.28V15.51l4.38-.37v11.2ZM53.2,41.3V36.8L57,36.48V41Z" /><path class="logo_svg2" d="M3.53,16.26c-1.89.16-3-.86-3-2.59V11.9l2-.17v1.8c0,.67.35,1,1,.93a1,1,0,0,0,1-1.1V5l2.13-.18v8.27A3.09,3.09,0,0,1,3.53,16.26Z" /><path class="logo_svg2" d="M8.21,15.61v-11l2.12-.18v11Z" /><path class="logo_svg2" d="M18.74,14.72v-8l-.46,2.43-1.21,5.67L15.46,15,14.32,9.52l-.45-2.35v8L12,15.29v-11l2.85-.25L16,9.54l.36,2,.38-2.06,1.16-5.67,2.83-.24v11Z" /><path class="logo_svg2" d="M28.93,13.85l-3.59.31v-11l3.55-.3c1.56-.13,2.52.59,2.52,2.11V6.17a1.83,1.83,0,0,1-1.35,2,1.57,1.57,0,0,1,1.4,1.75v1.43A2.44,2.44,0,0,1,28.93,13.85Zm.44-8.54c0-.5-.22-.77-.75-.73l-1.14.1v3l1.06-.09a.83.83,0,0,0,.83-.93Zm0,4.59c0-.57-.29-.84-.84-.8l-1.09.09v3.1l1.19-.1c.53,0,.74-.34.74-.85Z" /><path class="logo_svg2" d="M33,13.51v-11l5.44-.46V3.83l-3.32.29V6.83l2.29-.19V8.25l-2.29.2V11.5l3.32-.28v1.83Z" /><path class="logo_svg2" d="M44.25,12.55l-.37-2.13-2,.17-.41,2.19-2,.17L41.76,1.78l2.37-.2,2.28,10.78Zm-1.33-7.9L42.15,9l1.46-.12Z" /><path class="logo_svg2" d="M54.43,11.68v-8L54,6.15l-1.21,5.67L51.14,12,50,6.49l-.44-2.35v8l-1.9.16v-11L50.51,1l1.18,5.47.36,2,.38-2.06L53.59.78,56.43.54v11Z" /><path class="logo_svg2" d="M10.53,22.3V43.85l-5,.43V22.73l-4.94.42V18.89l14.86-1.27v4.27Z" /><path class="logo_svg2" d="M26.45,42.5l-.89-5-4.73.4-1,5.16-4.66.4,5.38-26.27,5.59-.48,5.34,25.36ZM23.32,23.93,21.51,34l3.41-.29Z" /><path class="logo_svg2" d="M42.43,31.26l-3.25.27v9.89l-5,.42V16l8.23-.7c3.78-.32,6.07,1.57,6.07,5.29V25C48.5,28.65,46.21,30.94,42.43,31.26Zm1.25-10.15c0-1.28-.52-1.89-1.77-1.78l-2.73.23v8.25l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path class="logo_svg2" d="M54.39,32.91,53,33l-1.48-7.28V14.55l4.37-.37v11.2Zm-2.57,7.43V35.85l3.77-.33V40Z" /><path d="M3.53,16.26c-1.89.16-3-.86-3-2.59V11.9l2-.17v1.8c0,.67.35,1,1,.93a1,1,0,0,0,1-1.1V5l2.13-.18v8.27A3.09,3.09,0,0,1,3.53,16.26Z" /><path d="M8.21,15.61v-11l2.12-.18v11Z" /><path d="M18.74,14.72v-8l-.46,2.43-1.21,5.67L15.46,15,14.32,9.52l-.45-2.35v8L12,15.29v-11l2.85-.25L16,9.54l.36,2,.38-2.06,1.16-5.67,2.83-.24v11Z" /><path d="M28.93,13.85l-3.59.31v-11l3.55-.3c1.56-.13,2.52.59,2.52,2.11V6.17a1.83,1.83,0,0,1-1.35,2,1.57,1.57,0,0,1,1.4,1.75v1.43A2.44,2.44,0,0,1,28.93,13.85Zm.44-8.54c0-.5-.22-.77-.75-.73l-1.14.1v3l1.06-.09a.83.83,0,0,0,.83-.93Zm0,4.59c0-.57-.29-.84-.84-.8l-1.09.09v3.1l1.19-.1c.53,0,.74-.34.74-.85Z" /><path d="M33,13.51v-11l5.44-.46V3.83l-3.32.29V6.83l2.29-.19V8.25l-2.29.2V11.5l3.32-.28v1.83Z" /><path d="M44.25,12.55l-.37-2.13-2,.17-.41,2.19-2,.17L41.76,1.78l2.37-.2,2.28,10.78Zm-1.33-7.9L42.15,9l1.46-.12Z" /><path d="M54.43,11.68v-8L54,6.15l-1.21,5.67L51.14,12,50,6.49l-.44-2.35v8l-1.9.16v-11L50.51,1l1.18,5.47.36,2,.38-2.06L53.59.78,56.43.54v11Z" /><path d="M10.53,22.3V43.85l-5,.43V22.73l-4.94.42V18.89l14.86-1.27v4.27Z" /><path d="M26.45,42.5l-.89-5-4.73.4-1,5.16-4.66.4,5.38-26.27,5.59-.48,5.34,25.36ZM23.32,23.93,21.51,34l3.41-.29Z" /><path d="M42.43,31.26l-3.25.27v9.89l-5,.42V16l8.23-.7c3.78-.32,6.07,1.57,6.07,5.29V25C48.5,28.65,46.21,30.94,42.43,31.26Zm1.25-10.15c0-1.28-.52-1.89-1.77-1.78l-2.73.23v8.25l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path d="M54.39,32.91,53,33l-1.48-7.28V14.55l4.37-.37v11.2Zm-2.57,7.43V35.85l3.77-.33V40Z" /></g></g></svg></a></div><div class="text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.74 50.46"><title>\u30A2\u30BB\u30C3\u30C8 22</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M12.31,21.94c1.07.87,1.73,1.51,1.73,1.7s-.22.43-.74,1c-.39.4-.56.53-.67.54a.39.39,0,0,1-.26-.09c-.18-.2-.18-.2-.95-1a19.14,19.14,0,0,0-3.65-2.85A30,30,0,0,1,4,24.77,9.81,9.81,0,0,1,1.88,26.1c-.17,0-.18,0-.59-.42a5.71,5.71,0,0,0-1-.8,20.52,20.52,0,0,0,5-3.72,23,23,0,0,0,4.22-5.69,65.87,65.87,0,0,0-6.61.71l-.26,0c-.19,0-.29-.06-.32-.24a10.68,10.68,0,0,1-.12-1.91,46.61,46.61,0,0,0,5.36-.25c1-.09,2-.21,2.59-.33a1.89,1.89,0,0,0,.61-.2.37.37,0,0,1,.2,0c.28,0,.59.18,1,.68a2.12,2.12,0,0,1,.5.94c0,.2,0,.27-.48.71A5.73,5.73,0,0,0,11,16.9a27.5,27.5,0,0,1-1.92,2.82A20.36,20.36,0,0,1,12.31,21.94Z" /><path d="M24.67,14.65c-5.85.6-5.85.6-7.8.85a9,9,0,0,0-1.92.32l-.2,0c-.2,0-.32-.07-.41-.28a6.41,6.41,0,0,1-.3-1.89c1.16,0,2.93-.06,5.06-.24,2.39-.21,4.57-.44,5.52-.57a3.27,3.27,0,0,0,.87-.24.94.94,0,0,1,.35-.1c.34,0,.68.22,1.25,1a1.89,1.89,0,0,1,.47.9c0,.18,0,.22-.32.44a4.93,4.93,0,0,0-.94,1.07,29.23,29.23,0,0,1-4.39,4.74,7.37,7.37,0,0,1,1.75,1.94c0,.19-.22.46-.74.92a2.19,2.19,0,0,1-.78.53c-.1,0-.18,0-.3-.17a17.36,17.36,0,0,0-2.27-2.47,18.41,18.41,0,0,0-3-2.32.22.22,0,0,1-.11-.21,2.8,2.8,0,0,1,.74-1c.26-.24.4-.36.5-.36a.32.32,0,0,1,.23.06,14.5,14.5,0,0,1,2.63,1.82A25.87,25.87,0,0,0,24.67,14.65Z" /><path d="M32.4,17.24c0,.09,0,.14-.17.3a2.25,2.25,0,0,0-.35.67c-.74,1.68-2.07,3.58-2.56,3.62-.1,0-.13,0-.49-.27A3.78,3.78,0,0,0,27.71,21a8.16,8.16,0,0,0,2.74-4.59C31.81,16.76,32.4,17,32.4,17.24ZM34,14.65a46.28,46.28,0,0,0-5.19.61h0a.29.29,0,0,1-.32-.24,6.46,6.46,0,0,1-.17-1.73A35.36,35.36,0,0,0,33.32,13l.25,0L34,13v-.45a12.23,12.23,0,0,0-.18-2.29A10.5,10.5,0,0,1,36,10.3a.23.23,0,0,1,.19.25,1,1,0,0,1-.12.38,3.44,3.44,0,0,0-.2,1.42v.47l1.09-.1c1.1-.09,3.25-.37,3.92-.48l.19,0a.17.17,0,0,1,.2.15c0,.08,0,.57,0,.78,0,.89,0,.94-.35,1l-1.23.07c-.59,0-.81.05-3.83.3v3.1c0,1.69,0,1.69,0,3.09a4.43,4.43,0,0,1,0,.45c0,1.61-.59,2.2-2.34,2.35a4.64,4.64,0,0,1-1.41,0c-.12,0-.15-.12-.2-.36a5.64,5.64,0,0,0-.52-1.51,6.53,6.53,0,0,0,1.76.06c.61,0,.72-.19.72-.94Zm6.84,5.91a.5.5,0,0,1-.23.14c-.31,0-.91-.61-1.65-1.71a10.18,10.18,0,0,1-1.31-2.49c0-.13.12-.26.39-.41a4.46,4.46,0,0,1,1.1-.55c.14,0,.21.06.31.26A10.91,10.91,0,0,0,40.65,18a7.59,7.59,0,0,0,1.55,1.59A5.12,5.12,0,0,0,40.8,20.56Z" /><path d="M44.62,13.21a8,8,0,0,0-1.2.47,1.39,1.39,0,0,1-.44.15c-.36,0-.7-.62-1-2a27.26,27.26,0,0,0,3.33-.67c2-.48,4.57-1.09,5.91-1.37,1.52-.33,2.73-.64,3.37-.83a.62.62,0,0,1,.25,0c.22,0,.3.07.45.47a3.49,3.49,0,0,1,.24,1.07c0,.2-.07.27-.31.29a6.2,6.2,0,0,0-1,.17c-2.84.72-5.11,3.38-5.11,6,0,2,1.55,3.1,4.17,3.11.24,0,.32.07.32.27a5.83,5.83,0,0,1-.32,1.61.48.48,0,0,1-.44.31A5.93,5.93,0,0,1,51.61,22c-2.86-.59-4.35-2.26-4.35-4.81a6.45,6.45,0,0,1,1.32-3.88,7.82,7.82,0,0,1,1.84-1.75C48.21,12.14,45.89,12.78,44.62,13.21Zm8.6-.32a5.25,5.25,0,0,1,1.67,1.68c0,.09-.1.2-.41.49s-.33.3-.47.36-.08,0-.11,0-.09,0-.39-.45a7.74,7.74,0,0,0-1.09-1.24.36.36,0,0,1-.09-.12c0-.09.05-.14.07-.14s.34-.33.4-.39a2.27,2.27,0,0,0,.29-.19.11.11,0,0,1,0,0h.08Zm2.88.9a1.57,1.57,0,0,1-.49.32c-.07,0-.1,0-.18-.15a7.08,7.08,0,0,0-1.3-1.47c0-.05-.07-.09-.07-.13s.11-.19.34-.38a1.77,1.77,0,0,1,.52-.31c.12,0,.32.12.67.44a3.82,3.82,0,0,1,.95,1.19C56.54,13.4,56.42,13.52,56.1,13.79Z" /><path d="M63.32,7.7a7.07,7.07,0,0,0,.61,2.2,22.74,22.74,0,0,0,3.81-1.67l.2-.07c.17,0,.29.28.54,1.34,0,.08,0,.1,0,.16a.23.23,0,0,1,0,.07c0,.12-.06.19-.23.27a27.76,27.76,0,0,1-3.63,1.45A8.59,8.59,0,0,0,68,14.88a.2.2,0,0,1,.14.19,4.9,4.9,0,0,1-.66,1.44c-.15.23-.25.32-.4.33s-.15,0-.37-.15a6.37,6.37,0,0,0-1.8-.64A7.32,7.32,0,0,0,62.75,16c-2,.17-3,.81-3,1.87,0,.61.32,1,1,1.27a9.82,9.82,0,0,0,3.93.25,8.85,8.85,0,0,0,1.34-.2A10,10,0,0,0,65.37,21c-.08.26-.22.34-.67.37a16.46,16.46,0,0,1-3.4-.05c-2.23-.35-3.51-1.49-3.51-3.16a3.41,3.41,0,0,1,.87-2.23,5.55,5.55,0,0,1,3.62-1.48,6.17,6.17,0,0,1,2.6.24,10,10,0,0,1-2-2.66c-1,.28-1.88.47-2.87.65-.59.11-1.88.3-2.14.32s-.3,0-.38-.3a8.64,8.64,0,0,1-.27-1.56l1.12-.06a31.54,31.54,0,0,0,3.77-.63c-.15-.32-.44-1-.61-1.45a5.7,5.7,0,0,0-.6-1.31,14.31,14.31,0,0,1,2-.4c.32,0,.44.05.44.25Z" /><path d="M77.55,12c2.3-.21,3.8,1,3.8,3.06s-1.26,3.47-3.78,4.49a14.81,14.81,0,0,1-3.08.82c-.35,0-.44-.05-.67-.51a2,2,0,0,0-.89-.89c4.22-.7,6.3-1.95,6.3-3.77,0-1-.72-1.55-1.93-1.45a6.92,6.92,0,0,0-4.41,2.56,4.52,4.52,0,0,0-.6.82c-.15.26-.25.35-.41.36A2.48,2.48,0,0,1,70.64,17a.5.5,0,0,1-.27-.51,3.47,3.47,0,0,1,0-.54,3.11,3.11,0,0,1,0-.35c.08-1.07.13-1.53.33-3.05,0-.18,0-.18.16-1,0,0,0-.37.13-1a3.82,3.82,0,0,0,0-.55,6.33,6.33,0,0,1,1.89.31c.13.06.2.14.18.24a.54.54,0,0,1-.08.22,2.91,2.91,0,0,0-.39,1.1,24,24,0,0,0-.42,2.69A7.84,7.84,0,0,1,77.55,12Zm-.3-4.73c.65.32.85.49.85.67A3.73,3.73,0,0,1,77.55,9c-.27.41-.37.5-.5.51s-.14,0-.34-.15a9.77,9.77,0,0,0-3.28-1.48c-.25-.08-.3-.11-.3-.24a2.11,2.11,0,0,1,.44-.93c.26-.42.38-.53.57-.55A10.93,10.93,0,0,1,77.25,7.25Z" /><path d="M86.14,14.89a.41.41,0,0,1,.07.23c0,.12,0,.14-.17.52a18.51,18.51,0,0,0-.94,2.95c0,.18-.1.29-.17.33a6.26,6.26,0,0,1-.84.19H84c-.08,0-.2,0-.34,0s-.26,0-.33-.22a21.22,21.22,0,0,1-.57-5,25.92,25.92,0,0,1,.58-5.52c.17-.91.26-1.42.32-2a7.18,7.18,0,0,1,1.82.38c.29.09.37.16.37.33s0,.17-.2.45c-.56.93-1.18,4.53-1.18,6.91,0,.38,0,.9.07,1.73.47-1.09.64-1.43,1-2.28A4.92,4.92,0,0,0,86.14,14.89Zm3.65.87a4.65,4.65,0,0,0,2.3.18,8.64,8.64,0,0,0,2.76-.63l.23-.07c.12,0,.2,0,.22.22A11.84,11.84,0,0,1,95.45,17c0,.17,0,.22-.28.31a12.3,12.3,0,0,1-3,.61,5.91,5.91,0,0,1-3.3-.36c-.74-.39-1.51-1.24-1.51-1.69,0-.23.35-.58,1.26-1.21A2.07,2.07,0,0,0,89.79,15.76ZM88.61,7.35a13.79,13.79,0,0,0,2.27,0,19.3,19.3,0,0,0,3.26-.56l.15,0c.12,0,.17,0,.2.17a9.88,9.88,0,0,1,.09,1.34c0,.25,0,.34-.24.39a18.33,18.33,0,0,1-3,.48,14.43,14.43,0,0,1-2.91.08c-.08,0-.12-.16-.12-.46a8.31,8.31,0,0,1,.09-1.26.15.15,0,0,1,.17-.11Z" /><path d="M101.63,17.64c-.15-.42-.22-.56-.34-.85-2,.78-2.25.89-4,1.46-.32.1-.73.25-.93.33L96,16.83c.3,0,.67-.11,1-.19v-7c0-.35,0-.65,0-1a7.63,7.63,0,0,1-.62.47,7.4,7.4,0,0,0-.59-1.65A8.63,8.63,0,0,0,99,4l1.63-.15a4.9,4.9,0,0,0,2.68,2.2,7.89,7.89,0,0,0-.93,1.54,7,7,0,0,1-2.54-2.2,12.8,12.8,0,0,1-2.43,2.83c.23,0,.38,0,.82-.05l.86-.08V7.55A4.43,4.43,0,0,0,99,6.74l1.65-.14a4.14,4.14,0,0,0-.07.81V8l.64-.06a11,11,0,0,0,1.29-.16,12.67,12.67,0,0,0,0,1.29v2.83c0,.69,0,1,0,1.53-.38,0-.65,0-1.27.06l-2.66.24V16.2a21.31,21.31,0,0,0,2-.69c-.24-.41-.32-.56-.66-1.08l1.43-.69a21.37,21.37,0,0,1,1.43,2.43A8.44,8.44,0,0,0,104.77,13a11.9,11.9,0,0,0,.54-4,7.64,7.64,0,0,0,0-.91l1.83-.16a6.86,6.86,0,0,0,0,.88,8.82,8.82,0,0,0,1.15,4.74A6.7,6.7,0,0,0,111,16.12a6.55,6.55,0,0,0-1.15,1.72,9.3,9.3,0,0,1-2.17-2,7.59,7.59,0,0,1-1.41-3.11,9.06,9.06,0,0,1-1.56,3.8A8.77,8.77,0,0,1,103,18.42a6.29,6.29,0,0,0-.82-1.08Zm-.69-7.54V9.23l-2.32.2v.87Zm-2.32,2.33,2.32-.2v-.9l-2.32.2Zm10-7.16A7.68,7.68,0,0,0,110,5.08l.83.82c-.17.43-.2.53-.31.86a17.94,17.94,0,0,1-1.56,4,5.23,5.23,0,0,0-1.46-.7,10.37,10.37,0,0,0,1.39-3.28l-3.36.3a13.36,13.36,0,0,1-1.6,3.06,4.84,4.84,0,0,0-1.31-1.09,10.75,10.75,0,0,0,1.79-3.78,10.06,10.06,0,0,0,.35-1.89l1.86.17a7.67,7.67,0,0,0-.28.94c-.09.34-.17.66-.27,1Z" /><path d="M116.63,10.52a37.72,37.72,0,0,1-1.92,3.29,3.31,3.31,0,0,1-2.3,1.69c-1.21.1-2-.81-2-2.28A3.82,3.82,0,0,1,112.21,10a6.94,6.94,0,0,1,2.94-1l.17,0c.86-1.81,1.07-2.29,1.65-3.65a12.36,12.36,0,0,0-3.18.72.27.27,0,0,1-.12,0c-.29,0-.55-.82-.64-2.06a5.8,5.8,0,0,0,1.18,0c.57,0,1.55-.19,2.57-.38s1-.16,1.18-.32a.62.62,0,0,1,.3-.12c.22,0,.56.21.92.63a1.89,1.89,0,0,1,.44.71c0,.14-.07.26-.27.48a31.16,31.16,0,0,0-2,3.91,12.81,12.81,0,0,1,3.36.71,13.06,13.06,0,0,0,.16-1.75,7.24,7.24,0,0,0-.05-.75,17.49,17.49,0,0,1,1.81.18c.3,0,.4.13.4.26a1,1,0,0,1-.13.45,4.43,4.43,0,0,0-.32,1.24c0,.36-.1.6-.2,1.09a12.33,12.33,0,0,1,1.93,1.2.31.31,0,0,1,.14.23c0,.47-.73,1.62-1,1.65a.56.56,0,0,1-.3-.13c-.45-.36-1-.78-1.35-1a8.65,8.65,0,0,1-2.08,2.94,6.43,6.43,0,0,1-2.29,1.45.62.62,0,0,1-.4-.13c0-.05,0-.07-.27-.35a1.61,1.61,0,0,0-.87-.67,8.43,8.43,0,0,0,2.72-1.66,6.89,6.89,0,0,0,1.65-2.44A10.27,10.27,0,0,0,116.63,10.52Zm-4.54,2.4c0,.4.15.64.42.62s1-.91,2.09-2.8C113,11,112.09,11.84,112.09,12.92Z" /><path d="M127.63,6.59A19.52,19.52,0,0,1,125,8.2a7.78,7.78,0,0,0-.94-1.57,16.65,16.65,0,0,0,4.05-2.57,12.44,12.44,0,0,0,2.56-2.92l1.9-.17a8.55,8.55,0,0,0,2.74,2.43,14.85,14.85,0,0,0,4.15,1.8,8.71,8.71,0,0,0-.91,1.88,15.23,15.23,0,0,1-2.74-1.22V7.11a10.88,10.88,0,0,0-1.44.06l-5.4.47a12.39,12.39,0,0,0-1.38.19Zm-.89,4.2a12.82,12.82,0,0,0-1.9.27V9.21c.5,0,1.14,0,1.9-.09l10-.88a19.05,19.05,0,0,0,1.9-.25V9.85a14.68,14.68,0,0,0-1.9.06l-5.54.49a21,21,0,0,1-1.68,3.25c2.79-.4,2.79-.4,5.11-.85-.52-.52-.8-.8-1.69-1.62l1.59-.84a31.46,31.46,0,0,1,3.74,3.92l-1.57,1.16c-.45-.65-.59-.83-1-1.3-1.34.28-2.3.48-2.9.59-1.69.31-4.75.86-5.43,1a17.8,17.8,0,0,0-2.09.4l-.25-1.93c.49,0,.69,0,.91,0s.62-.07,1.44-.19a19.46,19.46,0,0,0,1.72-3.35Zm7.65-5.29c.22,0,.37,0,.7-.08a11,11,0,0,1-3.37-2.82A15.49,15.49,0,0,1,128.37,6L129,6Z" /><path d="M145.82,9.35c-1.67,1.12-2.14,1.64-2.14,2.38a.61.61,0,0,0,.37.61,5.08,5.08,0,0,0,2.25.14,27,27,0,0,0,3-.46c.35-.09.56-.15,1.23-.38h.08a.25.25,0,0,1,.25.18,5,5,0,0,1,.17,1.44.38.38,0,0,1-.3.43,32.9,32.9,0,0,1-3.5.48,10.2,10.2,0,0,1-3.95-.12A2,2,0,0,1,141.85,12a3.47,3.47,0,0,1,1.36-2.65,15.37,15.37,0,0,1,2.44-1.77c-.14-.54-.39-.75-.91-.7a4.47,4.47,0,0,0-2.2,1,12.84,12.84,0,0,0-1.41,1.28c-.51.56-.56.6-.69.61s-.52-.34-.88-.89a1.64,1.64,0,0,1-.27-.6c0-.15,0-.18.44-.47a11.71,11.71,0,0,0,3.21-3.56c-1.19.18-1.81.25-2.47.31-.25,0-.3,0-.39-.3a14.84,14.84,0,0,1-.15-1.54,8.66,8.66,0,0,0,1.72-.05c.65,0,1.38-.13,2.13-.23A6.69,6.69,0,0,0,144.27,0c1.5.12,2.19.31,2.19.59a.46.46,0,0,1-.07.21,11.35,11.35,0,0,0-.47,1,.28.28,0,0,0,0,.12c1-.22,1.8-.46,2.38-.64a2.07,2.07,0,0,1,.54-.16.19.19,0,0,1,.24.12,9.36,9.36,0,0,1,.17,1.29c0,.18-.07.27-.29.34a34.49,34.49,0,0,1-3.93.93A10.87,10.87,0,0,1,143.6,6a4.71,4.71,0,0,1,2-.66c.76-.07,1.26.32,1.6,1.23l2.65-1.68a5.7,5.7,0,0,0,1.46-1.25,5.43,5.43,0,0,1,1.43,1.91c0,.1-.06.17-.28.24a37.21,37.21,0,0,0-4.91,2.53c0,.3,0,1.07,0,1.6v.8c0,.2,0,.3-.12.36a2.58,2.58,0,0,1-1,.22c-.57.05-.67,0-.67-.25V11c0-.49,0-1.12,0-1.52Z" /><path d="M5.7,43.36c-.47,0-.88.1-1.24.16,0-.35,0-.74,0-1.34V38.43a9.43,9.43,0,0,0,0-1.29,9.55,9.55,0,0,0,1.27-.07l.51,0a8.21,8.21,0,0,0,.54-1.68l1.79,0L8,36.88l1.35-.12a8.86,8.86,0,0,0,1.24-.16,9,9,0,0,0,0,1.32v3.72a13.07,13.07,0,0,0,0,1.35,10.84,10.84,0,0,0-1.21.06l-1,.08v1l4.34-.38a11.8,11.8,0,0,0,1.93-.27v1.74a13,13,0,0,0-1.95.07l-3.13.27a9.85,9.85,0,0,0,2.34,1.25,13.12,13.12,0,0,0,3.19.75,9.39,9.39,0,0,0-1,1.73,11.6,11.6,0,0,1-3.08-1,9.83,9.83,0,0,1-2.7-1.89c0,.18,0,.18,0,.43,0,.06,0,.56,0,.61v.94a7.32,7.32,0,0,0,.12,1.62l-2,.18a10.38,10.38,0,0,0,.11-1.67v-.9c0-.31,0-.51,0-1.05a10.57,10.57,0,0,1-2.46,2.2,17.56,17.56,0,0,1-3.09,1.64A5.25,5.25,0,0,0,0,49a13.94,13.94,0,0,0,5.28-3l-2.93.25a14.14,14.14,0,0,0-1.93.27V44.78a15.88,15.88,0,0,0,1.92-.07l4.22-.37V43.29ZM4.29,41.79a23.58,23.58,0,0,1-2.91,1.87l-.66.39L.1,42.5a16,16,0,0,0,3.77-2.14ZM1.66,36.73a16.12,16.12,0,0,1,2.46,2.1L2.94,40.15A12.53,12.53,0,0,0,.49,37.93ZM6.1,39.48l2.79-.25v-1l-2.79.24Zm0,2.45,2.79-.25V40.57l-2.79.24Zm5.45-2.18A30.76,30.76,0,0,1,15,41.37l-.95,1.46a19,19,0,0,0-3.39-1.77Zm3.09-3a27.06,27.06,0,0,1-2.75,2.79l-1.11-1.08a13.71,13.71,0,0,0,2.55-2.73Z" /><path d="M18.78,35.18c.42.08.54.15.54.34a1.19,1.19,0,0,1-.1.41,9.59,9.59,0,0,0-.39,2.53c-.13,2.7-.2,4.79-.2,6.44a3.88,3.88,0,0,0,.14,1.19c.18.53.77.77,1.71.68a6.79,6.79,0,0,0,4.25-2.2,11.14,11.14,0,0,0,1.6-2.08,5.08,5.08,0,0,0,.61,1.58,1,1,0,0,1,.08.38c0,.3-.32.73-1.16,1.55a8.9,8.9,0,0,1-5.45,2.73,3.61,3.61,0,0,1-2.82-.67C17,47.45,16.7,46.6,16.7,45c0-1.3,0-2.3.15-6.2,0-.58,0-.93,0-1.08a14.54,14.54,0,0,0-.12-2.55A9.54,9.54,0,0,1,18.78,35.18Z" /><path d="M30.74,35.69a10.17,10.17,0,0,0-.16-1.89,11.18,11.18,0,0,1,1.9,0c.32,0,.41.1.41.28a.89.89,0,0,1-.09.33,3.75,3.75,0,0,0-.22,1.37c.8-.19,1.42-.36,2.24-.61a.35.35,0,0,1,.19-.05c.11,0,.16,0,.2.13a5.6,5.6,0,0,1,.13,1.14c0,.25-.05.37-.18.43a15.33,15.33,0,0,1-2.64.68c0,.92-.05,1.41-.09,2.69a4.15,4.15,0,0,1,.24,1.37,3.38,3.38,0,0,1-1.11,2.78,1.05,1.05,0,0,0-.14.48.79.79,0,0,0,.17.57c.26.26,1,.34,2.32.23A7.07,7.07,0,0,0,37,44.84a1.84,1.84,0,0,0,.59-1.57,6.42,6.42,0,0,0-.19-1.48,4.5,4.5,0,0,0,1.74.38c.2,0,.28,0,.31.12a3.86,3.86,0,0,1,.14,1.16A3.54,3.54,0,0,1,38.82,46a4.27,4.27,0,0,1-2,1,19.9,19.9,0,0,1-2.74.44,6.84,6.84,0,0,1-3.65-.35,1.55,1.55,0,0,1-.79-1.46,3.63,3.63,0,0,1,.12-1c-1.18.07-2-1-2-2.51a2.77,2.77,0,0,1,2.3-3,1.44,1.44,0,0,1,.61,0c0-.47,0-.89,0-1.27-.52.1-1.54.22-2.27.28-.52.05-.67,0-.77-.15a3.31,3.31,0,0,1-.15-1.13V36.4a11.19,11.19,0,0,0,1.38,0c.57-.05,1.26-.13,1.85-.21Zm-1.35,6.23c0,.7.32,1.13.79,1.09s.86-.58.86-1.35-.24-1-.78-1S29.39,41.19,29.39,41.92Zm8.22-5.68c.24-.33.27-.36.39-.37a4,4,0,0,1,1.18.33A8.11,8.11,0,0,1,41.63,38a.36.36,0,0,1,.13.25c0,.15-.1.34-.45.79s-.57.63-.69.64-.17,0-.3-.17a7.23,7.23,0,0,0-3.08-2.13c-.12,0-.17-.1-.17-.19A3.7,3.7,0,0,1,37.61,36.24Z" /><path d="M46.12,39.83c0,.08,0,.13-.16.3a2.21,2.21,0,0,0-.36.66c-.74,1.68-2.07,3.58-2.55,3.63-.1,0-.14,0-.49-.28a4.29,4.29,0,0,0-1.13-.52A8,8,0,0,0,44.17,39C45.54,39.34,46.12,39.59,46.12,39.83Zm1.57-2.59a50.19,50.19,0,0,0-5.2.6h0a.31.31,0,0,1-.32-.24A6.55,6.55,0,0,1,42,35.87a34.75,34.75,0,0,0,5.08-.24l.25,0,.39,0v-.45a11.46,11.46,0,0,0-.19-2.29,10.37,10.37,0,0,1,2.27.06.22.22,0,0,1,.19.25,1,1,0,0,1-.12.37,3.47,3.47,0,0,0-.2,1.42v.47l1.09-.1c1.09-.09,3.24-.36,3.92-.47a.34.34,0,0,1,.18,0,.16.16,0,0,1,.2.14,7.74,7.74,0,0,1,0,.79c0,.88,0,.93-.36,1l-1.22.07-3.84.31v3.12c0,1.66,0,1.66,0,3.08,0,.2,0,.35,0,.45,0,1.61-.58,2.2-2.33,2.35a4.63,4.63,0,0,1-1.41,0c-.12,0-.16-.12-.21-.36a5.77,5.77,0,0,0-.52-1.53,5.9,5.9,0,0,0,1.77.08c.6,0,.72-.21.72-1Zm6.84,5.9c-.1.1-.17.14-.24.14-.3,0-.9-.6-1.64-1.69a10.56,10.56,0,0,1-1.31-2.49c0-.13.11-.26.38-.41a4.64,4.64,0,0,1,1.11-.55c.14,0,.2.06.3.26a11.75,11.75,0,0,0,1.25,2.16,7.74,7.74,0,0,0,1.54,1.58A5,5,0,0,0,54.53,43.14Zm1-10.86a2,2,0,0,1-1.79,1.95,1.6,1.6,0,0,1-1.8-1.63,2,2,0,0,1,1.8-1.94A1.59,1.59,0,0,1,55.5,32.28Zm-2.69.24a.82.82,0,0,0,.9.81,1,1,0,0,0,.89-1,.81.81,0,0,0-.89-.8A1,1,0,0,0,52.81,32.52Z" /><path d="M61.81,37.05c3.07-.27,4.84-.45,6.54-.72l.21,0c.51,0,.51,0,.51,1.31,0,.68,0,.8-.34.83h-.06c-1.11,0-1.74.1-6.6.52-1.78.16-2.67.25-4.22.44l-.48,0a4.58,4.58,0,0,0-.94.15l-.19,0c-.18,0-.3,0-.33-.2a9.66,9.66,0,0,1-.17-2C57.1,37.43,58.29,37.36,61.81,37.05Z" /><path d="M72.61,36.81a2.88,2.88,0,0,1-.91.65c-.13,0-.15,0-.47-.3A4.66,4.66,0,0,0,70,36.42,13.55,13.55,0,0,0,74,32.57a10.77,10.77,0,0,0,1.5-3c1.78.5,2.2.68,2.2.91,0,.08-.05.16-.22.29a6.11,6.11,0,0,0-.84,1.17l.31,0c.58,0,1-.07,1.11-.08a7.14,7.14,0,0,0,2.57-.45.63.63,0,0,1,.28-.1c.24,0,.47.15,1,.72s.53.62.53.8,0,.24-.23.44a4.52,4.52,0,0,0-.59,1,23.61,23.61,0,0,1-4.66,6.53c-1.49,1.48-3.86,3.28-4.38,3.32a.57.57,0,0,1-.43-.16,3.78,3.78,0,0,0-1.41-.86,23,23,0,0,0,5.72-4.46c-.12-.1-.12-.1-.49-.45A10.07,10.07,0,0,0,74.32,37c-.1-.08-.13-.12-.13-.19s.22-.35.81-1c.28-.31.35-.37.45-.38A6.9,6.9,0,0,1,77.72,37a16.34,16.34,0,0,0,2.14-3.79l-4.38.44A20.68,20.68,0,0,1,72.61,36.81Z" /><path d="M86.72,30.5a.26.26,0,0,1,.2.27.88.88,0,0,1,0,.24,4.45,4.45,0,0,0-.12,1.31c0,4.07-.77,6.74-2.54,9.11-.38.5-.54.66-.7.68a.74.74,0,0,1-.29-.08,4.37,4.37,0,0,0-1.63-.45,9.73,9.73,0,0,0,2.12-3.11,13.31,13.31,0,0,0,1-5.62,12.26,12.26,0,0,0-.17-2.42A7.84,7.84,0,0,1,86.72,30.5ZM88.52,32a14.32,14.32,0,0,0-.15-2.15c1.81-.09,2.47,0,2.47.32a1,1,0,0,1-.08.34,2.25,2.25,0,0,0-.12.63c0,.45,0,.45-.09,7.79a17.77,17.77,0,0,0,5-4.55,7.92,7.92,0,0,0,.25,2,.66.66,0,0,1,0,.28c0,.26-.17.5-.94,1.28a17.49,17.49,0,0,1-3.65,2.86,3.44,3.44,0,0,0-.79.58.73.73,0,0,1-.39.2,2.9,2.9,0,0,1-1.24-.71c-.34-.3-.49-.54-.49-.75a.84.84,0,0,1,.07-.29,4.27,4.27,0,0,0,.15-1.55Z" /><path d="M99.17,31.57a15.52,15.52,0,0,0-.2-3.34l1,0a11.36,11.36,0,0,1,1.23.07.21.21,0,0,1,.17.21c0,.08,0,.08-.11.44a11.4,11.4,0,0,0-.13,2.48l3.75-.35a18.47,18.47,0,0,0-.19-3.43,16.19,16.19,0,0,1,1.9,0c.36,0,.46.08.46.23a1.21,1.21,0,0,1-.12.45,6,6,0,0,0-.12,1.17v1.39c1.7-.18,2.34-.26,2.84-.35l.17,0a.2.2,0,0,1,.19.07,3.74,3.74,0,0,1,.08,1c0,.79,0,.87-.28.89h-.41a25.36,25.36,0,0,0-2.62.18,10.09,10.09,0,0,1-1.28,5.28,8.75,8.75,0,0,1-3,3,5.18,5.18,0,0,1-1.22.6c-.16,0-.17,0-.53-.34a3.75,3.75,0,0,0-1.12-.79c2.42-1.08,3.68-2.17,4.45-3.86a9.08,9.08,0,0,0,.74-3.71l-1.09.09-1.31.13c-.3,0-.76.09-1.36.16,0,1.18,0,1.18,0,2.68v.21c0,.24,0,.33-.24.41a6.58,6.58,0,0,1-1.12.2c-.59.05-.67,0-.67-.29v-.25c.06-1.53.08-1.8.1-2.76-.88.09-2.42.32-2.83.43a.16.16,0,0,1-.1,0,.22.22,0,0,1-.25-.19,10.85,10.85,0,0,1-.2-1.9,19.76,19.76,0,0,0,2.74-.13Z" /><path d="M118.26,34.52c0,2.1,0,3.65.1,4.77v.12c0,.18,0,.26-.22.29a11,11,0,0,1-1.48.21c-.52.05-.57,0-.57-.27v-.08c.07-.86.1-2.76.1-4.86V32.5c-1.14.83-1.7,1.21-2.67,1.8a8.27,8.27,0,0,1-2,1.06.39.39,0,0,1-.35-.15,5.44,5.44,0,0,0-1.42-1.1,25.4,25.4,0,0,0,4.88-2.73,25.75,25.75,0,0,0,4.87-4.46,5,5,0,0,0,.56-.83c1.06.61,1.81,1.24,1.81,1.56,0,.1-.06.19-.26.29a4.85,4.85,0,0,0-1.21,1c-.74.72-1.47,1.37-2.12,1.91Z" /><path d="M127.44,34c0,1,0,3.73.09,4.51v.09a.38.38,0,0,1-.12.32,4,4,0,0,1-1.41.31c-.54,0-.64,0-.64-.33v-.07c0-.43.08-5.24.08-7.22a41.72,41.72,0,0,0-.18-5.87,17.37,17.37,0,0,1,2.23,0c.17,0,.25.11.25.25a1.49,1.49,0,0,1-.06.37,2.92,2.92,0,0,0-.12.71s0,1-.08,3a17,17,0,0,1,1.88.42A24.49,24.49,0,0,1,133.49,32c.14.09.21.16.21.26a6.68,6.68,0,0,1-.58,1.52c-.13.3-.21.39-.31.4a.45.45,0,0,1-.27-.1,17.6,17.6,0,0,0-5.1-1.94Z" /></g></g></svg></div><div class="close close_modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.51 20.51"><defs><style>.close_svg1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px}</style></defs><title>close</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="\u30AC\u30A4\u30C9"><line class="close_svg1" x1="1.06" y1="1.06" x2="19.45" y2="19.45" /><line class="close_svg1" x1="1.06" y1="19.45" x2="19.45" y2="1.06" /></g></g></svg></div></div><div class="list"><div class="item"><a href="/talk/" data-color="#FFF9B2"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.66 37.95" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 38</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M22.83,17.57,20,17.82v4.29L4.81,23.44v9.27l17.53-1.53V36L0,38V15l4.81-.42v4l8.89-.78V12.6l3.77-.33v5.2l1.59-.14V12.14l3.77-.33Z" /><path d="M45.6,25,23.72,26.9V22L45.6,20Z" /><path d="M71.73,31.67l-5.06.44-.74-2.67-5.08,3.18L47.48,33.79V29l6.69-18.74,5.14-.45L52.59,28.51l7.71-.68,4.46-2.68-1.51-5.53,4.87-.43Z" /><path d="M95.87,22.15l-6,.52-10.2-3.43V31L75,31.39v-23L79.69,8v6.21l10.83,3.64,5.35-.47Z" /><path d="M121.69,18.33,99.81,20.25V15.3l21.88-1.92Z" /><path d="M148.19,16.2,141,25.61,128.51,26.7V21.89L138.73,21l4.65-6.07V7.38l-10.31.9L129,13l-4.43.39V8.62L127,8.41l4-4.76,17.17-1.5Z" /><path d="M159.63,17.5l-4.32.38V.38L159.63,0Zm0,6.94-4.32.38V20.53l4.32-.38Z" /></g></g></svg></div></div></a></div><div class="item"><a href="/warikan/" data-color="#FDD7BB"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.71 41.57" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 37</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M15.12,20.61l-3.31.29V19.2l-8.45.74v1.7L0,21.93V17.2l5.33-.46v-1l4.51-.4v1l5.28-.46Zm0,11.16-15,1.31V30.27l5.39-.47V28.73l-4.35.38V26.29l4.35-.38V24.85l-4.35.38V22.41L5.44,22v-1.2l4.27-.38v1.21l4.34-.38v2.81l-4.34.38v1.07l4.34-.38V28l-4.34.38v1.06L15.09,29Zm-.82,8.63L.88,41.57V34l13.39-1.18Zm-4-2.55V36.1l-5.41.47v1.75Zm9.52-4-3.67.32v-18l3.67-.32Zm5.25,5.89-7.11.62V36.17l3.28-.29V14.39l3.83-.34Z" /><path d="M32.45,31.4l-4.63.4V15.21l4.63-.41Zm16.81.93-4.78,5.26-8.37.73V33.81L42,33.29l2.57-2.82V13.74l4.65-.41Z" /><path d="M66,27.58l-3.09.28v1.61l2.49-.22v2.24l-4.89.43V28.07l-2.16.18,1.64.87-2.19,4-1.91-1.06,2-3.76-2,.18-.06.06v5.14l9.65-.84v3.28l-13,1.14V28.77l-1,.09V25.41L53,25.28V16.53l-1.28.12V13.23L53,13.11v-1.5l3.72-.32v1.5L61,12.42V10.91l3.72-.32v1.5L65.92,12V15.4l-1.25.11v8.75L66,24.14ZM61,17V15.83l-4.27.38v1.2Zm0,3.8V19.55l-4.27.38v1.28Zm0,3.74V23.3l-4.27.37V25ZM76.61,35.24l-5.22.46V31.79l1.72-.15V16.9l-1.64.15-1.8,18.8-3.5,0,1.72-18.47-1.67.15V13.87l2-.18.33-3.58,3.53,0-.3,3.23L76.61,13Z" /><path d="M88.05,26.86l-4.32.38V9.74l4.32-.38Zm0,6.94-4.32.38V29.89l4.32-.38Z" /><path d="M118.37,22.21l-7.11,9.1L95.4,32.7V27.89l13.65-1.2,4.51-5.75V13l4.81-.42ZM106.31,14.3l-10.85.95V10.68l10.85-.95Zm0,7.52-10.85.95v-4.6l10.85-1Zm8.07-10.55-3.31.29V7.16l3.31-.29Zm5-.44-3.31.29V6.72l3.31-.29Z" /><path d="M144.37,28.41l-5.06.45-.74-2.67-5.09,3.18-13.37,1.17V25.7L126.81,7,132,6.5l-6.72,18.75,7.71-.68,4.45-2.68-1.5-5.53,4.87-.43Z" /><path d="M169.81,7.81,167,8.06v4.29l-15.21,1.33V23l17.53-1.53v4.81l-22.34,2v-23l4.81-.42V8.82L160.68,8V2.84l3.78-.33v5.2L166,7.57V2.37L169.81,2Z" /><path d="M192.58,15.23l-21.87,1.91v-5l21.87-1.91Z" /><path d="M218.71,21.91l-5.06.44-.73-2.67-5.09,3.18L194.46,24V19.19L201.16.45,206.3,0l-6.73,18.74,7.71-.67,4.46-2.69-1.5-5.53,4.86-.42Z" /></g></g></svg></div></div></a></div><div class="item"><a href="/next/" data-color="#F9CCE4"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222.58 40.35" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 36</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M18.89,38.69l-4.62.41V31.25L4.59,23.81V39.94L0,40.35V18l4.59-.4,9.68,7.22V16.73l4.62-.41Z" /><path d="M39,19.13,25.79,20.29v4.4l11.54-1v4.38l-11.54,1v4.46l13.13-1.15v4.57L21.09,38.5V16.13L39,14.56Z" /><path d="M60.46,35.06l-5.39.47-4.7-6.67-4.71,7.49-5.33.47V32.09l3-.27L47.66,25l-4.26-6-3,.26V14.44L45.61,14l4.79,6.72,4.78-7.56,5.2-.45v4.75l-3,.27-4.27,6.8,4.32,6.07,3-.26Z" /><path d="M81.27,15.68l-7.49.66V33.89L69,34.31V16.75l-7.49.66V12.6l19.77-1.73Z" /><path d="M91.92,26.86l-4.32.38V9.74l4.32-.38Zm0,6.94-4.32.38V29.89L92,29.51Z" /><path d="M122.24,22.21l-7.11,9.1L99.27,32.7V27.89l13.65-1.2,4.51-5.75V13l4.81-.42ZM110.18,14.3l-10.85.95V10.68l10.85-.95Zm0,7.52-10.85.95v-4.6l10.85-1Zm8.07-10.55-3.31.29V7.16l3.31-.29Zm5-.44-3.31.29V6.72l3.31-.29Z" /><path d="M148.24,28.41l-5.06.45-.74-2.67-5.09,3.18L124,30.54V25.7L130.68,7l5.14-.45L129.1,25.25l7.71-.68,4.45-2.68-1.5-5.53,4.87-.43Z" /><path d="M173.68,7.81l-2.81.25v4.29l-15.2,1.33V23l17.52-1.53v4.81l-22.34,2v-23l4.82-.42V8.82L164.55,8V2.84l3.78-.33v5.2l1.58-.14V2.37L173.68,2Z" /><path d="M196.45,15.23l-21.88,1.91v-5l21.88-1.91Z" /><path d="M222.58,21.91l-5.06.44-.74-2.67-5.08,3.18L198.33,24V19.19L205,.45,210.17,0l-6.73,18.74,7.71-.67,4.46-2.69L214.1,9.85,219,9.43Z" /></g></g></svg></div></div></a></div><div class="item"><a href="/tap/" data-color="#ECF0B3"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.3 47.63" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 35</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M23,37.14l-7.11,9.1L0,47.63V42.82l13.64-1.2,4.52-5.75v-8L23,27.46ZM10.91,29.23.05,30.18V25.61l10.86-.95Zm0,7.52L.05,37.7V33.1l10.86-1ZM19,26.2l-3.31.29V22.08L19,21.8Zm5-.44-3.31.29v-4.4L24,21.36Z" /><path d="M49,43.34l-5.06.45-.73-2.67L38.08,44.3,24.71,45.47V40.63l6.7-18.75,5.14-.45L29.82,40.18l7.71-.68L42,36.82l-1.5-5.53,4.86-.43Z" /><path d="M74.41,22.74,71.59,23v4.29l-15.2,1.33v9.27l17.53-1.53v4.81l-22.34,2v-23l4.81-.42v4L65.28,23v-5.2l3.77-.33v5.2l1.59-.14V17.3L74.41,17Z" /><path d="M97.18,30.16,75.3,32.07V27.12l21.88-1.91Z" /><path d="M123.31,36.84l-5.06.44-.74-2.67-5.09,3.18L99.05,39V34.12l6.7-18.74,5.14-.45-6.72,18.74,7.71-.67,4.45-2.69-1.5-5.53,4.87-.42Z" /><path d="M140.49,16.74,133,17.4V35l-4.79.42V17.82l-7.49.65V13.66l19.77-1.73Z" /><path d="M161.46,32.46l-4.67.41v-5.6l-10.12.88v5.61l-4.67.4V16.28l4.45-4.93L157,10.43l4.45,4.15Zm-4.67-9.95V17.07l-2-1.83-6.18.54-2,2.17v5.44Z" /><path d="M182.92,19.48l-4.46,4.8-10,.87v6.7l-4.7.41V9.89l14.68-1.28,4.46,4Zm-4.7-1.75V15.11l-1.95-1.75-7.79.69V20.5l7.79-.68Z" /><path d="M209.45,14.32l-3.83.33v8.29l-5.77,7.2-9.43.83V26.13l7.32-.64,3.09-3.94V15.24l-9.73.85-1.53,4.64-5,.44V16.38l1.51-.13,2.59-8.13,5.14-.45-1.12,3.46,11.32-1V11l5.42-.47Zm0-5.36-5.74.5V5.66l5.74-.5Z" /><path d="M233.12,18.26l-21.87,1.92V15.23l21.87-1.92Z" /><path d="M259.25,24.94l-5.05.45-.74-2.67-5.09,3.18L235,27.07V22.23l6.7-18.75L246.84,3l-6.73,18.75,7.72-.68,4.45-2.68-1.5-5.53,4.87-.43Z" /><path d="M270.27,17.5l-4.32.38V.38L270.27,0Zm0,6.94-4.32.38V20.53l4.32-.38Z" /></g></g></svg></div></div></a></div><div class="item"><a href="/photo/" data-color="#4cb5d6"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.49 40.35" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 34</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M22.75,28,15.34,39.1,1,40.35V35.51l11.89-1,5-7.39V21.67L0,23.24V18.46l22.75-2Z" /><path d="M44.92,25l-2.52.22V36.73l-4.15.36V25.58l-2.74.24-4,11.86-4.71.41V33.93l1.83-.16,2.49-7.57-4.45.39V22.41l11.54-1v-2L42.4,19v2l2.52-.22Z" /><path d="M70.57,26.85l-6,.53L54.38,24V35.68l-4.73.42v-23l4.73-.41v6.2l10.83,3.65,5.36-.47Z" /><path d="M94.29,21.72,86.88,32.84l-14.3,1.25V29.25l11.9-1,5-7.38V15.41L71.54,17V12.2l22.75-2Z" /><path d="M119.59,16.61l-4.16,13.73L97.71,31.89v-23l4.82-.42V26.79L112,26,114.64,17Z" /><path d="M144.21,18.85l-21.87,1.92V15.82l21.87-1.92Z" /><path d="M170.34,25.54l-5.05.44-.74-2.67-5.09,3.18-13.37,1.17V22.82l6.7-18.74,5.14-.45L151.2,22.37l7.71-.67L163.37,19l-1.5-5.53,4.86-.43Z" /><path d="M177.49,18l-5,.44V.44l5-.44Zm0,7-5,.44V21.05l5-.43Z" /></g></g></svg></div></div></a></div><div class="item"><a href="/tour/" data-color="#F7B8BF"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.8 49.51" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 33</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M23,39l-7.11,9.1L0,49.51V44.7l13.64-1.2,4.52-5.75v-8L23,29.34ZM10.91,31.11l-10.86,1V27.49l10.86-.95Zm0,7.52L.05,39.58V35L10.91,34ZM19,28.08l-3.31.29V24L19,23.68Zm5-.44-3.31.29v-4.4L24,23.24Z" /><path d="M49,45.23l-5.06.44L43.17,43l-5.09,3.18L24.71,47.35V42.51l6.7-18.75,5.14-.44L29.82,42.06l7.71-.67L42,38.7l-1.5-5.53,4.86-.43Z" /><path d="M74.41,24.62l-2.82.25v4.29l-15.2,1.33v9.27l17.53-1.53V43L51.58,45V22l4.81-.42v4.05l8.89-.78v-5.2l3.77-.33v5.2l1.59-.14v-5.2l3.77-.33Z" /><path d="M97.18,32,75.3,34V29l21.88-1.91Z" /><path d="M123.31,38.72l-5.06.44-.74-2.67-5.09,3.18L99.05,40.84V36l6.7-18.74,5.14-.45-6.72,18.75,7.71-.68,4.45-2.69-1.5-5.52,4.87-.43Z" /><path d="M129.74,35.67l-.76,4-4.32-.31.79-3.92Zm20.81-20.09-4.7.41v1l-4.27.37v-1l-7.82.68v1l-4.24.37v-1l-4.73.42v-3l4.73-.41V13.38l4.24-.38v1.1l7.82-.69V12.32l4.27-.37V13l4.7-.41Zm.08,20.78L146.48,38l-1.4-3.54L149,32.92,125,35V31.85l3.67-.32-2.55-1.91L129.28,26,125,26.4V23.45l7.11-.62.35-.45,2.3,1.91-6.1,7.23,19.09-1.67-6.07-5.07L144,22.47,145.9,24l2.3-2.52,2.08,1.78L148,25.73l2.27,1.82-2.18,2.27,2.21-.19V32.8l-1.09.1Zm-2.92-16.89L140,24.05V29.6l-6.15.54V27.21l1.83-.16V23l3-1.65-11.9,1v-3L145,17.73l1.31-.71Zm-11.24,19-4.29,1-.66-3.66,4.26-1Zm7.11-.87-4.38,1.34-.95-3.61,4.32-1.36Z" /><path d="M158.78,19.27l-1,4-6.21-1.18,1.12-3.93ZM159,12.9l-1.1,4-6.18-1.29,1.15-3.93Zm-.17,12.35L156,37l-4.13-.51,2.87-11.82Zm13.95-10.87-1.73,7.53-2.65-.4.08.54-2.95.64-.19-1.21-5.66,1.67-.55-3.23.77-.21V11.62l7.35-1.55.39,3.22-4.32,1v4.48l1.55-.44-.32-2,2.95-.62.77,4.94,1.5-6.69Zm3.88,20.36-16.38,1.43v-12l16.38-1.44Zm-9.87-6.58V26.6l-2.68.24V28.4Zm0,4.46V31l-2.68.24v1.58ZM177,21.39l-4.45.39v-3l1.14-.1V13.23l-5.25.46V10.43L177,9.68Zm-4.24,6.25V26.08l-2.68.23v1.56Zm0,4.45V30.51l-2.68.23v1.59Z" /><path d="M190.5,26.31l-7.43.65L182,34.46,178.17,34l1.2-8.53V14.89l11.13-1Zm.44-14.12-12.36,1.08V9.52l12.36-1.08ZM186.54,23V18l-3.2.28v4.95Zm17.74-4.42-1.66.14v14l-3.94.35V19l-2.6.23-1.42,14.15-3.8-.19,1.31-14.5V12.46l-.63.11-.3-3.77,12.36-2,.49,3.73-7.93,1.27v3.42l8.12-.71Z" /><path d="M211,19l-4.81.42V9.13L211,8.71Zm18,2-7.11,9.1-14.35,1.25V26.54l12.14-1.06,4.51-5.78V7.06L229,6.64Zm-9.73-2.73-4.82.42V8.41L219.26,8Z" /><path d="M255.18,13.43l-4.43,4.95-7,.62-2.6,9.41-6.76.59V24.19l3.29-.29,2.43-9.37,8.45-.74,1.86-2V9.58l-18.9,1.65V6.42l23.68-2.07Z" /><path d="M279.74,16.06,257.86,18V13l21.88-1.91Z" /><path d="M291.78,17.5l-4.33.38V.38L291.78,0Zm0,6.94-4.32.38V20.53l4.32-.38Z" /></g></g></svg></div></div></a></div><div class="item"><a href="/cm/" data-color="#E8E8E8"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.05 31.61" class="menuText"><title>\u30A2\u30BB\u30C3\u30C8 32</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M19.93,25.72l-4.48,4.93-10.94,1L0,27.55V14.15L4.51,9.24l10.88-1,4.54,4.14v4.13L15.2,17V15l-2-1.82-6.54.57-2,2.15v9l2,1.79,6.54-.57,2-2.23V22l4.7-.41Z" /><path d="M44.86,28.08l-4.68.41V13.61l-4.73,7.55-4.21.37-4.73-6.75v14.9l-4.68.41V7.67l4.68-.41,6.84,9.19L40.18,6.07l4.68-.41Z" /><path d="M49.08,19.15l-2.66.23V9.29l2.66-.23Zm23.29-5.51L57.22,15l.25.94,14-1.22v13l-4,.35V25.62l-6.18.54v2.43l-4,.35V17.05l-2.08.81-1.23-5V29.26L50,29.59V3.86l3.83-.33V8.86l1.67-.66,1,4,5.63-.49v-1l-4.81.42V8.28l4.81-.42v-1l-5.52.49V4.49L62.17,4V2.8l4.16-.36v1.2L72,3.15v2.9l-5.63.49v1l4.92-.43V9.91l-4.92.43v1l6-.53Zm-5,5.36V17.82l-6.18.54v1.18Zm0,3.88V21.73l-6.18.54v1.15Z" /><path d="M86.3,11.68,73.58,12.79V9.13l4.35-.38v-2l-3.69.32V3.41l3.69-.32V1.42l4-.35V2.74l3.83-.34V6.09L82,6.43v2L86.3,8Zm0,6.92L82,19v1.89l3.83-.34v3.66L82,24.53v2.24l-4,.36V24.88l-3.69.33V21.54l3.69-.32V19.33l-4.35.38V16l1.56-.14-.32-2.46,3.41-.71.41,2.86,2.71-.23.46-3,3.42.11L84.85,15l1.45-.13Zm13.75,3.94-2.46,2.67-2.16-2.13-1,2.9-3.23-1,1.59-4.6L91,18.58V26l-3.72.32V1L98.88,0V8.42l-5.2.46V5.65l1.45-.13V4.05L91,4.41v6.26l5.36-.46.19-.57,3.28.81-3,8.82ZM95,14l-4,.35v3.12l1.94-2.08,1.2,1.2Z" /></g></g></svg></div></div></a></div><div class="item"><div class="bgWrap"><div class="bg"></div></div><div class="textWrap"><div class="textInner"><div class="menuText flex"><div class="sound"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.67 22.07"><title>\u30A2\u30BB\u30C3\u30C8 26</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M14.67,18.26l-2.74,3-9.18.8L0,19.56V17l3.26-.28v1l1,.89,6.19-.54,1-1.06V15.83l-1-1-7.66.67L0,13.16V9.11l2.75-3,9.16-.8,2.76,2.57v2.34l-3.34.29V9.59l-1-.91-6.13.53-1,1.08v1.23l1,.85,7.63-.66,2.8,2.51Z" /><path d="M30.37,16.42l-3.19,3.52-8,.7L15.91,17.7V8.17l3.21-3.5L27.18,4l3.19,2.93ZM27,15.15V8.74L25.64,7.46l-5,.43L19.25,9.42v6.43l1.45,1.31,4.92-.43Z" /><path d="M45.37,15.1l-3.2,3.53-7.09.62-3.24-3V3.55l3.36-.29V14.43l1.44,1.34,4-.35L42,13.83V2.66l3.34-.29Z" /><path d="M60.49,17l-3.3.29v-5.6L50.27,6.39V17.92L47,18.2v-16l3.28-.29L57.19,7.1V1.34l3.3-.29Z" /><path d="M75.67,12.51,72.45,16l-10.23.89V.9L72.45,0l3.22,2.94Zm-3.4-1.24V4.7L70.89,3.4l-5.31.46v9.4l5.31-.47Z" /></g></g></svg></div><div class="on"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.44 18.27"><defs><style>.sound_on_svg1{opacity:.3}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 25</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path class="sound_on_svg1" d="M14.45,14.05l-3.18,3.52-8,.7L0,15.33V5.8L3.2,2.3l8.07-.71,3.18,2.92Zm-3.34-1.27V6.37L9.73,5.08l-5,.44L3.34,7.05v6.43l1.45,1.31,4.92-.43Z" /><path class="sound_on_svg1" d="M29.44,16l-3.3.29V10.66L19.22,5.35V16.87l-3.28.29v-16L19.22.89l6.92,5.16V.29L29.44,0Z" /></g></g></svg></div><div class="sla"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.8 19.31"><title>\u30A2\u30BB\u30C3\u30C8 24</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M10.8.88,2.42,19.31,0,18.43,8.4,0Z" /></g></g></svg></div><div class="off"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.62 19.51"><title>\u30A2\u30BB\u30C3\u30C8 23</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M14.45,15.29l-3.18,3.52-8,.7L0,16.57V7l3.2-3.5,8.07-.71,3.18,2.92ZM11.11,14V7.61L9.73,6.32l-5,.44L3.34,8.29v6.43L4.79,16l4.92-.43Z" /><path d="M29.16,4.51l-9.86.86V9.08l8.81-.77v3.28l-8.81.77V18.1l-3.36.3v-16L29.16,1.26Z" /><path d="M43.62,3.24l-9.87.86V7.82l8.81-.77v3.28l-8.81.77v5.74l-3.36.29v-16L43.62,0Z" /></g></g></svg></div></div></div></div></div></div><div class="box flex"><div class="item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.82 16.77"><defs><style>.site_svg1{fill:#d0b263}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 28</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path class="site_svg1" d="M5,16.77c-2.64,0-4.23-1.6-4.23-4.06V10.19H3.6v2.56c0,1,.5,1.46,1.36,1.46s1.33-.49,1.33-1.46V.78h3V12.56A3.94,3.94,0,0,1,5,16.77Z" /><path class="site_svg1" d="M11.06,16.42V5.14h2.49V16.42Zm0-12.78V1.27H13.5V3.64Z" /><path class="site_svg1" d="M24.08,16.42V8.06c0-.61-.31-1-.86-1-.71,0-1,1-1,1.58v7.82H19.71V8c0-.61-.31-1-.81-1-.74,0-1,.94-1,1.55v7.89h-2.5V5.14h2.16l.22,1.79c.4-1.32,1.18-2,2.23-2s1.73.72,2,1.87A2.32,2.32,0,0,1,24.29,5C25.74,5,26.57,6,26.57,7.8v8.62Z" /><path class="site_svg1" d="M37.1,16.42h-5V.78h4.94c2.16,0,3.49,1.15,3.49,3.31V5.78a2.34,2.34,0,0,1-1.88,2.63,2.43,2.43,0,0,1,2,2.65v2C40.61,15.29,39.26,16.42,37.1,16.42ZM37.71,4.3c0-.71-.31-1.13-1-1.13H35.08v4.3h1.47c.76,0,1.16-.4,1.16-1.22Zm0,6.55c0-.82-.4-1.24-1.16-1.24H35.08V14h1.66c.74,0,1-.4,1-1.13Z" /><path class="site_svg1" d="M45.65,16.6A3.35,3.35,0,0,1,42.16,13V8.53A3.36,3.36,0,0,1,45.65,5a3.28,3.28,0,0,1,3.4,3.57V11H44.58v2.42a1,1,0,0,0,1.09,1.18,1,1,0,0,0,1.12-1.18v-1.1h2.26v.73A3.25,3.25,0,0,1,45.65,16.6Zm1.09-8.45c0-.73-.38-1.2-1.07-1.2a1.06,1.06,0,0,0-1.09,1.2V9.84h2.16Z" /><path class="site_svg1" d="M57.37,16.6a1.73,1.73,0,0,1-1.86-1.43A2.77,2.77,0,0,1,53,16.6a2.57,2.57,0,0,1-2.59-2.88v-.33c0-2.28,1.93-3.15,4.59-3.81V8a.88.88,0,0,0-1-1c-.69,0-.92.35-.92,1v.82H50.79v-.7A3,3,0,0,1,54.11,5c2.28,0,3.28,1.45,3.28,3.42v5.88c0,.37.17.56.57.58V16.6ZM55,11.13c-1.5.33-2.21.89-2.21,1.93v.63a.94.94,0,0,0,1,1.06A1.2,1.2,0,0,0,55,13.57Z" /><path class="site_svg1" d="M68.11,16.42V8.06c0-.61-.31-1-.86-1-.71,0-1,1-1,1.58v7.82H63.74V8c0-.61-.31-1-.81-1-.74,0-1,.94-1,1.55v7.89H59.39V5.14h2.16l.22,1.79C62.17,5.61,63,5,64,5s1.73.72,2,1.87A2.32,2.32,0,0,1,68.32,5C69.77,5,70.6,6,70.6,7.8v8.62Z" /><path class="site_svg1" d="M79.44,16.6A3.34,3.34,0,0,1,75.92,13V8.6a3.51,3.51,0,1,1,7,0V13A3.33,3.33,0,0,1,79.44,16.6Zm1.07-8.47A1.08,1.08,0,0,0,79.44,7a1.06,1.06,0,0,0-1.07,1.18v5.33a1,1,0,0,0,1.07,1.15,1.06,1.06,0,0,0,1.07-1.15Z" /><path class="site_svg1" d="M88,7.28v9.14H85.48V7.28H84.22v-2h1.26V4.39c0-2.23,1-3.61,3.32-3.61h.79v2h-.41c-1,0-1.26.46-1.26,1.31V5.26h1.6v2Z" /><path class="site_svg1" d="M94.35,7.28v9.14H91.83V7.28H90.57v-2h1.26V4.39c0-2.23,1-3.61,3.33-3.61h.78v2h-.4c-1,0-1.26.46-1.26,1.31V5.26h1.59v2Z" /><path class="site_svg1" d="M97.21,16.42V5.14H99.7V16.42Zm0-12.78V1.27h2.42V3.64Z" /><path class="site_svg1" d="M104.87,16.6A3.33,3.33,0,0,1,101.38,13V8.6A3.36,3.36,0,0,1,104.87,5c2.1,0,3.31,1.38,3.31,3.61V9.3h-2.12V8.2c0-.75-.38-1.25-1.11-1.25s-1.14.5-1.14,1.29v5.1c0,.8.4,1.27,1.14,1.27a1.08,1.08,0,0,0,1.11-1.22V12.26h2.12V13C108.18,15.27,107,16.6,104.87,16.6Z" /><path class="site_svg1" d="M109.68,16.42V5.14h2.49V16.42Zm0-12.78V1.27h2.42V3.64Z" /><path class="site_svg1" d="M120.6,16.6a1.73,1.73,0,0,1-1.86-1.43,2.77,2.77,0,0,1-2.54,1.43,2.57,2.57,0,0,1-2.59-2.88v-.33c0-2.28,1.93-3.15,4.59-3.81V8a.88.88,0,0,0-1-1c-.69,0-.92.35-.92,1v.82H114v-.7A3,3,0,0,1,117.34,5c2.28,0,3.28,1.45,3.28,3.42v5.88c0,.37.17.56.57.58V16.6Zm-2.4-5.47c-1.5.33-2.21.89-2.21,1.93v.63a.94.94,0,0,0,1,1.06,1.2,1.2,0,0,0,1.26-1.18Z" /><path class="site_svg1" d="M122.62,16.42V.78h2.49V16.42Z" /><path class="site_svg1" d="M133.76,16.6a3.13,3.13,0,0,1-3.47-3.28v-.54h2.14v.61a1.12,1.12,0,0,0,1.24,1.29c.76,0,1.18-.33,1.18-1.06,0-1-.73-1.41-2.16-2.28a3.55,3.55,0,0,1-2.26-3.24A3.07,3.07,0,0,1,133.76,5,3,3,0,0,1,137,8.15v.42H135V8c0-.66-.38-1.06-1.16-1.06s-1.05.33-1.05.94.5,1.18,1.71,1.88c1.5.8,2.66,1.74,2.66,3.64A3.11,3.11,0,0,1,133.76,16.6Z" /><path class="site_svg1" d="M138.6,16.42V5.14h2.49V16.42Zm0-12.78V1.27h2.43V3.64Z" /><path class="site_svg1" d="M146.22,7.28V13a7.81,7.81,0,0,0,.59,3.46h-2.56A7.9,7.9,0,0,1,143.7,13V7.28h-1.28v-2h1.4v-2l2.4-.64V5.26h1.52v2Z" /><path class="site_svg1" d="M152.43,16.6a3.36,3.36,0,0,1-3.5-3.57V8.53A3.37,3.37,0,0,1,152.43,5a3.27,3.27,0,0,1,3.39,3.57V11h-4.46v2.42a1,1,0,0,0,1.09,1.18,1,1,0,0,0,1.12-1.18v-1.1h2.25v.73A3.24,3.24,0,0,1,152.43,16.6Zm1.09-8.45c0-.73-.38-1.2-1.07-1.2a1.06,1.06,0,0,0-1.09,1.2V9.84h2.16Z" /><path d="M4.23,16C1.59,16,0,14.4,0,11.93V9.42H2.83V12a1.26,1.26,0,0,0,1.35,1.45c.86,0,1.33-.49,1.33-1.45V0h3V11.79A3.93,3.93,0,0,1,4.23,16Z" /><path d="M10.28,15.64V4.37h2.49V15.64Zm0-12.78V.49h2.43V2.86Z" /><path d="M23.3,15.64V7.28c0-.61-.31-1-.85-1-.71,0-1,1-1,1.57v7.82H18.93V7.23c0-.61-.31-1-.81-1-.73,0-1,.94-1,1.55v7.89h-2.5V4.37h2.17L17,6.15c.4-1.31,1.19-2,2.23-2s1.74.73,2,1.88a2.3,2.3,0,0,1,2.28-1.88C25,4.18,25.8,5.26,25.8,7v8.62Z" /><path d="M36.32,15.64h-5V0h4.94c2.16,0,3.49,1.15,3.49,3.31V5a2.35,2.35,0,0,1-1.87,2.63,2.45,2.45,0,0,1,2,2.66v2C39.84,14.51,38.48,15.64,36.32,15.64Zm.62-12.12c0-.7-.31-1.12-1-1.12H34.3V6.69h1.47a1.06,1.06,0,0,0,1.17-1.22Zm0,6.55c0-.82-.4-1.24-1.16-1.24H34.3v4.41H36c.74,0,1-.39,1-1.12Z" /><path d="M44.87,15.83a3.35,3.35,0,0,1-3.49-3.57V7.75a3.37,3.37,0,0,1,3.49-3.57,3.29,3.29,0,0,1,3.4,3.57v2.49H43.8v2.42a1,1,0,0,0,1.1,1.17A1,1,0,0,0,46,12.66V11.55h2.26v.73A3.25,3.25,0,0,1,44.87,15.83ZM46,7.37A1,1,0,0,0,44.9,6.18a1.07,1.07,0,0,0-1.1,1.19V9.06H46Z" /><path d="M56.59,15.83a1.71,1.71,0,0,1-1.85-1.43,2.81,2.81,0,0,1-2.54,1.43,2.58,2.58,0,0,1-2.59-2.89v-.33c0-2.28,1.92-3.15,4.58-3.8V7.19a.88.88,0,0,0-1-1c-.69,0-.93.35-.93,1v.82H50v-.7a3,3,0,0,1,3.33-3.17c2.28,0,3.27,1.46,3.27,3.43v5.87c0,.38.17.56.57.59v1.76Zm-2.4-5.47c-1.5.32-2.21.89-2.21,1.92v.64a.93.93,0,0,0,1,1.05,1.2,1.2,0,0,0,1.26-1.17Z" /><path d="M67.33,15.64V7.28c0-.61-.31-1-.85-1-.72,0-1,1-1,1.57v7.82H63V7.23c0-.61-.31-1-.81-1-.73,0-1,.94-1,1.55v7.89h-2.5V4.37h2.16L61,6.15c.4-1.31,1.19-2,2.23-2s1.74.73,2,1.88a2.3,2.3,0,0,1,2.28-1.88C69,4.18,69.83,5.26,69.83,7v8.62Z" /><path d="M78.66,15.83a3.33,3.33,0,0,1-3.51-3.62V7.82a3.5,3.5,0,1,1,7,0v4.39A3.33,3.33,0,0,1,78.66,15.83Zm1.07-8.48a1.07,1.07,0,0,0-1.07-1.17,1,1,0,0,0-1.07,1.17v5.33a1,1,0,0,0,1.07,1.15,1.06,1.06,0,0,0,1.07-1.15Z" /><path d="M87.22,6.5v9.14H84.7V6.5H83.44v-2H84.7V3.62C84.7,1.39,85.72,0,88,0h.78V2h-.4c-1,0-1.26.47-1.26,1.31V4.49h1.59v2Z" /><path d="M93.57,6.5v9.14H91.05V6.5H89.8v-2h1.25V3.62c0-2.23,1-3.62,3.33-3.62h.79V2h-.41c-1,0-1.26.47-1.26,1.31V4.49h1.59v2Z" /><path d="M96.43,15.64V4.37h2.49V15.64Zm0-12.78V.49h2.43V2.86Z" /><path d="M104.1,15.83a3.33,3.33,0,0,1-3.49-3.62V7.82a3.36,3.36,0,0,1,3.49-3.64c2.09,0,3.3,1.39,3.3,3.62v.72h-2.11V7.42c0-.75-.38-1.24-1.12-1.24S103,6.67,103,7.47v5.09c0,.8.4,1.27,1.14,1.27a1.07,1.07,0,0,0,1.12-1.22V11.48h2.11v.75C107.4,14.49,106.19,15.83,104.1,15.83Z" /><path d="M108.9,15.64V4.37h2.49V15.64Zm0-12.78V.49h2.43V2.86Z" /><path d="M119.82,15.83A1.72,1.72,0,0,1,118,14.4a2.81,2.81,0,0,1-2.54,1.43,2.58,2.58,0,0,1-2.59-2.89v-.33c0-2.28,1.92-3.15,4.58-3.8V7.19a.88.88,0,0,0-1-1c-.69,0-.93.35-.93,1v.82h-2.28v-.7a3,3,0,0,1,3.33-3.17c2.28,0,3.27,1.46,3.27,3.43v5.87c0,.38.17.56.57.59v1.76Zm-2.4-5.47c-1.5.32-2.21.89-2.21,1.92v.64a.93.93,0,0,0,1,1.05,1.2,1.2,0,0,0,1.26-1.17Z" /><path d="M121.84,15.64V0h2.5V15.64Z" /><path d="M133,15.83a3.13,3.13,0,0,1-3.46-3.29V12h2.13v.61a1.12,1.12,0,0,0,1.24,1.29c.76,0,1.19-.33,1.19-1.05,0-1-.74-1.41-2.17-2.28a3.56,3.56,0,0,1-2.25-3.24A3.06,3.06,0,0,1,133,4.18a3,3,0,0,1,3.28,3.19V7.8H134.2V7.23c0-.65-.38-1.05-1.17-1.05s-1,.32-1,.94.5,1.17,1.71,1.87c1.49.8,2.66,1.74,2.66,3.64A3.12,3.12,0,0,1,133,15.83Z" /><path d="M137.82,15.64V4.37h2.5V15.64Zm0-12.78V.49h2.42V2.86Z" /><path d="M145.44,6.5v5.69a7.64,7.64,0,0,0,.6,3.45h-2.57a8,8,0,0,1-.55-3.45V6.5h-1.28v-2H143v-2l2.4-.63V4.49H147v2Z" /><path d="M151.65,15.83a3.35,3.35,0,0,1-3.49-3.57V7.75a3.37,3.37,0,0,1,3.49-3.57,3.29,3.29,0,0,1,3.4,3.57v2.49h-4.47v2.42a1,1,0,0,0,1.09,1.17,1,1,0,0,0,1.12-1.17V11.55h2.26v.73A3.25,3.25,0,0,1,151.65,15.83Zm1.09-8.46a1,1,0,0,0-1.07-1.19,1.06,1.06,0,0,0-1.09,1.19V9.06h2.16Z" /></g></g></svg></div><div class="item"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 117.12 17.57"><title>\u30A2\u30BB\u30C3\u30C8 27</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><image width="200" height="30" transform="scale(0.59)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAfCAYAAABNoek3AAAACXBIWXMAABLqAAAS6gEWyM/fAAAKm0lEQVR4Xu2cfYwVVxXAf2yxFWvFtit+NQ061ZAoNrJGY8ukSiRE8KPQ+JkrxSo1NQWMAkL/UNLYkgqSWpQ20hJtrmKqtFRdkqahsRkoxQhJBdJVGdS6pLWu1k1bKVaCf5z7HvPezj1nZt/birK/ZBOYc957M3fuufd83HsnnDx5knHGGSdOj6UwzjhnOhNjApflFwBzgPcDM4CzgekFlQHgeeAQcB+w06fJs+3f87+My/KLgUuABHgn8DjwAnAUed7jysfHFJflU4CLgBd9mhyooH8xcDmQIu/9QmAK8kwgz5QBu8fquVyWz2i7NOjT5OlS5Qq4LD8LuBQY8mnyhKWv4bL8HOBtwO/b+/GEdnfLZfk0YDXwMWAS1TkGXOfT5AdlQpflVyLG1M4+4C6fJreXyFpwWb4cWKeo7PNp8q6Y0GX5YuB7JaJdwLd8mmx3WX4ecD3wRaQTxjgGPATc5NNkT0wpfN9NwGVAX0yvA/p9mnyoTBBe/LXIs0wr04nQD2zwafKQpdjAZfksYKelp3AA+CWwNdaeLsvfiAzKk8vkSF/aGOuD7YT2WYW8794SlV0+TdIWdyt0wv3AQuoZCIj+ekX+l8j1PmCTy/IlEXmR5w353w15Hrk+E7gv3MMR4GZ0AwF53nnAIy7LN4VRrYzrgSWMjYGAdOgRhEFpELiNegYC8lw7XZb/IngUVfitpWAwHWmnR1yW/zoM1i34NDkKLGq/XqAP+L7L8q8rOkBzFtoGrKHcQAaBT0IhJglfvI76xlGkV+ksMSNp8HFDDvBPQ265e3805LdR3mAW1wFbIrK6HbQuP2u/4LJ8HTJrj+ZZiswDHitxk0YQOnC36AMedVledO8B8GmyHZkZNdZUuOeVyPOVMQzMbTxTD4DL8rmIRXWDV0Su/zVyvUGVzvQvQ/43Q/6cIe+EhaEd23lZybVu0d/eOV2W3wwsj+iPhouAB1yWv9lSBIYshRpMRmb3EYNucM03jvxICzfGBGF2/HJMDqwuxnmNmST6hYEB4NPAa32aTPBpMgF4OeJnLwUe1D4MUCGor9KZhjuUW0YE8ixrEF/+2vBv8/kCX7IUusgA0vZNQlywuly9ST8wHxmt34G8w7XobdcLVPHzNSMZQmKGu4HNSBxova8E+HBEtgJpgxjzQnuUsZz4LNvfHh9PdJL10PzlY8AV7VmIkAHZE/42Bh/Sl3y+yDDxoKsKLxjyFzWhT5MTLouFJYAeBL8XcW00F2a2y/LzSgaEYSSobRjpAU49y9eIxz85cEvbtYPAMz5NWjpIGHFvRWdRJKjd47L8u8DDSMcsY6bL8llGMK+1/098mrS4SWF22k5r1rSd+UGnBZ8mx12WX4O0ayxE+CbQkshxEvzH3LUh4Jr2ixORFKfG4XYDKcOnyYDL8vdYeh1yzJBXSV2OylB9muxxWf4J7AzO25GBo8GNwGd9JK3qJFkQM5InfZpsjsjamYPe2W7Qsj4+TY66LJ8P/Camg2SCNCOxZoYWfJoccVm+CJlhYkTdvPBObiEeKvS5LJ/r02RH4dpXib//pWV9vQdxmzQuqeiP4tPkhE+TE4qK5XJ1ihWzdEQYRbUpHmBq8T8+TQZiBtJlnCIbBr6jyAEIfvi9isrs4Hl0DZ8m+5FMUgwrkfQNZGaO0XQ/naTjF0b0+n2abC0T9ABPlQkKTAL2RoLSM5HMkL/SkI8VqSLbUSEmbPBTQ365IR8NzygytX+GQfkLisrM4CqDpOPLZpFjtMV3RXqAx9AtGcQP73dZfthl+ZJgkaPhpRhRLap2lhhWBie6imGsCDO9VteJFjtL2GvItdRqLXerwOsV2QOKDBC3CyidBQLLnRQOYxmtW32aHInI6AmWuCmm0EaC1BL+7KSAViVtW8Sqc1hYKVw1cO8SnRrZWGC9h0OGvMif0GO/Sq53VUIGKpYMGQZ+GJG1s4L4ALYAcctiRcO1JdebNFLAG4hUbiNMRgpojzupyna14TrAqsh3g39YCv8FXmPIrRpVkzBoaqnyKYqsFk7Wn5UtE2qwwqeJtYoCaBYzNygqsdrRSssV7YFmOvcqDIuKMA846CosBRhnzHiVIa87eIy5Wxy8EC3lvLZGZq/BBuzQociuWLBepLksxafJcZ8mNyA1Ey3DUcYkZCmANiqMM3acY8jPNuTtWN/XESGQ3k/cTVwU+mItwmBvFcaLLLMUoGQ/iU+T/T5NrkIsfD12oFpkscvyT1lK47RQZaWBhRUwx5YKxdDKAmbNrALnY6d2R8sW4gtZi9wd0s8m0U1XPk2O+DRZAbwOqXpqBZ8i1uKzGLULfCW82lI4DelGytiKOSrXNkLmUltV0PFCxlDc26WorA/xSm1CTHWXpQfcYSk0MHcmhgLhdi/7NOZjzywzR/uAHaSWz3SsAuelhrzIWwy5VrjTBrr2AWwx8SxaL2DuL1KwjGQY+JWh08Q0kiJelil/xNLD3osRY6qlYFDF99ZciW7MZt2kkkviZR2XNnjFFgmWMceQP2rIKxHuWVtrtsBl+dWKPIqXpSWay/Ws11eGtFDLSKBZuLEyCLF6hbVs5H2G3KJKwNmNGECjm8XEKkbfQCsC9hWqzlFCwe1zisqAr7BVuAZr0fvStzsoLzypyLQK/wh6XJZPc/YGlSbBJbrQUIv5rb+LXG+w7P/A5aobY3Tree805Fu0tnWyingj8ZQs6HWI2oT6xEpFZTJwTzDeumizcK1ERg9SQd3nsnyby/IrtRtyslllB/oNDCgFICubkADbnCxnLsOaBU6HwL3O6G9hPW+Rn6PHJtOA3a5kj0WIIe9H4oQYg8heEA3NXS2t5YQ6hRbE9yHV8rpo76GW0RVdgwXhD5flQ8jyhGKnfgMwC9tP1oKme9APcgCYDQy6LH+Q1u22U4NM41xNGEZL7UVaz1aFujOJdj+Vt9962SvzFfSVE9ORvesg2cqnkKC+Sgx5te9sNbPWaZehZ0+XuyzfHWLil5xYTNKLWPDiwt887E50AGVbpZdjX6zRqMFsWn/fMhCwO6gVmFeZBf5tyK3faOLi5wE0UI2+nZBa1Q7jKNKHvNMqBrLCVzs55XxFFu07oV5hrfb4UZ2wAP1earm4PdQMYhRy4AMVRhtr22UnWKlnyx2r4t4cNORWvFbEMqhJo/DHV2Hv/67DUp8mVQ2vk8zhWvSM1CTg/hrlBe09TK7Trj2IS2VVbC02A+/21XYwPg1cge6HxliPfmCFtuQabCOxZqJGdk/b8171JYJ9P2B3rhZCXWspciaBVdPSOABc5tOkksGFWVFzD9V3E4L4z2g6yKy3zergQW55PZXbdaKXvcIfRPYDz7Q+UGAIWcO/uW5aMBhK6uRsqM8jvxu76UHgx8DtXrZ7noUs2PsoIxvC2t4Luu9b5fMgdYdVyAak9nOpzIGiwLnYKxmqzG4j8Gmy1WX5vdQ7nK5x4N6do/D/J9Nh23rZjrsU2Y4RYyayclirofRit+sFVHxXLSc4ulPHRk5H/PO3cqrz/gExjOeAvV7ZpDIaCv5m47dzZH/9E/FPjVMVJ9tuZyDL6nuBNwVR41CKHHi4TpFtrHBy0mbsgIxh4DBybkCtwXm0jDjmdJxxThecHE5XnEkPVYh5u85/AGTZVQ3G/pjOAAAAAElFTkSuQmCC" /></g></g></svg></div></div><div class="sns flex"><div class="item lineShare"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.54 27.54"><defs><style>.line_menu_svg1{fill:#00c300}.line_menu_svg2{fill:#fff}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 29</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><rect class="line_menu_svg1" x="0.01" y="0.01" width="27.52" height="27.51" rx="4.99" transform="translate(-0.02 27.52) rotate(-89.92)" /><path class="line_menu_svg2" d="M23.8,12.56c0-4.49-4.5-8.14-10-8.14s-10,3.65-10,8.14c0,4,3.56,7.39,8.38,8,.33.07.77.21.89.49a2.15,2.15,0,0,1,0,.91s-.12.71-.15.86-.2,1,.87.54a32.31,32.31,0,0,0,7.88-5.82h0A7.28,7.28,0,0,0,23.8,12.56ZM9.85,15.23h-2a.53.53,0,0,1-.53-.53v-4a.53.53,0,0,1,.53-.53.52.52,0,0,1,.52.53v3.46H9.85a.52.52,0,0,1,.52.52A.52.52,0,0,1,9.85,15.23Zm2.06-.53a.53.53,0,0,1-.53.53.52.52,0,0,1-.52-.53v-4a.52.52,0,0,1,.52-.53.53.53,0,0,1,.53.53Zm4.79,0a.52.52,0,0,1-.35.5.51.51,0,0,1-.17,0,.53.53,0,0,1-.42-.21l-2-2.78V14.7a.53.53,0,0,1-.53.53.52.52,0,0,1-.52-.53v-4a.52.52,0,0,1,.35-.5.51.51,0,0,1,.17,0,.53.53,0,0,1,.42.21l2,2.78V10.72a.53.53,0,0,1,.53-.53.52.52,0,0,1,.52.53Zm3.23-2.52a.53.53,0,0,1,0,1.06H18.46v.94h1.47a.52.52,0,0,1,.52.52.52.52,0,0,1-.52.53h-2a.53.53,0,0,1-.53-.53v-2h0v-2h0a.53.53,0,0,1,.53-.53h2a.52.52,0,0,1,.52.53.52.52,0,0,1-.52.52H18.46v.94Z" /></g></g></svg></div><div class="item twShare"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.91 22.68"><defs><style>.tw_menu_svg1{fill:#55acee}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 31</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path class="tw_menu_svg1" d="M27.91,2.68a11.38,11.38,0,0,1-3.29.91A5.77,5.77,0,0,0,27.14.42,11.7,11.7,0,0,1,23.5,1.81a5.72,5.72,0,0,0-9.9,3.92A6.24,6.24,0,0,0,13.74,7a16.29,16.29,0,0,1-11.8-6A5.74,5.74,0,0,0,3.71,8.69,5.82,5.82,0,0,1,1.12,8v.07a5.72,5.72,0,0,0,4.59,5.61,5.71,5.71,0,0,1-1.5.2,5.49,5.49,0,0,1-1.08-.1,5.73,5.73,0,0,0,5.35,4,11.53,11.53,0,0,1-7.11,2.45A12.3,12.3,0,0,1,0,20.11a16.23,16.23,0,0,0,8.78,2.57c10.53,0,16.29-8.72,16.29-16.29,0-.25,0-.5,0-.74A11.71,11.71,0,0,0,27.91,2.68Z" /></g></g></svg></div><div class="item fbShare"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.54 27.54"><defs><style>.fb_menu_svg1{fill:#3b5998}.fb_menu_svg2{fill:#fff}</style></defs><title>\u30A2\u30BB\u30C3\u30C8 30</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><rect id="Blue" class="fb_menu_svg1" width="27.54" height="27.54" rx="1.52" /><path id="f" class="fb_menu_svg2" d="M19,27.54V16.88h3.58l.54-4.16H19V10.07c0-1.21.34-2,2.06-2h2.2V4.32a29.78,29.78,0,0,0-3.2-.16c-3.18,0-5.35,1.94-5.35,5.49v3.07H11.12v4.16h3.59V27.54Z" /></g></g></svg></div></div></div></div>';

      $wrap.append(html);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      log('set');

      // this.$contents.on('click', function(e){e.stopPropagation();});
      this.$open.on('click', function (e) {
        // this.$open.on('touchstart', function(e){

        self.open.call(self, this);
      });
      // this.$close.on('touchstart', this.close.bind(this));
      this.$close.on('click', this.close.bind(this));
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Menu/Render.es6":
/*!**************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Menu/Render.es6 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderBase2 = __webpack_require__(/*! ./RenderBase.es6 */ "../../src/js/src/View/UI/Common/Menu/RenderBase.es6");

var _RenderBase3 = _interopRequireDefault(_RenderBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

var Render = function (_RenderBase) {
  _inherits(Render, _RenderBase);

  function Render($target) {
    _classCallCheck(this, Render);

    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));

    _this.$target = $target;
    _this.$bg = $target.find('.list .bg');
    _this.$text = $target.find('.list .menuText');
    _this.$textInner = $target.find('.list .textInner');
    _this.$animItem = $target.find('.animItem');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {

      TweenMax.set(this.$target, { x: '0%', width: '0%' });
      TweenMax.set(this.$animItem, { x: -20 * 2, y: 5 * 2, opacity: 0 });

      TweenMax.set(this.$bg, { scaleX: 0, scaleY: 0.1, 'transform-origin': '0% 50%' });
      TweenMax.set(this.$text, { opacity: 0 });
      TweenMax.set(this.$textInner, { opacity: 1, x: 0, y: 0 });
      this.$textInner.removeClass('runner');
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      // TweenMax.set(this.$animItem, {'will-change': 'transform'});

      var tl = new TimelineMax();

      tl.add(function () {

        _this2.$target.show();
      }, 0.0).to(this.$target, .5, {
        width: '100%',
        ease: Expo.easeInOut
      }).add(function () {

        var cb = function cb($t, index) {

          var tl = new TimelineMax({ delay: 0.03 * index });

          tl.to($t, .5, {
            scaleX: 1,
            ease: Expo.easeOut
          }).to($t, .6, {
            scaleY: 1,
            ease: Expo.easeOut
          }, 0.25).add(function () {
            _this2.$text.eq(index).css('opacity', 1);
            _this2.$textInner.eq(index).addClass('runner');
          }, 0.45);
        };

        _this2.$bg.each(function (index, el) {

          cb($(el), index);
        });
      }, 0.3).add(function () {

        _this2.$animItem.each(function (index, el) {

          TweenMax.to($(el), .4, {
            x: 0,
            y: 0,
            z: 0,
            opacity: 1,
            delay: 0.05 * index,
            ease: Expo.easeOut,
            onStart: function onStart() {
              TweenMax.set($(el), { 'will-change': 'transform' });
            },
            onComplete: function onComplete() {
              // TweenMax.set($(el), {'clearProps': 'will-change'});
              $('html').addClass('is-fixed');
            }
          });
        });
      }, 0.3 + 0.5);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this3 = this;

      var tl = new TimelineMax();

      tl.add(function () {

        $('html').removeClass('is-fixed');

        var cb = function cb($t, index) {

          var tl = new TimelineMax({ delay: 0.01 * index });

          tl.to($t, .3, {
            scaleY: 0.1,
            ease: Expo.easeOut
          }, 0.0).to($t, .3, {
            scaleX: 0,
            ease: Expo.easeOut,
            onStart: function onStart() {
              TweenMax.set($t, { 'transform-origin': '100% 50%' });
            }
          }, .3).add(function () {
            _this3.$textInner.eq(index).removeClass('runner');
            TweenMax.to(_this3.$textInner.eq(index), .3, {
              x: 60 * 2,
              y: -1 * 2,
              opacity: 0,
              ease: Expo.easeOut
            });
          }, 0.1);
        };

        _this3.$bg.each(function (index, el) {

          cb($(el), index);
        });
      }, 0.0).add(function () {

        _this3.$animItem.each(function (index, el) {

          TweenMax.to($(el), .4, {
            x: 20 * 2,
            y: -5 * 2,
            z: 0,
            opacity: 0,
            delay: 0.05 * index,
            ease: Expo.easeOut,
            onComplete: function onComplete() {
              TweenMax.set($(el), { 'clearProps': 'will-change' });
            }
          });
        });
      }, 0.1).to(this.$target, .5, {
        x: '100%',
        ease: Expo.easeInOut,
        onComplete: function onComplete() {

          _this3.$target.hide();
          _this3.setup();

          $('html').removeClass('is-fixed');
        }
      }, 0.5);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}(_RenderBase3.default);

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Menu/RenderBase.es6":
/*!******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Menu/RenderBase.es6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  UIBase
//
// ------------------------------------------------------------

var UIBase = function (_Base) {
  _inherits(UIBase, _Base);

  function UIBase() {
    _classCallCheck(this, UIBase);

    var _this = _possibleConstructorReturn(this, (UIBase.__proto__ || Object.getPrototypeOf(UIBase)).call(this));

    _this.$target = $('.target');

    return _this;
  }

  _createClass(UIBase, [{
    key: 'show',
    value: function show() {

      this.$target.show();
    }
  }, {
    key: 'hide',
    value: function hide() {

      this.$target.hide();
    }
  }]);

  return UIBase;
}(_Base3.default);

exports.default = UIBase;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Orientation/Controller.es6":
/*!*************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Orientation/Controller.es6 ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import Render from './Render.es6';

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.name = 'Orientation';

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // this.append();

      // this.r = new Render(this.$contents);

    }
  }, {
    key: 'append',
    value: function append() {

      var $wrap = $('#inner');
      var html = '<div id="landscape"><div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.8 45.24"><defs><style>.logo_svg1{fill:#d0b263}.logo_svg2{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:.98px}</style></defs><title>logo</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="Header"><path class="logo_svg1" d="M4.91,17.22c-1.9.16-3-.87-3-2.6V12.86l2-.17v1.79c0,.68.36,1,1,.94a1,1,0,0,0,1-1.1V5.91L8,5.73V14A3.09,3.09,0,0,1,4.91,17.22Z" /><path class="logo_svg1" d="M9.59,16.57v-11l2.12-.18v11Z" /><path class="logo_svg1" d="M20.12,15.67v-8l-.46,2.43-1.21,5.68L16.84,16,15.7,10.48l-.45-2.35v8l-1.9.16v-11L16.21,5l1.18,5.47.36,2,.37-2.06,1.16-5.67,2.84-.24v11Z" /><path class="logo_svg1" d="M30.31,14.81l-3.59.3v-11l3.55-.3c1.56-.14,2.51.59,2.51,2.1V7.13a1.82,1.82,0,0,1-1.35,2,1.56,1.56,0,0,1,1.41,1.75v1.43A2.44,2.44,0,0,1,30.31,14.81Zm.44-8.54c0-.5-.22-.78-.75-.73l-1.15.1v3l1.06-.09a.82.82,0,0,0,.84-.93Zm0,4.59c0-.58-.3-.85-.84-.8l-1.1.09v3.1l1.2-.1c.53-.05.74-.34.74-.86Z" /><path class="logo_svg1" d="M34.33,14.47v-11L39.77,3V4.79l-3.32.28V7.79l2.29-.19V9.21l-2.29.2v3.05l3.32-.29V14Z" /><path class="logo_svg1" d="M45.63,13.5l-.37-2.12-2,.17-.41,2.19-2,.17L43.14,2.74l2.37-.2,2.28,10.78ZM44.3,5.61l-.77,4.3L45,9.79Z" /><path class="logo_svg1" d="M55.8,12.64v-8l-.46,2.43-1.21,5.67-1.61.14L51.38,7.44l-.45-2.35v8L49,13.21v-11L51.89,2l1.18,5.47.36,2L53.8,7.4,55,1.73l2.83-.24v11Z" /><path class="logo_svg1" d="M11.91,23.26V44.81l-5,.43V23.69L2,24.11V19.85l14.86-1.27v4.26Z" /><path class="logo_svg1" d="M27.83,43.46l-.89-5-4.74.41-1,5.16-4.66.39L22,18.14l5.59-.47L32.89,43ZM24.69,24.89,22.89,35l3.41-.29Z" /><path class="logo_svg1" d="M43.81,32.21l-3.25.28v9.88l-5,.43V17l8.23-.7c3.78-.32,6.07,1.58,6.07,5.3v4.34C49.88,29.6,47.59,31.89,43.81,32.21Zm1.25-10.14c0-1.28-.52-1.89-1.77-1.79l-2.73.23v8.26l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path class="logo_svg1" d="M55.77,33.87,54.4,34l-1.49-7.28V15.51l4.38-.37v11.2ZM53.2,41.3V36.8L57,36.48V41Z" /><path class="logo_svg2" d="M3.53,16.26c-1.89.16-3-.86-3-2.59V11.9l2-.17v1.8c0,.67.35,1,1,.93a1,1,0,0,0,1-1.1V5l2.13-.18v8.27A3.09,3.09,0,0,1,3.53,16.26Z" /><path class="logo_svg2" d="M8.21,15.61v-11l2.12-.18v11Z" /><path class="logo_svg2" d="M18.74,14.72v-8l-.46,2.43-1.21,5.67L15.46,15,14.32,9.52l-.45-2.35v8L12,15.29v-11l2.85-.25L16,9.54l.36,2,.38-2.06,1.16-5.67,2.83-.24v11Z" /><path class="logo_svg2" d="M28.93,13.85l-3.59.31v-11l3.55-.3c1.56-.13,2.52.59,2.52,2.11V6.17a1.83,1.83,0,0,1-1.35,2,1.57,1.57,0,0,1,1.4,1.75v1.43A2.44,2.44,0,0,1,28.93,13.85Zm.44-8.54c0-.5-.22-.77-.75-.73l-1.14.1v3l1.06-.09a.83.83,0,0,0,.83-.93Zm0,4.59c0-.57-.29-.84-.84-.8l-1.09.09v3.1l1.19-.1c.53,0,.74-.34.74-.85Z" /><path class="logo_svg2" d="M33,13.51v-11l5.44-.46V3.83l-3.32.29V6.83l2.29-.19V8.25l-2.29.2V11.5l3.32-.28v1.83Z" /><path class="logo_svg2" d="M44.25,12.55l-.37-2.13-2,.17-.41,2.19-2,.17L41.76,1.78l2.37-.2,2.28,10.78Zm-1.33-7.9L42.15,9l1.46-.12Z" /><path class="logo_svg2" d="M54.43,11.68v-8L54,6.15l-1.21,5.67L51.14,12,50,6.49l-.44-2.35v8l-1.9.16v-11L50.51,1l1.18,5.47.36,2,.38-2.06L53.59.78,56.43.54v11Z" /><path class="logo_svg2" d="M10.53,22.3V43.85l-5,.43V22.73l-4.94.42V18.89l14.86-1.27v4.27Z" /><path class="logo_svg2" d="M26.45,42.5l-.89-5-4.73.4-1,5.16-4.66.4,5.38-26.27,5.59-.48,5.34,25.36ZM23.32,23.93,21.51,34l3.41-.29Z" /><path class="logo_svg2" d="M42.43,31.26l-3.25.27v9.89l-5,.42V16l8.23-.7c3.78-.32,6.07,1.57,6.07,5.29V25C48.5,28.65,46.21,30.94,42.43,31.26Zm1.25-10.15c0-1.28-.52-1.89-1.77-1.78l-2.73.23v8.25l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path class="logo_svg2" d="M54.39,32.91,53,33l-1.48-7.28V14.55l4.37-.37v11.2Zm-2.57,7.43V35.85l3.77-.33V40Z" /><path d="M3.53,16.26c-1.89.16-3-.86-3-2.59V11.9l2-.17v1.8c0,.67.35,1,1,.93a1,1,0,0,0,1-1.1V5l2.13-.18v8.27A3.09,3.09,0,0,1,3.53,16.26Z" /><path d="M8.21,15.61v-11l2.12-.18v11Z" /><path d="M18.74,14.72v-8l-.46,2.43-1.21,5.67L15.46,15,14.32,9.52l-.45-2.35v8L12,15.29v-11l2.85-.25L16,9.54l.36,2,.38-2.06,1.16-5.67,2.83-.24v11Z" /><path d="M28.93,13.85l-3.59.31v-11l3.55-.3c1.56-.13,2.52.59,2.52,2.11V6.17a1.83,1.83,0,0,1-1.35,2,1.57,1.57,0,0,1,1.4,1.75v1.43A2.44,2.44,0,0,1,28.93,13.85Zm.44-8.54c0-.5-.22-.77-.75-.73l-1.14.1v3l1.06-.09a.83.83,0,0,0,.83-.93Zm0,4.59c0-.57-.29-.84-.84-.8l-1.09.09v3.1l1.19-.1c.53,0,.74-.34.74-.85Z" /><path d="M33,13.51v-11l5.44-.46V3.83l-3.32.29V6.83l2.29-.19V8.25l-2.29.2V11.5l3.32-.28v1.83Z" /><path d="M44.25,12.55l-.37-2.13-2,.17-.41,2.19-2,.17L41.76,1.78l2.37-.2,2.28,10.78Zm-1.33-7.9L42.15,9l1.46-.12Z" /><path d="M54.43,11.68v-8L54,6.15l-1.21,5.67L51.14,12,50,6.49l-.44-2.35v8l-1.9.16v-11L50.51,1l1.18,5.47.36,2,.38-2.06L53.59.78,56.43.54v11Z" /><path d="M10.53,22.3V43.85l-5,.43V22.73l-4.94.42V18.89l14.86-1.27v4.27Z" /><path d="M26.45,42.5l-.89-5-4.73.4-1,5.16-4.66.4,5.38-26.27,5.59-.48,5.34,25.36ZM23.32,23.93,21.51,34l3.41-.29Z" /><path d="M42.43,31.26l-3.25.27v9.89l-5,.42V16l8.23-.7c3.78-.32,6.07,1.57,6.07,5.29V25C48.5,28.65,46.21,30.94,42.43,31.26Zm1.25-10.15c0-1.28-.52-1.89-1.77-1.78l-2.73.23v8.25l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path d="M54.39,32.91,53,33l-1.48-7.28V14.55l4.37-.37v11.2Zm-2.57,7.43V35.85l3.77-.33V40Z" /></g></g></svg></div><div class="box"><div class="tit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.5 85.15"><title>text_landscape</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><path d="M166.46,30.39l-14.92,1.3L148,28.47V24.11l3.82-.34v2.42l1.68,1.53,13-1.13Zm-.7-14.83-17.09,1.49V13.23l17.09-1.5Z" /><path d="M190.42,24.54l-3.6,4.07-3.51.3V25l1.56-.13,1.7-1.87v-7l-2.49-2.25-2.24.2V25.6l-2.58,3.67-5.62.49-3.39-3.69V15.5l4.64-5.09,10.84-.95,4.69,4.26ZM178.19,24V14.17l-1.72.16L174,17v7l1.38,1.64,1.79-.15Z" /><path d="M214.05,13l-1.67.15v6.29L207,26.48l-9.69.85V23.44l7.88-.69,3.26-4.32V13.48l-9,.79V20.1l-4,.35V14.61l-1.7.15v-4l1.7-.14V8.46l4-.35v2.15l9-.79V7.32l4-.35V9.12L214.05,9Z" /><path d="M237.19,8.76l-3.35.3-3.69,2.58V24.45l-4,.35V14.46l-5.28,3.7-4.39.38v-4l3.33-.29,12.94-9.1,4.42-.39Z" /><path d="M258.92,15.8l-5,.44-8.45-2.84v9.71l-3.91.34v-19l3.91-.35V9.21l9,3,4.43-.39Z" /><path d="M269.27,21.39l-3.82.34L262.53,19V2.25l3.82-.34v15l.86.79,2.06-.18Zm13.49-7.65-2.06.18v3.76l-2.85,3-5.36.47-3-2.56V14.2l3-3.23,4.37-.38V6.09l-8,.7V3l8-.7V.34L280.7,0V1.92l2.06-.18V5.57l-2.06.18v4.5l2.06-.18Zm-5.93,2.83V14.26l-2.8.24-.93.9v1.52l.93.78,1.83-.17Z" /><path d="M20,83.4l-4.82.43-4.82-5.15-5.27,6-5,.44v-4l3.26-.29L13.4,69.65v-.72L.16,70.08V66.24L18,64.68V70l-5,5.76Z" /><path d="M41.83,71.55l-8.53,6.5,2.37,4-4.55.4-5.74-10,4.32-.38L31.44,75l6.38-5v-3L22.18,68.29v-4l19.65-1.72Z" /><path d="M64.08,72.12,46,73.7V69.61L64.08,68Z" /><path d="M86.69,71.43l-5,.44L73.29,69v9.71l-3.92.34v-19l3.92-.35v5.14l9,3,4.44-.39Z" /><path d="M108.12,67,102,76.23l-11.84,1v-4l9.85-.87,4.14-6.11V61.8L89.29,63.1v-4l18.83-1.65Z" /><path d="M128.27,64.4l-2.09.18v9.53l-3.44.3V64.88l-2.26.2L117.2,74.9l-3.89.34V71.8l1.51-.14,2.06-6.27-3.69.33V62.25l9.55-.83V59.74l3.44-.3v1.68l2.09-.18Z" /><path d="M151.53,65.17l-6.81,7.32-11.95,1v-4l10.32-.91,4.46-4.75V53.21l4-.35Zm-9.87-6.24-8.58.75v-4l8.58-.75Z" /><path d="M175.56,61.94l-4.64.4.59,2.44-3.81.33-.61-2.43-5.75.5-1.47,1.42v2.06l1.25,1,13.55-1.19v3.78l-15.18,1.33-3.49-3V63.1l3.85-3.52V56.84l-4.62.4v-3.8l4.62-.41v-1.9l4-.34v1.9l11.07-1v3.8l-11.07,1v2.67l11.75-1Z" /><path d="M180.8,63l-.59,6.57h-2l.59-6.57Zm10.89-7.54L189,60.92l1.07-.09v8.49l-2.45.21V62.81l-2-.87.14-.26-1.16.23-.11-.85-.93.09v8.73l-2.4.21V61.36l-2.69.23V59l2-3-1.95-.54V52.51L181,48.58l2.15,1-2.29,3.62,1.23.34,2.53-3.91,2.13,1-5.14,8.17,2.63-.23-.23-2,2-.44.48,4.19,3-5.86ZM186.5,68.88l-2,.36-.57-6.47,2-.36Zm4.85-20.23-3.78,7.62-2.38-1,3.87-7.6Zm9.21,17.14-1,2.92-6.75-1.88-.25,2-2.22-.12,1.36-11.33,2.29.08-.79,6.34,1.45.41V54.36l-3.15.27V51.94l1.38-.12L192,48.25l2.29-.74,1,4.1,1.36-.12,1-4.28,2.29.35L199,51.28l1.13-.1v2.7l-2.87.25V57.5l2.4-.21V60l-2.4.21v4.64Z" /><path d="M209.7,67.17l-3.4.29-2.92-2.71V48l3.83-.33v15l.86.76,1.63-.14Zm13.55-1.35-10.41.91-3-2.79V59.3l3.76-.33v2.72l1.2,1.07,8.48-.74Zm-.11-14.45-13.31,1.16v-3.8l13.31-1.16Z" /><path d="M245.26,59.48l-4.55,5-9,.79-4.58-4.15V45.43l3.85-.34v14l2.36,2.12,5.74-.5,2.31-2.53V55.27l3.9-.34Z" /><path d="M267.94,47.09l-10.35.9-3.39,3.4v5.34l3.19,2.44,8.6-.76v3.83l-10.16.89-5.48-4.48V50.3l2-1.85-4.67.41V45l20.31-1.78Z" /><path d="M289.82,60.15,274.9,61.46l-3.55-3.22V53.87l3.83-.33V56l1.67,1.53,13-1.14Zm-4.66-14.48L272,46.82V43l13.13-1.15ZM291,42.8l-4.8.42V40.07l4.8-.42Zm0,4.28-4.8.42V44.33l4.8-.42Z" /><path d="M304.48,46.74l-10.34.91V39.41l10.34-.91v1.74l-2.08.19v.63l2.08-.18v3.46l-2.08.18v.68l2.08-.18ZM314.92,58.3l-9.8.86V55.81l-4.26.37.88.94-4.07,3.37-2-2.07,2.54-2-3.24.29V48.21l18.63-1.63v8.49l-4.91.43v.86l6.27-.55Zm-15.12-17v-.64l-2.49.22v.64Zm1.74,1.93v-.68l-4.23.37v.68Zm-1.74,2.21v-.68l-2.49.22v.68ZM310,49.18v-.64l-11.52,1v.63Zm0,2.28v-.68l-11.52,1v.68Zm0,2.27v-.64l-11.52,1v.63Zm4.92-12.45-7,.61-.59,1.43-2.81-.93,2-4.79,2.88.82-.32.7,5.89-.51Zm-.59,4.17-8.49.74V43.63l8.49-.74Z" /><path d="M336.24,56.09l-6.29.55-11.72-6V45.13L330,36.91l6.29-.55v3.87l-5,.44L322,47.16v.72l9.37,4.77,4.91-.43Z" /><path d="M356.41,38.73l-3.08.27v.93l-7.83.69-.88,14.74-3.8.33L341.68,41l-1.5.13v-3.8l1.73-.15.11-1.94,3.82-.33-.11,1.93,7.56-.66V34.21l3.12-.27Zm3.08,15.33-9.71.85-3-2.77V48.48l3.87-.34V50.2l1,.95,7.88-.69Zm0-9.33-12.67,1.11V42.27l12.67-1.11Zm1.18-6.37-3.15.28v-4.8l3.15-.28Z" /><path d="M384.16,38l-4.07.35.41,6.51-11.84,1-.88,1v1.83l.88.78,13.13-1.14v3.8l-14.67,1.28L364,50.57v-4.8l3.31-3.6,9-.79-.18-2.72-12.25,1.07V35.91l12-1-.16-2.61,4-.35.18,2.61,4.3-.38Z" /><path d="M396.74,50.8l-5.43.48-3.49-3.23V32.39l3.83-.34V46.13l1.4,1.28,3.69-.32Zm10-2.87-3.83.34v-12L401.52,35,398,35.3V31.56l5.21-.45,3.51,3.27Z" /><path d="M420.5,46.14l-2.9,3.15-4.14.36L410.54,47V42.92l2.92-3.18,4.14-.36,2.9,2.69Zm-2.51-.8v-2L416.54,42l-2,.18-1.45,1.58v2l1.45,1.35,2-.18Z" /></g></g></svg></div><div class="img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.99 193.43"><defs><style>.landscape_svg1,.landscape_svg2,.landscape_svg3,.landscape_svg8{fill:none;stroke:#000;stroke-width:3px}.landscape_svg1,.landscape_svg2,.landscape_svg3{stroke-miterlimit:10}.landscape_svg2{stroke-dasharray:5.62 5.62}.landscape_svg3{stroke-dasharray:6.02 6.02}.landscape_svg4{fill:#ccc}.landscape_svg5{fill:#4d4d4d}.landscape_svg6{fill:#ffeb01}.landscape_svg7{fill:gray}.landscape_svg8{stroke-linejoin:round}.landscape_svg9{fill:#333}.landscape_svg10{fill:#1a1a1a}</style></defs><title>landscape</title><g id="\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2"><g id="content"><polyline class="landscape_svg1" points="4.49 146.73 1.5 146.99 1.5 143.99" /><line class="landscape_svg2" x1="1.5" y1="138.37" x2="1.5" y2="62.55" /><polyline class="landscape_svg1" points="1.5 59.74 1.5 56.74 4.49 56.48" /><line class="landscape_svg3" x1="10.49" y1="55.96" x2="175.5" y2="41.52" /><polyline class="landscape_svg1" points="178.5 41.26 181.49 41 181.49 44" /><line class="landscape_svg2" x1="181.49" y1="49.61" x2="181.49" y2="125.44" /><polyline class="landscape_svg1" points="181.49 128.24 181.49 131.24 178.5 131.5" /><line class="landscape_svg3" x1="172.5" y1="132.03" x2="7.49" y2="146.47" /><polygon class="landscape_svg4" points="142.12 185.54 51.87 193.44 51.87 13.45 142.12 5.55 142.12 185.54" /><polygon class="landscape_svg5" points="136.62 180.04 46.37 187.94 46.37 7.95 136.62 0.05 136.62 180.04" /><polygon class="landscape_svg6" points="130.81 151.97 52.18 158.85 52.18 21.92 130.81 15.04 130.81 151.97" /><path class="landscape_svg7" d="M99.1,164.17,83.89,165.5a5.3,5.3,0,0,0-4.75,5.17A4.28,4.28,0,0,0,83.89,175l15.21-1.33a5.29,5.29,0,0,0,4.75-5.16A4.29,4.29,0,0,0,99.1,164.17Z" /><path class="landscape_svg8" d="M175.13,25.08a15.83,15.83,0,0,0-17.55-16l-3.53.31" /><polyline class="landscape_svg8" points="160.32 15.1 154.05 9.38 160.32 2.56" /><path class="landscape_svg8" d="M11,162.89a15.82,15.82,0,0,0,17.55,16l3.53-.31" /><polyline class="landscape_svg8" points="25.81 172.87 32.08 178.59 25.81 185.41" /><polygon class="landscape_svg9" points="136.99 0 141.99 6 141.99 185 136.62 180.04 136.99 0" /><polygon class="landscape_svg10" points="46.37 187.94 51.87 193.44 142.12 185.54 136.62 180.04 46.37 187.94" /></g></g></svg></div></div></div>';

      $wrap.append(html);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Transition/Controller.es6":
/*!************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Transition/Controller.es6 ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/View/UI/Common/Transition/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

var _Controller = __webpack_require__(/*! ./NigiyakaC/Controller.es6 */ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

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

    _this.$section = $('.sectionWrap');
    _this.urlList = ['top', // 0
    'talk', // 1
    'warikan', // 2
    'tap', // 3
    'tour', // 4
    'cm'];
    _this.$coverWrap = $('.coverWrap');
    _this.$cover = $('.cover');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      this.$tit = $('.id_top .section01 .titWrap .tit');
      this.$subTit = $('.id_top .section01 .titWrap .subTit');
      this.$nigiyakaWrap = $('.id_top .section01 .titWrap .nigiyakaWrap');
      this.$budge = $('header.notLower .budge');
      this.$menu1 = $('header.notLower .menus .menu');
      this.$menu2 = $('header.notLower .menus .line');
      this.$menu3 = $('header.notLower .menus .tw');
      this.$menu4 = $('header.notLower .menus .fb');
      this.$footer = $('#footer');

      gb.nc = this.nc = new _Controller2.default();

      this.isUEv = true;
      this.isUpdate = false;

      var o = gb.urlm.q.parse();
      if (o.page == undefined) this.onReady();
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'show',
    value: function show(cb, url, toTop, isMenu) {
      var _this2 = this;

      var isBB = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var prev = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;


      var dur = 0.4;
      var delay = .5;
      if (isMenu) delay = 0.0;

      gb.menu.close(false);

      // to Top
      if (toTop) {

        var tl = new TimelineMax({ delay: 0.0 });

        tl.add(function () {
          _this2.$coverWrap.show();
        }, 0.0)
        // x
        .set(this.$coverWrap, { x: '0%', width: 0, 'overflow': 'hidden', opacity: 1 }, 0.0).set(this.$cover, { x: '0%', width: gb.r.w }, 0.0)
        // naname
        // .set(this.$coverWrap, {x: -100 * 3, y: 30 * 3, opacity: 0, width: gb.r.w, 'overflow': 'hidden'}, 0.0)
        // .set(this.$cover, {x: '0%', width: gb.r.w}, 0.0)

        .add(function () {

          if (prev == null) {

            var o = gb.urlm.q.parse();
            var num = 0;
            if (o.page == 'talk') num = 1;
            if (o.page == 'warikan') num = 2;
            if (o.page == 'tap') num = 3;
            if (o.page == 'tour') num = 4;
            if (o.page == 'cm') num = 5;
            if (o.page == undefined) _this2.topHide();else if (o.page == 'tour' || o.page == 'cm') _this2.pageHide('lower', num);else _this2.pageHide('gameList', num);
          } else {

            var num = 0;
            if (prev == 'talk') num = 1;
            if (prev == 'warikan') num = 2;
            if (prev == 'tap') num = 3;
            if (prev == 'tour') num = 4;
            if (prev == 'cm') num = 5;
            if (prev == '/') _this2.topHide();else if (prev == 'tour' || prev == 'cm') _this2.pageHide('lower', num);else _this2.pageHide('gameList', num);
          }
        }, 0.0)
        // // x
        .to(this.$coverWrap, dur, {
          width: '100%',
          ease: Expo.easeInOut
        }, delay).add(function () {

          _this2.nc.show(true, cb.bind(_this2, url, isBB));
        }, delay + 0.0);
        // naname
        // .to(this.$coverWrap, dur, {
        //   x: 0,
        //   y: 0,
        //   opacity: 1,
        //   ease: Expo.easeOut,
        //   onComplete: ()=>{

        //     cb(url, isBB);

        //   }
        // }, delay)

        // no toTop
      } else {

        var tl = new TimelineMax({ delay: 0.0 });

        tl.add(function () {
          _this2.$coverWrap.show();
        }, 0.0)
        // x
        .set(this.$coverWrap, { x: 0 }, 0.0).set(this.$cover, { x: '0%', width: '0%' }, 0.0)
        // naname
        // .set(this.$coverWrap, {x: -100 * 3, y: 30 * 3, opacity: 0, width: gb.r.w, 'overflow': 'hidden'}, 0.0)
        // .set(this.$cover, {x: '0%', width: gb.r.w}, 0.0)

        .add(function () {

          if (prev == null) {

            var o = gb.urlm.q.parse();
            var num = 0;
            if (o.page == 'talk') num = 1;
            if (o.page == 'warikan') num = 2;
            if (o.page == 'tap') num = 3;
            if (o.page == 'tour') num = 4;
            if (o.page == 'cm') num = 5;
            if (o.page == undefined) _this2.topHide();else if (o.page == 'tour' || o.page == 'cm') _this2.pageHide('lower', num);else _this2.pageHide('gameList', num);
          } else {

            var num = 0;
            if (prev == 'talk') num = 1;
            if (prev == 'warikan') num = 2;
            if (prev == 'tap') num = 3;
            if (prev == 'tour') num = 4;
            if (prev == 'cm') num = 5;
            if (prev == '/') _this2.topHide();else if (prev == 'tour' || prev == 'cm') _this2.pageHide('lower', num);else _this2.pageHide('gameList', num);
          }
        }, 0.0)

        // // x
        .to(this.$cover, dur, {
          // x: '0%',
          width: '100%',
          ease: Expo.easeInOut
        }, delay).add(function () {

          _this2.nc.show(true, cb.bind(_this2, url, isBB));
        }, delay + 0.0);
        // naname
        // .to(this.$coverWrap, dur, {
        //   x: 0,
        //   y: 0,
        //   opacity: 1,
        //   ease: Expo.easeOut,
        //   onComplete: ()=>{

        //     cb(url, isBB);

        //   }
        // }, delay)
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this3 = this;

      var isFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


      var num = 0;

      var o = gb.urlm.q.parse();
      $('header').hide().removeClass('showSNS');

      var de = 0.0;
      if (isFirst) de = .5;
      if (isTop) de = 0;
      var dur = .4;

      log('page', o.page);

      // top
      if (o.page == undefined) {

        this.$section.eq(0).show();
        $('header.notLower').show().addClass('showSNS');

        // cover
        this.$cover.css({ 'background': 'url(/assets/resource/img/bgTop.jpg)', 'background-size': '100%' });

        TweenMax.set(this.$tit, { clearProps: 'all' });
        TweenMax.set(this.$subTit, { clearProps: 'all' });
        TweenMax.set(this.$nigiyakaWrap, {
          rotationZ: -4,
          x: 0,
          y: 0,
          opacity: 1
        });

        this.onReady();

        var showDelay = 0.0;
        var tl = new TimelineMax({ delay: de });

        tl.add(function () {
          _this3.$coverWrap.show();
          TweenMax.set(_this3.$coverWrap, { x: 0, width: gb.r.w, 'overflow': 'hidden' });
          TweenMax.set(_this3.$cover, { x: '0%', width: '100%' });

          gb.uic.timeline();
        }, 0.0).add(function () {

          $('body').css('opacity', 1);
        }, showDelay)

        // // x
        .to(this.$coverWrap, dur, {
          x: -gb.r.w,
          ease: Expo.easeInOut
        }, showDelay + 0.05).to(this.$cover, dur, {
          x: '100%',
          ease: Expo.easeInOut,
          onComplete: function onComplete() {
            _this3.$coverWrap.hide();
          }
        }, showDelay + 0.05)
        // naname
        // .to(this.$coverWrap, dur, {
        //   x: -gb.r.w,
        //   ease: Expo.easeInOut,
        // }, showDelay + 0.05)
        // .to(this.$cover, dur, {
        //   x: '100%',
        //   ease: Expo.easeInOut,
        //   onComplete: ()=>{
        //     this.$coverWrap.hide();
        //   }
        // }, showDelay + 0.05)

        .add(function () {

          _this3.topShow();
        }, showDelay + 0.2);
      } else {

        if (o.page == 'talk') this.$cover.css({ 'background': '#FFF9B2' });
        if (o.page == 'warikan') this.$cover.css({ 'background': '#FDD7BB' });
        if (o.page == 'tap') this.$cover.css({ 'background': '#ECF0B3' });
        if (o.page == 'tour') this.$cover.css({ 'background': '#F7B8BF' });
        if (o.page == 'cm') this.$cover.css({ 'background': '#E8E8E8' });

        // ready

        this.onReady();

        if (isFirst) {

          var tl = new TimelineMax({ delay: de });

          tl.add(function () {
            _this3.$coverWrap.show();
            // x
            TweenMax.set(_this3.$coverWrap, { x: 0 });
            TweenMax.set(_this3.$cover, { width: '0%' });
            // naname
            // TweenMax.set(this.$coverWrap, {x: 0, y: 0, opacity: 1});
            // TweenMax.set(this.$cover, {width: '100%'});

            $('body').css('opacity', 1);
          }, 0.0)
          // x
          .to(this.$cover, dur, {
            width: '100.1%',
            ease: Power2.easeOut
          }, 0.0)
          // naname
          // .to(this.$cover, dur, {
          //   x: 0,
          //   y: 0,
          //   opacity: 1,
          //   ease: Expo.easeOut,
          // }, 0.0)
          .add(function () {

            if (o.page == 'talk') {
              $('html').css({ 'background': '#FFF9B2' });
              $('header.notLower').show();
              num = 1;
            }
            if (o.page == 'warikan') {
              $('html').css({ 'background': '#FDD7BB' });
              $('header.notLower').show();
              num = 2;
            }
            if (o.page == 'tap') {
              $('html').css({ 'background': '#ECF0B3' });
              $('header.notLower').show();
              num = 3;
            }
            if (o.page == 'tour') {
              $('html').css({ 'background': '#F7B8BF' });
              $('header.lower2').show();
              num = 4;
            }
            if (o.page == 'cm') {
              $('html').css({ 'background': '#E8E8E8' });
              $('header.lower2').show();
              num = 5;
            }

            _this3.$section.hide();
            _this3.$section.eq(num).show();
          }, .1)

          // x
          .to(this.$coverWrap, dur, {
            x: gb.r.w,
            ease: Power2.easeOut,
            onComplete: function onComplete() {

              _this3.$coverWrap.hide();
            }
          }, .1)
          // naname
          // .to(this.$coverWrap, dur, {
          //   x: 100 * 3, y: -30 * 3, opacity: 0,
          //   ease: Expo.easeOut,
          //   onComplete: ()=>{

          //     this.$coverWrap.hide();

          //   }
          // }, .1)
          .add(function () {

            if (o.page == 'tour' || o.page == 'cm') _this3.pageShow('lower', num);else _this3.pageShow('gameList', num);
          }, .3);
        } else {

          var tl = new TimelineMax({ delay: de });

          tl.add(function () {
            _this3.$coverWrap.show();
            // x
            TweenMax.set(_this3.$coverWrap, { x: 0 });
            TweenMax.set(_this3.$cover, { width: '100.1%' });
            // naname
            // TweenMax.set(this.$coverWrap, {x: 0, y: 0, opacity: 1});
            // TweenMax.set(this.$cover, {width: '100%'});

            if (o.page == 'talk') {
              $('header.notLower').show();
              num = 1;
            }
            if (o.page == 'warikan') {
              $('header.notLower').show();
              num = 2;
            }
            if (o.page == 'tap') {
              $('header.notLower').show();
              num = 3;
            }
            if (o.page == 'tour') {
              $('header.lower2').show();
              num = 4;
            }
            if (o.page == 'cm') {
              $('header.lower2').show();
              num = 5;
            }
          }, 0.0)

          // x
          .to(this.$coverWrap, dur, {
            x: gb.r.w,
            ease: Power2.easeOut,
            onComplete: function onComplete() {

              _this3.$coverWrap.hide();
            }
          }, .1)
          // naname
          // .to(this.$coverWrap, dur, {
          //   x: 100 * 3, y: -30 * 3, opacity: 0,
          //   ease: Expo.easeOut,
          //   onComplete: ()=>{

          //     this.$coverWrap.hide();

          //   }
          // }, .1)
          .add(function () {

            if (o.page == 'tour' || o.page == 'cm') _this3.pageShow('lower', num);else _this3.pageShow('gameList', num);
          }, .3);
        }
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {

      // tapBtn ready
      var ookisa = 100;
      this.$t = $('.id_top .section .btns .btn');
      TweenMax.set(this.$t, { x: ookisa, y: ookisa, opacity: 0 });

      TweenMax.set(this.$tit, { opacity: 0 });
      TweenMax.set(this.$subTit, { opacity: 0 });
      // this.$nigiyakaWrap.css('width', 'auto');
      var w = 270 * gb.r.w / 375;
      this.$nigiyakaWrap.css('width', w);
      this.nw = w;
      TweenMax.set(this.$nigiyakaWrap, { width: 0 });
      TweenMax.set(this.$budge, { opacity: 0, scale: 1.5 });
      TweenMax.set(this.$menu1, { opacity: 0 });
      TweenMax.set(this.$menu2, { opacity: 0 });
      TweenMax.set(this.$menu3, { opacity: 0 });
      TweenMax.set(this.$menu4, { opacity: 0 });
      TweenMax.set(this.$footer, { opacity: 0 });

      TweenMax.set($('#wrapper .hidePage'), { opacity: 0 });
      TweenMax.set($('#wrapper .hideBtn'), { opacity: 0 });

      log('sfsf');

      // tapBtn ready
      var ookisa = 50;
      this.$mb = this.$menu1.add(this.$menu2).add(this.$menu3).add(this.$menu4);
      TweenMax.set(this.$mb, { x: ookisa, y: ookisa, opacity: 0 });
    }
  }, {
    key: 'topShow',
    value: function topShow() {
      var _this4 = this;

      var tl = new TimelineMax();

      tl
      // tit
      // .add(()=>{

      //   var len = 2;
      //   for (var i = 0; i < len; i++) {
      //     var $c = this.$tit.clone();
      //     var pos = this.$tit.get(0).getBoundingClientRect();
      //     var left = this.$tit.get(0).offsetLeft;
      //     var top = this.$tit.get(0).offsetTop;
      //     // var pos = this.$tit.offset();
      //     TweenMax.set($c, {left: left, top: top, 'position': 'absolute' ,opacity: 0});
      //     $('.section01 .titWrap').prepend($c);
      //   }


      //   $('.section01 .titWrap .tit').each((index, el)=>{

      //     var tl = new TimelineMax();
      //     tl
      //       .add(()=>{
      //         if (index!==len) TweenMax.set($(el), {opacity: .3})
      //         else TweenMax.set($(el), {opacity: 1})
      //         $(el).find('.in').addClass('runner')
      //       }, .1 * index)
      //       .add(()=>{
      //         if (index!==len) TweenMax.to($(el), .2, {opacity: 0, ease: Expo.easeOut})
      //       }, .1 * index + 0.3)

      //   });

      // }, 0.0)
      // tit
      .add(function () {

        var num = 5;
        TweenMax.set(_this4.$tit, { 'z-index': num + 1 });

        // clone
        var x = 0;
        var y = 0;
        for (var i = 0; i < num; i++) {

          x += 3;
          y += 3;
          var $clone = _this4.$tit.clone();
          var left = _this4.$tit.get(0).offsetLeft;
          var top = _this4.$tit.get(0).offsetTop;
          TweenMax.set($clone, { left: left, top: top, 'position': 'absolute', opacity: 0, 'z-index': num - i });
          TweenMax.set($clone.find('.in'), { x: x, y: y });
          _this4.$tit.parent().append($clone);
        }

        var tl = new TimelineMax();
        var $t = _this4.$tit.parent().find('.tit');
        var len = $t.length;

        tl.add(function () {

          $t.each(function (index, el) {

            TweenMax.set($t.eq(len - 1 - index), {
              opacity: 1,
              delay: index * .05
            });
          });
        }, 0.0).add(function () {

          var x = 0;
          var y = 0;

          $t.each(function (index, el) {

            if (index == len - 1) return;

            var $s = $t.eq(len - 1 - index);

            TweenMax.set($s, {
              opacity: 0,
              delay: index * .05,
              onComplete: function onComplete($ta, index) {
                $ta.remove();
              },
              onCompleteParams: [$s, index]
            });
          });
        }, 0.2);
      }, 0.0)
      // subTit
      .add(function () {

        TweenMax.set(_this4.$subTit, { opacity: 1 });
        _this4.$subTit.find('.in').addClass('runner');
      }, 0.3).to(this.$nigiyakaWrap, 0.6, {
        width: this.nw,
        ease: Expo.easeOut
      }, 0.5)

      // tapBtn¤Î±íÊ¾
      .add(function () {

        _this4.$t.each(function (index, el) {

          var ookisa = 0;
          TweenMax.to($(el), 1.0, {
            x: ookisa,
            y: ookisa,
            opacity: 1,
            delay: 0.1 * index,
            // ease: Expo.easeOut
            ease: Elastic.easeOut.config(.8, 0.5)
          });
        });

        // $('.new').each(function(index, el) {

        //   TweenMax.set($(el).find('polygon'), {transformOrigin: '50% 50%'});
        //   TweenMax.to($(el).find('polygon'), 5.0, {
        //     rotationZ: 360,
        //     repeat: -1,
        //     ease: Power0.easeNone,
        //   })

        // });

      }, -2.4 + 3.0)
      // menu btns
      .add(function () {

        _this4.$mb.each(function (index, el) {

          var ookisa = 0;
          TweenMax.to($(el), 1.0, {
            x: ookisa,
            y: ookisa,
            opacity: 1,
            delay: 0.1 * index,
            // ease: Expo.easeOut
            ease: Elastic.easeOut.config(.8, 0.5)
          });
        });
      }, -2.4 + 3.5)

      // budge
      .add(function () {

        // TweenMax.to(this.$budge, 1.0, {
        //   opacity: 1,
        //   scale: 1,
        //   ease: Expo.easeIn,
        // })

        TweenMax.set(_this4.$budge, { opacity: 1 });
        TweenMax.to(_this4.$budge, .4, {
          scale: 1,
          delay: 0.02,
          ease: Expo.easeOut
        });
        TweenMax.to(_this4.$footer, 1.0, {
          opacity: 1,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {}
        });

        // wiggle
        // var ta = new TimelineMax();
        // ta
        //   .add(()=>{

        //     var maxcnt = 25;
        //     var cnt = 0;
        //     var $t = $('.section01 .titWrap .tit');
        //     wiggle($t);

        //     function wiggle(selector){
        //       $(selector).each(function() {
        //         // wiggleProp(this, 'scale', 0.93, 1);
        //         // wiggleProp(this, 'rotation', -1, 1);
        //         wiggleProp(this, 'x', -15, 15);
        //         wiggleProp(this, 'y', -15, 15);
        //       })
        //     }

        //     function wiggleProp(element, prop, min, max) {
        //       // var duration = Math.random() * .01 + .01;
        //       var duration = .01;

        //       var tweenProps = {
        //         ease: Power1.easeInOut,
        //         onComplete: wiggleProp,
        //         onCompleteParams: [element, prop, min, max]
        //       };
        //       tweenProps[prop] = Math.random() * (max - min) + min;

        //       if (maxcnt>cnt) TweenMax.to(element, duration, tweenProps);
        //       else TweenMax.set($($t), {x: 0, y:0, scale: 1, rotation: -4});
        //       cnt++;
        //       log(cnt)
        //     }            

        //   }, 0.98)
      }, -2.4 + 4.0);
    }
  }, {
    key: 'pageShow',
    value: function pageShow(page, num) {
      var _this5 = this;

      if (page == 'gameList') {

        var tl = new TimelineMax();

        tl
        // tit
        .add(function () {

          var $t = _this5.$section.eq(num).find('.hidePage');

          TweenMax.set($t, { x: -20 * 2, y: 5 * 2, opacity: 0 });

          $t.each(function (index, el) {

            TweenMax.to($(el), .4, {
              x: 0,
              y: 0,
              opacity: 1,
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
          });

          $t = _this5.$section.eq(num).find('.hideBtn');
          var ookisa = 100;
          TweenMax.set($t, { x: ookisa, y: ookisa, opacity: 0 });
          $t.each(function (index, el) {

            TweenMax.to($(el), .4, {
              x: 0,
              y: 0,
              opacity: 1,
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.0)

        // menu btns
        .add(function () {

          _this5.$mb.each(function (index, el) {

            var ookisa = 0;
            TweenMax.to($(el), 1.0, {
              x: ookisa,
              y: ookisa,
              opacity: 1,
              delay: 0.1 * index,
              // ease: Expo.easeOut
              ease: Elastic.easeOut.config(.8, 0.5)
            });
          });
        }, .4)

        // budge
        .add(function () {

          TweenMax.set(_this5.$budge, { opacity: 1 });
          TweenMax.to(_this5.$budge, .4, {
            scale: 1,
            delay: 0.02,
            ease: Expo.easeOut
          });
          TweenMax.to(_this5.$footer, 1.0, {
            opacity: 1,
            ease: Power2.easeInOut,
            onComplete: function onComplete() {}
          });
        }, .4);
      } else {

        var tl = new TimelineMax();

        tl
        // tit
        .add(function () {

          var $t = _this5.$section.eq(num).find('.hidePage');

          TweenMax.set($t, { x: -20 * 2, y: 5 * 2, opacity: 0 });

          $t.each(function (index, el) {

            TweenMax.to($(el), .4, {
              x: 0,
              y: 0,
              opacity: 1,
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.0)

        // ui
        .add(function () {

          var $t = $('header.lower2').find('.hidePage');

          TweenMax.set($t, { x: -20 * 2, y: 5 * 2, opacity: 0 });

          $t.each(function (index, el) {

            TweenMax.to($(el), .4, {
              x: 0,
              y: 0,
              opacity: 1,
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
          });

          TweenMax.to(_this5.$footer, .4, {
            opacity: 1,
            ease: Power2.easeInOut,
            delay: 0.1 * ($t.length - 1),
            onComplete: function onComplete() {}
          });
        }, 0.3);
      }
    }
  }, {
    key: 'topHide',
    value: function topHide() {
      var _this6 = this;

      var tl = new TimelineMax();

      tl
      // tit
      .add(function () {

        TweenMax.to(_this6.$tit, 0.4, {
          x: 20 * 2,
          y: -5 * 2,
          opacity: 0,
          ease: Expo.easeOut
        });
      }, 0.0)
      // subTit
      .add(function () {

        TweenMax.to(_this6.$subTit, 0.4, {
          x: 20 * 2,
          y: -5 * 2,
          opacity: 0,
          ease: Expo.easeOut
        });
      }, 0.0).to(this.$nigiyakaWrap, 0.4, {
        width: 0,
        rotationZ: -4,
        x: this.nw,
        y: -20,
        opacity: 0,
        ease: Expo.easeOut,
        onComplete: function onComplete() {
          if (gb.tlt) gb.tlt.kill();
          if (gb.tlr) gb.tlr.kill();
          if (gb.tlr2) gb.tlr2.kill();
          $('.nigiyakaText div').removeClass('anim');
        }
      }, 0.0).add(function () {

        _this6.$t = $('.id_top .section .btns .btn');

        _this6.$t.not('.notHide').each(function (index, el) {

          var ookisa = 100;
          TweenMax.to($(el), .4, {
            x: ookisa,
            y: ookisa,
            opacity: 0,
            delay: 0.05 * index,
            ease: Expo.easeOut
          });
        });
      }, 0.0)
      // menu btns
      .add(function () {

        _this6.$mb.each(function (index, el) {

          var ookisa = 100;
          TweenMax.to($(el), .4, {
            x: ookisa,
            y: ookisa,
            opacity: 0,
            delay: 0.04 * index,
            ease: Expo.easeOut
          });
        });
      }, 0.2)
      // budge
      .add(function () {

        TweenMax.to(_this6.$budge, .4, {
          scale: .5,
          opacity: 0,
          ease: Expo.easeOut
        });
      }, 0.2);
    }
  }, {
    key: 'pageHide',
    value: function pageHide() {
      var _this7 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lower';
      var num = arguments[1];


      if (page == 'lower') {

        var tl = new TimelineMax();

        tl.add(function () {

          var $t = _this7.$section.eq(num).find('.hidePage');

          $t.each(function (index, el) {

            TweenMax.to($(el), .4, {
              x: 20 * 2,
              y: -5 * 2,
              opacity: 0,
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.0)

        // ui
        .add(function () {

          var $t = $('header.lower2').find('.hidePage');

          $t.each(function (index, el) {

            TweenMax.to($(el), .4, {
              x: 20 * 2,
              y: -5 * 2,
              opacity: 0,
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.3);
      } else {

        var tl = new TimelineMax();

        tl.add(function () {

          var $t = _this7.$section.eq(num).find('.hidePage');

          $t.each(function (index, el) {

            var ookisa = 100;
            TweenMax.to($(el), .4, {
              x: 20 * 2,
              y: -5 * 2,
              opacity: 0,
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.0).add(function () {

          var $t = _this7.$section.eq(num).find('.hideBtn');

          $t.not('.notHide').each(function (index, el) {

            var ookisa = 100;
            TweenMax.to($(el), .4, {
              x: ookisa,
              y: ookisa,
              opacity: 0,
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.0)
        // menu btns
        .add(function () {

          _this7.$mb.each(function (index, el) {

            var ookisa = 100;
            TweenMax.to($(el), .4, {
              x: ookisa,
              y: ookisa,
              opacity: 0,
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
          });
        }, 0.3)
        // budge
        .add(function () {

          TweenMax.to(_this7.$budge, .4, {
            scale: .5,
            opacity: 0,
            ease: Expo.easeOut
          });
        }, 0.3);
      }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this8 = this;

      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);

      var self = this;
      var toTop = false;

      var cb = function cb(url, isBB) {

        if (!$('html').hasClass('page_top') || self.isPageOut) {
          location.href = url;
          return;
        }

        var num = null;
        if (toTop) {
          num = 0;
          $('html').css({ 'background': 'url(/assets/resource/img/bgTop.jpg)', 'background-size': '100%' });
          if (!isBB) gb.urlm.switchURL('pushstate', '/');
        }
        if (gb.u.s.isContain(url, 'talk')) {
          num = 1;
          $('html').css({ 'background': '#FFF9B2' });
          if (!isBB) gb.urlm.switchURL('query', { page: self.urlList[num] });
        }
        if (gb.u.s.isContain(url, 'warikan')) {
          num = 2;
          $('html').css({ 'background': '#FDD7BB' });
          if (!isBB) gb.urlm.switchURL('query', { page: self.urlList[num] });
        }
        if (gb.u.s.isContain(url, 'tap')) {
          num = 3;
          $('html').css({ 'background': '#ECF0B3' });
          if (!isBB) gb.urlm.switchURL('query', { page: self.urlList[num] });
        }
        if (gb.u.s.isContain(url, 'tour')) {
          num = 4;
          $('html').css({ 'background': '#F7B8BF' });
          if (!isBB) gb.urlm.switchURL('query', { page: self.urlList[num] });
        }
        if (gb.u.s.isContain(url, 'cm')) {
          num = 5;
          $('html').css({ 'background': '#E8E8E8' });
          if (!isBB) gb.urlm.switchURL('query', { page: self.urlList[num] });
        }

        self.$section.hide();
        self.$section.eq(num).show();

        // send ga
        log('send1');
        if (typeof ga === 'function' && $('html').hasClass('page_top')) {

          log('send2', location.href, location.search);
          // ga('send', 'pageview', location.href);
          // // ga('send', 'pageview', location.search);

          // ga('send', {
          //   hitType: 'pageview',
          //   title: 'test',
          //   location: 'https://jimbeam.fun/',
          //   page: 'index.html' + location.search
          // }); 

          // ga('send', {
          //   hitType: 'event',
          //   eventCategory: 'page_transition', //必須
          //   eventAction: 'click',  //必須
          //   eventLabel: 'index.html' + location.search,
          // })

          // gtag('config', 'GA_TRACKING_ID', {
          //   'page_title' : 'homepage',
          //   'page_path': '/home'
          // });
        }

        self.hide();
      };

      $('a').not('.notTransition').on('click', function (e) {
        e.preventDefault();
      });
      $('a').not('.notTransition').on('touchstart', function (e) {

        e.preventDefault();

        self.isPageOut = $(this).hasClass('pageOut');

        // sound
        if (gb.sound) gb.sound.a_tap.play();

        $(this).addClass('notHide');

        var href = $(this).attr('href');
        var color = $(this).data('color');
        var isMenu = $(this).data('menu');
        toTop = false;

        var bool = color == '#FFF9B2' || color == '#FDD7BB' || color == '#ECF0B3' || color == '#F7B8BF' || color == '#E8E8E8';
        var bool2 = !$('html').hasClass('page_top');
        if (bool && isMenu && bool2) color = 'toTop';

        if (color == 'toTop') {
          self.$cover.css({ 'background': 'url(/assets/resource/img/bgTop.jpg)', 'background-size': '100%' });
          toTop = true;
        } else if (color == 'toCraftsman') {
          self.$cover.css({ 'background': 'url(/tap/assets/img/craftsman/common/bg.png) no-repeat center center/cover', 'background-size': '100%' });
          toTop = true;
        } else {
          self.$cover.css('background', color);
          toTop = false;
        }

        // clearTimeout(this.Timer);
        // this.Timer = setTimeout(()=>{

        self.show(cb, href, toTop, isMenu);

        // },1000);
      });

      $(window).on('switchURL', function (e, cur, prev) {

        // if (!$('html').hasClass('page_top')) {}

        toTop = false;
        if (cur == '/') toTop = true;
        var isMenu = false;

        if (toTop) {
          _this8.$cover.css({ 'background': 'url(/assets/resource/img/bgTop.jpg)', 'background-size': '100%' });
        } else {
          if (gb.u.s.isContain(cur, 'talk')) var color = '#FFF9B2';
          if (gb.u.s.isContain(cur, 'warikan')) var color = '#FDD7BB';
          if (gb.u.s.isContain(cur, 'tap')) var color = '#ECF0B3';
          if (gb.u.s.isContain(cur, 'tour')) var color = '#F7B8BF';
          if (gb.u.s.isContain(cur, 'cm')) var color = '#E8E8E8';
          _this8.$cover.css('background', color);
        }

        _this8.show(cb, cur, toTop, isMenu, true, prev);
      });
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/Controller.es6":
/*!**********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Transition/NigiyakaC/Controller.es6 ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Controller = __webpack_require__(/*! ./canvas/Controller.es6 */ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/Controller.es6");

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
      this.c = new _Controller2.default($('.jimbeamCommon'), 'cvTrans');
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'show',
    value: function show() {
      var isTrans = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


      this.c.show(isTrans, cb);
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

/***/ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/Controller.es6":
/*!*****************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/Controller.es6 ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Imgs = __webpack_require__(/*! ./ObjectCV/Imgs.es6 */ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/ObjectCV/Imgs.es6");

var _Imgs2 = _interopRequireDefault(_Imgs);

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

// import Gradation from './ObjectCV/Gradation.es6';


var Content = function (_Base) {
  _inherits(Content, _Base);

  function Content($wrap, id) {
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

      this.w = gb.r.w;
      this.h = gb.r.h;

      this.isRetina = true;

      // canvas要素追加
      var dom = '<canvas id="' + this.id + '"></canvas>';
      this.$wrap.append(dom);
      // style, layout
      this.canvas = document.getElementById(this.id);
      this.stage = new createjs.Stage(this.canvas);
      $(this.canvas).css({ position: 'fixed', top: 0, left: 0, 'z-index': 99999, opcaity: 1 });

      if (this.isRetina) {
        // this.ctx.scale(2,2);
        this.stage.scaleX = 2;
        this.stage.scaleY = 2;
      }

      this.onResize();

      // obj生成
      this.add();
    }
  }, {
    key: 'add',
    value: function add() {

      // obj生成
      // this.c = new Gradation(this.stage);
      this.c = new _Imgs2.default(this.stage);
    }
  }, {
    key: 'update',
    value: function update() {

      this.stage.update();
    }
  }, {
    key: 'show',
    value: function show(isTrans, cb) {

      this.c.show(isTrans, cb);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var _this2 = this;

      clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {

        if (_this2.isRetina) {

          // attribute
          _this2.canvas.width = gb.r.w * 2;
          _this2.canvas.height = gb.r.h * 2;

          // css
          $(_this2.canvas).width(gb.r.w);
          $(_this2.canvas).height(gb.r.h);
        } else {

          _this2.canvas.width = gb.r.w;
          _this2.canvas.height = gb.r.h;
        }
      }, 100);
    }
  }]);

  return Content;
}(_Base3.default);

exports.default = Content;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/ObjectCV/Img.es6":
/*!*******************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/ObjectCV/Img.es6 ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

var Line = function (_Base) {
  _inherits(Line, _Base);

  function Line(stage, img, x, y, copyNum, sc, len) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

    _this.stage = stage;
    _this.c = _this.stage.canvas;

    _this.img = img;
    _this.x = x;
    _this.y = y;
    _this.copyNum = copyNum;
    _this.sc = sc;
    _this.len = len;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Line, [{
    key: 'setup',
    value: function setup() {

      // ready
      this.ready();

      this.add();
    }
  }, {
    key: 'ready',
    value: function ready() {}
  }, {
    key: 'add',
    value: function add() {

      this.basex = this.x;
      this.basey = this.y;

      this.scale = this.sc; // retina
      this.w = this.img.width * this.scale;

      // layer, object
      this.container = new createjs.Container();

      this.bs = [];
      // var blurFilter = new createjs.BlurFilter(20, 0, 1);
      for (var i = 0; i < this.copyNum; i++) {

        var bmp = new createjs.Bitmap(this.img);

        // Bitmapの中心座標を取得
        // var x = bmp.getBounds().width / 2;
        // var y = bmp.getBounds().height / 2;

        // 画像の中心に基準点を
        bmp.x = this.basex + (this.w + 5) * i;
        bmp.y = -8 * i;
        // bmp.y = 0;
        bmp.regX = 0;
        bmp.regY = 0;
        bmp.rotation = 0;
        bmp.scaleX = this.scale; // retina
        bmp.scaleY = this.scale; // retina

        // log(basex, this.w * i);

        // bmp.filters = [blurFilter];
        // var bounds = blurFilter.getBounds();
        // bmp.cache(0, 0, this.img.width * 1, this.img.height * 1);
        // bmp.cache(bounds.x, bounds.y, bounds.width, bounds.height);

        // add
        this.container.addChild(bmp);

        this.bs.push(bmp);
      }

      this.x = this.basex;
      this.vx = .5;
      this.vy = -.3;
      this.vdefx = 0;
      this.vdefy = 0;

      // var blurFilter = new createjs.BlurFilter(10, 0, .1);
      // this.container.filters = [blurFilter];
      // var bounds = blurFilter.getBounds();
      // this.container.cache(bounds.x, bounds.y, bounds.width, bounds.height);

      // pos
      this.container.x = this.x;
      this.container.y = this.y;
      this.stage.addChild(this.container);

      this.adjust = 0;

      this.left = -this.w;
      this.right = gb.r.w + this.w * this.copyNum - this.basex;
    }
  }, {
    key: 'update',
    value: function update() {

      this.vdefx += this.vx;
      this.vdefy += this.vy;

      // for (var i = 0; i < this.bs.length; i++) {
      //   var bmp = this.bs[i];
      //   bmp.updateCache();
      // }


      // if (this.x < this.left - this.w) {
      // if (this.x > this.right) {
      //   this.x = this.left;
      // }
    }
  }, {
    key: 'draw',
    value: function draw() {

      this.container.x = this.x + this.vdefx;
      this.container.y = this.y + this.vdefy;

      if (this.container.x > -this.basex + gb.r.w + 100) {
        $(window).trigger('overRight');
        this.offU();
        this.container.alpha = 0;
      }
    }
  }, {
    key: 'show',
    value: function show(isTrans) {
      var _this2 = this;

      var n = 4;
      var dur = 1.0;
      if (isTrans) {
        n = 3;
        dur = .5;
      }

      var tl = new TimelineMax({ delay: Math.floor(Math.random() * n) / 10 });

      tl.add(function () {

        _this2.vdefx = 0;
        _this2.vdefy = 0;
        _this2.container.x = _this2.basex;
        _this2.container.y = _this2.basey;
        _this2.x = _this2.basex;
        _this2.y = _this2.basey;
        _this2.vx = .5;
        _this2.vy = -.3;
        _this2.container.alpha = 1;

        _this2.onU();
      }, 0.0).to(this, .5, {
        // x: -this.basex + gb.r.w / 2 - (this.w * this.copyNum / 2) + (Math.floor(Math.random() * 7) - 5) * 30,
        x: -this.basex + gb.r.w / 2 - this.w * this.copyNum / 2 + 0,
        y: '+=' + -50,
        ease: Power4.easeOut
      }).to(this, .5, {
        vx: 100,
        ease: Expo.easeInOut
      }, dur);

      // blur
      // this.b = 20;
      // TweenMax.to(this, 1.0, {
      //     b: 0,
      //     ease: Expo.easeOut,
      //     onUpdate: ()=>{

      //       var blurFilter = new createjs.BlurFilter(this.b, 0, 1);
      //       for (var i = 0; i < this.copyNum; i++) {

      //         var bmp = this.bs[i];
      //         bmp.filters = [blurFilter];
      //         // bmp.cache(0, 0, this.img.width * 1, this.img.height * 1);
      //         // bmp.cache(0, 0, gb.r.w, this.img.height);

      //       }

      //       bmp.updateCache();

      //     }
      // })

    }
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      _get(Line.prototype.__proto__ || Object.getPrototypeOf(Line.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Line;
}(_Base3.default);

exports.default = Line;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/ObjectCV/Imgs.es6":
/*!********************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/ObjectCV/Imgs.es6 ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Img = __webpack_require__(/*! ./Img.es6 */ "../../src/js/src/View/UI/Common/Transition/NigiyakaC/canvas/ObjectCV/Img.es6");

var _Img2 = _interopRequireDefault(_Img);

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Array = __webpack_require__(/*! Util/Array.es6 */ "../../src/js/src/Util/Array.es6");

var a = _interopRequireWildcard(_Array);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

var Line = function (_Base) {
  _inherits(Line, _Base);

  function Line(stage) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

    _this.stage = stage;
    _this.c = _this.stage.canvas;

    _this.isREv = true;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Line, [{
    key: 'setup',
    value: function setup() {

      this.img = new Image();
      this.img.onload = this.ready.bind(this);
      this.img.src = '/assets/resource/img/tap.png';
    }
  }, {
    key: 'ready',
    value: function ready() {

      // new Img(this.stage, this.img);

      var num = 15;
      var y = -100;
      var defh = this.img.height;
      var defw = this.img.width;
      var scs = [];
      var ys = [];

      // log(defh);

      while (y < gb.r.h * 1.1 + 0) {
        // while (y < 20){

        var sc = .5 / 2 + Math.floor(Math.random() * 6) * .01;
        // var sc = .4;
        // var sc = .5 / 2;

        ys.push(y);
        scs.push(sc);

        var h = defh * sc;
        y += h;
      }

      // var arr = a.randomArr(ys.length);
      this.len = ys.length;
      this.is = [];
      for (var i = 0; i < ys.length; i++) {

        // var xx = Math.floor(Math.random()*ys.length) * 10;
        // var xx = gb.r.w + arr[i] * 20;
        // var xx = 0;
        // var xx = gb.r.w / 2;
        // var xx = gb.r.w;
        var yy = ys[i];
        var scsc = scs[i];
        // var copyNum = 5 + Math.floor(Math.random() * 3);
        var copyNum = 6;
        // var copyNum = 1;
        // var copyNum = 10;

        // var xx = -(defw * copyNum + i * 10);
        var xx = -(defw * copyNum + 5 * 10);

        // new Nigiyaka(scsc, copyNum, xx, yy);
        var img = new _Img2.default(this.stage, this.img, xx, yy, copyNum, scsc, ys.length);

        this.is.push(img);
      }
    }
  }, {
    key: 'add',
    value: function add() {}
  }, {
    key: 'show',
    value: function show(isTrans, cb) {

      this.cb = cb;

      for (var i = 0; i < this.is.length; i++) {

        var img = this.is[i];
        img.show(isTrans);
      }
    }
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'onResize',
    value: function onResize() {
      var _this2 = this;

      clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {

        _this2.ready();
      }, 100);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this3 = this;

      _get(Line.prototype.__proto__ || Object.getPrototypeOf(Line.prototype), 'setEvents', this).call(this);

      this.cnt = 0;
      $(window).on('overRight', function (event) {

        _this3.cnt++;
        // log('cnt', this.cnt, this.len);
        if (_this3.len == _this3.cnt) {
          _this3.cb();
          _this3.cnt = 0;
        }
      });
    }
  }]);

  return Line;
}(_Base3.default);

exports.default = Line;

/***/ }),

/***/ "../../src/js/src/View/UI/Common/Transition/Render.es6":
/*!********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Common/Transition/Render.es6 ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  function Render($target, audio) {
    _classCallCheck(this, Render);

    this.$target = $target;
    this.a = audio;

    this.setup();
    this.setEvents();
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'on',
    value: function on() {

      this.$target.find('.volume').addClass('playing');
      // this.a.tweenVolume(1,2);
      this.a.tweenVolume(1, 2);
    }
  }, {
    key: 'off',
    value: function off() {

      this.$target.find('.volume').removeClass('playing');
      // this.a.tweenVolume(0,2);
      this.a.tweenVolume(0, 2);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}();

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/UI/Controller_Common.es6":
/*!*************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Controller_Common.es6 ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Controller = __webpack_require__(/*! ./Sound/Controller.es6 */ "../../src/js/src/View/UI/Sound/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

var _Controller3 = __webpack_require__(/*! ./Common/Transition/Controller.es6 */ "../../src/js/src/View/UI/Common/Transition/Controller.es6");

var _Controller4 = _interopRequireDefault(_Controller3);

var _Controller5 = __webpack_require__(/*! ./Common/Menu/Controller.es6 */ "../../src/js/src/View/UI/Common/Menu/Controller.es6");

var _Controller6 = _interopRequireDefault(_Controller5);

var _Controller7 = __webpack_require__(/*! ./Common/Age/Controller.es6 */ "../../src/js/src/View/UI/Common/Age/Controller.es6");

var _Controller8 = _interopRequireDefault(_Controller7);

var _Controller9 = __webpack_require__(/*! ./Common/Orientation/Controller.es6 */ "../../src/js/src/View/UI/Common/Orientation/Controller.es6");

var _Controller10 = _interopRequireDefault(_Controller9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// common


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
      var _this2 = this;

      gb.sound = new _Controller2.default();
      gb.transition = new _Controller4.default();
      gb.orientation = new _Controller10.default();
      gb.menu = new _Controller6.default();
      gb.age = new _Controller8.default($('.toggle_age'), $('.open_age'), $('.close_age'), $('.age_contents'));

      // op
      if (gb.isAge == 'true') {

        // topページ郡の時
        if ($('html').hasClass('page_top')) {

          gb.transition.hide(true);

          // topページ郡でない時
        } else {

          var dur = .4;

          this.$coverWrap = $('.coverWrap');
          this.$cover = $('.cover');

          var c = $('html').css('background');
          this.$cover.css({ 'background': c });

          var u = location.pathname;
          if (gb.u.s.isContain(u, 'craftsman')) var p = { opacity: 0, ease: Power2.easeOut, onComplete: function onComplete() {
              _this2.$coverWrap.hide();
            } };else var p = { x: gb.r.w, ease: Power2.easeOut, onComplete: function onComplete() {
              _this2.$coverWrap.hide();
            } };

          var tl = new TimelineMax({ delay: .5 });
          tl.add(function () {

            _this2.$coverWrap.show();
            // x
            TweenMax.set(_this2.$coverWrap, { x: 0 });
            TweenMax.set(_this2.$cover, { width: '100%' });
            // naname
            // TweenMax.set(this.$coverWrap, {x: 0, y: 0, opacity: 1});
            // TweenMax.set(this.$cover, {width: '100%'});

            $('body').css('opacity', 1);
          }, 0.0)

          // x
          .to(this.$coverWrap, dur, p, .1);
        }
      } else {

        // ページ全体表示
        $('body').css('opacity', 1);

        gb.age.r.first();
      }
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

/***/ "../../src/js/src/View/UI/Opening/Controller.es6":
/*!**************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Opening/Controller.es6 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

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
    key: 'start',
    value: function start() {

      var tl = new TimelineMax();

      tl.add(function () {

        var cb = function cb() {

          if ($('html').hasClass('page_top')) gb.transition.hide(true, true);
        };

        gb.nc.show(false, cb);
      }, 0.0);
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return ViewCommon;
}(_Base3.default);

exports.default = ViewCommon;

/***/ }),

/***/ "../../src/js/src/View/UI/Sound/Controller.es6":
/*!************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Sound/Controller.es6 ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import {Howl, Howler} from 'howler';

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/View/UI/Sound/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.$wrap = $('#menu');
    this.src_tap = '/assets/resource/sound/tap.mp3';

    this.$on = this.$wrap.find('.on');
    this.$off = this.$wrap.find('.off');

    this.isSound = true;

    this.setup();
    this.setEvents();
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      this.a_tap = new Howl({ src: [this.src_tap], autoplay: false, loop: false, volume: 1 });

      // 最初のload
      // this.a_bgm.once('load', ()=>{
      //   this.a_bgm.play();
      // });

      if (gb.isSound == 'false') this.off();
    }
  }, {
    key: 'toggle',
    value: function toggle() {

      if (this.isSound) {

        this.off();
      } else {

        this.on();
      };

      this.isSound = !this.isSound;
    }
  }, {
    key: 'on',
    value: function on() {

      // this.r.on();
      Howler.volume(1.0);

      this.$on.find('path').css('opacity', .3);
      this.$off.find('path').css('opacity', 1);

      gb.isSound = 'true';
      gb.u.u.setCookie('isSound', gb.isSound, 1 * 24 * 60 * 60 * 1000); //1日
    }
  }, {
    key: 'off',
    value: function off() {

      // this.r.off();
      Howler.volume(0.0);

      this.$off.find('path').css('opacity', .3);
      this.$on.find('path').css('opacity', 1);

      gb.isSound = 'false';
      gb.u.u.setCookie('isSound', gb.isSound, 1 * 24 * 60 * 60 * 1000); //1日
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {

      this.a_bgm.pause();
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {

      this.a_bgm.play();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // $(window).on('blur', this.onBlur.bind(this));
      // $(window).on('focus', this.onFocus.bind(this));

      // $(window).one('click', ()=>{
      //   this.a_bgm.play();  
      // });
      // $(window).on('click', ()=>{
      //   this.a_tap.play();
      // });

      this.$on.on('click', this.on.bind(this));
      this.$off.on('click', this.off.bind(this));
    }
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Sound/Render.es6":
/*!********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/UI/Sound/Render.es6 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  function Render($target, audio) {
    _classCallCheck(this, Render);

    this.$target = $target;
    this.a = audio;

    this.setup();
    this.setEvents();
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'on',
    value: function on() {

      this.$target.find('.volume').addClass('playing');
      // this.a.tweenVolume(1,2);
      this.a.tweenVolume(1, 2);
    }
  }, {
    key: 'off',
    value: function off() {

      this.$target.find('.volume').removeClass('playing');
      // this.a.tweenVolume(0,2);
      this.a.tweenVolume(0, 2);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}();

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/View_Common.es6":
/*!****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/View/View_Common.es6 ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _UrlMgr = __webpack_require__(/*! Controller/UrlMgr.es6 */ "../../src/js/src/Controller/UrlMgr.es6");

var _UrlMgr2 = _interopRequireDefault(_UrlMgr);

var _Sns = __webpack_require__(/*! ./Func/Sns.es6 */ "../../src/js/src/View/Func/Sns.es6");

var _Sns2 = _interopRequireDefault(_Sns);

var _Controller_Common = __webpack_require__(/*! ./UI/Controller_Common.es6 */ "../../src/js/src/View/UI/Controller_Common.es6");

var _Controller_Common2 = _interopRequireDefault(_Controller_Common);

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

      gb.urlm = new _UrlMgr2.default();

      if (gb.u.dv.isAndroid()) $('#age').addClass('android');

      // agegate 1日経っていなかったら
      gb.isAge = gb.u.u.getCookie('agegate');
      if (gb.isAge == 'true') $('#age').hide();

      // sound on off
      gb.isSound = gb.u.u.getCookie('isSound');
      if (gb.isSound == undefined) gb.isSound = 'true';

      this.onLoad();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {

      gb.f.SPH($('#menu'));

      // ------------------------------------------------------------
      //  Util
      // ------------------------------------------------------------
      new _Sns2.default($('.fbShare_menu'), $('.twShare_menu'), $('.lineShare_menu'), $('.onMail'));

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  ui
      // ------------------------------------------------------------
      this.uic = new _Controller_Common2.default();

      // ------------------------------------------------------------
      // timeline
      // ------------------------------------------------------------
      this.onResize();
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
    value: function onResize() {

      clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {

        var vh = window.innerHeight;
        document.documentElement.style.setProperty('--h', vh + 'px');
      }, 100);
    }
  }, {
    key: 'onLoadAll',
    value: function onLoadAll() {

      // new Responsive();

    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), 'setEvents', this).call(this);

      // $(window).on('load', this.onLoad.bind(this));
      $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
      $(window).on('loadAll', this.onLoadAll.bind(this));
    }
  }]);

  return ViewCommon;
}(_Base3.default);

exports.default = ViewCommon;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/Base.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/Base.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "../../src/js/src/_MyLibs/Util/Debugger.es6":
/*!*********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/Debugger.es6 ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "../../src/js/src/_MyLibs/Util/Func.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/Func.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');


      if (gb.u.dv.isPC) return;

      var r = function r() {
        // clearTimeout(this.Timer);
        // this.Timer = setTimeout(()=>{
        //   var adjust = 0;
        //   if ($('body').hasClass('landscape')) adjust = 200;
        //   $target.innerHeight(gb.r.h+adjust);        
        // },100);
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

/***/ "../../src/js/src/_MyLibs/Util/JudgeEnvironment.es6":
/*!*****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/JudgeEnvironment.es6 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

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

/***/ "../../src/js/src/_MyLibs/Util/Profiler.es6":
/*!*********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/Profiler.es6 ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

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

/***/ "../../src/js/src/_MyLibs/Util/Util.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/Util.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Array = __webpack_require__(/*! ./UtilPack/Array.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Array.es6");

var _Array2 = _interopRequireDefault(_Array);

var _Color = __webpack_require__(/*! ./UtilPack/Color.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Color.es6");

var _Color2 = _interopRequireDefault(_Color);

var _DateClass = __webpack_require__(/*! ./UtilPack/DateClass.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/DateClass.es6");

var _DateClass2 = _interopRequireDefault(_DateClass);

var _Device = __webpack_require__(/*! ./UtilPack/Device.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Device.es6");

var _Device2 = _interopRequireDefault(_Device);

var _Math = __webpack_require__(/*! ./UtilPack/Math.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Math.es6");

var _Math2 = _interopRequireDefault(_Math);

var _Other = __webpack_require__(/*! ./UtilPack/Other.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Other.es6");

var _Other2 = _interopRequireDefault(_Other);

var _String = __webpack_require__(/*! ./UtilPack/String.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/String.es6");

var _String2 = _interopRequireDefault(_String);

var _Url = __webpack_require__(/*! ./UtilPack/Url.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Url.es6");

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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Array.es6":
/*!***************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/Array.es6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Color.es6":
/*!***************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/Color.es6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/DateClass.es6":
/*!*******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/DateClass.es6 ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Device.es6":
/*!****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/Device.es6 ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

    this.prew = 0;
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
      var _this = this;

      clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {

        var W = window.innerWidth,
            H = window.innerHeight;

        // log('w', this.prew, W, this.prew==W);

        if (_this.prew == W) return;

        if (H > W) {
          $("body").addClass("portrait");
          $("body").removeClass("landscape");
        } else {
          $("body").addClass("landscape");
          $("body").removeClass("portrait");
        }

        // log('after', W, this.prew)
        _this.prew = W;
      }, 100);
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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Math.es6":
/*!**************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/Math.es6 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Other.es6":
/*!***************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/Other.es6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/String.es6":
/*!****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/String.es6 ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Url.es6":
/*!*************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/Util/UtilPack/Url.es6 ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/ResizeMgr.es6":
/*!**************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/View/Events/EventMgr/ResizeMgr.es6 ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
      var _this = this;

      clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {

        _this.getWindowSize();
      }, 90);
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

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/UpdateMgr.es6":
/*!**************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/04_Rana/jinbeam/rex/src/js/src/_MyLibs/View/Events/EventMgr/UpdateMgr.es6 ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ })

/******/ });
//# sourceMappingURL=common.js.map