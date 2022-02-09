import Gameboard from '../src/factories/Gameboard';
import Ship from '../src/factories/Ship';

describe('Gameboard functions', () => {
  let board;
  beforeEach(() => {
    board = Gameboard(8, 8);
  });

  test('Place valid ships', () => {
    board.placeShip([
      { x: 3, y: 4 },
      { x: 3, y: 5 },
      { x: 3, y: 6 },
    ]);

    board.placeShip([
      { x: 5, y: 2 },
      { x: 6, y: 2 },
      { x: 7, y: 2 },
    ]);

    expect(board.getShips().length).toBe(2);
  });

  test('Randomize ships', () => {
    board.placeRandomizedShips();
    expect(board.getShips().length).toBe(5);
  });

  test('Place off-board ships', () => {
    const position = [
      { x: 9, y: 2 },
      { x: 9, y: 2 },
      { x: 9, y: 2 },
    ];

    expect(board.placeShip(position)).toBe(false);
  });

  test('Place two ships in collision', () => {
    board.placeShip([
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ]);
    expect(
      board.placeShip([
        { x: 1, y: 1 },
        { x: 1, y: 2 },
      ])
    ).toBe(false);
  });

  test('Miss attack', () => {
    board.placeShip([
      { x: 0, y: 4 },
      { x: 1, y: 4 },
    ]);
    expect(board.receiveAttack(0, 5)).toBe(false);
  });

  test('Hit attack', () => {
    board.placeShip([
      { x: 0, y: 4 },
      { x: 1, y: 4 },
    ]);
    expect(board.receiveAttack(0, 4)).toBe(true);
  });

  test('Sink some but not all ships', () => {
    board.placeShip([
      { x: 0, y: 4 },
      { x: 1, y: 4 },
    ]);
    board.placeShip([
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ]);

    board.receiveAttack(0, 4);
    board.receiveAttack(1, 4);

    expect(board.isShipsSunk()).toBe(false);
  });

  test('Sink all ships', () => {
    board.placeShip([
      { x: 0, y: 4 },
      { x: 1, y: 4 },
    ]);
    board.placeShip([
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ]);

    board.receiveAttack(0, 4);
    board.receiveAttack(1, 4);
    board.receiveAttack(3, 2);
    board.receiveAttack(3, 3);
    board.receiveAttack(3, 4);

    expect(board.isShipsSunk()).toBe(true);
  });
});
