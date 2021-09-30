import { loadFromApi, addBook, removeBook } from './books';

const fetchList = async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yynVz1vVLFd6d5cNSqX6/books/');
  const obj = await response.json();
  const keys = Object.keys(obj);
  const list = [];
  keys.forEach((key) => { list.push({ ...obj[key][0], item_id: key }); });
  return list;
};

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
