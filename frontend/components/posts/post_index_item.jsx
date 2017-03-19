import React from 'react';
import { Link, hashHistory } from 'react-router';

const editLink = id => e => {
    e.preventDefault();
    const url = `/posts/${id}/edit`;
    hashHistory.push(url);
};

const PostIndexItem = ({ post, router, deletePost }) => (
  <li>
    <Link to={`/posts/${post.id}`}>
      {post.title}
    </Link>&nbsp;
    <button onClick={editLink(post.id)}>Edit</button>&nbsp;
    <button onClick={() => deletePost(post.id)}>Delete</button>
  </li>
);

export default PostIndexItem;
