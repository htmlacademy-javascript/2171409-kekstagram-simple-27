import { imgUploadPreviewElement } from './filter.js'

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
// const filterSelectedElement = document.querySelector('.effects__list input[type=radio]:checked')



const initSlider = () => {

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 50,
    step: 1,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    console.log(imgUploadPreviewElement);
  });

  // specialElement.addEventListener('change', (evt) => {
  //   if (evt.target.checked) {
  //     sliderElement.noUiSlider.updateOptions({
  //       range: {
  //         min: 1,
  //         max: 10
  //       },
  //       start: 8,
  //       step: 0.1
  //     });
  //   } else {
  //     sliderElement.noUiSlider.updateOptions({
  //       range: {
  //         min: 0,
  //         max: 100,
  //       },
  //       step: 1
  //     });
  //     sliderElement.noUiSlider.set(80);
  //   }
  // });

};

export { initSlider };
