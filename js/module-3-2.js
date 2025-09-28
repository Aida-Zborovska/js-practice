//1. Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.
function sumTwoNumbers(a, b) {
  return a + b;
}
//console.log(sumTwoNumbers(5, 9));

//2. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
// них.
function getMaxNumber(a, b, c) {
  return Math.max(a, b, c);
}
//console.log(getMaxNumber(1, 4, 2));

// 3. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
// повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
// false, якщо ні.
function isBetween(number, min, max) {
  return number >= min && number <= max;
}
//console.log(isBetween(3, 3, 5));
//console.log(isBetween(3, 3, 2));

//4. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.
function getFirstSymbol(string) {
  return string[0];
}
//console.log(getFirstSymbol('Unicorn'));

// 5. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.
function getLastSymbol(string) {
  return string[string.length - 1];
}
//console.log(getLastSymbol('Unicorn'));

//6. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
// якщо ні.
function isEven(number) {
  return number % 2 === 0;
}
//console.log(isEven(12));
//console.log(isEven(13));

// 7. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
// повернути null, в іншому випадку повернути добуток цих двох чисел.
function foo7(a, b) {
  return a === 0 || b === 0 ? null : a * b;
}
// console.log(foo7(0, 3));
// console.log(foo7(2, 3));

// 8. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
// тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
// `"<div>Hello world<div>"`
function divWrap(string) {
  return `<div>${string}</div>`;
}
//console.log(divWrap('Hi, how are you doing?'));

// 9. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
// розділені пробілами).
function countWords(string) {
  return string.split(' ').length;
}
//console.log(countWords('I am an unicorn!'));

// 10. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
// кількість слів в цьому рядку.
function foo10(string) {
  return countWords(string) * string.length;
}
//console.log(foo10('I am an unicorn!'));

// 11. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у
// ньому (a, e, i, o, u). Використовуйте метод includes та цикл.
function countVowels(string) {
  let count = 0;
  for (const symbol of string.toLowerCase()) {
    if ('aeiou'.includes(symbol)) {
      count++;
    }
  }
  return count;
}
//console.log(countVowels('I am an unicorn!'));

// 12. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
// розташовані у зворотному порядку.
function reverseString(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
//console.log(reverseString('I am an unicorn!'));

// 13. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
// якщо всі аргументи є числами, і false, якщо ні.
function isNumbers() {
  for (const arg of arguments) {
    if (typeof arg !== 'number') {
      return false;
    }
  }
  return true;
}
//console.log(isNumbers(2, 4, 7, 9));
//console.log(isNumbers(2, 5, 6, null));

// 14. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
// об'єднаними в один рядок, розділений комами.
function joinInString() {
  const arr = Array.from(arguments);
  return arr.join(',');
}
//console.log(joinInString('I', 'am', 'an', 'unicorn'));

// 15. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
// добуток.
function getNumbersProduct() {
  let result = 1;
  for (let el of arguments) {
    result *= el;
  }
  return result;
}
//console.log(getNumbersProduct(1, 2, 3, 4, 5));

// 16. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
// непарних чисел серед них.
function countOdd(...args) {
  let count = 0;
  for (const el of args) {
    if (el % 2 === 1) {
      count++;
    }
  }
  return count;
}
//console.log(countOdd(1, 2, 4, 3, 5.6, 0));

// 17. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
// що є найдовшим
function getLongestString() {
  let result = '';
  for (const el of arguments) {
    if (el.length > result.length) {
      result = el;
    }
  }
  return result;
}
//console.log(getLongestString('I', 'am', 'an', 'unicorn', '!'));

//18. Напиши функцію яка приймає довільну кількість рядочків і об`єднує їх в один
// цілий рядок.
function joinStrings() {
  return Array.from(arguments).join('');
}
//console.log(joinStrings('I', 'am', 'an', 'unicorn', '!'));

//19. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
// повернути null, в іншому випадку повернути добуток цих двох чисел.
function mathProduct(a, b) {
  return a === 0 || b === 0 ? null : a * b;
}
// console.log(mathProduct(5, 0));
// console.log(mathProduct(2, 3));
