import { pixabayApi } from './js/pixabay-api.js';
import { renderGallery, displayErrorMessage } from './js/render-functions.js';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  loader.style.display = 'block';

  pixabayApi(query)
    .then(data => {
      renderGallery(data.hits);
      loader.style.display = 'none';
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    })
    .catch(error => {
      loader.style.display = 'none';
      displayErrorMessage(
        'An error occurred while fetching data. Please try again later.'
      );
      console.error('Error fetching data: ', error);
    });
});
