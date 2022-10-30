import { COMMENTS, CommentsCount } from './consts.js';

/*
+- аргументами функции могут быть только положительные числа и ноль
+- Если функции пришли неправильные аргументы, она должна вернуть NaN
+- если передать значение «до» меньшее, чем значение «от», или равное ему. Функция также может возвращать NaN.
Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа.
*/
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
    //   "аргументами функции могут быть только положительные числа и ноль"
    return NaN;
  } else if (min > max) {
    const num = min;
    min = max;
    max = num;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

/*
Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:
имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
*/
// const checkMaxLength = (text, maxLength) => text.length >= maxLength;

// случайный элемент массива
const getRandomArrayElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

// получение комментариев
const getComment = () =>
  Array.from(
    { length: getRandomIntInclusive(CommentsCount.MIN, CommentsCount.MAX) },
    () => getRandomArrayElement(COMMENTS)
  );

// нажатие клавиши ESC
const isEcapeKey = (evt) => evt.key === 'Escape';

export { getComment, getRandomArrayElement, getRandomIntInclusive, isEcapeKey };
