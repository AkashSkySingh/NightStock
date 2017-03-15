import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { signIn, signOut } from '../util/session_api_util';
import signUp from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case LOGIN:
      signIn(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      signOut(() => next(action));
      break;
    case SIGNUP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
