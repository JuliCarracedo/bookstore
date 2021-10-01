/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BookLog from './BookLog';

const BookList = (props) => {
  const { books } = props;

  return (
    <div className="list">
      {
        books.map((book, index) => (
          <BookLog key={book.item_id} book={book} index={index} />
        ))
    }
    </div>
  );
};

export default BookList;
