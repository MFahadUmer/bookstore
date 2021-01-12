import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const handleFilterChange = value => {
  console.log(value);
};

const BooksList = ({ books, removeBook }) => (
  <div className="booklist">
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
          <Book key={value.bookId} book={value} removeBook={removeBook} />
        ))}
      </tbody>
    </table>
    <CategoryFilter handleFilterChange={handleFilterChange} />
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
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  removeBook: '',
};

const mapStateToProps = state => ({
  books: state.book.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(removeBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
