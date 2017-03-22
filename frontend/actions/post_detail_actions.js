import * as PostDetailApiUtil from '../util/post_detail_api_util';
import { hashHistory } from 'react-router';

export const RECEIVES_POST = "RECEIVES_POST";
export const REMOVES_POST = "REMOVES_POST";

export const receivesPost = (post) => {
  return ({
    type: RECEIVES_POST,
    post
  });
};

export const removesPost = post => ({
  type: REMOVES_POST,
  post
});

export const fetchesPost = id => dispatch => {
  return PostDetailApiUtil.fetchesPost(id).then(post => dispatch(receivesPost(post)));
};

export const updatesPost = post => dispatch => {
  return PostDetailApiUtil.updatesPost(post)
  .then(post => dispatch(receivesPost(post)));
};

export const deletesPost = id => dispatch => {
  return PostDetailApiUtil.deletesPost(id).then(post => dispatch(removesPost(post))).then(hashHistory.push("/"));
};
