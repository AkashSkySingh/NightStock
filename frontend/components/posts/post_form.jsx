import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.post;
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
    this.props.action(this.state);
  }

  render () {
    const text = this.props.formType === 'new' ? "Create Post" : "Update Post";
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Location
            <input
              type="text"
              value={this.state.location}
              onChange={this.update('location')} />
          </label>

          <label>
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default PostForm;
