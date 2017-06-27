import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  let post = { title: null, description: null, location: null, image_url: null, user_id: state.session.currentUser.id };

  if(ownProps.params) {
    post = state.posts[ownProps.params.postId];
  }
  return ({
    post,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: post => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
