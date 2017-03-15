import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {

  // Logic to prevent non-users accessing internal site routes
  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  //Logic to prevent users from accessing signin/signup routes
  const _redirectIfSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <Route path="/sign-in" component={ SessionFormContainer } onEnter={_redirectIfSignedIn} />
          <Route path="/sign-up" component={ SessionFormContainer } onEnter={_redirectIfSignedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
