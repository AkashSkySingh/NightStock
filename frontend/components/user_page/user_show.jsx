import React from 'react';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transition: 0
};

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.masonry = this.masonry.bind(this);
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

  render(){
    let userDetail = this.props.userDetail;

    return (
      <div className="middle">
        <div className="user-show" >
          <div className="user-imgs">
            <img className="user-cp" src={userDetail.cover_photo_url} />
            <img className="user-up" src={userDetail.user_image_url} />
          </div>
          <div className="user-texts" >
            <h1 className="user-un">
              {userDetail.username}
            </h1>
            <h3 className="user-desc">
              {userDetail.description}
            </h3>
          </div>
        </div>
        {this.masonry()}
      </div>
    );
  }
}

export default UserShow;
