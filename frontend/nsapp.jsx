import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// Createstore with all relevant parameters
import configureStore from './store/store';

// Root component with all provided routes
import Root from './components/root';

// Session actions for Auth
import { signin, signout, signup } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  //Store functionality for bootstrapping
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

  window.store = store;
  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
});
