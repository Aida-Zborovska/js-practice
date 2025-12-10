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

// console.log(findUniqueToy4('AcbbCafGG'));

// ========================= Challenge 9: the Reno robot aspirator =========================

const board = `
.....
.*#.*
.@...
.....
`;

// console.log(moveReno(board, 'D')); // ➞ 'fail' -> it moves but doesn’t pick anything up
// console.log(moveReno(board, 'U')); // ➞ 'success' -> it picks something up (*) just above
// console.log(moveReno(board, 'RU')); // ➞ 'crash' -> it crashes into an obstacle (#)
// console.log(moveReno(board, 'RRRUU')); // ➞ 'success' -> it picks something up (*)
// console.log(moveReno(board, 'DD')); // ➞ 'crash' -> it crashes into the bottom of the board
// console.log(moveReno(board, 'UUU')); // ➞ 'success' -> it picks something up from the floor (*) and then crashes at the top
// console.log(moveReno(board, 'RR')); // ➞ 'fail' -> it moves but doesn’t pick anything up

function moveReno(board, moves) {
  const B = board.slice(1, board.length - 1).split('\n');
  const bottomEdgeRow = B.length - 1;
  let deer = { x: 0, y: 0 };

  for (let y = 0; y <= bottomEdgeRow; y++) {
    const i = B[y].indexOf('@');
    if (i !== -1) {
      deer = { x: i, y };
      break;
    }
  }

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        deer.y -= 1;
        break;
      case 'D':
        deer.y += 1;
        break;
      case 'R':
        deer.x += 1;
        break;
      case 'L':
        deer.x -= 1;
        break;
    }
    const deerY = B[deer.y];
    const cell = deerY && deerY[deer.x];
    if (cell === '*') {
      return 'success';
    }
    if (cell === '#' || !cell) {
      return 'crash';
    }
  }

  return 'fail';
}

// ========================= Challenge 10: Depth of Christmas Magic =========================

function maxDepth(s) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '[' ? counter++ : counter--;
    if (counter < 0) {
      return -1;
    }
    if (counter > max) {
      max = counter;
    }
  }
  if (counter !== 0) {
    return -1;
  }
  return max;
}

// console.log(maxDepth('[]')); // -> 1
// console.log(maxDepth('[[]]')); // -> 2
// console.log(maxDepth('[][]')); // -> 1
// console.log(maxDepth('[[][]]')); // -> 2
// console.log(maxDepth('[[[]]]')); // -> 3
// console.log(maxDepth('[][[]][]')); // -> 2

// console.log(maxDepth('][')); // -> -1 (closes before opening)
// console.log(maxDepth('[[[')); // -> -1 (missing closing brackets)
// console.log(maxDepth('[]]]')); // -> -1 (extra closing brackets)
// console.log(maxDepth('[][][')); // -> -1 (one remains unclosed)
