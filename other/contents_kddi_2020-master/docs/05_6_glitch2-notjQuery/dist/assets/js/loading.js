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
	
	var _Controller = __webpack_require__(1);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.$ = function (query) {
	  if (typeof query != "string") {
	    console.warn("error query", query);
	    return;
	  }
	  return document.querySelectorAll(query);
	};
	
	//高さを追加
	$(".section01")[0].style.height = window.innerHeight + "px";
	
	window.gb = {};
	window.gb.loadingView = new LoadView(); // contoroller, render
	
	window.gb.loading = new _Controller2.default(); // countする機能
	
	$(window).on("start", function (event) {
	  gb.start();
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(2);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Events = __webpack_require__(3);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _Render_def = __webpack_require__(4);
	
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
	
	    _this.name = "ReadyMgr";
	
	    _this.completed = 0;
	    _this.total = 1; // 最初に0で割られるのを防ぐ
	    _this.current = 0;
	
	    _this.$wrap = $("#wrapper");
	    _this.r = new _Render_def2.default();
	    // if (gb.conf.LOADING) this.setup(); // loading有り
	    // else this.setup_not_loading(); // loading無し
	    _this.setup();
	
	    _this.setEvents();
	    return _this;
	  }
	
	  _createClass(ReadyMgr, [{
	    key: "setup",
	    value: function setup() {
	      this.e = new _Events2.default(this);
	      this.r.show();
	      // this.r.add();
	      // this.r.show();
	    }
	  }, {
	    key: "setup_not_loading",
	    value: function setup_not_loading() {
	      // $(".loading").hide();
	      $(".loading").style.display = "none";
	      this.onComplete();
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      //
	      // this.e = this.e.update();
	      // this.r.update(this.e);
	    }
	  }, {
	    key: "onComplete",
	    value: function onComplete() {
	      this.r.endFlag = true;
	      this.r.hide();
	    }
	  }]);
	
	  return ReadyMgr;
	}(_Base3.default);
	
	exports.default = ReadyMgr;

/***/ }),
/* 2 */
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
/* 3 */
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
	
	//import obj loader
	// img loader
	// loader
	// script loader xhr %
	
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
	    value: function setup() {
	      // tex 11
	      //  script 1
	      ///bodyにmainを追加
	      var script = document.createElement("script");
	      script.src = "./assets/js/bundle.js";
	      document.body.appendChild(script);
	    }
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
/* 4 */
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
	
	    this.$wrap = $("html");
	    this.endFlag = false;
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Render, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "add",
	    value: function add() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var _this = this;
	
	      this.$target = $(".loading");
	      var $shape = $(".loading .shape");
	      var $inner = $(".loading .inner");
	      // const $shape = this.$target.find('.shape');
	      // const $shape = this.$target.
	
	      TweenMax.set($shape, { opacity: 0, scale: 0.7 });
	      TweenMax.set($shape[0], { "transform-origin": "50% 75%" });
	
	      var tll = new TimelineMax({ delay: 1.0 });
	
	      tll.to($inner, 1.2, {
	        opacity: 1,
	        y: 0,
	        ease: Expo.easeOut
	      })
	
	      // shapes
	      .add(function () {
	        _this.tl1 = new TimelineMax({
	          repeat: -1,
	          delay: 0.7 * 0,
	          repeatDelay: 1.2
	        });
	        _this.tl2 = new TimelineMax({
	          repeat: -1,
	          delay: 0.7 * 1,
	          repeatDelay: 1.2
	        });
	        _this.tl3 = new TimelineMax({
	          repeat: -1,
	          delay: 0.7 * 2,
	          repeatDelay: 1.2
	        });
	
	        _this.tl1.set($shape[0], { rotation: -180 * 0.15 }).to($shape[0], 0.6, {
	          scale: 1,
	          opacity: 1,
	          rotation: 0,
	          ease: Expo.easeOut
	        }, 0.0).to($shape[0], 0.3, {
	          scale: 0.7,
	          opacity: 0.0,
	          rotation: 180 * 0.15,
	          ease: Expo.easeInOut
	        }, 0.6);
	
	        _this.tl2.set($shape[1], { rotation: -180 * 0.35 }).to($shape[1], 0.6, {
	          scale: 1,
	          opacity: 1,
	          rotation: 0,
	          ease: Expo.easeOut
	        }, 0.0).to($shape[1], 0.3, {
	          scale: 0.7,
	          opacity: 0.0,
	          rotation: 180 * 0.35,
	          ease: Expo.easeInOut
	        }, 0.6);
	
	        _this.tl3.set($shape[2], { rotation: -180 * 0.35 }).to($shape[2], 0.6, {
	          scale: 1,
	          opacity: 1,
	          rotation: 0,
	          ease: Expo.easeOut
	        }, 0.0).to($shape[2], 0.3, {
	          scale: 0.7,
	          opacity: 0.0,
	          rotation: 180 * 0.35,
	          ease: Expo.easeInOut
	        }, 0.6);
	
	        // hide
	        clearTimeout(_this.Timer);
	        _this.Timer = setTimeout(function () {
	          _this.hide(true);
	        }, 3000);
	      }, 0.2);
	    }
	  }, {
	    key: "update",
	    value: function update(e) {}
	  }, {
	    key: "hide",
	    value: function hide() {
	      var _this2 = this;
	
	      var is_end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (!this.endFlag || !is_end) return;
	      this.is_hide = true;
	
	      var tl = new TimelineMax();
	
	      tl.to($(".loading .inner"), 1.2, {
	        opacity: 0,
	        y: -15,
	        ease: Expo.easeOut
	      }, 0.0).to(this.$target, 0.8, {
	        opacity: 0,
	        // scale: 0.,
	        ease: Power4.easeOut,
	        onComplete: function onComplete() {
	          // $(".loading").remove();
	          // while ($(".loading").firstChild)
	          //   $(".loading").removeChild($(".loading").firstChild);
	          _this2.tl1.kill();
	          _this2.tl2.kill();
	          _this2.tl3.kill();
	          _this2.setTrigger("loadingEnd");
	          // $(window).trigger("loadingEnd");
	        }
	      }, 0.0);
	    }
	  }, {
	    key: "setTrigger",
	    value: function setTrigger(eventName) {
	      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var ev = void 0;
	      try {
	        ev = new CustomEvent(eventName, d);
	      } catch (e) {
	        ev = document.createEvent("CustomEvent");
	        ev.initCustomEvent(eventName, false, false, d);
	      }
	      document.dispatchEvent(ev);
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return Render;
	}();
	
	exports.default = Render;

/***/ })
/******/ ]);
//# sourceMappingURL=loading.js.map