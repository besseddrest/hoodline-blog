// Component for newsfeed
import React from 'react';
import FeedItem from './FeedItem';
import Search from './Search';
import Hoods from './Hoods';

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
        <div className="left-col col-md-3 hidden-sm hidden-xs">
          <nav className="sidenav">
            <ul>
              <li className="sidenav--item"><a className="sidenav--link" href="#">About</a></li>
              <li className="sidenav--item"><a className="sidenav--link" href="#">Neighborhood Kit</a></li>
              <li className="sidenav--item"><a className="sidenav--link" href="#">Company blog</a></li>
              <li className="sidenav--item"><a className="sidenav--link" href="#">Contact</a></li>
              <li className="sidenav--item"><a className="sidenav--link" href="#">Follow/RSS</a></li>
            </ul>
          </nav>
        </div>
        <div className="col-md-6">
          {this.renderSearchResults()}
          {this.props.news.map((item, i) => <FeedItem {...this.props} key={i} i={i} item={item} />)}
        </div>
        <div className="right-col col-md-3 hidden-sm hidden-xs">
          <Search {...this.props} />
          <h3 className="filter--neighborhoods">filter neighborhoods</h3>
          <Hoods {...this.props} />
        </div>
      </div>
    )
  }
});

export default NewsFeed;
