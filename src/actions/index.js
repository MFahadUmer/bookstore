import { CREATE_BOOK, REMOVE_BOOK } from './booksActionTypes';

export const createBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  payload: {
    bookTitle: title,
    bookCategory: category,
  },
});

export const removeBook = bookId => {
  console.log(bookId);
  return (
    {
      type: REMOVE_BOOK,
      payload: bookId,
    });
};
