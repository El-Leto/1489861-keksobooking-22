import { deactivate } from './map-disable.js';
import { initMap, createPoints, resetMap } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit, resetForm } from './user-form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

const SIMILAR_OBJECT_COUNT = 10;

deactivate();
initMap();

getData((objects) => {
  createPoints(objects.slice(0, SIMILAR_OBJECT_COUNT));
});

const successHandler = () => {
  showSuccessMessage();
  resetMap();
  resetForm();
}

setUserFormSubmit(successHandler, showErrorMessage);
