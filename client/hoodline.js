// React & Redux
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'

// CSS
import css from './styles/app.scss';

// Components
import Main from './components/Main';
import News from './components/News';
import Post from './components/Post';

import store, {history} from './store';

// router will dictate which component child component we see
// <Route path="/" component={Main}></Route>: at the very top level '/' use Main component
// depending on URL structure, pass News or Post to Main
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={News}></IndexRoute>
        <Route path="/2016/12/:url" component={Post}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
