export function submitSearch(value, state) {
  return {
    type: 'SUBMIT_SEARCH',
    value
  }
}

export function incrementLikes(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    id,
    author,
    comment
  }
}
