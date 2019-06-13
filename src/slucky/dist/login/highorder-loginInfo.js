'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayLoginInfo = require('./display-loginInfo');

var _displayLoginInfo2 = _interopRequireDefault(_displayLoginInfo);

var _dataLogin = require('./data-login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		userInfo: state.loginReducer.userInfo,
		isLogined: state.loginReducer.isLogined
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		handleLoginClick: function handleLoginClick() {
			return dispatch((0, _dataLogin.loginWindowToggle)());
		},
		handleLogoutClick: function handleLogoutClick() {
			return dispatch((0, _dataLogin.logout)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayLoginInfo2.default);