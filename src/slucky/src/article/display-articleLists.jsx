import React, {
	Component
} from 'react';
import ArticleItem from './display-articleItem';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { CSSTransitionGroup } from 'react-transition-group';

class ArticleLists extends Component {
	constructor(props) {
		super(props);
		this.fetchArticleByPage = this.props.fetchArticleByPage.bind(this);
		this.initialComponent = this.props.initialComponent.bind(this);
		this.state = {
			counter: 0,
			_interval: 10
		};
		console.log(this.props);
	}
	nextPage() {
		return this.state.counter += this.state._interval;
	}

	// 首屏加载
	componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll.bind(this))
		// this.initialComponent()
		const { fetchArticle } = this.props;
		fetchArticle();
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
		this.fetchArticle(this.nextPage());
	}
	render() {
		return (
			<div className="m16">
				{
					Array.prototype.map.call(this.props.lists, (elem, index) => {
						return (
							<CSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}
								key={index}>
								<ArticleItem article={elem} key={index} />
							</CSSTransitionGroup>
						);
					})
				}
				{/* <div className="ta-c">
					<button className="tag-text m16 plr16 ptb6" onClick={this.handleClick.bind(this)}>加载更多</button>
				</div> */}
			</div>
		);
	}
}

export default ArticleLists;
