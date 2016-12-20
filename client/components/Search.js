import React from 'react';

const Search = React.createClass({
  // submit if "Search" was pressed
  handleClick() {
    this.props.submitSearch(this.refs.searchPosts.value);
  },

  handleKeyUp(e) {
    // submit if "Enter" was the key pressed
    if (e.keyCode == 13) {
      this.props.submitSearch(this.refs.searchPosts.value);
    }
  },

  render() {
    return (
      <div className="search">
          <input onKeyUp={this.handleKeyUp} ref="searchPosts" placeholder="Search" type="text" />
          <a onClick={this.handleClick}>Search</a>
      </div>
    )
  }
});

export default Search;
