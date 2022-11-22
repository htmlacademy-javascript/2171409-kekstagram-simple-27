import { ALERT_SHOW_TIME } from './consts.js';

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
    return NaN;
  } else if (min > max) {
    const num = min;
    min = max;
    max = num;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomArrayElement, getRandomIntInclusive, isEscapeKey, showAlert };
