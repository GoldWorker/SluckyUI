'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 可配置组件
// const dialog = {
// 	handleConfirm: handleConfirm.bind(this),
// 	handleCancel: handleCancel.bind(this),
// 	content: "Are you sure logout?",
// }

var Dialog = function (_Component) {
	_inherits(Dialog, _Component);

	function Dialog(props) {
		_classCallCheck(this, Dialog);

		return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));
	}

	_createClass(Dialog, [{
		key: 'render',
		value: function render() {
			var _props$dialog = this.props.dialog,
			    content = _props$dialog.content,
			    title = _props$dialog.title,
			    handleConfirm = _props$dialog.handleConfirm,
			    handleCancel = _props$dialog.handleCancel;

			return _react2.default.createElement(
				'div',
				{ className: 'd-il' },
				this.props.isToggle ? _react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						transitionName: 'example',
						transitionAppear: true,
						transitionAppearTimeout: 500,
						transitionEnter: false,
						transitionLeave: false },
					_react2.default.createElement('div', { className: 'dialog-mark' }),
					_react2.default.createElement(
						'div',
						{ className: 'dialog-box' },
						_react2.default.createElement(
							_reactAddonsCssTransitionGroup2.default,
							{
								transitionName: 'example',
								transitionAppear: true,
								transitionAppearTimeout: 500,
								transitionEnter: false,
								transitionLeave: false },
							_react2.default.createElement(
								'div',
								{ className: 'dialog paper' },
								_react2.default.createElement(
									'div',
									{ className: 'dialog-content c-text-b' },
									_react2.default.createElement(
										'p',
										{ className: 'c-text-b mt0' },
										_react2.default.createElement(
											'strong',
											null,
											title
										)
									),
									content
								),
								_react2.default.createElement(
									'div',
									{ className: 'ta-c pb8' },
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn-s btn-tp c-blue mr8', onClick: this.handleConfirm.bind(this) },
										'\u786E\u8BA4'
									),
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn-s btn-tp c-blue', onClick: this.handleCancel.bind(this) },
										'\u5173\u95ED'
									)
								)
							)
						)
					)
				) : ""
			);
		}
	}]);

	return Dialog;
}(_react.Component);

DialogWindow.defaultProps = {
	dialog: {
		content: "Are you sure?",
		title: "警告"
	}
};

exports.default = Dialog;