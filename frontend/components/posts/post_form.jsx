import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "rpedyrwz";
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/nightstock/image/upload';



const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.9)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '0px',
    color                 : 'white',
    backgroundColor       : 'rgba(0, 0, 0, 1)',
    borderStyle           : 'groove',
    width                 : '250px',
    height                : '600px',
    display               : 'flex',
    flexDirection         : 'column',
    textAlign             : 'center',
    padding               : '20px',
    fontFamily            : 'Lato, san-serif',
    border                : '4px solid rgb(204, 204, 204)'
  }
};



class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.dropZone = this.dropZone.bind(this);
    this.state = {
      title: "",
      description: "",
      image_url: "",
      location: "",
      user_id: this.props.post.user_id,
      uploadCloudinaryUrl: "",
      modalOpen: false
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    Object.keys(this.state).map(
      (key) => {
        if (this.state[key] === ""){
          this.state[key] = undefined;
        }
      }
    );
    this.props.createPost({
      title: this.state.title,
      description: this.state.description,
      image_url: this.state.uploadCloudinaryUrl,
      location: this.state.location,
      user_id: this.state.user_id
    });
    this.closeModal();
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          uploadCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
    this.props.clearErrors();
  }

  closeModal(){
    this.setState({
      modalOpen: false,
      title: "",
      description: "",
      location: "",
      uploadCloudinaryUrl: ""
    });
    this.props.clearErrors();
  }

  dropZone() {
    if (this.state.uploadCloudinaryUrl !== ""){
      return (
        <div className="DZone-preview">
          <img className="post-form-preview-image" src={this.state.uploadCloudinaryUrl} />
        </div>
      );
    } else {
      return (
        <Dropzone
          multiple={false}
          accept='image/*'
          onDrop={this.onImageDrop.bind(this)}
          className="DZone"
          >
          <p>Drag and drop an image into here,
            <br />
            or click to select a picture!</p>
        </Dropzone>
      );
    }
  }

  renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render () {
    return (
      <div>
        <nav >
          <button className="post" onClick={this.openModal.bind(this)}>Create Post</button>
        </nav>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>

          <h3 className="post-form-title">
            Create Post
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
              {this.dropZone()}
              <br/>
              <div className="post-form-buttons">
                <input className="post-form-b" type="submit" value="Create Post" />
                <button className="post-form-b" onClick={this.closeModal}>Cancel</button>
              </div>
            </div>
          </form>

          <br />
          <div className="errors-box">
            {this.renderErrors()}
          </div>

        </Modal>
      </div>
    );
  }
}

export default withRouter(PostForm);
