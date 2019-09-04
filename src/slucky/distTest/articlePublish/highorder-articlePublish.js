(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../articleDetail/data-articleDetail"), require("./data-articlePublish"), require("./display-articlePublish"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["../articleDetail/data-articleDetail", "./data-articlePublish", "./display-articlePublish", "react-redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../articleDetail/data-articleDetail"), require("./data-articlePublish"), require("./display-articlePublish"), require("react-redux")) : factory(root["../articleDetail/data-articleDetail"], root["./data-articlePublish"], root["./display-articlePublish"], root["react-redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__articleDetail_data_articleDetail__, __WEBPACK_EXTERNAL_MODULE__data_articlePublish__, __WEBPACK_EXTERNAL_MODULE__display_articlePublish__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/articlePublish/highorder-articlePublish.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../articleDetail/data-articleDetail":
/*!******************************************************!*\
  !*** external "../articleDetail/data-articleDetail" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__articleDetail_data_articleDetail__;\n\n//# sourceURL=webpack:///external_%22../articleDetail/data-articleDetail%22?");

/***/ }),

/***/ "./data-articlePublish":
/*!****************************************!*\
  !*** external "./data-articlePublish" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__data_articlePublish__;\n\n//# sourceURL=webpack:///external_%22./data-articlePublish%22?");

/***/ }),

/***/ "./display-articlePublish":
/*!*******************************************!*\
  !*** external "./display-articlePublish" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_articlePublish__;\n\n//# sourceURL=webpack:///external_%22./display-articlePublish%22?");

/***/ }),

/***/ "./src/articlePublish/highorder-articlePublish.jsx":
/*!*********************************************************!*\
  !*** ./src/articlePublish/highorder-articlePublish.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _dataArticlePublish = __webpack_require__(/*! ./data-articlePublish */ \"./data-articlePublish\");\n\nvar _dataArticleDetail = __webpack_require__(/*! ../articleDetail/data-articleDetail */ \"../articleDetail/data-articleDetail\");\n\nvar _displayArticlePublish = __webpack_require__(/*! ./display-articlePublish */ \"./display-articlePublish\");\n\nvar _displayArticlePublish2 = _interopRequireDefault(_displayArticlePublish);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        item: state.articleDetailReducer.item\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        handlePublicClick: function handlePublicClick(art) {\n            return dispatch((0, _dataArticlePublish.publishArticle)(art));\n        },\n        handleClickUpdate: function handleClickUpdate(art) {\n            return dispatch((0, _dataArticlePublish.putArticle)(art));\n        },\n        fetchData: function fetchData(id) {\n            return dispatch((0, _dataArticleDetail.fetchArticleOne)(id));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayArticlePublish2.default);\n\n//# sourceURL=webpack:///./src/articlePublish/highorder-articlePublish.jsx?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ })

/******/ });
});