'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayArticleItem = require('./display-articleItem');

var _displayArticleItem2 = _interopRequireDefault(_displayArticleItem);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


var ArticleLists = function (_Component) {
	_inherits(ArticleLists, _Component);

	function ArticleLists(props) {
		_classCallCheck(this, ArticleLists);

		var _this = _possibleConstructorReturn(this, (ArticleLists.__proto__ || Object.getPrototypeOf(ArticleLists)).call(this, props));

		_this.fetchArticleByPage = _this.props.fetchArticleByPage.bind(_this);
		_this.initialComponent = _this.props.initialComponent.bind(_this);
		_this.state = {
			counter: 0,
			_interval: 10
		};
		console.log(_this.props);
		return _this;
	}

	_createClass(ArticleLists, [{
		key: 'nextPage',
		value: function nextPage() {
			return this.state.counter += this.state._interval;
		}

		// 首屏加载

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// window.addEventListener('scroll', this.handleScroll.bind(this))
			// this.initialComponent()
			var fetchArticle = this.props.fetchArticle;

			fetchArticle();
		}

		// componentWillUnmount() {
		// 	window.removeEventListener('scroll', this.handleScroll.bind(this));
		// }

		// handleScroll() {
		// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 	var scrollHeight = document.body.scrollHeight;
		// 	var screenHeight = window.screen.height;
		// 	var limit = (scrollTop + screenHeight) / scrollHeight
		// 	if (limit >= 1.053) {
		// 		// 瀑布流加载
		// 		this.fetchArticleByPage(this.nextPage())
		// 	}
		// }

	}, {
		key: 'handleClick',
		value: function handleClick() {
			this.fetchArticle(this.nextPage());
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'm16' },
				Array.prototype.map.call(this.props.lists, function (elem, index) {
					return _react2.default.createElement(
						_reactTransitionGroup.CSSTransitionGroup,
						{
							transitionName: 'example',
							transitionAppear: true,
							transitionAppearTimeout: 500,
							transitionEnter: false,
							transitionLeave: false,
							key: index },
						_react2.default.createElement(_displayArticleItem2.default, { article: elem, key: index })
					);
				})
			);
		}
	}]);

	return ArticleLists;
}(_react.Component);

exports.default = ArticleLists;