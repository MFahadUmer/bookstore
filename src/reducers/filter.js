const filterInitialState = {
  books: [],
};

const filterReducer = (state = filterInitialState, action = 'All') => {
  switch (action.type) {
    case 'All': return {
      books: [...state],
    };
    default: return state;
  }
};

export default filterReducer;
