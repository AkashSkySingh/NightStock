import React from 'react';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';
import PostIndexContainer from '../posts/post_index_container';


const masonryOptions = {
  transition: 0
};

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.centerNonSignedIn = this.centerNonSignedIn.bind(this);
    this.centerSignedIn = this.centerSignedIn.bind(this);
    this.splashMasonry = this.splashMasonry.bind(this);
  }

  componentDidMount() {
    this.props.fetchSplashPosts();
  }

  centerNonSignedIn (){
    return (
      <div className="Middle">
        <div className="Wrap" >
          <h1 className="Splash-Text">
            A look into night-life from around the world.
          </h1>
          <h3 className="Splash-Text">
            Come see what night elsewhere is like.
          </h3>
        </div>
        {this.splashMasonry()}
      </div>
    );
  }

  centerSignedIn (){
    return (
      <div className="Middle">
        <div className="Wrap" >
          <h1 className="User-UN">
            {this.props.currentUser.username}
          </h1>
          <h3 className="User-Desc">
            {this.props.currentUser.description}
          </h3>
          <img className="User-CP" src={this.props.currentUser.cover_photo_url} />
          <img className="User-UP" src={this.props.currentUser.user_image_url} />
        </div>
        <PostIndexContainer />
      </div>
    );
  }

  splashMasonry() {
    debugger;

    let childElements = this.props.posts.map( (post) => {
      return (
        <li className="masonry-post" key={post.id} >
          <img src={post.image_url} className="masonry-post-image"  />
        </li>
      );
    });
    return (
      <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}>
        {childElements}
      </Masonry>
    );
  }

  render () {
    debugger;
    return(
      <div>
        {this.props.currentUser ? this.centerSignedIn() : this.centerNonSignedIn() }
      </div>
    );
  }
}

export default Splash;
