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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/radio.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/radio.jsx":
/*!*********************************!*\
  !*** ./src/component/radio.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.RadioBorder = exports.Radio = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Radio = exports.Radio = function (_Component) {\n    _inherits(Radio, _Component);\n\n    function Radio() {\n        _classCallCheck(this, Radio);\n\n        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));\n\n        _this.id = Math.random().toString(36).substring(2);\n        return _this;\n    }\n\n    _createClass(Radio, [{\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"radio-box-normalize d-il pr16\" },\n                this.props.checked == undefined ? _react2.default.createElement(\"input\", {\n                    id: this.id,\n                    name: this.props.name,\n                    value: this.props.value,\n                    defaultChecked: this.props.defaultChecked,\n                    onChange: function onChange(e) {\n                        return _this2.props.onAction(e);\n                    },\n                    type: \"radio\",\n                    className: \"d-n\" }) : _react2.default.createElement(\"input\", {\n                    id: this.id,\n                    name: this.props.name,\n                    value: this.props.value,\n                    checked: this.props.checked,\n                    onChange: function onChange(e) {\n                        return _this2.props.onAction(e);\n                    },\n                    type: \"radio\",\n                    className: \"d-n\" }),\n                _react2.default.createElement(\n                    \"label\",\n                    { className: \"m0\", htmlFor: this.id },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"radio-out\" },\n                        _react2.default.createElement(\"i\", { className: \"radio-in\" })\n                    ),\n                    _react2.default.createElement(\n                        \"span\",\n                        { className: \"pl8\" },\n                        this.props.label || ''\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Radio;\n}(_react.Component);\n\nvar RadioBorder = exports.RadioBorder = function (_Component2) {\n    _inherits(RadioBorder, _Component2);\n\n    function RadioBorder() {\n        _classCallCheck(this, RadioBorder);\n\n        var _this3 = _possibleConstructorReturn(this, (RadioBorder.__proto__ || Object.getPrototypeOf(RadioBorder)).call(this));\n\n        _this3.id = Math.random().toString(36).substring(2);\n        return _this3;\n    }\n\n    _createClass(RadioBorder, [{\n        key: \"render\",\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"trigger-box-border d-il mr16 mb8\" },\n                this.props.checked == undefined ? _react2.default.createElement(\"input\", {\n                    trigger: \"core\",\n                    id: this.id,\n                    name: this.props.name,\n                    value: this.props.value,\n                    defaultChecked: this.props.defaultChecked,\n                    onChange: function onChange(e) {\n                        return _this4.props.onAction(e);\n                    },\n                    type: \"radio\",\n                    className: \"d-n\" }) : _react2.default.createElement(\"input\", {\n                    trigger: \"core\",\n                    id: this.id,\n                    name: this.props.name,\n                    value: this.props.value,\n                    checked: this.props.checked,\n                    onChange: function onChange(e) {\n                        return _this4.props.onAction(e);\n                    },\n                    type: \"radio\",\n                    className: \"d-n\" }),\n                _react2.default.createElement(\n                    \"label\",\n                    {\n                        htmlFor: this.id,\n                        className: \"trigger-border mb0\"\n                    },\n                    _react2.default.createElement(\n                        \"span\",\n                        { className: \"m0\" },\n                        this.props.label || ''\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RadioBorder;\n}(_react.Component);\n\nvar GroupContainer = function GroupContainer(component) {\n    return function (_Component3) {\n        _inherits(Group, _Component3);\n\n        function Group() {\n            _classCallCheck(this, Group);\n\n            var _this5 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));\n\n            _this5.name = Math.random().toString(36).substring(2);\n            return _this5;\n        }\n\n        _createClass(Group, [{\n            key: \"render\",\n            value: function render() {\n                var _this6 = this;\n\n                return _react2.default.createElement(\n                    \"div\",\n                    { className: this.props.className || '' },\n                    this.props.children ? null : this.props.option.map(function (item, index) {\n                        return _react2.default.createElement(component, {\n                            key: index,\n                            defaultChecked: _this6.props.defaultValue == item.value,\n                            checked: _this6.props.value ? _this6.props.value == item.value : undefined,\n                            name: _this6.name,\n                            label: item.label,\n                            value: item.value,\n                            onAction: function onAction(e) {\n                                return _this6.props.onChange(e);\n                            }\n                        });\n                    })\n                );\n            }\n        }]);\n\n        return Group;\n    }(_react.Component);\n};\n\nRadio.Group = GroupContainer(Radio);\nRadio.GroupBorder = GroupContainer(RadioBorder);\n\n// Demo\n// class Group extends Component {\n//     constructor() {\n//         super()\n//         this.name = Math.random().toString(36).substring(2);\n//     }\n//     render() {\n//         return (\n//             <div className={this.props.className || ''}>\n//                 {\n//                     this.props.children ? null : this.props.option.map((item, index) => {\n//                         return <Radio\n//                             key={index}\n//                             defaultChecked={this.props.defaultValue == item.value}\n//                             name={this.name}\n//                             label={item.label}\n//                             value={item.value}\n//                             onAction={(e) => this.props.onChange(e)} />\n//                     })\n//                 }\n//             </div>\n//         )\n//     }\n// }\n\n//# sourceURL=webpack:///./src/component/radio.jsx?");

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