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

/***/ "./components/menu/RendererMenuButton.js":
/*!***********************************************!*\
  !*** ./components/menu/RendererMenuButton.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openMenuButton\": function() { return /* binding */ openMenuButton; },\n/* harmony export */   \"closeMenuButton\": function() { return /* binding */ closeMenuButton; },\n/* harmony export */   \"onEnterOpenButton\": function() { return /* binding */ onEnterOpenButton; },\n/* harmony export */   \"onEnterCloseButton\": function() { return /* binding */ onEnterCloseButton; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar openMenuButton = function(wrap) {\n    var openBtn = wrap.querySelector(\".js-menubtn_open\");\n    var openBars = openBtn.querySelectorAll(\".js-menubtn_bar\");\n    var closeBtn = wrap.querySelector(\".js-menubtn_close\");\n    var closeBars = closeBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // hide open\n    openBars.forEach(function(el, i) {\n        tl.to(el, 0.5, {\n            scaleX: 0,\n            transformOrigin: \"100% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i);\n    });\n    // show close\n    closeBars.forEach(function(el, i) {\n        tl.to(el, 0.6, {\n            scaleX: 1,\n            ease: \"expo.out\",\n            transformOrigin: \"0% 0%\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\nvar closeMenuButton = function(wrap) {\n    var openBtn = wrap.querySelector(\".js-menubtn_open\");\n    var openBars = openBtn.querySelectorAll(\".js-menubtn_bar\");\n    var closeBtn = wrap.querySelector(\".js-menubtn_close\");\n    var closeBars = closeBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // hide close\n    closeBars.forEach(function(el, i) {\n        tl.to(el, 0.5, {\n            scaleX: 0,\n            transformOrigin: \"100% 0%\",\n            ease: \"expo.out\"\n        }, 0.05 * i);\n    });\n    // show open\n    openBars.forEach(function(el, i) {\n        tl.to(el, 0.5, {\n            scaleX: 1,\n            transformOrigin: \"0% 0\",\n            ease: \"expo.out\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\nvar onEnterOpenButton = function(wrap) {\n    var openBtn = wrap.querySelector(\".js-menubtn_open\");\n    var openBars = openBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // openbtn\n    openBars.forEach(function(el, i) {\n        tl// set\n        .set(el, {\n            transformOrigin: \"100% 0\"\n        })// hide\n        .to(el, 0.5, {\n            scaleX: 0,\n            ease: \"expo.out\"\n        }, 0.05 * i)// set\n        .set(el, {\n            transformOrigin: \"0% 0\"\n        }, 0.05 * i + 0.5)// show\n        .to(el, 0.5, {\n            scaleX: 1,\n            ease: \"expo.out\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\nvar onEnterCloseButton = function(wrap) {\n    var closeBtn = wrap.querySelector(\".js-menubtn_close\");\n    var closeBars = closeBtn.querySelectorAll(\".js-menubtn_bar\");\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    // closebtn\n    closeBars.forEach(function(el, i) {\n        tl// set\n        .set(el, {\n            transformOrigin: \"100% 0\"\n        })// hide\n        .to(el, 0.5, {\n            scaleX: 0,\n            ease: \"expo.out\"\n        }, 0.05 * i)// set\n        .set(el, {\n            transformOrigin: \"0% 0\"\n        }, 0.05 * i + 0.5)// show\n        .to(el, 0.5, {\n            scaleX: 1,\n            ease: \"expo.out\"\n        }, 0.05 * i + 0.5);\n    });\n    return tl;\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvUmVuZGVyZXJNZW51QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QjtBQUVoQixHQUFLLENBQUNDLGNBQWMsR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO0lBQ3ZDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRCxJQUFJLENBQUNFLGFBQWEsQ0FBQyxDQUFrQjtJQUNyRCxHQUFLLENBQUNDLFFBQVEsR0FBR0YsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFpQjtJQUMzRCxHQUFLLENBQUNDLFFBQVEsR0FBR0wsSUFBSSxDQUFDRSxhQUFhLENBQUMsQ0FBbUI7SUFDdkQsR0FBSyxDQUFDSSxTQUFTLEdBQUdELFFBQVEsQ0FBQ0QsZ0JBQWdCLENBQUMsQ0FBaUI7SUFFN0QsR0FBSyxDQUFDRyxFQUFFLEdBQUdULHFEQUFhO0lBRXhCLEVBQVk7SUFDWkssUUFBUSxDQUFDTSxPQUFPLENBQUMsUUFBUSxDQUFQQyxFQUFFLEVBQUVDLENBQUMsRUFBSyxDQUFDO1FBQzNCSixFQUFFLENBQUNLLEVBQUUsQ0FDSEYsRUFBRSxFQUNGLEdBQUcsRUFDSCxDQUFDO1lBQ0NHLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLGVBQWUsRUFBRSxDQUFTO1lBQzFCQyxJQUFJLEVBQUUsQ0FBVTtRQUNsQixDQUFDLEVBQ0QsSUFBSSxHQUFHSixDQUFDO0lBRVosQ0FBQztJQUNELEVBQWE7SUFDYkwsU0FBUyxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFQQyxFQUFFLEVBQUVDLENBQUMsRUFBSyxDQUFDO1FBQzVCSixFQUFFLENBQUNLLEVBQUUsQ0FDSEYsRUFBRSxFQUNGLEdBQUcsRUFDSCxDQUFDO1lBQ0NHLE1BQU0sRUFBRSxDQUFDO1lBQ1RFLElBQUksRUFBRSxDQUFVO1lBQ2hCRCxlQUFlLEVBQUUsQ0FBTztRQUMxQixDQUFDLEVBQ0QsSUFBSSxHQUFHSCxDQUFDLEdBQUcsR0FBRztJQUVsQixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQztBQUVNLEdBQUssQ0FBQ1MsZUFBZSxHQUFHLFFBQVEsQ0FBUGhCLElBQUksRUFBSyxDQUFDO0lBQ3hDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRCxJQUFJLENBQUNFLGFBQWEsQ0FBQyxDQUFrQjtJQUNyRCxHQUFLLENBQUNDLFFBQVEsR0FBR0YsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFpQjtJQUMzRCxHQUFLLENBQUNDLFFBQVEsR0FBR0wsSUFBSSxDQUFDRSxhQUFhLENBQUMsQ0FBbUI7SUFDdkQsR0FBSyxDQUFDSSxTQUFTLEdBQUdELFFBQVEsQ0FBQ0QsZ0JBQWdCLENBQUMsQ0FBaUI7SUFFN0QsR0FBSyxDQUFDRyxFQUFFLEdBQUdULHFEQUFhO0lBRXhCLEVBQWE7SUFDYlEsU0FBUyxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFQQyxFQUFFLEVBQUVDLENBQUMsRUFBSyxDQUFDO1FBQzVCSixFQUFFLENBQUNLLEVBQUUsQ0FDSEYsRUFBRSxFQUNGLEdBQUcsRUFDSCxDQUFDO1lBQ0NHLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLGVBQWUsRUFBRSxDQUFTO1lBQzFCQyxJQUFJLEVBQUUsQ0FBVTtRQUNsQixDQUFDLEVBQ0QsSUFBSSxHQUFHSixDQUFDO0lBRVosQ0FBQztJQUNELEVBQVk7SUFDWlIsUUFBUSxDQUFDTSxPQUFPLENBQUMsUUFBUSxDQUFQQyxFQUFFLEVBQUVDLENBQUMsRUFBSyxDQUFDO1FBQzNCSixFQUFFLENBQUNLLEVBQUUsQ0FDSEYsRUFBRSxFQUNGLEdBQUcsRUFDSCxDQUFDO1lBQ0NHLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLGVBQWUsRUFBRSxDQUFNO1lBQ3ZCQyxJQUFJLEVBQUUsQ0FBVTtRQUNsQixDQUFDLEVBQ0QsSUFBSSxHQUFHSixDQUFDLEdBQUcsR0FBRztJQUVsQixDQUFDO0lBRUQsTUFBTSxDQUFDSixFQUFFO0FBQ1gsQ0FBQztBQUVNLEdBQUssQ0FBQ1UsaUJBQWlCLEdBQUcsUUFBUSxDQUFQakIsSUFBSSxFQUFLLENBQUM7SUFDMUMsR0FBSyxDQUFDQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQWtCO0lBQ3JELEdBQUssQ0FBQ0MsUUFBUSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLENBQWlCO0lBRTNELEdBQUssQ0FBQ0csRUFBRSxHQUFHVCxxREFBYTtJQUV4QixFQUFVO0lBQ1ZLLFFBQVEsQ0FBQ00sT0FBTyxDQUFDLFFBQVEsQ0FBUEMsRUFBRSxFQUFFQyxDQUFDLEVBQUssQ0FBQztRQUMzQkosRUFBRSxFQUNNO1NBQ0xXLEdBQUcsQ0FBQ1IsRUFBRSxFQUFFLENBQUM7WUFBQ0ksZUFBZSxFQUFFLENBQVE7UUFBQyxDQUFDLENBQ3RDLEVBQU87U0FDTkYsRUFBRSxDQUNERixFQUFFLEVBQ0YsR0FBRyxFQUNILENBQUM7WUFDQ0csTUFBTSxFQUFFLENBQUM7WUFDVEUsSUFBSSxFQUFFLENBQVU7UUFDbEIsQ0FBQyxFQUNELElBQUksR0FBR0osQ0FBQyxDQUVWLEVBQU07U0FDTE8sR0FBRyxDQUFDUixFQUFFLEVBQUUsQ0FBQztZQUFDSSxlQUFlLEVBQUUsQ0FBTTtRQUFDLENBQUMsRUFBRSxJQUFJLEdBQUdILENBQUMsR0FBRyxHQUFHLENBQ3BELEVBQU87U0FDTkMsRUFBRSxDQUNERixFQUFFLEVBQ0YsR0FBRyxFQUNILENBQUM7WUFDQ0csTUFBTSxFQUFFLENBQUM7WUFDVEUsSUFBSSxFQUFFLENBQVU7UUFDbEIsQ0FBQyxFQUNELElBQUksR0FBR0osQ0FBQyxHQUFHLEdBQUc7SUFFcEIsQ0FBQztJQUVELE1BQU0sQ0FBQ0osRUFBRTtBQUNYLENBQUM7QUFFTSxHQUFLLENBQUNZLGtCQUFrQixHQUFHLFFBQVEsQ0FBUG5CLElBQUksRUFBSyxDQUFDO0lBQzNDLEdBQUssQ0FBQ0ssUUFBUSxHQUFHTCxJQUFJLENBQUNFLGFBQWEsQ0FBQyxDQUFtQjtJQUN2RCxHQUFLLENBQUNJLFNBQVMsR0FBR0QsUUFBUSxDQUFDRCxnQkFBZ0IsQ0FBQyxDQUFpQjtJQUU3RCxHQUFLLENBQUNHLEVBQUUsR0FBR1QscURBQWE7SUFFeEIsRUFBVztJQUNYUSxTQUFTLENBQUNHLE9BQU8sQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDNUJKLEVBQUUsRUFDTTtTQUNMVyxHQUFHLENBQUNSLEVBQUUsRUFBRSxDQUFDO1lBQUNJLGVBQWUsRUFBRSxDQUFRO1FBQUMsQ0FBQyxDQUN0QyxFQUFPO1NBQ05GLEVBQUUsQ0FDREYsRUFBRSxFQUNGLEdBQUcsRUFDSCxDQUFDO1lBQ0NHLE1BQU0sRUFBRSxDQUFDO1lBQ1RFLElBQUksRUFBRSxDQUFVO1FBQ2xCLENBQUMsRUFDRCxJQUFJLEdBQUdKLENBQUMsQ0FFVixFQUFNO1NBQ0xPLEdBQUcsQ0FBQ1IsRUFBRSxFQUFFLENBQUM7WUFBQ0ksZUFBZSxFQUFFLENBQU07UUFBQyxDQUFDLEVBQUUsSUFBSSxHQUFHSCxDQUFDLEdBQUcsR0FBRyxDQUNwRCxFQUFPO1NBQ05DLEVBQUUsQ0FDREYsRUFBRSxFQUNGLEdBQUcsRUFDSCxDQUFDO1lBQ0NHLE1BQU0sRUFBRSxDQUFDO1lBQ1RFLElBQUksRUFBRSxDQUFVO1FBQ2xCLENBQUMsRUFDRCxJQUFJLEdBQUdKLENBQUMsR0FBRyxHQUFHO0lBRXBCLENBQUM7SUFFRCxNQUFNLENBQUNKLEVBQUU7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVudS9SZW5kZXJlck1lbnVCdXR0b24uanM/Njg3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgY29uc3Qgb3Blbk1lbnVCdXR0b24gPSAod3JhcCkgPT4ge1xuICBjb25zdCBvcGVuQnRuID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVidG5fb3BlblwiKTtcbiAgY29uc3Qgb3BlbkJhcnMgPSBvcGVuQnRuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVudWJ0bl9iYXJcIik7XG4gIGNvbnN0IGNsb3NlQnRuID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVidG5fY2xvc2VcIik7XG4gIGNvbnN0IGNsb3NlQmFycyA9IGNsb3NlQnRuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVudWJ0bl9iYXJcIik7XG5cbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgLy8gaGlkZSBvcGVuXG4gIG9wZW5CYXJzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBlbCxcbiAgICAgIDAuNSxcbiAgICAgIHtcbiAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMTAwJSAwJVwiLFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICB9LFxuICAgICAgMC4wNSAqIGlcbiAgICApO1xuICB9KTtcbiAgLy8gc2hvdyBjbG9zZVxuICBjbG9zZUJhcnMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICB0bC50byhcbiAgICAgIGVsLFxuICAgICAgMC42LFxuICAgICAge1xuICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDAlXCIsXG4gICAgICB9LFxuICAgICAgMC4wNSAqIGkgKyAwLjVcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VNZW51QnV0dG9uID0gKHdyYXApID0+IHtcbiAgY29uc3Qgb3BlbkJ0biA9IHdyYXAucXVlcnlTZWxlY3RvcihcIi5qcy1tZW51YnRuX29wZW5cIik7XG4gIGNvbnN0IG9wZW5CYXJzID0gb3BlbkJ0bi5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1lbnVidG5fYmFyXCIpO1xuICBjb25zdCBjbG9zZUJ0biA9IHdyYXAucXVlcnlTZWxlY3RvcihcIi5qcy1tZW51YnRuX2Nsb3NlXCIpO1xuICBjb25zdCBjbG9zZUJhcnMgPSBjbG9zZUJ0bi5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1lbnVidG5fYmFyXCIpO1xuXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIC8vIGhpZGUgY2xvc2VcbiAgY2xvc2VCYXJzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBlbCxcbiAgICAgIDAuNSxcbiAgICAgIHtcbiAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMTAwJSAwJVwiLFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICB9LFxuICAgICAgMC4wNSAqIGlcbiAgICApO1xuICB9KTtcbiAgLy8gc2hvdyBvcGVuXG4gIG9wZW5CYXJzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgdGwudG8oXG4gICAgICBlbCxcbiAgICAgIDAuNSxcbiAgICAgIHtcbiAgICAgICAgc2NhbGVYOiAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCUgMFwiLFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICB9LFxuICAgICAgMC4wNSAqIGkgKyAwLjVcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3Qgb25FbnRlck9wZW5CdXR0b24gPSAod3JhcCkgPT4ge1xuICBjb25zdCBvcGVuQnRuID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVidG5fb3BlblwiKTtcbiAgY29uc3Qgb3BlbkJhcnMgPSBvcGVuQnRuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVudWJ0bl9iYXJcIik7XG5cbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgLy8gb3BlbmJ0blxuICBvcGVuQmFycy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIHRsXG4gICAgICAvLyBzZXRcbiAgICAgIC5zZXQoZWwsIHsgdHJhbnNmb3JtT3JpZ2luOiBcIjEwMCUgMFwiIH0pXG4gICAgICAvLyBoaWRlXG4gICAgICAudG8oXG4gICAgICAgIGVsLFxuICAgICAgICAwLjUsXG4gICAgICAgIHtcbiAgICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICAwLjA1ICogaVxuICAgICAgKVxuICAgICAgLy8gc2V0XG4gICAgICAuc2V0KGVsLCB7IHRyYW5zZm9ybU9yaWdpbjogXCIwJSAwXCIgfSwgMC4wNSAqIGkgKyAwLjUpXG4gICAgICAvLyBzaG93XG4gICAgICAudG8oXG4gICAgICAgIGVsLFxuICAgICAgICAwLjUsXG4gICAgICAgIHtcbiAgICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICAwLjA1ICogaSArIDAuNVxuICAgICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uRW50ZXJDbG9zZUJ1dHRvbiA9ICh3cmFwKSA9PiB7XG4gIGNvbnN0IGNsb3NlQnRuID0gd3JhcC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVidG5fY2xvc2VcIik7XG4gIGNvbnN0IGNsb3NlQmFycyA9IGNsb3NlQnRuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVudWJ0bl9iYXJcIik7XG5cbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgLy8gY2xvc2VidG5cbiAgY2xvc2VCYXJzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgdGxcbiAgICAgIC8vIHNldFxuICAgICAgLnNldChlbCwgeyB0cmFuc2Zvcm1PcmlnaW46IFwiMTAwJSAwXCIgfSlcbiAgICAgIC8vIGhpZGVcbiAgICAgIC50byhcbiAgICAgICAgZWwsXG4gICAgICAgIDAuNSxcbiAgICAgICAge1xuICAgICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDAuMDUgKiBpXG4gICAgICApXG4gICAgICAvLyBzZXRcbiAgICAgIC5zZXQoZWwsIHsgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDBcIiB9LCAwLjA1ICogaSArIDAuNSlcbiAgICAgIC8vIHNob3dcbiAgICAgIC50byhcbiAgICAgICAgZWwsXG4gICAgICAgIDAuNSxcbiAgICAgICAge1xuICAgICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDAuMDUgKiBpICsgMC41XG4gICAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGw7XG59O1xuIl0sIm5hbWVzIjpbImdzYXAiLCJvcGVuTWVudUJ1dHRvbiIsIndyYXAiLCJvcGVuQnRuIiwicXVlcnlTZWxlY3RvciIsIm9wZW5CYXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3NlQnRuIiwiY2xvc2VCYXJzIiwidGwiLCJ0aW1lbGluZSIsImZvckVhY2giLCJlbCIsImkiLCJ0byIsInNjYWxlWCIsInRyYW5zZm9ybU9yaWdpbiIsImVhc2UiLCJjbG9zZU1lbnVCdXR0b24iLCJvbkVudGVyT3BlbkJ1dHRvbiIsInNldCIsIm9uRW50ZXJDbG9zZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu/RendererMenuButton.js\n");

/***/ })

});