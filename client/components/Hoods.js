import React from 'react';

// Complete list of neighborhoods
const Hoods = React.createClass({
  render() {
    return(
      <div className="hood-filters">
        {this.props.hoods.map((item, i) => <HoodFilter {...this.props} key={i} i={i} item={item} />)}
      </div>
    )
  }
});

// Individual neighborhoods, each of which will filter the NewsFeed when clicked
const HoodFilter = React.createClass({
  render() {
    return (
      <div className="hood-filters--item" onClick={this.props.showNeighborhood.bind(null, this.props.item.name)}>
        {this.props.item.name}
      </div>
    )
  }
});

export default Hoods;
