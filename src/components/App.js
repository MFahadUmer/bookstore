import React from 'react';
import { Provider } from 'react-redux';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import store from '../reducers';

const App = () => (
  <Provider store={store}>
    <div className="name">
      <BooksList />
      <BooksForm />
    </div>
  </Provider>
);

export default App;
