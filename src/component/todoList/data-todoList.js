import {
	addReducer
} from '../../store.js'
// actions
let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: "ADD_TODO",
		text: text,
		completed: false,
		id: nextTodoId++
	}
}
const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		id: id
	}
}

const setVisibilityFilter = (filter) => {
	return {
		type: "SET_VISIBILITY",
		filter: filter
	}
}

export {
	addTodo,
	toggleTodo,
	setVisibilityFilter
}


// reducers
// 处理单个todoList任务
const todo = (state = {}, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				text: action.text,
				completed: false,
				id: action.id
			}
		case "TOGGLE_TODO":
			// console.log("CHECK")
			if (action.id == state.id) {
				console.log("S:" + state.completed)
				return Object.assign({}, state, {
					completed: !state.completed
				})
			} else return state
		default:
			return state
	}
}

// 任务分配 reduser
const todos = (state = [], action) => {
	console.log(state)
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				todo({}, action)
			]
		case "TOGGLE_TODO":
			return state.map(elem => todo(elem, action));
		default:
			return state
	}
}

addReducer(todos)