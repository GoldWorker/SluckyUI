import React, {
	Component
} from 'react';
import ReplyInput from './display-replyInput';
import Moment from 'moment';

class CommentShow extends Component {
	constructor(props) {
		super(props);
		this.artId = this.props.id;
	}
	componentDidMount() {
		const {
			fetchCommentData
		} = this.props;
		fetchCommentData(this.artId);
	}
	handleDate(date) {
		// return (new Date(date)).toLocaleString()
		return Moment(date).format('YYYY-MM-DD HH:mm:ss');
	}
	showComment(self, content) {
		// this.refs[self].innerHTML = content;
		console.log('refs', this.refs);
	}
	render() {
		const {
			handleReplyPublish,
			items
		} = this.props;
		// console.log("ITEMS")
		// console.log(items)
		return (

			<div>
				{
					this.props.items.map((elem, index) => {
						let replyInputData = {
							id: elem.comment_id,
							index: index
						};
						return (
							<div className="comment-normalize-box bor-b b-side-s plr16 mb16" key={index}>
								<figure className="user-info-comment">
									<img src={require('../../images/bg_test.jpg')} alt="" className="img-rounded-s bg-tran" />
									<figcaption className="ta-c">{elem.name}</figcaption>
								</figure>
								<div className="comment-content pl16">
									{/* <p>{elem.comment}</p> */}
									<p ref={`comment${index}`}>{this.showComment(`comment${index}`, elem.comment)}</p>
									<ul className="reply-normalize-box bg-divider-b" style={elem.reply.length == 0 ? { 'display': 'none' } : {}}>
										{
											elem.reply.map((elem, index) => {
												return (
													<li key={index}>
														<span className="user-info-reply c-theme">{elem.name}</span>
														<span className="mlr4">:</span>
														<span className="reply-content">{elem.reply}</span>
													</li>
												);
											})
										}
									</ul>
									<div className="d-f jc-r ac">
										<span className="pl8 pr16 fs12 c-icon-b">{this.handleDate(elem.date)}</span>
										<label htmlFor={'comment-toggle' + index} className="tag-text ptb6 plr16">回复</label>
									</div>
									<input type="checkbox" id={'comment-toggle' + index} className="single-toggle" />
									<div className="single-toggle-target">
										<ReplyInput data={replyInputData} handleReplyPublish={handleReplyPublish} />
									</div>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}

CommentShow.defaultProps = {
	items: []
};

export default CommentShow;
