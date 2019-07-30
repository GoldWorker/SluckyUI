(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../message/data-message"), require("../store"), require("isomorphic-fetch"), require("react-cookie"));
	else if(typeof define === 'function' && define.amd)
		define(["../message/data-message", "../store", "isomorphic-fetch", "react-cookie"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../message/data-message"), require("../store"), require("isomorphic-fetch"), require("react-cookie")) : factory(root["../message/data-message"], root["../store"], root["isomorphic-fetch"], root["react-cookie"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__message_data_message__, __WEBPACK_EXTERNAL_MODULE__store__, __WEBPACK_EXTERNAL_MODULE_isomorphic_fetch__, __WEBPACK_EXTERNAL_MODULE_react_cookie__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/login/data-login.jsx");
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

/***/ "./src/login/data-login.jsx":
/*!**********************************!*\
  !*** ./src/login/data-login.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.logout = exports.login = exports.loginWindowToggle = exports.logoutSuccess = undefined;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _reactCookie = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nvar _dataMessage = __webpack_require__(/*! ../message/data-message */ \"../message/data-message\");\n\nvar _store = __webpack_require__(/*! ../store */ \"../store\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// state = {\n// \tisLogined: bool,\n// \tisToggle:bool,\n// \tloginError:{},\n// \tuserInfo: {\n// \t\tname: \"Keven\",\n// \t\tportrait: \"url\"\n// \t}\n// }\nvar loginError = function loginError(err) {\n    return {\n        type: \"LOGIN_ERROR\",\n        loginError: err\n    };\n};\n\nvar loginSuccess = function loginSuccess(data) {\n    return {\n        type: \"LOGIN_SUCCESS\",\n        userInfo: data\n    };\n};\n\nvar logoutSuccess = exports.logoutSuccess = function logoutSuccess(data) {\n    return function (dispatch) {\n        dispatch({\n            type: \"LOGOUT_SUCCESS\",\n            userInfo: data\n        });\n    };\n};\n\nvar loginWindowToggle = exports.loginWindowToggle = function loginWindowToggle() {\n    return {\n        type: \"LOGIN_WINDOW_TOGGLE\"\n    };\n};\nvar login = exports.login = function login() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n    var pw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n    return function (dispatch) {\n        return (0, _isomorphicFetch2.default)(__API__.login, {\n            credentials: 'include',\n            method: \"POST\",\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                email: name,\n                password: pw\n            })\n        }).then(function (data) {\n            return data.json();\n        }).then(function (data) {\n            if (data.error) {\n                dispatch(loginError(data));\n                dispatch((0, _dataMessage.pushInQueue)({\n                    info: \"请确认邮箱或密码正确\",\n                    flag: \"warning\"\n                }));\n            } else {\n                dispatch(loginSuccess(data));\n                dispatch((0, _dataMessage.pushInQueue)({\n                    info: \"登录成功\",\n                    flag: \"success\"\n                }));\n                dispatch(loginWindowToggle());\n                localStorage.setItem(\"userInfo\", JSON.stringify(data)); // save login msg\n                // location.reload()\n            }\n        }).catch(function (err) {\n            console.log(\"login err\");\n            dispatch(loginError(err));\n            dispatch((0, _dataMessage.pushInQueue)({\n                info: \"网络无法连接，请稍后再尝试\",\n                flag: \"warning\"\n            }));\n        });\n    };\n};\n\nvar logout = exports.logout = function logout() {\n    return function (dispatch) {\n        return (0, _isomorphicFetch2.default)(__API__.logout, {\n            credentials: 'include', //to send with cookie\n            method: \"GET\"\n        }).then(function (data) {\n            return data.json();\n        }).then(function (data) {\n            console.log(\"logout\");\n            dispatch(logoutSuccess(data));\n            dispatch((0, _dataMessage.pushInQueue)({\n                info: \"注销成功\",\n                flag: \"success\"\n            }));\n            _reactCookie2.default.remove('token', {\n                path: '/'\n            });\n            // location.reload()\n        });\n    };\n};\n\nvar loginReducer = function loginReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n        isLogined: _reactCookie2.default.load('token') ? true : false,\n        isToggle: false,\n        userInfo: {\n            msg: _reactCookie2.default.load('token') ? \"您好，\" + JSON.parse(localStorage.getItem(\"userInfo\")).name : \"未登录\"\n        }\n    };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case \"LOGIN_ERROR\":\n            return Object.assign({}, state, {\n                isLogined: false,\n                loginError: action.loginError\n            });\n        case \"LOGIN_SUCCESS\":\n            return Object.assign({}, state, {\n                isLogined: true,\n                loginError: {},\n                userInfo: action.userInfo\n            });\n        case \"LOGIN_WINDOW_TOGGLE\":\n            return Object.assign({}, state, {\n                isToggle: !state.isToggle\n            });\n        case \"LOGOUT_SUCCESS\":\n            return Object.assign({}, state, {\n                isLogined: false,\n                loginError: {},\n                userInfo: {\n                    msg: \"未登录\"\n                }\n            });\n        default:\n            return state;\n    }\n};\n\n(0, _store.addReducer)(loginReducer, 'loginReducer');\n\n//# sourceURL=webpack:///./src/login/data-login.jsx?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_isomorphic_fetch__;\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_cookie__;\n\n//# sourceURL=webpack:///external_%22react-cookie%22?");

/***/ })

/******/ });
});