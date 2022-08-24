/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/works";
exports.ids = ["pages/works"];
exports.modules = {

/***/ "./styles/pages/works/home.module.scss":
/*!*********************************************!*\
  !*** ./styles/pages/works/home.module.scss ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrap\": \"home_wrap___msuI\",\n\t\"bg\": \"home_bg__JaFY_\",\n\t\"imgs\": \"home_imgs__NSM7z\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFnZXMvd29ya3MvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXJlYWN0Ly4vc3R5bGVzL3BhZ2VzL3dvcmtzL2hvbWUubW9kdWxlLnNjc3M/NjlmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwXCI6IFwiaG9tZV93cmFwX19fbXN1SVwiLFxuXHRcImJnXCI6IFwiaG9tZV9iZ19fSmFGWV9cIixcblx0XCJpbWdzXCI6IFwiaG9tZV9pbWdzX19OU003elwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/pages/works/home.module.scss\n");

/***/ }),

/***/ "./components/pageAnime.js":
/*!*********************************!*\
  !*** ./components/pageAnime.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTL\": () => (/* binding */ showTL),\n/* harmony export */   \"hideTL\": () => (/* binding */ hideTL)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction showTL(spans) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0___default().timeline();\n    spans.forEach((span, i)=>{\n        tl.to(span, 0.1, {\n            opacity: 1\n        }, i * 0.05);\n    });\n    return tl;\n}\nfunction hideTL(spans) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0___default().timeline();\n    spans.forEach((span, i)=>{\n        tl.to(span, 0.1, {\n            opacity: 0\n        }, i * 0.05);\n    });\n    return tl;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VBbmltZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVCO0FBRWhCLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDQyxFQUFFLEdBQUdILG9EQUFhO0lBRXhCRSxLQUFLLENBQUNHLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUMxQkosRUFBRSxDQUFDSyxFQUFFLENBQ0hGLElBQUksRUFDSixHQUFHLEVBQ0gsQ0FBQztZQUNDRyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDREYsQ0FBQyxHQUFHLElBQUk7SUFFWixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQztBQUVNLFNBQVNPLE1BQU0sQ0FBQ1IsS0FBSyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDQyxFQUFFLEdBQUdILG9EQUFhO0lBRXhCRSxLQUFLLENBQUNHLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUMxQkosRUFBRSxDQUFDSyxFQUFFLENBQ0hGLElBQUksRUFDSixHQUFHLEVBQ0gsQ0FBQztZQUNDRyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDREYsQ0FBQyxHQUFHLElBQUk7SUFFWixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcmVhY3QvLi9jb21wb25lbnRzL3BhZ2VBbmltZS5qcz80NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VEwoc3BhbnMpIHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgc3BhbnMuZm9yRWFjaCgoc3BhbiwgaSkgPT4ge1xuICAgIHRsLnRvKFxuICAgICAgc3BhbixcbiAgICAgIDAuMSxcbiAgICAgIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgICBpICogMC4wNVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiB0bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUTChzcGFucykge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICBzcGFucy5mb3JFYWNoKChzcGFuLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBzcGFuLFxuICAgICAgMC4xLFxuICAgICAge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICAgIGkgKiAwLjA1XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufVxuIl0sIm5hbWVzIjpbImdzYXAiLCJzaG93VEwiLCJzcGFucyIsInRsIiwidGltZWxpbmUiLCJmb3JFYWNoIiwic3BhbiIsImkiLCJ0byIsIm9wYWNpdHkiLCJoaWRlVEwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pageAnime.js\n");

/***/ }),

/***/ "./pages/works/index.jsx":
/*!*******************************!*\
  !*** ./pages/works/index.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_pages_works_home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/pages/works/home.module.scss */ \"./styles/pages/works/home.module.scss\");\n/* harmony import */ var _styles_pages_works_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_works_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pageAnime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pageAnime */ \"./components/pageAnime.js\");\n\n\n\n\n\nfunction About({ hide , hideDone  }) {\n    const tl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline());\n    const spans = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const _spans = spans.current.querySelectorAll(\"span\");\n        if (hide) {\n            tl.current = gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline();\n            tl.current.add((0,_components_pageAnime__WEBPACK_IMPORTED_MODULE_3__.hideTL)(_spans));\n            tl.current.eventCallback(\"onComplete\", hideDone);\n        } else {\n            tl.current = gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline();\n            tl.current.add((0,_components_pageAnime__WEBPACK_IMPORTED_MODULE_3__.showTL)(_spans));\n        }\n        return (e)=>tl.current.kill()\n        ;\n    }, [\n        hide\n    ]);\n    const pagename = \"WORKS\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_pages_works_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                ref: spans,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: pagename.split(\"\").map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: t\n                    }, i + pagename)\n                )\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDcUI7QUFDdkM7QUFDb0M7QUFDNUMsUUFBUSxDQUFDTSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxLQUFLLENBQUNDLEVBQUUsR0FBR1IsNkNBQU0sQ0FBQ0Usb0RBQWE7SUFDL0IsS0FBSyxDQUFDUSxLQUFLLEdBQUdWLDZDQUFNLENBQUMsSUFBSTtJQUV6QkQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDWSxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFNO1FBRXBELEVBQUUsRUFBRVAsSUFBSSxFQUFFLENBQUM7WUFDVEUsRUFBRSxDQUFDSSxPQUFPLEdBQUdWLG9EQUFhO1lBQzFCTSxFQUFFLENBQUNJLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDViw2REFBTSxDQUFDTyxNQUFNO1lBQzVCSCxFQUFFLENBQUNJLE9BQU8sQ0FBQ0csYUFBYSxDQUFDLENBQVksYUFBRVIsUUFBUTtRQUNqRCxDQUFDLE1BQU0sQ0FBQztZQUNOQyxFQUFFLENBQUNJLE9BQU8sR0FBR1Ysb0RBQWE7WUFDMUJNLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDRSxHQUFHLENBQUNYLDZEQUFNLENBQUNRLE1BQU07UUFDOUIsQ0FBQztRQUNELE1BQU0sRUFBRUssQ0FBQyxHQUFLUixFQUFFLENBQUNJLE9BQU8sQ0FBQ0ssSUFBSTs7SUFDL0IsQ0FBQyxFQUFFLENBQUNYO1FBQUFBLElBQUk7SUFBQSxDQUFDO0lBRVQsS0FBSyxDQUFDWSxRQUFRLEdBQUcsQ0FBTztJQUN4QixNQUFNLHNFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRW5CLGtGQUFXOzs7Ozs7O3VGQUN4QmtCLENBQUc7Ozs7Ozs7MkZBQ0RBLENBQUc7Z0JBQUNHLEdBQUcsRUFBRVosS0FBSzs7Ozs7OzswQkFDWlEsUUFBUSxDQUFDSyxLQUFLLENBQUMsQ0FBRSxHQUFFQyxHQUFHLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyx3RUFDMUJDLENBQUk7Ozs7Ozs7a0NBQXFCRixDQUFDO3VCQUFoQkMsQ0FBQyxHQUFHUixRQUFROzs7OztBQU1uQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC8uL3BhZ2VzL3dvcmtzL2luZGV4LmpzeD9kNzg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFnZXMvd29ya3MvaG9tZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHNob3dUTCwgaGlkZVRMIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZUFuaW1lXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCh7IGhpZGUsIGhpZGVEb25lIH0pIHtcbiAgY29uc3QgdGwgPSB1c2VSZWYoZ3NhcC50aW1lbGluZSgpKTtcbiAgY29uc3Qgc3BhbnMgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBfc3BhbnMgPSBzcGFucy5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpO1xuXG4gICAgaWYgKGhpZGUpIHtcbiAgICAgIHRsLmN1cnJlbnQgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgICB0bC5jdXJyZW50LmFkZChoaWRlVEwoX3NwYW5zKSk7XG4gICAgICB0bC5jdXJyZW50LmV2ZW50Q2FsbGJhY2soXCJvbkNvbXBsZXRlXCIsIGhpZGVEb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGwuY3VycmVudCA9IGdzYXAudGltZWxpbmUoKTtcbiAgICAgIHRsLmN1cnJlbnQuYWRkKHNob3dUTChfc3BhbnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIChlKSA9PiB0bC5jdXJyZW50LmtpbGwoKTtcbiAgfSwgW2hpZGVdKTtcblxuICBjb25zdCBwYWdlbmFtZSA9IFwiV09SS1NcIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiByZWY9e3NwYW5zfT5cbiAgICAgICAgICB7cGFnZW5hbWUuc3BsaXQoXCJcIikubWFwKCh0LCBpKSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2kgKyBwYWdlbmFtZX0+e3R9PC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsImdzYXAiLCJzaG93VEwiLCJoaWRlVEwiLCJBYm91dCIsImhpZGUiLCJoaWRlRG9uZSIsInRsIiwidGltZWxpbmUiLCJzcGFucyIsIl9zcGFucyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkIiwiZXZlbnRDYWxsYmFjayIsImUiLCJraWxsIiwicGFnZW5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwIiwicmVmIiwic3BsaXQiLCJtYXAiLCJ0IiwiaSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/works/index.jsx\n");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/works/index.jsx"));
module.exports = __webpack_exports__;

})();