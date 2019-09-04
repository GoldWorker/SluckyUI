(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./treeNode"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["./treeNode", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./treeNode"), require("react")) : factory(root["./treeNode"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__treeNode__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component/tree.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/tree.jsx":
/*!********************************!*\
  !*** ./src/component/tree.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Tree = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _treeNode = __webpack_require__(/*! ./treeNode */ \"./treeNode\");\n\nvar _treeNode2 = _interopRequireDefault(_treeNode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tree = exports.Tree = function (_Component) {\n    _inherits(Tree, _Component);\n\n    function Tree(props) {\n        _classCallCheck(this, Tree);\n\n        var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));\n\n        _this.state = {\n            _Tree: _this.props.data || {}\n        };\n        return _this;\n    }\n\n    _createClass(Tree, [{\n        key: 'handleClickNode',\n        value: function handleClickNode(node) {\n            // Tree.delNode(node);\n            // Tree.mergeTree();\n            // Tree.cloneTree(node);\n            // Tree.getNodeRouter(node);\n            this.props.onSelect && this.props.onSelect(Tree.cloneTree(node), Tree.getNodeRouter(node, this.state._Tree));\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_treeNode2.default, { data: this.props.data, onClick: function onClick(node) {\n                        return _this2.handleClickNode(node);\n                    } })\n            );\n        }\n    }]);\n\n    return Tree;\n}(_react.Component);\n\n/**\r\n * @description: 合并树\r\n * @param {tree} \r\n * @return: tree\r\n */\n\n\nTree.mergeTree = function () {\n    var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: 0 };\n    var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { pid: 0, id: '' };\n\n    //遍历更新树\n    var nodeList = Tree.getTree2List(node, true);\n    while (nodeList.length) {\n        var item = nodeList.shift();\n        var isExist = Tree.getNodeById(item.id, tree);\n        // 节点相同时更新属性，不同时，添加节点\n        if (isExist) {\n            var treeItem = Tree.getNodeById(item.id, tree);\n            var _treeItem = treeItem,\n                ch = _treeItem.ch;\n\n            treeItem = Object.assign(treeItem, Object.assign(item, ch ? { ch: ch } : {}));\n        } else {\n            var pNode = Tree.getNodeById(item.pid, tree);\n            if (pNode.ch) {\n                pNode.ch.push(item);\n            } else {\n                pNode.ch = [item];\n            }\n        }\n    }\n    return tree;\n};\n\n/**\r\n * @description: 树形数据结构扁平化\r\n * @param {tree} \r\n * @param {isDeep} 是否深度复制/不保留子节点信息\r\n * @return: list\r\n */\nTree.getTree2List = function (node) {\n    var isDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    //遍历目标树\n    var queue = [];\n    var stack = [];\n    queue.push(node);\n    while (queue.length) {\n        var item = queue.shift();\n        if (item.ch) {\n            isDeep ? stack.push(Object.assign({}, _extends({}, item), _extends({ ch: [] }, attr))) : stack.push(Object.assign(item, _extends({}, attr)));\n            queue.unshift.apply(queue, _toConsumableArray(item.ch));\n        } else {\n            isDeep ? stack.push(Object.assign({}, _extends({}, item), _extends({}, attr))) : stack.push(Object.assign(item, _extends({}, attr)));\n        }\n    }\n    return stack;\n};\n\n/**\r\n * @description: 根据节点id获取节点\r\n * @param {type} \r\n * @return: \r\n */\nTree.getNodeById = function (id) {\n    var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { id: 0 };\n\n    var map = Tree.getNodeList2Map(Tree.getTree2List(node));\n    return map[id] ? map[id] : undefined;\n};\n\n/**\r\n * @description: 获取list的map结构\r\n * @param {type} \r\n * @return: \r\n */\nTree.getNodeList2Map = function () {\n    var nodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n    var map = {};\n    nodeList.forEach(function (item) {\n        map[item.id] = item;\n    });\n    return map;\n};\n\n/**\r\n * @description: 删除节点\r\n * @param {type} \r\n * @return: \r\n */\nTree.delNode = function (targetNode) {\n    var tree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { id: 0 };\n\n    var nodeList = Tree.getTree2List(tree);\n    var map = Tree.getNodeList2Map(nodeList);\n    var pNode = map[targetNode.pid];\n\n    if (pNode && pNode.ch) {\n        for (var i = 0; i < pNode.ch.length; i++) {\n            var elem = pNode.ch[i];\n            if (elem.id == targetNode.id) {\n                pNode.ch.splice(i, 1);\n            }\n        }\n    }\n    return tree;\n\n    // const queue = [];\n    // queue.push(tree);\n    // while (queue.length) {\n    //     const item = queue.shift();\n    //     if (item.id == targetNode.id && map[item.pid] && map[item.pid].ch) {\n    //         //找到父节点&del node\n    //         for (let i = 0; i < map[item.pid].ch.length; i++) {\n    //             const elem = map[item.pid].ch[i];\n    //             if (elem.id == targetNode.id) {\n    //                 map[item.pid].ch.splice(i, 1);\n    //             }\n    //         }\n    //         return tree;\n    //     }\n    //     if (item.ch) {\n    //         queue.unshift(...item.ch);\n    //     }\n    // }\n    // return tree;\n};\n\n/**\r\n * @description: 克隆树\r\n * @param {type} \r\n * @return: \r\n */\nTree.cloneTree = function () {\n    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: 0 };\n\n    var nodeList = Tree.getTree2List(node, true);\n    return Tree.buildTree(nodeList);\n};\n\n/**\r\n * @description: 为节点添加属性，包括子节点\r\n * @param {type} \r\n * @return: \r\n */\nTree.addAttr2Tree = function () {\n    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: 0 };\n    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { checked: true };\n\n    var nodeList = Tree.getTree2List(node, false, attr) || [];\n    return nodeList[0];\n};\n\n/**\r\n * @description: 获取溯源树\r\n * @param {type} \r\n * @return: \r\n */\nTree.getNodeRouter = function () {\n    var searchNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { id: 0 };\n\n    var stack = [];\n    var dfs = function dfs(tree) {\n        if (tree.ch) {\n            stack.push(Object.assign({}, _extends({}, tree), { ch: [] }));\n            //处理父节点\n            if (tree.id == searchNode.id) {\n                return false;\n            }\n            var children = tree.ch;\n            for (var i = 0; i < children.length; i++) {\n                var child = children[i];\n                var flag = dfs(child);\n                if (!flag) {\n                    return false;\n                }\n            }\n        } else {\n            stack.push(Object.assign({}, _extends({}, tree)));\n            //处理叶子节点\n            if (tree.id == searchNode.id) {\n                return false;\n            }\n        }\n        stack.pop();\n        return true;\n    };\n    dfs(node);\n    return Tree.buildTree(stack);\n};\n\n/**\r\n * @description: 构建树\r\n * @param {type} \r\n * @return: \r\n */\nTree.buildTree = function () {\n    var nodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n    //创建map，方便根据id/pid引用相关对象\n    if (nodeList && nodeList.length) {\n        var map = Tree.getNodeList2Map(nodeList);\n        for (var i = 1; i < nodeList.length; i++) {\n            var item = nodeList[i];\n            map[item.pid] && map[item.pid].ch && map[item.pid].ch.push(item);\n        }\n    }\n    return nodeList && nodeList[0];\n};\n\n//# sourceURL=webpack:///./src/component/tree.jsx?");

/***/ }),

/***/ "./treeNode":
/*!*****************************!*\
  !*** external "./treeNode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__treeNode__;\n\n//# sourceURL=webpack:///external_%22./treeNode%22?");

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