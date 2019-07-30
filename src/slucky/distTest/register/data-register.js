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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/register/data-register.jsx");
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

/***/ "./src/register/data-register.jsx":
/*!****************************************!*\
  !*** ./src/register/data-register.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.register = exports.verifyEmail = undefined;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _dataMessage = __webpack_require__(/*! ../message/data-message */ \"../message/data-message\");\n\nvar _store = __webpack_require__(/*! ../store */ \"../store\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar verifyEmailSuccess = function verifyEmailSuccess(data) {\n\treturn {\n\t\ttype: \"VERIFY_EMAIL_SUCCESS\",\n\t\tinfo: data\n\t};\n}; // let state = {\n// \tverifyEmail: \"\",\n// \tinfo: \"\"\n// }\n\n\nvar registerSuccess = function registerSuccess(data) {\n\treturn {\n\t\ttype: \"REGISTER_SUCCESS\",\n\t\tinfo: data\n\t};\n};\n\nvar verifyEmail = exports.verifyEmail = function verifyEmail(data) {\n\treturn function (dispatch) {\n\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\tinfo: \"邮件发送中\",\n\t\t\tflag: \"hint\"\n\t\t}));\n\t\t(0, _isomorphicFetch2.default)(__API__.postVerifyEmail, {\n\t\t\tmethod: 'POST',\n\t\t\tcredentials: \"include\",\n\t\t\tbody: JSON.stringify(data)\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tif (data.error) {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"请确认邮箱是否正确或请查看邮箱里的验证码\",\n\t\t\t\t\tflag: \"hint\"\n\t\t\t\t}));\n\t\t\t} else {\n\t\t\t\tdispatch(verifyEmailSuccess(data));\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"发送成功，请查看邮箱里的验证码\",\n\t\t\t\t\tflag: \"success\"\n\t\t\t\t}));\n\t\t\t}\n\t\t}).catch(function (err) {\n\t\t\tif (err) throw err;\n\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\tinfo: \"请网络检查网络连接\",\n\t\t\t\tflag: \"warning\"\n\t\t\t}));\n\t\t});\n\t};\n};\n\nvar register = exports.register = function register(data) {\n\tconsole.log(\"REGISTER\");\n\tconsole.log(data);\n\treturn function (dispatch) {\n\t\treturn (0, _isomorphicFetch2.default)(__API__.postRegister, {\n\t\t\tmethod: 'POST',\n\t\t\tcredentials: \"include\",\n\t\t\tbody: JSON.stringify(data)\n\t\t}).then(function (data) {\n\t\t\treturn data.json();\n\t\t}).then(function (data) {\n\t\t\tconsole.log(data);\n\t\t\tif (data.error) {\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: data.error,\n\t\t\t\t\tflag: \"hint\"\n\t\t\t\t}));\n\t\t\t} else {\n\t\t\t\tdispatch(registerSuccess(data));\n\t\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\t\tinfo: \"恭喜，注册成功\",\n\t\t\t\t\tflag: \"success\"\n\t\t\t\t}));\n\n\t\t\t\t// window.location.href = \"http://www.brandf.cn/\"\n\t\t\t}\n\t\t}).catch(function (err) {\n\t\t\tif (err) throw err;\n\t\t\tdispatch((0, _dataMessage.pushInQueue)({\n\t\t\t\tinfo: \"请网络检查网络连接\",\n\t\t\t\tflag: \"warning\"\n\t\t\t}));\n\t\t});\n\t};\n};\n\nvar registerReducer = function registerReducer() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase \"VERIFY_EMAIL_SUCCESS\":\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\tinfo: action.info\n\t\t\t});\n\t\tcase \"REGISTER_SUCCESS\":\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\tinfo: action.info\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n(0, _store.addReducer)(registerReducer, 'registerReducer');\n\n//# sourceURL=webpack:///./src/register/data-register.jsx?");

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