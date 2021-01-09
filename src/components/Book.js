import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.bookId}</td>
    <td>{book.bookTitle}</td>
    <td>{book.bookCategory}</td>
    <td>
      <button type="submit" onClick={() => removeBook(book.bookId)}>Remove Book</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number,
    bookTitle: PropTypes.string,
    bookCategory: PropTypes.string,
  }),
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  book: {},
  removeBook: '',
};

export default Book;
