import { isEcapeKey, showAlert } from './util.js';
import { pristine } from './validate.js';
import { initPopup, destroyPopup } from './popup.js';
import { sendData } from './api.js';

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const formOverlayElement = formElement.querySelector('.img-upload__overlay');
const btnCancel = formElement.querySelector('.img-upload__cancel');
const btnUploadFile = formElement.querySelector('#upload-file');
const imgPreviewElement = document.querySelector('.img-upload__preview img');
const submitButton = document.querySelector('#upload-submit');


const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const openModal = () => {
  formOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
  imgPreviewElement.src = URL.createObjectURL(btnUploadFile.files[0]); //добавление выбранного изображения
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

const setOnFormSubmit = (onSuccess) => {
  btnUploadFile.addEventListener('change', onBtnUploadFileChenge);
  btnCancel.addEventListener('click', onClickBtnCancel);
  formElement.addEventListener('change', (evt) => {
    // evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        () => {
          onSuccess(evt);
          blockSubmitButton();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(formElement),
      );
    }
  })
};

function onEscKeydown(evt) {
  if (isEcapeKey(evt)) {
    evt.preventDefault();
    onClickBtnCancel();
  }
}

export { setOnFormSubmit, closeModal };
