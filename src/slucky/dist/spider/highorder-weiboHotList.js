'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayList = require('./display-list.js');

var _displayList2 = _interopRequireDefault(_displayList);

var _dataWeiboHotList = require('./data-weiboHotList.js');

var _dataWeiboHotList2 = _interopRequireDefault(_dataWeiboHotList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		lists: state.weiboHotListsReducer.items
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchData: function fetchData() {
			return dispatch((0, _dataWeiboHotList2.default)());
		},
		handleClick: function handleClick() {
			return dispatch((0, _dataWeiboHotList2.default)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayList2.default);