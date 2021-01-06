import { CREATE_BOOK, REMOVE_BOOK } from './booksActionTypes';

const createBook = () => ({
  type: CREATE_BOOK,
});

const removeBook = () => ({
  type: REMOVE_BOOK,
});

export default { createBook, removeBook };
