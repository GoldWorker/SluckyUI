import {
	connect
} from 'react-redux'
import LoginWindow from './display-loginWindow.js'
import {
	loginWindowToggle,
	login
} from './data-login.js'

const mapStateToProps = (state) => {
	return {
		isToggle: state.loginReducer.isToggle
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleConfirmClick: (name, pw) => {
			// e.preventDefault()
			dispatch(login(name, pw))
		},
		handleCancelClick: () => dispatch(loginWindowToggle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow)