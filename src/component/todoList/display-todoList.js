import React, {
	Component
} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
	IndexLink,
	Link
} from 'react-router'
import PropTypes from 'prop-types';

// 组件
class AddTodo extends Component {
	handleClick() {
		const node = this.refs.myInput
		const text = node.value.trim()
		this.props.onAddClick(text) // 映射函数
		node.value = ''
	}
	render() {
		return (
			<div>
				<input ref="myInput" type="text"/>
				<button onClick={this.handleClick.bind(this)}>Add</button>
			</div>
		)
	}
}

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd() {
		const newItems = this.state.items.concat(["233333"]);
		this.setState({
			items: newItems
		});
	}

	handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({
			items: newItems
		});
	}

	render() {
		const items = this.state.items.map((item, i) => (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}>
				<div key={i} onClick={() => this.handleRemove(i)}>
					{item}
	      		</div>
      		</ReactCSSTransitionGroup>
		));

		return (
			<div>
        		<button onClick={this.handleAdd}>Add Item</button>
				{items}
			</div>
		);
	}
}

TodoList.propTypes = {
	list: PropTypes.array
};

TodoList.defaultProps = {
	lists: []
}

const Footer = (props) => {
	return (
		<div>
			<button filter="SHOW_ALL">ALL</button>
			<button filter="SHOW_COMPLETED">COMPLETED</button>
			<button filter="SHOW_ACTIVE">ACTIVE</button>
		</div>
	)
}

const List = (props) => {
	const {
		addClick,
		todoLists,
		toggleClick
	} = props
	return (
		<div>
			<AddTodo onAddClick={(text)=>addClick(text)}/>
			<TodoList lists={todoLists} onToggleClick={(id)=>toggleClick(id)}/>
			<Footer/>
			{props.children}
		</div>
	)
}

export default List