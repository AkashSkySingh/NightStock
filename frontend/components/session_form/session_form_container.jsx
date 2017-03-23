
import { connect } from 'react-redux';
import { signin, signout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  signedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const demoUser = {username:"Guest", password:"asd123"};

const mapDispatchToProps = (dispatch, { location }) => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  signout: () => dispatch(signout()),
  loadDemo: () => dispatch(signin(demoUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
