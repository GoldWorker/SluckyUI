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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/table.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/table.jsx":
/*!*********************************!*\
  !*** ./src/component/table.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Table = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Table = exports.Table = function (_Component) {\n    _inherits(Table, _Component);\n\n    function Table() {\n        _classCallCheck(this, Table);\n\n        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));\n\n        _this.checkboxList = [];\n        _this.isAllSelect = false;\n        return _this;\n    }\n\n    _createClass(Table, [{\n        key: 'handleCheckboxChange',\n        value: function handleCheckboxChange(data, i, checked, callback) {\n            var _this2 = this;\n\n            console.log(checked);\n            if (checked) {\n                this.checkboxList.push(data);\n            } else {\n                this.checkboxList.forEach(function (elem, index) {\n                    if (JSON.stringify(data) === JSON.stringify(elem)) {\n                        _this2.checkboxList.splice(index, 1);\n                    }\n                });\n            }\n            callback(this.checkboxList);\n        }\n    }, {\n        key: 'handleCheckboxTieleChange',\n        value: function handleCheckboxTieleChange(e, callback) {\n            this.isAllSelect = e.target.checked;\n            if (this.isAllSelect) {\n                this.checkboxList = [].concat(_toConsumableArray(this.props.dataset));\n                this.props.dataset.map(function (item) {\n                    return _extends({}, item, {\n                        checked: true\n                    });\n                });\n                console.log(this.props.dataset);\n                this.forceUpdate();\n            } else {\n                this.checkboxList = [];\n            }\n            console.log(this.checkboxList, e.target.checked);\n            this.forceUpdate();\n            callback(this.checkboxList);\n        }\n    }, {\n        key: 'handleDisplay',\n        value: function handleDisplay(callback, data, i) {\n            if (callback === undefined) {\n                return true;\n            }\n            return callback(data, i);\n        }\n    }, {\n        key: 'handleClass',\n        value: function handleClass(btnType) {\n            switch (btnType) {\n                case 'hollow':\n                    return 'tag-hollow plr16';\n                case 'text':\n                    return 'tag-text plr8';\n                default:\n                    return 'tag-hollow plr16';\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'p-r' },\n                    this.props.loading ? _react2.default.createElement(\n                        'div',\n                        { className: 'd-f ac jc table-loading' },\n                        this.props.loadingOption ? this.props.loadingOption : _react2.default.createElement('div', { 'data-loader': 'circle' })\n                    ) : null,\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'slucky-table', style: { 'width': this.props.maxWidth, 'maxHeight': this.props.maxHeight } },\n                        _react2.default.createElement(\n                            'div',\n                            { className: ['table-header d-f ac', this.props.fixTitle ? 'table-fix' : ''].join(' ') },\n                            this.props.dataconf.map(function (conf, i) {\n                                // 全选选项\n                                if (conf.checkbox) {\n                                    return _react2.default.createElement('div', { key: i, className: 'ptb24 plr6 d-il ta-c table-title s0', style: { 'width': conf.width } });\n                                    // return (\n                                    //     <div key={i} className=\"ptb16 plr6 d-il ta-c table-title s0\" style={{ 'width': conf.width }}>\n                                    //         <div className=\"checkbox-box-normalize\">\n                                    //             <input id=\"checkbox_normalize_title\" type=\"checkbox\" name=\"c_n\"\n                                    //                 checked={this.isAllSelect} onChange={(e) => this.handleCheckboxTieleChange(e, conf.handle, this.props.dataset)} />\n                                    //             <span className=\"checkbox-hook ta-c\">\n                                    //                 <span className=\"checkbox-hook-in fs12 op0\">✓</span>\n                                    //             </span>\n                                    //             <label htmlFor=\"checkbox_normalize_title\" className=\"p-r z10\"></label>\n                                    //         </div>\n                                    //     </div>\n                                    // );\n                                }\n                                return !conf.checkbox && conf.title ? _react2.default.createElement(\n                                    'div',\n                                    { className: 'ptb24 d-il ta-c table-title s0', style: { 'width': conf.width }, key: i },\n                                    conf.title\n                                ) : null;\n                            })\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'table-content' },\n                            this.props.dataset && this.props.dataset.length == 0 ? _react2.default.createElement(\n                                'div',\n                                { className: 'ta-c pt32 pb16 c-hint-b' },\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '\\u6682\\u65E0\\u6570\\u636E'\n                                )\n                            ) : null,\n                            this.props.dataset.map(function (data, i) {\n                                return _react2.default.createElement(\n                                    'div',\n                                    { className: 'table-list d-f ac jc-b p-r', key: i },\n                                    _this3.props.dataconf.map(function (conf, i) {\n                                        if (conf.progress) {\n                                            return _react2.default.createElement('progress', _defineProperty({ key: i, className: 'p-a w-full', style: { height: conf.progressWidth || 2 + 'px', top: 'unset', bottom: 0 }, max: '100', value: conf.progress && conf.progress(data)\n                                            }, 'className', 'progress-loading-table'));\n                                        }\n                                        return null;\n                                    }),\n                                    _this3.props.dataconf.map(function (conf, k) {\n                                        var _React$createElement2;\n\n                                        return _react2.default.createElement(\n                                            'div',\n                                            (_React$createElement2 = { className: 'd-il ptb12 plr6 ta-c p-r s0 fw-w', style: 'cursor:pointer' }, _defineProperty(_React$createElement2, 'style', { 'width': conf.width }), _defineProperty(_React$createElement2, 'key', k), _React$createElement2),\n                                            !conf.handle && !conf.pipe && !conf.textarea && !conf.progress && !conf.tagList && !conf.input ? _react2.default.createElement(\n                                                'span',\n                                                null,\n                                                data[conf.name]\n                                            ) : null,\n                                            conf.handles ? Table.handleActions(_this3, conf.handles, data, i) : null,\n                                            conf.pipe ? _react2.default.createElement(\n                                                'span',\n                                                { className: 'p-r z10' },\n                                                conf.pipe(data, i)\n                                            ) : null,\n                                            conf.textarea ? _react2.default.createElement('textarea', { rows: '4', className: 'textarea w-full', value: data[conf.name], readonly: true }) : null,\n                                            conf.progress && conf.progress(data) ? Table.handleProgress(data, conf) : null,\n                                            conf.checkbox ? Table.handleCheckbox(_this3, data, i, conf) : null,\n                                            conf.popup ? _react2.default.createElement(\n                                                'div',\n                                                { className: 'pop-box' },\n                                                _react2.default.createElement(\n                                                    'div',\n                                                    { className: 'b-theme pop-toggle plr4' },\n                                                    _react2.default.createElement(\n                                                        'span',\n                                                        { className: 'c-theme' },\n                                                        conf.name || ''\n                                                    ),\n                                                    _react2.default.createElement(\n                                                        'div',\n                                                        { className: 'pop-main pl8' },\n                                                        _react2.default.createElement(\n                                                            'div',\n                                                            { className: 'pop-content p24 bg-b ta-l shadow fs14' },\n                                                            conf.popup(data, i)\n                                                        )\n                                                    )\n                                                )\n                                            ) : null\n                                        );\n                                    })\n                                );\n                            })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Table;\n}(_react.Component);\n\nTable.handleActions = function (self_this, handles, data, i) {\n    return handles.map(function (handleItem, j) {\n        return self_this.handleDisplay(handleItem.display, data, i) ? _react2.default.createElement(\n            'div',\n            { className: 'pop-box', key: j },\n            _react2.default.createElement(\n                'div',\n                { className: ['pop-toggle ptb4 mlr4', self_this.handleClass(handleItem.btnType)].join(' '), onClick: function onClick() {\n                        return handleItem.handle && handleItem.handle(data, i);\n                    } },\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    handleItem.name\n                ),\n                handleItem.pipe ? _react2.default.createElement(\n                    'div',\n                    { className: 'pop-main pr8', style: { 'minWidth': handleItem.width } },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'pop-content paper bor b-side ptb16 plr12 shadow c-text-b' },\n                        handleItem.pipe(data, i)\n                    )\n                ) : null\n            )\n        ) : null;\n    });\n};\n\nTable.handleProgress = function (data, conf) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'd-il' },\n        !conf.pipe ? _react2.default.createElement(\n            'span',\n            { className: 'p-r z10' },\n            data[conf.name]\n        ) : null\n    );\n};\n\nTable.handleCheckbox = function (self_this, data, i, conf) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'checkbox-box-normalize' },\n        _react2.default.createElement('input', { id: 'checkbox_normalize_table' + i,\n            type: 'checkbox',\n            name: 'c_n',\n            trigger: 'core'\n            // checked={data.checked}\n            , onChange: function onChange(e) {\n                return self_this.handleCheckboxChange(data, i, e.target.checked, conf.handle);\n            } }),\n        _react2.default.createElement(\n            'span',\n            { className: 'checkbox-hook ta-c' },\n            _react2.default.createElement(\n                'span',\n                { className: 'checkbox-hook-in fs12 op0' },\n                '\\u2713'\n            )\n        ),\n        _react2.default.createElement('label', { htmlFor: 'checkbox_normalize_table' + i, className: 'p-r z10' })\n    );\n};\n\nTable.handelPopup = function (handleItem) {\n    return _react2.default.createElement('div', { 'class': 'pop-box' });\n};\n\n//# sourceURL=webpack:///./src/component/table.jsx?");

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