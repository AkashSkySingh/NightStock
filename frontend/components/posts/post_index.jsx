import React from 'react';
import Masonry from 'react-masonry-component';
import PostIndexItem from './post_index_item';
import Modal from 'react-modal';

const masonryOptions = {
  transition: 0
};

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '7px',
    color                 : 'white',
    backgroundColor       : 'rgba(0, 0, 0, 0.9)',
    width                 : '250px',
    height                : '400px',
    display               : 'flex',
    flexDirection         : 'column',
    textAlign             : 'center',
    justifyContent        : 'space-between',
    padding               : '20px',
    fontFamily            : 'Lato, san-serif',
    border                : '2px solid rgb(204, 204, 204)',
    boxShadow             : '0 0px 100px 60px rgba(0, 0, 0, 1)'
  }
};


class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.showDetails = this.showDetails.bind(this);
    this.state = {
      username: '',
      user_image_url: ''
    };
  }

  showDetails(post){
    this.setState({
      username: post.user.username,
      user_image_url: post.user.user_image_url
    });
  }
  hideDetails(){
    this.setState({
      username: "",
      user_image_url: ""
    });
  }

  render () {

    let childElements = this.props.posts.map( (post) => {
      return (
        <li onMouseEnter={() => this.showDetails(post)} onMouseLeave={() => this.hideDetails(post)} key={post.id} >
          <div  className="masonry-post">
            <img className="masonry-post-image" src={post.image_url} />
            <div className="masonry-post-hover-items">
              <img className="User-hover-image" src={this.state.user_image_url} />
              <h4 className="User-hover-username">{this.state.username}</h4>
            </div>
          </div>
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
