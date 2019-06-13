'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _highorderCommentShow = require('../comment/highorder-commentShow');

var _highorderCommentShow2 = _interopRequireDefault(_highorderCommentShow);

var _highorderCommentInput = require('../comment/highorder-commentInput');

var _highorderCommentInput2 = _interopRequireDefault(_highorderCommentInput);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactTransitionGroup = require('react-transition-group');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


// article show in markdown
var ArticleDetail = function (_Component) {
	_inherits(ArticleDetail, _Component);

	function ArticleDetail(props) {
		_classCallCheck(this, ArticleDetail);

		var _this = _possibleConstructorReturn(this, (ArticleDetail.__proto__ || Object.getPrototypeOf(ArticleDetail)).call(this, props));

		_this.params = new URLSearchParams(location.search);
		_this.artId = _this.params.get('id');
		// console.log(this.params.get('id'), this.props);
		return _this;
	}

	_createClass(ArticleDetail, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('componentDidMount', this.props);
			var handleFetchArticle = this.props.handleFetchArticle;
			// this.artId = this.props.params.id

			handleFetchArticle(this.artId);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$item = this.props.item,
			    id = _props$item.id,
			    title = _props$item.title,
			    content = _props$item.content,
			    date = _props$item.date;
			var _props = this.props,
			    handleDeleteClick = _props.handleDeleteClick,
			    isLogined = _props.isLogined;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactTransitionGroup.CSSTransitionGroup,
					{
						transitionName: 'example',
						transitionAppear: true,
						transitionAppearTimeout: 500,
						transitionEnter: false,
						transitionLeave: false },
					_react2.default.createElement(
						'div',
						{ className: 'd-f jc' },
						_react2.default.createElement(
							'div',
							{ style: { width: 1000 + 'px' } },
							_react2.default.createElement(
								'div',
								{ className: 'hint-box-nor mtb16 article-detail-box' },
								_react2.default.createElement(
									'div',
									{ className: 'article-detail' },
									_react2.default.createElement(
										'span',
										{ className: 'c-theme mr8' },
										'\u6807\u9898:'
									),
									_react2.default.createElement(
										'span',
										{ className: 'mr24' },
										title
									),
									_react2.default.createElement(
										'span',
										{ className: 'c-theme mr8' },
										'\u65E5\u671F:'
									),
									_react2.default.createElement(
										'span',
										{ className: 'mr24' },
										(0, _moment2.default)(date).format('YYYY-MM-DD HH:mm:ss')
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'article-handle d-f ac' },
									_react2.default.createElement(
										'div',
										{ style: isLogined ? {} : { display: 'none' }, className: 'd-il' },
										_react2.default.createElement(
											_reactRouterDom.Link,
											{ className: 'btn plr16 ptb6 bg-theme c-text-w mr8', to: '/edit?id=' + this.artId },
											'\u7F16\u8F91'
										)
									),
									_react2.default.createElement(
										'button',
										{ style: isLogined ? {} : { display: 'none' }, className: 'btn plr16 ptb6 bg-fail c-text-w', onClick: handleDeleteClick.bind(this, this.artId) },
										'\u5220\u9664'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'mt16' },
								_react2.default.createElement(
									_reactHighlight2.default,
									{ innerHTML: true },
									_server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: content }))
								)
							),
							_react2.default.createElement(_highorderCommentInput2.default, { id: this.artId }),
							_react2.default.createElement(_highorderCommentShow2.default, { id: this.artId })
						)
					)
				)
			);
		}
	}]);

	return ArticleDetail;
}(_react.Component);

ArticleDetail.defaultProps = {
	item: {
		id: "",
		title: "",
		content: "# Loding..."
	}
};

exports.default = ArticleDetail;