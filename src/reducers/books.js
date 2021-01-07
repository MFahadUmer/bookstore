import { REMOVE_BOOK } from '../actions/booksActionTypes';

const booksInitialState = {
  books: [
    {
      bookId: 1,
      bookTitle: 'Gulistan E Saadi',
      bookCategory: 'Biography',
    },
    {
      bookId: 2,
      bookTitle: 'Freedom',
      bookCategory: 'Sci-Fi',
    },
  ],
};

const books = (state = booksInitialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK: return {
    };
    default: return state;
  }
};

export default books;
