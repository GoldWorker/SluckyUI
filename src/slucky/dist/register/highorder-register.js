'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayRegister = require('./display-register');

var _displayRegister2 = _interopRequireDefault(_displayRegister);

var _dataRegister = require('./data-register');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		handleVerifyCodeSend: function handleVerifyCodeSend(email) {
			return dispatch((0, _dataRegister.verifyEmail)({
				email: email
			}));
		},
		registerConfirm: function registerConfirm(data) {
			return dispatch((0, _dataRegister.register)(data));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayRegister2.default);