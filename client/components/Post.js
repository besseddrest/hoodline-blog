import React from 'react';
import {Link} from 'react-router';

// Individual Post component, which will include details of the author in the right column
const Post = React.createClass({
  render() {
    // find the index of the item where the url key value matches the current URL
    const i = this.props.news.findIndex((item) => item.url === this.props.params.url),
          item = this.props.news[i],
          postAuthor = this.props.authors[item.author],
          twitter = (postAuthor.twitter) ?  <a href={"http://twitter.com/" + postAuthor.twitter}>@{postAuthor.twitter}</a> : '',
          website = (postAuthor.website) ? <a href={postAuthor.website}>website</a> : '';
    return (
      <div className="container container--post">
        <div className="col-md-1"></div>
        <div className="post col-md-10">
          <div className="row">
            <article className="post--main col-md-8">
                <h2 className="post--title">{item.title}</h2>
                <div className="row">
                  <img className="post--image img-responsive" src={item.img} />
                </div>
                <p className="post--content">
                  {item.content}
                </p>
            </article>
            <aside className="post--info col-md-4">
              <strong className="post--date">{item.date}</strong>
              <table className="author table-responsive center-block col-md-12">
                <tr>
                  <td className="author--icon"><img src="http://assets.hoodline.com/assets/icon-user-4de631e6098cee05b8c18c0870b4192ecc90df69d3daa46010d202dff59526cc.png" className="img-responsive" /></td>
                  <td className="author--details">
                    {item.author}<br />
                    {twitter}<br />
                    {website}
                  </td>
                  <td className="author--image"><img src={postAuthor.avatar} className="img-circle img-responsive" /></td>
                </tr>
              </table>
            </aside>
          </div>
        </div>
      </div>
    )
  }
});

export default Post;
