// a reducer takes in two things, action, and a copy of current state
function news(state = [], action){
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('the news will change');
      console.log(state);
    default:
      return state;
  }
  return state;
}

export default news;
