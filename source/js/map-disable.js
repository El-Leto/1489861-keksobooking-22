import { initImageUploaders } from './photo.js';

const form = document.querySelector('.ad-form');
const formElements = document.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterElements = document.querySelectorAll('select');

const deactivate = () => {
  form.classList.add('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].setAttribute('disabled', true);
  }
  filter.classList.add('map__filters--disabled');
  for (let i = 0; i < filterElements.length; i++) {
    filterElements[i].setAttribute('disabled', true);
  }
}

const activate = () => {
  form.classList.remove('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].removeAttribute('disabled', true);
  }
  initImageUploaders();
  filter.classList.remove('map__filters--disabled');
  for (let i = 0; i < filterElements.length; i++) {
    filterElements[i].removeAttribute('disabled', true);
  }
}

export { deactivate, activate };
