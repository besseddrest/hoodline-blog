// a reducer takes in two things, action, and a copy of current state
function news(state = [], action){
  console.log(state, action);
  return state;
}

export default news;
