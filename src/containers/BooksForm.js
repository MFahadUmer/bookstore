import React from 'react';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => (
  <div>
    <form>
      <input type="text" placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="">Select Category</option>
        {CATEGORIES.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default BooksForm;
