import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <div className="booksMainContainer">
    <div className="booksContainer">
      <div className="bookDetails">
        <p className="bookCategory">
          {book.bookCategory}
        </p>
        <p className="bookTitle">
          {book.bookTitle}
        </p>
        <p className="bookAuthor">
          Author Name
        </p>
        <div className="bookContainerFooter">
          <button className="actionsOnBook" type="submit">Comments</button>
          <span className="separator">|</span>
          <button className="actionsOnBook" type="submit" onClick={() => removeBook(book.bookId)}>Remove</button>
          <span className="separator">|</span>
          <button className="actionsOnBook" type="submit">Edit</button>
        </div>
      </div>
      <div className="bookReadGraph">
        <div className="oval-2" />
        <div className="graphTextContainer">
          <p className="graphText">
            64%
          </p>
          <p className="graphTextCompleted">
            Completed
          </p>
        </div>
      </div>
      <div className="bookGraphSeparator">
        |
      </div>
      <div className="bookReadUpdate">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="chapterName">Chapter 17</p>
        <button type="submit" className="updateProgress">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number,
    bookTitle: PropTypes.string,
    bookCategory: PropTypes.string,
  }),
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  book: {},
  removeBook: '',
};

export default Book;
