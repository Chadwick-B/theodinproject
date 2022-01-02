import reverseString from './reverseString';

test('Reverse beep to peeb', () => {
  expect(reverseString('beep')).toBe('peeb');
});

test('Reverse 123 to 321', () => {
  expect(reverseString('123')).toBe('321');
});

test('Reverse Ricky Bobby to ybboB ykciR', () => {
  expect(reverseString('Ricky Bobby')).toBe('ybboB ykciR');
});
