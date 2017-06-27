// custom page with custom rails link to provide most popular users. Bonus MVP, requires masonry type component for user listing. Design wireframes to properly setup expectations for page design.

import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transition: 0
};


class PopUsers extends React.Component {
  constructor(props){
    super(props);
  }

}

export default withRouter(PopUsers);
