// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';

const Post = React.createClass({
  renderWebsite(site) {
    if (site) {
      return (
        <div className="author--website">
          <a href={site}>website</a>
        </div>
      )
    }
  },

  render() {
    // find the index of the item where the url key value matches the current URL
    const i = this.props.news.findIndex((item) => item.url === this.props.params.url),
          item = this.props.news[i],
          postAuthor = this.props.authors[item.author];

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
                <strong>{item.date}</strong>
                <div className="author">
                  <img src={postAuthor.avatar} />
                  <div className="author--name">{item.author}</div>
                  <div className="author--twitter">
                    <a href={"http://twitter.com/" + postAuthor.twitter}>@{postAuthor.twitter}</a>
                  </div>
                  {this.renderWebsite(postAuthor.website)}
                </div>
            </aside>
          </div>
        </div>
      </div>
    )
  }
});

export default Post;
