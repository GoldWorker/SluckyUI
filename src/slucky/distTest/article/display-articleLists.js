(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./display-articleItem"), require("react"), require("react-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["./display-articleItem", "react", "react-transition-group"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./display-articleItem"), require("react"), require("react-transition-group")) : factory(root["./display-articleItem"], root["react"], root["react-transition-group"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__display_articleItem__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_transition_group__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/article/display-articleLists.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./display-articleItem":
/*!****************************************!*\
  !*** external "./display-articleItem" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_articleItem__;\n\n//# sourceURL=webpack:///external_%22./display-articleItem%22?");

/***/ }),

/***/ "./src/article/display-articleLists.jsx":
/*!**********************************************!*\
  !*** ./src/article/display-articleLists.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _displayArticleItem = __webpack_require__(/*! ./display-articleItem */ \"./display-articleItem\");\n\nvar _displayArticleItem2 = _interopRequireDefault(_displayArticleItem);\n\nvar _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'\n\n\nvar ArticleLists = function (_Component) {\n\t_inherits(ArticleLists, _Component);\n\n\tfunction ArticleLists(props) {\n\t\t_classCallCheck(this, ArticleLists);\n\n\t\tvar _this = _possibleConstructorReturn(this, (ArticleLists.__proto__ || Object.getPrototypeOf(ArticleLists)).call(this, props));\n\n\t\t_this.fetchArticleByPage = _this.props.fetchArticleByPage.bind(_this);\n\t\t_this.initialComponent = _this.props.initialComponent.bind(_this);\n\t\t_this.state = {\n\t\t\tcounter: 0,\n\t\t\t_interval: 10\n\t\t};\n\t\tconsole.log(_this.props);\n\t\treturn _this;\n\t}\n\n\t_createClass(ArticleLists, [{\n\t\tkey: 'nextPage',\n\t\tvalue: function nextPage() {\n\t\t\treturn this.state.counter += this.state._interval;\n\t\t}\n\n\t\t// 首屏加载\n\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\t// window.addEventListener('scroll', this.handleScroll.bind(this))\n\t\t\t// this.initialComponent()\n\t\t\tvar fetchArticle = this.props.fetchArticle;\n\n\t\t\tfetchArticle();\n\t\t}\n\n\t\t// componentWillUnmount() {\n\t\t// \twindow.removeEventListener('scroll', this.handleScroll.bind(this));\n\t\t// }\n\n\t\t// handleScroll() {\n\t\t// \tvar scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n\t\t// \tvar scrollHeight = document.body.scrollHeight;\n\t\t// \tvar screenHeight = window.screen.height;\n\t\t// \tvar limit = (scrollTop + screenHeight) / scrollHeight\n\t\t// \tif (limit >= 1.053) {\n\t\t// \t\t// 瀑布流加载\n\t\t// \t\tthis.fetchArticleByPage(this.nextPage())\n\t\t// \t}\n\t\t// }\n\n\t}, {\n\t\tkey: 'handleClick',\n\t\tvalue: function handleClick() {\n\t\t\tthis.fetchArticle(this.nextPage());\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'm16' },\n\t\t\t\tArray.prototype.map.call(this.props.lists, function (elem, index) {\n\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t_reactTransitionGroup.CSSTransitionGroup,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ttransitionName: 'example',\n\t\t\t\t\t\t\ttransitionAppear: true,\n\t\t\t\t\t\t\ttransitionAppearTimeout: 500,\n\t\t\t\t\t\t\ttransitionEnter: false,\n\t\t\t\t\t\t\ttransitionLeave: false,\n\t\t\t\t\t\t\tkey: index },\n\t\t\t\t\t\t_react2.default.createElement(_displayArticleItem2.default, { article: elem, key: index })\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn ArticleLists;\n}(_react.Component);\n\nexports.default = ArticleLists;\n\n//# sourceURL=webpack:///./src/article/display-articleLists.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_transition_group__;\n\n//# sourceURL=webpack:///external_%22react-transition-group%22?");

/***/ })

/******/ });
});