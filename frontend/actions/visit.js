import * as Api from '../utils/api';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const visitProfile = id => dispatch => Api.visitProfile(id).then(
  user => { if (user.id) dispatch(receiveUser(user.data)); }
);
