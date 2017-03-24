import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';


const _nullUser = Object.freeze({
  userDetail: null
});


const UserDetailReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_FOLLOW:
      newState.followers.push(action.follow.follower_id);
      return newState;
    case REMOVE_FOLLOW:
      let deleteIndex = newState.followers.indexOf(action.follow.follower_id);
      newState.followers.splice(deleteIndex, 1);
      return newState;
    case RECEIVE_USER:
      return action.userDetail;
    default:
      return state;
  }
};

export default UserDetailReducer;
