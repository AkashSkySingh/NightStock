import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchesPost, updatesPost, deletesPost } from '../../actions/post_detail_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    post: state.postDetail,
    errors: state.errors
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
