import {
	connect
} from 'react-redux'
import {
	publishComment
} from './data-comment.js'
import CommentInput from './display-commentInput.js'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handlePublishComment: (artId, content) => dispatch(publishComment({
			article_id: artId,
			comment: content
		}))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)