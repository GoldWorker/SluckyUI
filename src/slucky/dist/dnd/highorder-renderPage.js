'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _displayRenderPage = require('./display-renderPage');

var _displayRenderPage2 = _interopRequireDefault(_displayRenderPage);

var _dataDnd = require('./data-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPage = function renderPage(currentPage) {
    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return { pageConf: state.dndReducer, currentPage: currentPage };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            getConf: function getConf() {
                return dispatch((0, _dataDnd.fetchData)());
            }
        };
    };
    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayRenderPage2.default);
};
// import { getConf } from './data-renderPage'
exports.default = renderPage;