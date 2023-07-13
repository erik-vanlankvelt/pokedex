import createSagaMiddleware from '@redux-saga/core';
import reducer from './rootReducer';

import {
    watchGetPokemon
} from '../sagas/pokeSagas';
import { composeWithDevTools } from 'redux-devtools-extension';
// TODO update redux with @reduxjs/toolkit
import { applyMiddleware, createStore } from 'redux';

export const createSagaStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const composeEnhancers = composeWithDevTools({});
    // TODO update to configureStore
    const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

    sagaMiddleware.run(watchGetPokemon);

    // TODO add more sagas

    return store;
};

export const store = createSagaStore();