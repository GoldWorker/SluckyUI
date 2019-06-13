'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _dataComment = require('./data-comment');

var _displayCommentInput = require('./display-commentInput');

var _displayCommentInput2 = _interopRequireDefault(_displayCommentInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		handlePublishComment: function handlePublishComment(artId, content) {
			return dispatch((0, _dataComment.publishComment)({
				article_id: artId,
				comment: content
			}));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayCommentInput2.default);