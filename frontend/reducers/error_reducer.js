import merge from 'lodash/merge';
import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/session_actions';

const _nullErrors = [];

const ErrorReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default ErrorReducer;
