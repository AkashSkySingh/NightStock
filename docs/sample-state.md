```js
{
  currentUser: {
    id: 1,
    username: "guest"
  },
  posts: {
    1: {
      title: "Sample State",
      description: "Is good to plan",
      user_id: 1,
      location: "San Francisco",
      tags: {
        1: {
          id: 1,
          name: "Cold"
        }
      }
    }
  },
  slicePosts: {
    1: {
      title: "Sample State",
      user_id: 1,
      tags: {
        1: {
          id: 1,
          name: "Cold"
        }
      }
    }
  },
  userDetail: {
    id: 1,
    username: "Guest",
    description: "Sample Description"
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of posts
}
```
