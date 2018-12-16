import React, {
	Component,
	PropTypes
} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// 可配置组件
// const dialog = {
// 	handleConfirm: handleLogoutClick.bind(this),
// 	content: "Are you sure logout?",
// 	btnText: "注销",
// 	btnClassName: "btn btn-s btn-hollow b-w c-text-w mr8"
// }

class DialogWindow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggle: false
		}
		console.log(this.state)
	}

	// 维护组件display状态
	handleToggleClick() {
		let _self = this
		this.setState({
			isToggle: !_self.state.isToggle
		})
	}
	handleConfirmClick() {
		const {
			handleConfirm
		} = this.props.dialog
		this.setState({
			isToggle: false
		})
		handleConfirm()
	}
	render() {
		const {
			content,
			btnText,
			title,
			btnClassName
		} = this.props.dialog
		return (
			<div className="d-il">
				<button type="button" className={btnClassName} onClick={this.handleToggleClick.bind(this)}>{btnText}</button>
				{
					this.state.isToggle?
						(
							<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
								<div>
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
													<button type="button" className="btn btn-s btn-tp c-blue mr8" onClick={this.handleConfirmClick.bind(this)}>确认</button>
													<button type="button" className="btn btn-s btn-tp c-blue" onClick={this.handleToggleClick.bind(this)}>关闭</button>
												</div>
											</div>
										</ReactCSSTransitionGroup>
									</div>
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
		btnText: "TEXT",
		title: "警告",
		btnClassName: "btn btn-s btn-hollow b-w c-text-w mr8"
	}
}

export default DialogWindow