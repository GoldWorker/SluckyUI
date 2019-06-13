'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.publishReply = exports.publishComment = exports.fetchCommentData = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // let state = {
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


var receiveDataSuccess = function receiveDataSuccess(data) {
	return {
		type: "RECEIVE_ARTICLE_COMMENT",
		items: data
	};
};

var postCommentSuccess = function postCommentSuccess(data) {
	return {
		type: "POST_COMMENT_SUCCESS",
		item: data
	};
};

var postReplySuccess = function postReplySuccess(data) {
	return {
		type: "POST_REPLY_SUCCESS",
		item: data
	};
};

var requestError = function requestError(data) {
	return {
		type: "REQUEST_ERROR",
		info: data
	};
};

// const addComment = (data) => {
// 	return {
// 		type: "ADD_COMMENT",
// 		item: data
// 	}
// }

var fetchCommentData = exports.fetchCommentData = function fetchCommentData(article_id) {
	return function (dispatch) {
		(0, _isomorphicFetch2.default)(__API__.getArtComment + article_id, {
			method: 'GET'
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			dispatch(receiveDataSuccess(data));
		}).catch(function (err) {
			if (err) throw err;
			dispatch((0, _dataMessage.pushInQueue)({
				info: "Place check your Internet",
				flag: "warning"
			}));
		});
	};
};

var publishComment = exports.publishComment = function publishComment() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		article_id: article_id,
		comment: comment
	};

	return function (dispatch) {
		return (0, _isomorphicFetch2.default)(__API__.postArtComment, {
			method: 'POST',
			credentials: "include",
			body: JSON.stringify(data)
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
					info: "Publish comment success",
					flag: "success"
				}));
				dispatch(postCommentSuccess(data));
			}
		}).catch(function (err) {
			if (err) throw err;
			dispatch((0, _dataMessage.pushInQueue)({
				info: "Place check your Internet",
				flag: "warning"
			}));
		});
	};
};

var publishReply = exports.publishReply = function publishReply() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		comment_id: comment_id,
		reply: reply
	};

	console.log(data);
	return function (dispatch) {
		return (0, _isomorphicFetch2.default)(__API__.postCommentReply, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(data)
		}).then(function (data) {
			return data.json();
		}).then(function (data) {
			console.log(data);
			if (data.error) {
				dispatch((0, _dataMessage.pushInQueue)({
					info: "请登录后评论",
					flag: "hint"
				}));
			} else {
				dispatch(postReplySuccess(data));
				dispatch((0, _dataMessage.pushInQueue)({
					info: "Publish reply success",
					flag: "success"
				}));
			}
		}).catch(function (err) {
			if (err) throw err;
			dispatch((0, _dataMessage.pushInQueue)({
				info: "Place check your Internet",
				flag: "warning"
			}));
		});
	};
};

var commentReducer = function commentReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isFetching: false,
		items: []
	};
	var action = arguments[1];

	switch (action.type) {
		case "RECEIVE_ARTICLE_COMMENT":
			return Object.assign({}, state, {
				items: action.items
			});
		case "POST_COMMENT_SUCCESS":
			return Object.assign({}, state, {
				items: [action.item].concat(_toConsumableArray(state.items))
			});
		case "POST_REPLY_SUCCESS":
			var _selfState = state;
			// 对副本进行深层操作
			for (var i = _selfState.items.length - 1; i >= 0; i--) {
				if (_selfState.items[i].comment_id == action.item.comment_id) {
					_selfState.items[i].reply.push(action.item);
				}
			}
			return Object.assign({}, state, {
				items: [].concat(_toConsumableArray(_selfState.items))
			});
		case "REQUEST_ERROR":
			return Object.assign({}, state, {
				info: action.info
			});
		default:
			return state;
	}
};

(0, _store.addReducer)(commentReducer, 'commentReducer');