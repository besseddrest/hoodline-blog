// a reducer takes in two things, action, and a copy of current state
function search(state = [], action){
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      console.log(state, action.value);
      // make a copy of state
      // iterate through titles (state.length)
      // lowercase title and check for match against value
    default:
      return state;
  }
  return state;
}

export default search;
