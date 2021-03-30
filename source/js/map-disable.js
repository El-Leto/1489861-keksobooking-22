import { initImageUploaders } from './photo.js';

const form = document.querySelector('.ad-form');
const formElements = document.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterElements = document.querySelectorAll('select');

const deactivate = () => {
  form.classList.add('ad-form--disabled');
  formElements.forEach(elem => {
    elem.setAttribute('disabled', true);
  })
  filter.classList.add('map__filters--disabled');
  filterElements.forEach(elem => {
    elem.setAttribute('disabled', true);
  })
};

const activate = () => {
  form.classList.remove('ad-form--disabled');
  formElements.forEach(elem => {
    elem.removeAttribute('disabled', true);
  })
  initImageUploaders();
  filter.classList.remove('map__filters--disabled');
  filterElements.forEach(elem => {
    elem.removeAttribute('disabled', true);
  })
};

export { deactivate, activate };
