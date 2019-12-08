(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/helpers/classCallCheck"));
	else if(typeof define === 'function' && define.amd)
		define(["@babel/runtime/helpers/classCallCheck"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@babel/runtime/helpers/classCallCheck")) : factory(root["@babel/runtime/helpers/classCallCheck"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/lib.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/lib.jsx":
/*!*******************************!*\
  !*** ./src/component/lib.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lib; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Lib = function Lib() {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Lib);\n};\n\n\nvar _UNIT = {\n  Bytes: 1,\n  Kb: 1024,\n  M: 1024 * 1024,\n  G: 1024 * 1024 * 1024,\n  T: 1024 * 1024 * 1024 * 1024\n};\n\nLib.toThousands = function (number) {\n  var num = (number || 0).toString(),\n      result = '';\n\n  while (num.length > 3) {\n    result = ',' + num.slice(-3) + result;\n    num = num.slice(0, num.length - 3);\n  }\n\n  if (num) {\n    result = num + result;\n  }\n\n  return result;\n};\n\nLib.transfer2UnitAuto = function () {\n  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n\n  for (var key in _UNIT) {\n    if (_UNIT.hasOwnProperty(key)) {\n      var item = _UNIT[key]; //进位\n\n      var isCarry = (num / item).toFixed(0).length <= 4;\n\n      if (isCarry) {\n        var _res = (num / item).toFixed(fixed); //舍去\n\n\n        var _isRounding = !!parseInt(_res.slice(-fixed));\n\n        return _isRounding ? \"\".concat(_res).concat(key) : \"\".concat((num / item).toFixed(0)).concat(key);\n      }\n    }\n  }\n\n  var res = (num / _UNIT.T).toFixed(fixed);\n\n  var isRounding = !!parseInt(res.slice(-fixed));\n  return isRounding ? \"\".concat(res, \"T\") : (num / _UNIT.T).toFixed(0);\n};\n\nLib.transfer2Unit = function () {\n  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'G';\n  var fixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n  var isShowUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n\n  if (!num) {\n    return num + unit;\n  }\n\n  if (!_UNIT[unit]) {\n    return num + (isShowUnit ? 'Bytes' : '');\n  }\n\n  return (num / _UNIT[unit]).toFixed(fixed) + (isShowUnit ? unit : '');\n};\n\n//# sourceURL=webpack:///./src/component/lib.jsx?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ })

/******/ });
});