'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.putArticle = exports.publishArticle = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postSuccess = function postSuccess(data) {
    return {
        type: "PUBLIC_ARTICLE_SUCCESS",
        info: data
    };
}; // let state={
// 	isPublish:bool,
// 	item:{
// 		title:stying,
// 		content:string
// 	}
// 	info:{}
// }


var postError = function postError(err) {
    return {
        type: "PUBLIC_ARTICLE_ERROR",
        error: err
    };
};

var putSuccess = function putSuccess(data) {
    return {
        type: "UPDATE_ARTICLE_SUCCESS",
        info: data
    };
};

var putError = function putError(err) {
    return {
        type: "UPDATE_ARTICLE_ERROR",
        error: err
    };
};

var publishArticle = exports.publishArticle = function publishArticle() {
    var art = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch) {
        (0, _isomorphicFetch2.default)(__API__.articleEdit, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(art)
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            if (data.error) {
                dispatch(postError(data));
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "No Access",
                    flag: "hint"
                }));
            } else {
                dispatch(postSuccess(data));
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "Publish Article Success",
                    flag: "success"
                }));
            }
        }).catch(function (err) {
            dispatch(postError(err));
            dispatch((0, _dataMessage.pushInQueue)({
                info: "Internet Error",
                flag: "warning"
            }));
        });
    };
};

var putArticle = exports.putArticle = function putArticle() {
    var art = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch) {
        (0, _isomorphicFetch2.default)(__API__.articleEdit, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(art)
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            if (data.error) {
                dispatch(putError(data));
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "No Access",
                    flag: "hint"
                }));
            } else {
                dispatch(putSuccess(data));
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "Update Article Success",
                    flag: "success"
                }));
            }
        }).catch(function (err) {
            dispatch(putError(err));
            dispatch((0, _dataMessage.pushInQueue)({
                info: "Internet Error",
                flag: "warning"
            }));
        });
    };
};

var articlePublicReducer = function articlePublicReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isPublish: false,
        isUpdate: false
    };
    var action = arguments[1];

    switch (action.type) {
        case "PUBLIC_ARTICLE_SUCCESS":
            return Object.assign({}, state, {
                isPublish: true,
                info: action.info
            });
        case "PUBLIC_ARTICLE_ERROR":
            return Object.assign({}, state, {
                isPublish: false,
                info: action.info
            });
        case "UPDATE_ARTICLE_SUCCESS":
            return Object.assign({}, state, {
                isUpdate: true,
                info: action.info
            });
        case "UPDATE_ARTICLE_ERROR":
            return Object.assign({}, state, {
                isUpdate: false,
                info: action.info
            });
        default:
            return state;
    }
};

(0, _store.addReducer)(articlePublicReducer, 'articlePublicReducer');