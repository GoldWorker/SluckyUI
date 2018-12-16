import {
	connect
} from 'react-redux';
import LoginInfo from './display-loginInfo.js'
import {
	loginWindowToggle,
	logout
} from './data-login.js'


const mapStateToProps = (state) => {
	return {
		userInfo: state.loginReducer.userInfo,
		isLogined: state.loginReducer.isLogined
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoginClick: () => dispatch(loginWindowToggle()),
		handleLogoutClick: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginInfo)