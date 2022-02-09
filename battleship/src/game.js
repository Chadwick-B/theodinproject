import Gameboard from './factories/Gameboard';
import Player from './factories/Player';
import Types from './data/types';
import UI from './ui';

const game = (() => {
  const user = Player('Player');
  const AI = Player('AI');

  const userBoard = Gameboard(10, 10);
  const AIBoard = Gameboard(10, 10);

  AIBoard.placeRandomizedShips();
  let winner = '';
  let lastState = -1;
  let state = 0;

  const handleStartGame = () => (state = 1);
  const handleCheckEnd = () => {
    if (AIBoard.isShipsSunk()) {
      winner = user.getData().name;
      state = 2;
    } else if (userBoard.isShipsSunk()) {
      winner = AI.getData().name;
      state = 2;
    }
  };

  const step = () => {
    if (lastState !== state) {
      switch (state) {
        case 0:
          UI.renderPrep(Types, userBoard, handleStartGame);
          break;
        case 1:
          UI.renderGame(user, AI, userBoard, AIBoard, handleCheckEnd);
          break;
        case 2:
          UI.renderEnd(winner);
          break;
        default:
          break;
      }

      lastState = state;
    }

    window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
})();

export default game;
