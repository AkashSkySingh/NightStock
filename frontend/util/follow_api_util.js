export const follow = userDetailId => (
  $.ajax({
    method: "POST",
    url: `api/follows`,
    data: {follow: {followee_id: userDetailId}}
  })
);

export const unfollow = userDetailId => (
  $.ajax({
    method: "DELETE",
    url: `api/follows/`,
    data: {follow: {followee_id: userDetailId}}
  })
);
