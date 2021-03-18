const MAX_ROOMS_NUMBER = 100;

const PlaceTypes = {
  BUNGALO: 'bungalow',
  FLAT: 'flat',
  HOUSE: 'house',
  PALACE: 'palace',
};

const placeTypeMap = {
  [PlaceTypes.BUNGALO]: {
    PLACEHOLDER: '0',
    PRICE_MIN: 0,
  },
  [PlaceTypes.FLAT]: {
    PLACEHOLDER: '1000',
    PRICE_MIN: 1000,
  },
  [PlaceTypes.HOUSE]: {
    PLACEHOLDER: '5000',
    PRICE_MIN: 5000,
  },
  [PlaceTypes.PALACE]: {
    PLACEHOLDER: '10000',
    PRICE_MIN: 10000,
  },
};

const typePlace = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const address = document.querySelector('#address');
const userTitle = document.querySelector('#title');
const userPrice = document.querySelector('#price');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

const setAddress = (x, y) => {
  address.value = `${x}, ${y}`;
};

typePlace.addEventListener('change', () => {
  price.placeholder = placeTypeMap[typePlace.value].PLACEHOLDER;
  price.min = placeTypeMap[typePlace.value].PRICE_MIN;
})

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});


userTitle.addEventListener('input', () => {
  if (userTitle.validity.tooShort) {
    userTitle.setCustomValidity('Заголовок должен состоять минимум из 30 символов');
  } else if (userTitle.validity.tooLong) {
    userTitle.setCustomValidity('Заголовок не должен превышать 100 символов');
  } else if (userTitle.validity.valueMissing) {
    userTitle.setCustomValidity('Обязательное поле');
  } else {
    userTitle.setCustomValidity('');
  }
});

userPrice.addEventListener('input', () => {
  if (userPrice.validity.rangeOverflow) {
    userPrice.setCustomValidity('Значение не должно превышать 1 000 000');
  } else if (userPrice.validity.valueMissing) {
    userPrice.setCustomValidity('Обязательное поле');
  } else {
    userPrice.setCustomValidity('');
  }
});

const onCapacityCheck = () => {
  const roomNumber = roomNumberSelect.value;
  const capacity = capacitySelect.value;

  if (roomNumber === MAX_ROOMS_NUMBER && capacity !== '0') {
    capacitySelect.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (roomNumber !== MAX_ROOMS_NUMBER && capacity === '0') {
    capacitySelect.setCustomValidity('Выберите другой вариант');
  } else if (roomNumber < capacity) {
    capacitySelect.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacitySelect.setCustomValidity('');
  }
}

capacitySelect.addEventListener('change', onCapacityCheck)

roomNumberSelect.addEventListener('change', onCapacityCheck)

export { setAddress };
