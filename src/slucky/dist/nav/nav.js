"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderNav = function renderNav(arr) {
	return _react2.default.createElement(
		"ul",
		{ className: "paper menu" },
		arr.map(function (node, index) {
			if (Array.isArray(node)) {
				var str = node.shift();
				return _react2.default.createElement(
					"li",
					{ key: index, className: "menu-flag" },
					_react2.default.createElement(
						"a",
						{ href: "#" },
						str
					),
					renderNav(node)
				);
			} else {
				return _react2.default.createElement(
					"li",
					{ key: index },
					_react2.default.createElement(
						"a",
						{ href: "#" },
						node
					)
				);
			}
		})
	);
}; /**
    * 
    * @authors Your Name (you@example.org)
    * @date    2017-02-15 17:46:11
    * @version $Id$
    */

var Nav = function Nav(props) {

	return _react2.default.createElement(
		"nav",
		{ className: "nav shadow bg-blue c-text-w" },
		props.navTree.map(function (node, index) {
			if (Array.isArray(node)) {
				var str = node.shift();
				return _react2.default.createElement(
					"li",
					{ key: index, className: "nav-flag" },
					_react2.default.createElement(
						"a",
						{ href: "#" },
						str
					),
					_react2.default.createElement(
						"svg",
						{ className: "icon icon-test" },
						_react2.default.createElement("use", { xlinkHref: "#icon-test" })
					),
					renderNav(node)
				);
			} else {
				return _react2.default.createElement(
					"li",
					{ key: index, className: "nav-flag" },
					_react2.default.createElement(
						"a",
						{ href: "#" },
						node
					)
				);
			}
		})
	);
};

// 传入导航数组
Nav.defaultProps = {
	navTree: ['首页', '文章', '编辑', ['脚手架', ['slucky', 'some']], ['关于', '联系方式', ['zxc', 'ads', 'num']]]
};

exports.default = Nav;