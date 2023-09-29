export const gamePhases = {
  Prepare: Symbol('prepare'),
  Battle: Symbol('battle'),
}

export const shipsNames = {
  destroyer: 1,
  submarine: 2,
  cruiser: 3,
  battleship: 4,
}

export const PlayerShipsStock = {
  1: 4,
  2: 3,
  3: 2,
  4: 1,
};

export const ShipsMap = {
  1: 4,
  2: 3,
  3: 2,
  4: 1,
};

export function removeAllEventListeners(element) {
  const clonedElement = element.cloneNode(true);
  element.parentNode.replaceChild(clonedElement, element);
}