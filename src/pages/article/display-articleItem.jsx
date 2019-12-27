import React, {
	Component,
	PropTypes
} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Moment from 'moment';

class ArticleItem extends Component {
	render() {
		const {
			title,
			date,
			hits,
			id
		} = this.props.article;
		let routerPath = '/article?id=' + id;
		return (
			<div className="bor-b b-side-s d-f jc-b ac">
				<span className="m8"><Link className="c-theme" to={routerPath}>{title}</Link></span>
				<div className="m4 c-icon-b">
					<div className="d-il w96">
						<span className="mr8">热度:</span>
						<span className="mr24">{hits}℃</span>
					</div>
					<span className="mr8">日期:</span>
					<span className="mr8">{Moment(date).format('YYYY-MM-DD HH:mm:ss')}</span>
				</div>
			</div>
		);
	}
}

export default ArticleItem;
