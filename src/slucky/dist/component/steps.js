(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/regenerator"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/regenerator", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("babel-runtime/regenerator"), require("react")) : factory(root["babel-runtime/regenerator"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_babel_runtime_regenerator__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/steps.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/steps.jsx":
/*!*********************************!*\
  !*** ./src/component/steps.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// require(\"babel-polyfill\");\nvar Steps = function (_Component) {\n    _inherits(Steps, _Component);\n\n    function Steps(props) {\n        _classCallCheck(this, Steps);\n\n        var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));\n\n        _this.state = {\n            currentStep: _this.props.currentStep || 0\n        };\n        return _this;\n    }\n    // 为步骤灵活变化准备\n\n\n    _createClass(Steps, [{\n        key: 'handleClickEvent',\n        value: function handleClickEvent(step, index) {\n            // this.onAction(step, index, this.state.currentStep);\n        }\n    }, {\n        key: 'handelPreStep',\n        value: function handelPreStep() {\n            var _this2 = this;\n\n            if (this.state.currentStep - 1 < 0) {\n                console.log('start');\n            } else {\n                console.log('pre');\n                this.setState({\n                    currentStep: this.state.currentStep - 1\n                }, function () {\n                    _this2.props.stepset[_this2.state.currentStep].handlePre && _this2.props.stepset[_this2.state.currentStep].handlePre(_this2.props.stepset[_this2.state.currentStep], _this2.state.currentStep);\n                });\n            }\n        }\n    }, {\n        key: 'handleNextStep',\n        value: function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n                var len, AllowNext;\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                len = this.props.stepset.length;\n\n                                if (!this.props.stepset[this.state.currentStep].handleNext) {\n                                    _context.next = 9;\n                                    break;\n                                }\n\n                                _context.next = 4;\n                                return this.props.stepset[this.state.currentStep].handleNext(this.props.stepset[this.state.currentStep], this.state.currentStep);\n\n                            case 4:\n                                AllowNext = _context.sent;\n\n                                console.log('AllowNext', AllowNext);\n                                if (AllowNext) {\n                                    if (this.state.currentStep + 1 >= len) {\n                                        console.log('end');\n                                    } else {\n                                        this.setState({\n                                            currentStep: this.state.currentStep + 1\n                                        });\n                                        console.log('next');\n                                    }\n                                } else {\n                                    console.log('阻塞', AllowNext);\n                                }\n                                _context.next = 10;\n                                break;\n\n                            case 9:\n                                if (this.state.currentStep + 1 >= len) {\n                                    console.log('end');\n                                } else {\n                                    this.setState({\n                                        currentStep: this.state.currentStep + 1\n                                    });\n                                    console.log('next');\n                                }\n\n                            case 10:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, this);\n            }));\n\n            function handleNextStep() {\n                return _ref.apply(this, arguments);\n            }\n\n            return handleNextStep;\n        }()\n    }, {\n        key: 'handleTitleStyle',\n        value: function handleTitleStyle(stepIndex, currentStep) {\n            if (stepIndex > currentStep) {\n                return 'c-hint-b';\n            }\n            if (stepIndex < currentStep) {\n                return 'c-theme step-sign-active step-sign-ed';\n            }\n            return 'step-sign-active';\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'step-bar' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'd-f', style: { width: this.props.width || 'auto', margin: '0 auto' } },\n                            this.props.stepset.map(function (step, index) {\n                                return _react2.default.createElement(\n                                    'div',\n                                    { key: index, className: ['flex1 s0 step-item pt32 pb16', _this3.handleTitleStyle(index, _this3.state.currentStep)].join(' ') },\n                                    _react2.default.createElement(\n                                        'div',\n                                        { className: 'sign-box' },\n                                        _react2.default.createElement(\n                                            'div',\n                                            { className: ['step-sign'].join(' ') },\n                                            _react2.default.createElement(\n                                                'span',\n                                                { className: 'step-sign-in' },\n                                                '\\u2713'\n                                            )\n                                        )\n                                    ),\n                                    _react2.default.createElement(\n                                        'div',\n                                        { className: 'ptb8 fs12', onClick: function onClick() {\n                                                return _this3.handleClickEvent(step, index);\n                                            } },\n                                        step.title\n                                    )\n                                );\n                            })\n                        )\n                    ),\n                    this.props.stepset.map(function (step, index) {\n                        return _react2.default.createElement(\n                            'div',\n                            { key: index, className: 'p-r' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'step-content', style: index == _this3.state.currentStep ? { position: 'relative', visibility: 'visible', zIndex: 1, left: 0 } : {} },\n                                _this3.props.isCacheData ? step.content && step.content(step.store || {}, function () {\n                                    return _this3.handleNextStep();\n                                }, function () {\n                                    return _this3.handelPreStep();\n                                }) : index == _this3.state.currentStep ? step.content && step.content(step.store || {}, function () {\n                                    return _this3.handleNextStep();\n                                }, function () {\n                                    return _this3.handelPreStep();\n                                }) : null\n                            )\n                        );\n                    })\n                ),\n                !this.props.stepset[this.state.currentStep].isCustomCtrl && _react2.default.createElement(\n                    'div',\n                    { className: 'ta-c pt16' },\n                    this.state.currentStep != 0 ? _react2.default.createElement(\n                        'button',\n                        { className: 'btn-w bor b-side ptb6 plr16 mr16', onClick: function onClick() {\n                                return _this3.handelPreStep();\n                            } },\n                        '\\u4E0A\\u4E00\\u6B65'\n                    ) : null,\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-n ptb6 plr16', onClick: function onClick() {\n                                return _this3.handleNextStep();\n                            } },\n                        this.state.currentStep + 1 == this.props.stepset.length ? '确认' : '下一步'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Steps;\n}(_react.Component);\n\nexports.default = Steps;\n\n//# sourceURL=webpack:///./src/component/steps.jsx?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_babel_runtime_regenerator__;\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

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