import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table border="1px">
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map(value => (
          <Book key={value.bookId} book={value} />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number,
      bookTitle: PropTypes.string,
      bookCategory: PropTypes.string,
    }),
  ),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
