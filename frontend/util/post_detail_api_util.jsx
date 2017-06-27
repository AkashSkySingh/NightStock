export const fetchesPost = id => {
  return $.ajax({
    type: 'GET',
    url: `api/posts/${id}`
  });
};
export const updatesPost = post => (
  $.ajax({
    type: 'PATCH',
    url:`api/posts/${post.id}`,
    data: { post }
  })
);
export const deletesPost = id => (
  $.ajax({
    type: 'DELETE',
    url: `api/posts/${id}`
  })
);
