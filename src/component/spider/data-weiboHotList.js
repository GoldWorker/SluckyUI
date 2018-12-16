import fetch from 'isomorphic-fetch'
import {
	pushInQueue
} from '../message/data-message.js'
import {
	addReducer
} from '../store.js'
// 成功拉取数据
// state init:
// {
// 		isFetching:false
// 		didInvalidate:false
// 		receivedAt:time
// 		lastUpdate:timestamp
// 		items:[{
// 			title:string
// 			href:url
// 			hits:string
// 		}]
// }
const receiveData = (data) => {
	return {
		type: "RECEIVE_WEIBO_TOP_DATA",
		isFetching: false,
		items: data,
		receiveAt: Date.now()
	}
}

const fetchWeiboHotData = () => {
	return (dispatch) => {
		fetch(__API__.weiboHostList, {
			method: "GET"
		}).then(data => data.json()).then(data => {
			console.log(data)
			dispatch(pushInQueue({
				info: "已获取微博最新热搜榜",
				flag: "success"
			}))
			dispatch(receiveData(data))
		}).catch(err => {
			dispatch(pushInQueue({
				info: "网络无法连接,请稍后再次尝试",
				flag: "warning"
			}))
			console.log("error")
		})
	}
}

export default fetchWeiboHotData

const weiboHotListsReducer = (state = {
	isFetching: false,
	items: [{
		title: "加载中..."
	}]
}, action) => {
	switch (action.type) {
		case "RECEIVE_WEIBO_TOP_DATA":
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items
			})
		default:
			return state
	}
}

addReducer(weiboHotListsReducer)