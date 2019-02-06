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
			content: "",
			id: ''
		}
		this.params = new URLSearchParams(location.search)
		this.artId = this.params.get('id') || ''
	}
	componentWillMount() {
		console.log('本生命周期之前已经经历了getDefaultPorps,getInitialState');
		console.log('componentWillMount', this.props, this.state)
	}
	componentDidMount() {
		console.log('componentDidMount', this.props)
		if (this.artId) {
			const { fetchData } = this.props
			fetchData && fetchData(this.artId)
		}
	}
	componentWillReceiveProps(nextProps) {
		// 在重新render之前更新state不会重新触发生命周期
		console.log('componentWillReceiveProps', nextProps, this.props)
		const { title, content, id } = nextProps.item
		this.setState({
			title,
			content,
			id
		})
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, this.props)
		return true
	}
	componentWillUpdate(nextProps) {
		console.log('componentWillUpdate', nextProps, this.props)
	}
	componentDidUpdate() {
		console.log('componentDidUpdate', this.props)
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
			handlePublicClick,
			handleClickUpdate
		} = this.props
		if (this.state.title && this.state.content) {
			// console.log("publish")
			if (this.artId) {
				handleClickUpdate(this.state)
			} else {
				handlePublicClick(this.state)
			}
		}
	}
	render() {
		{ console.log('Render__', this.props.item) }
		return (
			<div>
				<div className="d-f editor-tool">
					<input type="text" onChange={this.handleTitleChange.bind(this)} className="input w-full input-normal bg-w" value={this.state.title} maxLength="50" placeholder="Title" required />
					<button className="tag-text plr16 s0" onClick={this.checkData.bind(this)}>发布文章</button>
				</div>
				<form className="editor-box">

					<textarea placeholder="# Press something what you think......" className="textarea editor-input box" autoFocus value={this.state.content} onChange={this.handleInputChange.bind(this)} required />

					<div className="editor-output box textarea">
						<Markdown source={this.state.content} />
					</div>
				</form>
			</div>
		)
	}
}

ArticleEditer.defaultProps = {
	item: {
		id: "",
		title: "",
		content: "# Loding..."
	}
}

export default ArticleEditer
