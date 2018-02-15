import { RECEIVE_CURRENT_USER } from '../actions/auth';

const _nullSession = {currentUser: null};

export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return {currentUser};
    default:
      return state;
  }
};
