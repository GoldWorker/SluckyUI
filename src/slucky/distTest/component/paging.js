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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/paging.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/paging.jsx":
/*!**********************************!*\
  !*** ./src/component/paging.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Paging = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Paging = exports.Paging = function (_Component) {\n    _inherits(Paging, _Component);\n\n    function Paging(props) {\n        _classCallCheck(this, Paging);\n\n        var _this = _possibleConstructorReturn(this, (Paging.__proto__ || Object.getPrototypeOf(Paging)).call(this, props));\n\n        _this.start = 1;\n        _this.maxWidth = 5;\n        _this.minWidth = '';\n        _this.end = '';\n        // 分页对象\n\n        _this.state = {\n            pageInfo: {\n                total: _this.props.pageInfo.total || 0,\n                maxToShow: _this.props.pageInfo.maxToShow || 0,\n                currentPage: _this.props.pageInfo.currentPage || 1\n            },\n            viewBox: {\n                width: '', // 可视容器的宽度\n                list: [], // 可视容器列表\n                before: false, // 前后省略号\n                after: false,\n                currentPage: '' // 当前页\n            }\n        };\n        return _this;\n    }\n\n    _createClass(Paging, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.init();\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            var _this2 = this;\n\n            // 在重新render之前更新state不会重新触发生命周期\n            // console.log('componentWillReceiveProps', nextProps, this.props)\n            this.setState({\n                pageInfo: {\n                    total: nextProps.pageInfo.total || 0,\n                    maxToShow: nextProps.pageInfo.maxToShow || 0,\n                    currentPage: nextProps.pageInfo.currentPage || 1\n                },\n                viewBox: {\n                    width: '', // 可视容器的宽度\n                    list: [], // 可视容器列表\n                    before: false, // 前后省略号\n                    after: false,\n                    currentPage: '' // 当前页\n                }\n            }, function () {\n                if (nextProps.pageInfo.currentPage && _this2.state.viewBox) {\n                    _this2.init(_this2.handleChangePageSelf(nextProps.pageInfo.currentPage));\n                } else {\n                    _this2.init();\n                }\n            });\n        }\n    }, {\n        key: 'init',\n        value: function init(cb) {\n            var pageInfo = this.state.pageInfo;\n\n            this.end = Math.ceil(pageInfo.total / pageInfo.maxToShow);\n            this.end > 0 ? this.end : this.end = 1;\n            // console.log(this.end);\n            this.minWidth = this.end - 2;\n            var currentWidth = this.maxWidth > this.minWidth ? this.minWidth : this.maxWidth;\n\n            this.setState({\n                viewBox: {\n                    width: currentWidth,\n                    list: function (width) {\n                        var list = [];\n                        for (var i = 1; i <= width; i++) {\n                            var k = i;\n                            list.push(++k);\n                        }\n                        // console.log(list);\n                        return list;\n                    }(currentWidth),\n                    before: false,\n                    after: this.maxWidth < this.minWidth,\n                    currentPage: pageInfo.currentPage || 1\n                }\n            }, function () {\n                // console.log(this.state.viewBox);\n                cb && cb();\n            });\n        }\n    }, {\n        key: 'handleChangePage',\n        value: function handleChangePage(currentPage) {\n            // console.log(currentPage);\n            currentPage = parseInt(currentPage);\n            // 保证临界条件\n            if (currentPage < this.start) currentPage = this.start;\n            if (currentPage > this.end) currentPage = this.end;\n            // console.log('currentPage', currentPage)\n            this.handleViewBox(currentPage);\n            this.props.onAction && this.props.onAction(currentPage);\n        }\n    }, {\n        key: 'handleChangePageSelf',\n        value: function handleChangePageSelf(currentPage) {\n            currentPage = parseInt(currentPage);\n            // 保证临界条件\n            if (currentPage < this.start) currentPage = this.start;\n            if (currentPage > this.end) currentPage = this.end;\n            this.handleViewBox(currentPage);\n        }\n    }, {\n        key: 'handleChangePageLeft',\n        value: function handleChangePageLeft() {\n            this.handleChangePage(--this.state.viewBox.currentPage);\n        }\n    }, {\n        key: 'handleChangePageRight',\n        value: function handleChangePageRight() {\n            this.handleChangePage(++this.state.viewBox.currentPage);\n        }\n\n        // 维护viewBox\n\n    }, {\n        key: 'handleViewBox',\n        value: function handleViewBox(currentPage) {\n            var width = this.state.viewBox.width;\n\n            // 多条件判断\n            if (this.end - 2 >= this.maxWidth) {\n                // 左临界\n                if (currentPage < this.start + Math.floor(width / 2)) {\n                    var list = [];\n                    for (var i = this.start + 1; i < this.start + 1 + width; i++) {\n                        list.push(i);\n                    }\n                    // console.log('l', list);\n                    this.setState({\n                        viewBox: Object.assign(this.state.viewBox, {\n                            list: list,\n                            currentPage: currentPage,\n                            before: false,\n                            after: true\n                        })\n                    }, function () {\n                        // console.log('handleViewBox l', this.state.viewBox)\n                    });\n                }\n                // 右临界\n                if (currentPage > this.end - Math.ceil(width / 2)) {\n                    var _list = [];\n                    for (var _i = this.end - width; _i < this.end; _i++) {\n                        _list.push(_i);\n                    }\n                    // console.log('r', list);\n                    this.setState({\n                        viewBox: Object.assign(this.state.viewBox, {\n                            list: _list,\n                            currentPage: currentPage,\n                            before: true,\n                            after: false\n                        })\n                    }, function () {\n                        // console.log('handleViewBox r', this.state.viewBox)\n                    });\n                }\n                // 通常情况\n                if (currentPage >= this.start + Math.floor(width / 2) && currentPage <= this.end - Math.ceil(width / 2)) {\n                    var _list2 = [];\n                    var _i2 = currentPage - Math.floor(width / 2);\n                    // 重新判断临界条件\n                    if (_i2 < 2) _i2 = 2;\n                    if (_i2 > this.end - width) _i2 = this.end - width;\n                    while (width--) {\n                        _list2.push(_i2++);\n                    }\n                    // console.log('n', list);\n                    this.setState({\n                        viewBox: Object.assign(this.state.viewBox, {\n                            list: _list2,\n                            currentPage: currentPage,\n                            before: true,\n                            after: true\n                        })\n                    }, function () {\n                        // console.log('handleViewBox n', this.state.viewBox)\n                    });\n                }\n            } else {\n                this.setState({\n                    viewBox: Object.assign(this.state.viewBox, {\n                        currentPage: currentPage,\n                        before: false,\n                        after: false\n                    })\n                }, function () {\n                    // console.log('handleViewBox', this.state.viewBox)\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            // console.log(this.start, this.end, this.state.viewBox.currentPage, this.state.viewBox.list);\n            var pageInfo = this.state.pageInfo;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: ['d-f ac jc-b', this.props.style || 'paging-normal'].join(' ') },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'fs12' },\n                        '\\u5171',\n                        _react2.default.createElement(\n                            'strong',\n                            { className: 'plr4' },\n                            pageInfo.total\n                        ),\n                        '\\u6761\\uFF0C\\u6BCF\\u9875',\n                        _react2.default.createElement(\n                            'strong',\n                            { className: 'plr4' },\n                            pageInfo.maxToShow\n                        ),\n                        '\\u6761'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'paging-viewbox' },\n                        _react2.default.createElement('span', { className: 'btn-paging arrow-left', onClick: function onClick() {\n                                return _this3.handleChangePageLeft();\n                            } }),\n                        _react2.default.createElement(\n                            'span',\n                            { onClick: function onClick() {\n                                    return _this3.handleChangePage(_this3.start);\n                                }, className: ['btn-paging', this.start === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ') },\n                            this.start\n                        ),\n                        this.state.viewBox.before ? _react2.default.createElement(\n                            'span',\n                            { className: 'mr8' },\n                            '...'\n                        ) : null,\n                        this.state.viewBox.list.map(function (item, i) {\n                            // console.log(item, this.state.viewBox.currentPage);\n                            return _react2.default.createElement(\n                                'span',\n                                { key: i, onClick: function onClick() {\n                                        return _this3.handleChangePage(item);\n                                    }, className: ['btn-paging', item === _this3.state.viewBox.currentPage ? 'btn-active' : ''].join(' ') },\n                                item\n                            );\n                        }),\n                        this.state.viewBox.after ? _react2.default.createElement(\n                            'span',\n                            { className: 'mr8' },\n                            '...'\n                        ) : null,\n                        this.state.viewBox.width >= 0 ? _react2.default.createElement(\n                            'span',\n                            { onClick: function onClick() {\n                                    return _this3.handleChangePage(_this3.end);\n                                }, className: ['btn-paging', this.end === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ') },\n                            this.end\n                        ) : null,\n                        _react2.default.createElement('span', { className: 'btn-paging arrow-right', onClick: function onClick() {\n                                return _this3.handleChangePageRight();\n                            } })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Paging;\n}(_react.Component);\n\n//# sourceURL=webpack:///./src/component/paging.jsx?");

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