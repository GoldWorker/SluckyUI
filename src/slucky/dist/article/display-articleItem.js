'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleItem = function (_Component) {
	_inherits(ArticleItem, _Component);

	function ArticleItem() {
		_classCallCheck(this, ArticleItem);

		return _possibleConstructorReturn(this, (ArticleItem.__proto__ || Object.getPrototypeOf(ArticleItem)).apply(this, arguments));
	}

	_createClass(ArticleItem, [{
		key: 'render',
		value: function render() {
			var _props$article = this.props.article,
			    title = _props$article.title,
			    date = _props$article.date,
			    hits = _props$article.hits,
			    id = _props$article.id;

			var routerPath = "/article?id=" + id;
			return _react2.default.createElement(
				'div',
				{ className: 'bor-b b-side-s d-f jc-b ac' },
				_react2.default.createElement(
					'span',
					{ className: 'm8' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ className: 'c-theme', to: routerPath },
						title
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'm4 c-icon-b' },
					_react2.default.createElement(
						'div',
						{ className: 'd-il w96' },
						_react2.default.createElement(
							'span',
							{ className: 'mr8' },
							'\u70ED\u5EA6:'
						),
						_react2.default.createElement(
							'span',
							{ className: 'mr24' },
							hits,
							'\u2103'
						)
					),
					_react2.default.createElement(
						'span',
						{ className: 'mr8' },
						'\u65E5\u671F:'
					),
					_react2.default.createElement(
						'span',
						{ className: 'mr8' },
						(0, _moment2.default)(date).format('YYYY-MM-DD HH:mm:ss')
					)
				)
			);
		}
	}]);

	return ArticleItem;
}(_react.Component);

exports.default = ArticleItem;