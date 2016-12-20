import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import news from './news';
import filter from './filter';

const rootReducer = combineReducers({
  news,
  filter,
  routing: routerReducer
});

export default rootReducer;
