import { isEcapeKey } from './util.js';
import { pristine } from './validate.js';
import { initPopup, destroyPopup } from './popup.js';

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const formOverlayElement = formElement.querySelector('.img-upload__overlay');
const btnCancel = formElement.querySelector('.img-upload__cancel');
const btnUploadFile = formElement.querySelector('#upload-file');

const openModal = () => {
  formOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
  initPopup();
};

const closeModal = () => {
  formElement.reset();
  pristine.reset();
  formOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  destroyPopup();
};

const onBtnUploadFileChenge = () => openModal();
const onClickBtnCancel = () => closeModal();

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const initModal = () => {
  btnUploadFile.addEventListener('change', onBtnUploadFileChenge);
  btnCancel.addEventListener('click', onClickBtnCancel);
  formElement.addEventListener('submit', onFormSubmit);
};

function onEscKeydown(evt) {
  if (isEcapeKey(evt)) {
    evt.preventDefault();
    onClickBtnCancel();
  }
}

export { initModal };
