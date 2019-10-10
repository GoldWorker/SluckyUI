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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/algorithm/dfsbfs.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithm/dfsbfs.jsx":
/*!**********************************!*\
  !*** ./src/algorithm/dfsbfs.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar deepTraversal2 = function deepTraversal2(node) {\n    var nodes = [];\n    console.log(node);\n    console.log(node.children);\n    if (node !== null) {\n        nodes.push(node);\n        var children = node.children;\n        for (var _i = 0; _i < children.length; _i++) {\n            nodes = nodes.concat(deepTraversal2(children[_i]));\n        }\n    }\n    return nodes;\n};\n\nvar widthTraversal2 = function widthTraversal2(node) {\n    var nodes = [];\n    var stack = [];\n    if (node) {\n        stack.push(node);\n        while (stack.length) {\n            var item = stack.shift();\n            var children = item.children;\n            nodes.push(item);\n            // 队列，先进先出\n            // nodes = [] stack = [parent]\n            // nodes = [parent] stack = [child1,child2,child3]\n            // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]\n            // nodes = [parent,child1,child2]\n            for (var _i2 = 0; _i2 < children.length; _i2++) {\n                stack.push(children[_i2]);\n            }\n        }\n    }\n    return nodes;\n};\n\nvar node = {\n    name: 'p',\n    children: [{\n        name: 1,\n        children: [{\n            name: 1.1,\n            children: []\n        }]\n    }, {\n        name: 2,\n        children: [{\n            name: 2.1,\n            children: []\n        }]\n    }]\n};\n\nfunction say() {\n    console.log('hello!');\n}\n\n//防抖\nfunction limitT(fun) {\n    var limitTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n\n    var timer = undefined;\n    return function () {\n        if (timer) {\n            clearTimeout(timer);\n        }\n        timer = setTimeout(function () {\n            fun.apply();\n        }, limitTime);\n    };\n}\n\nvar limitSay = limitT(say);\n\nvar i = 10;\nwhile (i) {\n    limitSay();\n    i--;\n}\n\nfunction limitB(fun) {\n    var limitTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n\n    var timer = undefined;\n    return function () {\n        if (!timer) {\n            timer = setTimeout(function () {\n                fun.apply();\n                clearTimeout(timer);\n            }, limitTime);\n        }\n    };\n}\n\n//# sourceURL=webpack:///./src/algorithm/dfsbfs.jsx?");

/***/ })

/******/ });
});