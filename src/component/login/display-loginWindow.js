import React, {
	Component,
	PropTypes
} from 'react'
import LoginForm from './display-loginForm.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class LoginWindow extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {
			handleConfirmClick,
			handleCancelClick,
			isToggle
		} = this.props
		const toggleClass = isToggle ? {
			display: "block"
		} : {
			display: "none"
		}
		if (isToggle) {
			return (
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}>
					<div key="loginWindow">
						<div className="dialog-mark"></div>
						<div className="dialog-box">
							<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
								<div className="dialog paper">
									<div className="ta-r">
										<button type="button" className="btn btn-s btn-tp c-blue mt4 mr4" onClick={handleCancelClick.bind(this)}>X</button>
									</div>
								<LoginForm handleSubmitClick={handleConfirmClick}/>
							</div>
							</ReactCSSTransitionGroup>
						</div>
					</div>
	      		</ReactCSSTransitionGroup>

			)
		} else return (<div></div>)
	}
}

LoginWindow.defaultProps = {
	isToggle: true
}

export default LoginWindow