import { combineReducers } from 'redux';
import filterReducer from './filter';
import books from './books';

const rootReducer = combineReducers({
  book: books,
  filter: filterReducer,
});

export default rootReducer;
