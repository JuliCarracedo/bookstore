import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => (
  <div>
    <BookList books={[]} />
    <BookForm />
  </div>
);

export default Home;
