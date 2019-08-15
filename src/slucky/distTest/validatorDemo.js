(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("slucky/src"), require("slucky/src/component/checkbox"), require("slucky/src/component/input"), require("slucky/src/component/radio"), require("slucky/src/component/search"), require("slucky/src/component/select"), require("slucky/src/component/steps"), require("slucky/src/component/switch"), require("slucky/src/component/tab"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "slucky/src", "slucky/src/component/checkbox", "slucky/src/component/input", "slucky/src/component/radio", "slucky/src/component/search", "slucky/src/component/select", "slucky/src/component/steps", "slucky/src/component/switch", "slucky/src/component/tab"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("slucky/src"), require("slucky/src/component/checkbox"), require("slucky/src/component/input"), require("slucky/src/component/radio"), require("slucky/src/component/search"), require("slucky/src/component/select"), require("slucky/src/component/steps"), require("slucky/src/component/switch"), require("slucky/src/component/tab")) : factory(root["react"], root["slucky/src"], root["slucky/src/component/checkbox"], root["slucky/src/component/input"], root["slucky/src/component/radio"], root["slucky/src/component/search"], root["slucky/src/component/select"], root["slucky/src/component/steps"], root["slucky/src/component/switch"], root["slucky/src/component/tab"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_slucky_src__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_checkbox__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_input__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_radio__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_search__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_select__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_steps__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_switch__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_tab__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/validatorDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/validatorDemo.jsx":
/*!*******************************!*\
  !*** ./src/validatorDemo.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ValidatorDemo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _src = __webpack_require__(/*! slucky/src */ \"slucky/src\");\n\nvar _input = __webpack_require__(/*! slucky/src/component/input */ \"slucky/src/component/input\");\n\nvar _radio = __webpack_require__(/*! slucky/src/component/radio */ \"slucky/src/component/radio\");\n\nvar _checkbox = __webpack_require__(/*! slucky/src/component/checkbox */ \"slucky/src/component/checkbox\");\n\nvar _switch = __webpack_require__(/*! slucky/src/component/switch */ \"slucky/src/component/switch\");\n\nvar _tab = __webpack_require__(/*! slucky/src/component/tab */ \"slucky/src/component/tab\");\n\nvar _select = __webpack_require__(/*! slucky/src/component/select */ \"slucky/src/component/select\");\n\nvar _search = __webpack_require__(/*! slucky/src/component/search */ \"slucky/src/component/search\");\n\nvar _steps = __webpack_require__(/*! slucky/src/component/steps */ \"slucky/src/component/steps\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import { Input } from \"slucky/distTest\";\n\n\n// import { Search } from \"slucky/distTest/component/search\";\n\nvar ValidatorDemo = exports.ValidatorDemo = function (_Component) {\n    _inherits(ValidatorDemo, _Component);\n\n    function ValidatorDemo() {\n        _classCallCheck(this, ValidatorDemo);\n\n        var _this = _possibleConstructorReturn(this, (ValidatorDemo.__proto__ || Object.getPrototypeOf(ValidatorDemo)).call(this));\n\n        _this.handelClickSubmit = function () {\n            //isSubmit只检测\n            if (_this.Validator.isSubmit(_this.state)) {\n                _src.Toast.add('ok');\n            } else {\n                _src.Toast.add({\n                    content: 'vali fail',\n                    status: 'fail'\n                });\n            }\n            //更新校验信息\n            _this.forceUpdate();\n        };\n\n        _this.handleChangeRadio = function (e) {\n            console.log(e.target.value);\n        };\n\n        _this.handleChangeCheckbox = function (selected) {\n            console.log(selected);\n        };\n\n        _this.handleChangeSwitch = function (e) {\n            console.log(e.target.value);\n        };\n\n        _this.state = {\n            name: 'asdf',\n            email: '123',\n            password: ''\n        };\n        _this.Validator = new _src.Validator();\n        _src.Validator.types.isEmptyTest = {\n            validate: function validate(value) {\n                return value !== '';\n            },\n\n            instruction: '不为空自定义校验'\n        };\n        _this.Validator.config = {\n            name: ['isEmpty', 'isEmptyTest'],\n            email: ['isEmpty', 'isEmptyTest'],\n            password: ['isEmpty', 'isInt', 'isEmptyTest']\n        };\n        return _this;\n    }\n\n    _createClass(ValidatorDemo, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'bor b-side p32 mtb32' },\n                _react2.default.createElement(_steps.Steps, { isCacheData: true, stepset: [{\n                        title: '1',\n                        content: function content(data) {\n                            return _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(_search.Search, { onChange: function onChange(v) {\n                                        console.log(v);\n                                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] })\n                            );\n                        },\n                        handleNext: function handleNext(data) {\n                            return true;\n                        }\n                    }, {\n                        title: '2',\n                        content: function content(data, handelNext, handlePre) {\n                            return _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'button',\n                                    { className: 'btn-n', onClick: handlePre },\n                                    '\\u4E0A\\u4E00\\u6B65'\n                                ),\n                                _react2.default.createElement(\n                                    'button',\n                                    { className: 'btn-n', onClick: handelNext },\n                                    '\\u4E0B\\u4E00\\u6B65'\n                                )\n                            );\n                        },\n                        isCustomCtrl: true\n                    }, {\n                        title: '3',\n                        content: function content(data) {\n                            return _react2.default.createElement(_checkbox.Checkbox.GroupBorder, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(selected) {\n                                    _this2.handleChangeCheckbox(selected);\n                                }, option: [{ label: 'Apple', value: 'Apple' }, { label: _react2.default.createElement(\n                                        'div',\n                                        { className: 'border-sign' },\n                                        'Pear'\n                                    ), value: 'Pear' }, { label: 'Orange', value: 'Orange' }] });\n                        },\n                        handleNext: function handleNext(data) {\n                            return true;\n                        }\n                    }, {\n                        title: '4',\n                        content: function content(data) {\n                            return _react2.default.createElement(\n                                'div',\n                                null,\n                                data.name\n                            );\n                        },\n                        handleNext: function handleNext(data) {\n                            return true;\n                        }\n                    }], onChange: function onChange(currentSept) {\n                        console.log(currentSept);\n                    } }),\n                _react2.default.createElement(_search.Search, { onSearch: function onSearch(v) {\n                        console.log(v);\n                    }, onChange: function onChange(v) {\n                        console.log(v);\n                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] }),\n                _react2.default.createElement(_select.Select, { defaultValue: '\\u9009\\u98792', onChange: function onChange(v) {\n                        console.log(v);\n                    }, option: [{\n                        label: '选项1',\n                        value: 'v1'\n                    }, {\n                        label: '选项2',\n                        value: 'v2'\n                    }, {\n                        label: '选项3',\n                        value: 'v3'\n                    }] }),\n                _react2.default.createElement(_radio.Radio.Group, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(e) {\n                        _this2.handleChangeRadio(e);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_radio.Radio.GroupBorder, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(e) {\n                        _this2.handleChangeRadio(e);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_checkbox.Checkbox.Group, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(selected) {\n                        _this2.handleChangeCheckbox(selected);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_checkbox.Checkbox.GroupFontIn, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(selected) {\n                        _this2.handleChangeCheckbox(selected);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_checkbox.Checkbox.GroupBorder, { className: 'pb32', defaultValue: 'Pear', onChange: function onChange(selected) {\n                        _this2.handleChangeCheckbox(selected);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: _react2.default.createElement(\n                            'div',\n                            { className: 'border-sign' },\n                            'Pear'\n                        ), value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_switch.Switch, null),\n                _react2.default.createElement(\n                    _tab.Tab.Group,\n                    null,\n                    _react2.default.createElement(\n                        _tab.Tab,\n                        { title: 'hello', defaultChecked: true },\n                        '123'\n                    ),\n                    _react2.default.createElement(\n                        _tab.Tab,\n                        { title: '123' },\n                        'qwer'\n                    ),\n                    _react2.default.createElement(\n                        _tab.Tab,\n                        { title: 'qwe' },\n                        '12asdf3'\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac mb24 mt36' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w96 s0' },\n                        _react2.default.createElement(\n                            'label',\n                            { htmlFor: 'name' },\n                            'Name:'\n                        )\n                    ),\n                    _react2.default.createElement(_input.Input, { disabled: true, id: 'name', width: '100%', value: this.state.name, onChange: function onChange(name) {\n                            _this2.setState({ name: name });\n                        }, error: function error() {\n                            return _this2.Validator.formatRes('name');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac mb24' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w96 s0' },\n                        _react2.default.createElement(\n                            'label',\n                            { htmlFor: 'email' },\n                            'Email:'\n                        )\n                    ),\n                    _react2.default.createElement(_input.Input, { readOnly: true, id: 'email', value: this.state.email, onChange: function onChange(email) {\n                            _this2.setState({ email: email });\n                        }, error: function error() {\n                            return _this2.Validator.formatRes('email');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac mb24' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w96 s0' },\n                        _react2.default.createElement(\n                            'label',\n                            { htmlFor: 'password' },\n                            'Password:'\n                        )\n                    ),\n                    _react2.default.createElement(_input.Input, { id: 'password', onChange: function onChange(password) {\n                            _this2.setState({ password: password });\n                        }, error: function error() {\n                            return _this2.Validator.formatRes('password');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'w384 ta-c' },\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-n ml8 plr16 ptb8', onClick: this.handelClickSubmit },\n                        '\\u6821\\u9A8C\\u8868\\u5355'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ValidatorDemo;\n}(_react.Component);\n\n//# sourceURL=webpack:///./src/validatorDemo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "slucky/src":
/*!*****************************!*\
  !*** external "slucky/src" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src__;\n\n//# sourceURL=webpack:///external_%22slucky/src%22?");

/***/ }),

/***/ "slucky/src/component/checkbox":
/*!************************************************!*\
  !*** external "slucky/src/component/checkbox" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_checkbox__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/checkbox%22?");

/***/ }),

/***/ "slucky/src/component/input":
/*!*********************************************!*\
  !*** external "slucky/src/component/input" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_input__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/input%22?");

/***/ }),

/***/ "slucky/src/component/radio":
/*!*********************************************!*\
  !*** external "slucky/src/component/radio" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_radio__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/radio%22?");

/***/ }),

/***/ "slucky/src/component/search":
/*!**********************************************!*\
  !*** external "slucky/src/component/search" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_search__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/search%22?");

/***/ }),

/***/ "slucky/src/component/select":
/*!**********************************************!*\
  !*** external "slucky/src/component/select" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_select__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/select%22?");

/***/ }),

/***/ "slucky/src/component/steps":
/*!*********************************************!*\
  !*** external "slucky/src/component/steps" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_steps__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/steps%22?");

/***/ }),

/***/ "slucky/src/component/switch":
/*!**********************************************!*\
  !*** external "slucky/src/component/switch" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_switch__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/switch%22?");

/***/ }),

/***/ "slucky/src/component/tab":
/*!*******************************************!*\
  !*** external "slucky/src/component/tab" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_tab__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/tab%22?");

/***/ })

/******/ });
});