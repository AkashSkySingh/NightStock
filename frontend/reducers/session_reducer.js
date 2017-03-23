
import { RECEIVE_CURRENT_USER, SIGNOUT } from '../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
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
