"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toggleMark = undefined;

var _store = require("../store.js");

var toggleMark = exports.toggleMark = function toggleMark(bool) {
	return {
		type: "TOGGLE_MARK",
		isToggle: bool
	};
};

var markReducer = function markReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isToggle: false
	};
	var action = arguments[1];

	switch (action.type) {
		case "TOGGLE_MARK":
			return Object.assign({}, state, {
				isToggle: action.isToggle
			});
		default:
			return state;
	}
};

(0, _store.addReducer)(markReducer, 'markReducer');