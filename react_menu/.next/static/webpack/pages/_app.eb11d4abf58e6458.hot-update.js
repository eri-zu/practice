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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/header.module.scss */ \"./styles/components/header.module.scss\");\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(props) {\n    _s();\n    var menu = props.menu;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var wrap = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([\n            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navItem)\n        ]),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: menu.link,\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([\n                    router.pathname == menu.link ? \"isActive\" : \"isNotActive\",\n                    \"js-header_item\", \n                ]),\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navText),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: menu.name.toUpperCase()\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([\n                            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLine)\n                        ]),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Item, \"2qIROSgbl4Zcu0hkFlLUR7SdBUQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSjtBQUM0QjtBQUNuQztBQUN1Qjs7O0FBRTVDLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQzlCLEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxLQUFLLENBQWRDLElBQUk7SUFDWixHQUFLLENBQUNDLE1BQU0sR0FBR1Ysc0RBQVM7SUFDeEIsR0FBSyxDQUFDVyxJQUFJLEdBQUdOLDZDQUFNLENBQUMsSUFBSTtJQUV4QkQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztJQUFBLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFdEIsTUFBTSxzRUFDSFEsQ0FBRTtRQUFDQyxTQUFTLEVBQUVaLGlEQUFVLENBQUMsQ0FBQ0M7WUFBQUEsc0ZBQWM7UUFBQSxDQUFDOzs7Ozs7O3VGQUN2Q0Msa0RBQUk7WUFBQ1ksSUFBSSxFQUFFTixJQUFJLENBQUNPLElBQUk7Ozs7Ozs7NEZBQ2xCQyxDQUFDO2dCQUNBSixTQUFTLEVBQUVaLGlEQUFVLENBQUMsQ0FBQztvQkFDckJTLE1BQU0sQ0FBQ1EsUUFBUSxJQUFJVCxJQUFJLENBQUNPLElBQUksR0FBRyxDQUFVLFlBQUcsQ0FBYTtvQkFDekQsQ0FBZ0I7Z0JBQ2xCLENBQUM7Ozs7Ozs7O3lGQUVBRyxDQUFJO3dCQUFDTixTQUFTLEVBQUVYLHNGQUFjOzs7Ozs7O2tDQUFHTyxJQUFJLENBQUNZLElBQUksQ0FBQ0MsV0FBVzs7eUZBQ3RESCxDQUFJO3dCQUFDTixTQUFTLEVBQUVaLGlEQUFVLENBQUMsQ0FBQ0M7NEJBQUFBLHNGQUFjO3dCQUFBLENBQUM7Ozs7Ozs7Ozs7OztBQUt0RCxDQUFDO0dBdEJZSyxJQUFJOztRQUVBUCxrREFBUzs7O0tBRmJPLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSXRlbS5qc3g/NmYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9oZWFkZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgSXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHByb3BzO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgd3JhcCA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoW3N0eWxlcy5uYXZJdGVtXSl9PlxuICAgICAgPExpbmsgaHJlZj17bWVudS5saW5rfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoW1xuICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IG1lbnUubGluayA/IFwiaXNBY3RpdmVcIiA6IFwiaXNOb3RBY3RpdmVcIixcbiAgICAgICAgICAgIFwianMtaGVhZGVyX2l0ZW1cIixcbiAgICAgICAgICBdKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hdlRleHR9PnttZW51Lm5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFtzdHlsZXMubmF2TGluZV0pfT48L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSXRlbSIsInByb3BzIiwibWVudSIsInJvdXRlciIsIndyYXAiLCJsaSIsImNsYXNzTmFtZSIsIm5hdkl0ZW0iLCJocmVmIiwibGluayIsImEiLCJwYXRobmFtZSIsInNwYW4iLCJuYXZUZXh0IiwibmFtZSIsInRvVXBwZXJDYXNlIiwibmF2TGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Item.jsx\n");

/***/ })

});