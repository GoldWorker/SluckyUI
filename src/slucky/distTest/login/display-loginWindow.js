(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../index"), require("./display-loginForm"), require("react"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["../index", "./display-loginForm", "react", "react-addons-css-transition-group"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../index"), require("./display-loginForm"), require("react"), require("react-addons-css-transition-group")) : factory(root["../index"], root["./display-loginForm"], root["react"], root["react-addons-css-transition-group"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__index__, __WEBPACK_EXTERNAL_MODULE__display_loginForm__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_addons_css_transition_group__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/login/display-loginWindow.jsx");
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

/***/ "./display-loginForm":
/*!**************************************!*\
  !*** external "./display-loginForm" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_loginForm__;\n\n//# sourceURL=webpack:///external_%22./display-loginForm%22?");

/***/ }),

/***/ "./src/login/display-loginWindow.jsx":
/*!*******************************************!*\
  !*** ./src/login/display-loginWindow.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _displayLoginForm = __webpack_require__(/*! ./display-loginForm */ \"./display-loginForm\");\n\nvar _displayLoginForm2 = _interopRequireDefault(_displayLoginForm);\n\nvar _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ \"react-addons-css-transition-group\");\n\nvar _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);\n\nvar _index = __webpack_require__(/*! ../index */ \"../index\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginWindow = function (_Component) {\n\t_inherits(LoginWindow, _Component);\n\n\tfunction LoginWindow(props) {\n\t\t_classCallCheck(this, LoginWindow);\n\n\t\treturn _possibleConstructorReturn(this, (LoginWindow.__proto__ || Object.getPrototypeOf(LoginWindow)).call(this, props));\n\t}\n\n\t_createClass(LoginWindow, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    handleConfirmClick = _props.handleConfirmClick,\n\t\t\t    handleCancelClick = _props.handleCancelClick,\n\t\t\t    isToggle = _props.isToggle;\n\n\t\t\tvar toggleClass = isToggle ? {\n\t\t\t\tdisplay: \"block\"\n\t\t\t} : {\n\t\t\t\tdisplay: \"none\"\n\t\t\t};\n\t\t\tif (isToggle) {\n\t\t\t\treturn (\n\t\t\t\t\t// <ReactCSSTransitionGroup\n\t\t\t\t\t// \ttransitionName=\"example\"\n\t\t\t\t\t// \ttransitionAppear={true}\n\t\t\t\t\t// \ttransitionAppearTimeout={500}\n\t\t\t\t\t// \ttransitionEnter={false}\n\t\t\t\t\t// \ttransitionLeave={false}>\n\t\t\t\t\t// \t<div key=\"loginWindow\">\n\t\t\t\t\t// \t\t<div className=\"dialog-mark\"></div>\n\t\t\t\t\t// \t\t<div className=\"dialog-box\">\n\t\t\t\t\t// \t\t\t<ReactCSSTransitionGroup\n\t\t\t\t\t// \t\t\t\ttransitionName=\"example\"\n\t\t\t\t\t// \t\t\t\ttransitionAppear={true}\n\t\t\t\t\t// \t\t\t\ttransitionAppearTimeout={500}\n\t\t\t\t\t// \t\t\t\ttransitionEnter={false}\n\t\t\t\t\t// \t\t\t\ttransitionLeave={false}>\n\t\t\t\t\t// \t\t\t\t<div className=\"dialog paper\">\n\t\t\t\t\t// \t\t\t\t\t<div className=\"ta-r\">\n\t\t\t\t\t// \t\t\t\t\t\t<button type=\"button\" className=\"btn btn-s btn-tp c-blue mt4 mr4\" onClick={handleCancelClick.bind(this)}>X</button>\n\t\t\t\t\t// \t\t\t\t\t</div>\n\t\t\t\t\t// \t\t\t\t<LoginForm handleSubmitClick={handleConfirmClick}/>\n\t\t\t\t\t// \t\t\t</div>\n\t\t\t\t\t// \t\t\t</ReactCSSTransitionGroup>\n\t\t\t\t\t// \t\t</div>\n\t\t\t\t\t// \t</div>\n\t\t\t\t\t// </ReactCSSTransitionGroup>\n\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_index.Dialog,\n\t\t\t\t\t\t{ open: isToggle, onClose: handleCancelClick.bind(this) },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(_displayLoginForm2.default, { handleSubmitClick: handleConfirmClick })\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t} else return _react2.default.createElement('div', null);\n\t\t}\n\t}]);\n\n\treturn LoginWindow;\n}(_react.Component);\n\nLoginWindow.defaultProps = {\n\tisToggle: true\n};\n\nexports.default = LoginWindow;\n\n//# sourceURL=webpack:///./src/login/display-loginWindow.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-addons-css-transition-group":
/*!****************************************************!*\
  !*** external "react-addons-css-transition-group" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_addons_css_transition_group__;\n\n//# sourceURL=webpack:///external_%22react-addons-css-transition-group%22?");

/***/ })

/******/ });
});