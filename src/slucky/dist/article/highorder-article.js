'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _displayArticleLists = require('./display-articleLists');

var _displayArticleLists2 = _interopRequireDefault(_displayArticleLists);

var _dataArticle = require('./data-article');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		lists: state.articleListsReducer.items
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchArticleByPage: function fetchArticleByPage(pageId) {
			return dispatch((0, _dataArticle.fetchArticleByPage)(pageId));
		},
		fetchArticle: function fetchArticle() {
			return dispatch((0, _dataArticle.fetchArticle)());
		},
		initialComponent: function initialComponent() {
			return dispatch((0, _dataArticle.initialArticle)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayArticleLists2.default);

// export const HighorderArticle = connect(mapStateToProps, mapDispatchToProps)(ArticleLists)