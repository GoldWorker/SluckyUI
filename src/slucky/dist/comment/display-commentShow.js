'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayReplyInput = require('./display-replyInput');

var _displayReplyInput2 = _interopRequireDefault(_displayReplyInput);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentShow = function (_Component) {
	_inherits(CommentShow, _Component);

	function CommentShow(props) {
		_classCallCheck(this, CommentShow);

		var _this = _possibleConstructorReturn(this, (CommentShow.__proto__ || Object.getPrototypeOf(CommentShow)).call(this, props));

		_this.artId = _this.props.id;
		return _this;
	}

	_createClass(CommentShow, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var fetchCommentData = this.props.fetchCommentData;

			fetchCommentData(this.artId);
		}
	}, {
		key: 'handleDate',
		value: function handleDate(date) {
			// return (new Date(date)).toLocaleString()
			return (0, _moment2.default)(date).format('YYYY-MM-DD HH:mm:ss');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    handleReplyPublish = _props.handleReplyPublish,
			    items = _props.items;
			// console.log("ITEMS")
			// console.log(items)

			return _react2.default.createElement(
				'div',
				null,
				this.props.items.map(function (elem, index) {
					var replyInputData = {
						id: elem.comment_id,
						index: index
					};
					return _react2.default.createElement(
						'div',
						{ className: 'comment-normalize-box bor-b b-side-s plr16 mb16', key: index },
						_react2.default.createElement(
							'figure',
							{ className: 'user-info-comment' },
							_react2.default.createElement('img', { src: require("../../images/bg_test.jpg"), alt: '', className: 'img-rounded-s bg-tran' }),
							_react2.default.createElement(
								'figcaption',
								{ className: 'ta-c' },
								elem.name
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'comment-content pl16' },
							_react2.default.createElement(
								'p',
								null,
								elem.comment
							),
							_react2.default.createElement(
								'ul',
								{ className: 'reply-normalize-box bg-divider-b', style: elem.reply.length == 0 ? { "display": "none" } : {} },
								elem.reply.map(function (elem, index) {
									return _react2.default.createElement(
										'li',
										{ key: index },
										_react2.default.createElement(
											'span',
											{ className: 'user-info-reply c-theme' },
											elem.name
										),
										_react2.default.createElement(
											'span',
											{ className: 'mlr4' },
											':'
										),
										_react2.default.createElement(
											'span',
											{ className: 'reply-content' },
											elem.reply
										)
									);
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'd-f jc-r ac' },
								_react2.default.createElement(
									'span',
									{ className: 'pl8 pr16 fs12 c-icon-b' },
									_this2.handleDate(elem.date)
								),
								_react2.default.createElement(
									'label',
									{ htmlFor: "comment-toggle" + index, className: 'tag-text ptb6 plr16' },
									'\u56DE\u590D'
								)
							),
							_react2.default.createElement('input', { type: 'checkbox', id: "comment-toggle" + index, className: 'single-toggle' }),
							_react2.default.createElement(
								'div',
								{ className: 'single-toggle-target' },
								_react2.default.createElement(_displayReplyInput2.default, { data: replyInputData, handleReplyPublish: handleReplyPublish })
							)
						)
					);
				})
			);
		}
	}]);

	return CommentShow;
}(_react.Component);

CommentShow.defaultProps = {
	items: []
};

exports.default = CommentShow;