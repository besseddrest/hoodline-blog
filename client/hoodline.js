// React & Redux
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'

// CSS
import css from './styles/app.scss';

// Components
import App from './components/App';
import NewsFeed from './components/NewsFeed';
import Post from './components/Post';
import HoodPage from './components/HoodPage';

import store, {history} from './store';

// router will dictate which component child component we see
// <Route path="/" component={Main}></Route>: at the very top level '/' use Main component
// depending on URL structure, pass News or Post to Main
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={NewsFeed}></IndexRoute>
        <Route path="/2016/:url" component={Post}></Route>
        <Route path="/neighborhoods/:url" component={HoodPage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
