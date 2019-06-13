'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.login = exports.loginWindowToggle = exports.logoutSuccess = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _dataMessage = require('../message/data-message');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// state = {
// 	isLogined: bool,
// 	isToggle:bool,
// 	loginError:{},
// 	userInfo: {
// 		name: "Keven",
// 		portrait: "url"
// 	}
// }
var loginError = function loginError(err) {
    return {
        type: "LOGIN_ERROR",
        loginError: err
    };
};

var loginSuccess = function loginSuccess(data) {
    return {
        type: "LOGIN_SUCCESS",
        userInfo: data
    };
};

var logoutSuccess = exports.logoutSuccess = function logoutSuccess(data) {
    return function (dispatch) {
        dispatch({
            type: "LOGOUT_SUCCESS",
            userInfo: data
        });
    };
};

var loginWindowToggle = exports.loginWindowToggle = function loginWindowToggle() {
    return {
        type: "LOGIN_WINDOW_TOGGLE"
    };
};
var login = exports.login = function login() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var pw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    return function (dispatch) {
        return (0, _isomorphicFetch2.default)(__API__.login, {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: name,
                password: pw
            })
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            if (data.error) {
                dispatch(loginError(data));
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "请确认邮箱或密码正确",
                    flag: "warning"
                }));
            } else {
                dispatch(loginSuccess(data));
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "登录成功",
                    flag: "success"
                }));
                dispatch(loginWindowToggle());
                localStorage.setItem("userInfo", JSON.stringify(data)); // save login msg
                // location.reload()
            }
        }).catch(function (err) {
            console.log("login err");
            dispatch(loginError(err));
            dispatch((0, _dataMessage.pushInQueue)({
                info: "网络无法连接，请稍后再尝试",
                flag: "warning"
            }));
        });
    };
};

var logout = exports.logout = function logout() {
    return function (dispatch) {
        return (0, _isomorphicFetch2.default)(__API__.logout, {
            credentials: 'include', //to send with cookie
            method: "GET"
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            console.log("logout");
            dispatch(logoutSuccess(data));
            dispatch((0, _dataMessage.pushInQueue)({
                info: "注销成功",
                flag: "success"
            }));
            _reactCookie2.default.remove('token', {
                path: '/'
            });
            // location.reload()
        });
    };
};

var loginReducer = function loginReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isLogined: _reactCookie2.default.load('token') ? true : false,
        isToggle: false,
        userInfo: {
            msg: _reactCookie2.default.load('token') ? "您好，" + JSON.parse(localStorage.getItem("userInfo")).name : "未登录"
        }
    };
    var action = arguments[1];

    switch (action.type) {
        case "LOGIN_ERROR":
            return Object.assign({}, state, {
                isLogined: false,
                loginError: action.loginError
            });
        case "LOGIN_SUCCESS":
            return Object.assign({}, state, {
                isLogined: true,
                loginError: {},
                userInfo: action.userInfo
            });
        case "LOGIN_WINDOW_TOGGLE":
            return Object.assign({}, state, {
                isToggle: !state.isToggle
            });
        case "LOGOUT_SUCCESS":
            return Object.assign({}, state, {
                isLogined: false,
                loginError: {},
                userInfo: {
                    msg: "未登录"
                }
            });
        default:
            return state;
    }
};

(0, _store.addReducer)(loginReducer, 'loginReducer');