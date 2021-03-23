import { deactivate } from './map-disable.js';
import { initMap, createPoints, resetMap, updateObjects } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit, resetForm } from './user-form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { setFilter } from './filter.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

deactivate();

getData((objects) => {
  initMap();
  createPoints(objects);
  setFilter(debounce(() => updateObjects(objects), RERENDER_DELAY));
});

const successHandler = () => {
  showSuccessMessage();
  resetMap();
  resetForm();
}

setUserFormSubmit(successHandler, showErrorMessage);
