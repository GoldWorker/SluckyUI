(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./index"), require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"));
	else if(typeof define === 'function' && define.amd)
		define(["./index", "react", "react-dom/server", "react-highlight", "react-markdown"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("./index"), require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"));
	else
		root["slucky"] = factory(root["./index"], root["react"], root["react-dom/server"], root["react-highlight"], root["react-markdown"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__index__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_highlight__, __WEBPACK_EXTERNAL_MODULE_react_markdown__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popupDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index":
/*!**************************!*\
  !*** external "./index" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__index__;\n\n//# sourceURL=webpack://slucky/external_%22./index%22?");

/***/ }),

/***/ "./src/popupDemo.jsx":
/*!***************************!*\
  !*** ./src/popupDemo.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.PopupDemo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactMarkdown = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nvar _reactHighlight = __webpack_require__(/*! react-highlight */ \"react-highlight\");\n\nvar _reactHighlight2 = _interopRequireDefault(_reactHighlight);\n\nvar _index = __webpack_require__(/*! ./index */ \"./index\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PopupDemo = exports.PopupDemo = function (_Component) {\n    _inherits(PopupDemo, _Component);\n\n    function PopupDemo() {\n        _classCallCheck(this, PopupDemo);\n\n        var _this = _possibleConstructorReturn(this, (PopupDemo.__proto__ || Object.getPrototypeOf(PopupDemo)).call(this));\n\n        _this.count = 0;\n        _this.state = {\n            toggle: false\n        };\n        return _this;\n    }\n\n    _createClass(PopupDemo, [{\n        key: 'handleClickToggle',\n        value: function handleClickToggle() {\n            this.setState({\n                toggle: !this.state.toggle\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var useString = '``` jsx' + '\\n// Style1\\uFF1A\\u4F7F\\u7528\\u51FD\\u6570\\u5F0F\\u76F4\\u63A5\\u8C03\\u7528\\n\\nimport { Dialog, Toast } from \\'slucky\\'\\nReactDOM.render(\\n    <div>\\n        <button\\n        className=\"tag-text ptb6 plr16 m32\"\\n        onClick={() => Toast.add({\\n            content: \\'\\u5185\\u5BB9\\'\\n        })}>\\u5F39\\u51FA\\u6D88\\u606F\\u63D0\\u793A</button>\\n        <button\\n            className=\"tag-text ptb6 plr16 m32\"\\n            onClick={() => Toast.error(\\u2018\\u5185\\u5BB9\\u2018)}>\\u5F39\\u51FA\\u9519\\u8BEF\\u6D88\\u606F\\u63D0\\u793A</button>\\n        <button\\n            className=\"tag-text ptb6 plr16 m32\"\\n            onClick={() => Toast.warn(\\u2018\\u5185\\u5BB9\\u2018)}>\\u5F39\\u51FA\\u8B66\\u544A\\u6D88\\u606F\\u63D0\\u793A</button>\\n        <button\\n            className=\"tag-text ptb6 plr16 m32\"\\n            onClick={() => Toast.success(\\u2018\\u5185\\u5BB9\\u2018)}>\\u5F39\\u51FA\\u6210\\u529F\\u6D88\\u606F\\u63D0\\u793A</button>\\n\\n        <button \\n            className=\"btn-n\" \\n            onClick={() => Dialog.model({ \\n                content: 123, \\n                onOk: () => { }, \\n                title: \\'Tips\\' \\n            })}>Open Dialog</button>\\n    </div>,\\n    document.body\\n)\\n\\n//------------------------------------\\n// Style2\\uFF1A\\u4F7F\\u7528\\u7EC4\\u4EF6\\u53BB\\u8C03\\u7528\\nclass demo extends Component {\\n    constructor() {\\n        super()\\n        this.state = {\\n            toggle: false\\n        }\\n    }\\n    handleClickToggle() {\\n        this.setState({\\n            toggle: !this.state.toggle\\n        })\\n    }\\n    render() {\\n        return (\\n            <div>\\n                <Dialog open={this.state.toggle} onClose={() => this.setState({ toggle: false })}>\\n                    <div>\\n                        <p>Your Title</p>\\n                        <div>Breaking news, sport, TV, radio and a whole lot more. The BBC informs,\\n                            educates and entertains - wherever you are, whatever your age.Visit BBC News for\\n                            up-to-the-minute news, breaking news, video, audio and feature stories. BBC News\\n                            provides trusted World and UK news as well as local and ...</div>\\n                        <div className=\"ta-r pt8\">\\n                            <button\\n                                className=\"tag-text ptb6 plr16\"\\n                                onClick={() => this.setState({ toggle: false })}>cancel</button>\\n                            <button className=\"tag-text ptb6 plr16\">ok</button>\\n                        </div>\\n                    </div>\\n                </Dialog>\\n            </div>\\n        )\\n    }\\n}\\n\\n';\n            var demoString = '``` html' + '\\n <div className=\"fadeIn p-r z10\">\\n    <div className=\"dialog-mark\"></div>\\n    <div className=\"dialog-box d-f ac jc\">\\n        <span>\\n            <div className=\"dialog paper fade-scale mlr64\">\\n                <div className=\"ta-r\">\\n                    <div className=\"mt4 mr4 pt4 plr8 ta-r\">\\n                        <div>X</div>\\n                    </div>\\n                </div>\\n                <div>\\n                    <div className=\"dialog-content ta-l\">\\n                        content\\n                    </div>\\n                </div>\\n            </div>\\n        </span>\\n    </div>\\n</div>\\n\\n<div className=\"toastlists-normalize-box\">\\n    <div className=\"toastlist\">\\n        <div className=\"toast-item paper\" >\\n            <div className=\"pb8 c-success\" style=\"min-width:256px;\">Title</div>\\n            <div className=\"\">centent</div>\\n        </div>\\n    </div>\\n</div>\\n            \\n<div className=\"pop-box\">\\n    <div className=\"bor-b b-theme pop-toggle plr4\">\\n        <span className=\"c-theme\">?</span>\\n        <div className=\"pop-main-r pl8\">\\n            <div className=\"pop-content p24 bg-b ta-l shadow fs14\">\\n                <pre className=\"c-text-w fs18\">Title</pre>\\n                <pre className=\"c-text-w\">TV, radio and a whole lot more. The BBC informs</pre>\\n                <pre className=\"c-text-w\">TV, radio and a whole lot more. The BBC informs</pre>\\n                <pre className=\"c-text-w\">TV, radio and a whole lot more. The BBC informs</pre>\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n';\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _index.Dialog,\n                    { open: this.state.toggle, onClose: function onClose() {\n                            return _this2.setState({ toggle: false });\n                        } },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'p',\n                            null,\n                            'Your Title'\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            'Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age.Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and ...'\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'ta-r pt8' },\n                            _react2.default.createElement(\n                                'button',\n                                {\n                                    className: 'tag-text ptb6 plr16',\n                                    onClick: function onClick() {\n                                        return _this2.setState({ toggle: false });\n                                    } },\n                                'cancel'\n                            ),\n                            _react2.default.createElement(\n                                'button',\n                                { className: 'tag-text ptb6 plr16' },\n                                'ok'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'btn-n', onClick: function onClick() {\n                            return _index.Dialog.model({ content: 123, onOk: function onOk() {}, title: 'Tips' });\n                        } },\n                    '\\u5FEB\\u6377\\u5F39\\u51FA\\u5BF9\\u8BDD\\u6846'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    {\n                        className: 'tag-text ptb6 plr16 m32',\n                        onClick: function onClick() {\n                            return _this2.setState({ toggle: true });\n                        } },\n                    '\\u5F39\\u51FA\\u81EA\\u5B9A\\u4E49\\u5BF9\\u8BDD\\u6846'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    {\n                        className: 'tag-text ptb6 plr16 m32',\n                        onClick: function onClick() {\n                            return _index.Toast.add({\n                                title: '自定义',\n                                content: '内容...',\n                                status: 'success'\n                            });\n                        } },\n                    '\\u5F39\\u51FA\\u81EA\\u5B9A\\u4E49\\u6D88\\u606F\\u63D0\\u793A'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    {\n                        className: 'tag-text ptb6 plr16 m32',\n                        onClick: function onClick() {\n                            return _index.Toast.error('\\u5185\\u5BB9' + _this2.count++);\n                        } },\n                    '\\u5F39\\u51FA\\u9519\\u8BEF\\u6D88\\u606F\\u63D0\\u793A'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    {\n                        className: 'tag-text ptb6 plr16 m32',\n                        onClick: function onClick() {\n                            return _index.Toast.warn('\\u5185\\u5BB9' + _this2.count++);\n                        } },\n                    '\\u5F39\\u51FA\\u8B66\\u544A\\u6D88\\u606F\\u63D0\\u793A'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    {\n                        className: 'tag-text ptb6 plr16 m32',\n                        onClick: function onClick() {\n                            return _index.Toast.success('\\u5185\\u5BB9' + _this2.count++);\n                        } },\n                    '\\u5F39\\u51FA\\u6210\\u529F\\u6D88\\u606F\\u63D0\\u793A'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'pop-box' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'pop-toggle plr4' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'circle bg-icon c-text-w d-f jc ac fs12' },\n                            '?'\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'pop-main-r pl8' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'pop-content p24 bg-b ta-l shadow fs14' },\n                                _react2.default.createElement(\n                                    'pre',\n                                    { className: 'c-text-w fs18' },\n                                    'Title'\n                                ),\n                                _react2.default.createElement(\n                                    'pre',\n                                    { className: 'c-text-w' },\n                                    'TV, radio and a whole lot more. The BBC informs'\n                                ),\n                                _react2.default.createElement(\n                                    'pre',\n                                    { className: 'c-text-w' },\n                                    'TV, radio and a whole lot more. The BBC informs'\n                                ),\n                                _react2.default.createElement(\n                                    'pre',\n                                    { className: 'c-text-w' },\n                                    'TV, radio and a whole lot more. The BBC informs'\n                                )\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'details',\n                    { className: 'pb16 mb16 bor-b b-side-s' },\n                    _react2.default.createElement(\n                        'summary',\n                        { className: 'btn-n pl8 pr64 ptb8' },\n                        '\\u663E\\u793A\\u4F7F\\u7528\\u4F8B\\u5B50'\n                    ),\n                    _react2.default.createElement(\n                        _reactHighlight2.default,\n                        { innerHTML: true },\n                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: useString }))\n                    )\n                ),\n                _react2.default.createElement(\n                    'details',\n                    { className: 'pb16 mb16 bor-b b-side-s' },\n                    _react2.default.createElement(\n                        'summary',\n                        { className: 'btn-n pl8 pr64 ptb8' },\n                        '\\u663E\\u793A\\u6837\\u5F0F\\u4EE3\\u7801'\n                    ),\n                    _react2.default.createElement(\n                        _reactHighlight2.default,\n                        { innerHTML: true },\n                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))\n                    )\n                )\n            );\n        }\n    }]);\n\n    return PopupDemo;\n}(_react.Component);\n\n//# sourceURL=webpack://slucky/./src/popupDemo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://slucky/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;\n\n//# sourceURL=webpack://slucky/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-highlight":
/*!**********************************!*\
  !*** external "react-highlight" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_highlight__;\n\n//# sourceURL=webpack://slucky/external_%22react-highlight%22?");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_markdown__;\n\n//# sourceURL=webpack://slucky/external_%22react-markdown%22?");

/***/ })

/******/ });
});