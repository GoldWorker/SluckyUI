import { connect } from 'react-redux'
import DRenderPage from './display-renderPage'
// import { getConf } from './data-renderPage'
import { fetchData } from './data-dnd'


const renderPage = (currentPage) => {
    const mapStateToProps = (state, ownProps) => ({ pageConf: state.dndReducer, currentPage })

    const mapDispatchToProps = (dispatch) => {
        return {
            getConf: () => dispatch(fetchData()),
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(DRenderPage)
}

export default renderPage

