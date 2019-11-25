// ex:
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
import {
	addReducer
} from 'slucky/src/store';

const shiftMsg = (msgQueue) => {
	return {
		type: 'SHIFT_MSG',
		msgQueue: msgQueue //最新的消息队列
	};
};

const pushMsg = (msg) => {
	return {
		type: 'PUSH_MSG',
		msg: msg.info,
		flag: msg.flag
	};
};

let _timer;
let nextMsgId = 0;
const _message = [];

export const pushInQueue = (msg) => {
	return (dispatch) => {
		if (_message.length == 0) {
			// 生成定时器
			console.log('timer seted');
			_timer = setInterval(() => {
				popToQueue(dispatch);
			}, 3000);
		}
		_message.push(msg);
		dispatch(pushMsg(msg));
	};
};

const popToQueue = (dispatch) => {
	_message.shift();
	if (_message.length == 0) {
		clearInterval(_timer); //清空队列
		console.log('timer cleared');
	}
	dispatch(shiftMsg(_message));
};

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case 'PUSH_MSG':
			return [...state, {
				info: action.msg,
				id: action.id,
				flag: action.flag
			}];
		case 'SHIFT_MSG':
			return [...action.msgQueue];
		default:
			return state;
	}
};

addReducer(messageReducer,'messageReducer');
