(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/login/display-loginForm.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/login/display-loginForm.jsx":
/*!*****************************************!*\
  !*** ./src/login/display-loginForm.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar loginForm = function (_Component) {\n\t_inherits(loginForm, _Component);\n\n\tfunction loginForm(props) {\n\t\t_classCallCheck(this, loginForm);\n\n\t\tvar _this = _possibleConstructorReturn(this, (loginForm.__proto__ || Object.getPrototypeOf(loginForm)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tnameValue: \"\",\n\t\t\tpwValue: \"\"\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(loginForm, [{\n\t\tkey: \"handleNameChange\",\n\t\tvalue: function handleNameChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tnameValue: e.target.value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"handlePwChange\",\n\t\tvalue: function handlePwChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tpwValue: e.target.value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar handleSubmitClick = this.props.handleSubmitClick;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"dialog-content\" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t{ className: \"mt0 mb4 ta-c\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"strong\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"\\u767B\\u5F55\"\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"input pt8 w-full\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"label\",\n\t\t\t\t\t\t\t{ htmlFor: \"userNameInput\", className: \"fs12 c-grey\" },\n\t\t\t\t\t\t\t\"\\u90AE\\u7BB1\\uFF1A\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\"br\", null),\n\t\t\t\t\t\t_react2.default.createElement(\"input\", { onChange: this.handleNameChange.bind(this), id: \"userNameInput\", type: \"text\", className: \"input-down w-full\", placeholder: \"\\u4EC5\\u9650\\u90AE\\u7BB1\\u767B\\u5F55\", maxLength: \"24\", autoFocus: true, required: true })\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\"br\", null),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"input pt8 w-full\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"label\",\n\t\t\t\t\t\t\t{ htmlFor: \"userPwInput\", className: \"fs12 c-grey\" },\n\t\t\t\t\t\t\t\"\\u5BC6\\u7801\\uFF1A\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\"br\", null),\n\t\t\t\t\t\t_react2.default.createElement(\"input\", { onChange: this.handlePwChange.bind(this), id: \"userPwInput\", type: \"password\", className: \"input-down w-full\", placeholder: \"\\u4F60\\u4F1A\\u5FD8\\u8BB0\\u7684\", maxLength: \"24\", required: true })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"ta-c pb8\" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"button\",\n\t\t\t\t\t\t{ type: \"button\", className: \"tag-text ptb6 plr16 c-theme\", onClick: handleSubmitClick.bind(this, this.state.nameValue, this.state.pwValue) },\n\t\t\t\t\t\t\"\\u786E\\u8BA4\"\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn loginForm;\n}(_react.Component);\n\nexports.default = loginForm;\n\n//# sourceURL=webpack:///./src/login/display-loginForm.jsx?");

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