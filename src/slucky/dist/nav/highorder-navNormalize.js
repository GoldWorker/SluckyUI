'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _displayNavNormalize = require('./display-navNormalize');

var _displayNavNormalize2 = _interopRequireDefault(_displayNavNormalize);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        isLogined: state.loginReducer.isLogined
    };
};

var mapDispatchToProps = {};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayNavNormalize2.default));