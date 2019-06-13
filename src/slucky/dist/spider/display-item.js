"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
	var _props$data = props.data,
	    title = _props$data.title,
	    href = _props$data.href,
	    hits = _props$data.hits;


	return (
		// style={{backgroundColor:"rgba(40, 57, 101, .5)"}}
		_react2.default.createElement(
			"a",
			{ href: href, className: "hint-box-nor d-b b-blue m16" },
			_react2.default.createElement(
				"div",
				{ className: "p8" },
				_react2.default.createElement(
					"span",
					{ target: "blank" },
					title
				)
			)
		)
	);
};

Item.defaultProps = {
	data: {
		title: "",
		href: "",
		hits: ""
	}
};

exports.default = Item;