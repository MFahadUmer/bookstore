import { CHANGE_FILTER, CREATE_BOOK, REMOVE_BOOK } from './booksActionTypes';

export const createBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  payload: {
    bookTitle: title,
    bookCategory: category,
  },
});

export const removeBook = bookId => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export const changeFilter = () => ({
  type: CHANGE_FILTER,
});
