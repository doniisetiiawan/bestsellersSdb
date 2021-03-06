import fetch from 'node-fetch';

const API_KEY = 'rRapa7ol5qNQBOJ7XrhjxovNu3907ulc';
const API_STEM = 'https://api.nytimes.com/svc/books/v3/lists';

function fetchBooks(listName) {
  const url = `${API_STEM}/${listName}?response-format=json&api-key=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results.books)
    .catch((error) => {
      console.error(error);
    });
}

export default { fetchBooks };
