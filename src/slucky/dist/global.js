(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./login/highorder-loginWindow"), require("./message/highorder-message"), require("./nav/highorder-navNormalize"), require("./slidebar.demo"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["./login/highorder-loginWindow", "./message/highorder-message", "./nav/highorder-navNormalize", "./slidebar.demo", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./login/highorder-loginWindow"), require("./message/highorder-message"), require("./nav/highorder-navNormalize"), require("./slidebar.demo"), require("react")) : factory(root["./login/highorder-loginWindow"], root["./message/highorder-message"], root["./nav/highorder-navNormalize"], root["./slidebar.demo"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__login_highorder_loginWindow__, __WEBPACK_EXTERNAL_MODULE__message_highorder_message__, __WEBPACK_EXTERNAL_MODULE__nav_highorder_navNormalize__, __WEBPACK_EXTERNAL_MODULE__slidebar_demo__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/global.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./login/highorder-loginWindow":
/*!************************************************!*\
  !*** external "./login/highorder-loginWindow" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__login_highorder_loginWindow__;\n\n//# sourceURL=webpack:///external_%22./login/highorder-loginWindow%22?");

/***/ }),

/***/ "./message/highorder-message":
/*!**********************************************!*\
  !*** external "./message/highorder-message" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__message_highorder_message__;\n\n//# sourceURL=webpack:///external_%22./message/highorder-message%22?");

/***/ }),

/***/ "./nav/highorder-navNormalize":
/*!***********************************************!*\
  !*** external "./nav/highorder-navNormalize" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__nav_highorder_navNormalize__;\n\n//# sourceURL=webpack:///external_%22./nav/highorder-navNormalize%22?");

/***/ }),

/***/ "./slidebar.demo":
/*!**********************************!*\
  !*** external "./slidebar.demo" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__slidebar_demo__;\n\n//# sourceURL=webpack:///external_%22./slidebar.demo%22?");

/***/ }),

/***/ "./src/global.jsx":
/*!************************!*\
  !*** ./src/global.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _highorderMessage = __webpack_require__(/*! ./message/highorder-message */ \"./message/highorder-message\");\n\nvar _highorderMessage2 = _interopRequireDefault(_highorderMessage);\n\nvar _slidebar = __webpack_require__(/*! ./slidebar.demo */ \"./slidebar.demo\");\n\nvar _slidebar2 = _interopRequireDefault(_slidebar);\n\nvar _highorderLoginWindow = __webpack_require__(/*! ./login/highorder-loginWindow */ \"./login/highorder-loginWindow\");\n\nvar _highorderLoginWindow2 = _interopRequireDefault(_highorderLoginWindow);\n\nvar _highorderNavNormalize = __webpack_require__(/*! ./nav/highorder-navNormalize */ \"./nav/highorder-navNormalize\");\n\nvar _highorderNavNormalize2 = _interopRequireDefault(_highorderNavNormalize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Global = function (_Component) {\n    _inherits(Global, _Component);\n\n    function Global(props) {\n        _classCallCheck(this, Global);\n\n        return _possibleConstructorReturn(this, (Global.__proto__ || Object.getPrototypeOf(Global)).call(this, props));\n    }\n\n    _createClass(Global, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_highorderNavNormalize2.default, null),\n                _react2.default.createElement(_slidebar2.default, null),\n                _react2.default.createElement(_highorderMessage2.default, null),\n                _react2.default.createElement(_highorderLoginWindow2.default, null)\n            );\n        }\n    }]);\n\n    return Global;\n}(_react.Component);\n\nexports.default = Global;\n\n//# sourceURL=webpack:///./src/global.jsx?");

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