import Gameboard from './factories/Gameboard';
import Player from './factories/Player';
import Types from './data/types';
import UI from './ui';

const game = (() => {
  const user = Player('User');
  const AI = Player('Bot');

  const userBoard = Gameboard();
  const AIBoard = Gameboard();

  // maybe structure stuff like this...
  const StartPregame = () => {};
  const SetPlayerTurn = () => {};

  /* Test stuff */
  const targetContainer = document.getElementById('battleship');
  const modal = UI.createModal();
  const placementGrid = UI.createGrid(0);
  let isHorizontal = true;
  let size = Types[0].size;

  const handleTileEnter = (x, y) => {
    const vecs = [];
    for (let i = 0; i < size; i++) {
      const vec = isHorizontal ? { x: x + i, y } : { x, y: y + i };
      vecs.push(vec);
    }

    UI.setPlacingTiles(placementGrid, vecs);
  };

  const handleTileLeave = () => UI.clearPlacingTiles(placementGrid);

  const handleTileClick = (x, y) => {
    const vecs = [];
    for (let i = 0; i < size; i++) {
      const vec = isHorizontal ? { x: x + i, y } : { x, y: y + i };
      vecs.push(vec);
    }

    if (userBoard.placeShip(vecs)) UI.setShipTiles(placementGrid, vecs);
  };

  const handleSubmitPlacements = () => {
    const isFinishedPlacing = userBoard.getShips().length >= Types.length;
    // could try adding a removeTileListeners(grid, evt, callback) function to UI
    // then removing them all before setting innerHTML to ''; ?? but might be fine
    // might also have to delete
    if (isFinishedPlacing) {
      //delete placementGrid;
      //delete modal;
      targetContainer.innerHTML = '';
    } else {
      // show error under button
    }
  };

  UI.addTileListeners(placementGrid, 'mouseenter', handleTileEnter);
  UI.addTileListeners(placementGrid, 'mouseleave', handleTileLeave);
  UI.addTileListeners(placementGrid, 'click', handleTileClick);

  // add a button to submit placed ships, attach button to handleSubmitPlacements
  modal.appendChild(placementGrid);
  targetContainer.appendChild(modal);
})();

export default game;
