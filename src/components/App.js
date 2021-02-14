import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import BookstoreHeader from '../containers/BookstoreHeader';

const App = () => (
  <div className="app">
    <BookstoreHeader />
    <BooksList />
    <hr className="horizontalLine" />
    <BooksForm />
  </div>
);

export default App;
