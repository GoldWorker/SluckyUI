'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _displayDnd = require('./display-dnd');

var _displayDnd2 = _interopRequireDefault(_displayDnd);

var _dataDnd = require('./data-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return { pageConf: state.dndReducer };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    var _ref;

    return _ref = {
        updateCom: function updateCom(currentPage, comName, modName) {
            return dispatch((0, _dataDnd.updateConf)(currentPage, comName, modName));
        },
        updateTemType: function updateTemType(page, type) {
            return dispatch((0, _dataDnd.updateTemType)(page, type));
        },
        updateConf: function updateConf(conf) {
            return dispatch((0, _dataDnd.uploadConf)(conf));
        },
        fetchData: function fetchData() {
            return dispatch((0, _dataDnd.fetchData)());
        }
    }, _defineProperty(_ref, 'updateConf', function updateConf(conf) {
        return dispatch((0, _dataDnd.saveConf)(conf));
    }), _defineProperty(_ref, 'initConf', function initConf() {
        return dispatch((0, _dataDnd.initConf)());
    }), _ref;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayDnd2.default);