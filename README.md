# NightStock

- [NightStock: Heroku][heroku]
- [NightStock: Github][github]
- [NightStock: Trello Production Board][trello]

[heroku]: http://www.herokuapp.com
[github]: https://github.com/AkashSkySingh/NightStock
[trello]: https://trello.com/b/3U9nmBBR/full-stack-project-nightstock

## Minimum Viable Product
NightStock is a web application inspired by 500px built using Ruby on Rails and React/Redux. This app will, at a minimum, satisfy the following criteria with smooth, user-friendly navigation, and adequate seed data to create a memorable visit:

- [ ] [Production README](docs/production_readme.md)
- [ ] [Hosting on Heroku][heroku]
- [ ] New account creation, login, and guest/demo login
- [ ] Post Pictures
  - [ ] Integrate Cloudinary for uploading
  - [ ] Photo detail page has description and poster information
  - [ ] Ability to edit description
- [ ] Follows
  - [ ] Users can follow and be followed by other users
  - [ ] Dynamic follow/unfollow button on profile page
- [ ] Home Feed
  - [ ] Displays all posts of current user's followees
  - [ ] Clicking on poster renders the poster's profile page
  - [ ] Clicking on photo brings up Photo detail page
- [ ] Profile Page
  - [ ] Profile edit possible
  - [ ] Has profile picture and description
  - [ ] Index of all user photos
  - [ ] List of followers
  - [ ] List of followees

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days, W1 W)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Posts Model, API, and components (2 days, W1 F)

**Objective:** Posts can be created, read, edited and destroyed through the API. Includes saved photo. Includes photo upload for posts using Cloudinary.

### Phase 3: User Profile Page (2 Days, W2 T)

**Objective:** User profile page displays all of user's posts and user's details.

### Phase 4: Follows (1 Days, W2 W)

**Objective:** User's page lists all followers and followees with interactive UI.

### Phase 5: Home Feed (1 day, W2 Th 6pm)

**Objective:** Displays all photos uploaded by users followed by current user.

### Phase 6: Clean-Up (1 day, W2 F 6pm)

**Objective:** Clean-up site and iron out potential bugs/issues.


### Bonus Features (TBD)
- [ ] Search Posts by location
- [ ] Commenting functionality on Users' posts.
- [ ] Tags and tagging on posts for search.
- [ ] Google Map containing locations of user's posts.
