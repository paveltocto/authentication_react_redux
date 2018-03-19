import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../constants/users';
import {authentication, signOutUser, verifyAuthentication} from '../services/Auth';
import {history} from "../helpers";
import {auth} from "../services/Auth"


const request = () => {
    return {type: LOGIN_REQUEST};
};

const success = (user) => {
    return {type: LOGIN_SUCCESS, payload: user};
};

const failure = (error) => {
    return {type: LOGIN_FAILURE, payload: error};
};

const logout = () => {
    return {type: LOGOUT}
};

const responseUser = (response) => {
    if (response) {
        return {email: response.email, uid: response.uid}
    }
    return {};
};

export const signIn = (username, password) => {
    return dispatch => {
        dispatch(request());

        auth.signInWithEmailAndPassword(username, password).then(response => {
            dispatch(success(responseUser(response)));
            localStorage.setItem('uid_authentication', response.uid);
            history.push('/dashboard');
        }).catch(error => {
            dispatch(failure(error));
        });
    };
};

export const verifyAuth = () => {
    return dispatch => {
        auth.onAuthStateChanged(response => {
            if (response) {
                dispatch(success(responseUser(response)));
            } else {
                dispatch(logout());
            }
        });
    }
};

export const signOut = () => {
    return dispatch => {
        auth.signOut().then(() => {
            dispatch(logout())
            localStorage.removeItem('uid_authentication');
        }, error => {
            dispatch(failure(error))
        })
    }
};

