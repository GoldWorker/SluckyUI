'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteArticleOne = exports.fetchArticleOne = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// state={
// 		type:receiveData
// 		item:{
// 			id:num
// 			title:string
// 			content:string
// 		}
// }

var receiveData = function receiveData(data) {
	return {
		type: "RECEIVE_DETAIL_DATA",
		item: data,
		isFetching: false
	};
};

var deleteArticleSuccess = function deleteArticleSuccess(data) {
	return {
		type: "DELETE_ARTICLE_SUCCESS"
	};
};

var fetchArticleOne = exports.fetchArticleOne = function fetchArticleOne(id) {
	var path = __API__.articleOnce + id;
	return function (dispatch) {
		(0, _isomorphicFetch2.default)(path, {
			method: "GET"
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			dispatch(receiveData(data));
		}).catch(function (err) {
			console.log("err");
		});
	};
};

var deleteArticleOne = exports.deleteArticleOne = function deleteArticleOne(id) {
	var path = __API__.articleOnce + id;
	return function (dispatch) {
		(0, _isomorphicFetch2.default)(path, {
			method: "DELETE",
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
			} else {
				dispatch((0, _dataMessage.pushInQueue)({
					info: "Delete article success",
					flag: "success"
				}));
				dispatch(deleteArticleSuccess(data));
			}
		}).catch(function (err) {
			console.log("err");
			dispatch((0, _dataMessage.pushInQueue)({
				info: "Place check your Internet",
				flag: "warning"
			}));
		});
	};
};

var articleDetailReducer = function articleDetailReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case "RECEIVE_DETAIL_DATA":
			console.log("articleDetailReducer");
			return Object.assign({}, state, {
				isFetching: false,
				item: action.item
			});
		case "DELETE_ARTICLE_SUCCESS":
			return state;
		default:
			return state;
	}
};

(0, _store.addReducer)(articleDetailReducer, 'articleDetailReducer');