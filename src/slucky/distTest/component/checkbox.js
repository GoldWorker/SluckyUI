(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["slucky"] = factory(require("react"));
	else
		root["slucky"] = factory(root["react"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/checkbox.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/checkbox.jsx":
/*!************************************!*\
  !*** ./src/component/checkbox.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.CheckboxFontIn = exports.Checkbox = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Checkbox = exports.Checkbox = function (_Component) {\n    _inherits(Checkbox, _Component);\n\n    function Checkbox() {\n        _classCallCheck(this, Checkbox);\n\n        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));\n\n        _this.id = Math.random().toString(36).substring(2);\n        return _this;\n    }\n\n    _createClass(Checkbox, [{\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"checkbox-box-normalize mr16 mb8\" },\n                _react2.default.createElement(\"input\", {\n                    id: this.id,\n                    type: \"checkbox\",\n                    name: this.props.name,\n                    value: this.props.value,\n                    defaultChecked: this.props.defaultChecked,\n                    onChange: function onChange(e) {\n                        return _this2.props.onAction(e);\n                    } }),\n                _react2.default.createElement(\n                    \"span\",\n                    { className: \"checkbox-hook ta-c\" },\n                    _react2.default.createElement(\n                        \"span\",\n                        { className: \"checkbox-hook-in fs12 op0\" },\n                        \"\\u2713\"\n                    )\n                ),\n                _react2.default.createElement(\n                    \"label\",\n                    { htmlFor: this.id, className: \"p-r z10 pl8\" },\n                    this.props.label || ''\n                )\n            );\n        }\n    }]);\n\n    return Checkbox;\n}(_react.Component);\n\nvar Group = function (_Component2) {\n    _inherits(Group, _Component2);\n\n    function Group() {\n        _classCallCheck(this, Group);\n\n        var _this3 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));\n\n        _this3.name = Math.random().toString(36).substring(2);\n        _this3.selected = [];\n        return _this3;\n    }\n\n    _createClass(Group, [{\n        key: \"onAction\",\n        value: function onAction(e) {\n            var _e$target = e.target,\n                value = _e$target.value,\n                checked = _e$target.checked;\n\n            if (checked) {\n                this.selected.push(value);\n            } else {\n                var ind = this.selected.indexOf(value);\n                ind != -1 && this.selected.splice(ind, 1);\n            }\n            this.props.onChange(this.selected);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: this.props.className || '' },\n                this.props.children ? null : this.props.option.map(function (item, index) {\n                    if (_this4.props.defaultValue == item.value) {\n                        _this4.selected.push(item.value);\n                    }\n\n                    return _react2.default.createElement(Checkbox, {\n                        key: index,\n                        defaultChecked: _this4.props.defaultValue == item.value,\n                        name: _this4.name,\n                        label: item.label,\n                        value: item.value,\n                        onAction: function onAction(e) {\n                            return _this4.onAction(e);\n                        } });\n                })\n            );\n        }\n    }]);\n\n    return Group;\n}(_react.Component);\n\nvar CheckboxFontIn = exports.CheckboxFontIn = function (_Component3) {\n    _inherits(CheckboxFontIn, _Component3);\n\n    function CheckboxFontIn() {\n        _classCallCheck(this, CheckboxFontIn);\n\n        var _this5 = _possibleConstructorReturn(this, (CheckboxFontIn.__proto__ || Object.getPrototypeOf(CheckboxFontIn)).call(this));\n\n        _this5.id = Math.random().toString(36).substring(2);\n        return _this5;\n    }\n\n    _createClass(CheckboxFontIn, [{\n        key: \"render\",\n        value: function render() {\n            var _this6 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"checkbox-box-fontstyle d-il mr16 mb8\" },\n                _react2.default.createElement(\"input\", {\n                    id: this.id,\n                    type: \"checkbox\",\n                    className: \"d-n\",\n                    name: this.props.name,\n                    value: this.props.value,\n                    defaultChecked: this.props.defaultChecked,\n                    onChange: function onChange(e) {\n                        return _this6.props.onAction(e);\n                    } }),\n                _react2.default.createElement(\n                    \"label\",\n                    {\n                        htmlFor: this.id,\n                        className: \"checkbox-fontstyle mb0\"\n                    },\n                    _react2.default.createElement(\n                        \"span\",\n                        { className: \"m0\" },\n                        this.props.label || ''\n                    )\n                )\n            );\n        }\n    }]);\n\n    return CheckboxFontIn;\n}(_react.Component);\n\nvar GroupFontIn = function (_Component4) {\n    _inherits(GroupFontIn, _Component4);\n\n    function GroupFontIn() {\n        _classCallCheck(this, GroupFontIn);\n\n        var _this7 = _possibleConstructorReturn(this, (GroupFontIn.__proto__ || Object.getPrototypeOf(GroupFontIn)).call(this));\n\n        _this7.name = Math.random().toString(36).substring(2);\n        _this7.selected = [];\n        return _this7;\n    }\n\n    _createClass(GroupFontIn, [{\n        key: \"onAction\",\n        value: function onAction(e) {\n            var _e$target2 = e.target,\n                value = _e$target2.value,\n                checked = _e$target2.checked;\n\n            if (checked) {\n                this.selected.push(value);\n            } else {\n                var ind = this.selected.indexOf(value);\n                ind != -1 && this.selected.splice(ind, 1);\n            }\n            this.props.onChange(this.selected);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this8 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: this.props.className || '' },\n                this.props.children ? null : this.props.option.map(function (item, index) {\n                    if (_this8.props.defaultValue == item.value) {\n                        _this8.selected.push(item.value);\n                    }\n\n                    return _react2.default.createElement(CheckboxFontIn, {\n                        key: index,\n                        defaultChecked: _this8.props.defaultValue == item.value,\n                        name: _this8.name,\n                        label: item.label,\n                        value: item.value,\n                        onAction: function onAction(e) {\n                            return _this8.onAction(e);\n                        } });\n                })\n            );\n        }\n    }]);\n\n    return GroupFontIn;\n}(_react.Component);\n\nCheckbox.Group = Group;\nCheckbox.GroupFontIn = GroupFontIn;\n\n//# sourceURL=webpack://slucky/./src/component/checkbox.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://slucky/external_%22react%22?");

/***/ })

/******/ });
});