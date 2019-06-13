'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayArticleDetail = require('./display-articleDetail');

var _displayArticleDetail2 = _interopRequireDefault(_displayArticleDetail);

var _dataArticleDetail = require('./data-articleDetail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (id) {
	var mapStateToProps = function mapStateToProps(state) {
		return {
			item: state.articleDetailReducer.item,
			params: { id: id }
		};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
			handleFetchArticle: function handleFetchArticle(id) {
				return dispatch((0, _dataArticleDetail.fetchArticleOne)(id));
			},
			handleDeleteClick: function handleDeleteClick(id) {
				return dispatch((0, _dataArticleDetail.deleteArticleOne)(id));
			}
		};
	};
	return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayArticleDetail2.default);
};