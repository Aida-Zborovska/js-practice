const numbers = [1, 2, 3, 4, 5];

// 1. Сума чисел
const sumArray = (numbers, callback) => {
  let sum = 0;
  numbers.forEach(element => {
    sum += element;
  });
  callback(sum);
};
// sumArray(numbers, x => {
//   console.log(x);
// });

// 2. Подвоєння чисел
const doubleArray = (numbers, callback) => {
  const result = numbers.map(number => number * 2);
  callback(result);
};
// doubleArray(numbers, console.log);

// 3. Фільтр слів
const filterWords = (words, condition, callback) => {
  callback(words.filter(condition));
};
const arrayWords = ['abc', 'qwerty', 'ASDFG', 'We', 'sea'];
// filterWords(arrayWords, string => string.length > 3, console.log);
// filterWords(arrayWords, string => string === string.toLowerCase(), console.log);

// 4. Капіталізація рядків
const capitalizeStrings = (strings, callback) => {
  const result = strings.map(
    string => string[0].toUpperCase() + string.slice(1)
  );
  callback(result);
};
// capitalizeStrings(arrayWords, console.log);

// 5. Сортування чисел
const sortNumbers = (numbers, callback) =>
  callback(numbers.toSorted((a, b) => a - b));
const arrayNumbers = [2, 5, 4, 1, -2, 0, 2];
// sortNumbers(arrayNumbers, console.log);

// 6. Пошук максимуму
const findMax = (numbers, callback) => callback(Math.max(...numbers));
// findMax(arrayNumbers, console.log);

// 7. Перевірка на парність

const checkEven = (numbers, callback) => {
  const hasOdd = numbers.some(number => number % 2 !== 0);
  callback(!hasOdd);
};
// checkEven(arrayNumbers, console.log);
// checkEven([2, 4, 6, 8], console.log);

// 8. Об'єднання рядків
const concatStrings = (strings, separator, callback) =>
  callback(strings.join(separator));
// concatStrings(['I', 'am', 'the', 'unicorn!'], '-', console.log);

// 9. Перетворення в числа
const parseNumbers = (strings, callback) => {
  const result = strings.map(string => +string); // можна зробити явне перетворення,
  // Number(string), але так коротше і веселіше:)
  callback(result);
};
// parseNumbers(['2', '-4', 'qwerty', '0'], console.log);

// 10. Підрахунок символів
// const countCharacters = (strings, callback) => {
//   let sum = 0;
//   strings.forEach(string => (sum += string.length));
//   callback(sum);
// };

const countCharacters = (strings, callback) =>
  callback(strings.reduce((sum, string) => (sum += string.length), 0));

// countCharacters(['a', 'b', 'cd', 'ef'], console.log);
