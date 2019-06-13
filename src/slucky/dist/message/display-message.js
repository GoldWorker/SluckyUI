'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageLists = function MessageLists(props) {
	// 过滤flag
	var getBgColor = function getBgColor(flag) {
		// console.log(flag)
		switch (flag) {
			case "hint":
				return "bg-warn shadow";
			case "success":
				return "bg-success shadow";
			case "warning":
				return "bg-fail shadow";
			default:
				return "bg-fail shadow";
		}
	};
	var handleMapStatus = function handleMapStatus() {
		var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

		switch (status) {
			case 'success':
				return 'c-success';
			case 'hint':
				return 'c-warn';
			case 'warning':
				return 'c-fail';
			default:
				return 'c-success';
		}
	};

	var handleMapTitle = function handleMapTitle() {
		var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

		switch (status) {
			case 'success':
				return '成功';
			case 'hint':
				return '警告';
			case 'warning':
				return '重试';
			default:
				return false;
		}
	};
	return _react2.default.createElement(
		'div',
		{ className: 'toastlists-normalize-box' },
		props.lists.map(function (item, index) {
			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{
					transitionName: 'example',
					transitionAppear: true,
					transitionAppearTimeout: 500,
					transitionEnter: false,
					transitionLeave: false,
					key: index },
				_react2.default.createElement(
					'div',
					{ className: 'toastlist', key: index },
					_react2.default.createElement(
						'div',
						{ className: 'toast-item paper' },
						_react2.default.createElement(
							'div',
							{ className: ['pb8', handleMapStatus(item.flag)].join(' '), style: { minWidth: 256 + 'px' } },
							handleMapTitle(item.flag) || '消息'
						),
						_react2.default.createElement(
							'div',
							{ className: '' },
							item.info
						)
					)
				)
			);
		})
	);
};

MessageLists.defaultProps = {
	lists: [{
		info: "Msg Loading"
	}]
};

exports.default = MessageLists;