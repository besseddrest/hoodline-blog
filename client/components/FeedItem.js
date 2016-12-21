import React from 'react';
import {Link} from 'react-router';

// Individual items in the NewsFeed component
const FeedItem = React.createClass({
  render() {
    const item = this.props.item;

    return (
      <article className="feed-item">
        <Link className="feed-item--link" to={`/2016/${item.url}`}>
          <div className="feed-item--date">{item.date}</div>
          <h2 className="feed-item--title">{item.title}</h2>
          <img className="feed-item--image img-responsive" src={item.img} />
          <div className="feed-item--teaser">{item.teaser}</div>
        </Link>
        <ul className="feed-item--hoods">
          {item.neighborhoods.map((item, i) => <FeedItemHoods {...this.props} key={i} i={i} item={item} />)}
        </ul>
      </article>
    )
  }
});

// Items in each FeedItem that links to the individual neighborhood pages
const FeedItemHoods = React.createClass({
  render() {
    const hoodPath = this.props.item.replace("'", '').toLowerCase().split(' ').join('-');
    return (
      <li className="feed-item--hood">
        <Link onClick={this.props.showNeighborhood.bind(null, this.props.item)} to={`/hood/${hoodPath}`}>
          {this.props.item}
        </Link>
      </li>
    )
  }
});

export default FeedItem;
