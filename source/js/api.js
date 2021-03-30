import { showAlert } from './util.js';
import { resetMap } from './map.js';

const GET_DATA_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(GET_DATA_URL)
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects);
    })
    .catch(() => {
      showAlert('При загрузке данных произошла ошибка');
    })
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_URL,
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
    })
};

export {getData, sendData};
