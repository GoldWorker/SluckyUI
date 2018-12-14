import React, {
	Component,
	PropTypes
} from 'react'
import ArticleItem from './display-articleItem.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ArticleLists extends Component {
	constructor(props) {
		super(props)
		this.fetchArticleByPage = this.props.fetchArticleByPage.bind(this)
		this.initialComponent = this.props.initialComponent.bind(this)
		this.state = {
			counter: 0,
			_interval: 10
		}
	}
	nextPage() {
		return this.state.counter += this.state._interval
	}

	// 首屏加载
	componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll.bind(this))
		this.initialComponent()
	}

	// componentWillUnmount() {
	// 	window.removeEventListener('scroll', this.handleScroll.bind(this));
	// }

	// handleScroll() {
	// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	// 	var scrollHeight = document.body.scrollHeight;
	// 	var screenHeight = window.screen.height;
	// 	var limit = (scrollTop + screenHeight) / scrollHeight
	// 	if (limit >= 1.053) {
	// 		// 瀑布流加载
	// 		this.fetchArticleByPage(this.nextPage())
	// 	}
	// }
	handleClick() {
		this.fetchArticleByPage(this.nextPage())
	}
	render() {
		return (
			<div className="m16">
				{
					Array.prototype.map.call(this.props.lists,(elem, index) => {
						return (
							<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
								<ArticleItem article={elem} key={index}/>
							</ReactCSSTransitionGroup>
							)
					})
				}	
				<div className="ta-c">
					<button className="btn btn-m bg-blue m16 c-text-w" onClick={this.handleClick.bind(this)}>加载更多</button>
				</div>
			</div>
		)
	}
}

ArticleLists.defaultProps = {
	lists: []
}

export default ArticleLists