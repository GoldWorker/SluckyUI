'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _dataComment = require('./data-comment');

var _displayCommentShow = require('./display-commentShow');

var _displayCommentShow2 = _interopRequireDefault(_displayCommentShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		items: state.commentReducer.items
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchCommentData: function fetchCommentData(artId) {
			return dispatch((0, _dataComment.fetchCommentData)(artId));
		},
		handleReplyPublish: function handleReplyPublish(commentId, reply) {
			// console.log("ADD REPLY")
			dispatch((0, _dataComment.publishReply)({
				comment_id: commentId,
				reply: reply
			}));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayCommentShow2.default);