(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../login/highorder-loginInfo"), require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["../login/highorder-loginInfo", "react", "react-router-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../login/highorder-loginInfo"), require("react"), require("react-router-dom")) : factory(root["../login/highorder-loginInfo"], root["react"], root["react-router-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__login_highorder_loginInfo__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/nav/display-navNormalize.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../login/highorder-loginInfo":
/*!***********************************************!*\
  !*** external "../login/highorder-loginInfo" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__login_highorder_loginInfo__;\n\n//# sourceURL=webpack:///external_%22../login/highorder-loginInfo%22?");

/***/ }),

/***/ "./src/nav/display-navNormalize.jsx":
/*!******************************************!*\
  !*** ./src/nav/display-navNormalize.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _highorderLoginInfo = __webpack_require__(/*! ../login/highorder-loginInfo */ \"../login/highorder-loginInfo\");\n\nvar _highorderLoginInfo2 = _interopRequireDefault(_highorderLoginInfo);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavNormalize = function (_Component) {\n    _inherits(NavNormalize, _Component);\n\n    function NavNormalize(props) {\n        _classCallCheck(this, NavNormalize);\n\n        return _possibleConstructorReturn(this, (NavNormalize.__proto__ || Object.getPrototypeOf(NavNormalize)).call(this, props));\n    }\n\n    _createClass(NavNormalize, [{\n        key: \"render\",\n        value: function render() {\n            var isLogined = this.props.isLogined;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"nav-normal bor-b b-side pr16 bg-w\" },\n                _react2.default.createElement(\n                    \"nav\",\n                    { className: \"ml48\" },\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { exact: true, to: \"/\", className: \"nav-item\", activeClassName: \"nav-item-active\" },\n                        \"\\u9996\\u9875\"\n                    )\n                ),\n                isLogined ? _react2.default.createElement(\n                    \"nav\",\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { to: \"/edit\", className: \"nav-item\", activeClassName: \"nav-item-active\" },\n                        \"\\u7F16\\u8F91\"\n                    )\n                ) : null,\n                _react2.default.createElement(\n                    \"nav\",\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { to: \"/articleList\", className: \"nav-item\", activeClassName: \"nav-item-active\" },\n                        \"\\u6587\\u7AE0\"\n                    )\n                ),\n                _react2.default.createElement(\n                    \"nav\",\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { to: \"/register\", className: \"nav-item\", activeClassName: \"nav-item-active\" },\n                        \"\\u6210\\u4E3ASluckyer\"\n                    )\n                ),\n                _react2.default.createElement(_highorderLoginInfo2.default, null)\n            );\n        }\n    }]);\n\n    return NavNormalize;\n}(_react.Component);\n\nexports.default = NavNormalize;\n\n//# sourceURL=webpack:///./src/nav/display-navNormalize.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });
});