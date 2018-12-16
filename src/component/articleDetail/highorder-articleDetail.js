import {
	connect
} from 'react-redux';
import ArticleDetail from './display-articleDetail.js'
import {
	fetchArticleOne,
	deleteArticleOne
} from './data-articleDetail.js'

const mapStateToProps = (state) => {
	return {
		item: state.articleDetailReducer.item
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleFetchArticle: (id) => dispatch(fetchArticleOne(id)),
		handleDeleteClick: (id) => dispatch(deleteArticleOne(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)