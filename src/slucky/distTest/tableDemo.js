(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./doc/table.md"), require("./index"), require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"));
	else if(typeof define === 'function' && define.amd)
		define(["./doc/table.md", "./index", "react", "react-dom/server", "react-highlight", "react-markdown"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./doc/table.md"), require("./index"), require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown")) : factory(root["./doc/table.md"], root["./index"], root["react"], root["react-dom/server"], root["react-highlight"], root["react-markdown"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__doc_table_md__, __WEBPACK_EXTERNAL_MODULE__index__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_highlight__, __WEBPACK_EXTERNAL_MODULE_react_markdown__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tableDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./doc/table.md":
/*!*********************************!*\
  !*** external "./doc/table.md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__doc_table_md__;\n\n//# sourceURL=webpack:///external_%22./doc/table.md%22?");

/***/ }),

/***/ "./index":
/*!**************************!*\
  !*** external "./index" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__index__;\n\n//# sourceURL=webpack:///external_%22./index%22?");

/***/ }),

/***/ "./src/tableDemo.jsx":
/*!***************************!*\
  !*** ./src/tableDemo.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.TableDemo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactMarkdown = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nvar _reactHighlight = __webpack_require__(/*! react-highlight */ \"react-highlight\");\n\nvar _reactHighlight2 = _interopRequireDefault(_reactHighlight);\n\nvar _index = __webpack_require__(/*! ./index */ \"./index\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar tableMd = __webpack_require__(/*! ./doc/table.md */ \"./doc/table.md\");\n\nvar TableDemo = exports.TableDemo = function (_Component) {\n    _inherits(TableDemo, _Component);\n\n    function TableDemo() {\n        _classCallCheck(this, TableDemo);\n\n        var _this = _possibleConstructorReturn(this, (TableDemo.__proto__ || Object.getPrototypeOf(TableDemo)).call(this));\n\n        _this.handleChangePage = function (currentPage) {\n            console.log(currentPage);\n            _this.setState({\n                pageInfo: {\n                    currentPage: currentPage,\n                    total: 84,\n                    maxToShow: 10\n                }\n            });\n        };\n\n        _this.state = {\n            pageInfo: {\n                currentPage: 1,\n                total: 84,\n                maxToShow: 10\n            }\n        };\n        setTimeout(function () {\n            _this.setState({\n                pageInfo: {\n                    currentPage: 1,\n                    total: 84,\n                    maxToShow: 10\n                }\n            });\n        }, 1000);\n        return _this;\n    }\n\n    _createClass(TableDemo, [{\n        key: 'render',\n        value: function render() {\n            var dataconf = [{\n                title: '',\n                width: '10%',\n                checkbox: true,\n                handle: function handle(list) {\n                    console.log(list);\n                }\n            }, {\n                title: 'progress',\n                name: 'progress',\n                width: '25%',\n                progress: function progress(data) {\n                    return data['progress'];\n                },\n                pipe: function pipe(data) {\n                    return data['progress'] + '%';\n                }\n            }, {\n                title: 'ID',\n                name: 'id',\n                width: '10%'\n            }, {\n                title: '姓名',\n                name: 'name',\n                width: '10%'\n            }, {\n                title: '身高',\n                name: 'height',\n                width: '10%'\n            }, {\n                width: '10%',\n                name: '提示',\n                popup: function popup(data) {\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'pre',\n                            { className: 'c-text-w fs18' },\n                            'Title'\n                        ),\n                        _react2.default.createElement(\n                            'pre',\n                            { className: 'c-text-w' },\n                            'SluckyUI\\u7684\\u8DE8\\u5E73\\u53F0\\u6027\\u8D28\\u53EF\\u5FEB\\u901F\\u52A0\\u5DE5\\u6210react\\uFF0Cvue\\uFF0Cangular\\u7684\\u7EC4\\u4EF6'\n                        ),\n                        _react2.default.createElement(\n                            'pre',\n                            { className: 'c-text-w' },\n                            'SluckyUI\\u7684\\u8DE8\\u5E73\\u53F0\\u6027\\u8D28\\u53EF\\u5FEB\\u901F\\u52A0\\u5DE5\\u6210react\\uFF0Cvue\\uFF0Cangular\\u7684\\u7EC4\\u4EF6'\n                        ),\n                        _react2.default.createElement(\n                            'pre',\n                            { className: 'c-text-w' },\n                            'SluckyUI\\u7684\\u8DE8\\u5E73\\u53F0\\u6027\\u8D28\\u53EF\\u5FEB\\u901F\\u52A0\\u5DE5\\u6210react\\uFF0Cvue\\uFF0Cangular\\u7684\\u7EC4\\u4EF6'\n                        )\n                    );\n                }\n            }, {\n                title: '',\n                width: '25%',\n                name: 'action2',\n                type: 'action',\n                handles: [{\n                    name: '配置',\n                    btnType: 'text',\n                    handle: function handle(data) {\n                        alert('配置');\n                        console.log(data);\n                    }\n                }, {\n                    name: '删除',\n                    btnType: 'text',\n                    handle: function handle(data) {\n                        alert('备注');\n                        console.log(data);\n                    }\n                }]\n            }];\n            var dataset = [{\n                id: 1,\n                name: 'Apple',\n                height: 178,\n                progress: 30\n            }, {\n                id: 2,\n                name: 'Boy',\n                height: 177,\n                progress: 60\n            }, {\n                id: 3,\n                name: 'Cat',\n                height: 176,\n                progress: 90\n            }];\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'ptb32' },\n                    _react2.default.createElement(_index.Table, { textAlign: '', dataconf: dataconf, dataset: dataset, loading: false, loadingOption: _react2.default.createElement(\n                            'div',\n                            { 'data-loader': 'bounce' },\n                            _react2.default.createElement('div', { 'class': 'bounce1' }),\n                            _react2.default.createElement('div', { 'class': 'bounce2' }),\n                            _react2.default.createElement('div', { 'class': 'bounce3' }),\n                            _react2.default.createElement('div', { 'class': 'bounce4' })\n                        ) }),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'p16' },\n                        _react2.default.createElement(_index.Paging, { style: 'paging-aurora', pageInfo: this.state.pageInfo, onAction: this.handleChangePage }),\n                        console.log(this.state.pageInfo)\n                    )\n                ),\n                _react2.default.createElement(\n                    'details',\n                    { className: 'pb16 mb16 bor-b b-side-s', open: true },\n                    _react2.default.createElement(\n                        'summary',\n                        { className: 'btn-n pl8 pr64 ptb8' },\n                        '\\u663E\\u793A\\u4F7F\\u7528\\u4F8B\\u5B50'\n                    ),\n                    _react2.default.createElement(\n                        _reactHighlight2.default,\n                        { innerHTML: true },\n                        tableMd\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TableDemo;\n}(_react.Component);\n\n//# sourceURL=webpack:///./src/tableDemo.jsx?");

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