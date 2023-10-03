//  В этой задаче нужно будет написать алгоритм поиска, который скажет, найти входное
// слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

const searchSubString = (puzzle, word) => {
  const numRows = puzzle.length;
  const numCols = puzzle[0].length;

  // Поиск по горизонтали
  for (let row = 0; row < numRows; row += 1) {
    const rowWord = puzzle[row].join('');
    if (rowWord.includes(word) || rowWord.split('').reverse().join('').includes(word)) {
      return true;
    }
  }

  // Поиск по вертикали
  for (let col = 0; col < numCols; col += 1) {
    const colWord = puzzle.map((row) => row[col]).join('');
    if (colWord.includes(word) || colWord.split('').reverse().join('').includes(word)) {
      return true;
    }
  }

  // Поиск по диагонали (слева вниз)
  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      let diagonalWord = '';
      for (let i = 0; row + i < numRows && col + i < numCols; i += 1) {
        diagonalWord += puzzle[row + i][col + i];
      }
      if (diagonalWord.includes(word) || diagonalWord.split('').reverse().join('').includes(word)) {
        return true;
      }
    }
  }

  // Поиск по диагонали (слева вверх)
  for (let row = numRows - 1; row >= 0; row -= 1) {
    for (let col = 0; col < numCols; col += 1) {
      let diagonalWord = '';
      for (let i = 0; row - i >= 0 && col + i < numCols; i += 1) {
        diagonalWord += puzzle[row - i][col + i];
      }
      if (diagonalWord.includes(word) || diagonalWord.split('').reverse().join('').includes(word)) {
        return true;
      }
    }
  }

  return false;
};

const examplePuzzle = [
  ['b', 'l', 'g', 'o', 'l', 'd', 's'],
  ['x', 'k', 'q', 'w', 'i', 'j', 'p'],
  ['a', 'n', 'w', 'k', 'k', 'p', 'n'],
  ['h', 'e', 'e', 'e', 'k', 'i', 'l'],
  ['q', 'e', 'k', 'a', 'y', 'q', 'a'],
  ['h', 'u', 'h', 'a', 'e', 'a', 'u'],
  ['k', 'q', 'j', 'c', 'c', 'm', 'r'],
];

console.log(searchSubString(examplePuzzle, 'like')); // true
console.log(searchSubString(examplePuzzle, 'gold')); // true
console.log(searchSubString(examplePuzzle, 'queen')); // true
console.log(searchSubString(examplePuzzle, 'cake')); // true
