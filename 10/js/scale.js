const btnSmallerElement = document.querySelector('.scale__control--smaller');
const btnBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');

let result = parseInt(scaleValueElement.value, 10);

const addStyleTransform = () => {
  imgUploadPreviewElement.style = '';
  imgUploadPreviewElement.style.transform = `scale(${result / 100})`;
};

const printValueInElement = () => {
  scaleValueElement.value = `${result}%`;
};

const scaleSmaller = (evt) => {
  evt.preventDefault();
  result = result - 25;
  if (result < 0) {
    result = 0;
  }
  printValueInElement();
  addStyleTransform();
};

const scaleBigger = (evt) => {
  evt.preventDefault();
  result = result + 25;
  if (result < 0) {
    result = 0;
  } else if (result > 100) {
    result = 100;
  }
  printValueInElement();
  addStyleTransform();
};

const initScale = () => {
  btnSmallerElement.addEventListener('click', scaleSmaller);
  btnBiggerElement.addEventListener('click', scaleBigger);
};

export { initScale };
