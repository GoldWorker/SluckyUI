import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = {};

const addReducer = (reducer, name) => {
    reducers[name] = reducer;
    // console.log(reducers, reducer.name);
};

const updateReducer = (store) => {
    store.replaceReducer(combineReducers(reducers));
};

const getStore = () => {
    let reducerCollection = combineReducers(reducers);
    let loggerMiddleware = createLogger();
    let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducerCollection,
        /* preloadedState, */
        composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
};

export { addReducer, getStore, updateReducer };
