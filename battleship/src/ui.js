const UI = (() => {
  const rootID = 'battleship';
  const queryAffix = '.';

  const modalClass = 'Modal';
  const btnsAffix = '__Buttons';
  const btnAffix = '__Button';
  const errAffix = '__Error';

  const gridClass = 'Grid';

  const tileClass = 'Tile';
  const shipAffix = '__Ship';
  const hitAffix = '__Hit';
  const missAffix = '__Miss';
  const placeAffix = '__Place';
  const enemyAffix = '__Enemy';
  const sunkAffix = '__Sunk';

  const createGrid = (slot, w, h) => {
    const grid = document.createElement('div');

    grid.classList.add(gridClass);
    grid.setAttribute('data-player', slot);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const tile = document.createElement('div');
        tile.classList.add('Tile');
        if (slot !== 0) tile.classList.add(tileClass + enemyAffix);

        tile.setAttribute('data-x', x);
        tile.setAttribute('data-y', y);
        tile.setAttribute('style', `--xy: '${x}, ${y}'`);

        grid.appendChild(tile);
      }
    }

    return grid;
  };

  const getTile = (grid, x, y) => {
    const queryX = `[data-x="${x}"]`;
    const queryY = `[data-y="${y}"]`;
    return grid.querySelector(queryX + queryY);
  };

  const addTileClass = (grid, vec, className) => {
    const tile = getTile(grid, vec.x, vec.y);
    if (tile && !tile.classList.contains(className)) {
      tile.classList.add(className);
    }
  };

  const addTileListeners = (grid, evt, callback) => {
    const tiles = grid.querySelectorAll(queryAffix + tileClass);
    for (const tile of tiles) {
      const x = parseInt(tile.getAttribute('data-x'));
      const y = parseInt(tile.getAttribute('data-y'));
      tile.addEventListener(evt, () => callback(x, y), false);
    }
  };

  const clearPlacingTiles = (grid) => {
    const placingTiles = grid.querySelectorAll(
      queryAffix + tileClass + placeAffix
    );
    for (const tile of placingTiles) {
      tile.classList.remove(tileClass + placeAffix);
    }
  };

  // Ideally this function and the renderGame function below would be
  // refactored to only handle the DOM logic while game.js handles the game logic
  const renderPrep = (shipsArr, userBoard, onEnd) => {
    const root = document.getElementById(rootID);
    const container = document.createElement('div');
    const textContainer = document.createElement('div');
    const modal = document.createElement('div');
    const btnContainer = document.createElement('div');
    const rotateBtn = document.createElement('button');
    const submitBtn = document.createElement('button');
    const grid = createGrid(0, userBoard.getWidth(), userBoard.getHeight());
    let errElement = null;

    let currentIndex = 0;
    let isHorizontal = true;
    let size = shipsArr[currentIndex].size;

    const handleRotate = () => {
      isHorizontal = !isHorizontal;
    };

    const handleTileEnter = (x, y) => {
      for (let i = 0; i < size; i++) {
        const vec = isHorizontal ? { x: x + i, y } : { x, y: y + i };
        addTileClass(grid, vec, tileClass + placeAffix);
      }
    };

    const handleTileLeave = () => clearPlacingTiles(grid);

    const handleTileClick = (x, y) => {
      const vecs = [];
      for (let i = 0; i < size; i++) {
        const vec = isHorizontal ? { x: x + i, y } : { x, y: y + i };
        vecs.push(vec);
      }

      if (userBoard.placeShip(vecs)) {
        for (const vec of vecs) {
          addTileClass(grid, vec, tileClass + shipAffix);
        }

        if (currentIndex < shipsArr.length - 1) {
          currentIndex++;
          size = shipsArr[currentIndex].size;
        } else {
          size = 0;
        }
      }
    };

    const handleSubmitPlacements = () => {
      const isFinishedPlacing = userBoard.getShips().length >= shipsArr.length;
      if (isFinishedPlacing) {
        root.innerHTML = '';
        onEnd();
      } else {
        if (errElement === null) {
          errElement = document.createElement('div');
          errElement.classList.add(modalClass + errAffix, 'Center');
          errElement.textContent =
            'Please add the remaining ships to the board.';
          modal.appendChild(errElement);
        }
      }
    };

    rotateBtn.textContent = 'Rotate';
    submitBtn.textContent = 'Start Game';
    textContainer.textContent = 'Place your ships';

    textContainer.classList.add('Subtitle', 'Center');
    container.classList.add('Container');
    modal.classList.add(modalClass);
    btnContainer.classList.add(modalClass + btnsAffix);
    rotateBtn.classList.add(modalClass + btnAffix);
    submitBtn.classList.add(modalClass + btnAffix);

    rotateBtn.addEventListener('click', handleRotate, false);
    submitBtn.addEventListener('click', handleSubmitPlacements, false);
    addTileListeners(grid, 'mouseover', handleTileEnter);
    addTileListeners(grid, 'mouseleave', handleTileLeave);
    addTileListeners(grid, 'click', handleTileClick);

    btnContainer.appendChild(rotateBtn);
    btnContainer.appendChild(submitBtn);
    modal.appendChild(textContainer);
    modal.appendChild(grid);
    modal.appendChild(btnContainer);
    container.appendChild(modal);
    root.appendChild(container);
  };

  const renderGame = (userPlayer, AIPlayer, userBoard, AIBoard, onCheckEnd) => {
    const root = document.getElementById(rootID);
    const gameContainer = document.createElement('div');
    const userContainer = document.createElement('div');
    const userNameText = document.createElement('div');
    const AINameText = document.createElement('div');
    const AIContainer = document.createElement('div');
    const userGrid = createGrid(0, userBoard.getWidth(), userBoard.getHeight());
    const AIGrid = createGrid(1, AIBoard.getWidth(), AIBoard.getHeight());

    gameContainer.classList.add('Container');
    userNameText.classList.add('Center');
    AINameText.classList.add('Center');

    userNameText.textContent = userPlayer.getData().name;
    AINameText.textContent = AIPlayer.getData().name;

    const ships = userBoard.getShips();
    for (const ship of ships) {
      const vecs = ship.getVecs();
      for (const vec of vecs) {
        addTileClass(userGrid, vec, tileClass + shipAffix);
      }
    }

    const handleTileAttack = (x, y) => {
      const userAttack = userPlayer.attackBoard(AIBoard, x, y);
      if (userAttack !== null) {
        addTileClass(
          AIGrid,
          userAttack.vec,
          userAttack.hit ? tileClass + hitAffix : tileClass + missAffix
        );

        for (const ship of AIBoard.getShips()) {
          if (ship.isSunk()) {
            const vecs = ship.getVecs();
            for (const vec of vecs) {
              addTileClass(AIGrid, vec, tileClass + sunkAffix);
            }
          }
        }

        const AIRetaliate = AIPlayer.AIAttack(userBoard);
        if (AIRetaliate !== null) {
          addTileClass(
            userGrid,
            AIRetaliate.vec,
            AIRetaliate.hit ? tileClass + hitAffix : tileClass + missAffix
          );

          for (const ship of userBoard.getShips()) {
            if (ship.isSunk()) {
              const vecs = ship.getVecs();
              for (const vec of vecs) {
                addTileClass(userGrid, vec, tileClass + sunkAffix);
              }
            }
          }
        }

        onCheckEnd();
      }
    };

    addTileListeners(AIGrid, 'click', handleTileAttack);
    userContainer.appendChild(userGrid);
    userContainer.appendChild(userNameText);
    AIContainer.appendChild(AIGrid);
    AIContainer.appendChild(AINameText);
    gameContainer.appendChild(userContainer);
    gameContainer.appendChild(AIContainer);
    root.appendChild(gameContainer);
  };

  const renderEnd = (winner) => {
    const root = document.getElementById(rootID);
    const textContainer = document.createElement('div');

    textContainer.classList.add('Subtitle', 'Center');
    textContainer.textContent = `${winner} Won!`;

    root.appendChild(textContainer);
  };

  return {
    renderPrep,
    renderGame,
    renderEnd,
  };
})();

export default UI;
