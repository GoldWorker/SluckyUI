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
	const handleMapStatus = (status = 'success') => {
		switch (status) {
			case 'success':
				return 'c-success';
			case 'hint':
				return 'c-warn';
			case 'warning':
				return 'c-fail';
			default:
				return 'c-success';
		}
	}

	const handleMapTitle = (status = 'success') => {
		switch (status) {
			case 'success':
				return '成功';
			case 'hint':
				return '警告';
			case 'warning':
				return '重试';
			default:
				return false
		}
	}
	return (
		<div className="toastlists-normalize-box">
			{
				props.lists.map((item, index) => {
					return (
						<ReactCSSTransitionGroup
							transitionName="example"
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
							key={index}>
							{/* <div className="toastlist" key={index}>
								<div className={(() => getBgColor(elem.flag))()}>{elem.info}</div>
							</div> */}
							<div className="toastlist" key={index}>
								<div className="toast-item paper" >
									<div className={['pb8', handleMapStatus(item.flag)].join(' ')} style={{ minWidth: 256 + 'px' }}>{handleMapTitle(item.flag) || '消息'}</div>
									<div className="">{item.info}</div>
								</div>
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
