# Production Log
-------------------
The official production log while developing NightStock in its entirety. Log will be updated on a day-to-day basis with relevant information.

## Phase 1: Backend setup and Front End User Authentication (1.5 days, W1 W)
**Objective:** Functioning rails project with front-end Authentication

#### Day 1:
Project is underway. Completed initial steps to complete authentication setup. Biggest issue was rendering double forms. Was able to use routes to double render two unique forms for user CRUD.

#### Day 2:
Finished backend authentication procedures. Finalizing styling decisions for user interaction of navigation bar. Biggest issue was generating modals to render authentication forms. I entertained the idea of creating a form button that will render in an css generated sign-up form. However, to save time, I opted for single modal generation, but allowing for both sign-in and sign-up via instant switch. Clearing errors and additional styling of modals took time, but authentication is done.

#### Day 3:
Finalized styling decisions and have working authentication along with site on Heroku. Theme will focus on modern, night-time photography. Ideally, a background with modern architecture in a grayscale palette fits the theme. Custom fonts, logo, and images are now possible and decided upon for site.

## Phase 2: Posts Model, API, and components (2 days, W1 F)
**Objective:** Posts can be created, read, edited and destroyed through the API. Includes saved photo. Includes photo upload for posts using Cloudinary.

#### Day 3 (cont.):
Began phase 2 generation of posts, relevant routes, and necessary database implementation. Backend is set to be complete by morning of day 4. So far, no issues. Subsequently implementing Cloudinary and setting up Yaml for GitHub/Heroku hosting for CloudinaryAPI. Must review if CloudinaryAPI is a possible object to continue CSS use. Realization that phase 2 and phase 3 require hand-in-hand development. Day 4 will be a combination of establishing proper splash page, to then introduce relevant CRUD commands for User Profile and additional components.

#### Day 4:
- Remember to check the 422 status codes on the PostsController and see if they register to appropriate locations.
- Remember to check out Masonry as a potential index component for Profile/Splash/HomeFeed page.
- Use json with associations to do the population of user information.

### Phase 3: User Profile Page (2 Days, W2 T)
**Objective:** User profile page displays all of user's posts and user's details.

### Phase 4: Follows (1 Days, W2 W)
**Objective:** User's page lists all followers and followees with interactive UI.

### Phase 5: Home Feed (1 day, W2 Th 6pm)
**Objective:** Displays all photos uploaded by users followed by current user.

### Phase 6: Clean-Up (1 day, W2 F 6pm)
**Objective:** Clean-up site and iron out potential bugs/issues.
