// let state={
// 	isPublish:bool,
// 	item:{
// 		title:stying,
// 		content:string
// 	}
// 	info:{}
// }
import fetch from 'isomorphic-fetch'
import {
	pushInQueue
} from '../message/data-message.js'
import {
	addReducer
} from '../store.js'

const postSuccess = (data) => {
	return {
		type: "PUBLIC_ARTICLE_SUCCESS",
		info: data
	}
}

const postError = (err) => {
	return {
		type: "PUBLIC_ARTICLE_ERROR",
		error: err
	}
}

const publishArticle = (art = {}) => {
	return (dispatch) => {
		fetch(__API__.articleEdit, {
			method: "POST",
			credentials: "include",
			body: JSON.stringify(art)
		}).then(data => data.json()).then(data => {
			if (data.error) {
				dispatch(postError(data))
				dispatch(pushInQueue({
					info: "No Access",
					flag: "hint"
				}))
			} else {
				dispatch(postSuccess(data))
				dispatch(pushInQueue({
					info: "Publish Article Success",
					flag: "success"
				}))
			}
		}).catch(err => {
			dispatch(postError(err))
			dispatch(pushInQueue({
				info: "Internet Error",
				flag: "warning"
			}))
		})
	}
}

export default publishArticle

const articlePublicReducer = (state = {
	isPublish: false
}, action) => {
	switch (action.type) {
		case "PUBLIC_ARTICLE_SUCCESS":
			return Object.assign({}, state, {
				isPublish: true,
				info: action.info
			})
		case "PUBLIC_ARTICLE_ERROR":
			return Object.assign({}, state, {
				isPublish: false,
				info: action.info
			})
		default:
			return state
	}
}

addReducer(articlePublicReducer)