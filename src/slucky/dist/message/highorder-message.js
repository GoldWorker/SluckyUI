'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayMessage = require('./display-message');

var _displayMessage2 = _interopRequireDefault(_displayMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		lists: state.messageReducer
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_displayMessage2.default);