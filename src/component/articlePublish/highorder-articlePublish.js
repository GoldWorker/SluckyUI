import {
	connect
} from 'react-redux'
import publishArticle from './data-articlePublish.js'
import ArticleEditer from './display-articlePublish.js'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handlePublicClick: (art) => dispatch(publishArticle(art))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditer)