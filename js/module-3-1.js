// =============================== Прості задачі =================================

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
const array1 = [0, null, 1, 'winter', 3, 5, true, 7];
//printElements(array1);

// 2. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
function printEvenElements(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
}
const array2 = [0, 1, 'tabasco', 3, 4, 5, true, 7];
//printEvenElements(array2);

// 3.Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.
function printEvenValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el % 2 === 0) {
      console.log(el);
    }
  }
}
const array3 = [54, 5, 657, 78, 23, 56, 23, 0];
//printEvenValues(array3);

//4. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел.
// Потрібно вивести лише ті елементи масиву, які більші за max.
function compareNumbers(arr, max) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el > max) {
      console.log(el);
    }
  }
}
const array4 = [54, 5, 657, 78, 23, 56, 23, 0];
//compareNumbers(array4, 50);

//5. Напиши функцію, яка приймає масив та повертає суму всіх чисел у масиві.
function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (typeof el === 'number') {
      sum += el;
    }
  }
  return sum;
}
const array5 = [0, null, 1, 'winter', 3, 5, true, 7];
//console.log(sumNumbers(array5));

// 6. Напиши функцію, яка приймає масив та елемент для пошуку. Функція повинна
// порахувати скільки разів елемент, який ми шукаємо, зустрічається у масиві.
function countElement(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}
const array6 = ['apple', 'apple', 45, 'Apple', 87, null];
//console.log(countElement(array6, 'apple'));

// 7. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
// негативні(від'ємні числа) з масиву та повернути новий масив.
function removeNegativeNambers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el >= 0) {
      result.push(el);
    }
  }
  return result;
}
const array7 = [0, -5, 44, -56, -7, 8];
//console.log(removeNegativeNambers(array7));

// 8. Напиши функцію, яка приймає масив рядочків. Потрібно змінити кожен елемент
// масиву наступним чином: якщо довжина рядочку менша за 6 - то привести рядок до
// нижнього регістру, в іншому випадку привести до верхнього регістру.
function changeCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 6) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr;
}
const array8 = ['Banana', 'CuCuMber', 'Rice', 'APPLE'];
//console.log(changeCase(array8));

// 9. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
// лише непарні числа.
function oddNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 > 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
const array9 = [1, 2, 3, 4, 5, 6, 0, 7];
//console.log(oddNumbers(array9));

//10. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
// число помножене на індекс, за яким воно знаходиться в масиві.
function multiplyByIndex(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}
const array10 = [2, 2, 2, 2, 2, 2];
//console.log(multiplyByIndex(array10));

// 11. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
// лише числа, які діляться на 3.
function filterDivisibleBy3(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
const array11 = [0, 2, 3, 6, 7, 9, 11];
//console.log(filterDivisibleBy3(array11));

//==================================================================================
//========================= Задачі середньої складності ============================
//==================================================================================

// 12. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
// де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
function getCommonElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i];
    if (arr2.includes(el) && !result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}
//console.log(getCommonElements(array10, array11));
//console.log(getCommonElements(array11, array10));

//13. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
// де будуть лише елементи масиву arr1 яких не має у масиві arr2.
function getDifferentElements(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i];
    if (!arr2.includes(el)) {
      result.push(el);
    }
  }
  return result;
}
const array12 = [`black`, `green`, `yellow`, `gray`, `blue`];
const array13 = [`black`, `pink`, `purple`, `green`];
//console.log(getDifferentElements(array13, array12));

//14. Напиши функцію яка приймає масив та знаходить мінімальний елемент.
function findMinElement(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}
const array14 = [5, 2, 0, 87, 12, -2, 5, 4];
//console.log(findMinElement(array14));

//======= нові знання відкривають коротший шлях =======
function findMinElement_2(arr) {
  return Math.min(...arr);
}
//console.log(findMinElement_2(array14));

//15. Напиши функцію, яка приймає масив та знаходить максимальний елемент.
function findMaxElement(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
//console.log(findMaxElement(array14));

//======= нові знання відкривають коротший шлях =======
function findMaxElement_2(arr) {
  return Math.max(...arr);
}
//console.log(findMaxElement_2(array14));

//16. Напиши функцію, яка приймає масив та повертає масив лише з тих елементів, які
//більші за середнє значення всіх елементів масиву.
function filterAboveAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sum / arr.length) {
      result.push(arr[i]);
    }
  }
  return result;
}
const array16 = [1, 9, 2, 8, 3, 7, 4, 6, 5, 10];
//console.log(filterAboveAverage(array16));

// 17. Напиши функцію, яка приймає масив та повертає масив лише з тих елементів,
// які більші за власний індекс.
function filterAboveIndex(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > i) {
      res.push(arr[i]);
    }
  }
  return res;
}
const array17 = [1, 1, 1, 5, 2, 9, 6, 0];
//console.log(filterAboveIndex(array17));

// 18. Напишіть функцію, яка приймає масив чисел. Функція повинна знайти
// мінімальний елемент та видалити його з масиву.
function removeMinElement(arr) {
  let min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(min);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }
  return arr;
}
const array18 = [4, -5, 0, -3, 4, -5, 8];
//console.log(removeMinElement(array18));

// 19. Напиши функцію яка приймає два параметри: start та end. Функція повинна
// повернути масив, де будуть числа з діапазону, але лише ті, у яких немає
// цифри 5. До прикладу, числа (51, 25, 15, 256) не підходять, бо містять символ
// "5" у собі.
function getArrayWithoutFive(start, end) {
  const res = [];
  for (let i = start; i <= end; i++) {
    const el = String(i);
    if (!el.includes(5)) {
      res.push(i);
    }
  }
  return res;
}
//console.log(getArrayWithoutFive(-6, 16));

//==================================================================================
//=============================== Складні задачі ===================================
//==================================================================================

// 20. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі
// парні числа переміщені в початок, а всі непарні - в кінець.
function sortEvenOdd(arr) {
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el % 2 === 0) {
      even.push(el);
    } else {
      odd.push(el);
    }
  }
  const res = [].concat(even, odd);
  return res;
}
const array20 = [1, 2, 3, 0, 4, 5, 6, 7, 8, 9];
//console.log(sortEvenOdd(array20));

function sortEvenOdd_2(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el % 2 === 0) {
      res.unshift(el);
    } else {
      res.push(el);
    }
  }
  return res;
}
//console.log(sortEvenOdd_2(array20));

/* let start, end;
const experiment = [];
for (let i = 0; i < 400000; i++) {
  const random = Math.floor(Math.random() * 1000);
  experiment.push(random);
}
start = Date.now();
sortEvenOdd(experiment);
end = Date.now();
console.log(end - start); // 13

start = Date.now();
sortEvenOdd_2(experiment);
end = Date.now();
console.log(end - start); //5710 */

//21. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
// елемент є сумою усіх попередніх елементів.
function cumulativeSumArray(arr) {
  const res = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    res.push(sum);
  }
  return res;
}
const array21 = [1, 1, 1, 1, 1, 1];
//console.log(cumulativeSumArray(array21));

//22. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
// лише унікальні числа.
function getUniqueElements(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!res.includes(element)) {
      res.push(element);
    }
  }
  return res;
}
const array22 = [1, 1, 2, 3, 4, 1, 2, 5, 3, 6];
//console.log(getUniqueElements(array22));

// 23. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
// дублювання елементів.
function getUniqueElements_23(arr1, arr2) {
  const array = [].concat(arr1, arr2);
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!res.includes(element)) {
      res.push(element);
    }
  }
  return res;
}
const array23 = [9, 8, 7, 6, 5];
//console.log(getUniqueElements_23(array22, array23));

//====== варіант з використанням попереднього доробку ======
function getUniqueElements_23_2(arr1, arr2) {
  const array = [].concat(arr1, arr2);
  return getUniqueElements(array);
}
//console.log(getUniqueElements_23_2(array22, array23));

//24. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
// елемент є середньоарифметичним всіх сусідніх елементів.
function neighborAverages(array) {
  // що робити з крайніми елементами? Наприклад, (1 + undefined) / 2 = NaN
  // але тоді масив вже не виключно числовий. Тож приймаю рішення:
  // надати крайнім елементам значення єдиного сусіда
  const result = [array[0]];
  for (let i = 1; i < array.length - 1; i++) {
    const element = (array[i - 1] + array[i + 1]) / 2;
    result.push(element);
  }
  const lastIndex = array.length - 1;
  result.push(array[lastIndex]);
  return result;
}
const array24 = [1, 2, 3, 4, 5, -4, 6, 10];
//console.log(neighborAverages(array24));

// 25. Напиши функцію, яка приймає массив чисел і повертає новий массив, де
// елементи відсортовані в порядку збільшення або зменшення.
function findMinElementIndex(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[result]) {
      result = i;
    }
  }
  return result;
}

function sortAsc(arr) {
  const toSort = [...arr];
  const result = [];
  while (toSort.length > 0) {
    const index = findMinElementIndex(toSort);
    result.push(toSort[index]);
    toSort.splice(index, 1);
  }
  return result;
}
const array25 = [6, 3, -4, 1, 2, -9, 8, 7, 7, 5];
//console.log(sortAsc(array25));

// 26. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
// елементів.
function findShortestElementIndex(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < arr[result].length) {
      result = i;
    }
  }
  return result;
}
function sortLengthAsc(arr) {
  const toSort = [...arr];
  arr.length = 0;
  while (toSort.length > 0) {
    const index = findShortestElementIndex(toSort);
    arr.push(toSort[index]);
    toSort.splice(index, 1);
  }
}
const array26 = [',', 'gfd', 'dfghfhh', '', 'sgsdgsdgsdg'];
sortLengthAsc(array26);
//console.log(array26);
