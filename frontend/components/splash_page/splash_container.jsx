import { connect } from 'react-redux';
import { fetchSplashPosts } from '../../actions/post_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
  return ({
    posts: state.posts,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSplashPosts: () => dispatch(fetchSplashPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
