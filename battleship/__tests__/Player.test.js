import Gameboard from '../src/factories/Gameboard';
import Player from '../src/factories/Player';

describe('Player functions', () => {
  let board, player;
  beforeEach(() => {
    board = Gameboard(8, 8);
    player = Player('Player 1');
  });

  test('Attacking board returns attack data', () => {
    board.placeShip([
      { x: 0, y: 5 },
      { x: 1, y: 5 },
    ]);

    expect(player.attackBoard(board, 0, 5)).toEqual({
      hit: true,
      vec: { x: 0, y: 5 },
    });
  });

  test('Attacking board shows proper history', () => {
    board.placeShip([
      { x: 0, y: 5 },
      { x: 1, y: 5 },
    ]);

    player.attackBoard(board, 0, 5);
    player.attackBoard(board, 3, 4);

    const data = player.getData();
    expect(data).toEqual({
      name: 'Player 1',
      history: [
        { hit: true, vec: { x: 0, y: 5 } },
        { hit: false, vec: { x: 3, y: 4 } },
      ].sort(),
      lastAttack: { hit: false, vec: { x: 3, y: 4 } },
    });
  });

  test('Invalid attack when attacking same position', () => {
    player.attackBoard(board, 0, 5);
    expect(player.attackBoard(board, 0, 5)).toBe(null);
  });

  test('AI Attack board', () => {
    expect(player.AIAttack(board)).not.toBeNull();
    player.AIAttack(board);

    const data = player.getData();
    expect(data.history.length).toBe(2);
  });
});
