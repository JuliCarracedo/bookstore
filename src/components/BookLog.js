/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookLog = (props) => {
  const { book, index } = props;
  const {
    title, author, category, progress, current,
  } = book;
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(title));
  };

  return (
    <div className="list-item" id={index}>
      <div className="left">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="interact">
          <span>Comment </span>
          <button type="button" onClick={(e) => deleteBook(e)}>Remove </button>
          <span>Edit</span>
        </div>

      </div>
      <div className="middle">
        <p>
          {progress}
          {' '}
          Completed
        </p>
      </div>

      <div className="right">
        <p>Current Chapter</p>
        <p>{current}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

export default BookLog;
