import React, {
	Component,
} from 'react'
import cookie from 'react-cookie'
import CommentShow from '../comment/highorder-commentShow.js'
import CommentInput from '../comment/highorder-commentInput.js'
import Markdown from 'react-markdown'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Moment from 'moment';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import ReactDOMServer from 'react-dom/server';

// article show in markdown
class ArticleDetail extends Component {
	constructor(props) {
		super(props)
		this.params = new URLSearchParams(location.search)
		this.artId = this.params.get('id')
		console.log(this.params.get('id'), this.props);
	}
	componentDidMount() {
		console.log(this.props)

		const {
			handleFetchArticle
		} = this.props
		// this.artId = this.props.params.id
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
			handleDeleteClick,
			isLogined
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
							<div className="hint-box-nor m16 article-detail-box">
								<div className="article-detail">
									<span className="c-theme mr8">标题:</span>
									<span className="mr24">{title}</span>
									<span className="c-theme mr8">日期:</span>
									<span className="mr24">{Moment(date).format('YYYY-MM-DD HH:mm:ss')}</span>
								</div>
								<div className="article-handle">
									<button style={isLogined ? {} : { display: 'none' }} className="btn-n plr16 ptb6 mr8" onClick={handleDeleteClick.bind(this, this.artId)}>编辑</button>
									<button style={isLogined ? {} : { display: 'none' }} className="btn plr16 ptb6 bg-fail c-text-w" onClick={handleDeleteClick.bind(this, this.artId)}>删除</button>
								</div>
							</div>
						</div>
						<div className="markdown-shower-content m16">
							{/* <Markdown source={content} /> */}
							<Highlight innerHTML={true}>
								{ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={content} />)}
							</Highlight>
						</div>
					</div>
					<CommentInput id={this.artId} />
					<CommentShow id={this.artId} />
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
