<<<<<<< HEAD
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/tab.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/tab.jsx":
/*!*******************************!*\
  !*** ./src/component/tab.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tab = function (_Component) {\n    _inherits(Tab, _Component);\n\n    function Tab() {\n        _classCallCheck(this, Tab);\n\n        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));\n    }\n\n    _createClass(Tab, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                this.props.children\n            );\n        }\n    }]);\n\n    return Tab;\n}(_react.Component);\n\nexports.default = Tab;\n\nvar Group = function (_Component2) {\n    _inherits(Group, _Component2);\n\n    function Group(props) {\n        _classCallCheck(this, Group);\n\n        var _this2 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));\n\n        _this2.id = Math.random().toString(36).substring(2);\n        _this2.state = {\n            currentTab: _this2.props.tabIndex || 0\n        };\n        return _this2;\n    }\n\n    _createClass(Group, [{\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: ['tab-box-' + (this.props.layout || 'lr'), this.props.className].join(' ') },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'tab-contrl s0' },\n                    this.props.option && this.props.option.map(function (item, index) {\n                        return _react2.default.createElement(\n                            'label',\n                            { htmlFor: _this3.id + index, key: index, onClick: function onClick() {\n                                    return _this3.setState({ currentTab: index });\n                                }, className: [_this3.state.currentTab == index ? 'tab-label-active' : ''].join(' ') },\n                            item.label\n                        );\n                    }),\n                    this.props.children && _react2.default.Children.map(this.props.children, function (item, index) {\n                        return _react2.default.createElement(\n                            'label',\n                            { htmlFor: _this3.id + index, key: index, onClick: function onClick() {\n                                    return _this3.setState({ currentTab: index });\n                                }, className: [_this3.state.currentTab == index ? 'tab-label-active' : ''].join(' ') },\n                            item.props.label\n                        );\n                    })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'tab-container flex1 b-side pl16', style: { minHeight: this.props.minHeight } },\n                    this.props.option && this.props.option.map(function (item, index) {\n                        return _react2.default.createElement(\n                            _react2.default.Fragment,\n                            { key: index },\n                            _react2.default.createElement('input', { type: 'radio',\n                                id: _this3.id + index,\n                                name: _this3.id,\n                                defaultChecked: (_this3.props.tabIndex || 0) == index\n                            }),\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'tab-content' },\n                                item.content\n                            )\n                        );\n                    }),\n                    this.props.children && _react2.default.Children.map(this.props.children, function (item, index) {\n                        return _react2.default.createElement(\n                            _react2.default.Fragment,\n                            { key: index },\n                            _react2.default.createElement('input', { type: 'radio',\n                                id: _this3.id + index,\n                                name: _this3.id,\n                                defaultChecked: (_this3.props.tabIndex || 0) == index\n                            }),\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'tab-content' },\n                                _react2.default.cloneElement(item, {})\n                            )\n                        );\n                    })\n                )\n            );\n        }\n    }]);\n\n    return Group;\n}(_react.Component);\n\nTab.Group = Group;\n\n//# sourceURL=webpack:///./src/component/tab.jsx?");

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
=======
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits"],t);else{var r="object"==typeof exports?t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits")):t(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e,t,r,n,i,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=59)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},2:function(e,t){e.exports=r},3:function(e,t){e.exports=n},4:function(e,t){e.exports=i},5:function(e,t){e.exports=a},59:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r(1),i=r.n(n),a=r(2),o=r.n(a),l=r(3),s=r.n(l),u=r(4),p=r.n(u),c=r(5),b=r.n(c),f=r(0),m=r.n(f),h=function(e){function t(){return i()(this,t),s()(this,p()(t).apply(this,arguments))}return b()(t,e),o()(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,this.props.children)}}]),t}(f.Component),d=function(e){function t(e){var r;return i()(this,t),(r=s()(this,p()(t).call(this,e))).id=Math.random().toString(36).substring(2),r.state={currentTab:r.props.tabIndex||0},r}return b()(t,e),o()(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:["tab-box-".concat(this.props.layout||"lr"),this.props.className].join(" ")},m.a.createElement("div",{className:"tab-contrl s0"},this.props.option&&this.props.option.map((function(t,r){return m.a.createElement("label",{htmlFor:e.id+r,key:r,onClick:function(){return e.setState({currentTab:r})},className:[e.state.currentTab==r?"tab-label-active":""].join(" ")},t.label)})),this.props.children&&m.a.Children.map(this.props.children,(function(t,r){return m.a.createElement("label",{htmlFor:e.id+r,key:r,onClick:function(){return e.setState({currentTab:r})},className:[e.state.currentTab==r?"tab-label-active":""].join(" ")},t.props.label)}))),m.a.createElement("div",{className:"tab-container flex1 b-side",style:{minHeight:this.props.minHeight}},this.props.option&&this.props.option.map((function(t,r){return m.a.createElement(m.a.Fragment,{key:r},m.a.createElement("input",{type:"radio",id:e.id+r,name:e.id,defaultChecked:(e.props.tabIndex||0)==r}),m.a.createElement("div",{className:["tab-content","simple"==e.props.cssMode?"transfer-simple":"transfer-all"].join(" ")},t.content))})),this.props.children&&m.a.Children.map(this.props.children,(function(t,r){return m.a.createElement(m.a.Fragment,{key:r},m.a.createElement("input",{type:"radio",id:e.id+r,name:e.id,defaultChecked:(e.props.tabIndex||0)==r}),m.a.createElement("div",{className:["tab-content","simple"==e.props.cssMode?"transfer-simple":"transfer-all"].join(" ")},m.a.cloneElement(t,{})))}))))}}]),t}(f.Component);h.Group=d}})}));
>>>>>>> dev
