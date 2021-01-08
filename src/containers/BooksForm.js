import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => {
  const [title, seTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'title') seTitle(e.target.value);
    if (e.target.name === 'category') setCategory(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    dispatch(createBook({ title, category }));
  };
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Book title" onChange={handleChange} />
        <select name="category" id="categories" onChange={handleChange}>
          <option value="">Select Category</option>
          {CATEGORIES.map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        <input type="submit" value="Add Book" onClick={handleClick} />
      </form>
    </div>
  );
};

export default BooksForm;
