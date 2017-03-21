import React from 'react';
import Masonry from 'react-masonry-component';
import PostIndexItem from './post_index_item';

const masonryOptions = {
  transition: 0
};


class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {

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
}

export default PostIndex;
