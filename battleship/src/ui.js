const UI = (() => {
  const queryAffix = '.';

  const gridClass = 'Grid';
  const hiddenAffix = '__Hidden';

  const tileClass = 'Tile';
  const shipAffix = '__Ship';
  const hitAffix = '__Hit';
  const missAffix = '__Miss';
  const placeAffix = '__Place';

  const getTile = (grid, x, y) => {
    const queryX = `[data-x="${x}"]`;
    const queryY = `[data-y="${y}"]`;
    return grid.querySelector(queryX + queryY);
  };

  const createModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('Modal');

    return modal;
  };

  const createGrid = (slot) => {
    const grid = document.createElement('div');
    grid.classList.add(gridClass);
    if (slot !== 0) grid.classList.add(gridClass + hiddenAffix);

    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const tile = document.createElement('div');
        tile.classList.add('Tile');
        tile.setAttribute('data-x', x);
        tile.setAttribute('data-y', y);
        tile.setAttribute('data-player', slot);
        grid.appendChild(tile);
      }
    }

    return grid;
  };

  const setShipTiles = (grid, vecs) => {
    for (const vec of vecs) {
      const tile = getTile(grid, vec.x, vec.y);
      if (tile) tile.classList.add(tileClass + shipAffix);
    }
  };

  const setAttackTile = (grid, vec, isHit) => {
    const tile = getTile(grid, vec.x, vec.y);
    if (tile) tile.classList.add(tileClass + isHit ? hitAffix : missAffix);
  };

  const setPlacingTiles = (grid, vecs) => {
    for (const vec of vecs) {
      const tile = getTile(grid, vec.x, vec.y);
      if (tile) tile.classList.add(tileClass + placeAffix);
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

  const addTileListeners = (grid, evt, callback) => {
    const tiles = grid.querySelectorAll(queryAffix + tileClass);
    for (const tile of tiles) {
      const x = parseInt(tile.getAttribute('data-x'));
      const y = parseInt(tile.getAttribute('data-y'));
      tile.addEventListener(evt, () => callback(x, y), false);
    }
  };

  return {
    createModal,
    createGrid,
    setPlacingTiles,
    setShipTiles,
    clearPlacingTiles,
    addTileListeners,
  };
})();

export default UI;
