import React from 'react';
import {Link} from 'react-router';

const FeedItem = React.createClass({
  eachHood(hood, i) {
      return (
        <Hood key={i} i={i} hood={hood}/>
      )
  },

  render() {
    const item = this.props.item;

    return (
      <article className="feed-item">
        <Link className="feed-item--link" to={`/${item.url}`}>
          <div className="feed-item--date">{item.date}</div>
          <h2 className="feed-item--title">{item.title}</h2>
          <img className="feed-item--image img-responsive" src={item.img} />
          <div className="feed-item--teaser">{item.teaser}</div>
        </Link>
        <ul className="feed-item--hoods">
          {item.neighborhoods.map(this.eachHood)}
        </ul>
      </article>
    )
  }
});

const Hood = React.createClass({
  render() {
    return (
      <li className="feed-item--hood">
        <a className="feed-item--hood-link" href="#">{this.props.hood}</a>
      </li>
    )
  }
});

export default FeedItem;
