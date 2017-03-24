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
Came to understanding that post CRUD development requires either splash page or user page implemented to test post generation and edit. Splash page container and layout ready for Masonry introduction. Adequate seeding accomplished.

#### Day 5 & 6 (Weekend):

Post creation and deletion function as intended. Pictures are uploaded on posts to backend as well as Cloudinary API. Resorted to the use of React-Dropzone for added custom design, and easier implementation. Splash page is well underway, as well as HomeFeed. Use of JBuilder will help implement the necessary feeds for both pages once Masonry is working. Modal is set up for implementation in conjunction with Masonry to allow for edits and bonus features. Overall, although not finished with phase 2 entirely due to difficulties, phase 3 and 5 are well underway to completion.

### Phase 3: User Profile Page (2 Days, W2 T)
**Objective:** User profile page displays all of user's posts and user's details.

#### Day 7:
Finished implementing Masonry table but ran into issues with combination of Modal library with Masonry library. Made headway into generating proper Splash pages. Biggest issue of the day was improper mounting/unmounting, or lack-there-of with Masonry table in Splash container. Index conditional did not allow for unmounting and mounting of masonry. Requires additional redux cycle and respective unique path to properly setup. Attempted to create hover items for masonry table, but margin shifting disrupts page generation. Easier to implement hover over box shadows to increase user interaction.

#### Day 8:
Finished post show page with further development in homefeed. Homefeed page will be the structure for user show pages once post CRUD is complete and ready for proper rendering. Day ended with complete post CRUD and beginning phases of proper user show page development. Better understanding of Masonry and redux cycle allowed for a faster implementation of specified redux cycle for Post pages. Similar design pattern to finish user show pages.

### Phase 4: Follows (1 Days, W2 W)
**Objective:** User's page lists all followers and followees with interactive UI.

#### Day 9:
Completed user show page with working form error generation. Homefeed is currently working properly, just awaiting the implementation of follows to then reference the join table to properly generate the adequate feed. Most significant error of day was the issue of improper error handling. Typos and positioning of code itself was the cause. Additional errors resulting from double-y nested routes/requests in similar reducers. Adjusted names and made separate for each container. Also adjusted the errors given when navigating through site. Only known error left is the flattening error arisen when generating an empty form. However, proper response is fed to user via modal.

### Phase 5: Home Feed (1 day, W2 Th 6pm)
**Objective:** Displays all photos uploaded by users followed by current user.

#### Day 10:
Attempted to start follows mvp. Held in space due to errors and cross functionality issues with previous resolutions to bugs and glitches. Overall errors cleared. Create post promise fails to render proper amounts of errors while remaining functional. Root cause understood, just establishing proper connection is difficult amongst given state. Follows underway, homefeed altered to drop details box, whereas details box moved to respective user show pages where it works perfectly as expected as subscribed items are re-rendered on action.

### Phase 6: Clean-Up (1 day, W2 F 6pm)
**Objective:** Clean-up site and iron out potential bugs/issues.

#### Day 11:
Day entirely spent on making functional follow state and respective button/component. Working item will make it rendered on the proper state, and show in the proper bar with user show. Project expected to be completed, if not considered complete with mvps today.
