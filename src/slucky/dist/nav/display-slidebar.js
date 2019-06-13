'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _highorderLoginInfo = require('../login/highorder-loginInfo.js');

var _highorderLoginInfo2 = _interopRequireDefault(_highorderLoginInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideBar = function SlideBar(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'slidebar-box-normalize' },
		_react2.default.createElement('input', { type: 'checkbox', id: 'slidebar-switch', className: 'd-n' }),
		_react2.default.createElement(
			'div',
			{ className: 'slidebar bg-purple' },
			_react2.default.createElement(
				'label',
				{ htmlFor: 'slidebar-switch', className: 'slidebar-tool lh56 plr16' },
				_react2.default.createElement(
					'span',
					{ className: 'mr16' },
					'Back'
				),
				_react2.default.createElement(
					'svg',
					{ className: 'icon icon16', id: 'slidebar_in' },
					_react2.default.createElement('use', { xlinkHref: '#icon-test' })
				),
				_react2.default.createElement(
					'div',
					{ id: 'slidebar_out' },
					_react2.default.createElement(
						'svg',
						{ className: 'icon icon16', id: 'slidebar_out' },
						_react2.default.createElement('use', { xlinkHref: '#icon-test' })
					)
				)
			),
			_react2.default.createElement(
				'ul',
				{ className: 'menu slidebar-menu' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.IndexLink,
						{ activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/' },
						'\u9996\u9875'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/article' },
						'\u6587\u7AE0'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/register' },
						'\u540C\u9053'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/about' },
						'\u5173\u4E8E'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/slucky' },
						'Slucky \u8F7B\u91CF\u7EA7\u6837\u5F0F\u5E93\u6587\u6863'
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'slidebar-login-box' },
				_react2.default.createElement(_highorderLoginInfo2.default, null)
			)
		),
		_react2.default.createElement('div', { className: 'mark-b' })
	);
}; /**
    * slidebar
    * @authors Your Name (you@example.org)
    * @date    2017-02-15 13:42:48
    * @version $Id$
    */

exports.default = SlideBar;