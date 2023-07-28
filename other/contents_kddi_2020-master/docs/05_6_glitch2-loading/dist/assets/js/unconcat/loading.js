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
	
	window.gb = {};
	new _Controller2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ResourcePath = __webpack_require__(2);
	
	var _Controller = __webpack_require__(3);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(4);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.setup();
	    this.startTime = new Date();
	    this.count = 0;
	    this.MAX = _ResourcePath.ResourcePath.preload.max + _ResourcePath.ResourcePath.load.max;
	  }
	
	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      this.resourceMgr = new _Controller2.default();
	      this.preload();
	    }
	  }, {
	    key: "preload",
	    value: function preload() {
	      var _this = this;
	
	      //preload
	      var obj = _ResourcePath.ResourcePath.preload.js;
	      var p = [];
	      obj.map(function (path) {
	        p.push(_this.resourceMgr.scriptLoad(path));
	      });
	      Promise.all(p).then(function (e) {
	        _this.count = obj.length;
	        _this.ready();
	      });
	    }
	  }, {
	    key: "ready",
	    value: function ready() {
	      var _this2 = this;
	
	      this.viewController = new _Controller4.default();
	      this.viewController.show();
	      //処理落ち対策で、delay
	      setTimeout(function () {
	        _this2.mainLoad();
	      }, 1000);
	    }
	  }, {
	    key: "mainLoad",
	    value: function mainLoad() {
	      var _this3 = this;
	
	      //ライブラリロード
	      this.libraryLoad().then(function (e) {
	        ++_this3.count;
	        _this3.texureLoad();
	        _this3.mainScriptLoad();
	      });
	    }
	  }, {
	    key: "loaded",
	    value: function loaded() {
	      var _this4 = this;
	
	      if (this.MAX == this.count) {
	        var now = new Date();
	        var diff = now - this.startTime;
	        if (diff < 3000) {
	          setTimeout(function (e) {
	            _this4.viewController.hide(function (e) {
	              $(window).trigger("loadEnd");
	            });
	          }, 3000 - diff);
	        } else {
	          this.viewController.hide(function (e) {
	            $(window).trigger("loadEnd");
	          });
	        }
	      }
	    }
	  }, {
	    key: "libraryLoad",
	    value: function libraryLoad() {
	      var _this5 = this;
	
	      var obj = _ResourcePath.ResourcePath.load.lib;
	      var p = [];
	      obj.map(function (path) {
	        p.push(_this5.resourceMgr.scriptLoad(path));
	      });
	      return Promise.all(p);
	    }
	  }, {
	    key: "texureLoad",
	    value: function texureLoad() {
	      var _this6 = this;
	
	      var obj = _ResourcePath.ResourcePath.load.textures;
	      window.gb.textures = [];
	      obj.map(function (t, i) {
	        _this6.resourceMgr.textureLoad(t.path).then(function (texture) {
	          window.gb.textures.push({
	            name: t.name,
	            texture: texture,
	            index: i
	          });
	
	          ++_this6.count;
	          if (window.gb.textures.length == obj.length) {
	            //読み込み順番を並び替え
	            window.gb.textures.sort(function (a, b) {
	              return a.index > b.index ? 1 : -1;
	            });
	            _this6.loaded();
	          }
	        });
	      });
	    }
	  }, {
	    key: "mainScriptLoad",
	    value: function mainScriptLoad() {
	      var _this7 = this;
	
	      var obj = _ResourcePath.ResourcePath.load.js;
	      obj.map(function (path) {
	        _this7.resourceMgr.scriptLoad(path).then(function () {
	          ++_this7.count;
	          _this7.loaded();
	        });
	      });
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var resouse = "./assets/";
	var ResourcePath = exports.ResourcePath = {
	  preload: {
	    js: [resouse + "js/libs/TweenMax.min.js", resouse + "js/libs/jquery.min.js"]
	  },
	  load: {
	    lib: [resouse + "js/libs/three.js"],
	    textures: [].concat(_toConsumableArray(Array(12).keys())).map(function (i) {
	      if (i < 11) return {
	        path: resouse + ("img/" + (i + 1) + ".png"),
	        name: "splitText"
	      };else return {
	        path: resouse + "img/main.png",
	        name: "mainText"
	      };
	    }),
	    js: [resouse + "js/bundle.js"]
	  }
	};
	ResourcePath.preload.max = ResourcePath.preload.js.length;
	ResourcePath.load.max = ResourcePath.load.js.length + ResourcePath.load.textures.length + ResourcePath.load.lib.length;
	//

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ResourceMgr = function () {
	  function ResourceMgr() {
	    _classCallCheck(this, ResourceMgr);
	  }
	
	  _createClass(ResourceMgr, [{
	    key: "scriptLoad",
	    value: function scriptLoad(path) {
	      return new Promise(function (resolve, reject) {
	        var script = document.createElement("script");
	        var head = document.getElementsByTagName("head")[0];
	        script.onload = script.onreadystatechange = function (e) {
	          resolve();
	        };
	        script.src = path;
	        head.appendChild(script);
	      });
	    }
	  }, {
	    key: "textureLoad",
	    value: function textureLoad(path) {
	      if (!THREE) return;
	      var loader = new THREE.TextureLoader();
	      return new Promise(function (resolve, reject) {
	        loader.load(path, function (e) {
	          e.magFilter = THREE.LinearFilter;
	          e.minFilter = THREE.LinearFilter;
	          resolve(e);
	        });
	      });
	    }
	  }]);
	
	  return ResourceMgr;
	}();
	
	exports.default = ResourceMgr;

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
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Render, [{
	    key: "setup",
	    value: function setup() {
	      $(".section01")[0].style.height = window.innerHeight + "px";
	    }
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
	        // clearTimeout(this.Timer);
	        // this.Timer = setTimeout(() => {
	        //   this.hide(true);
	        // }, 3000);
	      }, 0.2);
	    }
	  }, {
	    key: "update",
	    value: function update(e) {}
	  }, {
	    key: "hide",
	    value: function hide(cb) {
	      var _this2 = this;
	
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
	          // $(window).trigger("loadingEnd");
	        }
	      }, 0.0).add(function (e) {
	        cb();
	      });
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