import {
	connect
} from 'react-redux'
import Mark from './display-mark.js'

import {
	toggleMark
} from './data-mark.js'


const mapStateToProps = (state) => {
	return {
		isToggle: state.markReducer.isToggle
	}
}

const MarkComponent = connect(
	mapStateToProps
)(Mark)

export default MarkComponent