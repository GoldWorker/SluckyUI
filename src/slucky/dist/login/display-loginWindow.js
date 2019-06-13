'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayLoginForm = require('./display-loginForm');

var _displayLoginForm2 = _interopRequireDefault(_displayLoginForm);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginWindow = function (_Component) {
	_inherits(LoginWindow, _Component);

	function LoginWindow(props) {
		_classCallCheck(this, LoginWindow);

		return _possibleConstructorReturn(this, (LoginWindow.__proto__ || Object.getPrototypeOf(LoginWindow)).call(this, props));
	}

	_createClass(LoginWindow, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    handleConfirmClick = _props.handleConfirmClick,
			    handleCancelClick = _props.handleCancelClick,
			    isToggle = _props.isToggle;

			var toggleClass = isToggle ? {
				display: "block"
			} : {
				display: "none"
			};
			if (isToggle) {
				return (
					// <ReactCSSTransitionGroup
					// 	transitionName="example"
					// 	transitionAppear={true}
					// 	transitionAppearTimeout={500}
					// 	transitionEnter={false}
					// 	transitionLeave={false}>
					// 	<div key="loginWindow">
					// 		<div className="dialog-mark"></div>
					// 		<div className="dialog-box">
					// 			<ReactCSSTransitionGroup
					// 				transitionName="example"
					// 				transitionAppear={true}
					// 				transitionAppearTimeout={500}
					// 				transitionEnter={false}
					// 				transitionLeave={false}>
					// 				<div className="dialog paper">
					// 					<div className="ta-r">
					// 						<button type="button" className="btn btn-s btn-tp c-blue mt4 mr4" onClick={handleCancelClick.bind(this)}>X</button>
					// 					</div>
					// 				<LoginForm handleSubmitClick={handleConfirmClick}/>
					// 			</div>
					// 			</ReactCSSTransitionGroup>
					// 		</div>
					// 	</div>
					// </ReactCSSTransitionGroup>

					_react2.default.createElement(
						_index.Dialog,
						{ open: isToggle, onClose: handleCancelClick.bind(this) },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_displayLoginForm2.default, { handleSubmitClick: handleConfirmClick })
						)
					)
				);
			} else return _react2.default.createElement('div', null);
		}
	}]);

	return LoginWindow;
}(_react.Component);

LoginWindow.defaultProps = {
	isToggle: true
};

exports.default = LoginWindow;