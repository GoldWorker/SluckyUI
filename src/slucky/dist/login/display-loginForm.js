"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loginForm = function (_Component) {
	_inherits(loginForm, _Component);

	function loginForm(props) {
		_classCallCheck(this, loginForm);

		var _this = _possibleConstructorReturn(this, (loginForm.__proto__ || Object.getPrototypeOf(loginForm)).call(this, props));

		_this.state = {
			nameValue: "",
			pwValue: ""
		};
		return _this;
	}

	_createClass(loginForm, [{
		key: "handleNameChange",
		value: function handleNameChange(e) {
			this.setState({
				nameValue: e.target.value
			});
		}
	}, {
		key: "handlePwChange",
		value: function handlePwChange(e) {
			this.setState({
				pwValue: e.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			var handleSubmitClick = this.props.handleSubmitClick;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "dialog-content" },
					_react2.default.createElement(
						"p",
						{ className: "mt0 mb4 ta-c" },
						_react2.default.createElement(
							"strong",
							null,
							"\u767B\u5F55"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "input pt8 w-full" },
						_react2.default.createElement(
							"label",
							{ htmlFor: "userNameInput", className: "fs12 c-grey" },
							"\u90AE\u7BB1\uFF1A"
						),
						_react2.default.createElement("br", null),
						_react2.default.createElement("input", { onChange: this.handleNameChange.bind(this), id: "userNameInput", type: "text", className: "input-down w-full", placeholder: "\u4EC5\u9650\u90AE\u7BB1\u767B\u5F55", maxLength: "24", autoFocus: true, required: true })
					),
					_react2.default.createElement("br", null),
					_react2.default.createElement(
						"div",
						{ className: "input pt8 w-full" },
						_react2.default.createElement(
							"label",
							{ htmlFor: "userPwInput", className: "fs12 c-grey" },
							"\u5BC6\u7801\uFF1A"
						),
						_react2.default.createElement("br", null),
						_react2.default.createElement("input", { onChange: this.handlePwChange.bind(this), id: "userPwInput", type: "password", className: "input-down w-full", placeholder: "\u4F60\u4F1A\u5FD8\u8BB0\u7684", maxLength: "24", required: true })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "ta-c pb8" },
					_react2.default.createElement(
						"button",
						{ type: "button", className: "tag-text ptb6 plr16 c-theme", onClick: handleSubmitClick.bind(this, this.state.nameValue, this.state.pwValue) },
						"\u786E\u8BA4"
					)
				)
			);
		}
	}]);

	return loginForm;
}(_react.Component);

exports.default = loginForm;