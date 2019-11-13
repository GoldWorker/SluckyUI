(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-markdown"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-markdown"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-markdown")) : factory(root["react"], root["react-markdown"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_markdown__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/articlePublish/display-articlePublish.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/articlePublish/display-articlePublish.jsx":
/*!*******************************************************!*\
  !*** ./src/articlePublish/display-articlePublish.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMarkdown = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// controlled component\nvar ArticleEditer = function (_Component) {\n\t_inherits(ArticleEditer, _Component);\n\n\tfunction ArticleEditer(props) {\n\t\t_classCallCheck(this, ArticleEditer);\n\n\t\tvar _this = _possibleConstructorReturn(this, (ArticleEditer.__proto__ || Object.getPrototypeOf(ArticleEditer)).call(this, props));\n\n\t\t_this.state = {\n\t\t\ttitle: '',\n\t\t\tcontent: '',\n\t\t\tid: ''\n\t\t};\n\t\t_this.params = new URLSearchParams(location.search);\n\t\t_this.artId = _this.params.get('id') || '';\n\t\treturn _this;\n\t}\n\n\t_createClass(ArticleEditer, [{\n\t\tkey: 'componentWillMount',\n\t\tvalue: function componentWillMount() {\n\t\t\tconsole.log('本生命周期之前已经经历了getDefaultPorps,getInitialState');\n\t\t\tconsole.log('componentWillMount', this.props, this.state);\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tconsole.log('componentDidMount', this.props);\n\t\t\tif (this.artId) {\n\t\t\t\tvar fetchData = this.props.fetchData;\n\n\t\t\t\tfetchData && fetchData(this.artId);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'componentWillReceiveProps',\n\t\tvalue: function componentWillReceiveProps(nextProps) {\n\t\t\t// 在重新render之前更新state不会重新触发生命周期\n\t\t\tconsole.log('componentWillReceiveProps', nextProps, this.props);\n\t\t\tvar _nextProps$item = nextProps.item,\n\t\t\t    title = _nextProps$item.title,\n\t\t\t    content = _nextProps$item.content,\n\t\t\t    id = _nextProps$item.id;\n\n\t\t\tthis.setState({\n\t\t\t\ttitle: title,\n\t\t\t\tcontent: content,\n\t\t\t\tid: id\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'shouldComponentUpdate',\n\t\tvalue: function shouldComponentUpdate(nextProps, nextState) {\n\t\t\tconsole.log('shouldComponentUpdate', nextProps, this.props);\n\t\t\treturn true;\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUpdate',\n\t\tvalue: function componentWillUpdate(nextProps) {\n\t\t\tconsole.log('componentWillUpdate', nextProps, this.props);\n\t\t}\n\t}, {\n\t\tkey: 'componentDidUpdate',\n\t\tvalue: function componentDidUpdate() {\n\t\t\tconsole.log('componentDidUpdate', this.props);\n\t\t}\n\t}, {\n\t\tkey: 'handleTitleChange',\n\t\tvalue: function handleTitleChange(e) {\n\t\t\tthis.setState({\n\t\t\t\ttitle: e.target.value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'handleInputChange',\n\t\tvalue: function handleInputChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tcontent: e.target.value\n\t\t\t});\n\t\t}\n\t\t// 输入验证\n\n\t}, {\n\t\tkey: 'checkData',\n\t\tvalue: function checkData(e) {\n\t\t\te.preventDefault();\n\t\t\tvar _props = this.props,\n\t\t\t    handlePublicClick = _props.handlePublicClick,\n\t\t\t    handleClickUpdate = _props.handleClickUpdate;\n\n\t\t\tif (this.state.title && this.state.content) {\n\t\t\t\t// console.log(\"publish\")\n\t\t\t\tif (this.artId) {\n\t\t\t\t\thandleClickUpdate(this.state);\n\t\t\t\t} else {\n\t\t\t\t\thandlePublicClick(this.state);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'd-f editor-tool' },\n\t\t\t\t\t_react2.default.createElement('input', { type: 'text', onChange: this.handleTitleChange.bind(this), className: 'input w-full input-normal bg-w', value: this.state.title, maxLength: '50', placeholder: 'Title', required: true }),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ className: 'tag-text plr16 s0', onClick: this.checkData.bind(this) },\n\t\t\t\t\t\t'\\u53D1\\u5E03\\u6587\\u7AE0'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ 'class': 'stretching-column' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ 'class': 'left' },\n\t\t\t\t\t\t_react2.default.createElement('div', { 'class': 'resize-bar' }),\n\t\t\t\t\t\t_react2.default.createElement('div', { 'class': 'resize-line' }),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ 'class': 'resize-content' },\n\t\t\t\t\t\t\t_react2.default.createElement('textarea', { placeholder: '# Press something what you think......', className: 'textarea', autoFocus: true, value: this.state.content, onChange: this.handleInputChange.bind(this), required: true })\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ 'class': 'right' },\n\t\t\t\t\t\t_react2.default.createElement(_reactMarkdown2.default, { source: this.state.content })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn ArticleEditer;\n}(_react.Component);\n\nArticleEditer.defaultProps = {\n\titem: {\n\t\tid: '',\n\t\ttitle: '',\n\t\tcontent: '# Loding...'\n\t}\n};\n\nexports.default = ArticleEditer;\n\n//# sourceURL=webpack:///./src/articlePublish/display-articlePublish.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

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