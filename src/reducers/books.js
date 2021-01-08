import { CREATE_BOOK, REMOVE_BOOK } from '../actions/booksActionTypes';

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
      ...state,
      books: state.books.filter(x => x.bookId !== action.payload),
    };
    case CREATE_BOOK: return {
      books: [
        ...state.books,
        {
          bookId: (state.books.length > 0) ? state.books.length + 1 : 1,
          bookTitle: action.payload.bookTitle,
          bookCategory: action.payload.bookCategory,
        },
      ],
    };
    default: return state;
  }
};

export default books;
