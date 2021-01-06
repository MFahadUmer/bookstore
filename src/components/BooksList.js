import React from 'react';
import Book from './Book';

const BooksList = () => (
  <div>
    <table border="1px">
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <Book />
      </tbody>
    </table>
  </div>
);

export default BooksList;
