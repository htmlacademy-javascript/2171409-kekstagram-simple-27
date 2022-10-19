import { similarWizards } from './util.js';

const picturesList = document.querySelector('.pictures');
const pictureWizardTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createWizards = similarWizards();

const createWizardsFragment = document.createDocumentFragment();

createWizards.forEach((wizard) => {
  const wizardElement = pictureWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.picture__img').src = wizard.url;
  wizardElement.querySelector('.picture__likes').textContent = wizard.likes;
  wizardElement.querySelector('.picture__comments').textContent = wizard.comments.length;
  createWizardsFragment.append(wizardElement);
});

picturesList.append(createWizardsFragment);
