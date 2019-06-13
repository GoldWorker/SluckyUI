import {
    connect
} from 'react-redux'
import {
    publishArticle,
    putArticle
} from './data-articlePublish'
import {
    fetchArticleOne
} from "../articleDetail/data-articleDetail";
import ArticleEditer from './display-articlePublish'

const mapStateToProps = (state) => {
    return {
        item: state.articleDetailReducer.item,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePublicClick: (art) => dispatch(publishArticle(art)),
        handleClickUpdate: (art) => dispatch(putArticle(art)),
        fetchData: (id) => dispatch(fetchArticleOne(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditer)
