import React from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, filterValue }) => {
  const dispatch = useDispatch();
  let filteredBooks = '';
  const handleFilterChange = value => {
    dispatch(changeFilter(value));
  };
  if (filterValue === 'All' || '') {
    filteredBooks = books.map(value => (
      <Book key={value.bookId} book={value} removeBook={removeBook} />
    ));
  } else {
    filteredBooks = books.filter(books => books.bookCategory === filterValue).map(value => (
      <Book key={value.bookId} book={value} removeBook={removeBook} />
    ));
  }
  return (
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
          {filteredBooks}
        </tbody>
      </table>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number,
      bookTitle: PropTypes.string,
      bookCategory: PropTypes.string,
    }),
  ),
  removeBook: PropTypes.func,
  filterValue: PropTypes.string,
};

BooksList.defaultProps = {
  books: [],
  removeBook: '',
  filterValue: '',
};

const mapStateToProps = state => ({
  books: state.book.books,
  filterValue: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(removeBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
