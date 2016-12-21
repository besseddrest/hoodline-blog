import React from 'react';

// Search component, which will filter the NewsFeed based on a value match in the Teaser & Title
const Search = React.createClass({
  handleKeyUp(e) {
    // submit if "Enter" was the key pressed
    if (e.keyCode == 13) {
      this.props.submitSearch(this.refs.searchPosts.value);
    }
  },

  render() {
    return (
      <div className="search">
        <input className="form-control" onKeyUp={this.handleKeyUp} ref="searchPosts" placeholder="Search" type="text" />
      </div>
    )
  }
});

export default Search;
