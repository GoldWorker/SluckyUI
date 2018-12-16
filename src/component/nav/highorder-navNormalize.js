import { connect } from 'react-redux'
import NavNormalize from './display-navNormalize'

const mapStateToProps = (state, ownProps) => ({
    isLogined: state.loginReducer.isLogined
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavNormalize)
