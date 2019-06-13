'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// controlled component
var ArticleEditer = function (_Component) {
	_inherits(ArticleEditer, _Component);

	function ArticleEditer(props) {
		_classCallCheck(this, ArticleEditer);

		var _this = _possibleConstructorReturn(this, (ArticleEditer.__proto__ || Object.getPrototypeOf(ArticleEditer)).call(this, props));

		_this.state = {
			title: "",
			content: "",
			id: ''
		};
		_this.params = new URLSearchParams(location.search);
		_this.artId = _this.params.get('id') || '';
		return _this;
	}

	_createClass(ArticleEditer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log('本生命周期之前已经经历了getDefaultPorps,getInitialState');
			console.log('componentWillMount', this.props, this.state);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('componentDidMount', this.props);
			if (this.artId) {
				var fetchData = this.props.fetchData;

				fetchData && fetchData(this.artId);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// 在重新render之前更新state不会重新触发生命周期
			console.log('componentWillReceiveProps', nextProps, this.props);
			var _nextProps$item = nextProps.item,
			    title = _nextProps$item.title,
			    content = _nextProps$item.content,
			    id = _nextProps$item.id;

			this.setState({
				title: title,
				content: content,
				id: id
			});
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			console.log('shouldComponentUpdate', nextProps, this.props);
			return true;
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps) {
			console.log('componentWillUpdate', nextProps, this.props);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log('componentDidUpdate', this.props);
		}
	}, {
		key: 'handleTitleChange',
		value: function handleTitleChange(e) {
			this.setState({
				title: e.target.value
			});
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(e) {
			this.setState({
				content: e.target.value
			});
		}
		// 输入验证

	}, {
		key: 'checkData',
		value: function checkData(e) {
			e.preventDefault();
			var _props = this.props,
			    handlePublicClick = _props.handlePublicClick,
			    handleClickUpdate = _props.handleClickUpdate;

			if (this.state.title && this.state.content) {
				// console.log("publish")
				if (this.artId) {
					handleClickUpdate(this.state);
				} else {
					handlePublicClick(this.state);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			{
				console.log('Render__', this.props.item);
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'd-f editor-tool' },
					_react2.default.createElement('input', { type: 'text', onChange: this.handleTitleChange.bind(this), className: 'input w-full input-normal bg-w', value: this.state.title, maxLength: '50', placeholder: 'Title', required: true }),
					_react2.default.createElement(
						'button',
						{ className: 'tag-text plr16 s0', onClick: this.checkData.bind(this) },
						'\u53D1\u5E03\u6587\u7AE0'
					)
				),
				_react2.default.createElement(
					'form',
					{ className: 'editor-box' },
					_react2.default.createElement('textarea', { placeholder: '# Press something what you think......', className: 'textarea editor-input box', autoFocus: true, value: this.state.content, onChange: this.handleInputChange.bind(this), required: true }),
					_react2.default.createElement(
						'div',
						{ className: 'editor-output box textarea' },
						_react2.default.createElement(_reactMarkdown2.default, { source: this.state.content })
					)
				)
			);
		}
	}]);

	return ArticleEditer;
}(_react.Component);

ArticleEditer.defaultProps = {
	item: {
		id: "",
		title: "",
		content: "# Loding..."
	}
};

exports.default = ArticleEditer;