import React from 'react';
import ReactDOM from 'react-dom';
import signUp from './util/user_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { signIn, signOut } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={ store }/>, root);
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;
});
