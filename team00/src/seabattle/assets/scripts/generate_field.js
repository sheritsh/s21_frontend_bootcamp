import { flattenArray } from "./ulils.js";

export function generateRandomField(rows = 10, cols = 10) {
  const field = [];

  // create empty field
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    field.push(row);
  }

  function addShip(size) {
    while (true) {
      const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);

      if (canPlaceShip(field, row, col, size, orientation)) {
        if (orientation === "horizontal") {
          for (let i = 0; i < size; i++) {
            field[row][col + i] = 1;
          }
        } else {
          for (let i = 0; i < size; i++) {
            field[row + i][col] = 1;
          }
        }
        break;
      }
    }
  }

  addShip(4);
  addShip(3);
  addShip(3);
  addShip(2);
  addShip(2);
  addShip(2);
  addShip(1);
  addShip(1);
  addShip(1);
  addShip(1);

  return flattenArray(field);
}

function canPlaceShip(field, row, col, size, orientation) {
  const rows = field.length;
  const cols = field[0].length;

  if (
    orientation === "horizontal" &&
    (col + size > cols || row < 0 || row >= rows)
  ) {
    return false;
  }
  if (
    orientation === "vertical" &&
    (row + size > rows || col < 0 || col >= cols)
  ) {
    return false;
  }

  for (let i = -1; i <= size; i++) {
    for (let j = -1; j <= 1; j++) {
      const checkRow = row + i;
      const checkCol = col + j;

      if (
        checkRow >= 0 &&
        checkRow < rows &&
        checkCol >= 0 &&
        checkCol < cols &&
        field[checkRow][checkCol] === 1
      ) {
        return false;
      }
    }
  }

  return true;
}
