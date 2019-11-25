(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../message/data-message"), require("../store"), require("isomorphic-fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["../message/data-message", "../store", "isomorphic-fetch"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../message/data-message"), require("../store"), require("isomorphic-fetch")) : factory(root["../message/data-message"], root["../store"], root["isomorphic-fetch"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__message_data_message__, __WEBPACK_EXTERNAL_MODULE__store__, __WEBPACK_EXTERNAL_MODULE_isomorphic_fetch__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/articleDetail/data-articleDetail.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../message/data-message":
/*!******************************************!*\
  !*** external "../message/data-message" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__message_data_message__;\n\n//# sourceURL=webpack:///external_%22../message/data-message%22?");

/***/ }),

/***/ "../store":
/*!***************************!*\
  !*** external "../store" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__store__;\n\n//# sourceURL=webpack:///external_%22../store%22?");

/***/ }),

/***/ "./src/articleDetail/data-articleDetail.jsx":
/*!**************************************************!*\
  !*** ./src/articleDetail/data-articleDetail.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.deleteArticleOne = exports.fetchArticleOne = undefined;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _dataMessage = __webpack_require__(/*! ../message/data-message */ \"../message/data-message\");\n\nvar _store = __webpack_require__(/*! ../store */ \"../store\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// state={\n// \t\ttype:receiveData\n// \t\titem:{\n// \t\t\tid:num\n// \t\t\ttitle:string\n// \t\t\tcontent:string\n// \t\t}\n// }\n\nvar receiveData = function receiveData(data) {\n\treturn {\n\t\ttype: \"RECEIVE_DETAIL_DATA\",\n\t\titem: data,\n\t\tisFetching: false\n\t};\n};\n\nvar deleteArticleSuccess = function deleteArticleSuccess(data) {\n\treturn {\n\t\ttype: \"DELETE_ARTICLE_SUCCESS\"\n\t};\n};\n\nvar fetchArticleOne = exports.fetchArticleOne = function fetchArticleOne(id) {\n\tvar path = __API__.articleOnce + id;\n\treturn function (dispatch) {\n\t\t(0, _isomorphicFetch2.default)(path, {\n\t\t\tmethod: \"GET\"\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tdispatch(receiveData(data));\n\t\t}).catch(function (err) {\n\t\t\tconsole.log(\"err\");\n\t\t});\n\t};\n};\n\nvar deleteArticleOne = exports.deleteArticleOne = function deleteArticleOne(id) {\n\tvar path = __API__.articleOnce + id;\n\treturn function (dispatch) {\n\t\t(0, _isomorphicFetch2.default)(path, {\n\t\t\tmethod: \"DELETE\",\n\t\t\tcredentials: 'include'\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tif (data.error) {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"No Access\",\n\t\t\t\t\tflag: \"hint\"\n\t\t\t\t}));\n\t\t\t} else {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"Delete article success\",\n\t\t\t\t\tflag: \"success\"\n\t\t\t\t}));\n\t\t\t\tdispatch(deleteArticleSuccess(data));\n\t\t\t}\n\t\t}).catch(function (err) {\n\t\t\tconsole.log(\"err\");\n\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\tinfo: \"Place check your Internet\",\n\t\t\t\tflag: \"warning\"\n\t\t\t}));\n\t\t});\n\t};\n};\n\nvar articleDetailReducer = function articleDetailReducer() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n\t\tisFetching: false\n\t};\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase \"RECEIVE_DETAIL_DATA\":\n\t\t\tconsole.log(\"articleDetailReducer\");\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\tisFetching: false,\n\t\t\t\titem: action.item\n\t\t\t});\n\t\tcase \"DELETE_ARTICLE_SUCCESS\":\n\t\t\treturn state;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n(0, _store.addReducer)(articleDetailReducer, 'articleDetailReducer');\n\n//# sourceURL=webpack:///./src/articleDetail/data-articleDetail.jsx?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_isomorphic_fetch__;\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ })

/******/ });
});