import React from 'react';
import Masonry from 'react-masonry-component';
import PostIndexItem from './post_index_item';
import Modal from 'react-modal';

const masonryOptions = {
  transition: 0
};


class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  redirect(e, post){
    e.preventDefault();
    return (window.open(`/#/posts/${post.id}`));
  }

  render () {

    let childElements = this.props.posts.map( (post) => {
      return (
        <li key={post.id} >
          <img  src={post.image_url}
          onClick={(e) => this.redirect(e, post)} className="masonry-post-image"/>
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
