'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mark = function Mark(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'dialog-mark-w', style: props.isToggle ? { display: 'block' } : { display: 'none' } },
		_react2.default.createElement(
			'div',
			{ className: 'icon-box' },
			_react2.default.createElement(
				'div',
				{ className: 'yu-icon' },
				_react2.default.createElement(
					'div',
					{ className: 'spinner' },
					_react2.default.createElement('div', { className: 'double-bounce1' }),
					_react2.default.createElement('div', { className: 'double-bounce2' })
				)
			)
		)
	);
};

exports.default = Mark;