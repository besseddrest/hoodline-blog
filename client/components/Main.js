// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <Link to="/"><span className="header--logo h1">Hoodline</span></Link>
            <nav className="header--navigation">
              <a className="header--nav-item" href="#">News</a>
              <a className="header--nav-item" href="#">Events</a>
            </nav>
          </div>
        </header>
        <div className="container">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
});

export default Main;
