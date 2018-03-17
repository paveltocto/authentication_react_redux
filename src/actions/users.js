import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../constants/users';
import {authentication, signOutUser, verifyAuthentication} from '../services/Auth';
import {history} from "../helpers";
import {SubmissionError} from "redux-form";


const request = (user) => {
    return {type: LOGIN_REQUEST, payload: user};
};

const success = (user) => {
    return {type: LOGIN_SUCCESS, payload: user};
};

const failure = (error) => {
    return {type: LOGIN_FAILURE, payload: error};
};

export const userLogin = (username, password) => {
    return dispatch => {
        dispatch(request({user: {email: username}}));

        authentication(username, password).then(
            response => {
                dispatch(success({user: {email: response.email, uid: response.uid}}));
                history.push('/dashboard');
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

};

export const verifyAuthenticationUser = () => {
    return dispatch => {
        verifyAuthentication().then(function (response) {
            dispatch(success({user: {email: response.email, uid: response.uid}}));
        });
    }
};

export const userLogout = () => {

    return dispatch => {
        signOutUser().then(() => {
            dispatch({type: LOGOUT})
        })
    }
};

