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

/***/ "./components/Header/Item.jsx":
/*!************************************!*\
  !*** ./components/Header/Item.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/header.module.scss */ \"./styles/components/header.module.scss\");\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(props) {\n    _s();\n    var menu = props.menu;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var dom = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var item = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var tl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline());\n    var showBar = function() {\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        dom.current = {\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)\n        ]),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: menu.link,\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n                    router.pathname == menu.link ? \"isActive\" : \"isNotActive\",\n                    \"js-header_item\", \n                ]),\n                ref: item,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navText),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: menu.name.toUpperCase()\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n                            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navLine),\n                            \"js-header_item_bar\"\n                        ]),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Item, \"B5Bu5T6G0QLmjdTKsbbvxpvuojs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQzRCO0FBQ25DO0FBQ0w7QUFDZ0I7QUFDWTs7O0FBRTVDLEdBQUssQ0FBQ1EsSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQzlCLEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxLQUFLLENBQWRDLElBQUk7SUFDWixHQUFLLENBQUNDLE1BQU0sR0FBR1Asc0RBQVM7SUFDeEIsR0FBSyxDQUFDUSxHQUFHLEdBQUdOLDZDQUFNLENBQUMsSUFBSTtJQUN2QixHQUFLLENBQUNPLElBQUksR0FBR1AsNkNBQU0sQ0FBQyxJQUFJO0lBQ3hCLEdBQUssQ0FBQ1EsRUFBRSxHQUFHUiw2Q0FBTSxDQUFDSCxxREFBYTtJQUUvQixHQUFLLENBQUNhLE9BQU8sR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUFBLENBQUM7SUFFeEJYLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZPLEdBQUcsQ0FBQ0ssT0FBTyxHQUFHLENBQUM7UUFBQSxDQUFDO0lBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHNFQUNIQyxDQUFFO1FBQUNDLFNBQVMsRUFBRW5CLGlEQUFVLENBQUMsQ0FBQ0M7WUFBQUEsc0ZBQWM7UUFBQSxDQUFDOzs7Ozs7O3VGQUN2Q0Msa0RBQUk7WUFBQ21CLElBQUksRUFBRVgsSUFBSSxDQUFDWSxJQUFJOzs7Ozs7OzRGQUNsQkMsQ0FBQztnQkFDQUosU0FBUyxFQUFFbkIsaURBQVUsQ0FBQyxDQUFDO29CQUNyQlcsTUFBTSxDQUFDYSxRQUFRLElBQUlkLElBQUksQ0FBQ1ksSUFBSSxHQUFHLENBQVUsWUFBRyxDQUFhO29CQUN6RCxDQUFnQjtnQkFDbEIsQ0FBQztnQkFDREcsR0FBRyxFQUFFWixJQUFJOzs7Ozs7Ozt5RkFFUmEsQ0FBSTt3QkFBQ1AsU0FBUyxFQUFFbEIsc0ZBQWM7Ozs7Ozs7a0NBQUdTLElBQUksQ0FBQ2tCLElBQUksQ0FBQ0MsV0FBVzs7eUZBQ3RESCxDQUFJO3dCQUNIUCxTQUFTLEVBQUVuQixpREFBVSxDQUFDLENBQUNDOzRCQUFBQSxzRkFBYzs0QkFBRSxDQUFvQjt3QkFBQSxDQUFDOzs7Ozs7Ozs7Ozs7QUFNeEUsQ0FBQztHQS9CWU8sSUFBSTs7UUFFQUosa0RBQVM7OztLQUZiSSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0l0ZW0uanN4PzZmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gcHJvcHM7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkb20gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGl0ZW0gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRsID0gdXNlUmVmKGdzYXAudGltZWxpbmUoKSk7XG5cbiAgY29uc3Qgc2hvd0JhciA9ICgpID0+IHt9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9tLmN1cnJlbnQgPSB7fTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbc3R5bGVzLm5hdkl0ZW1dKX0+XG4gICAgICA8TGluayBocmVmPXttZW51Lmxpbmt9PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbXG4gICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gbWVudS5saW5rID8gXCJpc0FjdGl2ZVwiIDogXCJpc05vdEFjdGl2ZVwiLFxuICAgICAgICAgICAgXCJqcy1oZWFkZXJfaXRlbVwiLFxuICAgICAgICAgIF0pfVxuICAgICAgICAgIHJlZj17aXRlbX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hdlRleHR9PnttZW51Lm5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbc3R5bGVzLm5hdkxpbmUsIFwianMtaGVhZGVyX2l0ZW1fYmFyXCJdKX1cbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIkxpbmsiLCJnc2FwIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJJdGVtIiwicHJvcHMiLCJtZW51Iiwicm91dGVyIiwiZG9tIiwiaXRlbSIsInRsIiwidGltZWxpbmUiLCJzaG93QmFyIiwiY3VycmVudCIsImxpIiwiY2xhc3NOYW1lIiwibmF2SXRlbSIsImhyZWYiLCJsaW5rIiwiYSIsInBhdGhuYW1lIiwicmVmIiwic3BhbiIsIm5hdlRleHQiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJuYXZMaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Item.jsx\n");

/***/ })

});