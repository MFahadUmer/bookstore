import { CHANGE_FILTER } from '../actions/booksActionTypes';

const filterInitialState = 'All';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default: return state;
  }
};

export default filterReducer;
