'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateReducer = exports.getStore = exports.addReducer = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {}; // export default todos


var addReducer = function addReducer(reducer, name) {
    reducers[name] = reducer;
    console.log(reducers, reducer.name);
};

var updateReducer = function updateReducer(store) {
    store.replaceReducer((0, _redux.combineReducers)(reducers));
};

var getStore = function getStore() {
    var reducerCollection = (0, _redux.combineReducers)(reducers);
    var loggerMiddleware = (0, _reduxLogger.createLogger)();
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
    return (0, _redux.createStore)(reducerCollection,
    /* preloadedState, */
    composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware)));
};

exports.addReducer = addReducer;
exports.getStore = getStore;
exports.updateReducer = updateReducer;