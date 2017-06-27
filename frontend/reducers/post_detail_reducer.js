import { RECEIVES_POST,
         REMOVES_POST } from '../actions/post_detail_actions';
import merge from 'lodash/merge';

const PostDetailReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVES_POST:
      return action.post;
    case REMOVES_POST:
      let newState = merge({}, oldState);
      delete newState[action.post.id];
      return newState;
    default:
      return oldState;
  }
};

export default PostDetailReducer;
