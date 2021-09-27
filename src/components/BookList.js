/* eslint-disable react/prop-types */

const BookList = (props) => {
  const { books } = props;

  return (
    <div className="list">
      {
        books.map((book, index) => (
          <div key={book.title} className="list-item" id={index}>
            <div className="left">
              <p>{book.category}</p>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <div className="interact">
                <span>Comment </span>
                <span>Remove </span>
                <span>Edit</span>
              </div>

            </div>
            <div className="middle">
              <p>
                {book.progress}
                {' '}
                Completed
              </p>
            </div>
            <div className="right">
              <p>Current Chapter</p>
              <p>{book.current}</p>
              <button type="button">UPDATE PROGRESS</button>
            </div>

          </div>
        ))
    }
    </div>
  );
};

export default BookList;
