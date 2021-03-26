import { deactivate } from './map-disable.js';
import { initMap, createPoints, updateObjects } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit, onFormReset } from './user-form.js';
import { setFilter } from './filter.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

deactivate();

getData((objects) => {
  initMap();
  createPoints(objects);
  setFilter(debounce(() => updateObjects(objects), RERENDER_DELAY));
  setUserFormSubmit(objects);
  onFormReset(objects);
});
