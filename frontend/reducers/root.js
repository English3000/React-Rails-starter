import { combineReducers } from 'redux';
import session from './session';
import errors from './errors';
import users from './users';

export default combineReducers({session, errors, users});
