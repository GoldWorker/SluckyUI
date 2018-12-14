import {
	connect
} from 'react-redux';
import ArticleLists from './display-articleLists.js'
import {
	fetchArticleByPage,
	initialArticle
} from './data-article.js'

const mapStateToProps = (state) => {
	return {
		lists: state.articleListsReducer.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleByPage: (pageId) => dispatch(fetchArticleByPage(pageId)),
		initialComponent: () => dispatch(initialArticle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleLists)