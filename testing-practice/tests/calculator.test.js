import calculator from '../src/calculator';

test('Add 3 and 6', () => {
  expect(calculator.add(3, 6)).toBe(9);
});

test('Subtract to negative', () => {
  expect(calculator.subtract(5, 7)).toBe(-2);
});

test('Multiply float', () => {
  expect(calculator.multiply(1.8, 2)).toBeCloseTo(3.6);
});

test('Divide 6 and 3', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('Divide by 0', () => {
  expect(calculator.divide(5, 0)).toBeNull();
});
