(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./data-comment"), require("./display-commentShow"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["./data-comment", "./display-commentShow", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("./data-comment"), require("./display-commentShow"), require("react-redux"));
	else
		root["slucky"] = factory(root["./data-comment"], root["./display-commentShow"], root["react-redux"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__data_comment__, __WEBPACK_EXTERNAL_MODULE__display_commentShow__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/comment/highorder-commentShow.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data-comment":
/*!*********************************!*\
  !*** external "./data-comment" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__data_comment__;\n\n//# sourceURL=webpack://slucky/external_%22./data-comment%22?");

/***/ }),

/***/ "./display-commentShow":
/*!****************************************!*\
  !*** external "./display-commentShow" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__display_commentShow__;\n\n//# sourceURL=webpack://slucky/external_%22./display-commentShow%22?");

/***/ }),

/***/ "./src/comment/highorder-commentShow.jsx":
/*!***********************************************!*\
  !*** ./src/comment/highorder-commentShow.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _dataComment = __webpack_require__(/*! ./data-comment */ \"./data-comment\");\n\nvar _displayCommentShow = __webpack_require__(/*! ./display-commentShow */ \"./display-commentShow\");\n\nvar _displayCommentShow2 = _interopRequireDefault(_displayCommentShow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\titems: state.commentReducer.items\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tfetchCommentData: function fetchCommentData(artId) {\n\t\t\treturn dispatch((0, _dataComment.fetchCommentData)(artId));\n\t\t},\n\t\thandleReplyPublish: function handleReplyPublish(commentId, reply) {\n\t\t\t// console.log(\"ADD REPLY\")\n\t\t\tdispatch((0, _dataComment.publishReply)({\n\t\t\t\tcomment_id: commentId,\n\t\t\t\treply: reply\n\t\t\t}));\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayCommentShow2.default);\n\n//# sourceURL=webpack://slucky/./src/comment/highorder-commentShow.jsx?");

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