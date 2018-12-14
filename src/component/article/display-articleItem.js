import React, {
	Component,
	PropTypes
} from 'react'
import {
	Link
} from 'react-router'

class ArticleItem extends Component {
	handleDate(date) {
		// console.log(date)
		return date.split('T')[0]
	}
	render() {
		const {
			title,
			date,
			hits,
			id
		} = this.props.article
		let routerPath = "/" + id
		return (
			<div className="bor-b b-divider-b article-detail-box">
				    <span className="m8"><Link className="c-blue" to={routerPath}>{title}</Link></span>
				    <div className="article-detail m4 c-icon-b">
						<span className=" mr8">日期:</span>
						<span className="mr24">{this.handleDate(date)}</span>
						<span className=" mr8">热度:</span>
						<span className="mr24">{hits}℃</span>
					</div>
			</div>
		)
	}
}

export default ArticleItem