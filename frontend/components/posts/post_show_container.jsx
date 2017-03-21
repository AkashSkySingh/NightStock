import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    post: state.post
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
