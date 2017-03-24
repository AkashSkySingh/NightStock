```js
{
  errors: [],
  postDetail: {
    description: "post description",
    id: "post's id",
    image_url: "post.com/post",
    location: "post, post, usa",
    title: "post title",
    user: {
      user_id: "poster's id",
      user_image_url: "poster.com/poster",
      username: "poster's username"
    }
  },
  posts: {
    0: {
      description: "post description",
      id: "post's id",
      image_url: "post.com/post",
      location: "post, post, usa",
      title: "post title",
      user: {
        user_id: "poster's id",
        user_image_url: "poster.com/poster",
        username: "poster's username"
      }
    },
    1: {
      ...
    }
  },
  session: {
    currentUser: {
      cover_photo_url: "cover.com/cover",
      description: "currentUser's description",
      followees: [
        0: "ID of a user that userDetail is following",
        1: ...
      ],
      followers: [
        0: "ID of a user following userDetail",
        1: ...
      ],
      id: "currentUser's id",
      posts : [
        0: {
          description: "post description",
          id: "post's id",
          image_url: "post.com/post",
          location: "post, post, usa",
          title: "post title",
          user: {
            user_id: "poster's id",
            user_image_url: "poster.com/poster",
            username: "poster's username"
          }
        },
        1: {
          ...
        }
      ]
    }
  }
  userDetail: {
    cover_photo_url: "cover.com/cover",
    description: "currentUser's description",
    followees: [
      0: "ID of a user that userDetail is following",
      1: ...
    ],
    followers: [
      0: "ID of a user following userDetail",
      1: ...
    ],
    id: "currentUser's id",
    posts : [
      0: {
        description: "post description",
        id: "post's id",
        image_url: "post.com/post",
        location: "post, post, usa",
        title: "post title",
        user: {
          user_id: "poster's id",
          user_image_url: "poster.com/poster",
          username: "poster's username"
        }
      },
      1: {
        ...
      }
    ]
  }
}
```
