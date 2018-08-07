import data from './data';

const INITIAL_STATE = {
  value: {
    label: 'Everything',
    value: null
  },
  options: data
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH_VALUE': {
      return {
        ...state,
        value: action.payload
      }
    }
    default: {
      return state
    }
  }
};

export default reducer;
