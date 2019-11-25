import {
    connect
} from 'react-redux';
import ArticleDetail from './display-articleDetail'
import {
    fetchArticleOne,
    deleteArticleOne
} from './data-articleDetail'

const mapStateToProps = (state) => {
    return {
        item: state.articleDetailReducer.item,
        isLogined: state.loginReducer.isLogined
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFetchArticle: (id) => dispatch(fetchArticleOne(id)),
        handleDeleteClick: (id) => dispatch(deleteArticleOne(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
