/* eslint-disable react/prop-types */

import BookLog from './BookLog';

const BookList = (props) => {
  const { books } = props;

  return (
    <div className="list">
      {
        books.map((book, index) => (
          <BookLog key={book.title} book={book} index={index} />
        ))
    }
    </div>
  );
};

export default BookList;
