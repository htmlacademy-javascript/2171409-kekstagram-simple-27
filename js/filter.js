const effectsListItem = document.querySelector('.effects__list');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');

const clearClass = () => {
  imgUploadPreviewElement.className = '';
};

const initFilter = () => {
  effectsListItem.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearClass();
    imgUploadPreviewElement.classList.add(evt.target.classList[1]);
  });
};

export { initFilter, imgUploadPreviewElement };
