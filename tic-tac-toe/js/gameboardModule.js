import display from './displayController.js';

const gameboard = (() => {
    const board = ['','','','','','','','',''];

    const getBoard = () => board;
    const mark = (marker, position) => {
        if (typeof marker !== 'string') {
            return;
        }

        if (board[position] === '') {
            board[position] = marker;
            display.setCellText(marker, position);
            return true;
        }
        return false;
    }

    const checkWin = (marker, position) => {
        const combinations = [
            getColumn(position),
            getRow(position),
            getDownwardDiagonal(position),
            getUpwardDiagonal(position)
        ];

        for (const combination of combinations) {
            if (combination === undefined) {
                continue;
            }
            if (combinationWins(marker, combination)) {
                return true;
            }
        }
        return false;
    }

    const getColumn = (position) => {
        const top = position % 3;
        return [top, top + 3, top + 6];
    }

    const getRow = (position) => {
        const left = position - (position % 3);
        return [left, left + 1, left + 2];
    }

    const getDownwardDiagonal = (position) => {
        const diag = [0, 4, 8];
        if (diag.includes(position)) {
            return diag;
        }
    }

    const getUpwardDiagonal = (position) => {
        const diag = [2, 4, 6];
        if (diag.includes(position)) {
            return diag;
        }
    }

    const checkDraw = () => {
        return !board.includes('');
    }

    const combinationWins = (marker, combination) => {
        for (let i=0; i<combination.length; i++) {
            const ind = combination[i];
            if (board[ind] === undefined || board[ind] !== marker) {
                return false;
            } 
        }
        return true;
    }

    return { getBoard, mark, checkWin, checkDraw };
})();

export default gameboard;