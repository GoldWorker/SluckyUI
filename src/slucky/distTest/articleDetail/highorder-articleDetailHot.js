(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./data-articleDetail"), require("./display-articleDetail"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["./data-articleDetail", "./display-articleDetail", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("./data-articleDetail"), require("./display-articleDetail"), require("react-redux"));
	else
		root["slucky"] = factory(root["./data-articleDetail"], root["./display-articleDetail"], root["react-redux"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__data_articleDetail__, __WEBPACK_EXTERNAL_MODULE__display_articleDetail__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/articleDetail/highorder-articleDetailHot.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data-articleDetail":
/*!***************************************!*\
  !*** external "./data-articleDetail" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__data_articleDetail__;\n\n//# sourceURL=webpack://slucky/external_%22./data-articleDetail%22?");

/***/ }),

/***/ "./display-articleDetail":
/*!******************************************!*\
  !*** external "./display-articleDetail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_articleDetail__;\n\n//# sourceURL=webpack://slucky/external_%22./display-articleDetail%22?");

/***/ }),

/***/ "./src/articleDetail/highorder-articleDetailHot.jsx":
/*!**********************************************************!*\
  !*** ./src/articleDetail/highorder-articleDetailHot.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _displayArticleDetail = __webpack_require__(/*! ./display-articleDetail */ \"./display-articleDetail\");\n\nvar _displayArticleDetail2 = _interopRequireDefault(_displayArticleDetail);\n\nvar _dataArticleDetail = __webpack_require__(/*! ./data-articleDetail */ \"./data-articleDetail\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (id) {\n\tvar mapStateToProps = function mapStateToProps(state) {\n\t\treturn {\n\t\t\titem: state.articleDetailReducer.item,\n\t\t\tparams: { id: id }\n\t\t};\n\t};\n\n\tvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\t\treturn {\n\t\t\thandleFetchArticle: function handleFetchArticle(id) {\n\t\t\t\treturn dispatch((0, _dataArticleDetail.fetchArticleOne)(id));\n\t\t\t},\n\t\t\thandleDeleteClick: function handleDeleteClick(id) {\n\t\t\t\treturn dispatch((0, _dataArticleDetail.deleteArticleOne)(id));\n\t\t\t}\n\t\t};\n\t};\n\treturn (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayArticleDetail2.default);\n};\n\n//# sourceURL=webpack://slucky/./src/articleDetail/highorder-articleDetailHot.jsx?");

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