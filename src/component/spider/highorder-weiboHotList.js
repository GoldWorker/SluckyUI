import {
	connect
} from 'react-redux';
import List from './display-list.js'
import fetchWeiboHotData from './data-weiboHotList.js'

const mapStateToProps = (state) => {
	return {
		lists: state.weiboHotListsReducer.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => dispatch(fetchWeiboHotData()),
		handleClick: () => dispatch(fetchWeiboHotData())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(List)