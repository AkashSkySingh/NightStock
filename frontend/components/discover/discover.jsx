import React from 'react';
import { Link } from 'react-router';
import NewPosts from './new_posts';
import PopUsers from './popular_users';
// Discover page will require a masonry table for all new posts, remember to optimize it.

// Page will also require a masonry table for most followed users as well. Double component can potentially hamper unmounting problems. May have to split masonry tables into their own components to make mounting/unmounting easier for transitition between discover and splash page.

//  Both items must be rendered in specific masonry tables to avoid demounting issue as seen and addressed above.
