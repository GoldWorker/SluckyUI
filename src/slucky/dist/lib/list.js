'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createList = exports.createList = function createList(array, Item) {
	return array.map(function (elem, index) {
		return _react2.default.createElement(
			_reactAddonsCssTransitionGroup2.default,
			{
				transitionName: 'example',
				transitionAppear: true,
				transitionAppearTimeout: 500,
				transitionEnter: false,
				transitionLeave: false },
			_react2.default.createElement(Item, { data: elem, key: elem.toString + index })
		);
	});
};