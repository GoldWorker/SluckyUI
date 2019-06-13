'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _loginAction = require('../login/loginAction.js');

var _action = require('../message/action.js');

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keepOnline = function keepOnline(dispatch) {
	return function (dispatch) {
		if (_reactCookie2.default.load('token')) {
			(0, _isomorphicFetch2.default)(__API__.keepOnline, {
				method: "GET",
				credentials: 'include'
			}).then(function (data) {
				return data.json();
			}).then(function (data) {
				console.log(data);
				if (data.error && _reactCookie2.default.load('token')) {
					dispatch((0, _loginAction.logout)());
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	};
};

exports.default = keepOnline;