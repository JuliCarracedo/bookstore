import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addAsync } from '../redux/books/API';

const BookForm = () => {
  const dispatch = useDispatch();
  const [t, setTitle] = useState('');
  const [c, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title: t,
      category: c,
      item_id: uuidv4(),
    };
    dispatch(addAsync(newBook));
  };

  return (
    <div id="form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div className="fields">
        <input type="text" className="form-title-2" id="title" name="title" placeholder="Book Title" onChange={(evt) => setTitle(evt.target.value)} />
        <select id="category" className="form-category" name="category" defaultValue="Category" onChange={(evt) => setCategory(evt.target.value)}>
          <option disabled>Category</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
        </select>

        <button type="button" className="form-submit" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
      </div>
    </div>
  );
};
export default BookForm;
