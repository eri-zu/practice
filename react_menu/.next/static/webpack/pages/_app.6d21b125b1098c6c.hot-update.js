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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/header.module.scss */ \"./styles/components/header.module.scss\");\n/* harmony import */ var _styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(props) {\n    _s();\n    var menu = props.menu;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var dom = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var item = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var tl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline());\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        dom.current = {\n            bar: item.current.querySelector(\".js-header_item_bar\")\n        };\n    }, []);\n    var showBar = function() {\n        tl.current.to(dom.current.bar, 0.7, {\n            scaleX: 1,\n            ease: \"expo.out\",\n            transformOrigin: \"0% 0%\"\n        });\n    };\n    var hideBar = function() {\n        tl.current.to(dom.current.bar, 0.7, {\n            scaleX: 0,\n            ease: \"expo.out\",\n            transformOrigin: \"100% 0%\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        item.current.classList.contains(\"isActive\") ? showBar() : hideBar();\n    }, [\n        router.pathname\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)\n        ]),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n            lineNumber: 43,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: menu.link,\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n                    router.pathname == menu.link ? \"isActive\" : \"isNotActive\",\n                    \"js-header_item\", \n                ]),\n                ref: item,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navText),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: menu.name.toUpperCase()\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([\n                            (_styles_components_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navLine),\n                            \"js-header_item_bar\"\n                        ]),\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/components/Header/Item.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Item, \"ZYI9q2uDhlGVM4QVbepnYQ1H5bM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQzRCO0FBQ25DO0FBQ0w7QUFDZ0I7QUFDWTs7O0FBRTVDLEdBQUssQ0FBQ1EsSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQzlCLEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxLQUFLLENBQWRDLElBQUk7SUFFWixHQUFLLENBQUNDLE1BQU0sR0FBR1Asc0RBQVM7SUFDeEIsR0FBSyxDQUFDUSxHQUFHLEdBQUdOLDZDQUFNLENBQUMsSUFBSTtJQUN2QixHQUFLLENBQUNPLElBQUksR0FBR1AsNkNBQU0sQ0FBQyxJQUFJO0lBQ3hCLEdBQUssQ0FBQ1EsRUFBRSxHQUFHUiw2Q0FBTSxDQUFDSCxxREFBYTtJQUUvQkUsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk8sR0FBRyxDQUFDSSxPQUFPLEdBQUcsQ0FBQztZQUNiQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0csT0FBTyxDQUFDRSxhQUFhLENBQUMsQ0FBcUI7UUFDdkQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCTCxFQUFFLENBQUNFLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDUixHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25DSSxNQUFNLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBVTtZQUNoQkMsZUFBZSxFQUFFLENBQU87UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCVixFQUFFLENBQUNFLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDUixHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25DSSxNQUFNLEVBQUUsQ0FBQztZQUNUQyxJQUFJLEVBQUUsQ0FBVTtZQUNoQkMsZUFBZSxFQUFFLENBQVM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRGxCLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZRLElBQUksQ0FBQ0csT0FBTyxDQUFDUyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxDQUFVLGFBQUlQLE9BQU8sS0FBS0ssT0FBTztJQUNuRSxDQUFDLEVBQUUsQ0FBQ2I7UUFBQUEsTUFBTSxDQUFDZ0IsUUFBUTtJQUFBLENBQUM7SUFFcEIsTUFBTSxzRUFDSEMsQ0FBRTtRQUFDQyxTQUFTLEVBQUU3QixpREFBVSxDQUFDLENBQUNDO1lBQUFBLHNGQUFjO1FBQUEsQ0FBQzs7Ozs7Ozt1RkFDdkNDLGtEQUFJO1lBQUM2QixJQUFJLEVBQUVyQixJQUFJLENBQUNzQixJQUFJOzs7Ozs7OzRGQUNsQkMsQ0FBQztnQkFDQUosU0FBUyxFQUFFN0IsaURBQVUsQ0FBQyxDQUFDO29CQUNyQlcsTUFBTSxDQUFDZ0IsUUFBUSxJQUFJakIsSUFBSSxDQUFDc0IsSUFBSSxHQUFHLENBQVUsWUFBRyxDQUFhO29CQUN6RCxDQUFnQjtnQkFDbEIsQ0FBQztnQkFDREUsR0FBRyxFQUFFckIsSUFBSTs7Ozs7Ozs7eUZBRVJzQixDQUFJO3dCQUFDTixTQUFTLEVBQUU1QixzRkFBYzs7Ozs7OztrQ0FBR1MsSUFBSSxDQUFDMkIsSUFBSSxDQUFDQyxXQUFXOzt5RkFDdERILENBQUk7d0JBQ0hOLFNBQVMsRUFBRTdCLGlEQUFVLENBQUMsQ0FBQ0M7NEJBQUFBLHNGQUFjOzRCQUFFLENBQW9CO3dCQUFBLENBQUM7Ozs7Ozs7Ozs7OztBQU14RSxDQUFDO0dBcERZTyxJQUFJOztRQUdBSixrREFBUzs7O0tBSGJJLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSXRlbS5qc3g/NmYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvaGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBwcm9wcztcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZG9tID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpdGVtID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB0bCA9IHVzZVJlZihnc2FwLnRpbWVsaW5lKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9tLmN1cnJlbnQgPSB7XG4gICAgICBiYXI6IGl0ZW0uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWhlYWRlcl9pdGVtX2JhclwiKSxcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2hvd0JhciA9ICgpID0+IHtcbiAgICB0bC5jdXJyZW50LnRvKGRvbS5jdXJyZW50LmJhciwgMC43LCB7XG4gICAgICBzY2FsZVg6IDEsXG4gICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCUgMCVcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoaWRlQmFyID0gKCkgPT4ge1xuICAgIHRsLmN1cnJlbnQudG8oZG9tLmN1cnJlbnQuYmFyLCAwLjcsIHtcbiAgICAgIHNjYWxlWDogMCxcbiAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIxMDAlIDAlXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpdGVtLmN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXNBY3RpdmVcIikgPyBzaG93QmFyKCkgOiBoaWRlQmFyKCk7XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoW3N0eWxlcy5uYXZJdGVtXSl9PlxuICAgICAgPExpbmsgaHJlZj17bWVudS5saW5rfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoW1xuICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IG1lbnUubGluayA/IFwiaXNBY3RpdmVcIiA6IFwiaXNOb3RBY3RpdmVcIixcbiAgICAgICAgICAgIFwianMtaGVhZGVyX2l0ZW1cIixcbiAgICAgICAgICBdKX1cbiAgICAgICAgICByZWY9e2l0ZW19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZUZXh0fT57bWVudS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoW3N0eWxlcy5uYXZMaW5lLCBcImpzLWhlYWRlcl9pdGVtX2JhclwiXSl9XG4gICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJMaW5rIiwiZ3NhcCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSXRlbSIsInByb3BzIiwibWVudSIsInJvdXRlciIsImRvbSIsIml0ZW0iLCJ0bCIsInRpbWVsaW5lIiwiY3VycmVudCIsImJhciIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93QmFyIiwidG8iLCJzY2FsZVgiLCJlYXNlIiwidHJhbnNmb3JtT3JpZ2luIiwiaGlkZUJhciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGF0aG5hbWUiLCJsaSIsImNsYXNzTmFtZSIsIm5hdkl0ZW0iLCJocmVmIiwibGluayIsImEiLCJyZWYiLCJzcGFuIiwibmF2VGV4dCIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsIm5hdkxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/Item.jsx\n");

/***/ })

});