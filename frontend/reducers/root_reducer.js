import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import PostDetailReducer from './post_detail_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  postDetail: PostDetailReducer
});

export default RootReducer;
