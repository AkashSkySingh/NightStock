import { connect } from 'react-redux';
import { fetchPost, fetchPosts } from '../../actions/post_actions';
import MGallery from './masonry';

const mapStateToProps = (state) => {
  return ({
    posts: state.posts
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MGallery);
