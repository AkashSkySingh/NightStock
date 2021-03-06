import { hashHistory } from 'react-router';
import * as SessionAPIUtil from '../util/session_api_util';

export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signin = user => dispatch => (
  SessionAPIUtil.signin(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signout = () => dispatch => (
  SessionAPIUtil.signout().then(user => dispatch(receiveCurrentUser(null))).then(hashHistory.push("/"))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
