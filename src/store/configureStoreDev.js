import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from "redux-logger";
import {verifyAuth} from "../actions/users";

const loggerMiddleware = createLogger();


export const configureStore = () => {
    const finalCreateStore = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(reducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    store.dispatch(verifyAuth());

    return store;
};