import {
	connect
} from 'react-redux';
import ArticleDetail from './display-articleDetail.js'
import {
	fetchArticleOne,
	deleteArticleOne
} from './data-articleDetail.js'

export default (id) => {
	const mapStateToProps = (state) => {
		return {
			item: state.articleDetailReducer.item,
			params: { id }
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			handleFetchArticle: (id) => dispatch(fetchArticleOne(id)),
			handleDeleteClick: (id) => dispatch(deleteArticleOne(id))
		}
	}
	return connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
}