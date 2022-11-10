const effectListsElement = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const imgPreviewElement = document.querySelector('.img-upload__preview img');
const levelEffectElement = document.querySelector('.effect-level__value');
const nameFilters = {
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

const getNameFilter = (name) => nameFilters[name]; //получение параметров для выбранного слайдера

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
      if (value === 'chrome') {
        imgPreviewElement.style.filter = `grayscale(${levelEffectElement.value})`;
      } else if (value === 'sepia') {
        imgPreviewElement.style.filter = `sepia(${levelEffectElement.value})`;
      } else if (value === 'marvin') {
        imgPreviewElement.style.filter = `invert(${levelEffectElement.value}%)`;
      } else if (value === 'phobos') {
        imgPreviewElement.style.filter = `blur(${levelEffectElement.value}px)`;
      } else if (value === 'heat') {
        imgPreviewElement.style.filter = `brightness(${levelEffectElement.value})`;
      } else {
        sliderElement.setAttribute('disabled', true);
        imgPreviewElement.removeAttribute('style');
      }
    });
  };
  sliderElement.setAttribute('disabled', true);
  imgPreviewElement.removeAttribute('style');

  effectListsElement.addEventListener('change', (evt) => {

    sliderElement.noUiSlider.updateOptions(getNameFilter(evt.target.value));
    getFilter(evt.target.value);
  });
};

export { initSlider };
