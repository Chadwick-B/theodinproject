import calculator from './calculator';

test('Calculate 6 and 3', () => {
  const calc = calculator();
  expect(calc.add(6, 3)).toBe(9);
  expect(calc.subtract(6, 3)).toBe(3);
  expect(calc.multiply(6, 3)).toBe(18);
  expect(calc.divide(6, 3)).toBe(2);
});

test('Calculate 3.8 and 0.7', () => {
  const calc = calculator();
  expect(calc.add(5, 3)).toBe(8);
});

test('Calculate 0 and 3');
