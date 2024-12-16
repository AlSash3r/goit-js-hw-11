import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
const form = document.querySelector('.form');
const input = document.querySelector('input[name="search"]');
const list = document.querySelector('.list');
const loading = document.querySelector('.loader');
form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  const searchValue = input.value.trim();
  if (!searchValue) {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter a search item.',
    });
    return;
  }
  list.innerHTML = '';
  loading.style.display = 'inline-block'; 
  fetchImages(searchValue)
    .then(({ hits, total }) => {
      if (total === 0) {
        iziToast.error({
          position: 'topRight',
          message: 'Sorry, no images found. Please try again!',
        });
        return;
      }
      list.innerHTML = renderImages(hits);
      initSimpleLightbox();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: error.message,
      });
    })
    .finally(() => {
      loading.style.display = 'none'; 
    });
}
function initSimpleLightbox() {
  const lightbox = new SimpleLightbox('.list-item', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 150,
  });
  lightbox.refresh();
}
