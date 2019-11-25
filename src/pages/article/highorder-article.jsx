import {
	connect
} from 'react-redux';
import ArticleLists from './display-articleLists'
import {
	fetchArticleByPage,
	fetchArticle,
	initialArticle
} from './data-article'

const mapStateToProps = (state) => {
	return {
		lists: state.articleListsReducer.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleByPage: (pageId) => dispatch(fetchArticleByPage(pageId)),
		fetchArticle: () => dispatch(fetchArticle()),
		initialComponent: () => dispatch(initialArticle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleLists)

// export const HighorderArticle = connect(mapStateToProps, mapDispatchToProps)(ArticleLists)
