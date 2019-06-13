'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayLoginWindow = require('./display-loginWindow');

var _displayLoginWindow2 = _interopRequireDefault(_displayLoginWindow);

var _dataLogin = require('./data-login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		isToggle: state.loginReducer.isToggle
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		handleConfirmClick: function handleConfirmClick(name, pw) {
			// e.preventDefault()
			dispatch((0, _dataLogin.login)(name, pw));
		},
		handleCancelClick: function handleCancelClick() {
			return dispatch((0, _dataLogin.loginWindowToggle)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayLoginWindow2.default);