import React from 'react';

const BooksForm = () => (
  <div>
    <form action="">
      <input type="text" placeholder="Book title" />
      <select name="category" id="books_category">
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default BooksForm;
