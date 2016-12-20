import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  var filteredNews = [],
      searchText = state.search.toLowerCase(),
      neighborhood = state.neighborhood;

  // when we filter we don't actually want to remove data from news,
  // just make a copy of everything that matches and return that

  // filter by search text
  if (searchText) {
    for (var i = 0; i < state.news.length; i++) {
      var titleText = state.news[i].title.toLowerCase(),
          teaserText = state.news[i].teaser.toLowerCase();

      // if the searchText appears in the title or the teaser
      if ((titleText.indexOf(searchText) > -1) || (teaserText.indexOf(searchText) > -1)) {
        filteredNews.push(state.news[i]);
      }
    }
  }

  // filter by single neighborhood
  if (neighborhood) {
    for (var i = 0; i < state.news.length; i++) {
      if (state.news[i].neighborhoods.indexOf(neighborhood) > -1) {
        filteredNews.push(state.news[i]);
      }
    }
  }

  // return filteredNews if there's at least one match, else return all the news data
  return {
    news: (filteredNews.length > 0) ? filteredNews : state.news,
    search: (filteredNews.length > 0) ? state.search : '',
    neighborhood: (filteredNews.length > 0) ? state.neighborhood : ''
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// will take state and action functions via props in our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
