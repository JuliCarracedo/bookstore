import books from './Books';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => (
  <div>
    <BookList books={books} />
    <BookForm />
  </div>
);

export default Home;
