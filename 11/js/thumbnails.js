import { openBigPicture } from './big-picture.js';

const pictures = document.querySelector('.pictures');

const getThumbnailTemplate = ({id, url, likes, comments}) => `<a href="#" class="picture" data-id="${id}">
    <img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
    <p class="picture__info">
      <span class="picture__comments">${comments.length}</span>
      <span class="picture__likes">${likes}</span>
    </p>
  </a>
`;

let photos = [];

const onPictureClick = (evt) => {
  const target = evt.target;
  const picture = target.closest('.picture');

  if (picture) {
    const id = picture.dataset.id;
    const [ photo ] = photos.filter((element) => element.id === +id);

    openBigPicture(photo);
  }
};

const initThumbnails = (data) => {
  photos = data.slice();
  pictures.insertAdjacentHTML('afterbegin', data.map((photo) => getThumbnailTemplate(photo)).join(''));

  pictures.addEventListener('click', onPictureClick);
};

export { initThumbnails };
