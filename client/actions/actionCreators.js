// increment likes
export function incrementLikes(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    id,
    author,
    comment
  }
}
