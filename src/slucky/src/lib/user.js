import fetch from 'isomorphic-fetch'
import {
	logout
} from '../login/loginAction.js'
import {
	pushInQueue
} from '../message/action.js'
import cookie from 'react-cookie'

const keepOnline = (dispatch) => {
	return dispatch => {
		if (cookie.load('token')) {
			fetch(__API__.keepOnline, {
				method: "GET",
				credentials: 'include'
			}).then(data => data.json()).then(data => {
				console.log(data)
				if (data.error && cookie.load('token')) {
					dispatch(logout())
				}
			}).catch(err => {
				console.log(err)
			})
		}

	}
}

export default keepOnline