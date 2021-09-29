import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <BookList books={books || []} />
      <BookForm />
    </div>
  );
};

export default Home;
