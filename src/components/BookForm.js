import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [t, setTitle] = useState('');
  const [c, setCategory] = useState('');
  const [a, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: t,
      author: a,
      category: c,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div id="form">
      <h2>Add new Book</h2>
      <input type="text" id="title" name="title" placeholder="Book Title" onChange={(evt) => setTitle(evt.target.value)} />
      <input type="text" id="author" name="author" placeholder="Book Author" onChange={(evt) => setAuthor(evt.target.value)} />
      <select id="category" name="category" defaultValue="Category" onChange={(evt) => setCategory(evt.target.value)}>
        <option disabled>Category</option>
        <option value="Thriller">Thriller</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
      </select>

      <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>

    </div>
  );
};
export default BookForm;
