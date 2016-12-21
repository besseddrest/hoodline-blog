import React from 'react';
import {Link} from 'react-router';

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
          {item.neighborhoods.map((item, i) => <FeedItemCategory {...this.props} key={i} i={i} item={item} />)}
        </ul>
      </article>
    )
  }
});

const FeedItemCategory = React.createClass({
  render() {
    return (
      <li className="feed-item--hood">
        <a className="feed-item--hood-link" href="javascript:void(0);" onClick={this.props.showNeighborhood.bind(null, this.props.item)}>{this.props.item}</a>
      </li>
    )
  }
});

export default FeedItem;
