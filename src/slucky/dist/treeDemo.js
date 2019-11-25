(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./component/transfer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["./component/transfer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./component/transfer"), require("react")) : factory(root["./component/transfer"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__component_transfer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/treeDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/transfer":
/*!***************************************!*\
  !*** external "./component/transfer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_transfer__;\n\n//# sourceURL=webpack:///external_%22./component/transfer%22?");

/***/ }),

/***/ "./src/treeDemo.jsx":
/*!**************************!*\
  !*** ./src/treeDemo.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _transfer = __webpack_require__(/*! ./component/transfer */ \"./component/transfer\");\n\nvar _transfer2 = _interopRequireDefault(_transfer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DEMO_TREE = [{\n    pid: 0,\n    id: 1,\n    ch: [{\n        pid: 1,\n        id: 11\n    }, {\n        pid: 1,\n        id: 12,\n        ch: [{\n            pid: 12,\n            id: 121,\n            ch: [{\n                pid: 121,\n                id: 1211\n            }]\n        }]\n    }, {\n        pid: 1,\n        id: 13\n    }]\n}, {\n    pid: 0,\n    id: 2,\n    ch: [{\n        pid: 2,\n        id: 21\n    }, {\n        pid: 2,\n        id: 22\n    }]\n}, {\n    pid: 0,\n    id: 3\n}];\n\nvar RootTree = {\n    id: 0,\n    ch: DEMO_TREE\n};\n\nvar TreeDemo = function (_Component) {\n    _inherits(TreeDemo, _Component);\n\n    function TreeDemo() {\n        _classCallCheck(this, TreeDemo);\n\n        var _this = _possibleConstructorReturn(this, (TreeDemo.__proto__ || Object.getPrototypeOf(TreeDemo)).call(this));\n\n        _this.state = {\n            selectedTree: [{ id: 0, ch: [] }, {\n                pid: 0,\n                id: 2,\n                ch: []\n            }, {\n                pid: 2,\n                id: 21\n            }, {\n                pid: 2,\n                id: 22\n            }, {\n                pid: 0,\n                id: 3\n            }],\n            con: 0\n        };\n        return _this;\n    }\n\n    _createClass(TreeDemo, [{\n        key: 'handleChangeTranfer',\n        value: function handleChangeTranfer(selectedTree) {\n            console.log(selectedTree);\n            this.setState({\n                selectedTree: selectedTree\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'button',\n                    { className: 'btn-n', onClick: function onClick() {\n                            return _this2.setState({\n                                selectedTree: [{ id: 0, ch: [] }, {\n                                    pid: 0,\n                                    id: 2,\n                                    ch: []\n                                }, {\n                                    pid: 2,\n                                    id: 21\n                                }, {\n                                    pid: 2,\n                                    id: 22\n                                }]\n                            });\n                        } },\n                    'Reset'\n                ),\n                _react2.default.createElement(_transfer2.default, {\n                    value: this.state.selectedTree,\n                    data: RootTree,\n                    onChange: function onChange(nodeList) {\n                        return _this2.handleChangeTranfer(nodeList);\n                    } })\n            );\n        }\n    }]);\n\n    return TreeDemo;\n}(_react.Component);\n\nexports.default = TreeDemo;\n\n//# sourceURL=webpack:///./src/treeDemo.jsx?");

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