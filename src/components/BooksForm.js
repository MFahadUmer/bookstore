import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => (
  <div>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default BooksForm;
