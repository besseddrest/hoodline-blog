// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';

const Post = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="light-col col-md-1 bg-info"></div>
        <div className="col-md-8">
          <h2></h2>
          <img />

        </div>
        <div className="right-col col-md-3 bg-info"></div>
      </div>
    )
  }
});

export default Post;
