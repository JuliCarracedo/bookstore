// Constants
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD = 'bookStore/books/LOAD';

const initialState = [];

const fetchList = async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yynVz1vVLFd6d5cNSqX6/books/');
  const obj = await response.json();
  const keys = Object.keys(obj);
  const list = [];
  keys.forEach((key) => { list.push({ ...obj[key][0], item_id: key }); });
  return list;
};

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

// Async actions
export const loadAsync = () => async (dispatch) => {
  dispatch(loadFromApi(await fetchList()));
};

export const addAsync = (book) => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yynVz1vVLFd6d5cNSqX6/books/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch(addBook(book));
};

export const removeAsync = (id) => (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yynVz1vVLFd6d5cNSqX6/books/${id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(id));
};

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
