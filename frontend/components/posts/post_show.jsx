import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';


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


class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalOpen: false,
      modalType: 'edit'
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.params.postId);
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal(){
    this.setState({
      modalOpen: false,
      modalType: 'new'
    });
  }

  render () {


    const post = this.props.post;

    return (
      <div className="Middle">
        <div className="Post-Show">
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <h3>Photo taken in {post.location}</h3>
          <img src={post.image_url} />
          <button onClick={()=>this.props.deletePost(post.id)}>Delete Post</button>
          <button onClick={()=>this.openModal()}>Edit Post</button>
        </div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
          
          <button className="show-form-b" onClick={this.closeModal.bind(this)}>Cancel</button>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PostShow);
