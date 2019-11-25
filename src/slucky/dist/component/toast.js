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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/toast.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/toast.jsx":
/*!*********************************!*\
  !*** ./src/component/toast.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar toastRef = '';\n\nvar Toast = function (_React$Component) {\n    _inherits(Toast, _React$Component);\n\n    function Toast() {\n        _classCallCheck(this, Toast);\n\n        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));\n\n        _this.add = function (_ref) {\n            var title = _ref.title,\n                content = _ref.content,\n                status = _ref.status;\n\n            //超过5个就弹出一个\n            if (_this.state.list.length > 5) {\n                var data = _this.state.list;\n                data.shift();\n                _this.setState({ list: data });\n            }\n            if (!_this.timer) {\n                // console.log(this.timer,'timer');\n                _this.timer = setInterval(function () {\n                    var data = _this.state.list;\n                    data.shift();\n                    _this.setState({ list: data });\n\n                    if (!data.length) {\n                        _this.timer = clearInterval(_this.timer);\n                    }\n                }, 3000);\n            }\n            if (!_this.isStop) {\n                _this.setState({\n                    list: [].concat(_toConsumableArray(_this.state.list), [{\n                        title: title,\n                        content: content,\n                        status: status\n                    }])\n                });\n            }\n        };\n\n        _this.state = {\n            list: [],\n            toggle: false\n        };\n        _this.createPortalContainer();\n        _this.timer = undefined;\n        _this.isStop = false;\n        return _this;\n    }\n\n    _createClass(Toast, [{\n        key: 'stop',\n        value: function stop() {\n            this.isStop = true;\n        }\n    }, {\n        key: 'goon',\n        value: function goon() {\n            this.isStop = false;\n        }\n    }, {\n        key: 'handleClose',\n        value: function handleClose(index) {\n            var data = this.state.list;\n            data.splice(index, 1);\n            this.setState({ list: data });\n        }\n    }, {\n        key: 'createPortalContainer',\n        value: function createPortalContainer() {\n            var doc = window.document;\n            this.node = doc.createElement('div');\n            doc.body.appendChild(this.node);\n        }\n    }, {\n        key: 'clearPortalContainer',\n        value: function clearPortalContainer() {\n            window.document.body.removeChild(this.node);\n        }\n    }, {\n        key: 'handleMapStatus',\n        value: function handleMapStatus() {\n            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';\n\n            switch (status) {\n                case 'success':\n                    return 'c-success';\n                case 'warn':\n                    return 'c-warn';\n                case 'fail':\n                    return 'c-fail';\n                default:\n                    return 'c-success';\n            }\n        }\n    }, {\n        key: 'handleMapTitle',\n        value: function handleMapTitle() {\n            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';\n\n            switch (status) {\n                case 'success':\n                    return '成功';\n                case 'warn':\n                    return '警告';\n                case 'fail':\n                    return '重试';\n                default:\n                    return false;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            // console.log(this.props.toggle, this.state.list, this.node);\n\n            return (0, _reactDom.createPortal)(_react2.default.createElement(\n                'div',\n                { className: 'toastlists-normalize-box' },\n                this.state.list.map(function (item, index) {\n                    return _react2.default.createElement(\n                        'div',\n                        { className: 'toastlist', key: index },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'toast-item paper p-r' },\n                            _react2.default.createElement(\n                                'span',\n                                { onClick: function onClick() {\n                                        return _this2.handleClose(index);\n                                    }, className: 'p-a', style: { top: 4, right: 8 + 'px', cursor: 'pointer' } },\n                                'x'\n                            ),\n                            _react2.default.createElement(\n                                'div',\n                                { className: ['pb8', _this2.handleMapStatus(item.status)].join(' '), style: { minWidth: 256 + 'px' } },\n                                item.title || _this2.handleMapTitle(item.status)\n                            ),\n                            _react2.default.createElement(\n                                'div',\n                                { className: '' },\n                                item.content\n                            )\n                        )\n                    );\n                })\n            ), this.node);\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            this.clearPortalContainer();\n        }\n    }]);\n\n    return Toast;\n}(_react2.default.Component);\n\nexports.default = Toast;\n\n\nToast.add = function (_ref2) {\n    var title = _ref2.title,\n        content = _ref2.content,\n        status = _ref2.status;\n\n    //保持一个实例\n    if (!document.getElementById('slucky_toast')) {\n        toastRef = _react2.default.createRef();\n        var component = _react2.default.createElement(Toast, { ref: toastRef });\n        var div = document.createElement('div');\n        div.id = 'slucky_toast';\n        document.body.append(div);\n        _reactDom2.default.render(component, div);\n    }\n    toastRef.current.add({ title: title, content: content, status: status });\n};\n\nToast.success = function (content) {\n    Toast.add({ title: '成功', content: content, status: 'success' });\n};\n\nToast.error = function (content) {\n    Toast.add({ title: '错误', content: content, status: 'fail' });\n};\n\nToast.warn = function (content) {\n    Toast.add({ title: '提示', content: content, status: 'warn' });\n};\n\nToast.stop = function () {\n    toastRef.current.stop();\n};\n\nToast.goon = function () {\n    toastRef.current.goon();\n};\n\n//# sourceURL=webpack:///./src/component/toast.jsx?");

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