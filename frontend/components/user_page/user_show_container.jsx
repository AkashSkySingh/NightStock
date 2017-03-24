import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';
import { follow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    ownProps,
    userDetail: state.userDetail,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  follow: id => dispatch(follow(id)),
  unfollow: id => dispatch(unfollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
