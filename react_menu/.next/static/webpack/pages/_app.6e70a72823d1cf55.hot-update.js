"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/menu/Menu.jsx":
/*!**********************************!*\
  !*** ./components/menu/Menu.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ \"./components/menu/Drawer.jsx\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuButton */ \"./components/menu/MenuButton.jsx\");\n/* harmony import */ var _RendererDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RendererDrawer */ \"./components/menu/RendererDrawer.js\");\n/* harmony import */ var _RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RendererMenuButton */ \"./components/menu/RendererMenuButton.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Menu = function() {\n    _s();\n    var tl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].timeline());\n    var btn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var drawer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setMenuStatus = ref[1];\n    var open = function() {\n        tl.current.kill();\n        tl.current = gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].timeline();\n        tl.current// btn\n        .add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.showCloseBtnTimeline)(btn.current))// drawer\n        .add((0,_RendererDrawer__WEBPACK_IMPORTED_MODULE_4__.showDrawer)(drawer.current), 0);\n    };\n    var close = function() {\n        tl.current.kill();\n        tl.current = gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].timeline();\n        tl.current// btn\n        .add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.showOpenBtnTimeline)(btn.current))// drawer\n        .add((0,_RendererDrawer__WEBPACK_IMPORTED_MODULE_4__.hideDrawer)(drawer.current), 0);\n    };\n    var onClickHandler = function() {\n        setMenuStatus(!isOpen);\n    };\n    var onEnter = function() {\n        isOpen ? tl.current.add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.onEnterCloseBtn)(btn.current)) : tl.current.add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.onEnterOpenBtn)(btn.current));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isFirstRender.current) {\n            isOpen ? open() : close();\n        } else {\n            isFirstRender.current = true;\n        }\n    }, [\n        isOpen\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                ref: btn,\n                onClick: onClickHandler,\n                isOpen: isOpen,\n                onMouseEnter: onEnter,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/menu/Menu.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Drawer__WEBPACK_IMPORTED_MODULE_2__.Drawer, {\n                ref: drawer,\n                isOpen: isOpen,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/menu/Menu.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Menu, \"WQ78tMCYNkLTZhg221uTqqyBb/E=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvTWVudS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2xCO0FBQ1E7QUFDZ0I7QUFNNUI7QUFDTjs7O0FBRWhCLEdBQUssQ0FBQ1ksSUFBSSxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7O0lBQ3pCLEdBQUssQ0FBQ0MsRUFBRSxHQUFHWiw2Q0FBTSxDQUFDVSxxREFBYTtJQUMvQixHQUFLLENBQUNJLEdBQUcsR0FBR2QsNkNBQU0sQ0FBQyxJQUFJO0lBQ3ZCLEdBQUssQ0FBQ2UsTUFBTSxHQUFHZiw2Q0FBTSxDQUFDLElBQUk7SUFDMUIsR0FBSyxDQUFDZ0IsYUFBYSxHQUFHaEIsNkNBQU0sQ0FBQyxLQUFLO0lBQ2xDLEdBQUssQ0FBMkJDLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDZ0IsTUFBTSxHQUFtQmhCLEdBQWUsS0FBaENpQixhQUFhLEdBQUlqQixHQUFlO0lBRS9DLEdBQUssQ0FBQ2tCLElBQUksR0FBRyxRQUNmLEdBRHFCLENBQUM7UUFDbEJQLEVBQUUsQ0FBQ1EsT0FBTyxDQUFDQyxJQUFJO1FBQ2ZULEVBQUUsQ0FBQ1EsT0FBTyxHQUFHVixxREFBYTtRQUUxQkUsRUFBRSxDQUFDUSxPQUFPLEVBQ0Y7U0FDTEUsR0FBRyxDQUFDYix5RUFBb0IsQ0FBQ0ssR0FBRyxDQUFDTSxPQUFPLEVBQ3JDLEVBQVM7U0FDUkUsR0FBRyxDQUFDakIsMkRBQVUsQ0FBQ1UsTUFBTSxDQUFDSyxPQUFPLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsR0FBSyxDQUFDRyxLQUFLLEdBQUcsUUFDaEIsR0FEc0IsQ0FBQztRQUNuQlgsRUFBRSxDQUFDUSxPQUFPLENBQUNDLElBQUk7UUFDZlQsRUFBRSxDQUFDUSxPQUFPLEdBQUdWLHFEQUFhO1FBRTFCRSxFQUFFLENBQUNRLE9BQU8sRUFDRjtTQUNMRSxHQUFHLENBQUNoQix3RUFBbUIsQ0FBQ1EsR0FBRyxDQUFDTSxPQUFPLEVBQ3BDLEVBQVM7U0FDUkUsR0FBRyxDQUFDbEIsMkRBQVUsQ0FBQ1csTUFBTSxDQUFDSyxPQUFPLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsR0FBSyxDQUFDSSxjQUFjLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztRQUM1Qk4sYUFBYSxFQUFFRCxNQUFNO0lBQ3ZCLENBQUM7SUFFRCxHQUFLLENBQUNRLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCUixNQUFNLEdBQ0ZMLEVBQUUsQ0FBQ1EsT0FBTyxDQUFDRSxHQUFHLENBQUNmLG9FQUFlLENBQUNPLEdBQUcsQ0FBQ00sT0FBTyxLQUMxQ1IsRUFBRSxDQUFDUSxPQUFPLENBQUNFLEdBQUcsQ0FBQ2QsbUVBQWMsQ0FBQ00sR0FBRyxDQUFDTSxPQUFPO0lBQy9DLENBQUM7SUFFRHJCLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFaUIsYUFBYSxDQUFDSSxPQUFPLEVBQUUsQ0FBQztZQUMxQkgsTUFBTSxHQUFHRSxJQUFJLEtBQUtJLEtBQUs7UUFDekIsQ0FBQyxNQUFNLENBQUM7WUFDTlAsYUFBYSxDQUFDSSxPQUFPLEdBQUcsSUFBSTtRQUM5QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNIO1FBQUFBLE1BQU07SUFBQSxDQUFDO0lBRVgsTUFBTTs7aUZBRURkLG1EQUFVO2dCQUNUdUIsR0FBRyxFQUFFWixHQUFHO2dCQUNSYSxPQUFPLEVBQUVILGNBQWM7Z0JBQ3ZCUCxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RXLFlBQVksRUFBRUgsT0FBTzs7Ozs7Ozs7aUZBRXRCdkIsMkNBQU07Z0JBQUN3QixHQUFHLEVBQUVYLE1BQU07Z0JBQUVFLE1BQU0sRUFBRUEsTUFBTTs7Ozs7Ozs7OztBQUd6QyxDQUFDO0dBMURZTixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnUuanN4PzYzNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tIFwiLi9EcmF3ZXJcIjtcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tIFwiLi9NZW51QnV0dG9uXCI7XG5pbXBvcnQgeyBoaWRlRHJhd2VyLCBzaG93RHJhd2VyIH0gZnJvbSBcIi4vUmVuZGVyZXJEcmF3ZXJcIjtcbmltcG9ydCB7XG4gIHNob3dPcGVuQnRuVGltZWxpbmUsXG4gIG9uRW50ZXJDbG9zZUJ0bixcbiAgb25FbnRlck9wZW5CdG4sXG4gIHNob3dDbG9zZUJ0blRpbWVsaW5lLFxufSBmcm9tIFwiLi9SZW5kZXJlck1lbnVCdXR0b25cIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICBjb25zdCB0bCA9IHVzZVJlZihnc2FwLnRpbWVsaW5lKCkpO1xuICBjb25zdCBidG4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGRyYXdlciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaXNGaXJzdFJlbmRlciA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldE1lbnVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgdGwuY3VycmVudC5raWxsKCk7XG4gICAgdGwuY3VycmVudCA9IGdzYXAudGltZWxpbmUoKTtcblxuICAgIHRsLmN1cnJlbnRcbiAgICAgIC8vIGJ0blxuICAgICAgLmFkZChzaG93Q2xvc2VCdG5UaW1lbGluZShidG4uY3VycmVudCkpXG4gICAgICAvLyBkcmF3ZXJcbiAgICAgIC5hZGQoc2hvd0RyYXdlcihkcmF3ZXIuY3VycmVudCksIDApO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIHRsLmN1cnJlbnQua2lsbCgpO1xuICAgIHRsLmN1cnJlbnQgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgICB0bC5jdXJyZW50XG4gICAgICAvLyBidG5cbiAgICAgIC5hZGQoc2hvd09wZW5CdG5UaW1lbGluZShidG4uY3VycmVudCkpXG4gICAgICAvLyBkcmF3ZXJcbiAgICAgIC5hZGQoaGlkZURyYXdlcihkcmF3ZXIuY3VycmVudCksIDApO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldE1lbnVTdGF0dXMoIWlzT3Blbik7XG4gIH07XG5cbiAgY29uc3Qgb25FbnRlciA9ICgpID0+IHtcbiAgICBpc09wZW5cbiAgICAgID8gdGwuY3VycmVudC5hZGQob25FbnRlckNsb3NlQnRuKGJ0bi5jdXJyZW50KSlcbiAgICAgIDogdGwuY3VycmVudC5hZGQob25FbnRlck9wZW5CdG4oYnRuLmN1cnJlbnQpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0ZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcbiAgICAgIGlzT3BlbiA/IG9wZW4oKSA6IGNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzRmlyc3RSZW5kZXIuY3VycmVudCA9IHRydWU7XG4gICAgfVxuICB9LCBbaXNPcGVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgcmVmPXtidG59XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkVudGVyfVxuICAgICAgLz5cbiAgICAgIDxEcmF3ZXIgcmVmPXtkcmF3ZXJ9IGlzT3Blbj17aXNPcGVufSAvPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRyYXdlciIsIk1lbnVCdXR0b24iLCJoaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInNob3dPcGVuQnRuVGltZWxpbmUiLCJvbkVudGVyQ2xvc2VCdG4iLCJvbkVudGVyT3BlbkJ0biIsInNob3dDbG9zZUJ0blRpbWVsaW5lIiwiZ3NhcCIsIk1lbnUiLCJ0bCIsInRpbWVsaW5lIiwiYnRuIiwiZHJhd2VyIiwiaXNGaXJzdFJlbmRlciIsImlzT3BlbiIsInNldE1lbnVTdGF0dXMiLCJvcGVuIiwiY3VycmVudCIsImtpbGwiLCJhZGQiLCJjbG9zZSIsIm9uQ2xpY2tIYW5kbGVyIiwib25FbnRlciIsInJlZiIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu/Menu.jsx\n");

/***/ }),

/***/ "./components/menu/RendererMenuButton.js":
/*!***********************************************!*\
  !*** ./components/menu/RendererMenuButton.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCloseBtnTimeline\": function() { return /* binding */ showCloseBtnTimeline; },\n/* harmony export */   \"showOpenBtnTimeline\": function() { return /* binding */ showOpenBtnTimeline; },\n/* harmony export */   \"onEnterOpenBtn\": function() { return /* binding */ onEnterOpenBtn; },\n/* harmony export */   \"onEnterCloseBtn\": function() { return /* binding */ onEnterCloseBtn; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar showCloseBtnTimeline = function(wrap) {\n    var openBtn = wrap.querySelector(\".js-menubtn_open\");\n    var openBars = openBtn.querySelectorAll(\".js-menubtn_bar\");\n    var closeBtn = wrap.querySelector(\".js-menubtn_close\");\n    var closeBars = closeBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // hide open\n    openBars.forEach(function(el, i) {\n        tl.to(el, 0.5, {\n            scaleX: 0,\n            transformOrigin: \"100% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i);\n    });\n    // show close\n    closeBars.forEach(function(el, i) {\n        tl.to(el, 0.6, {\n            scaleX: 1,\n            ease: \"expo.out\",\n            transformOrigin: \"0% 0%\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\nvar showOpenBtnTimeline = function(wrap) {\n    var openBtn = wrap.querySelector(\".js-menubtn_open\");\n    var openBars = openBtn.querySelectorAll(\".js-menubtn_bar\");\n    var closeBtn = wrap.querySelector(\".js-menubtn_close\");\n    var closeBars = closeBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // hide close\n    closeBars.forEach(function(el, i) {\n        tl.to(el, 0.5, {\n            scaleX: 0,\n            transformOrigin: \"100% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i);\n    });\n    // show open\n    openBars.forEach(function(el, i) {\n        tl.to(el, 0.5, {\n            scaleX: 1,\n            transformOrigin: \"0% 0\",\n            ease: \"expo.out\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\nvar onEnterOpenBtn = function(wrap) {\n    var openBtn = wrap.querySelector(\".js-menubtn_open\");\n    var openBars = openBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // openbtn\n    openBars.forEach(function(el, i) {\n        tl// hide open\n        .to(el, 0.5, {\n            scaleX: 0,\n            transformOrigin: \"100% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i)// show open\n        .to(el, 0.5, {\n            scaleX: 1,\n            transformOrigin: \"0% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\nvar onEnterCloseBtn = function(wrap) {\n    var closeBtn = wrap.querySelector(\".js-menubtn_close\");\n    var closeBars = closeBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // closebtn\n    closeBars.forEach(function(el, i) {\n        tl// hide close\n        .to(el, 0.5, {\n            scaleX: 0,\n            transformOrigin: \"100% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i)// show close\n        .to(el, 0.5, {\n            scaleX: 1,\n            transformOrigin: \"0% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvUmVuZGVyZXJNZW51QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QjtBQUVoQixHQUFLLENBQUNDLG9CQUFvQixHQUFHLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7SUFDN0MsR0FBSyxDQUFDQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQWtCO0lBQ3JELEdBQUssQ0FBQ0MsUUFBUSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLENBQWlCO0lBQzNELEdBQUssQ0FBQ0MsUUFBUSxHQUFHTCxJQUFJLENBQUNFLGFBQWEsQ0FBQyxDQUFtQjtJQUN2RCxHQUFLLENBQUNJLFNBQVMsR0FBR0QsUUFBUSxDQUFDRCxnQkFBZ0IsQ0FBQyxDQUFpQjtJQUU3RCxHQUFLLENBQUNHLEVBQUUsR0FBR1QscURBQWE7SUFFeEIsRUFBWTtJQUNaSyxRQUFRLENBQUNNLE9BQU8sQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDM0JKLEVBQUUsQ0FBQ0ssRUFBRSxDQUNIRixFQUFFLEVBQ0YsR0FBRyxFQUNILENBQUM7WUFDQ0csTUFBTSxFQUFFLENBQUM7WUFDVEMsZUFBZSxFQUFFLENBQVM7WUFDMUJDLElBQUksRUFBRSxDQUFVO1FBQ2xCLENBQUMsRUFDRCxJQUFJLEdBQUdKLENBQUM7SUFFWixDQUFDO0lBQ0QsRUFBYTtJQUNiTCxTQUFTLENBQUNHLE9BQU8sQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDNUJKLEVBQUUsQ0FBQ0ssRUFBRSxDQUNIRixFQUFFLEVBQ0YsR0FBRyxFQUNILENBQUM7WUFDQ0csTUFBTSxFQUFFLENBQUM7WUFDVEUsSUFBSSxFQUFFLENBQVU7WUFDaEJELGVBQWUsRUFBRSxDQUFPO1FBQzFCLENBQUMsRUFDRCxJQUFJLEdBQUdILENBQUMsR0FBRyxHQUFHO0lBRWxCLENBQUM7SUFFRCxNQUFNLENBQUNK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QztZQUNDRyxNQUFNLEVBQUUsQ0FBQztZQUNUQyxlQUFlLEVBQUUsQ0FBUztZQUMxQkMsSUFBSSxFQUFFLENBQVU7UUFDbEIsQ0FBQyxFQUNELElBQUksR0FBR0osQ0FBQyxDQUVWLEVBQWE7U0FDWkMsRUFBRSxDQUNERixFQUFFLEVBQ0YsR0FBRyxFQUNILENBQUM7WUFDQ0csTUFBTSxFQUFFLENBQUM7WUFDVEMsZUFBZSxFQUFFLENBQU87WUFDeEJDLElBQUksRUFBRSxDQUFVO1FBQ2xCLENBQUMsRUFDRCxJQUFJLEdBQUdKLENBQUMsR0FBRyxHQUFHO0lBRXBCLENBQUM7SUFFRCxNQUFNLENBQUNKLEVBQUU7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVudS9SZW5kZXJlck1lbnVCdXR0b24uanM/Njg3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgY29uc3Qgc2hvd0Nsb3NlQnRuVGltZWxpbmUgPSAod3JhcCkgPT4ge1xuICBjb25zdCBvcGVuQnRuID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVidG5fb3BlblwiKTtcbiAgY29uc3Qgb3BlbkJhcnMgPSBvcGVuQnRuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVudWJ0bl9iYXJcIik7XG4gIGNvbnN0IGNsb3NlQnRuID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVidG5fY2xvc2VcIik7XG4gIGNvbnN0IGNsb3NlQmFycyA9IGNsb3NlQnRuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVudWJ0bl9iYXJcIik7XG5cbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgLy8gaGlkZSBvcGVuXG4gIG9wZW5CYXJzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBlbCxcbiAgICAgIDAuNSxcbiAgICAgIHtcbiAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMTAwJSAwJVwiLFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICB9LFxuICAgICAgMC4wNSAqIGlcbiAgICApO1xuICB9KTtcbiAgLy8gc2hvdyBjbG9zZVxuICBjbG9zZUJhcnMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICB0bC50byhcbiAgICAgIGVsLFxuICAgICAgMC42LFxuICAgICAge1xuICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDAlXCIsXG4gICAgICB9LFxuICAgICAgMC4wNSAqIGkgKyAwLjVcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd09wZW5CdG5UaW1lbGluZSA9ICh3cmFwKSA9PiB7XG4gIGNvbnN0IG9wZW5CdG4gPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoXCIuanMtbWVudWJ0bl9vcGVuXCIpO1xuICBjb25zdCBvcGVuQmFycyA9IG9wZW5CdG4ucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tZW51YnRuX2JhclwiKTtcbiAgY29uc3QgY2xvc2VCdG4gPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoXCIuanMtbWVudWJ0bl9jbG9zZVwiKTtcbiAgY29uc3QgY2xvc2VCYXJzID0gY2xvc2VCdG4ucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tZW51YnRuX2JhclwiKTtcblxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICAvLyBoaWRlIGNsb3NlXG4gIGNsb3NlQmFycy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIHRsLnRvKFxuICAgICAgZWwsXG4gICAgICAwLjUsXG4gICAgICB7XG4gICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjEwMCUgMCVcIixcbiAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgfSxcbiAgICAgIDAuMDUgKiBpXG4gICAgKTtcbiAgfSk7XG4gIC8vIHNob3cgb3BlblxuICBvcGVuQmFycy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIHRsLnRvKFxuICAgICAgZWwsXG4gICAgICAwLjUsXG4gICAgICB7XG4gICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDBcIixcbiAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgfSxcbiAgICAgIDAuMDUgKiBpICsgMC41XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uRW50ZXJPcGVuQnRuID0gKHdyYXApID0+IHtcbiAgY29uc3Qgb3BlbkJ0biA9IHdyYXAucXVlcnlTZWxlY3RvcihcIi5qcy1tZW51YnRuX29wZW5cIik7XG4gIGNvbnN0IG9wZW5CYXJzID0gb3BlbkJ0bi5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1lbnVidG5fYmFyXCIpO1xuXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIC8vIG9wZW5idG5cbiAgb3BlbkJhcnMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICB0bFxuICAgICAgLy8gaGlkZSBvcGVuXG4gICAgICAudG8oXG4gICAgICAgIGVsLFxuICAgICAgICAwLjUsXG4gICAgICAgIHtcbiAgICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjEwMCUgMCVcIixcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDAuMDUgKiBpXG4gICAgICApXG4gICAgICAvLyBzaG93IG9wZW5cbiAgICAgIC50byhcbiAgICAgICAgZWwsXG4gICAgICAgIDAuNSxcbiAgICAgICAge1xuICAgICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCUgMCVcIixcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDAuMDUgKiBpICsgMC41XG4gICAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3Qgb25FbnRlckNsb3NlQnRuID0gKHdyYXApID0+IHtcbiAgY29uc3QgY2xvc2VCdG4gPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoXCIuanMtbWVudWJ0bl9jbG9zZVwiKTtcbiAgY29uc3QgY2xvc2VCYXJzID0gY2xvc2VCdG4ucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tZW51YnRuX2JhclwiKTtcblxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICAvLyBjbG9zZWJ0blxuICBjbG9zZUJhcnMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICB0bFxuICAgICAgLy8gaGlkZSBjbG9zZVxuICAgICAgLnRvKFxuICAgICAgICBlbCxcbiAgICAgICAgMC41LFxuICAgICAgICB7XG4gICAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIxMDAlIDAlXCIsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICAwLjA1ICogaVxuICAgICAgKVxuICAgICAgLy8gc2hvdyBjbG9zZVxuICAgICAgLnRvKFxuICAgICAgICBlbCxcbiAgICAgICAgMC41LFxuICAgICAgICB7XG4gICAgICAgICAgc2NhbGVYOiAxLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwJSAwJVwiLFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgfSxcbiAgICAgICAgMC4wNSAqIGkgKyAwLjVcbiAgICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiB0bDtcbn07XG4iXSwibmFtZXMiOlsiZ3NhcCIsInNob3dDbG9zZUJ0blRpbWVsaW5lIiwid3JhcCIsIm9wZW5CdG4iLCJxdWVyeVNlbGVjdG9yIiwib3BlbkJhcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VCdG4iLCJjbG9zZUJhcnMiLCJ0bCIsInRpbWVsaW5lIiwiZm9yRWFjaCIsImVsIiwiaSIsInRvIiwic2NhbGVYIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsInNob3dPcGVuQnRuVGltZWxpbmUiLCJvbkVudGVyT3BlbkJ0biIsIm9uRW50ZXJDbG9zZUJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu/RendererMenuButton.js\n");

/***/ })

});