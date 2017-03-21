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
    this.state = this.props.post;
    this.state = {
      modalOpen: false,
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
      modalOpen: false
    });
  }

  render () {
    debugger;

    const post = this.props.post;
    if (!post) {
      return <div><h1>Work in Progress...</h1></div>;
    }

    return (
      <div className="Middle">
        <div className="Wrap">
          <h1>{this.props.post.title}</h1>
        </div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <img src={this.props.post.image_url} alt={this.props.post.title}/>
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.description}</p>
          <h4>Located in {this.props.post.location}</h4>
          <button className="show-form-b" onClick={this.closeModal.bind(this)}>Cancel</button>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PostShow);
