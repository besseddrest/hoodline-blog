// a reducer takes in two things, action, and a copy of current state
function neighborhood(state = '', action){
  switch (action.type) {
    case 'SHOW_NEIGHBORHOOD':
      return action.value;
    default:
      return state;
  }
  return state;
}

export default neighborhood;
