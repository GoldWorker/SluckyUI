import React, {
	Component,
	PropTypes
} from 'react'
import cookie from 'react-cookie'
import CommentShow from '../comment/highorder-commentShow.js'
import CommentInput from '../comment/highorder-commentInput.js'
import Markdown from 'react-markdown'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// article show in markdown
class ArticleDetail extends Component {
	componentDidMount() {
		const {
			handleFetchArticle
		} = this.props
		this.artId = this.props.params.id
		handleFetchArticle(this.artId)
	}
	render() {
		console.log(this.props.children)
		const {
			id,
			title,
			content,
			date
		} = this.props.item
		const {
			handleDeleteClick
		} = this.props
		return (
			<div>
				<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
				<div className="markdown-shower-box">
					<div className="markdown-shower-banner">
						<div className="hint-box-nor b-blue m16 article-detail-box">
							<div className="article-detail">
								<span className="c-blue mr8">标题:</span>
						        <span className="mr24">{title}</span>
						        <span className="c-blue mr8">日期:</span>
						        <span className="mr24">{date}</span>
							</div>
					        <div className="article-handle">
						    	<button style={cookie.load('token')?{display:'inlineBlock'}:{display:'none'}} className="btn btn-m bg-red c-text-w" onClick={handleDeleteClick.bind(this,this.artId)}>删除</button>
						    </div>
					    </div>
					</div>
					<div className="markdown-shower-content m16">
						<Markdown source={content}/>
					</div>
				</div>
				<CommentInput params={this.props.params}/>
				<CommentShow params={this.props.params}/>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

ArticleDetail.defaultProps = {
	item: {
		id: "",
		title: "",
		content: "# Loding..."
	}
}

export default ArticleDetail