import searchService from './services/apiService';
import { refs } from './utils/refs';
import photoCardTemplate from './templates/photo-card.hbs';
const debounce = require('lodash.debounce');
import { pWarning, pNotice } from './utils/pnotify';
import { messages } from './utils/messages';
import 'regenerator-runtime/runtime';
import * as basicLightbox from 'basiclightbox';

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const inputValue = form.value.toLowerCase();
  searchService.searchQuery = inputValue;
  searchService
    .fetchImages()
    .then(data => {
      if (data.hits.length === 0) {
        pWarning(messages.warningNotIn);
      } else if (inputValue.length === 0) {
        clearListItems();
      } else {
        clearListItems();
        const markup = buildPhotoCardMarkup(data);
        insertPhotoCards(markup);
      }
    })
    .catch(err => console.log(err));
}

function loadMoreBtnHandler() {
  if (searchService.searchQuery.length === 0) {
    pNotice(messages.warningNoInput);
  } else {
    const loadMore = async () => {
      try {
        const images = await searchService.fetchImages();
        const markup = buildPhotoCardMarkup(images);
        insertPhotoCards(markup);
        return images;
      } catch (err) {
        console.error(err);
      }
    };
    const promise = loadMore();
    promise.then(() => {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}

function buildPhotoCardMarkup(items) {
  return photoCardTemplate(items);
}

function insertPhotoCards(items) {
  refs.imagesList.insertAdjacentHTML('beforeend', items);
}

function clearListItems() {
  refs.imagesList.innerHTML = '';
}

refs.searchForm.addEventListener(
  'input',
  debounce(searchFormSubmitHandler, 500),
);

refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
