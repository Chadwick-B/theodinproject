export const Player = (marker) => {
    const getMarker = () => marker;
    return { getMarker };
}

export const RandomAI = (marker) => {
    const { getMarker } = Player(marker);
    const getMove = (board) => {
        const empty = [];
        for (let i=0; i<board.length; i++) {
            if (board[i] === '') { empty.push(i); }
        }

        if (!empty.length) {
            return;
        }

        const rand = Math.floor(Math.random() * (empty.length - 1));
        return empty[rand];
    }

    return { getMarker, getMove };
}

export const UnbeatableAI = (marker) => {
    const { getMarker } = Player(marker);
    const getMove = (board) => {
        // didn't bother with minimax, just wanted structure that would allow it
    }
    return { getMarker, getMove };
}