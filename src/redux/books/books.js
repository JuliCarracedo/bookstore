// Constants
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD = 'bookStore/books/LOAD';

const initialState = [];

// Actions
export const loadFromApi = (books) => ({
  type: LOAD,
  books,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  item_id: id,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return (action.books);
    case ADD_BOOK:
      return ([...state, action.book]);
    case REMOVE_BOOK:
      return (state.filter((book) => book.item_id !== action.item_id));
    default:
      return state;
  }
};

export default reducer;
