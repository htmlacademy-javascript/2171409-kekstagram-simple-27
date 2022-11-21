import { pristine } from './validate.js';
import { sendData } from './api.js';
import { closeEditPictureModal } from './edit-picture.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const formElement = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('#upload-submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const onFormElementSubmit = (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    blockSubmitButton();
    sendData(
      () => {
        closeEditPictureModal();
        showSuccessMessage();
      },
      () => {
        showErrorMessage();
      },
      new FormData(formElement),
    );
  }
};

const destroyForm = () => {
  formElement.reset();
  unblockSubmitButton();
  formElement.removeEventListener('submit', onFormElementSubmit);
};

const initForm = () => {
  formElement.addEventListener('submit', onFormElementSubmit);
};

export { initForm, destroyForm, unblockSubmitButton };
