import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import news from './news';

const rootReducer = combineReducers({news, routing: routerReducer});

export default rootReducer;
