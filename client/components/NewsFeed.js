// Component for newsfeed
import React from 'react';
import FeedItem from './FeedItem';
import Search from './Search';

const NewsFeed = React.createClass({
  render() {
    return (
      <div className="container container--feed">
        <div className="left-col col-md-3 hidden-sm hidden-xs bg-success"></div>
        <div className="col-md-6">
          {this.props.news.map((item, i) => <FeedItem {...this.props} key={i} i={i} item={item} />)}
        </div>
        <div className="right-col col-md-3 hidden-sm hidden-xs bg-info">
          <Search {...this.props} />
        </div>
      </div>
    )
  }
});

export default NewsFeed;
