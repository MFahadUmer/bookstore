import { CREATE_BOOK, REMOVE_BOOK } from './booksActionTypes';

export const createBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  payload: {
    bookTitle: title,
    bookCategory: category,
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  bookId: book.bookId,
  bookTitle: book.bookTitle,
  bookCategory: book.bookCategory,
});
