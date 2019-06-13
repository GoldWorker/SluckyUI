"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentInput = function (_Component) {
	_inherits(CommentInput, _Component);

	function CommentInput(props) {
		_classCallCheck(this, CommentInput);

		var _this = _possibleConstructorReturn(this, (CommentInput.__proto__ || Object.getPrototypeOf(CommentInput)).call(this, props));

		_this.artId = _this.props.id;
		_this.state = {
			content: ""
		};
		return _this;
	}

	_createClass(CommentInput, [{
		key: "handleCommentChange",
		value: function handleCommentChange(e) {
			this.setState({
				content: e.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			var handlePublishComment = this.props.handlePublishComment;

			return _react2.default.createElement(
				"div",
				{ className: "publish-comment-box m16" },
				_react2.default.createElement(
					"p",
					{ className: "pl8 bor-l b-side-s" },
					"\u8BC4\u8BBA"
				),
				_react2.default.createElement("textarea", { name: "", id: "", className: "publish-comment-input textarea", placeholder: "\u8F93\u5165\u5185\u5BB9\u3002\u3002\u3002\u3002\u3002\u3002", onChange: this.handleCommentChange.bind(this) }),
				_react2.default.createElement(
					"div",
					{ className: "publish-comment-tool bg-divider-b" },
					_react2.default.createElement(
						"div",
						{ className: "ta-r" },
						_react2.default.createElement(
							"div",
							{ className: "btn p-r ptb6 svgMutiLine plr24 c-theme", onClick: handlePublishComment.bind(this, this.artId, this.state.content) },
							_react2.default.createElement(
								"svg",
								{
									className: "btn-svgMutiLine",
									viewBox: "0 0 180 64",
									version: "1.1",
									xmlns: "http://www.w3.org/2000/svg" },
								_react2.default.createElement("rect", { className: "shape" })
							),
							_react2.default.createElement(
								"div",
								null,
								"\u53D1\u8868"
							)
						)
					)
				)
			);
		}
	}]);

	return CommentInput;
}(_react.Component);

exports.default = CommentInput;