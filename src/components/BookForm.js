const BookForm = () => (
  <form>
    <h2>Add new Book</h2>
    <input type="text" id="title" name="title" placeholder="Book Title" />

    <select id="category" name="category">
      <option selected disabled>Category</option>
      <option value="Thriller">Thriller</option>
      <option value="Romance">Romance</option>
      <option value="Action">Action</option>
    </select>

    <input type="submit" value="ADD BOOK" />

  </form>
);
export default BookForm;
