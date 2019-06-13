import {connect} from 'react-redux';
import dnd from './dnd.js'

const mapStateToProps = (state) => {
    return {temType: state.dndReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCom: () => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dnd)