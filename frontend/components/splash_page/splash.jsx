import React from 'react';
import { Link } from 'react-router';
import PostIndexContainer from '../posts/post_index_container';

const divStyle = (imgUrl) => ({
  color: 'black',
  backgroundImage: 'url(' + imgUrl + ')',
});


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
        <div className="homefeed-show" >
          <div className="homefeed-imgs" style={divStyle(this.props.currentUser.cover_photo_url)} >
            <img className="homefeed-up" src={this.props.currentUser.user_image_url} />
            <div className="homefeed-texts" >
              <h1 className="homefeed-un">
                {`${this.props.currentUser.username}'s Homefeed`}
              </h1>
            </div>
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
