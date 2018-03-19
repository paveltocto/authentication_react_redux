import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from '../reducers';
import {verifyAuth} from "../actions/users";

const loggerMiddleware = createLogger();


export function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))
    );

    store.dispatch(verifyAuth());

    return store;
}