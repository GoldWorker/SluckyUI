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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/articlePublish/data-articlePublish.jsx");
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

/***/ "./src/articlePublish/data-articlePublish.jsx":
/*!****************************************************!*\
  !*** ./src/articlePublish/data-articlePublish.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.putArticle = exports.publishArticle = undefined;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _dataMessage = __webpack_require__(/*! ../message/data-message */ \"../message/data-message\");\n\nvar _store = __webpack_require__(/*! ../store */ \"../store\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar postSuccess = function postSuccess(data) {\n    return {\n        type: 'PUBLIC_ARTICLE_SUCCESS',\n        info: data\n    };\n}; // let state={\n// \tisPublish:bool,\n// \titem:{\n// \t\ttitle:stying,\n// \t\tcontent:string\n// \t}\n// \tinfo:{}\n// }\n\n\nvar postError = function postError(err) {\n    return {\n        type: 'PUBLIC_ARTICLE_ERROR',\n        error: err\n    };\n};\n\nvar putSuccess = function putSuccess(data) {\n    return {\n        type: 'UPDATE_ARTICLE_SUCCESS',\n        info: data\n    };\n};\n\nvar putError = function putError(err) {\n    return {\n        type: 'UPDATE_ARTICLE_ERROR',\n        error: err\n    };\n};\n\nvar publishArticle = exports.publishArticle = function publishArticle() {\n    var art = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return function (dispatch) {\n        (0, _isomorphicFetch2.default)(__API__.articleEdit, {\n            method: 'POST',\n            credentials: 'include',\n            body: JSON.stringify(art)\n        }).then(function (data) {\n            return data.json();\n        }).then(function (data) {\n            if (data.error) {\n                dispatch(postError(data));\n                dispatch((0, _dataMessage.pushInQueue)({\n                    info: 'No Access',\n                    flag: 'hint'\n                }));\n            } else {\n                dispatch(postSuccess(data));\n                dispatch((0, _dataMessage.pushInQueue)({\n                    info: 'Publish Article Success',\n                    flag: 'success'\n                }));\n            }\n        }).catch(function (err) {\n            dispatch(postError(err));\n            dispatch((0, _dataMessage.pushInQueue)({\n                info: 'Internet Error',\n                flag: 'warning'\n            }));\n        });\n    };\n};\n\nvar putArticle = exports.putArticle = function putArticle() {\n    var art = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return function (dispatch) {\n        (0, _isomorphicFetch2.default)(__API__.articleEdit, {\n            method: 'PUT',\n            credentials: 'include',\n            body: JSON.stringify(art)\n        }).then(function (data) {\n            return data.json();\n        }).then(function (data) {\n            if (data.error) {\n                dispatch(putError(data));\n                dispatch((0, _dataMessage.pushInQueue)({\n                    info: 'No Access',\n                    flag: 'hint'\n                }));\n            } else {\n                dispatch(putSuccess(data));\n                dispatch((0, _dataMessage.pushInQueue)({\n                    info: 'Update Article Success',\n                    flag: 'success'\n                }));\n            }\n        }).catch(function (err) {\n            dispatch(putError(err));\n            dispatch((0, _dataMessage.pushInQueue)({\n                info: 'Internet Error',\n                flag: 'warning'\n            }));\n        });\n    };\n};\n\nvar articlePublicReducer = function articlePublicReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n        isPublish: false,\n        isUpdate: false\n    };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'PUBLIC_ARTICLE_SUCCESS':\n            return Object.assign({}, state, {\n                isPublish: true,\n                info: action.info\n            });\n        case 'PUBLIC_ARTICLE_ERROR':\n            return Object.assign({}, state, {\n                isPublish: false,\n                info: action.info\n            });\n        case 'UPDATE_ARTICLE_SUCCESS':\n            return Object.assign({}, state, {\n                isUpdate: true,\n                info: action.info\n            });\n        case 'UPDATE_ARTICLE_ERROR':\n            return Object.assign({}, state, {\n                isUpdate: false,\n                info: action.info\n            });\n        default:\n            return state;\n    }\n};\n\n(0, _store.addReducer)(articlePublicReducer, 'articlePublicReducer');\n\n//# sourceURL=webpack:///./src/articlePublish/data-articlePublish.jsx?");

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