import Types from '../data/types';
import Ship from './Ship';

const Gameboard = (w, h) => {
  const ships = [];
  const missedAttacks = [];

  const getShips = () => {
    return ships;
  };

  const getWidth = () => {
    return w;
  };

  const getHeight = () => {
    return h;
  };

  const isPlaceable = (vecs) => {
    for (const vec of vecs) {
      for (const otherShip of ships) {
        const isColliding = otherShip.getVecs().some((otherShipVec) => {
          return vec.x === otherShipVec.x && vec.y === otherShipVec.y;
        });

        if (isColliding) return false;
      }

      if (vec.x > w - 1 || vec.x < 0) return false;
      if (vec.y > h - 1 || vec.y < 0) return false;
    }

    return true;
  };

  const placeShip = (vecs) => {
    if (isPlaceable(vecs)) {
      ships.push(Ship(vecs));
      return true;
    }
    return false;
  };

  // Containing all AI logic to a single function within a generalized player/nonplayer board factory is bad
  // Would be better to refactor this into a class, then extend shared functions to separated Player / AI board classes
  // Maybe make this function just place one randomized ship
  const placeRandomizedShips = () => {
    const amountToPlace = Types.length - getShips().length;
    const possibleVecs = [];

    if (amountToPlace > 0) {
      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          possibleVecs.push({ x: x, y: y });
        }
      }

      for (let i = amountToPlace - 1; i >= 0; i--) {
        const currentShip = Types[i];

        for (let j = 0; j < possibleVecs.length; j++) {
          const vVecs = [];
          const hVecs = [];

          const index = Math.floor(Math.random() * possibleVecs.length);
          const vec = possibleVecs.splice(index, 1)[0];
          const preferHorizontal = Math.random() < 0.5;

          for (let k = 0; k < currentShip.size; k++) {
            hVecs.push({ x: vec.x + k, y: vec.y });
            vVecs.push({ x: vec.x, y: vec.y + k });
          }

          if (preferHorizontal) {
            if (placeShip(hVecs)) break;
            if (placeShip(vVecs)) break;
          } else {
            if (placeShip(vVecs)) break;
            if (placeShip(hVecs)) break;
          }
        }
      }
    }
  };

  const receiveAttack = (x, y) => {
    for (const ship of ships) {
      if (ship.hit(x, y)) return true;
    }

    missedAttacks.push({ x: x, y: y });
    return false;
  };

  const isShipsSunk = () => {
    for (const ship of ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  };

  return {
    getShips,
    getWidth,
    getHeight,
    placeShip,
    placeRandomizedShips,
    receiveAttack,
    isShipsSunk,
  };
};

export default Gameboard;
