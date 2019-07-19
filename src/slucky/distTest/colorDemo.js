(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("react"));
	else
		root["slucky"] = factory(root["react"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/colorDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colorDemo.jsx":
/*!***************************!*\
  !*** ./src/colorDemo.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ColorDemo = function (_Component) {\n    _inherits(ColorDemo, _Component);\n\n    function ColorDemo() {\n        _classCallCheck(this, ColorDemo);\n\n        return _possibleConstructorReturn(this, (ColorDemo.__proto__ || Object.getPrototypeOf(ColorDemo)).apply(this, arguments));\n    }\n\n    _createClass(ColorDemo, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-success d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#26a597\"\n                        )\n                    ),\n                    \"success\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-warn d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#fc7e36\"\n                        )\n                    ),\n                    \"warn/hint\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-fail d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#ff4444\"\n                        )\n                    ),\n                    \"fail\"\n                ),\n                _react2.default.createElement(\"br\", null),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-side d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#fafafa\"\n                        )\n                    ),\n                    \"title\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-side d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#f4f4f4\"\n                        )\n                    ),\n                    \"side\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-side-s d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#cacaca\"\n                        )\n                    ),\n                    \"side-s\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-placeholder d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#cccccc\"\n                        )\n                    ),\n                    \"placeholder\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-divider d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#E5E5E5\"\n                        )\n                    ),\n                    \"divider\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-hint d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#888888\"\n                        )\n                    ),\n                    \"hint\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-icon d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#666666\"\n                        )\n                    ),\n                    \"icon\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-text d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#222222\"\n                        )\n                    ),\n                    \"text\"\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"d-il ta-c\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"circle-l bg-disable d-f ac jc m16\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            null,\n                            \"#898183\"\n                        )\n                    ),\n                    \"disable\"\n                )\n            );\n        }\n    }]);\n\n    return ColorDemo;\n}(_react.Component);\n\nexports.default = ColorDemo;\n\n//# sourceURL=webpack://slucky/./src/colorDemo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://slucky/external_%22react%22?");

/***/ })

/******/ });
});