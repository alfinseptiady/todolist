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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setTodoList(function(state) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).concat([\n                userInput\n            ]);\n        });\n    };\n    setUserInput(\"\");\n    var handleDelete = function(todo) {\n        var updateArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n        setTodoList(updateArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Membuat TodoList Dengan Next.Js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Hapus\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 52\n                            }, _this1)\n                        ]\n                    }, idx, true, {\n                        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 32\n                    }, _this1);\n                }) : \"Tekan sebuah todo item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PT-DIKA\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQWdDOztBQUdoQyxJQUFNQyxLQUFLLEdBQUcsV0FBTTs7O0lBRWhCLElBQWlDRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXRDRSxTQUFTLEdBQWlCRixHQUFZLEdBQTdCLEVBQUNHLFlBQVksR0FBSUgsR0FBWSxHQUFoQjtJQUM3QixJQUErQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFwQ0ksUUFBUSxHQUFnQkosSUFBWSxHQUE1QixFQUFDSyxXQUFXLEdBQUlMLElBQVksR0FBaEI7SUFFM0IsSUFBTU0sWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN4QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFFbEJMLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQztLQUUvQjtJQUVELElBQU1DLFlBQVksR0FBRyxTQUFDSixDQUFDLEVBQUs7UUFFeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCSCxXQUFXLENBQUNPLFNBQUFBLEtBQUs7bUJBQUkscUZBQUlBLEtBQUssQ0FBTEEsUUFBSjtnQkFBV1YsU0FBUzthQUFDO1NBQUEsQ0FBQztLQUM5QztJQUNEQyxZQUFZLENBQUMsRUFBRSxDQUFDO0lBRWhCLElBQU1VLFlBQVksR0FBRyxTQUFDQyxJQUFJLEVBQUk7UUFDMUIsSUFBTUMsU0FBUyxHQUFHWCxRQUFRLENBQUNZLE1BQU0sQ0FBQ0MsU0FBQUEsUUFBUTttQkFBSWIsUUFBUSxDQUFDYyxPQUFPLENBQUNELFFBQVEsQ0FBQyxJQUFJYixRQUFRLENBQUNjLE9BQU8sQ0FBQ0osSUFBSSxDQUFDO1NBQUEsQ0FBQztRQUVuR1QsV0FBVyxDQUFDVSxTQUFTLENBQUM7S0FDekI7SUFHRCxxQkFDSSw4REFBQ0ksS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsaUNBQStCOzs7OztxQkFBSzswQkFDeEMsOERBQUNDLE1BQUk7O2tDQUNELDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ2IsS0FBSyxFQUFFUixTQUFTO3dCQUFFc0IsUUFBUSxFQUFFbEIsWUFBWTs7Ozs7NkJBQUc7a0NBQzlELDhEQUFDbUIsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFZixZQUFZO2tDQUFFLFFBQU07Ozs7OzZCQUFTOzs7Ozs7cUJBQzNDOzBCQUVQLDhEQUFDZ0IsSUFBRTswQkFFS3ZCLFFBQVEsQ0FBQ3dCLE1BQU0sSUFBSSxDQUFDLEdBQUd4QixRQUFRLENBQUN5QixHQUFHLENBQUMsU0FBQ2YsSUFBSSxFQUFFZ0IsR0FBRyxFQUFLO29CQUMvQyxxQkFBTyw4REFBQ0MsSUFBRTs7NEJBQVlqQixJQUFJOzBDQUFDLDhEQUFDVyxRQUFNO2dDQUFDQyxPQUFPLEVBQUUsU0FBQ25CLENBQUMsRUFBSTtvQ0FDOUNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO29DQUNsQkssWUFBWSxDQUFDQyxJQUFJLENBQUM7aUNBQ3JCOzBDQUFFLE9BQUs7Ozs7O3NDQUFTOzt1QkFIRGdCLEdBQUc7Ozs7OEJBR0c7aUJBQ3pCLENBQUMsR0FDQSx3QkFBd0I7Ozs7O3FCQUU3Qjs7Ozs7O2FBRUgsQ0FFVDtDQUNKO0dBakRLN0IsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBbURYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VySW5wdXQsc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9MaXN0LHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFRvZG9MaXN0KHN0YXRlID0+IFsuLi5zdGF0ZSwgdXNlcklucHV0XSlcclxuICAgIH1cclxuICAgIHNldFVzZXJJbnB1dCgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT57XHJcbiAgICAgICAgY29uc3QgdXBkYXRlQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpXHJcblxyXG4gICAgICAgIHNldFRvZG9MaXN0KHVwZGF0ZUFycilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5NZW1idWF0IFRvZG9MaXN0IERlbmdhbiBOZXh0LkpzPC9oMz5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcklucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49IDEgPyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PkhhcHVzPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ1Rla2FuIHNlYnVhaCB0b2RvIGl0ZW0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4ICAgICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwiZGl2IiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJpZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});