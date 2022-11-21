import { initEditPicture } from './edit-picture.js';
import { initForm } from './form.js';

const IMAGE_TYPE_REG = /image.*/;

const formElement = document.querySelector('.img-upload__form');
const btnUploadFileElement = formElement.querySelector('#upload-file');

const onBtnUploadFileElementChange = () => {
  const uploadFile = btnUploadFileElement.files[0];

  if (uploadFile.type.match(IMAGE_TYPE_REG)) {
    initEditPicture(URL.createObjectURL(btnUploadFileElement.files[0]));
    initForm();
  }
};

export const initLoadPicture = () => {
  btnUploadFileElement.addEventListener('change', onBtnUploadFileElementChange);
};
