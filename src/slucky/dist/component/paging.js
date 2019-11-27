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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/paging.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/paging.jsx":
/*!**********************************!*\
  !*** ./src/component/paging.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paging; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Paging =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Paging, _Component);\n\n  function Paging(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Paging);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Paging).call(this, props));\n    _this.start = 1;\n    _this.maxWidth = 5;\n    _this.minWidth = '';\n    _this.end = ''; // 分页对象\n\n    _this.state = {\n      pageInfo: {\n        total: _this.props.pageInfo.total || 0,\n        maxToShow: _this.props.pageInfo.maxToShow || 0,\n        currentPage: _this.props.pageInfo.currentPage || 1\n      },\n      viewBox: {\n        width: '',\n        // 可视容器的宽度\n        list: [],\n        // 可视容器列表\n        before: false,\n        // 前后省略号\n        after: false,\n        currentPage: '' // 当前页\n\n      }\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Paging, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.init();\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      var _this2 = this;\n\n      // 在重新render之前更新state不会重新触发生命周期\n      // console.log('componentWillReceiveProps', nextProps, this.props);\n      this.setState({\n        pageInfo: {\n          total: nextProps.pageInfo.total || 0,\n          maxToShow: nextProps.pageInfo.maxToShow || 0,\n          currentPage: nextProps.pageInfo.currentPage || 1\n        },\n        viewBox: {\n          width: '',\n          // 可视容器的宽度\n          list: [],\n          // 可视容器列表\n          before: false,\n          // 前后省略号\n          after: false,\n          currentPage: '' // 当前页\n\n        }\n      }, function () {\n        if (nextProps.pageInfo.currentPage && _this2.state.viewBox) {\n          _this2.init(function () {\n            return _this2.handleResizeViewBox(nextProps.pageInfo.currentPage);\n          });\n        } else {\n          _this2.init();\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init(cb) {\n      var pageInfo = this.state.pageInfo;\n      this.end = Math.ceil(pageInfo.total / pageInfo.maxToShow);\n      this.end > 0 ? this.end : this.end = 1; // console.log(this.end);\n\n      this.minWidth = this.end - 2;\n      var currentWidth = this.maxWidth > this.minWidth ? this.minWidth : this.maxWidth;\n      this.setState({\n        viewBox: {\n          width: currentWidth,\n          list: function (width) {\n            var list = [];\n\n            for (var i = 1; i <= width; i++) {\n              var k = i;\n              list.push(++k);\n            } // console.log(list);\n\n\n            return list;\n          }(currentWidth),\n          before: false,\n          after: this.maxWidth < this.minWidth,\n          currentPage: pageInfo.currentPage || 1\n        }\n      }, function () {\n        // console.log('init', this.state.viewBox);\n        cb && cb();\n      });\n    }\n  }, {\n    key: \"handleChangePage\",\n    value: function handleChangePage(currentPage) {\n      var isOnAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      // 保证临界条件\n      var currentPageSelf = parseInt(currentPage);\n\n      if (currentPageSelf < this.start) {\n        currentPageSelf = this.start;\n      }\n\n      if (currentPageSelf > this.end) {\n        currentPageSelf = this.end;\n      }\n\n      this.props.isSingleDataFlow && this.handleResizeViewBox(currentPageSelf);\n      this.props.onAction && this.props.onAction(currentPageSelf);\n    }\n  }, {\n    key: \"handleResizeViewBox\",\n    value: function handleResizeViewBox(currentPage) {\n      // 保证临界条件\n      var currentPageSelf = parseInt(currentPage);\n\n      if (currentPageSelf < this.start) {\n        currentPageSelf = this.start;\n      }\n\n      if (currentPageSelf > this.end) {\n        currentPageSelf = this.end;\n      }\n\n      this.handleViewBox(currentPageSelf);\n    }\n  }, {\n    key: \"handleChangePageLeft\",\n    value: function handleChangePageLeft() {\n      this.handleChangePage(--this.state.viewBox.currentPage);\n    }\n  }, {\n    key: \"handleChangePageRight\",\n    value: function handleChangePageRight() {\n      this.handleChangePage(++this.state.viewBox.currentPage);\n    } // 维护viewBox\n\n  }, {\n    key: \"handleViewBox\",\n    value: function handleViewBox(currentPage) {\n      // console.log('handleViewBox', this.state);\n      var width = this.state.viewBox.width; // 多条件判断\n\n      if (this.end - 2 >= this.maxWidth) {\n        // 左临界\n        if (currentPage < this.start + Math.floor(width / 2)) {\n          var list = [];\n\n          for (var i = this.start + 1; i < this.start + 1 + width; i++) {\n            list.push(i);\n          } // console.log('l', list);\n\n\n          this.setState({\n            viewBox: Object.assign(this.state.viewBox, {\n              list: list,\n              currentPage: currentPage,\n              before: false,\n              after: true\n            })\n          }, function () {// console.log('handleViewBox l', this.state.viewBox)\n          });\n        } // 右临界\n\n\n        if (currentPage > this.end - Math.ceil(width / 2)) {\n          var _list = [];\n\n          for (var _i = this.end - width; _i < this.end; _i++) {\n            _list.push(_i);\n          } // console.log('r', list);\n\n\n          this.setState({\n            viewBox: Object.assign(this.state.viewBox, {\n              list: _list,\n              currentPage: currentPage,\n              before: true,\n              after: false\n            })\n          }, function () {// console.log('handleViewBox r', this.state.viewBox)\n          });\n        } // 通常情况\n\n\n        if (currentPage >= this.start + Math.floor(width / 2) && currentPage <= this.end - Math.ceil(width / 2)) {\n          var _list2 = [];\n\n          var _i2 = currentPage - Math.floor(width / 2); // 重新判断临界条件\n\n\n          if (_i2 < 2) {\n            _i2 = 2;\n          }\n\n          if (_i2 > this.end - width) {\n            _i2 = this.end - width;\n          }\n\n          while (width--) {\n            _list2.push(_i2++);\n          } // console.log('n', list);\n\n\n          this.setState({\n            viewBox: Object.assign(this.state.viewBox, {\n              list: _list2,\n              currentPage: currentPage,\n              before: true,\n              after: true\n            })\n          }, function () {// console.log('handleViewBox n', this.state.viewBox)\n          });\n        }\n      } else {\n        this.setState({\n          viewBox: Object.assign(this.state.viewBox, {\n            currentPage: currentPage,\n            before: false,\n            after: false\n          })\n        }, function () {// console.log('handleViewBox', this.state.viewBox)\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      // console.log(this.start, this.end, this.state.viewBox.currentPage, this.state.viewBox.list);\n      var pageInfo = this.state.pageInfo;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: ['d-f ac jc-b', this.props.style || 'paging-normal'].join(' ')\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"fs12\"\n      }, \"\\u5171\", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"strong\", {\n        className: \"plr4\"\n      }, pageInfo.total), \"\\u6761\\uFF0C\\u6BCF\\u9875\", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"strong\", {\n        className: \"plr4\"\n      }, pageInfo.maxToShow), \"\\u6761\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"paging-viewbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"btn-paging arrow-left\",\n        onClick: function onClick() {\n          return _this3.handleChangePageLeft();\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        onClick: function onClick() {\n          return _this3.handleChangePage(_this3.start);\n        },\n        className: ['btn-paging', this.start === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')\n      }, this.start), this.state.viewBox.before ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"mr8\"\n      }, \"...\") : null, this.state.viewBox.list.map(function (item, i) {\n        // console.log(item, this.state.viewBox.currentPage);\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n          key: i,\n          onClick: function onClick() {\n            return _this3.handleChangePage(item);\n          },\n          className: ['btn-paging', item === _this3.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')\n        }, item);\n      }), this.state.viewBox.after ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"mr8\"\n      }, \"...\") : null, this.state.viewBox.width >= 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        onClick: function onClick() {\n          return _this3.handleChangePage(_this3.end);\n        },\n        className: ['btn-paging', this.end === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')\n      }, this.end) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"btn-paging arrow-right\",\n        onClick: function onClick() {\n          return _this3.handleChangePageRight();\n        }\n      }))));\n    }\n  }]);\n\n  return Paging;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/component/paging.jsx?");

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