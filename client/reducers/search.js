// a reducer takes in two things, action, and a copy of current state
function search(state = '', action){
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      return action.value;
    default:
      return state;
  }
  return state;
}

export default search;
