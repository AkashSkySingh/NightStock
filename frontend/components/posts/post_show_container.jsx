import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchUser } from '../../actions/user_actions';
import { fetchesPost, updatesPost, deletesPost } from '../../actions/post_detail_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    post: state.postDetail,
    errors: state.errors,
    userDetail: state.userDetail
  });
};

const mapDispatchToProps = dispatch => ({
  fetchesPost: id => dispatch(fetchesPost(id)),
  updatesPost: post => dispatch(updatesPost(post)),
  deletesPost: id => dispatch(deletesPost(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
