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

var ReplyInput = function (_Component) {
	_inherits(ReplyInput, _Component);

	function ReplyInput(props) {
		_classCallCheck(this, ReplyInput);

		var _this = _possibleConstructorReturn(this, (ReplyInput.__proto__ || Object.getPrototypeOf(ReplyInput)).call(this, props));

		_this.state = {
			content: ""
		};
		return _this;
	}

	_createClass(ReplyInput, [{
		key: "handleContentChange",
		value: function handleContentChange(e) {
			this.setState({
				content: e.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			var handleReplyPublish = this.props.handleReplyPublish;
			var _props$data = this.props.data,
			    id = _props$data.id,
			    index = _props$data.index;

			return _react2.default.createElement(
				"div",
				{ className: "publish-comment-box m16" },
				_react2.default.createElement("textarea", { onChange: this.handleContentChange.bind(this), className: "publish-comment-input textarea", placeholder: "\u8F93\u5165\u5185\u5BB9\u3002\u3002\u3002\u3002\u3002\u3002" }),
				_react2.default.createElement(
					"div",
					{ className: "publish-comment-tool bg-divider-b" },
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"label",
							{ htmlFor: "comment-toggle" + index, className: "btn plr8 c-hint-b" },
							"\u5173\u95ED"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "ta-r" },
						_react2.default.createElement(
							"button",
							{ className: "tag-text plr16 ptb6 mt6", onClick: handleReplyPublish.bind(this, id, this.state.content) },
							"\u786E\u8BA4"
						)
					)
				)
			);
		}
	}]);

	return ReplyInput;
}(_react.Component);

exports.default = ReplyInput;