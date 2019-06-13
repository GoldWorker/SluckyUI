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

var validSearchInput = function (_Component) {
	_inherits(validSearchInput, _Component);

	function validSearchInput() {
		_classCallCheck(this, validSearchInput);

		return _possibleConstructorReturn(this, (validSearchInput.__proto__ || Object.getPrototypeOf(validSearchInput)).apply(this, arguments));
	}

	_createClass(validSearchInput, [{
		key: "handleValid",
		value: function handleValid(isValid, initial, trigger) {
			if (isValid || isValid === undefined) return initial;else return trigger;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    handleInputChange = _props.handleInputChange,
			    data = _props.data,
			    name = _props.name,
			    placeholder = _props.placeholder,
			    btnText = _props.btnText,
			    handleBtnClick = _props.handleBtnClick;

			return _react2.default.createElement(
				"div",
				{ className: "input" },
				_react2.default.createElement(
					"label",
					{ htmlFor: name + "register", className: "fs12 c-grey" },
					name
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"div",
					{ className: "search-box-normalize p-r", style: this.handleValid(data.isValid, { 'borderColor': 'rgba(0, 0, 0, 0.12)' }, { 'borderColor': '#e74c3c' }) },
					_react2.default.createElement("input", { id: name + "register", onChange: handleInputChange, type: "email", className: "input input-normal w288", placeholder: placeholder, maxLength: "24", required: true }),
					_react2.default.createElement(
						"button",
						{ type: "button", className: "btn-n ptb6 plr16 search-btn", onClick: handleBtnClick },
						btnText
					)
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"span",
					{ className: "input-ps fs12", style: this.handleValid(data.isValid, { 'opacity': '0' }, { 'opacity': '1' }) },
					data.message.map(function (str) {
						return str + " ";
					})
				)
			);
		}
	}]);

	return validSearchInput;
}(_react.Component);

validSearchInput.defaultProps = {
	data: {
		message: []
	}
};

exports.default = validSearchInput;