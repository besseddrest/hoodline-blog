import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

// import data
import news from './data/news';
import search from './data/search';

// create an object for the default data
// there should be a key for each reducer
const defaultState = {
  news,
  search
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
