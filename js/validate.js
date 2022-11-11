const formElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

export { pristine };
