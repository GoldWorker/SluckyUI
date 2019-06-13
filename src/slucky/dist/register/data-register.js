'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.register = exports.verifyEmail = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyEmailSuccess = function verifyEmailSuccess(data) {
	return {
		type: "VERIFY_EMAIL_SUCCESS",
		info: data
	};
}; // let state = {
// 	verifyEmail: "",
// 	info: ""
// }


var registerSuccess = function registerSuccess(data) {
	return {
		type: "REGISTER_SUCCESS",
		info: data
	};
};

var verifyEmail = exports.verifyEmail = function verifyEmail(data) {
	return function (dispatch) {
		dispatch((0, _dataMessage.pushInQueue)({
			info: "邮件发送中",
			flag: "hint"
		}));
		(0, _isomorphicFetch2.default)(__API__.postVerifyEmail, {
			method: 'POST',
			credentials: "include",
			body: JSON.stringify(data)
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			if (data.error) {
				dispatch((0, _dataMessage.pushInQueue)({
					info: "请确认邮箱是否正确或请查看邮箱里的验证码",
					flag: "hint"
				}));
			} else {
				dispatch(verifyEmailSuccess(data));
				dispatch((0, _dataMessage.pushInQueue)({
					info: "发送成功，请查看邮箱里的验证码",
					flag: "success"
				}));
			}
		}).catch(function (err) {
			if (err) throw err;
			dispatch((0, _dataMessage.pushInQueue)({
				info: "请网络检查网络连接",
				flag: "warning"
			}));
		});
	};
};

var register = exports.register = function register(data) {
	console.log("REGISTER");
	console.log(data);
	return function (dispatch) {
		return (0, _isomorphicFetch2.default)(__API__.postRegister, {
			method: 'POST',
			credentials: "include",
			body: JSON.stringify(data)
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			if (data.error) {
				dispatch((0, _dataMessage.pushInQueue)({
					info: data.error,
					flag: "hint"
				}));
			} else {
				dispatch(registerSuccess(data));
				dispatch((0, _dataMessage.pushInQueue)({
					info: "恭喜，注册成功",
					flag: "success"
				}));

				// window.location.href = "http://www.brandf.cn/"
			}
		}).catch(function (err) {
			if (err) throw err;
			dispatch((0, _dataMessage.pushInQueue)({
				info: "请网络检查网络连接",
				flag: "warning"
			}));
		});
	};
};

var registerReducer = function registerReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case "VERIFY_EMAIL_SUCCESS":
			return Object.assign({}, state, {
				info: action.info
			});
		case "REGISTER_SUCCESS":
			return Object.assign({}, state, {
				info: action.info
			});
		default:
			return state;
	}
};

(0, _store.addReducer)(registerReducer, 'registerReducer');