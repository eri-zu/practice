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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ \"./components/menu/Drawer.jsx\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuButton */ \"./components/menu/MenuButton.jsx\");\n/* harmony import */ var _RendererDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RendererDrawer */ \"./components/menu/RendererDrawer.js\");\n/* harmony import */ var _RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RendererMenuButton */ \"./components/menu/RendererMenuButton.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Menu = function() {\n    _s();\n    var tl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].timeline());\n    var btn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var drawer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setMenuStatus = ref[1];\n    var open = function() {\n        tl.current.kill();\n        tl.current = gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].timeline();\n        tl.current// btn\n        .add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.openMenuButton)(btn.current))// drawer\n        .add((0,_RendererDrawer__WEBPACK_IMPORTED_MODULE_4__.showDrawer)(drawer.current), 0);\n    };\n    var close = function() {\n        tl.current.kill();\n        tl.current = gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].timeline();\n        tl.current// btn\n        .add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.closeMenuButton)(btn.current))// drawer\n        .add((0,_RendererDrawer__WEBPACK_IMPORTED_MODULE_4__.hideDrawer)(drawer.current), 0);\n    };\n    var onClickHandler = function() {\n        setMenuStatus(!isOpen);\n    };\n    var onEnter = function() {\n        isOpen ? tl.current.add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.onEnterCloseButton)(btn.current)) : tl.current.add((0,_RendererMenuButton__WEBPACK_IMPORTED_MODULE_5__.onEnterOpenBtn)(btn.current));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isFirstRender.current) {\n            isOpen ? open() : close();\n        } else {\n            isFirstRender.current = true;\n        }\n    }, [\n        isOpen\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                ref: btn,\n                onClick: onClickHandler,\n                isOpen: isOpen,\n                onMouseEnter: onEnter,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/menu/Menu.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Drawer__WEBPACK_IMPORTED_MODULE_2__.Drawer, {\n                ref: drawer,\n                isOpen: isOpen,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/menu/Menu.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Menu, \"WQ78tMCYNkLTZhg221uTqqyBb/E=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvTWVudS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2xCO0FBQ1E7QUFDZ0I7QUFNNUI7QUFDTjs7O0FBRWhCLEdBQUssQ0FBQ1ksSUFBSSxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7O0lBQ3pCLEdBQUssQ0FBQ0MsRUFBRSxHQUFHWiw2Q0FBTSxDQUFDVSxxREFBYTtJQUMvQixHQUFLLENBQUNJLEdBQUcsR0FBR2QsNkNBQU0sQ0FBQyxJQUFJO0lBQ3ZCLEdBQUssQ0FBQ2UsTUFBTSxHQUFHZiw2Q0FBTSxDQUFDLElBQUk7SUFDMUIsR0FBSyxDQUFDZ0IsYUFBYSxHQUFHaEIsNkNBQU0sQ0FBQyxLQUFLO0lBQ2xDLEdBQUssQ0FBMkJDLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDZ0IsTUFBTSxHQUFtQmhCLEdBQWUsS0FBaENpQixhQUFhLEdBQUlqQixHQUFlO0lBRS9DLEdBQUssQ0FBQ2tCLElBQUksR0FBRyxRQUNmLEdBRHFCLENBQUM7UUFDbEJQLEVBQUUsQ0FBQ1EsT0FBTyxDQUFDQyxJQUFJO1FBQ2ZULEVBQUUsQ0FBQ1EsT0FBTyxHQUFHVixxREFBYTtRQUUxQkUsRUFBRSxDQUFDUSxPQUFPLEVBQ0Y7U0FDTEUsR0FBRyxDQUFDYixtRUFBYyxDQUFDSyxHQUFHLENBQUNNLE9BQU8sRUFDL0IsRUFBUztTQUNSRSxHQUFHLENBQUNqQiwyREFBVSxDQUFDVSxNQUFNLENBQUNLLE9BQU8sR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxHQUFLLENBQUNHLEtBQUssR0FBRyxRQUNoQixHQURzQixDQUFDO1FBQ25CWCxFQUFFLENBQUNRLE9BQU8sQ0FBQ0MsSUFBSTtRQUNmVCxFQUFFLENBQUNRLE9BQU8sR0FBR1YscURBQWE7UUFFMUJFLEVBQUUsQ0FBQ1EsT0FBTyxFQUNGO1NBQ0xFLEdBQUcsQ0FBQ2hCLG9FQUFlLENBQUNRLEdBQUcsQ0FBQ00sT0FBTyxFQUNoQyxFQUFTO1NBQ1JFLEdBQUcsQ0FBQ2xCLDJEQUFVLENBQUNXLE1BQU0sQ0FBQ0ssT0FBTyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVELEdBQUssQ0FBQ0ksY0FBYyxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7UUFDNUJOLGFBQWEsRUFBRUQsTUFBTTtJQUN2QixDQUFDO0lBRUQsR0FBSyxDQUFDUSxPQUFPLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztRQUNyQlIsTUFBTSxHQUNGTCxFQUFFLENBQUNRLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDZix1RUFBa0IsQ0FBQ08sR0FBRyxDQUFDTSxPQUFPLEtBQzdDUixFQUFFLENBQUNRLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDZCxtRUFBYyxDQUFDTSxHQUFHLENBQUNNLE9BQU87SUFDL0MsQ0FBQztJQUVEckIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUVpQixhQUFhLENBQUNJLE9BQU8sRUFBRSxDQUFDO1lBQzFCSCxNQUFNLEdBQUdFLElBQUksS0FBS0ksS0FBSztRQUN6QixDQUFDLE1BQU0sQ0FBQztZQUNOUCxhQUFhLENBQUNJLE9BQU8sR0FBRyxJQUFJO1FBQzlCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0g7UUFBQUEsTUFBTTtJQUFBLENBQUM7SUFFWCxNQUFNOztpRkFFRGQsbURBQVU7Z0JBQ1R1QixHQUFHLEVBQUVaLEdBQUc7Z0JBQ1JhLE9BQU8sRUFBRUgsY0FBYztnQkFDdkJQLE1BQU0sRUFBRUEsTUFBTTtnQkFDZFcsWUFBWSxFQUFFSCxPQUFPOzs7Ozs7OztpRkFFdEJ2QiwyQ0FBTTtnQkFBQ3dCLEdBQUcsRUFBRVgsTUFBTTtnQkFBRUUsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7Ozs7O0FBR3pDLENBQUM7R0ExRFlOLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUvTWVudS5qc3g/NjM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYXdlciB9IGZyb20gXCIuL0RyYXdlclwiO1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gXCIuL01lbnVCdXR0b25cIjtcbmltcG9ydCB7IGhpZGVEcmF3ZXIsIHNob3dEcmF3ZXIgfSBmcm9tIFwiLi9SZW5kZXJlckRyYXdlclwiO1xuaW1wb3J0IHtcbiAgY2xvc2VNZW51QnV0dG9uLFxuICBvbkVudGVyQ2xvc2VCdXR0b24sXG4gIG9uRW50ZXJPcGVuQnRuLFxuICBvcGVuTWVudUJ1dHRvbixcbn0gZnJvbSBcIi4vUmVuZGVyZXJNZW51QnV0dG9uXCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgdGwgPSB1c2VSZWYoZ3NhcC50aW1lbGluZSgpKTtcbiAgY29uc3QgYnRuID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcmF3ZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzRmlyc3RSZW5kZXIgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRNZW51U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuID0gKCkgPT4ge1xuICAgIHRsLmN1cnJlbnQua2lsbCgpO1xuICAgIHRsLmN1cnJlbnQgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgICB0bC5jdXJyZW50XG4gICAgICAvLyBidG5cbiAgICAgIC5hZGQob3Blbk1lbnVCdXR0b24oYnRuLmN1cnJlbnQpKVxuICAgICAgLy8gZHJhd2VyXG4gICAgICAuYWRkKHNob3dEcmF3ZXIoZHJhd2VyLmN1cnJlbnQpLCAwKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICB0bC5jdXJyZW50LmtpbGwoKTtcbiAgICB0bC5jdXJyZW50ID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gICAgdGwuY3VycmVudFxuICAgICAgLy8gYnRuXG4gICAgICAuYWRkKGNsb3NlTWVudUJ1dHRvbihidG4uY3VycmVudCkpXG4gICAgICAvLyBkcmF3ZXJcbiAgICAgIC5hZGQoaGlkZURyYXdlcihkcmF3ZXIuY3VycmVudCksIDApO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldE1lbnVTdGF0dXMoIWlzT3Blbik7XG4gIH07XG5cbiAgY29uc3Qgb25FbnRlciA9ICgpID0+IHtcbiAgICBpc09wZW5cbiAgICAgID8gdGwuY3VycmVudC5hZGQob25FbnRlckNsb3NlQnV0dG9uKGJ0bi5jdXJyZW50KSlcbiAgICAgIDogdGwuY3VycmVudC5hZGQob25FbnRlck9wZW5CdG4oYnRuLmN1cnJlbnQpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0ZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcbiAgICAgIGlzT3BlbiA/IG9wZW4oKSA6IGNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzRmlyc3RSZW5kZXIuY3VycmVudCA9IHRydWU7XG4gICAgfVxuICB9LCBbaXNPcGVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgcmVmPXtidG59XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkVudGVyfVxuICAgICAgLz5cbiAgICAgIDxEcmF3ZXIgcmVmPXtkcmF3ZXJ9IGlzT3Blbj17aXNPcGVufSAvPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRyYXdlciIsIk1lbnVCdXR0b24iLCJoaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsImNsb3NlTWVudUJ1dHRvbiIsIm9uRW50ZXJDbG9zZUJ1dHRvbiIsIm9uRW50ZXJPcGVuQnRuIiwib3Blbk1lbnVCdXR0b24iLCJnc2FwIiwiTWVudSIsInRsIiwidGltZWxpbmUiLCJidG4iLCJkcmF3ZXIiLCJpc0ZpcnN0UmVuZGVyIiwiaXNPcGVuIiwic2V0TWVudVN0YXR1cyIsIm9wZW4iLCJjdXJyZW50Iiwia2lsbCIsImFkZCIsImNsb3NlIiwib25DbGlja0hhbmRsZXIiLCJvbkVudGVyIiwicmVmIiwib25DbGljayIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu/Menu.jsx\n");

/***/ })

});