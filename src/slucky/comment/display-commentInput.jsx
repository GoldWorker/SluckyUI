import React, {
	Component
} from 'react'

class CommentInput extends Component {
	constructor(props) {
		super(props)
		this.artId = this.props.id
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
		        <p className="pl8 bor-l b-side-s">评论</p>
		        <textarea name="" id="" className="publish-comment-input textarea" placeholder="输入内容。。。。。。" onChange={this.handleCommentChange.bind(this)}></textarea>
		        <div className="publish-comment-tool bg-divider-b">
		            <div className="ta-r">
		                {/* <button className="publish-btn btn btn-normal bg-blue c-text-w" onClick={handlePublishComment.bind(this,this.artId,this.state.content)}>发表</button> */}
						<div className="btn p-r ptb6 svgMutiLine plr24 c-theme" onClick={handlePublishComment.bind(this, this.artId, this.state.content)}>
							<svg
								className="btn-svgMutiLine"
								viewBox="0 0 180 64"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg">
								<rect className="shape"></rect>
							</svg>
							<div>发表</div>
						</div>
		            </div>
		        </div>
		    </div>
		)
	}
}

export default CommentInput
