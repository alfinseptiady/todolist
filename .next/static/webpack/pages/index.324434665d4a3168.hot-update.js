"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setTodoList((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            userInput: userInput\n        }, todoList));\n    };\n    var handleDelete = function(todo) {\n        var updateArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Membuat TodoList Dengan Next.Js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 61\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Hapus\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 52\n                            }, _this1)\n                        ]\n                    }, idx, true, {\n                        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 32\n                    }, _this1);\n                }) : \"Tekan sebuah todo item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQWdDOztBQUdoQyxJQUFNQyxLQUFLLEdBQUcsV0FBTTs7O0lBRWhCLElBQWlDRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXRDRSxTQUFTLEdBQWlCRixHQUFZLEdBQTdCLEVBQUNHLFlBQVksR0FBSUgsR0FBWSxHQUFoQjtJQUM3QixJQUErQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFwQ0ksUUFBUSxHQUFnQkosSUFBWSxHQUE1QixFQUFDSyxXQUFXLEdBQUlMLElBQVksR0FBaEI7SUFFM0IsSUFBTU0sWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN4QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFFbEJMLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQztLQUUvQjtJQUVELElBQU1DLFlBQVksR0FBRyxTQUFDSixDQUFDLEVBQUs7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBRWxCSCxXQUFXLENBQUM7WUFDUkgsU0FBUyxFQUFUQSxTQUFTO1dBQ05FLFFBQVEsQ0FDZCxDQUFDO0tBQ0w7SUFDRCxJQUFNUSxZQUFZLEdBQUcsU0FBQ0MsSUFBSSxFQUFJO1FBQzFCLElBQU1DLFNBQVMsR0FBR1YsUUFBUSxDQUFDVyxNQUFNLENBQUNDLFNBQUFBLFFBQVE7bUJBQUlaLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDRCxRQUFRLENBQUMsSUFBSVosUUFBUSxDQUFDYSxPQUFPLENBQUNKLElBQUksQ0FBQztTQUFBLENBQUM7S0FDdEc7SUFHRCxxQkFDSSw4REFBQ0ssS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsaUNBQStCOzs7OztxQkFBSzswQkFDeEMsOERBQUNDLE1BQUk7O2tDQUNELDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsUUFBUSxFQUFFakIsWUFBWTs7Ozs7NkJBQUc7a0NBQUEsOERBQUNrQixRQUFNO3dCQUFDQyxPQUFPLEVBQUdkLFlBQVk7a0NBQUcsUUFBTTs7Ozs7NkJBQVM7Ozs7OztxQkFDekY7MEJBRVAsOERBQUNlLElBQUU7MEJBRUt0QixRQUFRLENBQUN1QixNQUFNLElBQUksQ0FBQyxHQUFHdkIsUUFBUSxDQUFDd0IsR0FBRyxDQUFDLFNBQUNmLElBQUksRUFBRWdCLEdBQUcsRUFBSztvQkFDL0MscUJBQU8sOERBQUNDLElBQUU7OzRCQUFZakIsSUFBSTswQ0FBQyw4REFBQ1csUUFBTTtnQ0FBQ0MsT0FBTyxFQUFFLFNBQUNsQixDQUFDLEVBQUk7b0NBQzlDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtvQ0FDbEJJLFlBQVksQ0FBQ0MsSUFBSSxDQUFDO2lDQUNyQjswQ0FBRSxPQUFLOzs7OztzQ0FBUzs7dUJBSERnQixHQUFHOzs7OzhCQUdHO2lCQUN6QixDQUFDLEdBQ0Esd0JBQXdCOzs7OztxQkFFN0I7Ozs7OzthQUVILENBRVQ7Q0FDSjtHQS9DSzVCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQWlEWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcklucHV0LHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt0b2RvTGlzdCxzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgc2V0VG9kb0xpc3Qoe1xyXG4gICAgICAgICAgICB1c2VySW5wdXQsXHJcbiAgICAgICAgICAgIC4uLnRvZG9MaXN0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PntcclxuICAgICAgICBjb25zdCB1cGRhdGVBcnIgPSB0b2RvTGlzdC5maWx0ZXIodG9kb0l0ZW0gPT4gdG9kb0xpc3QuaW5kZXhPZih0b2RvSXRlbSkgIT0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5NZW1idWF0IFRvZG9MaXN0IERlbmdhbiBOZXh0LkpzPC9oMz5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXsoaGFuZGxlU3VibWl0KX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49IDEgPyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PkhhcHVzPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ1Rla2FuIHNlYnVhaCB0b2RvIGl0ZW0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwiZGl2IiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJpZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});