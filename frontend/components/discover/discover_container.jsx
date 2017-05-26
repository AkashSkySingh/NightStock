import { connect } from 'react-redux';
import Discover from './post_index';
import { fetchPosts } from '../../actions/post_actions';

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
