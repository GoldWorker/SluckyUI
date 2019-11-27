(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../component/checkbox"), require("../component/tree"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["../component/checkbox", "../component/tree", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/possibleConstructorReturn", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../component/checkbox"), require("../component/tree"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("react")) : factory(root["../component/checkbox"], root["../component/tree"], root["@babel/runtime/helpers/classCallCheck"], root["@babel/runtime/helpers/createClass"], root["@babel/runtime/helpers/getPrototypeOf"], root["@babel/runtime/helpers/inherits"], root["@babel/runtime/helpers/possibleConstructorReturn"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__component_checkbox__, __WEBPACK_EXTERNAL_MODULE__component_tree__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_getPrototypeOf__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_inherits__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_possibleConstructorReturn__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "../component/checkbox":
/*!****************************************!*\
  !*** external "../component/checkbox" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_checkbox__;\n\n//# sourceURL=webpack:///external_%22../component/checkbox%22?");

/***/ }),

/***/ "../component/tree":
/*!************************************!*\
  !*** external "../component/tree" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_tree__;\n\n//# sourceURL=webpack:///external_%22../component/tree%22?");

/***/ }),

/***/ "./src/component/transfer.jsx":
/*!************************************!*\
  !*** ./src/component/transfer.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Transfer; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _component_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/tree */ \"../component/tree\");\n/* harmony import */ var _component_tree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_component_tree__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _component_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/checkbox */ \"../component/checkbox\");\n/* harmony import */ var _component_checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_component_checkbox__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar Transfer =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Transfer, _Component);\n\n  function Transfer(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Transfer);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Transfer).call(this, props));\n    var _this$props = _this.props,\n        data = _this$props.data,\n        value = _this$props.value;\n    var valueCopy = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.cloneList(value);\n    var value2Tree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.buildTree(valueCopy);\n    var attrTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.addAttr2Tree(value2Tree, {\n      checked: true\n    });\n    var initAttrTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.addAttr2Tree(data, {\n      checked: false\n    });\n    _this.state = {\n      sourceTree: _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.mergeTree(initAttrTree, attrTree),\n      tarTree: attrTree || {\n        id: 0,\n        ch: []\n      }\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Transfer, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      var data = nextProps.data,\n          value = nextProps.value; //不能影响源\n\n      var valueCopy = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.cloneList(value);\n\n      if (value) {\n        var value2Tree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.buildTree(valueCopy); //更新目标树\n\n        var attrTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.addAttr2Tree(value2Tree, {\n          checked: true\n        }); //刷新源树\n\n        var initAttrTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.addAttr2Tree(data, {\n          checked: false\n        });\n        this.setState({\n          sourceTree: _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.mergeTree(initAttrTree, attrTree),\n          tarTree: attrTree\n        });\n      }\n    }\n  }, {\n    key: \"handleSelectTree\",\n    value: function handleSelectTree(node) {\n      var _this$state = this.state,\n          tarTree = _this$state.tarTree,\n          sourceTree = _this$state.sourceTree;\n      var childTree = node;\n      var walkerTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.getNodeRouter(node, sourceTree); //将溯源树添加到目标树中\n\n      var newTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.mergeTree(_component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.mergeTree(tarTree, walkerTree), childTree); //目标树更新属性\n\n      var attrTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.addAttr2Tree(newTree, {\n        checked: true\n      });\n      this.setState({\n        tarTree: attrTree,\n        sourceTree: _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.mergeTree(sourceTree, attrTree)\n      });\n      this.props.onChange && this.props.onChange(_component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.getTree2List(attrTree, true));\n    }\n  }, {\n    key: \"handleSelectTarTree\",\n    value: function handleSelectTarTree(node) {\n      var _this$state2 = this.state,\n          tarTree = _this$state2.tarTree,\n          sourceTree = _this$state2.sourceTree; //剪除目标树节点\n\n      var delTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.delNode(node, tarTree); //以剪除的节点为基准，将源树的节点更新属性\n\n      var attrTree = _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.addAttr2Tree(_component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.getNodeById(node.id, sourceTree), {\n        checked: false\n      });\n      this.setState({\n        tarTree: delTree,\n        sourceTree: _component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.mergeTree(sourceTree, attrTree)\n      });\n      this.props.onChange && this.props.onChange(_component_tree__WEBPACK_IMPORTED_MODULE_6___default.a.getTree2List(delTree, true));\n    }\n  }, {\n    key: \"handleChangeCheckbox\",\n    value: function handleChangeCheckbox() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"d-f\",\n        style: {\n          width: this.props.width || 'auto'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"flex1 s0 bor-r b-side\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_tree__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        data: this.state.sourceTree,\n        onSelect: function onSelect(node, route) {\n          return _this2.handleSelectTree(node, route);\n        },\n        item: function item(_item) {\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            onChange: function onChange(e) {\n              _this2.handleSelectTree(_item, e);\n            },\n            label: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n              className: \"ptb8 d-il\"\n            }, _item.content || _item.id),\n            value: _item.id,\n            checked: !!_item.checked,\n            disabled: !!_item.checked\n          });\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"flex1 s0\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_tree__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        data: this.state.tarTree,\n        onSelect: function onSelect(node, route) {\n          return _this2.handleSelectTarTree(node, route);\n        },\n        open: true,\n        item: function item(_item2) {\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n            className: \"d-il mtb8\"\n          }, _item2.content || _item2.id, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n            onClick: function onClick() {\n              return _this2.handleSelectTarTree(_item2);\n            },\n            className: \"plr8\",\n            style: {\n              cursor: 'pointer'\n            }\n          }, \"x\"));\n        }\n      })));\n    }\n  }]);\n\n  return Transfer;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/component/transfer.jsx?");

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