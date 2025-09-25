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
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.length < 6) {
      result.push(el.toLowerCase());
    } else {
      result.push(el.toUpperCase());
    }
  }
  return result;
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
function multiplyIndex(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}
const array10 = [2, 2, 2, 2, 2, 2];
//console.log(multiplyIndex(array10));

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
