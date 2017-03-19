import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (props) => {
  return ({
    currentUser: props.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  signup: () => dispatch(signup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
