import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import { loadAsync } from '../redux/books/API';

const Home = () => {
  const dispatch = useDispatch();
  const [download, setDownload] = useState('idle');

  useEffect(() => {
    if (download === 'idle') {
      dispatch(loadAsync());
      setDownload('done');
    }
  });

  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <BookList books={books || []} />
      <BookForm />
    </div>
  );
};

export default Home;
