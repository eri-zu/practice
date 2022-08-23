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

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrap\": \"Home_wrap__G88qV\",\n\t\"bg\": \"Home_bg__6qLiw\",\n\t\"imgs\": \"Home_imgs__oivYd\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXJlYWN0Ly4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3M/NGVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwXCI6IFwiSG9tZV93cmFwX19HODhxVlwiLFxuXHRcImJnXCI6IFwiSG9tZV9iZ19fNnFMaXdcIixcblx0XCJpbWdzXCI6IFwiSG9tZV9pbWdzX19vaXZZZFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.scss\n");

/***/ }),

/***/ "./components/pageAnime.js":
/*!*********************************!*\
  !*** ./components/pageAnime.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTL\": () => (/* binding */ showTL),\n/* harmony export */   \"hideTL\": () => (/* binding */ hideTL)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction showTL(spans) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0___default().timeline();\n    spans.forEach((span, i)=>{\n        tl.to(span, 0.1, {\n            opacity: 1\n        }, i * 0.05);\n    });\n    return tl;\n}\nfunction hideTL(spans) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0___default().timeline();\n    spans.forEach((span, i)=>{\n        tl.to(span, 0.1, {\n            opacity: 0\n        }, i * 0.05);\n    });\n    return tl;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VBbmltZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVCO0FBQ2hCLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDQyxFQUFFLEdBQUdILG9EQUFhO0lBQ3hCRSxLQUFLLENBQUNHLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUMxQkosRUFBRSxDQUFDSyxFQUFFLENBQ0hGLElBQUksRUFDSixHQUFHLEVBQ0gsQ0FBQztZQUNDRyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDREYsQ0FBQyxHQUFHLElBQUk7SUFFWixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQztBQUVNLFNBQVNPLE1BQU0sQ0FBQ1IsS0FBSyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDQyxFQUFFLEdBQUdILG9EQUFhO0lBQ3hCRSxLQUFLLENBQUNHLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUMxQkosRUFBRSxDQUFDSyxFQUFFLENBQ0hGLElBQUksRUFDSixHQUFHLEVBQ0gsQ0FBQztZQUNDRyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDREYsQ0FBQyxHQUFHLElBQUk7SUFFWixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcmVhY3QvLi9jb21wb25lbnRzL3BhZ2VBbmltZS5qcz80NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5leHBvcnQgZnVuY3Rpb24gc2hvd1RMKHNwYW5zKSB7XG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuICBzcGFucy5mb3JFYWNoKChzcGFuLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBzcGFuLFxuICAgICAgMC4xLFxuICAgICAge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICAgIGkgKiAwLjA1XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVRMKHNwYW5zKSB7XG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuICBzcGFucy5mb3JFYWNoKChzcGFuLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBzcGFuLFxuICAgICAgMC4xLFxuICAgICAge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICAgIGkgKiAwLjA1XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufVxuIl0sIm5hbWVzIjpbImdzYXAiLCJzaG93VEwiLCJzcGFucyIsInRsIiwidGltZWxpbmUiLCJmb3JFYWNoIiwic3BhbiIsImkiLCJ0byIsIm9wYWNpdHkiLCJoaWRlVEwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pageAnime.js\n");

/***/ }),

/***/ "./pages/works/index.jsx":
/*!*******************************!*\
  !*** ./pages/works/index.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pageAnime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pageAnime */ \"./components/pageAnime.js\");\n\n\n\n\n\nfunction About({ hide , hideDone  }) {\n    const tl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline());\n    const spans = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const _spans = spans.current.querySelectorAll(\"span\");\n        if (hide) {\n            tl.current = gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline();\n            tl.current.add((0,_components_pageAnime__WEBPACK_IMPORTED_MODULE_3__.hideTL)(_spans));\n            tl.current.eventCallback(\"onComplete\", hideDone);\n        } else {\n            tl.current = gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline();\n            tl.current.add((0,_components_pageAnime__WEBPACK_IMPORTED_MODULE_3__.showTL)(_spans));\n        }\n        return (e)=>tl.current.kill()\n        ;\n    }, [\n        hide\n    ]);\n    const pagename = \"WORKS\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap),\n        __source: {\n            fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                ref: spans,\n                __source: {\n                    fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: pagename.split(\"\").map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/Users/eri1221/practice/react_menu/pages/works/index.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: t\n                    }, i + pagename)\n                )\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDUztBQUMzQjtBQUNvQztBQUM1QyxRQUFRLENBQUNNLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELEtBQUssQ0FBQ0MsRUFBRSxHQUFHUiw2Q0FBTSxDQUFDRSxvREFBYTtJQUMvQixLQUFLLENBQUNRLEtBQUssR0FBR1YsNkNBQU0sQ0FBQyxJQUFJO0lBRXpCRCxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNZLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxPQUFPLENBQUNDLGdCQUFnQixDQUFDLENBQU07UUFFcEQsRUFBRSxFQUFFUCxJQUFJLEVBQUUsQ0FBQztZQUNURSxFQUFFLENBQUNJLE9BQU8sR0FBR1Ysb0RBQWE7WUFDMUJNLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDRSxHQUFHLENBQUNWLDZEQUFNLENBQUNPLE1BQU07WUFDNUJILEVBQUUsQ0FBQ0ksT0FBTyxDQUFDRyxhQUFhLENBQUMsQ0FBWSxhQUFFUixRQUFRO1FBQ2pELENBQUMsTUFBTSxDQUFDO1lBQ05DLEVBQUUsQ0FBQ0ksT0FBTyxHQUFHVixvREFBYTtZQUMxQk0sRUFBRSxDQUFDSSxPQUFPLENBQUNFLEdBQUcsQ0FBQ1gsNkRBQU0sQ0FBQ1EsTUFBTTtRQUM5QixDQUFDO1FBQ0QsTUFBTSxFQUFFSyxDQUFDLEdBQUtSLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDSyxJQUFJOztJQUMvQixDQUFDLEVBQUUsQ0FBQ1g7UUFBQUEsSUFBSTtJQUFBLENBQUM7SUFFVCxLQUFLLENBQUNZLFFBQVEsR0FBRyxDQUFPO0lBQ3hCLE1BQU0sc0VBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFbkIsc0VBQVc7Ozs7Ozs7dUZBQ3hCa0IsQ0FBRzs7Ozs7OzsyRkFDREEsQ0FBRztnQkFBQ0csR0FBRyxFQUFFWixLQUFLOzs7Ozs7OzBCQUNaUSxRQUFRLENBQUNLLEtBQUssQ0FBQyxDQUFFLEdBQUVDLEdBQUcsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLHdFQUMxQkMsQ0FBSTs7Ozs7OztrQ0FBcUJGLENBQUM7dUJBQWhCQyxDQUFDLEdBQUdSLFFBQVE7Ozs7O0FBTW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXJlYWN0Ly4vcGFnZXMvd29ya3MvaW5kZXguanN4P2Q3ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgc2hvd1RMLCBoaWRlVEwgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlQW5pbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHsgaGlkZSwgaGlkZURvbmUgfSkge1xuICBjb25zdCB0bCA9IHVzZVJlZihnc2FwLnRpbWVsaW5lKCkpO1xuICBjb25zdCBzcGFucyA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IF9zcGFucyA9IHNwYW5zLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XG5cbiAgICBpZiAoaGlkZSkge1xuICAgICAgdGwuY3VycmVudCA9IGdzYXAudGltZWxpbmUoKTtcbiAgICAgIHRsLmN1cnJlbnQuYWRkKGhpZGVUTChfc3BhbnMpKTtcbiAgICAgIHRsLmN1cnJlbnQuZXZlbnRDYWxsYmFjayhcIm9uQ29tcGxldGVcIiwgaGlkZURvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bC5jdXJyZW50ID0gZ3NhcC50aW1lbGluZSgpO1xuICAgICAgdGwuY3VycmVudC5hZGQoc2hvd1RMKF9zcGFucykpO1xuICAgIH1cbiAgICByZXR1cm4gKGUpID0+IHRsLmN1cnJlbnQua2lsbCgpO1xuICB9LCBbaGlkZV0pO1xuXG4gIGNvbnN0IHBhZ2VuYW1lID0gXCJXT1JLU1wiO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHJlZj17c3BhbnN9PlxuICAgICAgICAgIHtwYWdlbmFtZS5zcGxpdChcIlwiKS5tYXAoKHQsIGkpID0+IChcbiAgICAgICAgICAgIDxzcGFuIGtleT17aSArIHBhZ2VuYW1lfT57dH08L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiZ3NhcCIsInNob3dUTCIsImhpZGVUTCIsIkFib3V0IiwiaGlkZSIsImhpZGVEb25lIiwidGwiLCJ0aW1lbGluZSIsInNwYW5zIiwiX3NwYW5zIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGQiLCJldmVudENhbGxiYWNrIiwiZSIsImtpbGwiLCJwYWdlbmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXAiLCJyZWYiLCJzcGxpdCIsIm1hcCIsInQiLCJpIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works/index.jsx\n");

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