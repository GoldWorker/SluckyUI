(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-addons-css-transition-group")) : factory(root["react"], root["react-addons-css-transition-group"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/message/display-message.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/message/display-message.jsx":
/*!*****************************************!*\
  !*** ./src/message/display-message.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ \"react-addons-css-transition-group\");\n\nvar _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MessageLists = function MessageLists(props) {\n\t// 过滤flag\n\tvar getBgColor = function getBgColor(flag) {\n\t\t// console.log(flag)\n\t\tswitch (flag) {\n\t\t\tcase \"hint\":\n\t\t\t\treturn \"bg-warn shadow\";\n\t\t\tcase \"success\":\n\t\t\t\treturn \"bg-success shadow\";\n\t\t\tcase \"warning\":\n\t\t\t\treturn \"bg-fail shadow\";\n\t\t\tdefault:\n\t\t\t\treturn \"bg-fail shadow\";\n\t\t}\n\t};\n\tvar handleMapStatus = function handleMapStatus() {\n\t\tvar status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';\n\n\t\tswitch (status) {\n\t\t\tcase 'success':\n\t\t\t\treturn 'c-success';\n\t\t\tcase 'hint':\n\t\t\t\treturn 'c-warn';\n\t\t\tcase 'warning':\n\t\t\t\treturn 'c-fail';\n\t\t\tdefault:\n\t\t\t\treturn 'c-success';\n\t\t}\n\t};\n\n\tvar handleMapTitle = function handleMapTitle() {\n\t\tvar status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';\n\n\t\tswitch (status) {\n\t\t\tcase 'success':\n\t\t\t\treturn '成功';\n\t\t\tcase 'hint':\n\t\t\t\treturn '警告';\n\t\t\tcase 'warning':\n\t\t\t\treturn '重试';\n\t\t\tdefault:\n\t\t\t\treturn false;\n\t\t}\n\t};\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'toastlists-normalize-box' },\n\t\tprops.lists.map(function (item, index) {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_reactAddonsCssTransitionGroup2.default,\n\t\t\t\t{\n\t\t\t\t\ttransitionName: 'example',\n\t\t\t\t\ttransitionAppear: true,\n\t\t\t\t\ttransitionAppearTimeout: 500,\n\t\t\t\t\ttransitionEnter: false,\n\t\t\t\t\ttransitionLeave: false,\n\t\t\t\t\tkey: index },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'toastlist', key: index },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'toast-item paper' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: ['pb8', handleMapStatus(item.flag)].join(' '), style: { minWidth: 256 + 'px' } },\n\t\t\t\t\t\t\thandleMapTitle(item.flag) || '消息'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: '' },\n\t\t\t\t\t\t\titem.info\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t})\n\t);\n};\n\nMessageLists.defaultProps = {\n\tlists: [{\n\t\tinfo: \"Msg Loading\"\n\t}]\n};\n\nexports.default = MessageLists;\n\n//# sourceURL=webpack:///./src/message/display-message.jsx?");

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