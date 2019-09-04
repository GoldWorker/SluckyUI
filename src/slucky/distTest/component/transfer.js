(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(".."), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["..", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require(".."), require("react")) : factory(root[".."], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE____, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/transfer.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "..":
/*!*********************!*\
  !*** external ".." ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE____;\n\n//# sourceURL=webpack:///external_%22..%22?");

/***/ }),

/***/ "./src/component/transfer.jsx":
/*!************************************!*\
  !*** ./src/component/transfer.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Transfer = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ = __webpack_require__(/*! .. */ \"..\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DEMO_TREE = [{\n    pid: 0,\n    id: 1,\n    ch: [{\n        pid: 1,\n        id: 11\n    }, {\n        pid: 1,\n        id: 12,\n        ch: [{\n            pid: 12,\n            id: 121,\n            ch: [{\n                pid: 121,\n                id: 1211\n            }]\n        }]\n    }, {\n        pid: 1,\n        id: 13\n    }]\n}, {\n    pid: 0,\n    id: 2,\n    ch: [{\n        pid: 2,\n        id: 21\n    }, {\n        pid: 2,\n        id: 22\n    }]\n}, {\n    pid: 0,\n    id: 3\n}];\n\nvar RootTree = {\n    id: 0,\n    ch: DEMO_TREE\n};\n\nvar Transfer = exports.Transfer = function (_Component) {\n    _inherits(Transfer, _Component);\n\n    function Transfer(props) {\n        _classCallCheck(this, Transfer);\n\n        var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));\n\n        _this.state = {\n            sourceTree: _this.props.data || RootTree,\n            tarTree: { id: 0, ch: [] }\n        };\n        return _this;\n    }\n\n    _createClass(Transfer, [{\n        key: 'handleSelectTree',\n        value: function handleSelectTree(node, walkerTree) {\n            var _state = this.state,\n                tarTree = _state.tarTree,\n                sourceTree = _state.sourceTree;\n            //将溯源树添加到目标树中\n\n            var newTree = _.Tree.mergeTree(tarTree, walkerTree);\n            //目标树更新属性\n            var attrTree = _.Tree.addAttr2Tree(newTree, { checked: true });\n            this.setState({\n                tarTree: attrTree,\n                sourceTree: _.Tree.mergeTree(sourceTree, attrTree)\n            });\n            this.props.onChange && this.props.onChange(_.Tree.getTree2List(attrTree, true));\n        }\n    }, {\n        key: 'handleSelectTarTree',\n        value: function handleSelectTarTree(node) {\n            var _state2 = this.state,\n                tarTree = _state2.tarTree,\n                sourceTree = _state2.sourceTree;\n            //剪除目标树节点\n\n            var delTree = _.Tree.delNode(node, tarTree);\n            //以剪除的节点为基准，将源树的节点更新属性\n            var attrTree = _.Tree.addAttr2Tree(_.Tree.getNodeById(node.id, sourceTree), { checked: false });\n            this.setState({\n                tarTree: delTree,\n                sourceTree: _.Tree.mergeTree(sourceTree, attrTree)\n            });\n            this.props.onChange && this.props.onChange(_.Tree.getTree2List(delTree, true));\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'd-f', style: { width: this.props.width || 'auto' } },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex1 s0 bor-r b-side' },\n                    _react2.default.createElement(_.Tree, { data: this.state.sourceTree, onSelect: function onSelect(node, route) {\n                            return _this2.handleSelectTree(node, route);\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex1 s0' },\n                    _react2.default.createElement(_.Tree, { data: this.state.tarTree, onSelect: function onSelect(node, route) {\n                            return _this2.handleSelectTarTree(node, route);\n                        } })\n                )\n            );\n        }\n    }]);\n\n    return Transfer;\n}(_react.Component);\n\n//# sourceURL=webpack:///./src/component/transfer.jsx?");

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