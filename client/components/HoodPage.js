import React from 'react';
import FeedItem from './FeedItem';

// Neighborhood page that includes neighborhood details and filtered FeedItems
const HoodPage = React.createClass({
  filterByHood(value) {
    return value == this.props.filter.byHood;
  },

  render() {
    // get the neighborhood index that matches our filter value
    const i = this.props.hoods.findIndex((item) => item.name === this.props.filter.byHood),
          hood = this.props.hoods[i],
          filteredNews = this.props.news.filter(this.filterByHood);

    return (
      <div className="container container--hoods">
        <div className="hood-details col-md-3 hidden-sm hidden-xs">
          <div className="hood-details--image row">
            <figure>
              <img src={hood.img} className="img-responsive" />
            </figure>
          </div>
          <h3>{hood.name}</h3>
          <p className="hood-details--short">
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
