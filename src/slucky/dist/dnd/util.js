'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _highorderTodoList = require('../../components/todoList/highorder-todoList');

var _highorderTodoList2 = _interopRequireDefault(_highorderTodoList);

var _displayAbout = require('../../components/about/display-about');

var _displayAbout2 = _interopRequireDefault(_displayAbout);

var _highorderNavNormalize = require('../../components/nav/highorder-navNormalize');

var _highorderNavNormalize2 = _interopRequireDefault(_highorderNavNormalize);

var _highorderArticle = require('../../components/article/highorder-article');

var _highorderArticle2 = _interopRequireDefault(_highorderArticle);

var _highorderArticleDetailHot = require('../../components/articleDetail/highorder-articleDetailHot');

var _highorderArticleDetailHot2 = _interopRequireDefault(_highorderArticleDetailHot);

var _highorderWeiboHotList = require('../../components/spider/highorder-weiboHotList');

var _highorderWeiboHotList2 = _interopRequireDefault(_highorderWeiboHotList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    onLoadCom: function onLoadCom(name, cb) {
        switch (name) {
            case 'todoList':
                return _highorderTodoList2.default;
                break;
            case 'nav':
                return _highorderNavNormalize2.default;
                break;
            case 'about':
                return _displayAbout2.default;
                break;
            case 'article':
                return _highorderArticle2.default;
            case 'articleDetail':
                return (0, _highorderArticleDetailHot2.default)(41);
            case 'weiboHotList':
                return _highorderWeiboHotList2.default;
            default:
                break;
        }
    }
};