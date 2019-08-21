(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"), require("slucky/src/component/progress"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom/server", "react-highlight", "react-markdown", "slucky/src/component/progress"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"), require("slucky/src/component/progress")) : factory(root["react"], root["react-dom/server"], root["react-highlight"], root["react-markdown"], root["slucky/src/component/progress"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_highlight__, __WEBPACK_EXTERNAL_MODULE_react_markdown__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_progress__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/loadingDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/loadingDemo.jsx":
/*!*****************************!*\
  !*** ./src/loadingDemo.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactMarkdown = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nvar _reactHighlight = __webpack_require__(/*! react-highlight */ \"react-highlight\");\n\nvar _reactHighlight2 = _interopRequireDefault(_reactHighlight);\n\nvar _progress = __webpack_require__(/*! slucky/src/component/progress */ \"slucky/src/component/progress\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoadingDemo = function (_Component) {\n    _inherits(LoadingDemo, _Component);\n\n    function LoadingDemo() {\n        _classCallCheck(this, LoadingDemo);\n\n        return _possibleConstructorReturn(this, (LoadingDemo.__proto__ || Object.getPrototypeOf(LoadingDemo)).apply(this, arguments));\n    }\n\n    _createClass(LoadingDemo, [{\n        key: 'render',\n        value: function render() {\n\n            var demoString = '``` html' + '\\nimport { Progress } from \"slucky\";\\n...\\n<Progress.circle percent={30} radius={96} />\\n<Progress.pie percent={40} />\\n<Progress.wave percent={60} />\\n<Progress percent={50} />\\n\\n<div className=\"wave-box-seed\">\\n    <div className=\"wave\"></div>\\n</div>\\n\\n<div className=\"mtb32\">\\n    <div className=\"w128 h128\" loader-inline=\\'circle\\'>\\n        <div className=\"c-hint-b\">\\u8BE5loading\\u9002\\u7528\\u4E8E\\u6709\\u5185\\u5D4C\\u5185\\u5BB9\\u7684\\u60C5\\u51B5\\uFF0C\\u8BE5loading\\u9002\\u7528\\u4E8E\\u6709\\u5185\\u5D4C\\u5185\\u5BB9\\u7684\\u60C5\\u51B5\\uFF0C\\u8BE5loading\\u9002\\u7528\\u4E8E\\u6709\\u5185\\u5D4C\\u5185\\u5BB9\\u7684\\u60C5\\u51B5</div>\\n    </div>\\n</div>\\n\\n<div className=\"mtb32\">\\n    <div className=\"w128 h128 p-r\">\\n        <div className=\"d-f ac jc loading-container\" >\\n            <div data-loader=\\'circle-side\\'></div>\\n        </div>\\n        <div className=\"c-hint-b\">\\u8BE5loading\\u9002\\u7528\\u65E0\\u6CD5\\u5185\\u5D4C\\u7684Dom\\u7ED3\\u6784\\uFF0C\\u8BE5loading\\u9002\\u7528\\u65E0\\u6CD5\\u5185\\u5D4C\\u7684Dom\\u7ED3\\u6784\\uFF0C\\u8BE5loading\\u9002\\u7528\\u65E0\\u6CD5\\u5185\\u5D4C\\u7684Dom\\u7ED3\\u6784</div>\\n    </div>\\n</div>\\n';\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-il m16' },\n                    _react2.default.createElement(_progress.Progress.circle, { percent: 30, radius: 96 })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-il m16' },\n                    _react2.default.createElement(_progress.Progress.pie, { percent: 40 })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-il m16' },\n                    _react2.default.createElement(_progress.Progress.wave, { percent: 60, content: 'custom' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-il m16' },\n                    _react2.default.createElement(_progress.Progress, { status: '', percent: 50 })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'wave-box-seed' },\n                    _react2.default.createElement('div', { className: 'wave' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'd-il m16' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'w128 h128', 'loader-inline': 'circle' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'c-hint-b' },\n                                '\\u8BE5loading\\u9002\\u7528\\u4E8E\\u6709\\u5185\\u5D4C\\u5185\\u5BB9\\u7684\\u60C5\\u51B5\\uFF0C\\u8BE5loading\\u9002\\u7528\\u4E8E\\u6709\\u5185\\u5D4C\\u5185\\u5BB9\\u7684\\u60C5\\u51B5\\uFF0C\\u8BE5loading\\u9002\\u7528\\u4E8E\\u6709\\u5185\\u5D4C\\u5185\\u5BB9\\u7684\\u60C5\\u51B5'\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'd-il m16' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'w128 h128 p-r' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'd-f ac jc loading-container' },\n                                _react2.default.createElement('div', { 'data-loader': 'circle-side' })\n                            ),\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'c-hint-b' },\n                                '\\u8BE5loading\\u9002\\u7528\\u65E0\\u6CD5\\u5185\\u5D4C\\u7684Dom\\u7ED3\\u6784\\uFF0C\\u8BE5loading\\u9002\\u7528\\u65E0\\u6CD5\\u5185\\u5D4C\\u7684Dom\\u7ED3\\u6784\\uFF0C\\u8BE5loading\\u9002\\u7528\\u65E0\\u6CD5\\u5185\\u5D4C\\u7684Dom\\u7ED3\\u6784'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'details',\n                    { className: 'pb16 mb16 bor-b b-side-s' },\n                    _react2.default.createElement(\n                        'summary',\n                        { className: 'btn-n pl8 pr64 ptb8' },\n                        '\\u663E\\u793ADemo\\u4EE3\\u7801'\n                    ),\n                    _react2.default.createElement(\n                        _reactHighlight2.default,\n                        { innerHTML: true },\n                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))\n                    )\n                )\n            );\n        }\n    }]);\n\n    return LoadingDemo;\n}(_react.Component);\n\nexports.default = LoadingDemo;\n\n//# sourceURL=webpack:///./src/loadingDemo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-highlight":
/*!**********************************!*\
  !*** external "react-highlight" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_highlight__;\n\n//# sourceURL=webpack:///external_%22react-highlight%22?");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_markdown__;\n\n//# sourceURL=webpack:///external_%22react-markdown%22?");

/***/ }),

/***/ "slucky/src/component/progress":
/*!************************************************!*\
  !*** external "slucky/src/component/progress" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_progress__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/progress%22?");

/***/ })

/******/ });
});