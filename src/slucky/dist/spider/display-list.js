'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayItem = require('./display-item.js');

var _displayItem2 = _interopRequireDefault(_displayItem);

var _list = require('../lib/list.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var weiboHotLists = function (_Component) {
	_inherits(weiboHotLists, _Component);

	function weiboHotLists(props) {
		_classCallCheck(this, weiboHotLists);

		return _possibleConstructorReturn(this, (weiboHotLists.__proto__ || Object.getPrototypeOf(weiboHotLists)).call(this, props));
	}

	_createClass(weiboHotLists, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var fetchData = this.props.fetchData;

			fetchData();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    handleClick = _props.handleClick,
			    lists = _props.lists;

			return _react2.default.createElement(
				'div',
				null,
				(0, _list.createList)(lists, _displayItem2.default),
				_react2.default.createElement(
					'div',
					{ className: 'ta-c' },
					_react2.default.createElement(
						'button',
						{ className: 'btn btn-m bg-blue m16 c-text-w', onClick: handleClick.bind(this) },
						'\u5237\u65B0\u6F2B\u753B\u70ED\u641C\u699C'
					)
				)
			);
		}
	}]);

	return weiboHotLists;
}(_react.Component);

weiboHotLists.defaultProps = {
	lists: [{
		title: "Loading......"
	}]
};

exports.default = weiboHotLists;