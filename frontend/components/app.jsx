import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <video playsInline autoPlay muted loop poster="http://res.cloudinary.com/nightstock/image/upload/v1489772984/bxcz1zmodxunyztminxj.gif" id="bgvid">
      <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/4726/BnW.mp4.mp4" type="video/webm" />
    </video>
    <header>
      <Link to="/" className="anchors">
        <img className="Auth-NSLogo"  src="http://res.cloudinary.com/nightstock/image/upload/v1489772788/jkzhpkvnzojqolfyyaeu.png" alt="Moon Logo" />
        <h1>NightStock</h1>
      </Link>
      <GreetingContainer />
    </header>
    { children }
    <footer>
      <ul>
        <li>
          <a href=""><h4>LinkedIn</h4></a>
        </li>
        <li>
          <h4>NightStock</h4>
          <p>
            Created as a Full-Stack Project by Akash Singh.
            <br />
            NightStock is a clone-site based off of <a href="500px.com">500px</a>.
          </p>
        </li>
        <li>
          <a href="https://github.com/AkashSkySingh/NightStock"><h4>GitHub</h4></a>
        </li>
      </ul>
    </footer>
  </div>
);

export default App;
