export const fetchPost = id => (
  $.ajax({
    type: "GET",
    url: `/api/posts/${id}`
  })
);

export const fetchPosts = () => (
  $.ajax({
    type: "GET",
    url: `/api/posts/`
  })
);

export const updatePost = post => (
  $.ajax({
    type: "PATCH",
    url:`/api/posts/${post.id}`,
    data: { post }
  })
);

export const createPost = post => (
  $.ajax({
    type: "POST",
    url:`/api/posts`,
    data: { post }
  })
);

export const deletePost = id => (
  $.ajax({
    type: "DELETE",
    url: `/api/post/${id}`
  })
);
