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
    document.getElementById('form').reset();
  };
  return (
    <div className="formMainContainer">
      <div className="formContainer">
        <div>
          <p className="addNewBook">ADD NEW BOOK</p>
        </div>
        <div>
          <form className="bookForm" id="form">
            <input type="text" name="title" className="addNewBookTitle" placeholder="Book title" onChange={handleChange} />
            <select name="category" id="categories" className="addNewBookCategory" onChange={handleChange}>
              <option value="">Select Category</option>
              {CATEGORIES.map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
            <input className="addNewBookButton" type="submit" value="ADD BOOK" onClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooksForm;
