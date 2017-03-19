import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, createPost, updatePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let post = { title: "", description: "", location: "", image_url: "", user_id: state.session.currentUser.id };
  if(ownProps.params) {
    post = state.posts[ownProps.params.postId];
  }
  let formType = ownProps.formType || "new";
  return { post, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    updatePost: post => dispatch(updatePost(post)),
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
