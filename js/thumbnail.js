const picturesList = document.querySelector('.pictures');
const pictureWizardTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createWizardsFragment = document.createDocumentFragment();
const initThumbnail = (data) => {
  data.forEach(({ url, likes, comments }) => {
    const wizardElement = pictureWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.picture__img').src = url;
    wizardElement.querySelector('.picture__likes').textContent = likes;
    wizardElement.querySelector('.picture__comments').textContent = comments.length;
    createWizardsFragment.append(wizardElement);
  });
  picturesList.append(createWizardsFragment);
};

export { initThumbnail };
