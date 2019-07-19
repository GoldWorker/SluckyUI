(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../message/data-message"), require("../store"), require("isomorphic-fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["../message/data-message", "../store", "isomorphic-fetch"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("../message/data-message"), require("../store"), require("isomorphic-fetch"));
	else
		root["slucky"] = factory(root["../message/data-message"], root["../store"], root["isomorphic-fetch"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/comment/data-comment.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../message/data-message":
/*!******************************************!*\
  !*** external "../message/data-message" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__message_data_message__;\n\n//# sourceURL=webpack://slucky/external_%22../message/data-message%22?");

/***/ }),

/***/ "../store":
/*!***************************!*\
  !*** external "../store" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__store__;\n\n//# sourceURL=webpack://slucky/external_%22../store%22?");

/***/ }),

/***/ "./src/comment/data-comment.jsx":
/*!**************************************!*\
  !*** ./src/comment/data-comment.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.publishReply = exports.publishComment = exports.fetchCommentData = undefined;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _dataMessage = __webpack_require__(/*! ../message/data-message */ \"../message/data-message\");\n\nvar _store = __webpack_require__(/*! ../store */ \"../store\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // let state = {\n// \tisFetching: bool,\n// \treceiveAt: date,\n// \titems: [{\n// \t\tcomment_id: int,\n// \t\tcomment: string,\n// \t\tuser_id: int,\n// \t\tuser_name: string,\n// \t\treply: [{\n// \t\t\treply: string,\n// \t\t\treply_id: int,\n// \t\t\tuser_name: string,\n// \t\t\tuser_id: int\n// \t\t}]\n// \t}]\n// }\n\n\nvar receiveDataSuccess = function receiveDataSuccess(data) {\n\treturn {\n\t\ttype: \"RECEIVE_ARTICLE_COMMENT\",\n\t\titems: data\n\t};\n};\n\nvar postCommentSuccess = function postCommentSuccess(data) {\n\treturn {\n\t\ttype: \"POST_COMMENT_SUCCESS\",\n\t\titem: data\n\t};\n};\n\nvar postReplySuccess = function postReplySuccess(data) {\n\treturn {\n\t\ttype: \"POST_REPLY_SUCCESS\",\n\t\titem: data\n\t};\n};\n\nvar requestError = function requestError(data) {\n\treturn {\n\t\ttype: \"REQUEST_ERROR\",\n\t\tinfo: data\n\t};\n};\n\n// const addComment = (data) => {\n// \treturn {\n// \t\ttype: \"ADD_COMMENT\",\n// \t\titem: data\n// \t}\n// }\n\nvar fetchCommentData = exports.fetchCommentData = function fetchCommentData(article_id) {\n\treturn function (dispatch) {\n\t\t(0, _isomorphicFetch2.default)(__API__.getArtComment + article_id, {\n\t\t\tmethod: 'GET'\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tdispatch(receiveDataSuccess(data));\n\t\t}).catch(function (err) {\n\t\t\tif (err) throw err;\n\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\tinfo: \"Place check your Internet\",\n\t\t\t\tflag: \"warning\"\n\t\t\t}));\n\t\t});\n\t};\n};\n\nvar publishComment = exports.publishComment = function publishComment() {\n\tvar data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n\t\tarticle_id: article_id,\n\t\tcomment: comment\n\t};\n\n\treturn function (dispatch) {\n\t\treturn (0, _isomorphicFetch2.default)(__API__.postArtComment, {\n\t\t\tmethod: 'POST',\n\t\t\tcredentials: \"include\",\n\t\t\tbody: JSON.stringify(data)\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tif (data.error) {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"No Access\",\n\t\t\t\t\tflag: \"hint\"\n\t\t\t\t}));\n\t\t\t} else {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"Publish comment success\",\n\t\t\t\t\tflag: \"success\"\n\t\t\t\t}));\n\t\t\t\tdispatch(postCommentSuccess(data));\n\t\t\t}\n\t\t}).catch(function (err) {\n\t\t\tif (err) throw err;\n\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\tinfo: \"Place check your Internet\",\n\t\t\t\tflag: \"warning\"\n\t\t\t}));\n\t\t});\n\t};\n};\n\nvar publishReply = exports.publishReply = function publishReply() {\n\tvar data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n\t\tcomment_id: comment_id,\n\t\treply: reply\n\t};\n\n\tconsole.log(data);\n\treturn function (dispatch) {\n\t\treturn (0, _isomorphicFetch2.default)(__API__.postCommentReply, {\n\t\t\tmethod: 'POST',\n\t\t\tcredentials: 'include',\n\t\t\tbody: JSON.stringify(data)\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tif (data.error) {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"请登录后评论\",\n\t\t\t\t\tflag: \"hint\"\n\t\t\t\t}));\n\t\t\t} else {\n\t\t\t\tdispatch(postReplySuccess(data));\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"Publish reply success\",\n\t\t\t\t\tflag: \"success\"\n\t\t\t\t}));\n\t\t\t}\n\t\t}).catch(function (err) {\n\t\t\tif (err) throw err;\n\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\tinfo: \"Place check your Internet\",\n\t\t\t\tflag: \"warning\"\n\t\t\t}));\n\t\t});\n\t};\n};\n\nvar commentReducer = function commentReducer() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n\t\tisFetching: false,\n\t\titems: []\n\t};\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase \"RECEIVE_ARTICLE_COMMENT\":\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\titems: action.items\n\t\t\t});\n\t\tcase \"POST_COMMENT_SUCCESS\":\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\titems: [action.item].concat(_toConsumableArray(state.items))\n\t\t\t});\n\t\tcase \"POST_REPLY_SUCCESS\":\n\t\t\tvar _selfState = state;\n\t\t\t// 对副本进行深层操作\n\t\t\tfor (var i = _selfState.items.length - 1; i >= 0; i--) {\n\t\t\t\tif (_selfState.items[i].comment_id == action.item.comment_id) {\n\t\t\t\t\t_selfState.items[i].reply.push(action.item);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\titems: [].concat(_toConsumableArray(_selfState.items))\n\t\t\t});\n\t\tcase \"REQUEST_ERROR\":\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\tinfo: action.info\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n(0, _store.addReducer)(commentReducer, 'commentReducer');\n\n//# sourceURL=webpack://slucky/./src/comment/data-comment.jsx?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_isomorphic_fetch__;\n\n//# sourceURL=webpack://slucky/external_%22isomorphic-fetch%22?");

/***/ })

/******/ });
});