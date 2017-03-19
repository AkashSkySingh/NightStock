import React from 'react';

import GreetingContainer from './greeting/greeting_container';

import SessionForm from './session_form/session_form';

const App = ({ children }) => (
  <div>
    <video playsInline autoPlay muted loop poster="http://res.cloudinary.com/nightstock/image/upload/v1489772984/bxcz1zmodxunyztminxj.gif" id="bgvid">
      <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/4726/BnW.mp4.mp4" type="video/webm" />
    </video>
    <header>
      <a href="/">
        <img className="Auth-NSLogo"  src="http://res.cloudinary.com/nightstock/image/upload/v1489772788/jkzhpkvnzojqolfyyaeu.png" alt="Moon Logo" />
        <h1>NightStock</h1>
      </a>
      <GreetingContainer />
    </header>
    <div className="Center">
      <div className="Middle">
        <h1 className="Splash-Text">
          A look into night life from around the world.
        </h1>
        <h3 className="Splash-Text">
          Come see what night elsewhere is like.
        </h3>
      </div>
      { children }
    </div>
  </div>
);

export default App;
