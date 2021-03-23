import { SIMILAR_OBJECT_COUNT } from './map.js';

const filter = document.querySelector('.map__filters');
const features = document.querySelector('.map__features');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');

const ANY_SELECT_FILTER = 'any';

const priceRange = {
  low: 10000,
  middle: 50000,
}

const getFilteredObjects = (objects) => {

  let filteredObjects = objects.slice();

  if (housingType.value !== ANY_SELECT_FILTER) {
    filteredObjects = filteredObjects.filter((point) => point.offer.type === housingType.value);
  }

  if (housingPrice.value !== ANY_SELECT_FILTER) {
    switch (housingPrice.value){
      case 'low':
        filteredObjects = filteredObjects.filter((point) => point.offer.price < priceRange.low);
        break;
      case 'middle':
        filteredObjects = filteredObjects.filter((point) => point.offer.price >= priceRange.low && point.offer.price <= priceRange.middle);
        break;
      case 'high':
        filteredObjects = filteredObjects.filter((point) => point.offer.price > priceRange.middle);
        break;
      default:
        break;
    }
  }

  if (housingRooms.value !== ANY_SELECT_FILTER) {
    filteredObjects = filteredObjects.filter((point) => point.offer.rooms.toString() === housingRooms.value);
  }

  if (housingGuests.value !== ANY_SELECT_FILTER) {
    filteredObjects = filteredObjects.filter((point) => point.offer.guests.toString() === housingGuests.value);
  }

  const checkedFeatures = document.querySelectorAll('.map__features input:checked');
  checkedFeatures.forEach(element => {
    filteredObjects = filteredObjects.filter((point) => point.offer.features.indexOf(element.value) !== -1);
  });

  return filteredObjects.slice(0, SIMILAR_OBJECT_COUNT);
};

const setFilter = (cb) => {
  filter.addEventListener('change', () => cb());
  features.addEventListener('change', () => cb());
};


export { getFilteredObjects, setFilter }
