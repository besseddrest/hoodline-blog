import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// data
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts, // ES6, the same as posts: posts
  comments // ES6, the same as comments: comments
}
