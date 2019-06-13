'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavList = exports.NavList = function NavList(props) {
    var isLogined = props.isLogined;

    return _react2.default.createElement(
        'ul',
        { className: 'list-container' },
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
        ),
        _react2.default.createElement(
            'li',
            null,
            isLogined ? _react2.default.createElement(
                _reactRouter.Link,
                { activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/dnd' },
                '\u81EA\u5B9A\u4E49'
            ) : null
        ),
        _react2.default.createElement(
            'li',
            null,
            isLogined ? _react2.default.createElement(
                _reactRouter.Link,
                { activeStyle: { color: "rgba(0, 0, 0, 0.87)" }, activeClassName: 'bg-w', to: '/edit' },
                '\u53D1\u5E03\u6587\u7AE0'
            ) : null
        )
    );
};