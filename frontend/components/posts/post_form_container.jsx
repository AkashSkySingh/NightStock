import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, createPost, updatePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let post = { title: "", description: "", location: "", image_url: "" };
  if(ownProps.params) {
    post = state.posts[ownProps.params.postId];
  }
  let formType = ownProps.formType || "edit";
  return { post, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "new" ? createPost : updatePost;
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    action: post => dispatch(action(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
