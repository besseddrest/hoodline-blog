import React from 'react';
import {Link} from 'react-router';

const NewsItem = React.createClass({
  eachHood(hood, i) {
      return (
        <Hood key={i} i={i} hood={hood}/>
      )
  },

  render() {
    const item = this.props.item;

    return (
      <article className="news-item">
        <Link className="news-item--link" to={`/${item.url}`}>
          <div className="news-item--date">{item.date}</div>
          <h2 className="news-item--title">{item.title}</h2>
          <img className="news-item--image img-responsive" src={item.img} />
          <div className="news-item--teaser">{item.teaser}</div>
        </Link>
        <ul className="news-item--hoods">
          {item.neighborhoods.map(this.eachHood)}
        </ul>
      </article>
    )
  }
});

const Hood = React.createClass({
  render() {
    return (
      <li className="news-item--hood">
        <a className="news-item--hood-link" href="#">{this.props.hood}</a>
      </li>
    )
  }
});

export default NewsItem;
