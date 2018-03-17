import {combineReducers} from 'redux';
import {authentication} from './reducer_authentication'
import {reducer as reduxFormReducer} from 'redux-form';


const rootReducer = combineReducers({authentication, form: reduxFormReducer});

export default rootReducer;