(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./component/input"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["./component/input", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./component/input"), require("react")) : factory(root["./component/input"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__component_input__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/securityDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/input":
/*!************************************!*\
  !*** external "./component/input" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_input__;\n\n//# sourceURL=webpack:///external_%22./component/input%22?");

/***/ }),

/***/ "./src/securityDemo.jsx":
/*!******************************!*\
  !*** ./src/securityDemo.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _input = __webpack_require__(/*! ./component/input */ \"./component/input\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SecurityDemo = function (_Component) {\n    _inherits(SecurityDemo, _Component);\n\n    function SecurityDemo() {\n        _classCallCheck(this, SecurityDemo);\n\n        var _this = _possibleConstructorReturn(this, (SecurityDemo.__proto__ || Object.getPrototypeOf(SecurityDemo)).call(this));\n\n        _this.state = {\n            //%3Cimg%20src=1%20onerror=alert(document.cookie)%3E%3C/div%3E\n            // <script charset=\"utf-8\">alert(123)</script>\n            // xss: '<div class=\"btn-n\" onclick=\"(function(){console.log(123)})()\">asdf<img src=1 onerror=alert(document.cookie)></div>'\n            xss: ''\n        };\n        return _this;\n    }\n\n    _createClass(SecurityDemo, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.refs.xss.innerHTML = this.state.xss;\n            // const myScript = document.createElement('script');\n            // myScript.type = 'text/javascript';\n            // myScript.innerHTML = 'alert(123)';\n            // document.body.appendChild(myScript);\n\n            // this.refs.xss1.innerHTML = this.getParams('name');\n        }\n    }, {\n        key: 'getParams',\n        value: function getParams(key) {\n            var reg = new RegExp('(&|^)' + key + '=([^&]*)($|&)');\n            var res = window.location.search.substr(1).match(reg);\n            if (res != null) {\n                return unescape(res[2]);\n            }\n            return null;\n        }\n    }, {\n        key: 'requestPost',\n        value: function requestPost() {\n            // const xhr = new XMLHttpRequest();\n            // const url = 'http://www.brandf.cn:8010/article';\n            // // let fd = new FormData();\n            // // fd.append('people', '123');\n            // // fd.append('ck', '123');\n            // const data = JSON.stringify({\n            //     content: 'csrf23333',\n            //     id: '',\n            //     title: 'csrf23333'\n            // });\n            // xhr.open('POST', url);\n            // xhr.setRequestHeader('content-type', 'application/json');\n            // xhr.withCredentials = true;\n            // xhr.send(data);\n            // xhr.onreadystatechange = function () {\n            //     if (xhr.readyState == 4 && xhr.status == 200) {\n            //         console.log(xhr.response);\n            //     }\n            // };\n        }\n    }, {\n        key: 'haneldChangeXSS',\n        value: function haneldChangeXSS(v) {\n            this.setState({ xss: v });\n            // this.refs.xss.innerHTML = v;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_input2.default, { maxLength: 300, onChange: function onChange(v) {\n                        return _this2.haneldChangeXSS(v);\n                    } }),\n                document.innerHtml = this.state.xss,\n                _react2.default.createElement('div', { id: 'xss', ref: 'xss' }),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        'getParams'\n                    ),\n                    'wellcome! ',\n                    _react2.default.createElement('div', { ref: 'xss1' })\n                ),\n                _react2.default.createElement(\n                    'iframe',\n                    { name: 'steal', className: 'd-n', ref: 'csrf' },\n                    _react2.default.createElement(\n                        'script',\n                        null,\n                        this.requestPost()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SecurityDemo;\n}(_react.Component);\n\nexports.default = SecurityDemo;\n\n\n{/* <img src=1 onerror=function(){var x = new XMLHttpRequest();var u = 'http://localhost:8010/comment/normal';var d = JSON.stringify({article_id: '58',comment: '1233211234567'});x.open('POST', u);x.setRequestHeader('content-type', 'application/json');x.withCredentials = true;x.send(d);}/> */}\n\n//# sourceURL=webpack:///./src/securityDemo.jsx?");

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