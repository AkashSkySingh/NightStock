import React from 'react';
import { Link } from 'react-router';
import PostIndexContainer from '../posts/post_index_container';


class Splash extends React.Component {
  constructor(props){
    super(props);
    this.centerNonSignedIn = this.centerNonSignedIn.bind(this);
    this.centerSignedIn = this.centerSignedIn.bind(this);
    this.loadDemoUser = this.loadDemoUser.bind(this);
  }

  loadDemoUser(e){
    e.preventDefault();
    this.props.loadDemo();
  }


  centerNonSignedIn (){
    return (
      <div className="Middle">
        <div className="Wrap" >
          <h1 className="Splash-Text">
            A look into night-life from around the world.
          </h1>
          <h3 className="Splash-Text">
            Come see what night elsewhere is like. &nbsp;&nbsp;
            <button className="Splash-Demo-b" onClick={(e) => this.loadDemoUser(e)}>Demo</button>
          </h3>
        </div>
      </div>
    );
  }

  centerSignedIn (){
    return (
      <div className="Middle">
        <div className="User" >
          <div className="User-imgs">
            <img className="User-CP" src={this.props.currentUser.cover_photo_url} />
            <img className="User-UP" src={this.props.currentUser.user_image_url} />
          </div>
          <div className="User-texts" >
            <h1 className="User-UN">
              {this.props.currentUser.username}
            </h1>
            <h3 className="User-Desc">
              {this.props.currentUser.description}
            </h3>
          </div>
        </div>
        <PostIndexContainer />
      </div>
    );
  }

  render () {
    return(
      <div>
        {this.props.currentUser ? this.centerSignedIn() : this.centerNonSignedIn() }
      </div>
    );
  }
}

export default Splash;
