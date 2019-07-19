(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../store"));
	else if(typeof define === 'function' && define.amd)
		define(["../store"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("../store"));
	else
		root["slucky"] = factory(root["../store"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__store__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/message/data-message.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../store":
/*!***************************!*\
  !*** external "../store" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__store__;\n\n//# sourceURL=webpack://slucky/external_%22../store%22?");

/***/ }),

/***/ "./src/message/data-message.jsx":
/*!**************************************!*\
  !*** ./src/message/data-message.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.pushInQueue = undefined;\n\nvar _store = __webpack_require__(/*! ../store */ \"../store\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // ex:\n// let state = {\n// \tlists: [{\n// \t\tflag: \"hint/text/warning\"\n// \t\tinfo: \"\"\n// \t}, {\n// \t\tinfo: \"\"\n// \t}, {\n// \t\tinfo: \"\"\n// \t}]\n// }\n\n\nvar shiftMsg = function shiftMsg(msgQueue) {\n\treturn {\n\t\ttype: \"SHIFT_MSG\",\n\t\tmsgQueue: msgQueue //最新的消息队列\n\t};\n};\n\nvar pushMsg = function pushMsg(msg) {\n\treturn {\n\t\ttype: \"PUSH_MSG\",\n\t\tmsg: msg.info,\n\t\tflag: msg.flag\n\t};\n};\n\nvar _timer;\nvar nextMsgId = 0;\nvar _message = [];\n\nvar pushInQueue = exports.pushInQueue = function pushInQueue(msg) {\n\treturn function (dispatch) {\n\t\tif (_message.length == 0) {\n\t\t\t// 生成定时器\n\t\t\tconsole.log(\"timer seted\");\n\t\t\t_timer = setInterval(function () {\n\t\t\t\tpopToQueue(dispatch);\n\t\t\t}, 3000);\n\t\t}\n\t\t_message.push(msg);\n\t\tdispatch(pushMsg(msg));\n\t};\n};\n\nvar popToQueue = function popToQueue(dispatch) {\n\t_message.shift();\n\tif (_message.length == 0) {\n\t\tclearInterval(_timer); //清空队列\n\t\tconsole.log(\"timer cleared\");\n\t}\n\tdispatch(shiftMsg(_message));\n};\n\nvar messageReducer = function messageReducer() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase \"PUSH_MSG\":\n\t\t\treturn [].concat(_toConsumableArray(state), [{\n\t\t\t\tinfo: action.msg,\n\t\t\t\tid: action.id,\n\t\t\t\tflag: action.flag\n\t\t\t}]);\n\t\tcase \"SHIFT_MSG\":\n\t\t\treturn [].concat(_toConsumableArray(action.msgQueue));\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n(0, _store.addReducer)(messageReducer, 'messageReducer');\n\n//# sourceURL=webpack://slucky/./src/message/data-message.jsx?");

/***/ })

/******/ });
});