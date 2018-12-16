import React, {
	Component
} from 'react'

class ReplyInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: ""
		}
	}

	handleContentChange(e) {
		this.setState({
			content: e.target.value
		})
	}

	render() {
		const {
			handleReplyPublish
		} = this.props
		const {
			id,
			index
		} = this.props.data
		return (
			<div className="publish-comment-box m16">
				<textarea onChange={this.handleContentChange.bind(this)} className="publish-comment-input textarea" placeholder="输入内容。。。。。。"></textarea>
				<div className="publish-comment-tool bg-divider-b">
				    <div>
				        <label htmlFor={"comment-toggle"+index} className="btn plr8 c-hint-b">关闭</label>
				    </div>
				    <div className="ta-r">
						<button className="publish-btn btn btn-normal bg-blue c-text-w" onClick={handleReplyPublish.bind(this,id,this.state.content)}>发表</button>
					</div>
				</div>
			</div>
		)
	}
}

export default ReplyInput