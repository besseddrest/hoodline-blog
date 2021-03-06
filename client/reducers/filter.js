// a reducer takes in two things, action, and a copy of current state
function filter(state = '', action){
  switch (action.type) {
    case 'SHOW_NEIGHBORHOOD':
      return {
        type: 'hood',
        bySearch: '',
        byHood: action.value
      };
    case 'FILTER_NEIGHBORHOOD':
      return {
        type: 'hood',
        bySearch: '',
        byHood: action.value
      };
    case 'SUBMIT_SEARCH':
      return {
        type: 'search',
        bySearch: action.value,
        byHood: ''
      };
    case 'CLICKED_LOGO':
      return {
        type: '',
        bySearch: '',
        byHood: ''
      };
    default:
      return state;
  }
  return state;
}

export default filter;
