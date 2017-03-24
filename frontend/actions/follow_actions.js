import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});
export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const follow = userDetailId => dispatch => (
  FollowAPIUtil.follow(userDetailId).then(newFollow => dispatch(receiveFollow(newFollow)))
);

export const unfollow = userDetailId => dispatch => (
  FollowAPIUtil.unfollow(userDetailId).then(oldFollow => dispatch(removeFollow(oldFollow)))
);
