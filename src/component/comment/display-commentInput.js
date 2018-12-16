import React, {
	Component
} from 'react'

class CommentInput extends Component {
	constructor(props) {
		super(props)
		this.artId = 17 || this.props.params.id
		this.state = {
			content: ""
		}
	}

	handleCommentChange(e) {
		this.setState({
			content: e.target.value
		})
	}

	render() {
		const {
			handlePublishComment
		} = this.props
		return (
			<div className="publish-comment-box m16">
		        <p className="pl8 bor-l b-blue">评论</p>
		        <textarea name="" id="" className="publish-comment-input textarea" placeholder="输入内容。。。。。。" onChange={this.handleCommentChange.bind(this)}></textarea>
		        <div className="publish-comment-tool bg-divider-b">
		            <div className="ta-r">
		                <button className="publish-btn btn btn-normal bg-blue c-text-w" onClick={handlePublishComment.bind(this,this.artId,this.state.content)}>发表</button>
		            </div>
		        </div>
		    </div>
		)
	}
}

export default CommentInput