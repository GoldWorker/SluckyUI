(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/validator.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/validator.jsx":
/*!*************************************!*\
  !*** ./src/component/validator.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Validator = function () {\n  function Validator() {\n    _classCallCheck(this, Validator);\n\n    this.config = {};\n    this.result = {};\n    this.data = {};\n  }\n\n  _createClass(Validator, [{\n    key: 'validate',\n    value: function validate(data) {\n      console.log(data);\n      console.log(this.config);\n      this.data = data;\n      this.result = {};\n      for (var item in data) {\n        if (data.hasOwnProperty(item)) {\n          var val = data[item];\n          var res = this.validateItem(item, val);\n          if (res) {\n            this.result[item] = res;\n          }\n        }\n      }\n      console.log(this.result);\n      return this.result;\n    }\n  }, {\n    key: 'validateItem',\n    value: function validateItem(item, val) {\n      var checkerList = this.config[item];\n      if (!checkerList) {\n        return false;\n      }\n      var result = {\n        key: item,\n        isValid: true,\n        message: []\n      };\n\n      // 遍历检查器\n      for (var index = 0; index < checkerList.length; index++) {\n        var checkerName = checkerList[index];\n        var isValid = Validator.types[checkerName].validate;\n        // 只处理非法的情况\n        if (!isValid.call(this, val)) {\n          var instruction = Validator.types[checkerName].instruction;\n          result.isValid = false;\n          result.message.push(instruction);\n        }\n      }\n      return result;\n    }\n    // 最终验证\n\n  }, {\n    key: 'isSubmit',\n    value: function isSubmit() {\n      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n\n      console.log('Debug', this.result, data);\n      data && this.validate(data);\n      for (var item in this.data) {\n        if (this.result[item] !== undefined && !this.result[item].isValid) {\n          return false;\n        }\n      }\n      return true;\n    }\n\n    // 结果格式化\n\n  }, {\n    key: 'formatRes',\n    value: function formatRes(type) {\n      var sign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';\n\n      return this.result[type] && this.result[type].message.join(sign);\n    }\n  }, {\n    key: 'clear',\n    value: function clear() {\n      this.result = {};\n    }\n  }]);\n\n  return Validator;\n}();\n\n// 检查处理器\n\n\nexports.default = Validator;\nValidator.types = {};\n\nValidator.types.isEmpty = {\n  validate: function validate(value) {\n    return value !== '';\n  },\n\n  instruction: '不能为空'\n};\n\nValidator.types.isArrayEmpty = {\n  validate: function validate(value) {\n    return value.length !== 0;\n  },\n\n  instruction: '请作出合适的选择'\n};\n\nValidator.types.isSDK = {\n  validate: function validate(value) {\n    return (/^\\w*.jar*$/.test(value)\n    );\n  },\n\n  instruction: '文件不合法，仅传jar'\n};\n\nValidator.types.isInt = {\n  validate: function validate(value) {\n    return (/^[1-9]\\d*$/.test(value)\n    );\n  },\n\n  instruction: '必须为整数'\n};\n\nValidator.types.isName = {\n  validate: function validate(value) {\n    return (/^[\\u4E00-\\u9FA5A-Za-z0-9_]{1,10}$/.test(value)\n    );\n  },\n\n  instruction: '十个字以内，不能包含特殊字符'\n};\n\nValidator.types.isEmail = {\n  validate: function validate(value) {\n    return (/^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/.test(value)\n    );\n  },\n\n  instruction: '邮箱格式不正确'\n};\n\nValidator.types.isPw = {\n  validate: function validate(value) {\n    return (/^[!@#$%^&*_A-Za-z0-9]{8,15}$/.test(value)\n    );\n  },\n\n  instruction: '由数组，字母，_@#$等组成，不少于8位'\n};\n\nValidator.types.isPwAgain = {\n  validate: function validate(value) {\n    console.log(this);\n    if (this.data.password) {\n      return this.data.password === value;\n    }\n    return false;\n  },\n\n  instruction: '重复输入的密码不相同'\n};\n\nValidator.types.isValidString = {\n  validate: function validate(value) {\n    return !isNaN(value);\n  },\n\n  instruction: 'invail Number value'\n};\n\n//# sourceURL=webpack:///./src/component/validator.jsx?");

/***/ })

/******/ });
});