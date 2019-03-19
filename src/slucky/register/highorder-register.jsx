import {
	connect
} from 'react-redux'
import Register from './display-register.jsx'
import {
	verifyEmail,
	register
} from './data-register.jsx'

const mapStateToProps = (state) => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleVerifyCodeSend: (email) => dispatch(verifyEmail({
			email: email
		})),
		registerConfirm: (data) => dispatch(register(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
