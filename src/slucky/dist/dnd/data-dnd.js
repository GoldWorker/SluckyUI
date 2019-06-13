'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dndReducer = exports.initConf = exports.saveConf = exports.fetchData = exports.updateTemType = exports.uploadConf = exports.updateConf = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message.js');

var _store = require('../store.js');

var _dataRenderPage = require('./data-renderPage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    index: {
        temType: 'A',
        main: {
            color: '',
            com: ''
        },
        dec: {
            color: '',
            com: ''
        },
        bg: ''
    },
    article: {
        temType: 'A',
        main: {
            color: '',
            com: ''
        },
        bg: ''
    },
    pub: {
        nav: {
            color: '',
            com: ''
        }
    }
};

var updateConf = exports.updateConf = function updateConf(currentPage, comName, modName) {
    return { type: 'UPDATE_COM_CONF', currentPage: currentPage, comName: comName, modName: modName };
};

var uploadConf = exports.uploadConf = function uploadConf(conf) {
    return function (dispatch) {
        dispatch((0, _dataRenderPage.syncData)(conf));
    };
    // return { type: 'SAVE_CONF', conf }
};

var updateTemType = exports.updateTemType = function updateTemType(page, temType) {
    return { type: 'UPDATE_TEM_CONF', page: page, temType: temType };
};

var receiveData = function receiveData(conf) {
    return { type: 'RECEIVE_DND_CONF', conf: conf };
};

var fetchData = exports.fetchData = function fetchData(conf) {
    return function (dispatch) {
        (0, _isomorphicFetch2.default)(__API__.comConf, {
            method: "GET"
            // credentials: 'include'
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            console.log(data);
            if (data.error) {
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "No Access",
                    flag: "hint"
                }));
            }
            dispatch(receiveData(data));
        }).catch(function (err) {
            console.log("error");
            dispatch((0, _dataMessage.pushInQueue)({
                info: "Place check your Internet",
                flag: "warning"
            }));
        });
    };
};

var saveConf = exports.saveConf = function saveConf() {
    var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch) {
        (0, _isomorphicFetch2.default)(__API__.comConfUpdate, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(conf)
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            if (data.error) {
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "No Access",
                    flag: "hint"
                }));
            } else {
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "save config Success",
                    flag: "success"
                }));
            }
        }).catch(function (err) {
            dispatch((0, _dataMessage.pushInQueue)({
                info: "Internet Error",
                flag: "warning"
            }));
        });
    };
};

var initConf = exports.initConf = function initConf() {
    return function (dispatch) {
        (0, _isomorphicFetch2.default)(__API__.comConfUpdate, {
            method: "PUT",
            credentials: "include"
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            if (data.error) {
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "No Access",
                    flag: "hint"
                }));
            } else {
                dispatch((0, _dataMessage.pushInQueue)({
                    info: "init config Success",
                    flag: "success"
                }));
                dispatch(receiveData(data));
            }
        }).catch(function (err) {
            dispatch((0, _dataMessage.pushInQueue)({
                info: "Internet Error",
                flag: "warning"
            }));
        });
    };
};

var dndReducer = exports.dndReducer = function dndReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config;
    var action = arguments[1];

    var _selfState = state;
    console.log(action.type);
    switch (action.type) {
        case "RECEIVE_DND_CONF":
            return Object.assign({}, state, action.conf);

        case "UPDATE_TEM_CONF":
            var page = action.page,
                temType = action.temType;

            _selfState[page].temType = temType;
            return Object.assign({}, state, _selfState);
        case "UPDATE_COM_CONF":
            var currentPage = action.currentPage,
                comName = action.comName,
                modName = action.modName;

            console.log(currentPage, comName, modName);
            // 判断公共组件
            if (_selfState[currentPage][modName]) {
                _selfState[currentPage][modName].com = comName;
                return Object.assign({}, state, _selfState);
            } else if (_selfState.pub[modName]) {
                console.log(_selfState.pub[modName]);
                _selfState.pub[modName].com = comName;
                return Object.assign({}, state, _selfState);
            } else return state;

        case "UPDATE_PUBLIC_CONF":
            return Object.assign({}, state, { public: action.comConf });
        default:
            return state;
    }
};

(0, _store.addReducer)(dndReducer);