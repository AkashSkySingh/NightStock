import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  userDetail: null
});



const UserDetailReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.userDetail;
    default:
      return state;
  }
};

export default UserDetailReducer;
