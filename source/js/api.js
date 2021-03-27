import { showAlert } from './util.js';
import { resetMap } from './map.js';

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects);
    })
    .catch(() => {
      showAlert('При загрузке данных произошла ошибка');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetMap();
      } else {
        onFail(`Не удалось отправить форму. Попробуйте ещё раз. Код ошибки: ${response.status} ${response.statusText}.`);
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
