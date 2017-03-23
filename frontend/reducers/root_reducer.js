import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import PostDetailReducer from './post_detail_reducer';
import UserDetailReducer from './user_detail_reducer';
import ErrorReducer from './error_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  postDetail: PostDetailReducer,
  userDetail: UserDetailReducer,
  errors: ErrorReducer
});

export default RootReducer;
