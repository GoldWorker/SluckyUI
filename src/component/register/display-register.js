import React, {
	Component
} from 'react'
import validator from '../lib/validator.js'
import ValidInput from './display-validInput.js'
import ValidSearchInput from './display-validSearchInput.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				email: "",
				emailVerifyCode: "",
				name: "",
				password: "",
				passwordAgain: ""
			},
			result: {}
		}
		validator.config = {
			email: ['isEmpty', 'isEmail'],
			emailVerifyCode: ['isEmpty'],
			name: ['isName', 'isEmpty'],
			password: ['isEmpty', 'isPw'],
			passwordAgain: ['isEmpty', 'isPwAgain']
		}
		this.registerConfirm = this.props.registerConfirm.bind(this)
		this.handleVerifyCodeSend = this.props.handleVerifyCodeSend.bind(this)
	}
	handleInputChange(key, e) {
		let tar = this.state.data
		tar[key] = e.target.value
		this.setState({
			data: tar
		})
	}
	handleFormConfirm(e) {
		e.preventDefault()
		var data = this.state.data
		var result = validator.validate(data)
		this.setState({
			result: result
		})
		console.log(this.state.result)
		if (validator.isSubmit()) {
			this.registerConfirm(this.state.data)
		}
	}
	handleEmailSend() {
		var email = this.state.data.email
		var res = validator.validateOne('email', email)
		this.setState({
			result: {
				email: res
			}
		})
		if (res.isValid) {
			this.handleVerifyCodeSend(email)
		}
	}
	render() {
		return (
			<div className="register-container">
				<div className="register-mark"></div>
				<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
					<form className="paper p16 register-item" key="registerForm">
						<p className="ta-c mb4 mt0"><strong>注册</strong></p>
						
						<ValidSearchInput btnText="发送" handleInputChange={this.handleInputChange.bind(this,'email')} handleBtnClick={this.handleEmailSend.bind(this)} name='邮箱' placeholder="
						常用邮箱" data={this.state.result['email']}/>
				        <br/>

						<ValidInput handleInputChange={this.handleInputChange.bind(this,'emailVerifyCode')} name='验证码' placeholder="
						输入邮箱里的验证码" data={this.state.result['emailVerifyCode']}/>
				        <br/>

				        <ValidInput handleInputChange={this.handleInputChange.bind(this,'name')} name='昵称' placeholder="
						不能含有标点" data={this.state.result['name']}/>
				        <br/>


				        <ValidInput handleInputChange={this.handleInputChange.bind(this,'password')} name='密码' placeholder="
						由数组或字母组成" data={this.state.result['password']}/>
				        <br/>

				        <ValidInput handleInputChange={this.handleInputChange.bind(this,'passwordAgain')} name='再次确认密码' placeholder="
						要跟楼上一样" data={this.state.result['passwordAgain']}/>
				        <br/>

				        <div className="ta-c ptb8">
							<button type="submit" className="btn btn-s btn-tp c-blue" onClick={this.handleFormConfirm.bind(this)}>确认</button>
						</div>
					</form>
				</ReactCSSTransitionGroup>
			</div>

		)
	}
}

export default Register