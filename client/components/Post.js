// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';

const Post = React.createClass({
  render() {
    // find the index of the item where the url key value matches the current URL
    const i = this.props.news.findIndex((item) => item.url === this.props.params.url);
    const item = this.props.news[i];

    return (
      <div className="container container--post">
        <div className="col-md-1"></div>
        <div className="post col-md-11">
          <div className="row">
            <article className="post--main col-md-8">
                <h2 className="post--title">{item.title}</h2>
                <img className="post--image img-responsive" src={item.img} />
                <p className="post--content">
                  {item.content}
                </p>
            </article>
            <aside className="post--info col-md-3">
              {item.date}
            </aside>
          </div>
        </div>
      </div>
    )
  }
});

export default Post;
