import { gamePhases, PlayerShipsStock, removeAllEventListeners, ShipsMap, shipsNames } from "./ulils.js";

/* Values */

let gamePhase;

/* Placement phase values */

let currentShip; // KIND OF SHIP (NOT LENGTH)
const playerField = new Array(100);
const playerShipsStock = PlayerShipsStock;
let isPlaceShipProcess = false;
let shipTail;
let currentShipDirection;
let emptyShips = 0; // when all ships of the same type are displayed, this counter is added

/* HTML Objects */

const gameStartBtn = document.getElementById('btn_start');
const annonceImg = document.querySelector('.ann_img');
const annonceContent = document.querySelector('.ann_content');
const playerTable = document.querySelector('.gametable');
const gameStats = document.querySelector('.gamestats_left');
const shipsItems = gameStats.querySelectorAll('.gamestats__item');
const shipsRestValues = gameStats.querySelectorAll('.ship_val');

/* Game Logic */

gameStartBtn.addEventListener('click', () => {
  gamePhase = gamePhases.Prepare;
  annonceContent.innerHTML = 'Placement Phase';
  PlacementPhaseMode();
});

const PlacementPhaseMode = () => {
  applyPlacementPhaseModeStyles();
  currentShip = shipsNames.destroyer;
  setActiveShip();
};

const setActiveShip = () => {
  annonceImg.style.backgroundImage = 'url(/src/seabattle/assets/svg/prepare.svg)';
  const gameStat = document.querySelector('.gamestats_left');

  // set active ship
  shipsItems[currentShip - 1].classList.add('active-ship');

  handleShipChose(shipsItems);
}

const handleShipChose = (items) => {
  items.forEach(element => {
    element.classList.add('pointer_cursor');
    element.addEventListener('click', (event) => {
      const chosenShip = event.target.parentNode;
      if (chosenShip.classList.contains('gamestats__item')) {
        clearChosenShipsStyle(items);
        const shipDiv = event.srcElement.querySelector('.gamestats__item');
        chosenShip.classList.add('active-ship');
        const chosenShipVal = chosenShip.querySelector('.ship_val').textContent;
        currentShip = Number(chosenShipVal);
        console.log('now choose kind of ship: ', currentShip);
      }
    });
  });
};

const clearChosenShipsStyle = (items) => {
  items.forEach(element => {
    element.classList.remove('active-ship');
  });
};

const applyPlacementPhaseModeStyles = () => {
  const tableCells = playerTable.querySelectorAll('td');
  tableCells.forEach(cell => {

    // apply hover styles
    cell.addEventListener("mouseenter", function () {
      cell.classList.add('hovered_cell');
    });

    // remove hover style
    cell.addEventListener("mouseleave", function () {
      cell.classList.remove('hovered_cell')
    });

    cell.addEventListener("click", function () {
      setShipProcess(cell);
    });

  });
};

const setShipProcess = (cell) => {
  const currentCellVal = Number(cell.id.replace('l', ''));
  const currentShipLength = ShipsMap[currentShip];


  if (checkPossibleToPlace(currentCellVal, currentShipLength)) {
    playerField[currentCellVal - 1] = 1;
    cell.classList.add('ship');
    if (!checkRestOfShips()) {

      switchCurrentShip();
      if (emptyShips === 4) {
        // next Phase
        alert('new phase');
      }
    }
  } else {
    playerTable.classList.add('error');

    setTimeout(function () {
      playerTable.classList.remove("error");
    }, 500);

  }

}

const checkPossibleToPlace = (cellToCheck, restLength) => {
  if (isPlaceShipProcess) {
    // TO DO: LOGIC FOR 2, 3, 4
    if (canPlaceShip(shipTail, cellToCheck, restLength)) {
      handlePlacedShip(restLength);
      drawMissingPart(shipTail, cellToCheck, restLength);
      isPlaceShipProcess = false;
      return true;
    }

    if (restLength === 1) {
      console.log('finish cause odnopalubnik');
      isPlaceShipProcess = false;
    }
  } else {
    console.log('here');
    if (getAmountOfSurroundsShips(cellToCheck) > 0) return false;

    if (restLength === 1) {
      isPlaceShipProcess = false;
      if (!handlePlacedShip(1)) return false;
      console.log(playerShipsStock);
    } else {
      isPlaceShipProcess = true;
      shipTail = cellToCheck;
    }
    return true;
  }
}

const getAmountOfSurroundsShips = (cell) => {
  let directions = [-11, -10, -9, -1, 1, 9, 10, 11];


  let count = 0;

  for (const dir of directions) {
    const neighborCell = cell - 1 + dir;
    console.log('dir is: ', cell);

    if (neighborCell >= 0 && neighborCell < playerField.length) {
      if ([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].includes(cell - 1) && [-11, -1, 9].includes(dir)) continue;
      if ([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].includes(cell - 1) && [-9, 1, 11].includes(dir)) continue;
      console.log('checking for cell: ', cell - 1 + dir);
      if (playerField[neighborCell] === 1) {
        console.log('sosed na kletke: ', neighborCell);
        count++;
      }
    }
  }

  console.log('neighbors: ', count);
  return count;
}

const handlePlacedShip = (shipSize) => {

  if (playerShipsStock[shipSize]) {
    playerShipsStock[shipSize]--;
    shipsRestValues[4 - shipSize].textContent -= 1;
    return true;
  } else {
    return false;
  }
}

const canPlaceShip = (startIndex, endIndex, shipLength) => {
  console.log('am');
  if (startIndex < 0 || endIndex > playerField.length) {
    return false;
  }
  console.log('nyam');

  if ((Math.abs(endIndex - startIndex) !== shipLength - 1) && (Math.abs(endIndex - startIndex) !== (10 * (shipLength - 1)))) {
    return false;
  }

  if (Math.abs(endIndex - startIndex) !== shipLength - 1) {
    currentShipDirection = 'vertical';
  } else {
    currentShipDirection = 'horizontal';
  }

  if (shipLength !== 2) {
    if (getAmountOfSurroundsShips(endIndex)) {
      return false;
    }
  } else {
    if (getAmountOfSurroundsShips(endIndex) > 1) {
      return false;
    }
  }

  console.log('OK! direction: ', currentShipDirection);
  return true;
}

const drawMissingPart = (shipStart, shipEnd, shipLength) => {
  const step = currentShipDirection === 'vertical' ? 10 : 1;
  const dir = shipStart > shipEnd ? -1 : 1;

  for (let i = step; i < shipLength * step; i += step) {
    playerField[shipStart + (i * dir) - 1] = 1;
    console.log('add ', shipStart + (i * dir) - 1);
    document.querySelector(`#l${shipStart + (i * dir)}`).classList.add('ship');
    console.log(document.querySelector(`#l${shipStart + (i * dir)}`));
  }
}

const checkRestOfShips = () => {
  const rest = playerShipsStock[5 - currentShip];
  if (!rest) emptyShips++;
  return rest;
};

const switchCurrentShip = () => {

  console.log(shipsItems);

  let shipToCurrent = 1;

  // remove
  shipsRestValues[0];
  console.log('opana', shipsRestValues[currentShip - 1]);
  shipsRestValues[currentShip - 1].parentNode.classList.remove('pointer_cursor', 'active-ship')
  removeAllEventListeners(shipsRestValues[currentShip - 1].parentNode);

  // add
  for (const val of shipsRestValues) {
    if (Number(val.textContent)) {
      clearChosenShipsStyle(shipsItems);
      val.parentNode.classList.add('active-ship');
      currentShip = shipToCurrent;
      break;
    }
    shipToCurrent++;
  }
}

const BattlePhaseMode = () => {

}


// OTLADKA
const td = playerTable.querySelectorAll('td');
td.forEach((elem, idx) => {
  elem.textContent = idx;
});

const clickEvent = new MouseEvent("click", {
  bubbles: true, // Событие всплывает вверх по DOM
  cancelable: true, // Можно отменить событие
  view: window, // Окно, в котором происходит событие (обычно window)
});