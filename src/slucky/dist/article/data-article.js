'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initialArticle = exports.fetchArticleByPage = exports.fetchArticle = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var isNoData = false;

var receiveData = function receiveData(data) {
	return {
		type: "RECEIVE_LISTS_DATA",
		isFetching: false,
		items: data,
		receiveAt: Date.now()
	};
};

var receivePageData = function receivePageData(data) {
	return {
		type: "RECEIVE_PAGE_DATA",
		isFetching: false,
		items: data,
		receiveAt: Date.now()
	};
};

var initialPageData = function initialPageData(data) {
	return {
		type: "INITIAL_ARTICLE",
		items: data,
		isFetching: false,
		receiveAt: Date.now()
	};
};

var noPageData = function noPageData() {
	return {
		type: "NO_PAGE_DATA"
	};
};

var fetchArticle = exports.fetchArticle = function fetchArticle() {
	return function (dispatch) {
		(0, _isomorphicFetch2.default)(__API__.articleAll, {
			method: "GET",
			credentials: 'include'
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			if (data.error) {
				dispatch((0, _dataMessage.pushInQueue)({
					info: "No Access",
					flag: "hint"
				}));
			}
			dispatch(receiveData(data));
		}).catch(function (err) {
			console.log("error");
			dispatch((0, _dataMessage.pushInQueue)({
				info: "Place check your Internet",
				flag: "warning"
			}));
		});
	};
};

var fetchArticleByPage = exports.fetchArticleByPage = function fetchArticleByPage() {
	var pageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	console.log(__API__.articlePage + pageId);
	if (!isNoData) {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)(__API__.articlePage + pageId, {
				method: "GET"
			}).then(function (data) {
				return data.json();
			}).then(function (data) {
				console.log(data);
				if (data.length != 0) {
					dispatch(receivePageData(data));
				} else isNoData = true;
			}).catch(function (err) {
				console.log("err");
			});
		};
	} else return function (dispatch) {
		dispatch((0, _dataMessage.pushInQueue)({
			info: "没有更多文章了",
			flag: "warning"
		}));
		dispatch(noPageData());
	};
};

var initialArticle = exports.initialArticle = function initialArticle() {
	var pageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	if (!isNoData) {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)(__API__.articlePage + pageId, {
				method: "GET"
			}).then(function (data) {
				return data.json();
			}).then(function (data) {
				console.log(data);
				if (data.length != 0) {
					dispatch(initialPageData(data));
				} else isNoData = true;
			}).catch(function (err) {
				console.log("err");
			});
		};
	} else return function (dispatch) {
		return noPageData();
	};
};

var articleListsReducer = function articleListsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isFetching: false,
		isNoData: false,
		items: []
	};
	var action = arguments[1];

	switch (action.type) {
		case "INITIAL_ARTICLE":
			return Object.assign({}, state, {
				isFetching: false,
				items: [].concat(_toConsumableArray(action.items))
			});
		case "RECEIVE_LISTS_DATA":
			// console.log("articleListsReducer")
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items
			});
		case "RECEIVE_PAGE_DATA":
			return Object.assign({}, state, {
				isFetching: false,
				items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.items))
			});
		case "NO_PAGE_DATA":
			return Object.assign({}, state, {
				isNoData: true
			});
		default:
			return state;
	}
};

(0, _store.addReducer)(articleListsReducer, 'articleListsReducer');