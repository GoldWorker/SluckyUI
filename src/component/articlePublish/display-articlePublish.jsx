import React, {
	Component,
	PropTypes
} from 'react'
import Markdown from 'react-markdown'

// controlled component
class ArticleEditer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			content: ""
		}
	}
	handleTitleChange(e) {
		this.setState({
			title: e.target.value
		})
	}
	handleInputChange(e) {
			this.setState({
				content: e.target.value
			})
		}
		// 输入验证
	checkData(e) {
		e.preventDefault()
		const {
			handlePublicClick
		} = this.props
		if (this.state.title && this.state.content) {
			// console.log("publish")
			handlePublicClick(this.state)
		}
	}
	render() {

		return (
			<div>
				<div className="d-f editor-tool">
					<input type="text" onChange={this.handleTitleChange.bind(this)} className="input w-full input-normal bg-w" maxLength="50" placeholder="Title" required />
					<button className="btn p-r regularShadowScale s0" onClick={this.checkData.bind(this)}>发布文章</button>
				</div>
				<form className="editor-box">

					<textarea placeholder="# Press something what you think......" className="textarea editor-input box" autoFocus onChange={this.handleInputChange.bind(this)} required />

					<div className="editor-output box textarea">
						<Markdown source={this.state.content} />
					</div>
				</form>
			</div>
		)
	}
}

export default ArticleEditer
