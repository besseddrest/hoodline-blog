// Main is really just a presentational component
import React from 'react';

const Hoods = React.createClass({
  render() {
    return(
      <div>
        {this.props.hoods.map((item, i) => <HoodFilter {...this.props} key={i} i={i} item={item} />)}
      </div>
    )
  }
});

const HoodFilter = React.createClass({
  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    )
  }
});

export default Hoods;
