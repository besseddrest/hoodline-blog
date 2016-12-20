import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  var filteredNews = [];
  // when we filter we don't actually want to remove data from news,
  // just make a copy of everything that matches and return that
  for (var i = 0; i < state.news.length; i++) {
    if (state.news[i].title.toLowerCase().indexOf(state.search.toLowerCase()) > -1) {
      filteredNews.push(state.news[i]);
    }
  }

  // return filteredNews if there's at least one match, else return all the news data
  return {
    news: (filteredNews.length > 0) ? filteredNews : state.news,
    search: (filteredNews.length > 0) ? state.search : ''
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// will take state and action functions via props in our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
