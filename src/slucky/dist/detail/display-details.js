'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayMenu = require('../menu/display-menu.js');

var _displayMenu2 = _interopRequireDefault(_displayMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * details
 * @authors Your Name (you@example.org)
 * @date    2017-02-15 13:32:58
 * @version $Id$
 */
var Details = function Details(props) {
	return _react2.default.createElement(
		'details',
		{ className: 'slide-down' },
		_react2.default.createElement(
			'summary',
			{ className: 'pl16 c-text-w' },
			props.title
		),
		_react2.default.createElement(_displayMenu2.default, { lists: props.lists })
	);
};

Details.propTypes = {
	title: _react2.default.PropTypes.string.isRequired
};

exports.default = Details;