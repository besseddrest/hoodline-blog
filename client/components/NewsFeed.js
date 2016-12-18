// Component for newsfeed
import React from 'react';
import NewsItem from './NewsItem';

const NewsFeed = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="left-col col-md-3 hidden-sm hidden-xs bg-success"></div>
        <div className="col-md-6">
          {this.props.news.map((item, i) => <NewsItem {...this.props} key={i} i={i} item={item} />)}
        </div>
        <div className="right-col col-md-3 hidden-sm hidden-xs bg-info"></div>
      </div>
    )
  }
});

export default NewsFeed;
