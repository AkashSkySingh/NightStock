import { connect } from 'react-redux';
import Discover from './post_index';
import { fetchPosts } from '../../actions/post_actions';

// Discover page will require its own custom rails url + fixings  to make it functional. JSON views will require user information for most followed users, and most recent posts. Maybe add in user  info for most recent posts, so a user can see who uploaded the content as well.

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(id => state.posts[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
