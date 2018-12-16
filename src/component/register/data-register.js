// let state = {
// 	verifyEmail: "",
// 	info: ""
// }
import fetch from 'isomorphic-fetch'
import {
	pushInQueue
} from '../message/data-message.js'
import {
	addReducer
} from '../store.js'

const verifyEmailSuccess = (data) => {
	return {
		type: "VERIFY_EMAIL_SUCCESS",
		info: data
	}
}

const registerSuccess = (data) => {
	return {
		type: "REGISTER_SUCCESS",
		info: data
	}
}

export const verifyEmail = (data) => {
	return dispatch => {
		dispatch(pushInQueue({
			info: "邮件发送中",
			flag: "hint"
		}))
		fetch(__API__.postVerifyEmail, {
			method: 'POST',
			credentials: "include",
			body: JSON.stringify(data)
		}).then(data => data.json()).then(data => {
			console.log(data)
			if (data.error) {
				dispatch(pushInQueue({
					info: "请确认邮箱是否正确或请查看邮箱里的验证码",
					flag: "hint"
				}))
			} else {
				dispatch(verifyEmailSuccess(data))
				dispatch(pushInQueue({
					info: "发送成功，请查看邮箱里的验证码",
					flag: "success"
				}))

			}
		}).catch(err => {
			if (err) throw err
			dispatch(pushInQueue({
				info: "请网络检查网络连接",
				flag: "warning"
			}))

		})
	}
}

export const register = (data) => {
	console.log("REGISTER")
	console.log(data)
	return dispatch => fetch(__API__.postRegister, {
		method: 'POST',
		credentials: "include",
		body: JSON.stringify(data)
	}).then(data => data.json()).then(data => {
		console.log(data)
		if (data.error) {
			dispatch(pushInQueue({
				info: data.error,
				flag: "hint"
			}))
		} else {
			dispatch(registerSuccess(data))
			dispatch(pushInQueue({
				info: "恭喜，注册成功",
				flag: "success"
			}))

			// window.location.href = "http://www.brandf.cn/"
		}
	}).catch(err => {
		if (err) throw err
		dispatch(pushInQueue({
			info: "请网络检查网络连接",
			flag: "warning"
		}))

	})
}

const registerReducer = (state = {}, action) => {
	switch (action.type) {
		case "VERIFY_EMAIL_SUCCESS":
			return Object.assign({}, state, {
				info: action.info
			})
		case "REGISTER_SUCCESS":
			return Object.assign({}, state, {
				info: action.info
			})
		default:
			return state
	}
}

addReducer(registerReducer)