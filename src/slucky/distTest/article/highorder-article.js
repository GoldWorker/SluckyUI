(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./data-article"), require("./display-articleLists"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["./data-article", "./display-articleLists", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("./data-article"), require("./display-articleLists"), require("react-redux"));
	else
		root["slucky"] = factory(root["./data-article"], root["./display-articleLists"], root["react-redux"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__data_article__, __WEBPACK_EXTERNAL_MODULE__display_articleLists__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/article/highorder-article.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data-article":
/*!*********************************!*\
  !*** external "./data-article" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__data_article__;\n\n//# sourceURL=webpack://slucky/external_%22./data-article%22?");

/***/ }),

/***/ "./display-articleLists":
/*!*****************************************!*\
  !*** external "./display-articleLists" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_articleLists__;\n\n//# sourceURL=webpack://slucky/external_%22./display-articleLists%22?");

/***/ }),

/***/ "./src/article/highorder-article.jsx":
/*!*******************************************!*\
  !*** ./src/article/highorder-article.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _displayArticleLists = __webpack_require__(/*! ./display-articleLists */ \"./display-articleLists\");\n\nvar _displayArticleLists2 = _interopRequireDefault(_displayArticleLists);\n\nvar _dataArticle = __webpack_require__(/*! ./data-article */ \"./data-article\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tlists: state.articleListsReducer.items\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tfetchArticleByPage: function fetchArticleByPage(pageId) {\n\t\t\treturn dispatch((0, _dataArticle.fetchArticleByPage)(pageId));\n\t\t},\n\t\tfetchArticle: function fetchArticle() {\n\t\t\treturn dispatch((0, _dataArticle.fetchArticle)());\n\t\t},\n\t\tinitialComponent: function initialComponent() {\n\t\t\treturn dispatch((0, _dataArticle.initialArticle)());\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayArticleLists2.default);\n\n// export const HighorderArticle = connect(mapStateToProps, mapDispatchToProps)(ArticleLists)\n\n//# sourceURL=webpack://slucky/./src/article/highorder-article.jsx?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://slucky/external_%22react-redux%22?");

/***/ })

/******/ });
});