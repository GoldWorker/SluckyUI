"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pushInQueue = undefined;

var _store = require("../store");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // ex:
// let state = {
// 	lists: [{
// 		flag: "hint/text/warning"
// 		info: ""
// 	}, {
// 		info: ""
// 	}, {
// 		info: ""
// 	}]
// }


var shiftMsg = function shiftMsg(msgQueue) {
	return {
		type: "SHIFT_MSG",
		msgQueue: msgQueue //最新的消息队列
	};
};

var pushMsg = function pushMsg(msg) {
	return {
		type: "PUSH_MSG",
		msg: msg.info,
		flag: msg.flag
	};
};

var _timer;
var nextMsgId = 0;
var _message = [];

var pushInQueue = exports.pushInQueue = function pushInQueue(msg) {
	return function (dispatch) {
		if (_message.length == 0) {
			// 生成定时器
			console.log("timer seted");
			_timer = setInterval(function () {
				popToQueue(dispatch);
			}, 3000);
		}
		_message.push(msg);
		dispatch(pushMsg(msg));
	};
};

var popToQueue = function popToQueue(dispatch) {
	_message.shift();
	if (_message.length == 0) {
		clearInterval(_timer); //清空队列
		console.log("timer cleared");
	}
	dispatch(shiftMsg(_message));
};

var messageReducer = function messageReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case "PUSH_MSG":
			return [].concat(_toConsumableArray(state), [{
				info: action.msg,
				id: action.id,
				flag: action.flag
			}]);
		case "SHIFT_MSG":
			return [].concat(_toConsumableArray(action.msgQueue));
		default:
			return state;
	}
};

(0, _store.addReducer)(messageReducer, 'messageReducer');