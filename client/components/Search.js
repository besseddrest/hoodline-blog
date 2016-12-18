import React from 'react';

const Search = React.createClass({
  handleSubmit(e, value) {
    e.preventDefault();
    this.props.submitSearch(this.refs.searchPosts.value);
  },

  render() {
    return (
      <div className="search">
        <form name="thisForm" onSubmit={this.handleSubmit}>
          <input ref="searchPosts" placeholder="Search" type="text" className="form-control" aria-label="Search" />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
});

export default Search;
