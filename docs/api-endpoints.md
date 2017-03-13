# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `POST /session`
- `DELETE /session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Follows (Bonus: Post Follows - Feed for Notifications)

- `GET /api/follows`
- `POST /api/follows`
- `DELETE /api/follows/:followid`

### Bonus: Tags

- A post's tags will be included in the post show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/notes/:note_id/tags`: add tag to post by name
  - if post doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from post by
  name
