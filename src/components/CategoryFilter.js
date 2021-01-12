import React from 'react';

// eslint-disable-next-line react/prop-types
const CategoryFilter = ({ handleFilterChange }) => {
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <select name="filter" onChange={e => handleFilterChange(e.target.value)}>
        {CATEGORIES.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
