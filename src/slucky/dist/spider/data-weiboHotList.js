'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message.js');

var _store = require('../store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var receiveData = function receiveData(data) {
	return {
		type: "RECEIVE_WEIBO_TOP_DATA",
		isFetching: false,
		items: data,
		receiveAt: Date.now()
	};
};

var fetchWeiboHotData = function fetchWeiboHotData() {
	return function (dispatch) {
		(0, _isomorphicFetch2.default)(__API__.weiboHostList, {
			method: "GET"
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			dispatch((0, _dataMessage.pushInQueue)({
				info: "已获取微博最新热搜榜",
				flag: "success"
			}));
			dispatch(receiveData(data));
		}).catch(function (err) {
			dispatch((0, _dataMessage.pushInQueue)({
				info: "网络无法连接,请稍后再次尝试",
				flag: "warning"
			}));
			console.log("error");
		});
	};
};

exports.default = fetchWeiboHotData;


var weiboHotListsReducer = function weiboHotListsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isFetching: false,
		items: [{
			title: "加载中..."
		}]
	};
	var action = arguments[1];

	switch (action.type) {
		case "RECEIVE_WEIBO_TOP_DATA":
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items
			});
		default:
			return state;
	}
};

(0, _store.addReducer)(weiboHotListsReducer);