export const fetchPost = id => {
  return $.ajax({
    type: 'GET',
    url: `api/posts/${id}`
  });
};

export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/posts',
  })
);

export const fetchSplashPosts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/posts/splash'
  })
)

export const updatePost = post => (
  $.ajax({
    type: 'PATCH',
    url:`api/posts/${post.id}`,
    data: { post }
  })
);

export const createPost = post => {
  return $.ajax({
    type: 'POST',
    url:`api/posts`,
    data: { post }
  });
};

export const deletePost = id => (
  $.ajax({
    type: 'DELETE',
    url: `api/posts/${id}`
  })
);
