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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/search.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/search.jsx":
/*!**********************************!*\
  !*** ./src/component/search.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Search = function (_Component) {\n    _inherits(Search, _Component);\n\n    function Search(props) {\n        _classCallCheck(this, Search);\n\n        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));\n\n        _this.state = {\n            value: _this.props.value || '',\n            selectedValue: '',\n            selectedLabel: _this.props.defaultValue || '',\n            data: _this.props.option || [],\n            dataCache: _this.props.option || []\n        };\n        _this.id = Math.random().toString(36).substring(2);\n        return _this;\n    }\n\n    _createClass(Search, [{\n        key: 'handleChange',\n        value: function handleChange(value) {\n            var _this2 = this;\n\n            var dataCache = [];\n            for (var i = 0; i < this.state.data.length; i++) {\n                var item = this.state.data[i];\n                if (item.indexOf(value) != -1) {\n                    dataCache.push(item);\n                }\n            }\n\n            this.setState({\n                value: value,\n                dataCache: dataCache\n            }, function () {\n                _this2.props.onChange && _this2.props.onChange(value);\n            });\n        }\n    }, {\n        key: 'handleEnterKey',\n        value: function handleEnterKey(e) {\n            if (e.nativeEvent.keyCode === 13) {\n                this.props.onSearch && this.props.onSearch(e.target.value);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'select-down-modern' },\n                this.props.labelName ? _react2.default.createElement(\n                    'label',\n                    { htmlFor: this.id, className: 'pb4 mb0 fs12 d-b' },\n                    this.props.labelName\n                ) : null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'input-normal p-r d-f ac', style: { width: this.props.width || 196 + 'px' } },\n                    _react2.default.createElement('img', { className: 'icon logo-search mr8 s0', src: __webpack_require__(/*! ../icons/search.svg */ \"./src/icons/search.svg\"), alt: '', onClick: function onClick() {\n                            return _this3.props.onSearch && _this3.props.onSearch();\n                        } }),\n                    _react2.default.createElement('input', {\n                        id: this.id,\n                        type: 'search',\n                        className: 'input-ghost w-full',\n                        placeholder: this.props.placeholder || '',\n                        maxLength: this.props.maxLength || 100,\n                        onChange: function onChange(e) {\n                            return _this3.handleChange(e.target.value);\n                        },\n                        onKeyPress: function onKeyPress(e) {\n                            return _this3.handleEnterKey(e);\n                        },\n                        value: this.state.value })\n                ),\n                this.props.option ? _react2.default.createElement(\n                    'ul',\n                    { className: 'select-option paper', scrollbar: 'normal' },\n                    this.state.dataCache.map(function (item, index) {\n                        return _react2.default.createElement(\n                            'li',\n                            { onMouseDown: function onMouseDown() {\n                                    return _this3.handleChange(item);\n                                }, key: index },\n                            item\n                        );\n                    })\n                ) : null\n            );\n        }\n    }]);\n\n    return Search;\n}(_react.Component);\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./src/component/search.jsx?");

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzODkyMzkxMzU0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1NjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTY5LjM4NjY2NyA4NjYuOTg2NjY3bC0xMzYuNTMzMzM0LTEzNi41MzMzMzRjOTMuODY2NjY3LTEyNi4yOTMzMzMgMTIyLjg4LTMwNy4yIDIyLjE4NjY2Ny00ODEuMjgtNTkuNzMzMzMzLTEwMi40LTE1OC43Mi0xNzcuNDkzMzMzLTI3My4wNjY2NjctMjAzLjA5MzMzM0MyNzMuMDY2NjY3LTIzLjg5MzMzMyAzLjQxMzMzMyAyMjMuNTczMzMzIDM3LjU0NjY2NyA1MjUuNjUzMzMzYzE3LjA2NjY2NyAxNTMuNiAxMTcuNzYgMjg4LjQyNjY2NyAyNTkuNDEzMzMzIDM1MS41NzMzMzQgMTU4LjcyIDcxLjY4IDMxOS4xNDY2NjcgMzkuMjUzMzMzIDQzNS4yLTQ2LjA4bDEzNi41MzMzMzMgMTM2LjUzMzMzM2MyNy4zMDY2NjcgMjcuMzA2NjY3IDczLjM4NjY2NyAyNy4zMDY2NjcgMTAyLjQgMCAyNS42LTI3LjMwNjY2NyAyNS42LTczLjM4NjY2Ny0xLjcwNjY2Ni0xMDAuNjkzMzMzTTE3MC42NjY2NjcgNDc2LjE2YzAtMTcwLjY2NjY2NyAxMzYuNTMzMzMzLTMwNS40OTMzMzMgMzA1LjQ5MzMzMy0zMDUuNDkzMzMzIDE3MC42NjY2NjcgMCAzMDUuNDkzMzMzIDEzNi41MzMzMzMgMzA1LjQ5MzMzMyAzMDUuNDkzMzMzIDAgMTcwLjY2NjY2Ny0xMzYuNTMzMzMzIDMwNS40OTMzMzMtMzA1LjQ5MzMzMyAzMDUuNDkzMzMzLTE3MC42NjY2NjcgMC0zMDUuNDkzMzMzLTEzNi41MzMzMzMtMzA1LjQ5MzMzMy0zMDUuNDkzMzMzIiBwLWlkPSIyNTY1IiBmaWxsPSIjZTZlNmU2Ij48L3BhdGg+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/icons/search.svg?");

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