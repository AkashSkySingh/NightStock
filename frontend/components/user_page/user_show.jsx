import React from 'react';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transition: 0
};

const divStyle = (imgUrl) => ({
  color: 'black',
  backgroundImage: 'url(' + imgUrl + ')',
});

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.masonry = this.masonry.bind(this);
    this.followButton = this.followButton.bind(this);
    this.followSwitch = this.followSwitch.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.ownProps.params.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.userId !== nextProps.params.userId){
      this.props.fetchUser(nextProps.params.userId);
    }
  }

  masonry(){
    if (this.props.userDetail.posts){
      let childElements = this.props.userDetail.posts.map( (post) => {
        return (
          <li key={post.id} >
            <Link to={`/posts/${post.id}`} >
              <img  src={post.image_url}
                className="masonry-post-image"/>
            </Link>
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
          {childElements.reverse()}
        </Masonry>
      );
    }
  }

  followSwitch(){
    if (this.props.currentUser.followees.includes(this.props.userDetail.id)){
      this.props.unfollow(this.props.userDetail.id);
    } else {
      this.props.follow(this.props.userDetail.id);
    }
  }

  followButton(){

    if (this.props.currentUser){
      if (this.props.currentUser.id !== this.props.userDetail.id){
        if (this.props.currentUser.followees.includes(this.props.userDetail.id)){
          return (
            <button className="follow-button user-desc unfollow" onClick={this.followSwitch}>Unfollow!</button>
          );
        } else {
          return (
            <button className="follow-button user-desc follow" onClick={this.followSwitch}>Follow!</button>
          );
        }
      }
    }
  }

  render(){
    let userDetail = this.props.userDetail;

    if (this.props.userDetail.posts){
      return (
        <div className="middle">
          <div className="user-show" >
            <div className="user-imgs" style={divStyle(userDetail.cover_photo_url)}>
              <img className="user-up" src={userDetail.user_image_url} />
              <div className="user-texts" >
                <h1 className="user-un">
                  {userDetail.username}
                </h1>
                <h3 className="user-desc user-descrip">
                  {userDetail.description}
                </h3>
                <div className="user-show-details">
                  <h3 className="user-desc">
                    {`Posts: ${userDetail.posts.length}`}
                  </h3>
                  {this.followButton()}
                  <h3 className="user-desc">
                    {`Following: ${userDetail.followees.length}`}
                  </h3>
                  <h3 className="user-desc">
                    {`Followers: ${userDetail.followers.length}`}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {this.masonry()}
        </div>
      );
    } else {
      return <div className="Middle"></div>;
    }
  }
}

export default UserShow;
