(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../lib/validator_es5"), require("./display-validInput"), require("./display-validSearchInput"), require("react"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["../lib/validator_es5", "./display-validInput", "./display-validSearchInput", "react", "react-addons-css-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("../lib/validator_es5"), require("./display-validInput"), require("./display-validSearchInput"), require("react"), require("react-addons-css-transition-group"));
	else
		root["slucky"] = factory(root["../lib/validator_es5"], root["./display-validInput"], root["./display-validSearchInput"], root["react"], root["react-addons-css-transition-group"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__lib_validator_es5__, __WEBPACK_EXTERNAL_MODULE__display_validInput__, __WEBPACK_EXTERNAL_MODULE__display_validSearchInput__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_addons_css_transition_group__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/register/display-register.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/validator_es5":
/*!***************************************!*\
  !*** external "../lib/validator_es5" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__lib_validator_es5__;\n\n//# sourceURL=webpack://slucky/external_%22../lib/validator_es5%22?");

/***/ }),

/***/ "./display-validInput":
/*!***************************************!*\
  !*** external "./display-validInput" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_validInput__;\n\n//# sourceURL=webpack://slucky/external_%22./display-validInput%22?");

/***/ }),

/***/ "./display-validSearchInput":
/*!*********************************************!*\
  !*** external "./display-validSearchInput" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_validSearchInput__;\n\n//# sourceURL=webpack://slucky/external_%22./display-validSearchInput%22?");

/***/ }),

/***/ "./src/register/display-register.jsx":
/*!*******************************************!*\
  !*** ./src/register/display-register.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _validator_es = __webpack_require__(/*! ../lib/validator_es5 */ \"../lib/validator_es5\");\n\nvar _validator_es2 = _interopRequireDefault(_validator_es);\n\nvar _displayValidInput = __webpack_require__(/*! ./display-validInput */ \"./display-validInput\");\n\nvar _displayValidInput2 = _interopRequireDefault(_displayValidInput);\n\nvar _displayValidSearchInput = __webpack_require__(/*! ./display-validSearchInput */ \"./display-validSearchInput\");\n\nvar _displayValidSearchInput2 = _interopRequireDefault(_displayValidSearchInput);\n\nvar _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ \"react-addons-css-transition-group\");\n\nvar _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Register = function (_Component) {\n\t_inherits(Register, _Component);\n\n\tfunction Register(props) {\n\t\t_classCallCheck(this, Register);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tdata: {\n\t\t\t\temail: \"\",\n\t\t\t\temailVerifyCode: \"\",\n\t\t\t\tname: \"\",\n\t\t\t\tpassword: \"\",\n\t\t\t\tpasswordAgain: \"\"\n\t\t\t},\n\t\t\tresult: {}\n\t\t};\n\t\t_validator_es2.default.config = {\n\t\t\temail: ['isEmpty', 'isEmail'],\n\t\t\temailVerifyCode: ['isEmpty'],\n\t\t\tname: ['isName', 'isEmpty'],\n\t\t\tpassword: ['isEmpty', 'isPw'],\n\t\t\tpasswordAgain: ['isEmpty', 'isPwAgain']\n\t\t};\n\t\t_this.registerConfirm = _this.props.registerConfirm.bind(_this);\n\t\t_this.handleVerifyCodeSend = _this.props.handleVerifyCodeSend.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(Register, [{\n\t\tkey: 'handleInputChange',\n\t\tvalue: function handleInputChange(key, e) {\n\t\t\tvar tar = this.state.data;\n\t\t\ttar[key] = e.target.value;\n\t\t\tthis.setState({\n\t\t\t\tdata: tar\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'handleFormConfirm',\n\t\tvalue: function handleFormConfirm(e) {\n\t\t\te.preventDefault();\n\t\t\tvar data = this.state.data;\n\t\t\tvar result = _validator_es2.default.validate(data);\n\t\t\tthis.setState({\n\t\t\t\tresult: result\n\t\t\t});\n\t\t\tconsole.log(this.state.result);\n\t\t\tif (_validator_es2.default.isSubmit()) {\n\t\t\t\tthis.registerConfirm(this.state.data);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'handleEmailSend',\n\t\tvalue: function handleEmailSend() {\n\t\t\tvar email = this.state.data.email;\n\t\t\tvar res = _validator_es2.default.validateOne('email', email);\n\t\t\tthis.setState({\n\t\t\t\tresult: {\n\t\t\t\t\temail: res\n\t\t\t\t}\n\t\t\t});\n\t\t\tif (res.isValid) {\n\t\t\t\tthis.handleVerifyCodeSend(email);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'register-container' },\n\t\t\t\t_react2.default.createElement('div', { className: 'register-mark' }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactAddonsCssTransitionGroup2.default,\n\t\t\t\t\t{\n\t\t\t\t\t\ttransitionName: 'example',\n\t\t\t\t\t\ttransitionAppear: true,\n\t\t\t\t\t\ttransitionAppearTimeout: 500,\n\t\t\t\t\t\ttransitionEnter: false,\n\t\t\t\t\t\ttransitionLeave: false },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'form',\n\t\t\t\t\t\t{ className: 'paper shadow p32 register-item svgMutiLine p-r', key: 'registerForm' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t{ className: 'ta-c mb4 mt0' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'strong',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'\\u6CE8\\u518C'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(_displayValidSearchInput2.default, { btnText: '\\u53D1\\u9001', handleInputChange: this.handleInputChange.bind(this, 'email'), handleBtnClick: this.handleEmailSend.bind(this), name: '\\u90AE\\u7BB1', placeholder: '\\r \\u5E38\\u7528\\u90AE\\u7BB1', data: this.state.result['email'] }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'emailVerifyCode'), name: '\\u9A8C\\u8BC1\\u7801', placeholder: '\\r \\u8F93\\u5165\\u90AE\\u7BB1\\u91CC\\u7684\\u9A8C\\u8BC1\\u7801', data: this.state.result['emailVerifyCode'] }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'name'), name: '\\u6635\\u79F0', placeholder: '\\r \\u4E0D\\u80FD\\u542B\\u6709\\u6807\\u70B9', data: this.state.result['name'] }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'password'), name: '\\u5BC6\\u7801', placeholder: '\\r \\u7531\\u6570\\u7EC4\\u6216\\u5B57\\u6BCD\\u7EC4\\u6210', data: this.state.result['password'] }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'passwordAgain'), name: '\\u518D\\u6B21\\u786E\\u8BA4\\u5BC6\\u7801', placeholder: '\\r \\u8981\\u8DDF\\u697C\\u4E0A\\u4E00\\u6837', data: this.state.result['passwordAgain'] }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'ta-c pt16' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t\t{ type: 'submit', className: 'btn-n plr32 ptb6', onClick: this.handleFormConfirm.bind(this) },\n\t\t\t\t\t\t\t\t'\\u786E\\u8BA4'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Register;\n}(_react.Component);\n\nexports.default = Register;\n\n//# sourceURL=webpack://slucky/./src/register/display-register.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://slucky/external_%22react%22?");

/***/ }),

/***/ "react-addons-css-transition-group":
/*!****************************************************!*\
  !*** external "react-addons-css-transition-group" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_addons_css_transition_group__;\n\n//# sourceURL=webpack://slucky/external_%22react-addons-css-transition-group%22?");

/***/ })

/******/ });
});