import React from 'react';
import Masonry from 'react-masonry-component';

let masonryOptions = {
  transition: 0
};


class MGallery extends React.Component {

  render () {
    debugger;
    let childElements = this.state.post.map( (post) => {
      return (
        <li className="masonry-post">
          <img src={post.image_url} alt={post.title}/>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <h4>Located in {post.location}</h4>
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
      </Masonry>
    );
  }
}

export default MGallery;
