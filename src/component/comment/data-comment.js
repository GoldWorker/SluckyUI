// let state = {
// 	isFetching: bool,
// 	receiveAt: date,
// 	items: [{
// 		comment_id: int,
// 		comment: string,
// 		user_id: int,
// 		user_name: string,
// 		reply: [{
// 			reply: string,
// 			reply_id: int,
// 			user_name: string,
// 			user_id: int
// 		}]
// 	}]
// }
import fetch from 'isomorphic-fetch'
import {
	pushInQueue
} from '../message/data-message.js'
import {
	addReducer
} from '../store.js'

const receiveDataSuccess = (data) => {
	return {
		type: "RECEIVE_ARTICLE_COMMENT",
		items: data
	}
}

const postCommentSuccess = (data) => {
	return {
		type: "POST_COMMENT_SUCCESS",
		item: data
	}
}

const postReplySuccess = (data) => {
	return {
		type: "POST_REPLY_SUCCESS",
		item: data
	}
}

const requestError = (data) => {
	return {
		type: "REQUEST_ERROR",
		info: data
	}
}

// const addComment = (data) => {
// 	return {
// 		type: "ADD_COMMENT",
// 		item: data
// 	}
// }

export const fetchCommentData = (article_id) => {
	return dispatch => {
		fetch(__API__.getArtComment + article_id, {
			method: 'GET'
		}).then(data => data.json()).then(data => {
			console.log(data)
			dispatch(receiveDataSuccess(data))
		}).catch(err => {
			if (err) throw err
			dispatch(pushInQueue({
				info: "Place check your Internet",
				flag: "warning"
			}))
		})
	}
}

export const publishComment = (data = {
	article_id,
	comment
}) => {
	return dispatch => fetch(__API__.postArtComment, {
		method: 'POST',
		credentials: "include",
		body: JSON.stringify(data)
	}).then(data => data.json()).then(data => {
		console.log(data)
		if (data.error) {
			dispatch(pushInQueue({
				info: "No Access",
				flag: "hint"
			}))
		} else {
			dispatch(pushInQueue({
				info: "Publish comment success",
				flag: "success"
			}))
			dispatch(postCommentSuccess(data))
		}
	}).catch(err => {
		if (err) throw err
		dispatch(pushInQueue({
			info: "Place check your Internet",
			flag: "warning"
		}))
	})
}

export const publishReply = (data = {
	comment_id,
	reply
}) => {
	console.log(data)
	return dispatch => fetch(__API__.postCommentReply, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data)
	}).then(data => data.json()).then(data => {
		console.log(data)
		if (data.error) {
			dispatch(pushInQueue({
				info: "请登录后评论",
				flag: "hint"
			}))
		} else {
			dispatch(postReplySuccess(data))
			dispatch(pushInQueue({
				info: "Publish reply success",
				flag: "success"
			}))
		}
	}).catch(err => {
		if (err) throw err
		dispatch(pushInQueue({
			info: "Place check your Internet",
			flag: "warning"
		}))
	})
}

const commentReducer = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case "RECEIVE_ARTICLE_COMMENT":
			return Object.assign({}, state, {
				items: action.items
			})
		case "POST_COMMENT_SUCCESS":
			return Object.assign({}, state, {
				items: [action.item, ...state.items]
			})
		case "POST_REPLY_SUCCESS":
			var _selfState = state;
			// 对副本进行深层操作
			for (var i = _selfState.items.length - 1; i >= 0; i--) {
				if (_selfState.items[i].comment_id == action.item.comment_id) {
					_selfState.items[i].reply.push(action.item)
				}
			}
			return Object.assign({}, state, {
				items: [..._selfState.items]
			})
		case "REQUEST_ERROR":
			return Object.assign({}, state, {
				info: action.info
			})
		default:
			return state
	}
}

addReducer(commentReducer)