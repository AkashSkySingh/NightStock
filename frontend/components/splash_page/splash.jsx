import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }


  center (){
    return (
      <div className="Middle">
        <h1 className="Splash-Text">
          A look into night life from around the world.
        </h1>
        <h3 className="Splash-Text">
          Come see what night elsewhere is like.
        </h3>
        {this.masonry_cont()}
      </div>
    );
  }

  masonry_cont () {
    return (
      <div className="Middle">
        <h1 className="Splash-Text">Masonry container goes here!</h1>
      </div>
    );
  }

  render () {
    return(
      <div>
        {this.props.currentUser ? this.masonry_cont() : this.center() }
      </div>
    );
  }
}

export default Splash;
