(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/possibleConstructorReturn", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("react")) : factory(root["@babel/runtime/helpers/classCallCheck"], root["@babel/runtime/helpers/createClass"], root["@babel/runtime/helpers/getPrototypeOf"], root["@babel/runtime/helpers/inherits"], root["@babel/runtime/helpers/possibleConstructorReturn"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_getPrototypeOf__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_inherits__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_helpers_possibleConstructorReturn__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/*! exports provided: default, RadioBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Radio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadioBorder\", function() { return RadioBorder; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Radio =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Radio, _Component);\n\n  function Radio() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Radio);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Radio).call(this));\n    _this.id = Math.random().toString(36).substring(2);\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Radio, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"radio-box-normalize d-il pr16\"\n      }, this.props.checked == undefined ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n        id: this.id,\n        name: this.props.name,\n        value: this.props.value,\n        defaultChecked: this.props.defaultChecked,\n        onChange: function onChange(e) {\n          return _this2.props.onAction(e);\n        },\n        type: \"radio\",\n        className: \"d-n\"\n      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n        id: this.id,\n        name: this.props.name,\n        value: this.props.value,\n        checked: this.props.checked,\n        onChange: function onChange(e) {\n          return _this2.props.onAction(e);\n        },\n        type: \"radio\",\n        className: \"d-n\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n        className: \"m0\",\n        htmlFor: this.id\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"radio-out\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"i\", {\n        className: \"radio-in\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"pl8\"\n      }, this.props.label || '')));\n    }\n  }]);\n\n  return Radio;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\nvar RadioBorder =\n/*#__PURE__*/\nfunction (_Component2) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RadioBorder, _Component2);\n\n  function RadioBorder() {\n    var _this3;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RadioBorder);\n\n    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RadioBorder).call(this));\n    _this3.id = Math.random().toString(36).substring(2);\n    return _this3;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RadioBorder, [{\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"trigger-box-border d-il mr16 mb8\"\n      }, this.props.checked == undefined ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n        trigger: \"core\",\n        id: this.id,\n        name: this.props.name,\n        value: this.props.value,\n        defaultChecked: this.props.defaultChecked,\n        onChange: function onChange(e) {\n          return _this4.props.onAction(e);\n        },\n        type: \"radio\",\n        className: \"d-n\"\n      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n        trigger: \"core\",\n        id: this.id,\n        name: this.props.name,\n        value: this.props.value,\n        checked: this.props.checked,\n        onChange: function onChange(e) {\n          return _this4.props.onAction(e);\n        },\n        type: \"radio\",\n        className: \"d-n\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n        htmlFor: this.id,\n        className: \"trigger-border mb0\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"m0\"\n      }, this.props.label || '')));\n    }\n  }]);\n\n  return RadioBorder;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar GroupContainer = function GroupContainer(component) {\n  return (\n    /*#__PURE__*/\n    function (_Component3) {\n      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Group, _Component3);\n\n      function Group() {\n        var _this5;\n\n        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Group);\n\n        _this5 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Group).call(this));\n        _this5.name = Math.random().toString(36).substring(2);\n        return _this5;\n      }\n\n      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Group, [{\n        key: \"render\",\n        value: function render() {\n          var _this6 = this;\n\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n            className: this.props.className || ''\n          }, this.props.children ? null : this.props.option.map(function (item, index) {\n            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(component, {\n              key: index,\n              defaultChecked: _this6.props.defaultValue == item.value,\n              checked: _this6.props.value ? _this6.props.value == item.value : undefined,\n              name: _this6.name,\n              label: item.label,\n              value: item.value,\n              onAction: function onAction(e) {\n                return _this6.props.onChange(e);\n              }\n            });\n          }));\n        }\n      }]);\n\n      return Group;\n    }(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"])\n  );\n};\n\nRadio.Group = GroupContainer(Radio);\nRadio.GroupBorder = GroupContainer(RadioBorder); // Demo\n// class Group extends Component {\n//     constructor() {\n//         super()\n//         this.name = Math.random().toString(36).substring(2);\n//     }\n//     render() {\n//         return (\n//             <div className={this.props.className || ''}>\n//                 {\n//                     this.props.children ? null : this.props.option.map((item, index) => {\n//                         return <Radio\n//                             key={index}\n//                             defaultChecked={this.props.defaultValue == item.value}\n//                             name={this.name}\n//                             label={item.label}\n//                             value={item.value}\n//                             onAction={(e) => this.props.onChange(e)} />\n//                     })\n//                 }\n//             </div>\n//         )\n//     }\n// }\n\n//# sourceURL=webpack:///./src/component/radio.jsx?");

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