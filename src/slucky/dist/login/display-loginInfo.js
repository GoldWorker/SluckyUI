(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../index"), require("react"), require("react-cookie"));
	else if(typeof define === 'function' && define.amd)
		define(["../index", "react", "react-cookie"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../index"), require("react"), require("react-cookie")) : factory(root["../index"], root["react"], root["react-cookie"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__index__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_cookie__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/login/display-loginInfo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index":
/*!***************************!*\
  !*** external "../index" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__index__;\n\n//# sourceURL=webpack:///external_%22../index%22?");

/***/ }),

/***/ "./src/login/display-loginInfo.jsx":
/*!*****************************************!*\
  !*** ./src/login/display-loginInfo.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactCookie = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nvar _index = __webpack_require__(/*! ../index */ \"../index\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginInfo = function (_Component) {\n\t_inherits(LoginInfo, _Component);\n\n\tfunction LoginInfo(props) {\n\t\t_classCallCheck(this, LoginInfo);\n\n\t\tvar _this = _possibleConstructorReturn(this, (LoginInfo.__proto__ || Object.getPrototypeOf(LoginInfo)).call(this, props));\n\n\t\t_this.handleClickLoginout = function () {\n\t\t\tvar handleLogoutClick = _this.props.handleLogoutClick;\n\n\t\t\thandleLogoutClick();\n\t\t\t_this.setState({ isLoginout: false });\n\t\t};\n\n\t\t_this.state = {\n\t\t\tisLoginout: false\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(LoginInfo, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar _props = this.props,\n\t\t\t    userInfo = _props.userInfo,\n\t\t\t    isLogined = _props.isLogined,\n\t\t\t    handleLoginClick = _props.handleLoginClick;\n\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'login-info' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_index.Dialog,\n\t\t\t\t\t{ open: this.state.isLoginout, onClose: function onClose() {\n\t\t\t\t\t\t\t_this2.setState({ isLoginout: false });\n\t\t\t\t\t\t} },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u6CE8\\u9500'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u786E\\u8BA4\\u6CE8\\u9500\\u5417\\uFF1F'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'ta-r pt8' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tclassName: 'tag-text ptb6 plr16',\n\t\t\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\t\t\treturn _this2.setState({ isLoginout: false });\n\t\t\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t\t\t'\\u53D6\\u6D88'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t\t{ className: 'tag-text ptb6 plr16', onClick: function onClick() {\n\t\t\t\t\t\t\t\t\t\treturn _this2.handleClickLoginout();\n\t\t\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t\t\t'\\u786E\\u8BA4'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tisLogined ? _react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ className: 'btn btn-s btn-hollow b-w c-text-w mr8', onClick: function onClick() {\n\t\t\t\t\t\t\t_this2.setState({ isLoginout: true });\n\t\t\t\t\t\t} },\n\t\t\t\t\t'\\u6CE8\\u9500'\n\t\t\t\t) : _react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ className: 'btn btn-s btn-hollow b-w c-text-w mr8', onClick: handleLoginClick.bind(this) },\n\t\t\t\t\t'\\u767B\\u5F55'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\tnull,\n\t\t\t\t\tuserInfo.name\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LoginInfo;\n}(_react.Component);\n\nexports.default = LoginInfo;\n\n//# sourceURL=webpack:///./src/login/display-loginInfo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_cookie__;\n\n//# sourceURL=webpack:///external_%22react-cookie%22?");

/***/ })

/******/ });
});