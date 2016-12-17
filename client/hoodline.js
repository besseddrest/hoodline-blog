import React from 'react';
import {render} from 'react-dom';

// CSS (Stylus)
import css from './styles/app.scss';

// Components
import Main from './components/Main';

// React Router Dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}></Route>
  </Router>
)

render(router, document.getElementById('root'));
