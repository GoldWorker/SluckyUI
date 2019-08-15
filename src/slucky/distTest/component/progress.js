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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/progress.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/progress.jsx":
/*!************************************!*\
  !*** ./src/component/progress.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Progress = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar handleStatus = function handleStatus(status) {\n    switch (status) {\n        case 'success':\n            return 'c-success';\n        case 'warn':\n            return 'c-warn';\n        case 'fail':\n            return 'c-fail';\n        default:\n            return 'c-theme';\n    }\n};\n\nvar Progress = exports.Progress = function (_Component) {\n    _inherits(Progress, _Component);\n\n    function Progress() {\n        _classCallCheck(this, Progress);\n\n        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));\n    }\n\n    _createClass(Progress, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'd-il' },\n                _react2.default.createElement('progress', { max: '100', value: this.props.percent, className: ['progress-loading', handleStatus(this.props.status || 'theme')].join(' '), style: { width: this.props.width || 128 + 'px' } }),\n                this.props.content ? this.props.content : _react2.default.createElement(\n                    'span',\n                    { className: 'd-il ml12' },\n                    this.props.percent || 0,\n                    '%'\n                )\n            );\n        }\n    }]);\n\n    return Progress;\n}(_react.Component);\n\nvar ProgressCircle = function (_Component2) {\n    _inherits(ProgressCircle, _Component2);\n\n    function ProgressCircle() {\n        _classCallCheck(this, ProgressCircle);\n\n        return _possibleConstructorReturn(this, (ProgressCircle.__proto__ || Object.getPrototypeOf(ProgressCircle)).apply(this, arguments));\n    }\n\n    _createClass(ProgressCircle, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'progress-pie', style: {\n                        '--percent': this.props.percent || 0,\n                        width: this.props.radius || 64 + 'px',\n                        height: this.props.radius || 64 + 'px'\n                    } },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'pip-content d-f ac jc', style: this.props.isPipe ? { backgroundColor: 'transparent' } : {} },\n                    this.props.content ? this.props.content : _react2.default.createElement(\n                        'span',\n                        null,\n                        this.props.percent || 0,\n                        '%'\n                    )\n                ),\n                _react2.default.createElement('div', { className: ['pie-left', handleStatus(this.props.status || 'theme')].join(' ') }),\n                _react2.default.createElement('div', { className: ['pie-right', handleStatus(this.props.status || 'theme')].join(' ') })\n            );\n        }\n    }]);\n\n    return ProgressCircle;\n}(_react.Component);\n\nvar ProgressPie = function (_Component3) {\n    _inherits(ProgressPie, _Component3);\n\n    function ProgressPie() {\n        _classCallCheck(this, ProgressPie);\n\n        return _possibleConstructorReturn(this, (ProgressPie.__proto__ || Object.getPrototypeOf(ProgressPie)).apply(this, arguments));\n    }\n\n    _createClass(ProgressPie, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(ProgressCircle, { isPipe: true, radius: this.props.radius, percent: this.props.percent, status: this.props.status, content: this.props.content });\n        }\n    }]);\n\n    return ProgressPie;\n}(_react.Component);\n\nvar ProgressWave = function (_Component4) {\n    _inherits(ProgressWave, _Component4);\n\n    function ProgressWave() {\n        _classCallCheck(this, ProgressWave);\n\n        return _possibleConstructorReturn(this, (ProgressWave.__proto__ || Object.getPrototypeOf(ProgressWave)).apply(this, arguments));\n    }\n\n    _createClass(ProgressWave, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'wave-box' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'wave', style: { '--radius': this.props.radius || 96 + 'px', '--percent': 100 + (this.props.percent || 0) + '%' } },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'pip-content d-f ac jc' },\n                        this.props.content ? this.props.content : _react2.default.createElement(\n                            'span',\n                            null,\n                            this.props.percent || 0,\n                            '%'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ProgressWave;\n}(_react.Component);\n\nProgress.circle = ProgressCircle;\nProgress.pie = ProgressPie;\nProgress.wave = ProgressWave;\n\n//# sourceURL=webpack:///./src/component/progress.jsx?");

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