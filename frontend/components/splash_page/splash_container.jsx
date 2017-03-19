import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
