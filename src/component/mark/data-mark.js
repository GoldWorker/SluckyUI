import {
	addReducer
} from '../store.js'

export const toggleMark = (bool) => {
	return {
		type: "TOGGLE_MARK",
		isToggle: bool
	}
}

const markReducer = (state = {
	isToggle: false
}, action) => {
	switch (action.type) {
		case "TOGGLE_MARK":
			return Object.assign({}, state, {
				isToggle: action.isToggle
			})
		default:
			return state
	}
}

addReducer(markReducer)