import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.bookId}</td>
    <td>{book.bookTitle}</td>
    <td>{book.bookCategory}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      bookId: PropTypes.number,
      bookTitle: PropTypes.string,
      bookCategory: PropTypes.string,
    }),
  ),
};

Book.defaultProps = {
  book: {},
};

export default Book;
