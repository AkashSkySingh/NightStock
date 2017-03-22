import * as PostApiUtil from '../util/post_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePost = (post) => {
  return ({
    type: RECEIVE_POST,
    post
  });
};

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const fetchPosts = () => dispatch => {
  return PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));
};

export const fetchPost = id => dispatch => {
  return PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)));
};

export const updatePost = post => dispatch => {
  return PostApiUtil.updatePost(post)
  .then(post => dispatch(receivePost(post)))
  .then(hashHistory.push("/"));
};

export const createPost = post => dispatch => {
  return PostApiUtil.createPost(post).then(post => dispatch(receivePost(post))).then(hashHistory.push(`/posts/${post.id}`));
};

export const deletePost = id => dispatch => {
  return PostApiUtil.deletePost(id).then(post => dispatch(removePost(post))).then(hashHistory.push("/"));
};

export const fetchSplashPosts = () => dispatch => {
  return PostApiUtil.fetchSplashPosts().then(posts => dispatch(receiveAllPosts(posts)));
};
