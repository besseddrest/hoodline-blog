import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import news from './news';
import post from './post';
import search from './search';

const rootReducer = combineReducers({news, search, routing: routerReducer});

export default rootReducer;
