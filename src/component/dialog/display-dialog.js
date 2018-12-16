import React, {
	Component,
	PropTypes
} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// 可配置组件
// const dialog = {
// 	handleConfirm: handleConfirm.bind(this),
// 	handleCancel: handleCancel.bind(this),
// 	content: "Are you sure logout?",
// }

class Dialog extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			content,
			title,
			handleConfirm,
			handleCancel
		} = this.props.dialog
		return (
			<div className="d-il">
				{
					this.props.isToggle?
						(
							<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
								<div className="dialog-mark"></div>
								<div className="dialog-box">
									<ReactCSSTransitionGroup
										transitionName="example"
										transitionAppear={true}
										transitionAppearTimeout={500}
										transitionEnter={false}
										transitionLeave={false}>
										<div className="dialog paper">
											<div className="dialog-content c-text-b">
												<p className="c-text-b mt0"><strong>{title}</strong></p>
												{content}
											</div>
											<div className="ta-c pb8">
												<button type="button" className="btn btn-s btn-tp c-blue mr8" onClick={this.handleConfirm.bind(this)}>确认</button>
												<button type="button" className="btn btn-s btn-tp c-blue" onClick={this.handleCancel.bind(this)}>关闭</button>
											</div>
										</div>
									</ReactCSSTransitionGroup>
								</div>
							</ReactCSSTransitionGroup>
						):""
					
				}
			</div>
		)
	}
}

DialogWindow.defaultProps = {
	dialog: {
		content: "Are you sure?",
		title: "警告"
	}
}

export default Dialog