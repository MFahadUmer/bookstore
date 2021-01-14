import React from 'react';
import { useDispatch } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions';

const BookstoreHeader = () => {
  const dispatch = useDispatch();
  const handleFilterChange = value => {
    dispatch(changeFilter(value));
  };
  return (
    <div className="headerMainContainer">
      <div className="headerInternalContainer">
        <div className="headerLinksSection">
          <a className="logo" href="/">Bookstore CMS</a>
          <p className="books">Books</p>
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </div>
        <div className="headerProfile">
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default BookstoreHeader;
