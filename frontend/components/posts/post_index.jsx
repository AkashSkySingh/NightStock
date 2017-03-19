import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.posts.map(post => (
              <PostIndexItem
                key={post.id}
                deletePost={this.props.deletePost}
                post={post} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
