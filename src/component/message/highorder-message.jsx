import {
	connect
} from 'react-redux'
import MessageLists from './display-message.jsx'

const mapStateToProps = (state) => {
	return {
		lists: state.messageReducer
	}
}

export default connect(mapStateToProps)(MessageLists)
