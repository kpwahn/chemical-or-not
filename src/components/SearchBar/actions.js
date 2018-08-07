function updateSearchValue(value) {
  return {
    type: 'UPDATE_SEARCH_VALUE',
    payload: value
  }
}

export {
  updateSearchValue
};
