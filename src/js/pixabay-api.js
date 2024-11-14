export function pixabayApi(query) {
  const API_KEY = '47065428-a0220427b8b9e139f136fc7ca';
  const ORIGIN_URL = 'https://pixabay.com/api/';
  const url = `${ORIGIN_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}
