import * as Api from '../utils/api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signUp = credentials => dispatch => Api.signUp(credentials).then(
  user => dispatch(receiveCurrentUser(user.data)),
  err => { dispatch(receiveErrors(err.response.data));
           return err.response.data; }
);

export const signIn = credentials => dispatch => Api.signIn(credentials).then(
  user => dispatch(receiveCurrentUser(user.data)),
  err => { dispatch(receiveErrors(err.response.data));
           return err.response.data; }
);

export const signOut = () => dispatch => Api.signOut().then(
  _ => dispatch(receiveCurrentUser(null))
);
