import fetch from 'isomorphic-fetch'
import {
	pushInQueue
} from '../message/data-message.jsx'
import {
	addReducer
} from '../../store.js'
// 成功拉取数据
// state init:
// {
// 		isFetching:false
// 		didInvalidate:false
// 		receivedAt:time
// 		lastUpdate:timestamp
// 		items:[
// 			id:num
// 			title:string
// 			content:string
// 		]
// }

var isNoData = false

const receiveData = (data) => {
	return {
		type: "RECEIVE_LISTS_DATA",
		isFetching: false,
		items: data,
		receiveAt: Date.now()
	}
}

const receivePageData = (data) => {
	return {
		type: "RECEIVE_PAGE_DATA",
		isFetching: false,
		items: data,
		receiveAt: Date.now()
	}
}

const initialPageData = (data) => {
	return {
		type: "INITIAL_ARTICLE",
		items: data,
		isFetching: false,
		receiveAt: Date.now()
	}
}

const noPageData = () => {
	return {
		type: "NO_PAGE_DATA"
	}
}

export const fetchArticle = () => {
	return (dispatch) => {
		fetch(__API__.articleAll, {
			method: "GET",
			credentials: 'include'
		}).then(data => data.json()).then(data => {
			console.log(data)
			if (data.error) {
				dispatch(pushInQueue({
					info: "No Access",
					flag: "hint"
				}))
			}
			dispatch(receiveData(data))
		}).catch(err => {
			console.log("error")
			dispatch(pushInQueue({
				info: "Place check your Internet",
				flag: "warning"
			}))
		})
	}
}

export const fetchArticleByPage = (pageId = 0) => {
	console.log(__API__.articlePage + pageId)
	if (!isNoData) {
		return dispatch => fetch(__API__.articlePage + pageId, {
			method: "GET"
		}).then(data => data.json()).then(data => {
			console.log(data)
			if (data.length != 0) {
				dispatch(receivePageData(data))
			} else isNoData = true
		}).catch(err => {
			console.log("err")
		})
	} else return dispatch => {
		dispatch(pushInQueue({
			info: "没有更多文章了",
			flag: "warning"
		}))
		dispatch(noPageData())
	}
}

export const initialArticle = (pageId = 0) => {
	if (!isNoData) {
		return dispatch => fetch(__API__.articlePage + pageId, {
			method: "GET"
		}).then(data => data.json()).then(data => {
			console.log(data)
			if (data.length != 0) {
				dispatch(initialPageData(data))
			} else isNoData = true
		}).catch(err => {
			console.log("err")
		})
	} else return dispatch => noPageData()
}

const articleListsReducer = (state = {
	isFetching: false,
	isNoData: false,
	items: []
}, action) => {
	switch (action.type) {
		case "INITIAL_ARTICLE":
			return Object.assign({}, state, {
				isFetching: false,
				items: [...action.items]
			})
		case "RECEIVE_LISTS_DATA":
			// console.log("articleListsReducer")
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items
			})
		case "RECEIVE_PAGE_DATA":
			return Object.assign({}, state, {
				isFetching: false,
				items: [...state.items, ...action.items]
			})
		case "NO_PAGE_DATA":
			return Object.assign({}, state, {
				isNoData: true
			})
		default:
			return state
	}
}

addReducer(articleListsReducer,'articleListsReducer')
