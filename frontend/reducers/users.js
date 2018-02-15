import { RECEIVE_CURRENT_USER } from '../actions/auth';
import { RECEIVE_USER } from '../actions/visit';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      if (action.user) newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
