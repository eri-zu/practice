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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/pages/top/Home.module.scss":
/*!*******************************************!*\
  !*** ./styles/pages/top/Home.module.scss ***!
  \*******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrap\": \"Home_wrap__b2EaR\",\n\t\"bg\": \"Home_bg__3eYdi\",\n\t\"imgs\": \"Home_imgs__LtMtG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFnZXMvdG9wL0hvbWUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC8uL3N0eWxlcy9wYWdlcy90b3AvSG9tZS5tb2R1bGUuc2Nzcz9kMGYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJIb21lX3dyYXBfX2IyRWFSXCIsXG5cdFwiYmdcIjogXCJIb21lX2JnX18zZVlkaVwiLFxuXHRcImltZ3NcIjogXCJIb21lX2ltZ3NfX0x0TXRHXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/pages/top/Home.module.scss\n");

/***/ }),

/***/ "./components/pageAnime.js":
/*!*********************************!*\
  !*** ./components/pageAnime.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTL\": () => (/* binding */ showTL),\n/* harmony export */   \"hideTL\": () => (/* binding */ hideTL)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction showTL(spans) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0___default().timeline();\n    spans.forEach((span, i)=>{\n        tl.to(span, 0.1, {\n            opacity: 1\n        }, i * 0.05);\n    });\n    return tl;\n}\nfunction hideTL(spans) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0___default().timeline();\n    spans.forEach((span, i)=>{\n        tl.to(span, 0.1, {\n            opacity: 0\n        }, i * 0.05);\n    });\n    return tl;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VBbmltZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVCO0FBRWhCLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDQyxFQUFFLEdBQUdILG9EQUFhO0lBRXhCRSxLQUFLLENBQUNHLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUMxQkosRUFBRSxDQUFDSyxFQUFFLENBQ0hGLElBQUksRUFDSixHQUFHLEVBQ0gsQ0FBQztZQUNDRyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDREYsQ0FBQyxHQUFHLElBQUk7SUFFWixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQztBQUVNLFNBQVNPLE1BQU0sQ0FBQ1IsS0FBSyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDQyxFQUFFLEdBQUdILG9EQUFhO0lBRXhCRSxLQUFLLENBQUNHLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUMxQkosRUFBRSxDQUFDSyxFQUFFLENBQ0hGLElBQUksRUFDSixHQUFHLEVBQ0gsQ0FBQztZQUNDRyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDREYsQ0FBQyxHQUFHLElBQUk7SUFFWixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcmVhY3QvLi9jb21wb25lbnRzL3BhZ2VBbmltZS5qcz80NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VEwoc3BhbnMpIHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgc3BhbnMuZm9yRWFjaCgoc3BhbiwgaSkgPT4ge1xuICAgIHRsLnRvKFxuICAgICAgc3BhbixcbiAgICAgIDAuMSxcbiAgICAgIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgICBpICogMC4wNVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiB0bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUTChzcGFucykge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICBzcGFucy5mb3JFYWNoKChzcGFuLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBzcGFuLFxuICAgICAgMC4xLFxuICAgICAge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICAgIGkgKiAwLjA1XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufVxuIl0sIm5hbWVzIjpbImdzYXAiLCJzaG93VEwiLCJzcGFucyIsInRsIiwidGltZWxpbmUiLCJmb3JFYWNoIiwic3BhbiIsImkiLCJ0byIsIm9wYWNpdHkiLCJoaWRlVEwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pageAnime.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_top_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/top/Home.module.scss */ \"./styles/pages/top/Home.module.scss\");\n/* harmony import */ var _styles_pages_top_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_top_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pageAnime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pageAnime */ \"./components/pageAnime.js\");\n\n\n\n\n\nfunction Home({ hide , hideDone  }) {\n    const tl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_1___default().timeline());\n    const spans = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const _spans = spans.current.querySelectorAll(\"span\");\n        if (hide) {\n            tl.current = gsap__WEBPACK_IMPORTED_MODULE_1___default().timeline();\n            tl.current.add((0,_components_pageAnime__WEBPACK_IMPORTED_MODULE_3__.hideTL)(_spans));\n            tl.current.eventCallback(\"onComplete\", hideDone);\n        } else {\n            tl.current = gsap__WEBPACK_IMPORTED_MODULE_1___default().timeline();\n            tl.current.add((0,_components_pageAnime__WEBPACK_IMPORTED_MODULE_3__.showTL)(_spans));\n        }\n        return (e)=>tl.current.kill()\n        ;\n    }, [\n        hide\n    ]);\n    const pagename = \"TOP\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_pages_top_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/pages/index.jsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            ref: spans,\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            },\n            __self: this,\n            children: pagename.split(\"\").map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                    __source: {\n                        fileName: \"/Users/eri1221/practice/react_menu/pages/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: t\n                }, i + pagename)\n            )\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDbEM7QUFDa0I7QUFDZTtBQUV6QyxRQUFRLENBQUNNLElBQUksQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hELEtBQUssQ0FBQ0MsRUFBRSxHQUFHTiw2Q0FBTSxDQUFDRixvREFBYTtJQUMvQixLQUFLLENBQUNVLEtBQUssR0FBR1IsNkNBQU0sQ0FBQyxJQUFJO0lBRXpCRCxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNVLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxPQUFPLENBQUNDLGdCQUFnQixDQUFDLENBQU07UUFDcEQsRUFBRSxFQUFFUCxJQUFJLEVBQUUsQ0FBQztZQUNURSxFQUFFLENBQUNJLE9BQU8sR0FBR1osb0RBQWE7WUFDMUJRLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDRSxHQUFHLENBQUNWLDZEQUFNLENBQUNPLE1BQU07WUFDNUJILEVBQUUsQ0FBQ0ksT0FBTyxDQUFDRyxhQUFhLENBQUMsQ0FBWSxhQUFFUixRQUFRO1FBQ2pELENBQUMsTUFBTSxDQUFDO1lBQ05DLEVBQUUsQ0FBQ0ksT0FBTyxHQUFHWixvREFBYTtZQUMxQlEsRUFBRSxDQUFDSSxPQUFPLENBQUNFLEdBQUcsQ0FBQ1gsNkRBQU0sQ0FBQ1EsTUFBTTtRQUM5QixDQUFDO1FBQ0QsTUFBTSxFQUFFSyxDQUFDLEdBQUtSLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDSyxJQUFJOztJQUMvQixDQUFDLEVBQUUsQ0FBQ1g7UUFBQUEsSUFBSTtJQUFBLENBQUM7SUFFVCxLQUFLLENBQUNZLFFBQVEsR0FBRyxDQUFLO0lBQ3RCLE1BQU0sc0VBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFckIsZ0ZBQVc7Ozs7Ozs7dUZBQ3hCb0IsQ0FBRztZQUFDRyxHQUFHLEVBQUVaLEtBQUs7Ozs7Ozs7c0JBQ1pRLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLENBQUUsR0FBRUMsR0FBRyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsd0VBQzFCQyxDQUFJOzs7Ozs7OzhCQUFxQkYsQ0FBQzttQkFBaEJDLENBQUMsR0FBR1IsUUFBUTs7OztBQUtqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy90b3AvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaG93VEwsIGhpZGVUTCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VBbmltZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaGlkZSwgaGlkZURvbmUgfSkge1xuICBjb25zdCB0bCA9IHVzZVJlZihnc2FwLnRpbWVsaW5lKCkpO1xuICBjb25zdCBzcGFucyA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IF9zcGFucyA9IHNwYW5zLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XG4gICAgaWYgKGhpZGUpIHtcbiAgICAgIHRsLmN1cnJlbnQgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgICB0bC5jdXJyZW50LmFkZChoaWRlVEwoX3NwYW5zKSk7XG4gICAgICB0bC5jdXJyZW50LmV2ZW50Q2FsbGJhY2soXCJvbkNvbXBsZXRlXCIsIGhpZGVEb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGwuY3VycmVudCA9IGdzYXAudGltZWxpbmUoKTtcbiAgICAgIHRsLmN1cnJlbnQuYWRkKHNob3dUTChfc3BhbnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIChlKSA9PiB0bC5jdXJyZW50LmtpbGwoKTtcbiAgfSwgW2hpZGVdKTtcblxuICBjb25zdCBwYWdlbmFtZSA9IFwiVE9QXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgIDxkaXYgcmVmPXtzcGFuc30+XG4gICAgICAgIHtwYWdlbmFtZS5zcGxpdChcIlwiKS5tYXAoKHQsIGkpID0+IChcbiAgICAgICAgICA8c3BhbiBrZXk9e2kgKyBwYWdlbmFtZX0+e3R9PC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImdzYXAiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzaG93VEwiLCJoaWRlVEwiLCJIb21lIiwiaGlkZSIsImhpZGVEb25lIiwidGwiLCJ0aW1lbGluZSIsInNwYW5zIiwiX3NwYW5zIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGQiLCJldmVudENhbGxiYWNrIiwiZSIsImtpbGwiLCJwYWdlbmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXAiLCJyZWYiLCJzcGxpdCIsIm1hcCIsInQiLCJpIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();