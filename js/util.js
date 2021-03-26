const ALERT_SHOW_TIME = 5000;

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error_alert-message');

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (cb, timeout) => {
  let timer;

  return () => {
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = setTimeout(() => cb(), timeout)
  }
}


export { isEscEvent, isEnterEvent, showAlert, debounce };
