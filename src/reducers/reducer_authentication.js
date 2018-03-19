import {
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, STATUS_LOGIN_FAILURE, STATUS_LOGIN_LOGOUT,
    STATUS_LOGIN_REQUEST, STATUS_LOGIN_SUCCESS
} from '../constants/users'

const initialState = {
    user: null,
    status: null,
    error: null,
    loading: false
};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, user: null, status: STATUS_LOGIN_REQUEST, errorAuthentication: null, loading: true};
        case LOGIN_SUCCESS:
            return {user: action.payload, status: STATUS_LOGIN_SUCCESS, errorAuthentication: null, loading: false};
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                status: STATUS_LOGIN_FAILURE,
                errorAuthentication: action.payload,
                loading: false
            };
        case LOGOUT:
            return {...state, user: null, status: STATUS_LOGIN_LOGOUT, errorAuthentication: null, loading: false};
        default:
            return state
    }
}