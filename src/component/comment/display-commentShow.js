import React, {
	Component
} from 'react'
import ReplyInput from './display-replyInput.js'

class CommentShow extends Component {
	constructor(props) {
		super(props)
		this.artId = this.props.params.id
	}
	componentDidMount() {
		const {
			fetchCommentData
		} = this.props
		fetchCommentData(this.artId)
	}
	handleDate(date) {
		console.log(date)
		return date.split('T')[0]
	}
	render() {
		const {
			handleReplyPublish,
			items
		} = this.props
		console.log("ITEMS")
		console.log(items)
		return (

			<div>
				{
					this.props.items.map((elem, index) => {
						let replyInputData = {
							id: elem.comment_id,
							index: index
						}
						const handleDateFn=this.handleDate
						return(
								<div className="comment-normalize-box bor-b b-divider-b pb16" key={index}>
							        <figure className="user-info-comment">
							            <img src={require("../../images/bg_test.jpg")} alt="" className="img-rounded-s bg-tran"/>
							            <figcaption className="ta-c">{elem.name}</figcaption>
							        </figure>
							        <div className="comment-content mr16">
							            <p>{elem.comment}</p>
											<ul className="reply-normalize-box bg-divider-b" style={elem.reply.length==0?{"display":"none"}:{}}>
									          	{
													elem.reply.map((elem,index)=>{
														return (
																<li key={index}>
													                <span className="user-info-reply c-blue">{elem.name}</span>
													                <span className="mlr4">:</span>
													                <span className="reply-content">{elem.reply}</span>
													            </li>
															)
													})
												}
									        </ul>
							            <div className="ta-r c-blue">
							            	<span className="bor-r b-divider-b plr8 mlr8 fs12 c-icon-b">{(()=>handleDateFn(elem.date))()}</span>
							                <label htmlFor={"comment-toggle"+index} className="btn btn-tp">回复</label>
							            </div>
							            <input type="checkbox" id={"comment-toggle"+index} className="single-toggle"/>
							            <div className="single-toggle-target">
							                <ReplyInput data={replyInputData} handleReplyPublish={handleReplyPublish}/>
							            </div>
							        </div>
							    </div>
							)
					})
				}
			</div>
		)
	}
}

CommentShow.defaultProps = {
	items: []
}

export default CommentShow