(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/regenerator"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/regenerator", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/regenerator"), require("react")) : factory(root["@babel/runtime/helpers/classCallCheck"], root["@babel/runtime/helpers/createClass"], root["@babel/runtime/helpers/getPrototypeOf"], root["@babel/runtime/helpers/inherits"], root["@babel/runtime/helpers/possibleConstructorReturn"], root["@babel/runtime/regenerator"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_getPrototypeOf__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_inherits__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_possibleConstructorReturn__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_regenerator__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/steps.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/steps.jsx":
/*!*********************************!*\
  !*** ./src/component/steps.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Steps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n // require(\"babel-polyfill\");\n\nvar Steps =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Steps, _Component);\n\n  function Steps(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Steps);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Steps).call(this, props));\n    _this.state = {\n      currentStep: _this.props.currentStep || 0\n    };\n    return _this;\n  } // 为步骤灵活变化准备\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Steps, [{\n    key: \"handleClickEvent\",\n    value: function handleClickEvent(step, index) {// this.onAction(step, index, this.state.currentStep);\n    }\n  }, {\n    key: \"handelPreStep\",\n    value: function handelPreStep() {\n      var _this2 = this;\n\n      if (this.state.currentStep - 1 < 0) {\n        console.log('start');\n      } else {\n        console.log('pre');\n        this.setState({\n          currentStep: this.state.currentStep - 1\n        }, function () {\n          _this2.props.stepset[_this2.state.currentStep].handlePre && _this2.props.stepset[_this2.state.currentStep].handlePre(_this2.props.stepset[_this2.state.currentStep], _this2.state.currentStep);\n        });\n      }\n    }\n  }, {\n    key: \"handleNextStep\",\n    value: function handleNextStep() {\n      var len, AllowNext;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleNextStep$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              len = this.props.stepset.length;\n\n              if (!this.props.stepset[this.state.currentStep].handleNext) {\n                _context.next = 9;\n                break;\n              }\n\n              _context.next = 4;\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.props.stepset[this.state.currentStep].handleNext(this.props.stepset[this.state.currentStep], this.state.currentStep));\n\n            case 4:\n              AllowNext = _context.sent;\n              console.log('AllowNext', AllowNext);\n\n              if (AllowNext) {\n                if (this.state.currentStep + 1 >= len) {\n                  console.log('end');\n                } else {\n                  this.setState({\n                    currentStep: this.state.currentStep + 1\n                  });\n                  console.log('next');\n                }\n              } else {\n                console.log('阻塞', AllowNext);\n              }\n\n              _context.next = 10;\n              break;\n\n            case 9:\n              if (this.state.currentStep + 1 >= len) {\n                console.log('end');\n              } else {\n                this.setState({\n                  currentStep: this.state.currentStep + 1\n                });\n                console.log('next');\n              }\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, this);\n    }\n  }, {\n    key: \"handleTitleStyle\",\n    value: function handleTitleStyle(stepIndex, currentStep) {\n      if (stepIndex > currentStep) {\n        return 'c-hint-b';\n      }\n\n      if (stepIndex < currentStep) {\n        return 'c-theme step-sign-active step-sign-ed';\n      }\n\n      return 'step-sign-active';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"step-bar\"\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"d-f\",\n        style: {\n          width: this.props.width || 'auto',\n          margin: '0 auto'\n        }\n      }, this.props.stepset.map(function (step, index) {\n        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          key: index,\n          className: ['flex1 s0 step-item pt32 pb16', _this3.handleTitleStyle(index, _this3.state.currentStep)].join(' ')\n        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: \"sign-box\"\n        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: ['step-sign'].join(' ')\n        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"span\", {\n          className: \"step-sign-in\"\n        }, \"\\u2713\"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: \"ptb8 fs12\",\n          onClick: function onClick() {\n            return _this3.handleClickEvent(step, index);\n          }\n        }, step.title));\n      }))), this.props.stepset.map(function (step, index) {\n        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          key: index,\n          className: \"p-r\"\n        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: \"step-content\",\n          style: index == _this3.state.currentStep ? {\n            position: 'relative',\n            visibility: 'visible',\n            zIndex: 1,\n            left: 0\n          } : {}\n        }, _this3.props.isCacheData ? step.content && step.content(step.store || {}, function () {\n          return _this3.handleNextStep();\n        }, function () {\n          return _this3.handelPreStep();\n        }) : index == _this3.state.currentStep ? step.content && step.content(step.store || {}, function () {\n          return _this3.handleNextStep();\n        }, function () {\n          return _this3.handelPreStep();\n        }) : null));\n      })), !this.props.stepset[this.state.currentStep].isCustomCtrl && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"ta-c pt16\"\n      }, this.state.currentStep != 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"button\", {\n        className: \"btn-w bor b-side ptb6 plr16 mr16\",\n        onClick: function onClick() {\n          return _this3.handelPreStep();\n        }\n      }, \"\\u4E0A\\u4E00\\u6B65\") : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"button\", {\n        className: \"btn-n ptb6 plr16\",\n        onClick: function onClick() {\n          return _this3.handleNextStep();\n        }\n      }, this.state.currentStep + 1 == this.props.stepset.length ? '确认' : '下一步')));\n    }\n  }]);\n\n  return Steps;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/component/steps.jsx?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_createClass__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_getPrototypeOf__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_inherits__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_possibleConstructorReturn__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_regenerator__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
});