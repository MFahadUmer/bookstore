import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import BookstoreHeader from './BookstoreHeader';

const App = () => (
  <div className="app">
    <BookstoreHeader />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
