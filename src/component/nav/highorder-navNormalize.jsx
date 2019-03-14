import { connect } from 'react-redux'
import NavNormalize from './display-navNormalize'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    isLogined: state.loginReducer.isLogined
})

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavNormalize))
