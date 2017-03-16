import React from 'react';

import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <a href="/">
        <img src="https://lh4.ggpht.com/nWaHhGxXppsysKYPYUs_sv8YJB4ZLqHboD1zttP_KxB7fOTvc7mOmU3UY2vrmEzrH2s=w300" alt="Moon Logo" />
        <h1>NightStock</h1>
      </a>
      <GreetingContainer />
    </header>
    { children }
  </div>
);

export default App;
