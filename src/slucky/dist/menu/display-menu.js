"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
	if (props.lists.length > 0) {
		return _react2.default.createElement(
			"ul",
			{ className: "menu" },
			props.lists.map(function (list, index) {
				return _react2.default.createElement(
					"li",
					{ key: index },
					_react2.default.createElement(
						"a",
						null,
						list
					)
				);
			})
		);
	} else return null;
};

// Menu.propTypes = {
// 	lists: React.PropTypes.array
// }

/**
 * menu
 * @authors Your Name (you@example.org)
 * @date    2017-02-15 11:06:09
 * @version $Id$
 */
exports.default = Menu;