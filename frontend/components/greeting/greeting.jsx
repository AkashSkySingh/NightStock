
import React from 'react';
import { Link } from 'react-router';

import SessionFormContainer from '../session_form/session_form_container';
import PostFormContainer from '../posts/post_form_container';

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
      <hgroup>
        <a href={`api/users/${currentUser.id}`} >
          <img className="header-current-user-img" src={this.props.currentUser.user_image_url} alt="Current User Image"/>
          &nbsp; &nbsp; &nbsp;
          <h2> Hi, {currentUser.username}</h2>
        </a>
        <PostFormContainer />
        <button className="sign sign-right-b" onClick={signout}>Sign Out</button>
      </hgroup>
    );
  }

  render(){
    return (
      <div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.signout) : this.sessionLinks()}
      </div>
    );
  }
}

export default Greeting;
