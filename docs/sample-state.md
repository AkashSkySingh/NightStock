```js
{
  currentUser: {
    id: 1,
    username: "guest",
    session_token: "login"
  },
  posts: {
    1: {
      title: "Sample State",
      description: "Is good to plan"
      user_id: 1,
      location: "San Francisco"
      tags: {
        1: {
          id: 1
          name: "Cold"
        }
      }
    }
  },
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of posts
}
```
