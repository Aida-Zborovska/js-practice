// ========================= Challenge 8: find the unique toy =========================

function findUniqueToy(toy) {
  const checked = [];
  for (let i = 0; i < toy.length; i++) {
    const rest = toy.slice(i + 1).toLowerCase();
    const letter = toy[i].toLowerCase();
    if (rest.includes(letter)) {
      checked.push(letter);
    }
    if (!rest.includes(letter) && !checked.includes(letter)) {
      return toy[i];
    }
  }
  return '';
}

function findUniqueToy2(toy) {
  const string = toy.toLowerCase();
  const counter = new Map();
  for (const letter of string) {
    counter.set(letter, counter.has(letter));
  }
  for (let i = 0; i < string.length; i++) {
    if (!counter.get(string[i])) {
      return toy[i];
    }
  }
  return '';
}

function findUniqueToy3(toy) {
  const string = toy.toLowerCase();
  const seen = new Set();
  const duplicate = new Set();
  for (const letter of string) {
    if (seen.has(letter)) {
      duplicate.add(letter);
    } else {
      seen.add(letter);
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (!duplicate.has(string[i])) {
      return toy[i];
    }
  }

  return '';
}

function findUniqueToy4(toy) {
  const string = Array.from(toy.toLowerCase());
  const isUnique = letter =>
    string.indexOf(letter) === string.lastIndexOf(letter);
  const index = string.findIndex(isUnique);
  return index >= 0 ? toy[index] : '';
}

console.log(findUniqueToy4('AcbbCafGG'));
