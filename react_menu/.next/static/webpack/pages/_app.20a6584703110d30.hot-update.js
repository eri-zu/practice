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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Item = function(props) {\n    var menu = props.menu;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([\n            styles.navItem\n        ]),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {\n            href: menu.link,\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: styles.navText,\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: menu.name.toUpperCase()\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([\n                            styles.navLine\n                        ]),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }, menu.name));\n};\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSjs7QUFFNUIsR0FBSyxDQUFDRSxJQUFJLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztJQUM5QixHQUFLLENBQUdDLElBQUksR0FBS0QsS0FBSyxDQUFkQyxJQUFJO0lBRVosTUFBTSxzRUFDSEMsQ0FBRTtRQUFDQyxTQUFTLEVBQUVMLGlEQUFVLENBQUMsQ0FBQ007WUFBQUEsTUFBTSxDQUFDQyxPQUFPO1FBQUEsQ0FBQzs7Ozs7Ozt1RkFDdkNDLElBQUk7WUFBQ0MsSUFBSSxFQUFFTixJQUFJLENBQUNPLElBQUk7Ozs7Ozs7NEZBQ2xCQyxDQUFDOzs7Ozs7Ozt5RkFDQ0MsQ0FBSTt3QkFBQ1AsU0FBUyxFQUFFQyxNQUFNLENBQUNPLE9BQU87Ozs7Ozs7a0NBQUdWLElBQUksQ0FBQ1csSUFBSSxDQUFDQyxXQUFXOzt5RkFDdERILENBQUk7d0JBQUNQLFNBQVMsRUFBRUwsaURBQVUsQ0FBQyxDQUFDTTs0QkFBQUEsTUFBTSxDQUFDVSxPQUFPO3dCQUFBLENBQUM7Ozs7Ozs7Ozs7O09BSkFiLElBQUksQ0FBQ1csSUFBSTtBQVMvRCxDQUFDO0tBYlliLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSXRlbS5qc3g/NmYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmV4cG9ydCBjb25zdCBJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFtzdHlsZXMubmF2SXRlbV0pfSBrZXk9e21lbnUubmFtZX0+XG4gICAgICA8TGluayBocmVmPXttZW51Lmxpbmt9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZUZXh0fT57bWVudS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbc3R5bGVzLm5hdkxpbmVdKX0+PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiY2xhc3NOYW1lcyIsIkl0ZW0iLCJwcm9wcyIsIm1lbnUiLCJsaSIsImNsYXNzTmFtZSIsInN0eWxlcyIsIm5hdkl0ZW0iLCJMaW5rIiwiaHJlZiIsImxpbmsiLCJhIiwic3BhbiIsIm5hdlRleHQiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJuYXZMaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Item.jsx\n");

/***/ })

});