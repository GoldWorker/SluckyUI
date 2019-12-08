(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./details"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["./details", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/possibleConstructorReturn", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./details"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("react")) : factory(root["./details"], root["@babel/runtime/helpers/classCallCheck"], root["@babel/runtime/helpers/createClass"], root["@babel/runtime/helpers/getPrototypeOf"], root["@babel/runtime/helpers/inherits"], root["@babel/runtime/helpers/possibleConstructorReturn"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__details__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_getPrototypeOf__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_inherits__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_possibleConstructorReturn__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/treeNode.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./details":
/*!****************************!*\
  !*** external "./details" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__details__;\n\n//# sourceURL=webpack:///external_%22./details%22?");

/***/ }),

/***/ "./src/component/treeNode.jsx":
/*!************************************!*\
  !*** ./src/component/treeNode.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TreeNode; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details */ \"./details\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_details__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar TreeNode =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TreeNode, _Component);\n\n  function TreeNode(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TreeNode);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TreeNode).call(this, props));\n    _this.state = {\n      _Tree: _this.props.data || {}\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TreeNode, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        _Tree: nextProps.data\n      });\n    }\n  }, {\n    key: \"handleClickNode\",\n    value: function handleClickNode(node) {\n      this.props.onClick && this.props.onClick(node);\n    }\n  }, {\n    key: \"handleChangeCheckbox\",\n    value: function handleChangeCheckbox(selected, item) {\n      console.log(item);\n      this.handleClickNode(item);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var children = this.state._Tree.ch;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"pl24\"\n      }, children && children.map(function (item, index) {\n        if (item.ch) {\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n            className: \"d-f\",\n            key: index\n          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n            className: \"flex1\"\n          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_details__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            key: index,\n            open: _this2.props.open || false,\n            summary: _this2.props.item && _this2.props.item(item)\n          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TreeNode, {\n            data: item,\n            onClick: function onClick(node) {\n              return _this2.handleClickNode(node);\n            },\n            open: _this2.props.open || false,\n            item: function item(_item) {\n              return _this2.props.item && _this2.props.item(_item);\n            }\n          }))));\n        }\n\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n          key: index,\n          className: \"\"\n        }, _this2.props.item && _this2.props.item(item));\n      }));\n    }\n  }]);\n\n  return TreeNode;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]); //Base，复杂度O(n)，分解式\n// cloneTree(node = { id: 0, ch: [] }) {\n//     if (node.ch) {\n//         const source = [Object.assign({}, { ...node }, { ch: [] })];\n//         const map = {};\n//         const queue = [...node.ch];\n//         //遍历记录\n//         while (queue.length) {\n//             const item = queue.shift();\n//             let itemNode;\n//             if (item.ch) {\n//                 itemNode = Object.assign({}, { ...item }, { ch: [] });\n//                 // console.log(item);\n//                 queue.unshift(...item.ch);\n//             } else {\n//                 itemNode = Object.assign({}, { ...item });\n//                 // console.log(item);\n//             }\n//             source.push(itemNode);\n//         }\n//         //记录map\n//         source.forEach((item) => {\n//             map[item.id] = item;\n//         });\n//         //构建tree\n//         for (let i = 0; i < source.length; i++) {\n//             const item = source[i];\n//             if (item.id && map[item.pid]) {\n//                 map[item.pid].ch.push(item);\n//             }\n//         }\n//         console.log(source[0]);\n//         return source[0];\n//     }\n//     console.log({ ...node });\n//     return { ...node };\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/component/treeNode.jsx?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_createClass__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_getPrototypeOf__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_inherits__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_possibleConstructorReturn__;\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
});