import Types from '../data/types';
import Ship from './Ship';

const Gameboard = () => {
  const ships = [];
  const missedAttacks = [];

  const isPlaceable = (vecs) => {
    for (const vec of vecs) {
      for (const otherShip of ships) {
        const isColliding = otherShip.getVecs().some((otherShipVec) => {
          return vec.x === otherShipVec.x && vec.y === otherShipVec.y;
        });

        if (isColliding) return false;
      }

      if (vec.x >= 8 || vec.x < 0) return false;
      if (vec.y >= 8 || vec.y < 0) return false;
    }

    return true;
  };

  const getShips = () => {
    return ships;
  };

  const placeShip = (vecs) => {
    if (isPlaceable(vecs)) {
      ships.push(Ship(vecs));
      return true;
    }
    return false;
  };

  // this function is coded pretty ugly and could be significantly more performant
  // but it seems to run consistently well regardless
  const placeRandomizedShips = () => {
    if (ships.length == 0) {
      for (const type of Types) {
        let isPlaced = false;
        while (!isPlaced) {
          const vecs = [];
          const isHorizontal = Math.random() < 0.5;

          for (let i = 0; i < type.size; i++) {
            if (i === 0) {
              vecs.push({
                x: Math.floor(Math.random() * 8),
                y: Math.floor(Math.random() * 8),
              });
            } else {
              if (isHorizontal) {
                vecs.push({ x: vecs[0].x + i, y: vecs[0].y });
              } else {
                vecs.push({ x: vecs[0].x, y: vecs[0].y + i });
              }
            }
          }

          isPlaced = placeShip(vecs);
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
    placeShip,
    placeRandomizedShips,
    receiveAttack,
    isShipsSunk,
  };
};

export default Gameboard;
