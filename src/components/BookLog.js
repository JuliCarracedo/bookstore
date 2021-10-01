/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { removeAsync } from '../redux/books/API';

const BookLog = (props) => {
  const { book, index } = props;
  const {
    title, category, item_id,
  } = book;
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeAsync(item_id));
  };

  return (
    <div className="list-item" id={index}>
      <div className="left">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author"> Julian Carracedo</p>
        <div className="interact">
          <button className="interact-btn" type="button"> Comment </button>
          <button className="interact-btn sep" type="button" onClick={(e) => deleteBook(e)}>Remove </button>
          <button className="interact-btn sep" type="button"> Edit </button>
        </div>

      </div>
      <div className="middle">
        <div className="progress-wheel" />
        <div className="progress">
          <p className="percentage">100%</p>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="line" />

      <div className="right">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">Chapter 1</p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

export default BookLog;
