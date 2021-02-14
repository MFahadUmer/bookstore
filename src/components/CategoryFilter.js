import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <select className="categoryFilter" name="filter" onChange={e => handleFilterChange(e.target.value)}>
        {CATEGORIES.map(value => (
          <option key={value} className="categoryFilterOptions" value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilterChange: '',
};

export default CategoryFilter;
