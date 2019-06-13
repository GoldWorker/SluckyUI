'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highorderWeiboHotList = require('./spider/highorder-weiboHotList.js');

var _highorderWeiboHotList2 = _interopRequireDefault(_highorderWeiboHotList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexCover = function IndexCover(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'cover' },
			_react2.default.createElement(
				'div',
				{ className: 'content' },
				_react2.default.createElement(
					'div',
					{ id: 'large-header', className: 'large-header' },
					_react2.default.createElement('div', { className: 'filler' })
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'cover-container' },
			_react2.default.createElement(
				'div',
				{ className: 'login-wrap' },
				_react2.default.createElement(
					'p',
					{ className: 'ta-c fs20' },
					_react2.default.createElement(
						'strong',
						null,
						'\u5FAE\u535A\u70ED\u641C\u699C'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'login-html' },
					_react2.default.createElement(_highorderWeiboHotList2.default, null)
				)
			)
		)
	);
};

exports.default = IndexCover;