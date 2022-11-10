const effectsListItem = document.querySelector('.effects__list');
const imgPreviewElement = document.querySelector('.img-upload__preview img');

const clearClass = () => {
  imgPreviewElement.className = '';
};

const initFilter = () => {
  effectsListItem.addEventListener('change', (evt) => {
    clearClass();
    imgPreviewElement.classList.add(`effects__preview--${evt.target.value}`);
  });
};

export { initFilter };
