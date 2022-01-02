import analyzeArray from '../src/analyzeArray';

test('Analyze [3, 1, 5, 3]', () => {
  expect(analyzeArray([3, 1, 5, 3])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 4,
  });
});

test('Analyze empty array', () => {
  expect(analyzeArray([])).toBeNull();
});
