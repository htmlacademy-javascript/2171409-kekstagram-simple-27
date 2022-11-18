const effectsListItem = document.querySelector('.effects__list');
const imgPreviewElement = document.querySelector('.img-upload__preview img');
const btnSmallerElement = document.querySelector('.scale__control--smaller');
const btnBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const effectListsElement = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const levelEffectElement = document.querySelector('.effect-level__value');
const FilterName = {
  none: {
    range: {
      min: 0,
      max: 1
    },
    start: 0,
    step: 0.1
  },
  chrome: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },
  sepia: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },
  marvin: {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  },
  phobos: {
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  },
  heat: {
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1
  },
};



//Начало выбора фильтра
const clearClass = () => {
  imgPreviewElement.removeAttribute('class');
};

const clearStyle = () => {
  imgPreviewElement.removeAttribute('style');
};

const clearScaleValue = () => {
  scaleValueElement.reset();
};

const onEffectListItemChange = (evt) => {
  imgPreviewElement.classList.add(`effects__preview--${evt.target.value}`);
};

let result = parseInt(scaleValueElement.value, 10);
const effectsListItemChange = () => {
  effectsListItem.addEventListener('change', onEffectListItemChange);
};
//Конец выбора фильтра

//Начало реализации масштаба
const printValueInElement = () => {
  scaleValueElement.value = `${result}%`;
  imgPreviewElement.style.transform = `scale(${result / 100})`;
};

const scaleSmaller = () => {
  result = Math.min(Math.max((result - 25), 0), 100); //значение между 0 и 100
  printValueInElement();
};

const scaleBigger = () => {
  result = Math.min(Math.max((result + 25), 0), 100); //значение между 0 и 100
  printValueInElement();
};

const initScale = () => {
  printValueInElement();
  btnSmallerElement.addEventListener('click', scaleSmaller);
  btnBiggerElement.addEventListener('click', scaleBigger);
};
// Конец реализации масштаба

//Начало реализации изменения интенсивности эффекта (слайдером)
const getNameFilter = (name) => FilterName[name]; //получение параметров для выбранного слайдера

const initSlider = () => {
  noUiSlider.create(sliderElement, {
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

  const getFilter = (value) => {
    sliderElement.noUiSlider.on('update', () => {
      levelEffectElement.value = sliderElement.noUiSlider.get();
      if (value !== 'none') {
        sliderElement.removeAttribute('disabled');
      }
      switch (value) {
        case 'chrome':
          imgPreviewElement.style.filter = `grayscale(${levelEffectElement.value})`;
          break;
        case 'sepia':
          imgPreviewElement.style.filter = `sepia(${levelEffectElement.value})`;
          break;
        case 'marvin':
          imgPreviewElement.style.filter = `invert(${levelEffectElement.value}%)`;
          break;
        case 'phobos':
          imgPreviewElement.style.filter = `blur(${levelEffectElement.value}px)`;
          break;
        case 'heat':
          imgPreviewElement.style.filter = `brightness(${levelEffectElement.value})`;
          break;
        default:
          sliderElement.setAttribute('disabled', true);
          imgPreviewElement.removeAttribute('style');
          break;
      }
    });
  };
  sliderElement.setAttribute('disabled', true);
  clearStyle();
  effectListsElement.addEventListener('change', (evt) => {
    sliderElement.noUiSlider.updateOptions(getNameFilter(evt.target.value));
    getFilter(evt.target.value);
  });
};
//Конец реализации изменения интенсивности эффекта (слайдером)

const initPopup = () => {
  initSlider();
  initScale();
  effectsListItemChange();
};

const destroyPopup = () => {
  effectsListItem.removeEventListener('change', onEffectListItemChange);
  btnSmallerElement.removeEventListener('click', scaleSmaller);
  btnBiggerElement.removeEventListener('click', scaleBigger);
  clearClass();
  clearStyle();
  clearScaleValue();
  sliderElement.noUiSlider.destroy();
};

export { destroyPopup, initPopup };
