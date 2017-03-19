import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import App from './app';
import PostIndexContainer from './posts/post_index_container';
import PostShowContainer from './posts/post_show_container';

const Root = ({ store }) => {

  // Logic to prevent non-users accessing internal site routes
  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
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
          <IndexRoute component={PostIndexContainer} />
          <Route path="/posts" component={PostIndexContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path="/users/:userId" component={ UserPage } />
