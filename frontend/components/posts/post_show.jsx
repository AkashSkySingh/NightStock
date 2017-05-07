import React from 'react';
import { hashHistory, Link, withRouter } from 'react-router';
import Modal from 'react-modal';


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
    height                : '400px',
    display               : 'flex',
    flexDirection         : 'column',
    textAlign             : 'center',
    padding               : '20px',
    fontFamily            : 'Lato, san-serif',
    border                : '4px solid rgb(204, 204, 204)'
  }
};


class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.creatorDetails = this.creatorDetails.bind(this);
    this.creatorButtons = this.creatorButtons.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.state = {
      modalOpen: false,
      modalType: 'edit',
      title: this.props.post.title,
      description: this.props.post.description,
      location: this.props.post.location,
      user_id: this.props.post.user_id,
      image_url: this.props.post.image_url
    };
    console.log(props);
  }

  componentDidMount() {
    this.props.fetchesPost(this.props.params.postId);
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
    this.props.updatesPost(this.state);
    this.props.clearErrors();
    if (this.props.errors === null) {
      this.closeModal();
    }
  }

  openModal() {
    let eb = document.getElementById("edit-post");
    eb.blur();
    this.setState({
      modalOpen: true
    });
    this.props.clearErrors();
  }

  closeModal(){
    this.setState({
      modalOpen: false
    });
    this.props.clearErrors();
  }

  creatorDetails(){
    if (this.props.post.user){
      return (
          <Link className="post-show-user-details" to={`users/${this.props.post.user.user_id}`}>
            <h2 className="post-show-user-by">By:</h2>
            <img src={this.props.post.user.user_image_url} className="post-show-user-img"/>
            <h2 className="post-show-user-un" >{this.props.post.user.username}</h2>
          </Link>

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

  creatorButtons(){
    if (this.props.currentUser){
      if (this.props.post.user){
        if (this.props.post.user.user_id === this.props.currentUser.id){
          return (
            <div className="post-show-buttons">
              <button id="edit-post" className="post-show-b" onClick={()=>this.openModal()}>Edit Post</button>
            </div>
          );
        }
      }
    }
  }

  moveForward() {
    let post = this.props.post;
    let posts = this.props.userDetail.posts;
    let index = null;
    for (let i = 0; i < posts.length; i++) {
      if (post.id === posts[i].id) {
        index = i;
      }
    }
    if (index !== posts.length - 1) {
      hashHistory.push(`/posts/${posts[index + 1].id}`)
    } else {
      hashHistory.push(`/posts/${posts[0].id}`)
    }
  }

  moveBackward() {
    let { carList, index, lastIndex } = this.cars();

    if (index) {

      if (parseInt(index) !== 0) {
        hashHistory.push(`/cars/${carList[parseInt(index) - 1].id}`)
      } else {
        hashHistory.push(`/cars/${carList[lastIndex].id}`)
      }

    } else {
      if (this.props.id !== 1) {
        hashHistory.push(`/cars/${this.props.id - 1}`);
      } else {
        hashHistory.push(`/cars/${2360}`);
      }
    }
  }


  render () {
    const post = this.props.post;

    return (
      <div className="middle">

        <div className="post-show-wrap">
          <div className="arrow" onClick={this.moveBackward}>
            <img className="arrow-img" src="https://res.cloudinary.com/nightstock/image/upload/s--zQgvR_x5--/a_180/v1493781285/arrow-right-white_hubelu.png" />
          </div>

          <div className="post-show">
            <img className="post-show-img" src={post.image_url} />
            <div className="post-show-details">
              <h1 className="post-show-title">
                {post.title}
              </h1>
              {this.creatorDetails()}
              <div className="post-show-buttonloc">
                {this.creatorButtons()}
                <h4 className="post-show-loc">
                  Photo taken in:
                  <br />
                  {post.location}
                </h4>
              </div>
              <h3 className="post-show-desc">
                {post.description}
              </h3>
            </div>
          </div>
          <Modal
            contentLabel="Modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}>

            <h3 className="post-form-title">
              Update Post
            </h3>

            <form className="post-form" onSubmit={this.handleSubmit}>

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

                <br/>
                <div className="post-form-buttons">
                  <input className="post-form-b" type="submit" value="Update Post" />
                  <button className="post-form-b"  onClick={()=>this.props.deletesPost(post.id)}>Delete Post</button>
                </div>
              </form>
            <br />
            <div className="errors-box">
              {this.renderErrors()}
            </div>
          </Modal>

          <div className="arrow" onClick={this.moveForward}>
            <img className="arrow-img" src="https://res.cloudinary.com/nightstock/image/upload/s--JqZfSSuS--/v1493781285/arrow-right-white_hubelu.png" />
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(PostShow);
