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

export function clickedLogo(value) {
  return {
    type: 'CLICKED_LOGO',
    value
  }
}

export function filterNeighborhood(value) {
  return {
    type: 'FILTER_NEIGHBORHOOD',
    value
  }
}
