import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "rpedyrwz";
const CLOUDINARY_URL = 'https://api/cloudinary.com/v1_1/nightstock';



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



class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = this.props.post;
    this.state = {
      image_url: '',
      modalOpen: false,
      modalType: "new"
    };
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchPost(this.props.params.postId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.post);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.modalType === 'new') {
      this.props.createPost(this.state);
    } else {
      this.props.editPost(this.state);
    }

  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {

      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal(){
    this.setState({
      modalOpen: false,
      title: "",
      description: "",
      location: "",
      image_url: ""
    });
  }

  render () {
    const text = this.props.formType === 'new' ? "Create Post" : "Update Post";
    return (
      <div>
        <nav >
          <button className="post" onClick={this.openModal.bind(this)}>{text}</button>
        </nav>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>

          <h3 className="post-form-title">
            {text}
          </h3>

          <form onSubmit={this.handleSubmit}>
            <div className="post-form">
              <br />
              <label>Title:
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')} />
              </label>
              <br />

              <label>Location:
                <input
                  type="text"
                  value={this.state.location}
                  onChange={this.update('location')} />
              </label>
              <br/>

              <label>Details:
                <textarea
                  value={this.state.description}
                  onChange={this.update('description')} />
              </label>
              <br/>

              <Dropzone
                multiple={false}
                accept='image/*'
                onDrop={this.onImageDrop.bind(this)}
                className="DZone">
                <p>Drop and drop an image,
                  <br />
                  or click to select a picture!</p>
              </Dropzone>
              <br/>

              <input type="hidden" value={this.state.image_url} />

              <input className="post-form-b" type="submit" value={text} />
            <button className="post-form-b" onClick={this.closeModal.bind(this)}>Cancel</button>

          </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PostForm);
