// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна
// повернути булеве значення true якщо перша літера str1 дорівнює останій
// літері str2. В іншому випадку функція повинна повернути булеве значення false.
function compareLetters(str1, str2) {
  return str1[0] === str2[str2.length - 1];
}
// console.log(compareLetters('aloha', 'Aloha'));
// console.log(compareLetters('Aloha', 'Aloha'));

// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна
// повернути булеве значення true якщо перша літера str1 дорівнює першій
// літері str2. В іншому випадку функція повинна повернути булеве значення false.
function compareFirstLetters(str1, str2) {
  return str1[0] === str2[0];
}
// console.log(compareFirstLetters('aloha', 'Aloha'));
// console.log(compareFirstLetters('Aloha', 'Aloha'));

//Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна
//  повернути булеве значення true якщо довжина str1 дорівнює довжині str2.
// В іншому випадку функція повинна повернути булеве значення false.
function compareLength(str1, str2) {
  return String(str1).length === String(str2).length;
}
// console.log(compareLength('Abcdefg', 1234567));
// console.log(compareLength('Abcdefg', 123456789));

// Задача-4
// Напишіть функцію яка приймає число num. Функція повинна повернути булеве
//  значення true якщо кількість цифр у числі парна. В іншому випадку функція
// повинна повернути булеве значення false.
function isLengthEven(num) {
  return String(num).length % 2 === 0;
}
// console.log(isLengthEven(12345));
// console.log(isLengthEven(123456));

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна
// повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку
// функція повинна повернути булеве значення false.
function compareNumbers(num1, num2) {
  return num1 > num2;
}
// console.log(compareNumbers(33, 23));
// console.log(compareNumbers(13, 23));

//Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна
// повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому
// випадку функція повинна повернути булеве значення false.
function hasNoRemainder(num1, num2) {
  return num1 % num2 === 0;
}
// console.log(hasNoRemainder(20, 5));
// console.log(hasNoRemainder(20, 3));

// Задача-7
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве
// значення true, якщо num є непарним числом. В іншому випадку функція повинна
// повернути булеве значення false.
function isNumberOdd(num) {
  return num % 2 === 1;
}
// console.log(isNumberOdd(5));
// console.log(isNumberOdd(4));

// Задача-8
// Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве
// значення true, якщо str містить принаймні одну велику літеру. В іншому випадку
// функція повинна повернути булеве значення false.
// Підказка: допоможе toLowerCase();
function hasCapitalLetter(str) {
  return str !== str.toLowerCase();
}
// console.log(hasCapitalLetter('CapitalLetter'));
// console.log(hasCapitalLetter('caterpillar'));

// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна
// повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2.
// В іншому випадку функція повинна повернути булеве значення false.
function isStr1Longest(str1, str2) {
  return String(str1).length > String(str2).length;
}
// console.log(isStr1Longest('Abcdefg', 1234));
// console.log(isStr1Longest('Abcdefg', 123456789));

// Задача-12
function hasSpace(str) {
  return str.includes(' ');
}
// console.log(hasSpace('I am'));
// console.log(hasSpace('Yammy'));

// Задача-14
function isPalindrom(str) {
  let check = str.split('').reverse().join('');

  return str.toLowerCase() === check.toLowerCase();
}
// console.log(isPalindrom('Корок'));
// console.log(isPalindrom('холодильник'));

// Задача-17
function isFirstLetterVowel(str) {
  let el = str[0].toLowerCase();
  return 'aeiou'.includes(el);
}
// console.log(isFirstLetterVowel('Vowel'));
// console.log(isFirstLetterVowel('Includes'));

// Задача-22
function foo22(num1, num2) {
  return num1 % 2 === 0 && num2 % 2 !== 0;
}
// console.log(foo22(10, 9));
// console.log(foo22(10, 10));

// Задача-23
function foo23(num) {
  return num > 100 && num < 200;
}
// console.log(foo23(109));
// console.log(foo23(1010));

// Задача-24
function isOnlyLowerCase(str) {
  return str === str.toLowerCase();
}
// console.log(isOnlyLowerCase('I am an Unicorne'));
// console.log(isOnlyLowerCase('i am an unicorne'));

//================================================================================

// Task 1

function toRound(value) {
  console.log(Math.floor(value));
}
