import { CREATE_BOOK, REMOVE_BOOK } from './booksActionTypes';

const createBook = book => ({
  type: CREATE_BOOK,
  bookId: book.bookId,
  bookTitle: book.bookTitle,
  bookCategory: book.bookCategory,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  bookId: book.bookId,
  bookTitle: book.bookTitle,
  bookCategory: book.bookCategory,
});

export default { createBook, removeBook };
