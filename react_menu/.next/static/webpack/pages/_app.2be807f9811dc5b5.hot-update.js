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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/header.module.scss */ \"./styles/components/header.module.scss\");\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(props) {\n    _s();\n    var menu = props.menu;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var dom = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var item = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var tl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline());\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        dom.current = {\n            bar: item.current.querySelector(\".js-header_item_bar\")\n        };\n    }, []);\n    var showBar = function() {\n        tl.current.to(dom.current.bar, 0.7, {\n            scaleX: 1,\n            ease: \"expo.out\",\n            transformOrigin: \"0% 0%\"\n        });\n    };\n    var hideBar = function() {\n        tl.current.to(dom.current.bar, 0.7, {\n            scaleX: 0,\n            ease: \"expo.out\",\n            transformOrigin: \"100% 0%\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        item.current.classList.contains(\"isActive\") ? showBar() : hideBar();\n    }, [\n        router.pathname\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)\n        ]),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n            lineNumber: 41,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: menu.link,\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                // className={router.pathname == menu.link ? \"isActive\" : \"isNotActive\"}\n                ref: item,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navText),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: menu.name.toUpperCase()\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n                            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navLine),\n                            \"js-header_item_bar\"\n                        ]),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Item, \"ZYI9q2uDhlGVM4QVbepnYQ1H5bM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQzRCO0FBQ25DO0FBQ0w7QUFDZ0I7QUFDRTs7O0FBRWxDLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQzlCLEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxLQUFLLENBQWRDLElBQUk7SUFFWixHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7SUFDeEIsR0FBSyxDQUFDTyxHQUFHLEdBQUdMLDZDQUFNLENBQUMsSUFBSTtJQUN2QixHQUFLLENBQUNNLElBQUksR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBQ3hCLEdBQUssQ0FBQ08sRUFBRSxHQUFHUCw2Q0FBTSxDQUFDSCxxREFBYTtJQUUvQkUsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk0sR0FBRyxDQUFDSSxPQUFPLEdBQUcsQ0FBQztZQUFDQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0csT0FBTyxDQUFDRSxhQUFhLENBQUMsQ0FBcUI7UUFBRSxDQUFDO0lBQzFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCTCxFQUFFLENBQUNFLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDUixHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25DSSxNQUFNLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBVTtZQUNoQkMsZUFBZSxFQUFFLENBQU87UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCVixFQUFFLENBQUNFLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDUixHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25DSSxNQUFNLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBVTtZQUNoQkMsZUFBZSxFQUFFLENBQVM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRGpCLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZPLElBQUksQ0FBQ0csT0FBTyxDQUFDUyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxDQUFVLGFBQUlQLE9BQU8sS0FBS0ssT0FBTztJQUNuRSxDQUFDLEVBQUUsQ0FBQ2I7UUFBQUEsTUFBTSxDQUFDZ0IsUUFBUTtJQUFBLENBQUM7SUFFcEIsTUFBTSxzRUFDSEMsQ0FBRTtRQUFDQyxTQUFTLEVBQUU1QixpREFBVSxDQUFDLENBQUNDO1lBQUFBLHNGQUFjO1FBQUEsQ0FBQzs7Ozs7Ozt1RkFDdkNDLGtEQUFJO1lBQUM0QixJQUFJLEVBQUVyQixJQUFJLENBQUNzQixJQUFJOzs7Ozs7OzRGQUNsQkMsQ0FBQztnQkFDQSxFQUF3RTtnQkFFeEVDLEdBQUcsRUFBRXJCLElBQUk7Ozs7Ozs7O3lGQUVSc0IsQ0FBSTt3QkFBQ04sU0FBUyxFQUFFM0Isc0ZBQWM7Ozs7Ozs7a0NBQUdRLElBQUksQ0FBQzJCLElBQUksQ0FBQ0MsV0FBVzs7eUZBQ3RESCxDQUFJO3dCQUNITixTQUFTLEVBQUU1QixpREFBVSxDQUFDLENBQUNDOzRCQUFBQSxzRkFBYzs0QkFBRSxDQUFvQjt3QkFBQSxDQUFDOzs7Ozs7Ozs7Ozs7QUFNeEUsQ0FBQztHQWhEWU0sSUFBSTs7UUFHQUgsa0RBQVM7OztLQUhiRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0l0ZW0uanN4PzZmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBwcm9wcztcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZG9tID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpdGVtID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB0bCA9IHVzZVJlZihnc2FwLnRpbWVsaW5lKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9tLmN1cnJlbnQgPSB7IGJhcjogaXRlbS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVhZGVyX2l0ZW1fYmFyXCIpIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaG93QmFyID0gKCkgPT4ge1xuICAgIHRsLmN1cnJlbnQudG8oZG9tLmN1cnJlbnQuYmFyLCAwLjcsIHtcbiAgICAgIHNjYWxlWDogMSxcbiAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwJSAwJVwiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVCYXIgPSAoKSA9PiB7XG4gICAgdGwuY3VycmVudC50byhkb20uY3VycmVudC5iYXIsIDAuNywge1xuICAgICAgc2NhbGVYOiAwLFxuICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjEwMCUgMCVcIixcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGl0ZW0uY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpc0FjdGl2ZVwiKSA/IHNob3dCYXIoKSA6IGhpZGVCYXIoKTtcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbc3R5bGVzLm5hdkl0ZW1dKX0+XG4gICAgICA8TGluayBocmVmPXttZW51Lmxpbmt9PlxuICAgICAgICA8YVxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IG1lbnUubGluayA/IFwiaXNBY3RpdmVcIiA6IFwiaXNOb3RBY3RpdmVcIn1cblxuICAgICAgICAgIHJlZj17aXRlbX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hdlRleHR9PnttZW51Lm5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhbc3R5bGVzLm5hdkxpbmUsIFwianMtaGVhZGVyX2l0ZW1fYmFyXCJdKX1cbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIkxpbmsiLCJnc2FwIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSXRlbSIsInByb3BzIiwibWVudSIsInJvdXRlciIsImRvbSIsIml0ZW0iLCJ0bCIsInRpbWVsaW5lIiwiY3VycmVudCIsImJhciIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93QmFyIiwidG8iLCJzY2FsZVgiLCJlYXNlIiwidHJhbnNmb3JtT3JpZ2luIiwiaGlkZUJhciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGF0aG5hbWUiLCJsaSIsImNsYXNzTmFtZSIsIm5hdkl0ZW0iLCJocmVmIiwibGluayIsImEiLCJyZWYiLCJzcGFuIiwibmF2VGV4dCIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsIm5hdkxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/Item.jsx\n");

/***/ })

});