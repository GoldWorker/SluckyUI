(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../component/checkbox"), require("../component/tree"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["../component/checkbox", "../component/tree", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../component/checkbox"), require("../component/tree"), require("react")) : factory(root["../component/checkbox"], root["../component/tree"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__component_checkbox__, __WEBPACK_EXTERNAL_MODULE__component_tree__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _tree = __webpack_require__(/*! ../component/tree */ \"../component/tree\");\n\nvar _tree2 = _interopRequireDefault(_tree);\n\nvar _checkbox = __webpack_require__(/*! ../component/checkbox */ \"../component/checkbox\");\n\nvar _checkbox2 = _interopRequireDefault(_checkbox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Transfer = function (_Component) {\n    _inherits(Transfer, _Component);\n\n    function Transfer(props) {\n        _classCallCheck(this, Transfer);\n\n        var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));\n\n        var _this$props = _this.props,\n            data = _this$props.data,\n            value = _this$props.value;\n\n        var valueCopy = _tree2.default.cloneList(value);\n        var value2Tree = _tree2.default.buildTree(valueCopy);\n        var attrTree = _tree2.default.addAttr2Tree(value2Tree, { checked: true });\n        var initAttrTree = _tree2.default.addAttr2Tree(data, { checked: false });\n        _this.state = {\n            sourceTree: _tree2.default.mergeTree(initAttrTree, attrTree),\n            tarTree: attrTree || { id: 0, ch: [] }\n        };\n        return _this;\n    }\n\n    _createClass(Transfer, [{\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            var data = nextProps.data,\n                value = nextProps.value;\n            //不能影响源\n\n            var valueCopy = _tree2.default.cloneList(value);\n            if (value) {\n                var value2Tree = _tree2.default.buildTree(valueCopy);\n                //更新目标树\n                var attrTree = _tree2.default.addAttr2Tree(value2Tree, { checked: true });\n                //刷新源树\n                var initAttrTree = _tree2.default.addAttr2Tree(data, { checked: false });\n                this.setState({\n                    sourceTree: _tree2.default.mergeTree(initAttrTree, attrTree),\n                    tarTree: attrTree\n                });\n            }\n        }\n    }, {\n        key: 'handleSelectTree',\n        value: function handleSelectTree(node) {\n            var _state = this.state,\n                tarTree = _state.tarTree,\n                sourceTree = _state.sourceTree;\n\n            var childTree = node;\n            var walkerTree = _tree2.default.getNodeRouter(node, sourceTree);\n\n            //将溯源树添加到目标树中\n            var newTree = _tree2.default.mergeTree(_tree2.default.mergeTree(tarTree, walkerTree), childTree);\n            //目标树更新属性\n            var attrTree = _tree2.default.addAttr2Tree(newTree, { checked: true });\n            this.setState({\n                tarTree: attrTree,\n                sourceTree: _tree2.default.mergeTree(sourceTree, attrTree)\n            });\n            this.props.onChange && this.props.onChange(_tree2.default.getTree2List(attrTree, true));\n        }\n    }, {\n        key: 'handleSelectTarTree',\n        value: function handleSelectTarTree(node) {\n            var _state2 = this.state,\n                tarTree = _state2.tarTree,\n                sourceTree = _state2.sourceTree;\n            //剪除目标树节点\n\n            var delTree = _tree2.default.delNode(node, tarTree);\n            //以剪除的节点为基准，将源树的节点更新属性\n            var attrTree = _tree2.default.addAttr2Tree(_tree2.default.getNodeById(node.id, sourceTree), { checked: false });\n            this.setState({\n                tarTree: delTree,\n                sourceTree: _tree2.default.mergeTree(sourceTree, attrTree)\n            });\n            this.props.onChange && this.props.onChange(_tree2.default.getTree2List(delTree, true));\n        }\n    }, {\n        key: 'handleChangeCheckbox',\n        value: function handleChangeCheckbox() {}\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'd-f', style: { width: this.props.width || 'auto' } },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex1 s0 bor-r b-side' },\n                    _react2.default.createElement(_tree2.default, {\n                        data: this.state.sourceTree,\n                        onSelect: function onSelect(node, route) {\n                            return _this2.handleSelectTree(node, route);\n                        },\n                        item: function item(_item) {\n                            return _react2.default.createElement(_checkbox2.default, {\n                                onChange: function onChange(e) {\n                                    _this2.handleSelectTree(_item, e);\n                                },\n                                label: _react2.default.createElement(\n                                    'div',\n                                    { className: 'ptb8 d-il' },\n                                    _item.content || _item.id\n                                ),\n                                value: _item.id,\n                                checked: !!_item.checked,\n                                disabled: !!_item.checked\n                            });\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex1 s0' },\n                    _react2.default.createElement(_tree2.default, {\n                        data: this.state.tarTree,\n                        onSelect: function onSelect(node, route) {\n                            return _this2.handleSelectTarTree(node, route);\n                        },\n                        open: true,\n                        item: function item(_item2) {\n                            return _react2.default.createElement(\n                                'div',\n                                { className: 'd-il mtb8' },\n                                _item2.content || _item2.id,\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: function onClick() {\n                                            return _this2.handleSelectTarTree(_item2);\n                                        }, className: 'plr8', style: { cursor: 'pointer' } },\n                                    'x'\n                                )\n                            );\n                        } })\n                )\n            );\n        }\n    }]);\n\n    return Transfer;\n}(_react.Component);\n\nexports.default = Transfer;\n\n//# sourceURL=webpack:///./src/component/transfer.jsx?");

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