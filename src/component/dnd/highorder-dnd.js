import { connect } from 'react-redux'
import Dnd from './display-dnd'
import { updateConf, uploadConf, fetchData, updateTemType, saveConf, initConf } from './data-dnd'

const mapStateToProps = (state, ownProps) => ({ pageConf: state.dndReducer })

const mapDispatchToProps = (dispatch) => {
    return {
        updateCom: (currentPage, comName, modName) => dispatch(updateConf(currentPage, comName, modName)),
        updateTemType: (page, type) => dispatch(updateTemType(page, type)),
        updateConf: (conf) => dispatch(uploadConf(conf)),
        fetchData: () => dispatch(fetchData()),
        updateConf: (conf) => dispatch(saveConf(conf)),
        initConf: () => dispatch(initConf())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dnd)
