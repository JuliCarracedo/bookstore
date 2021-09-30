/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { removeAsync } from '../redux/books/API';

const BookLog = (props) => {
  const { book, index } = props;
  const {
    title, author, category, progress, current, item_id,
  } = book;
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeAsync(item_id));
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
