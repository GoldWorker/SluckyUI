import React, {
	Component,
	PropTypes
} from 'react'
import Item from './display-item.js'
import {
	createList
} from '../lib/list.js'

class weiboHotLists extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const {
			fetchData
		} = this.props
		fetchData()
	}
	render() {
		const {
			handleClick,
			lists
		} = this.props
		return (
			<div>	
				{/* <div className="cover">
					<div className="content">
						<div id="large-header" className="large-header">
							<div className="filler"></div>
						</div>
					</div>
				</div> */}
				{createList(lists, Item)}
				<div className="ta-c">
					<button className="btn btn-m bg-blue m16 c-text-w" onClick={handleClick.bind(this)}>刷新漫画热搜榜</button>
				</div>
			</div>
		)
	}
}

weiboHotLists.defaultProps = {
	lists: [{
		title: "Loading......"
	}]
}

export default weiboHotLists