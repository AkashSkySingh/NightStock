import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost, updatePost, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    post: state.postDetail
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
