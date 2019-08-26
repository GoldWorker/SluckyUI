(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./component/checkbox"), require("./component/search"), require("./component/steps"), require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"));
	else if(typeof define === 'function' && define.amd)
		define(["./component/checkbox", "./component/search", "./component/steps", "react", "react-dom/server", "react-highlight", "react-markdown"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./component/checkbox"), require("./component/search"), require("./component/steps"), require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown")) : factory(root["./component/checkbox"], root["./component/search"], root["./component/steps"], root["react"], root["react-dom/server"], root["react-highlight"], root["react-markdown"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__component_checkbox__, __WEBPACK_EXTERNAL_MODULE__component_search__, __WEBPACK_EXTERNAL_MODULE__component_steps__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_highlight__, __WEBPACK_EXTERNAL_MODULE_react_markdown__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/stepsDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/checkbox":
/*!***************************************!*\
  !*** external "./component/checkbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_checkbox__;\n\n//# sourceURL=webpack:///external_%22./component/checkbox%22?");

/***/ }),

/***/ "./component/search":
/*!*************************************!*\
  !*** external "./component/search" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_search__;\n\n//# sourceURL=webpack:///external_%22./component/search%22?");

/***/ }),

/***/ "./component/steps":
/*!************************************!*\
  !*** external "./component/steps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_steps__;\n\n//# sourceURL=webpack:///external_%22./component/steps%22?");

/***/ }),

/***/ "./src/stepsDemo.jsx":
/*!***************************!*\
  !*** ./src/stepsDemo.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactMarkdown = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nvar _reactHighlight = __webpack_require__(/*! react-highlight */ \"react-highlight\");\n\nvar _reactHighlight2 = _interopRequireDefault(_reactHighlight);\n\nvar _checkbox = __webpack_require__(/*! ./component/checkbox */ \"./component/checkbox\");\n\nvar _search = __webpack_require__(/*! ./component/search */ \"./component/search\");\n\nvar _steps = __webpack_require__(/*! ./component/steps */ \"./component/steps\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StepsDemo = function (_Component) {\n    _inherits(StepsDemo, _Component);\n\n    function StepsDemo() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, StepsDemo);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StepsDemo.__proto__ || Object.getPrototypeOf(StepsDemo)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeCheckbox = function (selected) {\n            console.log(selected);\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(StepsDemo, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var demoString = '```jsx' + '\\n...\\nimport { Steps } from \\'slucky\\';\\n...\\n<Steps isCacheData={true} stepset={[{\\n    title: \\'\\u6B65\\u9AA41\\',\\n    content: (data) => {\\n        return <div className=\"p32\">\\n            <Search onChange={(v) => { console.log(v); }} option={[\\'asdf\\', \\'123\\', \\'qwer123\\', \\'zxcvqwe23\\', \\'2333hhh\\']} />\\n        </div>;\\n    },\\n    handleNext: (data) => {\\n        return true;\\n    }\\n}, {\\n    title: \\'\\u6B65\\u9AA42\\',\\n    content: (data, handelNext, handlePre) => {\\n        return <div className=\"p32 ta-c\">\\n            <button className=\"btn-n plr16 ptb4 mr8\" onClick={handlePre}>\\u4E0A\\u4E00\\u6B65</button>\\n            <button className=\"btn-n plr16 ptb4\" onClick={handelNext}>\\u4E0B\\u4E00\\u6B65</button>\\n        </div>;\\n    },\\n    isCustomCtrl: true\\n}, {\\n    title: \\'\\u6B65\\u9AA43\\',\\n    content: (data) => {\\n        return <div className=\"p32\">\\n            <Checkbox.GroupBorder className=\"pb32\" defaultValue=\"Pear\" onChange={(selected) => { this.handleChangeCheckbox(selected); }} option={[\\n                { label: \\'Apple\\', value: \\'Apple\\' },\\n                { label: <div className=\"border-sign\">Pear</div>, value: \\'Pear\\' },\\n                { label: \\'Orange\\', value: \\'Orange\\' }\\n            ]} />\\n        </div>;\\n    },\\n    handleNext: (data) => { return true; }\\n}, {\\n    title: \\'\\u6B65\\u9AA44\\',\\n    content: (data) => {\\n        return <div className=\"p32\">{data.name}</div>;\\n    },\\n    handleNext: (data) => { return true; }\\n}]} onChange={(currentSept) => { console.log(currentSept); }} />\\n        ';\n            return _react2.default.createElement(\n                'div',\n                { className: 'pt32' },\n                _react2.default.createElement(_steps.Steps, { isCacheData: true, stepset: [{\n                        title: '步骤1',\n                        content: function content(data) {\n                            return _react2.default.createElement(\n                                'div',\n                                { className: 'p32' },\n                                _react2.default.createElement(_search.Search, { onChange: function onChange(v) {\n                                        console.log(v);\n                                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] })\n                            );\n                        },\n                        handleNext: function handleNext(data) {\n                            return true;\n                        }\n                    }, {\n                        title: '步骤2',\n                        content: function content(data, handelNext, handlePre) {\n                            return _react2.default.createElement(\n                                'div',\n                                { className: 'p32 ta-c' },\n                                _react2.default.createElement(\n                                    'button',\n                                    { className: 'btn-n plr16 ptb4 mr8', onClick: handlePre },\n                                    '\\u4E0A\\u4E00\\u6B65'\n                                ),\n                                _react2.default.createElement(\n                                    'button',\n                                    { className: 'btn-n plr16 ptb4', onClick: handelNext },\n                                    '\\u4E0B\\u4E00\\u6B65'\n                                )\n                            );\n                        },\n                        isCustomCtrl: true\n                    }, {\n                        title: '步骤3',\n                        content: function content(data) {\n                            return _react2.default.createElement(\n                                'div',\n                                { className: 'p32' },\n                                _react2.default.createElement(_checkbox.Checkbox.GroupBorder, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(selected) {\n                                        _this2.handleChangeCheckbox(selected);\n                                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: _react2.default.createElement(\n                                            'div',\n                                            { className: 'border-sign' },\n                                            'Pear'\n                                        ), value: 'Pear' }, { label: 'Orange', value: 'Orange' }] })\n                            );\n                        },\n                        handleNext: function handleNext(data) {\n                            return true;\n                        }\n                    }, {\n                        title: '步骤4',\n                        content: function content(data) {\n                            return _react2.default.createElement(\n                                'div',\n                                { className: 'p32' },\n                                data.name\n                            );\n                        },\n                        handleNext: function handleNext(data) {\n                            return true;\n                        }\n                    }], onChange: function onChange(currentSept) {\n                        console.log(currentSept);\n                    } }),\n                _react2.default.createElement(\n                    'details',\n                    { className: 'pb16 mb16 bor-b b-side-s' },\n                    _react2.default.createElement(\n                        'summary',\n                        { className: 'btn-n pl8 pr64 ptb8' },\n                        '\\u663E\\u793A\\u4F7F\\u7528\\u4F8B\\u5B50'\n                    ),\n                    _react2.default.createElement(\n                        _reactHighlight2.default,\n                        { innerHTML: true },\n                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))\n                    )\n                )\n            );\n        }\n    }]);\n\n    return StepsDemo;\n}(_react.Component);\n\nexports.default = StepsDemo;\n\n//# sourceURL=webpack:///./src/stepsDemo.jsx?");

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

/***/ })

/******/ });
});