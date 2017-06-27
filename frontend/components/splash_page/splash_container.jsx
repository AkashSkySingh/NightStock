import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const demoUser = {username:"Guest", password:"asd123"};

const mapDispatchToProps = dispatch => ({
  loadDemo: () => dispatch(signin(demoUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
