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
      <div className="middle">
        <div className="wrap" >
          <h1 className="splash-text">
            Night-life photography from around the world.
          </h1>
          <h3 className="splash-text">
            See night time from different perspectives! &nbsp;&nbsp;
            <button className="splash-demo-b" onClick={(e) => this.loadDemoUser(e)}>Click for Demo</button>
          </h3>
        </div>
      </div>
    );
  }

  centerSignedIn (){
    return (
      <div className="middle">
        <div className="user-show" >
          <div className="user-imgs">
            <img className="user-cp" src={this.props.currentUser.cover_photo_url} />
            <img className="user-up" src={this.props.currentUser.user_image_url} />
          </div>
          <div className="user-texts" >
            <h1 className="user-un">
              {this.props.currentUser.username}
            </h1>
            <h3 className="user-desc">
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
