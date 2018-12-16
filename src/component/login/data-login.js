import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie'
import {
	pushInQueue
} from '../message/data-message.js'
import {
	addReducer
} from '../store.js'
// state = {
// 	isLogined: bool,
// 	isToggle:bool,
// 	loginError:{},
// 	userInfo: {
// 		name: "Keven",
// 		portrait: "url"
// 	}
// }
const loginError = (err) => {
	return {
		type: "LOGIN_ERROR",
		loginError: err
	}
}

const loginSuccess = (data) => {
	return {
		type: "LOGIN_SUCCESS",
		userInfo: data
	}
}

export const logoutSuccess = (data) => {
	return dispatch => {
		dispatch({
			type: "LOGOUT_SUCCESS",
			userInfo: data
		})
	}
}

export const loginWindowToggle = () => {
	return {
		type: "LOGIN_WINDOW_TOGGLE"
	}
}
export const login = (name = "", pw = "") => {
	return (dispatch) => fetch(__API__.login, {
		credentials: 'include',
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: name,
			password: pw,
		})
	}).then(data => data.json()).then(data => {
		if (data.error) {
			dispatch(loginError(data))
			dispatch(pushInQueue({
				info: "请确认邮箱或密码正确",
				flag: "warning"
			}))
		} else {
			dispatch(loginSuccess(data))
			dispatch(pushInQueue({
				info: "登录成功",
				flag: "success"
			}))
			dispatch(loginWindowToggle())
			localStorage.setItem("userInfo", JSON.stringify(data)) // save login msg
				// location.reload()
		}
	}).catch(err => {
		console.log("login err")
		dispatch(loginError(err))
		dispatch(pushInQueue({
			info: "网络无法连接，请稍后再尝试",
			flag: "warning"
		}))
	})
}

export const logout = () => {
	return (dispatch) => fetch(__API__.logout, {
		credentials: 'include', //to send with cookie
		method: "GET"
	}).then(data => data.json()).then(data => {
		console.log("logout")
		dispatch(logoutSuccess(data))
		dispatch(pushInQueue({
			info: "注销成功",
			flag: "success"
		}))
		cookie.remove('token', {
			path: '/'
		})
	})
}

const loginReducer = (state = {
	isLogined: cookie.load('token') ? true : false,
	isToggle: false,
	userInfo: {
		msg: cookie.load('token') ? "您好，" + JSON.parse(localStorage.getItem("userInfo")).name : "未登录"
	}
}, action) => {
	switch (action.type) {
		case "LOGIN_ERROR":
			return Object.assign({}, state, {
				isLogined: false,
				loginError: action.loginError
			})
		case "LOGIN_SUCCESS":
			return Object.assign({}, state, {
				isLogined: true,
				loginError: {},
				userInfo: action.userInfo
			})
		case "LOGIN_WINDOW_TOGGLE":
			return Object.assign({}, state, {
				isToggle: !state.isToggle
			})
		case "LOGOUT_SUCCESS":
			return Object.assign({}, state, {
				isLogined: false,
				loginError: {},
				userInfo: {
					msg: "未登录"
				}
			})
		default:
			return state
	}
}

addReducer(loginReducer)