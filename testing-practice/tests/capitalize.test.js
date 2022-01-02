import capitalize from '../src/capitalize.js';

test('Capitalize a to A', () => {
  expect(capitalize('a')).toBe('A');
});

test('Capitalize arrr to Arrr', () => {
  expect(capitalize('arrr')).toBe('Arrr');
});

test('Dont change 1', () => {
  expect(capitalize('1')).toBe('1');
});

test('Empty string', () => {
  expect(capitalize('')).toBe('');
});
