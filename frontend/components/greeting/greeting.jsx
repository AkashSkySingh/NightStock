
import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="signin-signup">
    <Link to="/sign-in" activeClassName="current">Sign In!</Link>
    &nbsp; &nbsp; &nbsp;
    <Link to="/sign-up" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Welcome, {currentUser.username}!</h2>
    <button className="header-button" onClick={signout}>Sign Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? personalGreeting(currentUser, signout) : sessionLinks()
);

export default Greeting;
