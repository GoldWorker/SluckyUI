import {
	connect
} from 'react-redux';
import ArticleLists from './display-articleLists.jsx'
import {
	fetchArticleByPage,
	initialArticle
} from './data-article.jsx'

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
