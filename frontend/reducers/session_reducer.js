
import { RECEIVE_CURRENT_USER, SIGNOUT } from '../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case RECEIVE_FOLLOW:
      newState.currentUser.followees.push(action.follow.followee_id);
      return newState;
    case REMOVE_FOLLOW:
      let deleteIndex = newState.currentUser.followees.indexOf(action.follow.followee_id);
      newState.currentUser.followees.splice(deleteIndex, 1);
      return newState;
    case RECEIVE_POST:
      let currentUserUpdated = merge({}, state.currentUser.posts, {[state.currentUser.posts.length]: action.post});
      return merge({}, state, { currentUser: {posts:  currentUserUpdated } });
    case REMOVE_POST:
      let currentUserUpdates = merge({}, state.currentUser.posts);
      delete currentUserUpdates[action.post.id];
      return merge({}, state, { currentUser: {posts:  currentUserUpdates } });
    case SIGNOUT:
      return merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
