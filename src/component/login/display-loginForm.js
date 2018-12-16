import React, {
	Component,
	PropTypes
} from 'react'

class loginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nameValue: "",
			pwValue: ""
		}
	}
	handleNameChange(e) {
		this.setState({
			nameValue: e.target.value
		})
	}
	handlePwChange(e) {
		this.setState({
			pwValue: e.target.value
		})
	}
	render() {
		const {
			handleSubmitClick
		} = this.props
		return (
			<div>

					<div className="dialog-content">
						<p className="mt0 mb4 ta-c"><strong>登录</strong></p>
						<div className="input pt8">
				            <label htmlFor="userNameInput" className="fs12 c-grey">邮箱：</label>
			            <br/>
			            <input onChange={this.handleNameChange.bind(this)} id="userNameInput" type="text" className="input-down" placeholder="仅限邮箱登录" maxLength="24" autoFocus required/>
			        </div>
			        <br/>
			        <div className="input pt8">
			            <label htmlFor="userPwInput" className="fs12 c-grey">密码：</label>
			            <br/>
			            <input onChange={this.handlePwChange.bind(this)} id="userPwInput" type="password" className="input-down" placeholder="你会忘记的" maxLength="24" required/>
				        </div>
					</div>
					<div className="ta-c pb8">
						<button type="button" className="btn btn-s btn-tp c-blue" onClick={handleSubmitClick.bind(this,this.state.nameValue,this.state.pwValue)}>确认</button>
					</div>

			</div>

		)
	}

}

export default loginForm