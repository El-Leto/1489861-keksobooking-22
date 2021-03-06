import { SIMILAR_OBJECT_COUNT } from './map.js';

const ANY_SELECT_FILTER = 'any';
const LOW = 'low';
const MIDDLE = 'middle';
const HIGH = 'high';
const FILTER_VALUE = /filter-/;

const PriceRange = {
  MIN: 10000,
  MAX: 50000,
};

const filter = document.querySelector('.map__filters');
const features = document.querySelector('.map__features');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const wifiFilterItem = document.querySelector('#filter-wifi');
const dishwasherFilterItem = document.querySelector('#filter-dishwasher');
const parkingFilterItem = document.querySelector('#filter-parking');
const washerFilterItem = document.querySelector('#filter-washer');
const elevatorFilterItem = document.querySelector('#filter-elevator');
const conditionerFilterItem = document.querySelector('#filter-conditioner');

const isHouseTypeTheSame = (object) => {
  return housingType.value === ANY_SELECT_FILTER ? true : object.offer.type === housingType.value;
};

const isHousePriceTheSame = (object) => {
  return housingPrice.value === ANY_SELECT_FILTER ? true : (
    ((housingPrice.value === LOW) && (object.offer.price < PriceRange.MIN)) ||
    ((housingPrice.value === HIGH) && (object.offer.price >= PriceRange.MAX)) ||
    ((housingPrice.value === MIDDLE) && (object.offer.price >= PriceRange.MIN) && (object.offer.price < PriceRange.MAX))
  )
};

const isHouseRoomsTheSame = (object) => {
  return housingRooms.value === ANY_SELECT_FILTER ? true : object.offer.rooms.toString() === housingRooms.value;
};

const isHouseGuestsTheSame = (object) => {
  return housingGuests.value === ANY_SELECT_FILTER ? true : object.offer.guests.toString() === housingGuests.value;
};

const isFeatureTheSame = (featureItem, stay) => {
  const featureName = featureItem.getAttribute('id').replace(FILTER_VALUE, '');
  return featureItem.checked === false ? true  : stay.offer.features.includes(featureName);
};

const getFilteredObjects = (objects) => {
  const filteredObjects = [];
  for (let i = 0; i < objects.length; i++) {
    if (isHouseTypeTheSame(objects[i]) &&
    isHousePriceTheSame(objects[i]) &&
    isHouseRoomsTheSame(objects[i]) &&
    isHouseGuestsTheSame(objects[i]) &&
    isFeatureTheSame(wifiFilterItem, objects[i]) &&
    isFeatureTheSame(dishwasherFilterItem, objects[i]) &&
    isFeatureTheSame(parkingFilterItem, objects[i]) &&
    isFeatureTheSame(washerFilterItem, objects[i]) &&
    isFeatureTheSame(elevatorFilterItem, objects[i]) &&
    isFeatureTheSame(conditionerFilterItem, objects[i])) {
      filteredObjects.push(objects[i]);
    }
    if (filteredObjects.length >= SIMILAR_OBJECT_COUNT) {
      break;
    }
  }
  return filteredObjects;
};

const setFilter = (cb) => {
  filter.addEventListener('change', cb);
  features.addEventListener('change', cb);
};

const resetFilter = () => {
  filter.reset();
};

export { getFilteredObjects, setFilter, resetFilter }
