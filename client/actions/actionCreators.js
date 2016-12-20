export function submitSearch(value) {
  return {
    type: 'SUBMIT_SEARCH',
    value
  }
}

export function showNeighborhood(value) {
  return {
    type: 'SHOW_NEIGHBORHOOD',
    value
  }
}
