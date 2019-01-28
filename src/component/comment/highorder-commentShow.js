import {
	connect
} from 'react-redux'
import {
	fetchCommentData,
	publishReply
} from './data-comment'
import commentShow from './display-commentShow'

const mapStateToProps = (state) => {
	return {
		items: state.commentReducer.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCommentData: (artId) => dispatch(fetchCommentData(artId)),
		handleReplyPublish: (commentId, reply) => {
			// console.log("ADD REPLY")
			dispatch(publishReply({
				comment_id: commentId,
				reply: reply
			}))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(commentShow)
