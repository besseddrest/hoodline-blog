import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import news from './news';
import search from './search';
import neighborhood from './neighborhood';

const rootReducer = combineReducers({
  news,
  search,
  neighborhood,
  routing: routerReducer
});

export default rootReducer;
