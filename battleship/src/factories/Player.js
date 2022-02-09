const Player = (name) => {
  const data = {
    name: name,
    history: [],
    lastAttack: { hit: false, vec: { x: 0, y: 0 } },
  };

  const getAdjacentVecs = (vec) => {
    return [
      {
        x: vec.x + 1,
        y: vec.y,
      },
      {
        x: vec.x - 1,
        y: vec.y,
      },
      {
        x: vec.x,
        y: vec.y + 1,
      },
      {
        x: vec.x,
        y: vec.y - 1,
      },
    ];
  };

  const getData = () => {
    return data;
  };

  // Containing all AI logic to a single function within a generalized player/nonplayer factory is bad
  // Would be better to refactor this into a class, then extend shared functions to separated Player / AI classes
  const AIAttack = (gameboard) => {
    const w = gameboard.getWidth();
    const h = gameboard.getHeight();
    const size = w * h;

    if (data.history.length < size) {
      const adjacentVecs = data.lastAttack.hit
        ? getAdjacentVecs(data.lastAttack.vec)
        : [];
      for (const vec of adjacentVecs) {
        const attack = attackBoard(gameboard, vec.x, vec.y);
        if (attack !== null) return attack;
      }

      const possibleVecs = [];
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          possibleVecs.push({ x, y });
        }
      }

      while (possibleVecs.length > 0) {
        const index = Math.floor(Math.random() * possibleVecs.length);
        const vec = possibleVecs.splice(index, 1)[0];
        const attack = attackBoard(gameboard, vec.x, vec.y);
        if (attack !== null) return attack;
      }
    }

    return null;
  };

  const attackBoard = (gameboard, x, y) => {
    const w = gameboard.getWidth();
    const h = gameboard.getHeight();

    if (x > w - 1 || x < 0) return null;
    if (y > h - 1 || y < 0) return null;

    const isAlreadyAttacked = data.history.some((item) => {
      return x === item.vec.x && y === item.vec.y;
    });

    if (!isAlreadyAttacked) {
      const attack = { hit: gameboard.receiveAttack(x, y), vec: { x, y } };
      data.lastAttack = attack;
      data.history.push(attack);
      return attack;
    }

    return null;
  };

  return { getData, AIAttack, attackBoard };
};

export default Player;
