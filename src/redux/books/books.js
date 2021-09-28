// Constants
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

// Actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (title) => ({
  type: REMOVE_BOOK,
  title,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([...state, action.title]);
    case REMOVE_BOOK:
      return (state.filter((book) => book.title !== action.title));
    default:
      return state;
  }
};

export default reducer;
