import React, {
	Component,
	PropTypes
} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
		let routerPath = "/article?id=" + id
		return (
			<div className="bor-b b-side-s article-detail-box">
				<span className="m8"><Link className="c-theme" to={routerPath}>{title}</Link></span>
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
