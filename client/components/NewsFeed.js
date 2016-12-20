// Component for newsfeed
import React from 'react';
import FeedItem from './FeedItem';
import Search from './Search';

const NewsFeed = React.createClass({
  // show this block if the user has entered text into the search box
  renderSearchResults() {
    if (this.props.search) {
      return (
        <div>
          Showing results for: <em>"{this.props.search}"</em>
        </div>
      )
    }
  },

  render() {
    return (
      <div className="container container--feed">
        <div className="left-col col-md-3 hidden-sm hidden-xs bg-success"></div>
        <div className="col-md-6">
          {this.renderSearchResults()}
          {this.props.news.map((item, i) => <FeedItem {...this.props} key={i} i={i} item={item} />)}
        </div>
        <div className="right-col col-md-3 hidden-sm hidden-xs bg-info">
          <Search {...this.props} />
        </div>
      </div>
    )
  }
});

const SearchResults = React.createClass({
  render() {
    return
  }
});

export default NewsFeed;
