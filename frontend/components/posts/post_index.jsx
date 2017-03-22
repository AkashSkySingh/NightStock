import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transition: 0
};


class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  render () {
    let childElements = this.props.posts.map( (post) => {
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
        {childElements}
      </Masonry>
    );
  }
}

export default withRouter(PostIndex);
