(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./tab"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["./tab", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./tab"), require("react")) : factory(root["./tab"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__tab__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./src/component/treeNode.jsx":
/*!************************************!*\
  !*** ./src/component/treeNode.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _tab = __webpack_require__(/*! ./tab */ \"./tab\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TreeNode = function (_Component) {\n    _inherits(TreeNode, _Component);\n\n    function TreeNode(props) {\n        _classCallCheck(this, TreeNode);\n\n        var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));\n\n        _this.state = {\n            _Tree: _this.props.data || {}\n        };\n        return _this;\n    }\n\n    _createClass(TreeNode, [{\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            this.setState({\n                _Tree: nextProps.data\n            });\n        }\n    }, {\n        key: 'handleClickNode',\n        value: function handleClickNode(node) {\n            this.props.onClick && this.props.onClick(node);\n        }\n    }, {\n        key: 'handleChangeCheckbox',\n        value: function handleChangeCheckbox(selected, item) {\n            console.log(item);\n            this.handleClickNode(item);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var children = this.state._Tree.ch;\n            return _react2.default.createElement(\n                'div',\n                { className: 'pl24' },\n                children && children.map(function (item, index) {\n                    if (item.ch) {\n                        return _react2.default.createElement(\n                            'div',\n                            { className: 'd-f', key: index },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'flex1' },\n                                _react2.default.createElement(\n                                    _tab.Details,\n                                    { key: index, open: _this2.props.open || false, summary: _this2.props.item && _this2.props.item(item) },\n                                    _react2.default.createElement(TreeNode, { data: item, onClick: function onClick(node) {\n                                            return _this2.handleClickNode(node);\n                                        }, open: _this2.props.open || false, item: function item(_item) {\n                                            return _this2.props.item && _this2.props.item(_item);\n                                        } })\n                                )\n                            )\n                        );\n                    }\n                    return _react2.default.createElement(\n                        'div',\n                        { key: index, className: '' },\n                        _this2.props.item && _this2.props.item(item)\n                    );\n                })\n            );\n        }\n    }]);\n\n    return TreeNode;\n}(_react.Component);\n\n//Base，复杂度O(n)，分解式\n// cloneTree(node = { id: 0, ch: [] }) {\n//     if (node.ch) {\n//         const source = [Object.assign({}, { ...node }, { ch: [] })];\n//         const map = {};\n//         const queue = [...node.ch];\n//         //遍历记录\n//         while (queue.length) {\n//             const item = queue.shift();\n//             let itemNode;\n//             if (item.ch) {\n//                 itemNode = Object.assign({}, { ...item }, { ch: [] });\n//                 // console.log(item);\n//                 queue.unshift(...item.ch);\n//             } else {\n//                 itemNode = Object.assign({}, { ...item });\n//                 // console.log(item);\n//             }\n//             source.push(itemNode);\n//         }\n//         //记录map\n//         source.forEach((item) => {\n//             map[item.id] = item;\n//         });\n//         //构建tree\n//         for (let i = 0; i < source.length; i++) {\n//             const item = source[i];\n//             if (item.id && map[item.pid]) {\n//                 map[item.pid].ch.push(item);\n//             }\n//         }\n//         console.log(source[0]);\n//         return source[0];\n//     }\n//     console.log({ ...node });\n//     return { ...node };\n// }\n\n\nexports.default = TreeNode;\n\n//# sourceURL=webpack:///./src/component/treeNode.jsx?");

/***/ }),

/***/ "./tab":
/*!************************!*\
  !*** external "./tab" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__tab__;\n\n//# sourceURL=webpack:///external_%22./tab%22?");

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