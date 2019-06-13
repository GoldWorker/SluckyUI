'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderReducer = exports.getConf = exports.syncData = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _dataMessage = require('../message/data-message.js');

var _store = require('../store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    index: {
        temType: 'A',
        main: {
            color: '',
            com: 'article'
        },
        dec: {
            color: '',
            com: 'todoList'
        },
        bg: ''
    },
    article: {
        temType: 'A',
        main: {
            color: '',
            com: 'todoList'
        },
        bg: ''
    },
    pub: {
        nav: {
            color: '',
            com: 'nav'
        }
    }
};

var syncData = exports.syncData = function syncData(conf) {
    return { type: 'SYNC_DATA', conf: conf };
};

var getConf = exports.getConf = function getConf(conf) {
    conf = config;
    return { type: 'RECEIVE_CONF_LIST', conf: conf };
};

var renderReducer = exports.renderReducer = function renderReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config;
    var action = arguments[1];

    var _selfState = state;
    console.log(action.type);
    switch (action.type) {
        case "RECEIVE_CONF_LIST":
            return Object.assign({}, state, action.conf);
        case "SYNC_DATA":
            return Object.assign({}, state, action.conf);
        default:
            return state;
    }
};

(0, _store.addReducer)(renderReducer);