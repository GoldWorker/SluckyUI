import {
	connect
} from 'react-redux'
import {
	publishComment
} from './data-comment'
import CommentInput from './display-commentInput'

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
