import React from 'react';
import FeedItem from './FeedItem';

// Neighborhood page that includes neighborhood details and filtered FeedItems
const HoodPage = React.createClass({
  render() {
    // get the neighborhood index that matches our filter value
    const i = this.props.hoods.findIndex((item) => item.name === this.props.filter.byHood),
          hood = this.props.hoods[i];

    return (
      <div className="container container--hoods">
        <div className="left-col col-md-3 hidden-sm hidden-xs">
          <img src={hood.img} className="img-responsive" /><br />
          <h3>{hood.name}</h3>
          <p>
            {hood.shortDesc}
          </p>
          <p>
            {hood.longDesc}
          </p>
        </div>
        <div className="col-md-7">
          {this.props.news.map((item, i) => <FeedItem {...this.props} key={i} i={i} item={item} />)}
        </div>
      </div>
    )
  }
});

export default HoodPage;
