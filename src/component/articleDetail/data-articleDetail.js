import fetch from 'isomorphic-fetch'
import {
	pushInQueue
} from '../message/data-message.js'
import {
	addReducer
} from '../store.js'
// state={
// 		type:receiveData
// 		item:{
// 			id:num
// 			title:string
// 			content:string
// 		}
// }

const receiveData = (data) => {
	return {
		type: "RECEIVE_DETAIL_DATA",
		item: data,
		isFetching: false
	}
}

const deleteArticleSuccess = (data) => {
	return {
		type: "DELETE_ARTICLE_SUCCESS"
	}
}

export const fetchArticleOne = (id) => {
	let path = __API__.articleOnce + id
	return (dispatch) => {
		fetch(path, {
			method: "GET"
		}).then(data => data.json()).then(data => {
			console.log(data)
			dispatch(receiveData(data))
		}).catch(err => {
			console.log("err")
		})
	}
}

export const deleteArticleOne = (id) => {
	let path = __API__.articleOnce + id
	return (dispatch) => {
		fetch(path, {
			method: "DELETE",
			credentials: 'include'
		}).then(data => data.json()).then(data => {
			console.log(data)
			if (data.error) {
				dispatch(pushInQueue({
					info: "No Access",
					flag: "hint"
				}))
			} else {
				dispatch(pushInQueue({
					info: "Delete article success",
					flag: "success"
				}))
				dispatch(deleteArticleSuccess(data))
			}
		}).catch(err => {
			console.log("err")
			dispatch(pushInQueue({
				info: "Place check your Internet",
				flag: "warning"
			}))
		})
	}
}

const articleDetailReducer = (state = {
	isFetching: false
}, action) => {
	switch (action.type) {
		case "RECEIVE_DETAIL_DATA":
			console.log("articleDetailReducer")
			return Object.assign({}, state, {
				isFetching: false,
				item: action.item
			})
		case "DELETE_ARTICLE_SUCCESS":
			return state
		default:
			return state
	}
}

addReducer(articleDetailReducer)