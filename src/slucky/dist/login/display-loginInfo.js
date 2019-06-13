'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginInfo = function (_Component) {
	_inherits(LoginInfo, _Component);

	function LoginInfo(props) {
		_classCallCheck(this, LoginInfo);

		var _this = _possibleConstructorReturn(this, (LoginInfo.__proto__ || Object.getPrototypeOf(LoginInfo)).call(this, props));

		_this.handleClickLoginout = function () {
			var handleLogoutClick = _this.props.handleLogoutClick;

			handleLogoutClick();
			_this.setState({ isLoginout: false });
		};

		_this.state = {
			isLoginout: false
		};
		return _this;
	}

	_createClass(LoginInfo, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    userInfo = _props.userInfo,
			    isLogined = _props.isLogined,
			    handleLoginClick = _props.handleLoginClick;


			return _react2.default.createElement(
				'div',
				{ className: 'login-info' },
				_react2.default.createElement(
					_index.Dialog,
					{ open: this.state.isLoginout, onClose: function onClose() {
							_this2.setState({ isLoginout: false });
						} },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'p',
							null,
							'\u6CE8\u9500'
						),
						_react2.default.createElement(
							'div',
							null,
							'\u786E\u8BA4\u6CE8\u9500\u5417\uFF1F'
						),
						_react2.default.createElement(
							'div',
							{ className: 'ta-r pt8' },
							_react2.default.createElement(
								'button',
								{
									className: 'tag-text ptb6 plr16',
									onClick: function onClick() {
										return _this2.setState({ isLoginout: false });
									} },
								'\u53D6\u6D88'
							),
							_react2.default.createElement(
								'button',
								{ className: 'tag-text ptb6 plr16', onClick: function onClick() {
										return _this2.handleClickLoginout();
									} },
								'\u786E\u8BA4'
							)
						)
					)
				),
				isLogined ? _react2.default.createElement(
					'button',
					{ className: 'btn btn-s btn-hollow b-w c-text-w mr8', onClick: function onClick() {
							_this2.setState({ isLoginout: true });
						} },
					'\u6CE8\u9500'
				) : _react2.default.createElement(
					'button',
					{ className: 'btn btn-s btn-hollow b-w c-text-w mr8', onClick: handleLoginClick.bind(this) },
					'\u767B\u5F55'
				),
				_react2.default.createElement(
					'span',
					null,
					userInfo.msg
				)
			);
		}
	}]);

	return LoginInfo;
}(_react.Component);

LoginInfo.defaultProps = {
	userInfo: _reactCookie2.default.load('token') ? JSON.parse(localStorage.getItem("userInfo")) : {
		msg: "",
		name: ""
	}
};

exports.default = LoginInfo;