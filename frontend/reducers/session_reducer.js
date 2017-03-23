
import { RECEIVE_CURRENT_USER, SIGNOUT, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_POST} from '../actions/post_actions';

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
      debugger;
      return merge({}, state, { currentUser: {posts:  currentUserUpdated } });
    case SIGNOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case CLEAR_ERRORS:
      return merge({}, state.errors, {
        errors: []
      });
    default:
      return state;
  }
};

export default SessionReducer;
