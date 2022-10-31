import { isEcapeKey } from './util.js';

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const formOverlayElement = formElement.querySelector('.img-upload__overlay');
const btnCancel = formElement.querySelector('.img-upload__cancel');
const btnUploadFile = formElement.querySelector('#upload-file');


const initModal = () => {
  const pristine = new Pristine(formElement, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'img-upload__text__error-text'
  });

  const openModal = () => {
    formOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeydown);
  };

  const closeModal = () => {
    formElement.reset();
    pristine.reset();
    formOverlayElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  };

  const onFileInputChange = () => openModal();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    pristine.validate();
  };

  btnUploadFile.addEventListener('change', onFileInputChange);
  btnCancel.addEventListener('click', closeModal);
  formElement.addEventListener('submit', onFormSubmit);

  function onEscKeydown(evt) {
    if (isEcapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  }
};

export { initModal };
