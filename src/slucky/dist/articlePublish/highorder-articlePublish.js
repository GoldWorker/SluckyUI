'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _dataArticlePublish = require('./data-articlePublish');

var _dataArticleDetail = require('../articleDetail/data-articleDetail');

var _displayArticlePublish = require('./display-articlePublish');

var _displayArticlePublish2 = _interopRequireDefault(_displayArticlePublish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        item: state.articleDetailReducer.item
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        handlePublicClick: function handlePublicClick(art) {
            return dispatch((0, _dataArticlePublish.publishArticle)(art));
        },
        handleClickUpdate: function handleClickUpdate(art) {
            return dispatch((0, _dataArticlePublish.putArticle)(art));
        },
        fetchData: function fetchData(id) {
            return dispatch((0, _dataArticleDetail.fetchArticleOne)(id));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_displayArticlePublish2.default);