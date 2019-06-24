'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validator_es = require('../lib/validator_es5');

var _validator_es2 = _interopRequireDefault(_validator_es);

var _displayValidInput = require('./display-validInput');

var _displayValidInput2 = _interopRequireDefault(_displayValidInput);

var _displayValidSearchInput = require('./display-validSearchInput');

var _displayValidSearchInput2 = _interopRequireDefault(_displayValidSearchInput);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
	_inherits(Register, _Component);

	function Register(props) {
		_classCallCheck(this, Register);

		var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

		_this.state = {
			data: {
				email: "",
				emailVerifyCode: "",
				name: "",
				password: "",
				passwordAgain: ""
			},
			result: {}
		};
		_validator_es2.default.config = {
			email: ['isEmpty', 'isEmail'],
			emailVerifyCode: ['isEmpty'],
			name: ['isName', 'isEmpty'],
			password: ['isEmpty', 'isPw'],
			passwordAgain: ['isEmpty', 'isPwAgain']
		};
		_this.registerConfirm = _this.props.registerConfirm.bind(_this);
		_this.handleVerifyCodeSend = _this.props.handleVerifyCodeSend.bind(_this);
		return _this;
	}

	_createClass(Register, [{
		key: 'handleInputChange',
		value: function handleInputChange(key, e) {
			var tar = this.state.data;
			tar[key] = e.target.value;
			this.setState({
				data: tar
			});
		}
	}, {
		key: 'handleFormConfirm',
		value: function handleFormConfirm(e) {
			e.preventDefault();
			var data = this.state.data;
			var result = _validator_es2.default.validate(data);
			this.setState({
				result: result
			});
			console.log(this.state.result);
			if (_validator_es2.default.isSubmit()) {
				this.registerConfirm(this.state.data);
			}
		}
	}, {
		key: 'handleEmailSend',
		value: function handleEmailSend() {
			var email = this.state.data.email;
			var res = _validator_es2.default.validateOne('email', email);
			this.setState({
				result: {
					email: res
				}
			});
			if (res.isValid) {
				this.handleVerifyCodeSend(email);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'register-container' },
				_react2.default.createElement('div', { className: 'register-mark' }),
				_react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						transitionName: 'example',
						transitionAppear: true,
						transitionAppearTimeout: 500,
						transitionEnter: false,
						transitionLeave: false },
					_react2.default.createElement(
						'form',
						{ className: 'paper shadow p32 register-item svgMutiLine p-r', key: 'registerForm' },
						_react2.default.createElement(
							'p',
							{ className: 'ta-c mb4 mt0' },
							_react2.default.createElement(
								'strong',
								null,
								'\u6CE8\u518C'
							)
						),
						_react2.default.createElement(_displayValidSearchInput2.default, { btnText: '\u53D1\u9001', handleInputChange: this.handleInputChange.bind(this, 'email'), handleBtnClick: this.handleEmailSend.bind(this), name: '\u90AE\u7BB1', placeholder: '\r \u5E38\u7528\u90AE\u7BB1', data: this.state.result['email'] }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'emailVerifyCode'), name: '\u9A8C\u8BC1\u7801', placeholder: '\r \u8F93\u5165\u90AE\u7BB1\u91CC\u7684\u9A8C\u8BC1\u7801', data: this.state.result['emailVerifyCode'] }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'name'), name: '\u6635\u79F0', placeholder: '\r \u4E0D\u80FD\u542B\u6709\u6807\u70B9', data: this.state.result['name'] }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'password'), name: '\u5BC6\u7801', placeholder: '\r \u7531\u6570\u7EC4\u6216\u5B57\u6BCD\u7EC4\u6210', data: this.state.result['password'] }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(_displayValidInput2.default, { handleInputChange: this.handleInputChange.bind(this, 'passwordAgain'), name: '\u518D\u6B21\u786E\u8BA4\u5BC6\u7801', placeholder: '\r \u8981\u8DDF\u697C\u4E0A\u4E00\u6837', data: this.state.result['passwordAgain'] }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'div',
							{ className: 'ta-c pt16' },
							_react2.default.createElement(
								'button',
								{ type: 'submit', className: 'btn-n plr32 ptb6', onClick: this.handleFormConfirm.bind(this) },
								'\u786E\u8BA4'
							)
						)
					)
				)
			);
		}
	}]);

	return Register;
}(_react.Component);

exports.default = Register;