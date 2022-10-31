import { COMMENTS, CommentsCount, DESCRIPTIONS, LikesCount, ID_COUNT_MAX } from './consts.js';
import { getRandomArrayElement, getRandomIntInclusive } from './util.js';

// получение комментариев
const getComment = () =>
  Array.from(
    { length: getRandomIntInclusive(CommentsCount.MIN, CommentsCount.MAX) },
    () => getRandomArrayElement(COMMENTS)
  );

// генератор массива
const createPhotos = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(LikesCount.MIN, LikesCount.MAX),
  comments: getComment(),
});

const getSimilarWizards = () =>
  Array.from({ length: ID_COUNT_MAX }, (_, photoIndex) =>
    createPhotos(photoIndex + 1)
  );

export { getSimilarWizards };
