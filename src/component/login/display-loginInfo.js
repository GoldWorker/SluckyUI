import React, {
	Component,
	PropTypes
} from 'react'
import cookie from 'react-cookie'
import LoginWindow from './display-loginWindow.js'
import DialogWindow from '../dialog/display-dialogWindow.js'

class LoginInfo extends Component {
	render() {
		const {
			userInfo,
			isLogined,
			handleLoginClick,
			handleLogoutClick
		} = this.props

		// config dialog
		const dialog = {
			handleConfirm: handleLogoutClick.bind(this),
			content: "需要立即注销吗？",
			btnText: "注销",
			title: "警告",
			btnClassName: "btn btn-s btn-hollow b-w c-text-w mr8"
		}

		// console.log(JSON.parse(localStorage.getItem("userInfo")))
		return (
			<div className="login-info">
				{
					isLogined?(
							<DialogWindow dialog={dialog}/>
						):(
							<button className="btn btn-s btn-hollow b-w c-text-w mr8" onClick={handleLoginClick.bind(this)}>登录</button>
						)
				}
				<span>{userInfo.msg}</span>
			</div>
		)
	}
}
// LoginInfo.defaultProps = {
// 	userInfo: cookie.load('token') ? JSON.parse(localStorage.getItem("userInfo")) : {
// 		msg: "",
// 		name: ""
// 	}
// }

export default LoginInfo