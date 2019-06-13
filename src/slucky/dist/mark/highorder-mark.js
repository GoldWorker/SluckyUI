'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayMark = require('./display-mark.js');

var _displayMark2 = _interopRequireDefault(_displayMark);

var _dataMark = require('./data-mark.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		isToggle: state.markReducer.isToggle
	};
};

var MarkComponent = (0, _reactRedux.connect)(mapStateToProps)(_displayMark2.default);

exports.default = MarkComponent;