import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import {verifyAuth} from "../actions/users";


export const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    store.dispatch(verifyAuth());

    return store;
};

