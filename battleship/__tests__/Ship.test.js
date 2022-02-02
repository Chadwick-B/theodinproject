import Ship from '../src/factories/Ship';

describe('Ship functions', () => {
  let testShip;

  beforeEach(() => {
    testShip = Ship([
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
    ]);
  });

  test('Hit multiple', () => {
    testShip.hit(0, 2);
    testShip.hit(0, 3);

    expect(testShip.getHits().sort()).toEqual([
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ]);
  });

  test('Hit and not sunk', () => {
    testShip.hit(0, 3);
    expect(testShip.isSunk()).toBe(false);
  });

  test('Hit until sunk', () => {
    testShip.hit(0, 2);
    testShip.hit(0, 3);
    testShip.hit(0, 4);
    expect(testShip.isSunk()).toBe(true);
  });
});
