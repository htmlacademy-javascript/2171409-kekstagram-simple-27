import { unblockSubmitButton } from './form.js';
import { isEscapeKey } from './util.js';

const bodyElement = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const onSuccessBtnClick = () => {
  hideMessage();
};
const onErrorBtnClick = () => {
  hideMessage();
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onEscKeydown);
  successMessageElement.querySelector('.success__button').addEventListener('click', onSuccessBtnClick);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onEscKeydown);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorBtnClick);
  bodyElement.append(errorMessageElement);
  bodyElement.style.overflow = 'hidden';
};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  document.removeEventListener('click', onSuccessBtnClick);
  document.removeEventListener('click', onErrorBtnClick);
  document.removeEventListener('keydown', onEscKeydown);
  messageElement.remove();
  bodyElement.style.overflow = 'auto';
  unblockSubmitButton();
}

export { showErrorMessage, showSuccessMessage };
