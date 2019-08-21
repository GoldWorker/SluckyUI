(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/dialog.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/dialog.jsx":
/*!**********************************!*\
  !*** ./src/component/dialog.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Dialog = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dialog = exports.Dialog = function (_Component) {\n    _inherits(Dialog, _Component);\n\n    function Dialog() {\n        _classCallCheck(this, Dialog);\n\n        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));\n    }\n\n    _createClass(Dialog, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var tar = this.props.open ? _react2.default.createElement(\n                'div',\n                { className: 'fadeIn p-r z10' },\n                _react2.default.createElement('div', { className: 'dialog-mark' }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'dialog-box d-f ac jc' },\n                    _react2.default.createElement(\n                        'span',\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'dialog paper fade-scale mlr64' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'ta-r' },\n                                _react2.default.createElement(\n                                    'div',\n                                    { className: 'mt4 mr4 pt4 plr8 ta-r' },\n                                    _react2.default.createElement(\n                                        'div',\n                                        {\n                                            className: 'd-il',\n                                            onClick: function onClick() {\n                                                return _this2.props.onClose();\n                                            },\n                                            style: {\n                                                cursor: 'pointer'\n                                            } },\n                                        'X'\n                                    )\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'div',\n                                    { className: 'dialog-content ta-l' },\n                                    this.props.children\n                                )\n                            )\n                        )\n                    )\n                )\n            ) : null;\n            return _reactDom2.default.createPortal(tar, document.body); //传送门的另一端DOM node\n        }\n    }]);\n\n    return Dialog;\n}(_react.Component);\n\nDialog.model = function (_ref) {\n    var content = _ref.content,\n        onOk = _ref.onOk,\n        title = _ref.title,\n        footer = _ref.footer;\n\n\n    var div = document.createElement('div');\n    var closeDialog = function closeDialog(onOk, component) {\n        onOk && onOk();\n        _reactDom2.default.render(_react2.default.cloneElement(component, { open: false }), div);\n        _reactDom2.default.unmountComponentAtNode(div);\n        div.remove();\n    };\n    var component = _react2.default.createElement(\n        Dialog,\n        { open: true, onClose: function onClose() {\n                return closeDialog('', component);\n            } },\n        title && _react2.default.createElement(\n            'p',\n            null,\n            title\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            content\n        ),\n        !footer && _react2.default.createElement(\n            'div',\n            { className: 'ta-r pt8' },\n            _react2.default.createElement(\n                'button',\n                { className: 'tag-text ptb6 plr16', onClick: function onClick() {\n                        return closeDialog('', component);\n                    } },\n                '\\u53D6\\u6D88'\n            ),\n            onOk && _react2.default.createElement(\n                'button',\n                { className: 'tag-text ptb6 plr16', onClick: function onClick() {\n                        return closeDialog(onOk, component);\n                    } },\n                '\\u786E\\u8BA4'\n            )\n        )\n    );\n    document.body.append(div);\n    _reactDom2.default.render(component, div);\n};\n\n//# sourceURL=webpack:///./src/component/dialog.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ })

/******/ });
});