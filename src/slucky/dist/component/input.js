(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/input.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/input.jsx":
/*!*********************************!*\
  !*** ./src/component/input.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Input = function (_Component) {\n    _inherits(Input, _Component);\n\n    function Input() {\n        _classCallCheck(this, Input);\n\n        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));\n\n        _this.id = Math.random().toString(36).substring(2);\n        return _this;\n    }\n\n    _createClass(Input, [{\n        key: 'toThousands',\n        value: function toThousands(number) {\n            var num = (number || '').toString(),\n                result = '';\n            while (num.length > 3) {\n                result = ',' + num.slice(-3) + result;\n                num = num.slice(0, num.length - 3);\n            }\n            if (num) {\n                result = num + result;\n            }\n            return result;\n        }\n    }, {\n        key: 'onChange',\n        value: function onChange(value) {\n            if (this.props.type == 'money') {\n                value = (value || '').toString().replace(/\\D/g, '');\n            }\n            this.props.onChange(value);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var _selfValue = this.props.value;\n            if (this.props.type == 'money') {\n                _selfValue = (this.props.value || '').toString().replace(/\\D/g, '');\n                if (_selfValue == false) {\n                    _selfValue = '';\n                }\n                _selfValue = this.toThousands(_selfValue);\n            }\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'd-f ac', style: { width: this.props.width || 384 + 'px' } },\n                this.props.labelName ? _react2.default.createElement(\n                    'div',\n                    { className: 's0', style: { width: this.props.labelWidth || 96 + 'px' } },\n                    _react2.default.createElement(\n                        'label',\n                        { htmlFor: this.id },\n                        this.props.labelName\n                    )\n                ) : null,\n                typeof _selfValue === 'undefined' ? _react2.default.createElement(\n                    'div',\n                    { style: { width: this.props.width || 384 + 'px' } },\n                    _react2.default.createElement('input', {\n                        id: this.props.id || this.id || '',\n                        onChange: function onChange(e) {\n                            return _this2.props.onChange && _this2.props.onChange(e.target.value);\n                        },\n                        style: { width: this.props.width || 384 + 'px' },\n                        placeholder: this.props.placeholder || '',\n                        type: this.props.type || 'text',\n                        disabled: this.props.disabled || false,\n                        readOnly: this.props.readOnly || false,\n                        className: ['input-normal', this.props.error && this.props.error() && 'b-fail'].join(' '),\n                        maxLength: this.props.maxLength || '100' }),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'fs12 c-fail p-a pt2' },\n                        this.props.error && this.props.error()\n                    )\n                ) : _react2.default.createElement(\n                    'div',\n                    { style: { width: this.props.width || 384 + 'px' } },\n                    _react2.default.createElement('input', {\n                        id: this.props.id || this.id || '',\n                        onChange: function onChange(e) {\n                            return _this2.props.onChange && _this2.onChange(e.target.value);\n                        },\n                        style: { width: this.props.width || 384 + 'px' },\n                        value: _selfValue,\n                        placeholder: this.props.placeholder || '',\n                        type: this.props.type || 'text',\n                        disabled: this.props.disabled || false,\n                        readOnly: this.props.readOnly || false,\n                        className: ['input-normal', this.props.error && this.props.error() && 'b-fail'].join(' '),\n                        maxLength: this.props.maxLength || '100' }),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'fs12 c-fail p-a pt2' },\n                        this.props.error && this.props.error()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Input;\n}(_react.Component);\n\nexports.default = Input;\n\nvar InputNumber = function (_Component2) {\n    _inherits(InputNumber, _Component2);\n\n    function InputNumber(props) {\n        _classCallCheck(this, InputNumber);\n\n        var _this3 = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));\n\n        _this3.state = {\n            step: _this3.props.step || 1,\n            value: _this3.props.value || 0,\n            max: _this3.props.max || Infinity,\n            min: _this3.props.min || 0\n        };\n        return _this3;\n    }\n\n    _createClass(InputNumber, [{\n        key: 'handleChange',\n        value: function handleChange(value) {\n            this.props.onChange && this.props.onChange(value);\n        }\n    }, {\n        key: 'handleClickCtrl',\n        value: function handleClickCtrl(type) {\n            var v = new Number(this.props.value);\n            switch (type) {\n                case 'UP':\n                    if (v < this.state.max) {\n                        this.props.onChange && this.props.onChange(v + this.state.step);\n                    }\n                    break;\n                case 'DOWM':\n                    if (v > this.state.min) {\n                        this.props.onChange && this.props.onChange(v - this.state.step);\n                    }\n                    break;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'd-f input-number' },\n                _react2.default.createElement(Input, { type: 'number', onChange: function onChange(v) {\n                        return _this4.handleChange(v);\n                    }, value: this.props.value, width: this.props.width || 128 + 'px' }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-il input-ctrl' },\n                    _react2.default.createElement('div', { className: 'ctrl-up', onClick: function onClick() {\n                            return _this4.handleClickCtrl('UP');\n                        } }),\n                    _react2.default.createElement('div', { className: 'ctrl-down', onClick: function onClick() {\n                            return _this4.handleClickCtrl('DOWM');\n                        } })\n                )\n            );\n        }\n    }]);\n\n    return InputNumber;\n}(_react.Component);\n\nInput.Number = InputNumber;\n\n//# sourceURL=webpack:///./src/component/input.jsx?");

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