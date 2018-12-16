import React, {
	Component,
	PropTypes
} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const MessageLists = (props) => {
	// 过滤flag
	const getBgColor = (flag) => {
		// console.log(flag)
		switch (flag) {
			case "hint":
				return "bg-warn shadow"
			case "success":
				return "bg-success shadow"
			case "warning":
				return "bg-fail shadow"
			default:
				return "bg-fail shadow"
		}
	}
	return (
		<div className="toastlists-normalize-box">
			{
				props.lists.map((elem, index) => {
					return (
						<ReactCSSTransitionGroup
							transitionName="example"
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
							key={index}>
							<div className="toastlist" key={index}>
								<div className={(() => getBgColor(elem.flag))()}>{elem.info}</div>
							</div>
						</ReactCSSTransitionGroup>
					)
				})
			}

		</div>
	)
}

MessageLists.defaultProps = {
	lists: [{
		info: "Msg Loading"
	}]
}

export default MessageLists
