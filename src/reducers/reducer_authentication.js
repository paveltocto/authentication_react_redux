import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../constants/users'


let user = localStorage.getItem('jwt_token');
const INITIAL_STATE =  user ? {status: 'authenticated'} :  {user: null, status: null, error_message: null, loading: false};

export function authentication(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, user: null, status: 'signin', error_message: null, loading: true};
        case LOGIN_SUCCESS:
            return {user: action.payload.user, status: 'authenticated', error_message: null, loading: false};
        case LOGIN_FAILURE:
            return {...state, user: null, status: 'signin', error_message: action.payload.message, loading: false};
        case LOGOUT:
            return {...state, user: null, status: 'logout', error_message: null, loading: false};
        default:
            return state
    }
}