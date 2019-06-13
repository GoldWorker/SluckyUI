'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _dnd = require('./dnd.js');

var _dnd2 = _interopRequireDefault(_dnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return { temType: state.dndReducer };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateCom: function updateCom() {
            return dispatch();
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_dnd2.default);