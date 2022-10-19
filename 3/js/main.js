/* 
ЗАДАНИЕ №1:
Функция, возвращающая случайное целое число из переданного диапазона включительно.
имя_функции(от, до); // Результат: целое число из диапазона "от...до"
+- аргументами функции могут быть только положительные числа и ноль
+- Если функции пришли неправильные аргументы, она должна вернуть NaN
+- если передать значение «до» меньшее, чем значение «от», или равное ему. Функция также может возвращать NaN.

Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа.
*/

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
    // console.log(
    //   "аргументами функции могут быть только положительные числа и ноль"
    // );
    return NaN;
  } else if (min > max) {
    let num = min;
    min = max;
    max = num;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

/*
ЗАДАНИЕ №2:
Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:

имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
*/

const checkMaxLength = (text, maxLength) => {
  if (text.length >= maxLength) {
    return console.log(true);
  }
  return console.log(false);
};