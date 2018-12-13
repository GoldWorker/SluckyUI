import {
	connect
} from 'react-redux'
import List from './display-todoList.js'

import {
	addTodo,
	toggleTodo
} from './data-todoList.js'


// 状态映射
const mapStateToProps = (state) => {
	return {
		todoLists: state.todos
	}
}

// 逻辑输出
const mapDispatchToProps = (dispatch) => {
	return {
		addClick: (text) => dispatch(addTodo(text)),
		toggleClick: (id) => dispatch(toggleTodo(id))
	}
}

// 打包组件
// 监听store
const TodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default TodoList