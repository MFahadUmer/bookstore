import React from 'react';

const BookstoreHeader = () => (
  <div className="headerMainContainer">
    <div className="headerInternalContainer">
      <div className="headerLinksSection">
        <a className="logo" href="/">Bookstore CMS</a>
        <p className="books">Books</p>
        <p>Categories</p>
      </div>
      <div className="headerProfile">
        <p>Profile</p>
      </div>
    </div>
  </div>
);

export default BookstoreHeader;
