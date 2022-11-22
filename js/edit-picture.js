import { destroyForm } from './form.js';
import { isEscapeKey } from './util.js';
import { pristine } from './validate.js';

const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const OperationSign = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const FilterValue = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const filterName = {
  [FilterValue.DEFAULT]: {
    range: {
      min: 0,
      max: 1
    },
    start: 0,
    step: 0.1
  },
  [FilterValue.CHROME]: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },
  [FilterValue.SEPIA]: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },
  [FilterValue.MARVIN]: {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  },
  [FilterValue.PHOBOS]: {
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  },
  [FilterValue.HEAT]: {
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1
  },
};

const imgPreviewElement = document.querySelector('.img-upload__preview img');

const formElement = document.querySelector('.img-upload__form');
const formOverlayElement = formElement.querySelector('.img-upload__overlay');
const btnCancelElement = formElement.querySelector('.img-upload__cancel');
const btnSmallerElement = formElement.querySelector('.scale__control--smaller');
const btnBiggerElement = formElement.querySelector('.scale__control--bigger');
const scaleValueElement = formElement.querySelector('.scale__control--value');
const sliderContainerElement = formElement.querySelector('.effect-level');
const sliderInputElement = formElement.querySelector('.effect-level__slider');
const effectsElement = formElement.querySelector('.effects__list');
const levelEffectElement = formElement.querySelector('.effect-level__value');

const blockedSlider = () => {
  sliderContainerElement.style.display = 'none';
  sliderContainerElement.setAttribute('disabled', true);
};

const unblockedSlider = () => {
  sliderContainerElement.removeAttribute('style');
  sliderContainerElement.setAttribute('disabled', false);
};

const changePreviewImg = (filter) => {
  imgPreviewElement.style.filter = filter;
};

const changeEffectImgPreview = (filter) => {
  switch (filter) {
    case FilterValue.CHROME:
      changePreviewImg(`grayscale(${levelEffectElement.value})`);
      break;
    case FilterValue.SEPIA:
      changePreviewImg(`sepia(${levelEffectElement.value})`);
      break;
    case FilterValue.MARVIN:
      changePreviewImg(`invert(${levelEffectElement.value}%)`);
      break;
    case FilterValue.PHOBOS:
      changePreviewImg(`blur(${levelEffectElement.value}px)`);
      break;
    case FilterValue.HEAT:
      changePreviewImg(`brightness(${levelEffectElement.value})`);
      break;
    default:
      imgPreviewElement.removeAttribute('style');
      break;
  }
};
const getSettingsSliderForFilter = (name) => filterName[name];

const onEffectsElementChange = (evt) => {
  if (imgPreviewElement.classList) {
    imgPreviewElement.removeAttribute('class');
    imgPreviewElement.classList.add(`effects__preview--${evt.target.value}`);
  }

  if (evt.target.value !== FilterValue.DEFAULT) {
    unblockedSlider();
  } else {
    blockedSlider();
  }

  const updateValue = getSettingsSliderForFilter(evt.target.value);
  sliderInputElement.noUiSlider.updateOptions(updateValue);
  changeEffectImgPreview(evt.target.value);
};

const initFilter = () => {
  effectsElement.addEventListener('change', onEffectsElementChange);
};

const initSlider = () => {
  noUiSlider.create(sliderInputElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  blockedSlider();

  sliderInputElement.noUiSlider.on('update', () => {
    levelEffectElement.value = sliderInputElement.noUiSlider.get();
    changeEffectImgPreview(effectsElement.querySelector('input:checked').value);
  });
};

const printValueInElement = (result) => {
  scaleValueElement.value = `${result}%`;
  imgPreviewElement.style.transform = `scale(${result / 100})`;
};

const changeScaleImg = (flag) => {
  const result = parseInt(scaleValueElement.value, 10);
  printValueInElement(Math.min(Math.max(flag === OperationSign.INCREMENT ? result + Scale.STEP : result - Scale.STEP, Scale.MIN), Scale.MAX));
};

const onBtnSmallerElementClick = () => {
  changeScaleImg(OperationSign.DECREMENT);
};

const onBtnBiggerElementClick = () => {
  changeScaleImg(OperationSign.INCREMENT);
};

const initScale = () => {
  printValueInElement(Scale.MAX);
  btnSmallerElement.addEventListener('click', onBtnSmallerElementClick);
  btnBiggerElement.addEventListener('click', onBtnBiggerElementClick);
};

const openEditPictureModal = (pictureUrl) => {
  imgPreviewElement.src = pictureUrl;
  formOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  btnCancelElement.addEventListener('click', onBtnCancelElementClick);
  document.addEventListener('keydown', onDocumentKeydown);
  imgPreviewElement.removeAttribute('class');

  initScale();
  initSlider();
  initFilter();
};

const closeEditPictureModal = () => {
  pristine.reset();
  sliderInputElement.noUiSlider.destroy();
  formOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  btnCancelElement.removeEventListener('click', onBtnCancelElementClick);
  btnSmallerElement.removeEventListener('click', onBtnSmallerElementClick);
  btnBiggerElement.removeEventListener('click', onBtnBiggerElementClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  destroyForm();
};

function onBtnCancelElementClick() {
  closeEditPictureModal();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeEditPictureModal();
  }
}

const initEditPicture = (pictureUrl) => {
  openEditPictureModal(pictureUrl);
};

export { closeEditPictureModal, initEditPicture };
