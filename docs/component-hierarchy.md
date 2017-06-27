## Component Hierarchy

**AuthFormContainer**
 - AuthForm

 **Greetings Container**
 - Header/Nav Bar

**Splash Container**
 - Random User Container
  + Random User Items

**User Profile Container**
 - Posts Index
 - Followers/Followees

**Home Feed Container**
 - Posts Index
 - Bonus: Followed Posts

**Post Index Item Container**
 - Post Index Photo
 - Post Details
  + Post title
  + Post description
  + Post Location
 - Bonus: Post Comments
 - Bonus: Post Follows



## Routes

|Path              | Component                |
|------------------|--------------------------|
| "/sign-up"       | "AuthFormContainer"      | *Removed; modal in user.
| "/sign-in"       | "AuthFormContainer"      | *Removed; modal in user.
| "/home"          | "HomeFeedContainer"      |
| "/"              | "Root"                   |
| "/users/user_id" | "UserProfileContainer"   |
| "/posts/post_id" | "PostIndexItemContainer" |
| "/posts"         | "CreatePostContainer"    |
