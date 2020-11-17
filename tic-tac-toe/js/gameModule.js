import container from './containerModule.js';
import display from './displayController.js';
import gameboard from './gameboardModule.js';
import { Player, RandomAI, UnbeatableAI } from './PlayerFactory.js';

const game = (() => {
    const players = [];

    const start = (random) => {
        players.push(Player('X'));
        random ? players.push(RandomAI('O')) : players.push(UnbeatableAI('O'));
        container.get().addEventListener('click', cellClicked, false)
    }

    const cellClicked = (e) => {
        const player = players[0];
        const marker = player.getMarker();
        const position = Number(e.target.getAttribute('data-cell'));
        const result = checkGameEnded(marker, position, 'You win!');
        if (result === undefined || result) {
            return;
        }

        AITurn();
    }

    const AITurn = () => {
        const AI = players[1];
        const marker = AI.getMarker();
        const position = AI.getMove(gameboard.getBoard());
        checkGameEnded(marker, position, 'The AI wins');
    }

    const checkGameEnded = (marker, position, result) => {
        if (!gameboard.mark(marker, position)) {
            return;
        }

        if (gameboard.checkWin(marker, position)) {
            end(result);
            return true;
        }

        if (gameboard.checkDraw()) {
            end('Draw');
            return true;
        }
        return false;
    }

    const end = (result) => {
        display.setResult(result);
        container.get().removeEventListener('click', cellClicked, false);
    }

    return { start };
})();

export default game;