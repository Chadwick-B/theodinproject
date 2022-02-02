const Player = (name) => {
  const data = {
    name: name,
    history: [],
    lastAttack: { hit: false, vec: { x: 0, y: 0 } },
  };

  const getAdjacentVec = (vec) => {
    return {
      x: vec.x + Math.floor(Math.random() * 2 - 1),
      y: vec.y + Math.floor(Math.random() * 2 - 1),
    };
  };

  const getRandomVec = () => {
    return Math.floor(Math.random() * 7);
  };

  const getData = () => {
    return data;
  };

  const AIAttack = (gameboard) => {
    if (data.history.length < 64) {
      if (data.lastAttack.hit) {
        let attackVec = getAdjacentVec(data.lastAttack.vec);
        while (!attackBoard(gameboard, attackVec.x, attackVec.y)) {
          attackVec = getAdjacentVec(attackVec);
        }
      } else {
        let attackVec = getRandomVec();
        while (!attackBoard(gameboard, attackVec.x, attackVec.y)) {
          attackVec = getAdjacentVec(attackVec);
        }
      }

      return true;
    }

    return false;
  };

  const attackBoard = (gameboard, x, y) => {
    const isAlreadyAttacked = data.history.some((item) => {
      return x === item.vec.x && y === item.vec.y;
    });

    if (!isAlreadyAttacked) {
      const attack = gameboard.receiveAttack(x, y)
        ? { hit: true, vec: { x, y } }
        : { hit: false, vec: { x, y } };
      data.lastAttack = attack;
      data.history.push(attack);
      return true;
    }

    return false;
  };

  return { getData, AIAttack, attackBoard };
};

export default Player;
