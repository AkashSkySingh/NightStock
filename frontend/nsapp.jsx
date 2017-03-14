import React from 'react';
import ReactDOM from 'react-dom';
import signUp from './util/user_api_util';
import { signIn, signOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Testing...</h1>, root);
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;
});
