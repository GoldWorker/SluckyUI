(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("react"), require("react-addons-css-transition-group"));
	else
		root["slucky"] = factory(root["react"], root["react-addons-css-transition-group"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_addons_css_transition_group__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dialog/display-dialog.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dialog/display-dialog.jsx":
/*!***************************************!*\
  !*** ./src/dialog/display-dialog.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ \"react-addons-css-transition-group\");\n\nvar _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 可配置组件\n// const dialog = {\n// \thandleConfirm: handleConfirm.bind(this),\n// \thandleCancel: handleCancel.bind(this),\n// \tcontent: \"Are you sure logout?\",\n// }\n\nvar Dialog = function (_Component) {\n\t_inherits(Dialog, _Component);\n\n\tfunction Dialog(props) {\n\t\t_classCallCheck(this, Dialog);\n\n\t\treturn _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));\n\t}\n\n\t_createClass(Dialog, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props$dialog = this.props.dialog,\n\t\t\t    content = _props$dialog.content,\n\t\t\t    title = _props$dialog.title,\n\t\t\t    handleConfirm = _props$dialog.handleConfirm,\n\t\t\t    handleCancel = _props$dialog.handleCancel;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'd-il' },\n\t\t\t\tthis.props.isToggle ? _react2.default.createElement(\n\t\t\t\t\t_reactAddonsCssTransitionGroup2.default,\n\t\t\t\t\t{\n\t\t\t\t\t\ttransitionName: 'example',\n\t\t\t\t\t\ttransitionAppear: true,\n\t\t\t\t\t\ttransitionAppearTimeout: 500,\n\t\t\t\t\t\ttransitionEnter: false,\n\t\t\t\t\t\ttransitionLeave: false },\n\t\t\t\t\t_react2.default.createElement('div', { className: 'dialog-mark' }),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'dialog-box' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactAddonsCssTransitionGroup2.default,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\ttransitionName: 'example',\n\t\t\t\t\t\t\t\ttransitionAppear: true,\n\t\t\t\t\t\t\t\ttransitionAppearTimeout: 500,\n\t\t\t\t\t\t\t\ttransitionEnter: false,\n\t\t\t\t\t\t\t\ttransitionLeave: false },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'dialog paper' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'dialog-content c-text-b' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\t\t\t{ className: 'c-text-b mt0' },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'strong',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\tcontent\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'ta-c pb8' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t\t\t\t{ type: 'button', className: 'btn btn-s btn-tp c-blue mr8', onClick: this.handleConfirm.bind(this) },\n\t\t\t\t\t\t\t\t\t\t'\\u786E\\u8BA4'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t\t\t\t{ type: 'button', className: 'btn btn-s btn-tp c-blue', onClick: this.handleCancel.bind(this) },\n\t\t\t\t\t\t\t\t\t\t'\\u5173\\u95ED'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t) : \"\"\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Dialog;\n}(_react.Component);\n\nDialogWindow.defaultProps = {\n\tdialog: {\n\t\tcontent: \"Are you sure?\",\n\t\ttitle: \"警告\"\n\t}\n};\n\nexports.default = Dialog;\n\n//# sourceURL=webpack://slucky/./src/dialog/display-dialog.jsx?");

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