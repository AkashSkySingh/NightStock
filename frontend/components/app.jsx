import React from 'react';

import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <video playsInline autoPlay muted loop poster="https://iso.500px.com/wp-content/uploads/2015/02/gotham_cover-1500x1000.jpeg" id="bgvid">
      <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/4726/BnW.mp4.mp4" type="video/webm" />
    </video>
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
