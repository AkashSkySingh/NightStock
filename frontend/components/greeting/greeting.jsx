
import React from 'react';
import { Link } from 'react-router';

import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <SessionFormContainer />
    );
  }

  personalGreeting(currentUser, signout) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={signout}>Sign Out</button>
      </hgroup>
    );
  }

  render(){
    return (
      <div>
        <div className="header-current-user-img">
          {this.props.currentUser.user_image_url}
        </div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.signout) : this.sessionLinks()}
      </div>
    );
  }
}

export default Greeting;
